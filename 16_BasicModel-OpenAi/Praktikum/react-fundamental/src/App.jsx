import { useState } from "react";
import "./App.css";
import axios from "axios";


function ChatBubble({ content, position }) {
    return (
        <div className={`chat ${position}`}>
            <div className="chat-bubble bg-primary text-white">{content}</div>
        </div>
    );
}

function App() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [chatHistory, setChatHistory] = useState([]); // State untuk menyimpan riwayat percakapan
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    async function generateAnswer(e) {
        setGeneratingAnswer(true);
        e.preventDefault();

        // Menambahkan pesan dari pengguna ke riwayat percakapan
        setChatHistory((prevChat) => [
            ...prevChat,
            { content: question, fromUser: true },
        ]);

        // Menambahkan pesan tunggu ke riwayat percakapan
        setChatHistory((prevChat) => [
            ...prevChat,
            {
                content:
                    "Memuat jawaban Anda... \n Ini mungkin memakan waktu hingga 10 detik",
                fromUser: false,
            },
        ]);

        try {
            const promptAwal =
                "kamu adalah seorang customer service bernama Film AI, kamu bertugas memberikan rekomendasi judul film yang menarik di tahun 2024. Tanyakan apa yang ingin Anda tonton!";
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
                    import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
                }`,
                method: "post",
                data: {
                    contents: [
                        { parts: [{ text: `${promptAwal}\n${question}` }] },
                    ],
                },
            });

            const aiAnswer =
                response["data"]["candidates"][0]["content"]["parts"][0][
                    "text"
                ];

            // Menghapus pesan tunggu dari riwayat percakapan
            setChatHistory((prevChat) => prevChat.slice(0, -1));
            

            // Menambahkan jawaban AI ke riwayat percakapan
            setChatHistory((prevChat) => [
                ...prevChat,
                { content: aiAnswer, fromUser: false },
            ]);

            setAnswer(aiAnswer);
        } catch (error) {
            console.log(error);
            setAnswer("Maaf - Terjadi kesalahan. Silakan coba lagi!");
        }

        setQuestion("");
        setGeneratingAnswer(false);
    }

    return (
        <>
            <div className="bg-white h-screen p-3">
                <h1 className="text-3xl text-center mb-4">
                    Film AI - Q&A Rekomendasi Film di 2024
                </h1>
                <div className="chat-container">
                    {/* Menampilkan riwayat percakapan --> menggunakan TERNARY OPERATOR */}
                    {chatHistory.map((message, index) => (
                        <ChatBubble
                            key={index}
                            content={message.content}
                            position={
                                message.fromUser
                                    ? "chat chat-end"
                                    : "chat chat-start"
                            }
                        />
                    ))}
                </div>
                <form
                    onSubmit={generateAnswer}
                    className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 py-2"
                >
                    <textarea
                        required
                        className="border rounded w-11/12 my-2 min-h-fit p-3"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Tanyakan sesuatu"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
                        disabled={generatingAnswer}
                    >
                        Klik Untuk Menjawab
                    </button>
                </form>
            </div>
        </>
    );
}

export default App;