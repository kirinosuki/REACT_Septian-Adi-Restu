import Navbar from "./components/Navbar";
import "./assets/css/style.css";
import styles from "./assets/css/styles.module.css";

function HeroSection() {
  return <div>HeroSection</div>;
}

export default function App() {
  let user = "muchson1"; // kalo pengin berubah harus menggunakan State
  let warna = "red";

  if (user === "muchson") {
    return <div>{user}</div>;
  }

  function tampil() {
    console.log("halo tampil");
    warna = "grey";
    console.log("setelah dirubah warna" + warna);
  }

  const namaAnakKelas = ["muchson", "daffa", "nabraska", "lativa"];
  const handleChangeUsername = () => {
    console.log("hallo username");
  }

   const handleChangePassword = (event) => {
    console.log(event.target.value);
    console.log("hallo username");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("hallo submit");
    console.log(event.target[0].value);
  }

  return (
    <div>
      {namaAnakKelas.map((nama, index) => (
        // import global css
        // return <p className="red">{nama}</p>
        // import module css
        // return <p className={styles.blue}>{nama}</p>
        // import inline css
        <p key={index} style={{ color: warna }}>{nama}</p>
      ))}

      <div>Halaman Div</div>

      <h1 onMouseEnter={tampil} style={{ color: warna }}>Tag H1</h1>

      <HeroSection />

      <Navbar nama={"john"} />

      {/* Form Input */}
      <input placeholder="username" type="text" onChange={handleChangeUsername}/>
      <input placeholder="username" type="text" onChange={(e) => console.log(e.target.value)}/>
           <input placeholder="username" type="password" onChange={handleChangePassword}/>


      {/* Form Submit */}
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>


      <button onClick={tampil} className={styles.blue}>
        {user === "muchson" ? "benar" : "salah"}
      </button>

      {/* mouse in dan mouse out */}
      <p onMouseEnter={mouseIn}>Coba di hover </p>
      <p onMouseEnter={mouseOut}>Coba di hover </p>
    </div>
  );
}