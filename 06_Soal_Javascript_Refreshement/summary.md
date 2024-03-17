1. Pengertian JavaScript:
JavaScript adalah bahasa pemrograman tingkat tinggi yang secara dinamis diinterpretasikan. Biasanya digunakan untuk membuat halaman web interaktif dengan efek yang dinamis dan responsif. JavaScript memungkinkan pengembang web untuk menambahkan berbagai fitur, seperti validasi formulir, animasi, manipulasi elemen HTML, dan komunikasi dengan server web secara asynchronous.

2. Cara Pemakaian JavaScript:
JavaScript dapat digunakan dalam halaman web dengan cara berikut:

Menyisipkan di HTML: JavaScript dapat disisipkan langsung di dalam tag HTML dengan menggunakan elemen <script>. 
Contohnya:


<script>
</script>
File Eksternal: JavaScript juga dapat disimpan dalam file terpisah dengan ekstensi .js dan disisipkan di dalam halaman HTML menggunakan tag
<script> dengan atribut src. Contohnya:


<script src="script.js"></script>

3. JavaScript DOM (Document Object Model):
DOM adalah antarmuka pemrograman untuk dokumen HTML dan XML. Dalam konteks JavaScript, DOM memungkinkan pengaksesan, navigasi, dan manipulasi elemen HTML di dalam sebuah halaman web.

Contoh pemanfaatan JavaScript DOM untuk mengubah isi teks suatu elemen:


<!DOCTYPE html>
<html>
<head>
  <title>Contoh JavaScript DOM</title>
</head>
<body>

<h1 id="judul">Selamat Datang</h1>

<script>
  document.getElementById("judul").innerHTML = "Hello, World!";
</script>

</body>
</html>

4. Validasi dengan JavaScript:
Validasi formulir adalah teknik yang umum digunakan untuk memastikan bahwa data yang dimasukkan oleh pengguna sesuai dengan format atau persyaratan tertentu sebelum data tersebut dikirimkan ke server.

Contoh validasi sederhana untuk memastikan bahwa suatu input tidak kosong:

<!DOCTYPE html>
<html>
<head>
  <title>Validasi Form dengan JavaScript</title>
  <script>
    function validateForm() {
      var x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Nama harus diisi");
        return false;
      }
    }
  </script>
</head>
<body>

<h2>Formulir Contoh</h2>

<form name="myForm" onsubmit="return validateForm()" method="post">
  Nama: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

</body>
</html>

Kesimpulan:
JavaScript merupakan bahasa pemrograman yang penting dalam pengembangan web modern. Dengan JavaScript, pengembang dapat membuat halaman web yang lebih interaktif dan dinamis. Penggunaan JavaScript DOM memungkinkan manipulasi struktur dan konten halaman secara dinamis, sementara validasi JavaScript memastikan bahwa data yang dimasukkan oleh pengguna sesuai dengan persyaratan yang ditetapkan.