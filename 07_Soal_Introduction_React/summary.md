Pendahuluan

React merupakan sebuah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif. Dikembangkan oleh Facebook, React memungkinkan pengembang untuk membuat aplikasi web yang efisien, cepat, dan mudah dikelola.

Pengertian React

React adalah sebuah library JavaScript yang digunakan untuk membangun antarmuka pengguna. Pendekatan utama dalam pengembangan dengan React adalah penggunaan komponen-komponen UI yang dapat diatur hierarkis. Setiap komponen dapat memiliki state sendiri, dan perubahan dalam state tersebut akan menyebabkan perubahan pada tampilan UI. React menggunakan Virtual DOM untuk meningkatkan kinerja aplikasi dengan cara meminimalkan manipulasi langsung pada DOM.

Cara Penginstalan React

Berikut adalah langkah-langkah untuk menginstal React menggunakan npm (Node Package Manager):

1. Instal Node.js dan npm

Pastikan Anda telah menginstal Node.js dan npm pada sistem Anda. Node.js bisa diunduh dan diinstal dari situs resmi mereka: nodejs.org.

2. Buat Proyek Baru

Buka terminal atau command prompt, lalu buat folder untuk proyek React Anda dan masuk ke dalamnya.

mkdir nama_proyek
cd nama_proyek


3. Inisialisasi Proyek dengan npm

Jalankan perintah npm init untuk membuat file package.json, yang akan menyimpan daftar dependensi proyek Anda.

npm init -y

4. Instal React dan ReactDOM

Jalankan perintah berikut untuk menginstal React dan ReactDOM dalam proyek Anda.

npm install react react-dom

5. Buat File HTML

Buat file HTML di dalam folder proyek Anda. Misalnya, index.html.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="dist/bundle.js"></script>
</body>
</html>

6. Buat dan Konfigurasi Webpack (Opsional)

Jika Anda ingin menggunakan Webpack untuk mengelola proyek React Anda, Anda harus menginstal Webpack dan beberapa loader yang diperlukan. Ini adalah langkah opsional, namun sangat disarankan untuk proyek-proyek React yang lebih besar.

7. Buat Komponen React Pertama

Buat file JavaScript di dalam proyek Anda, misalnya app.js, dan tulis kode untuk komponen React pertama Anda.

// app.js
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Hello, React!</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

8. Bundle JavaScript

Jika Anda menggunakan Webpack, jalankan perintah untuk menghasilkan bundle JavaScript.

9. Jalankan Aplikasi

Buka file HTML yang telah Anda buat dalam browser, dan Anda akan melihat aplikasi React Anda berjalan.

Kesimpulan

React adalah pustaka JavaScript yang kuat untuk membangun antarmuka pengguna yang interaktif. Dengan mengikuti langkah-langkah instalasi yang tepat, Anda dapat mulai mengembangkan aplikasi React Anda sendiri dengan cepat dan efisien. Semoga laporan ini bermanfaat untuk memahami pengertian React dan cara penginstalannya.