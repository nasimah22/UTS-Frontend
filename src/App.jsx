import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import Card from "./components/Card";
// import ShowTable from "./components/ShowTable";
import Nav from "./components/Nav";
import ReactState from "./components/ReactState";
// import InputMhs from "./components/InputMhs";
import Form from "./components/Form";

//untuk komponen app.jsx kita masukkan seluruh data yang sudah kita import dari komponen sebelumnya

const listSepatu = [
  {
    gambar: "https://s3.bukalapak.com/uploads/content_attachment/383026aa10e8d762667223c5/w-740/7_Rekomendasi_Sneakers_Putih_yang_Bisa_Bikin_Kamu_Tampak_Elegan_-_FOTO_1_-_PYS_.jpg.webp",
    title: "Adidas",
    content:
      "Adidas adalah salah satu merk sepatu sport favorit para pria. Adidas Stan Smith bisa dibilang salah satu sneakers legendaris. Desain original model ini lebih dikenal dan digemari, yakni warna putih bersih dengan hijau ala Stan Smith di belakangnya. ",
  },
  {
    gambar: "https://s3.bukalapak.com/uploads/content_attachment/8df1b00810e8d762948223c5/w-740/2_Sepatu_Kanvas_Yang_Cocok_Untuk_Celana_Digulung_-_foto_Converse.jpg.webp",
    title: "Converse",
    content:
      "Converse adalah salah satu merk sepatu terkenal. Converse Chuck Taylor All-Stars adalah sepatu sejuta umat. Modelnya yang sederhana terbukti disukai banyak orang, bahkan tidak dari cuma kalangan sneakerhead. Namun kalau kamu bosan dengan Converse Chuck Taylor All-Stars yang terlalu sederhana, silakan coba Converse Jack Purcell.",
  },
  {
    gambar: "https://s0.bukalapak.com/uploads/content_attachment/0cb35caa10e8d762a56223c5/w-740/League_Sanchez_-_Grandstore_bukalapak.png.webp",
    title: "League",
    content:
      "Ada yang belum tahu kalau merk sepatu sneakers League itu adalah buatan Indonesia? Kabar baiknya lagi, desain dan kualitasnya tidak kalah dengan sneakers yang biasa terpampang di toko-toko sepatu Eropa. Salah satu varian yang keren dari League adalah League Sanchez La M. Sneakers yang sekilas mirip Reebok Classics.",
  },
  {
    gambar: "https://s4.bukalapak.com/uploads/content_attachment/4c3dec0810e8d762746223c5/w-740/Piero_Jogger_-_Piero_Indonesi_.jpg.webp",
    title: "Piero",
    content:
      "ari sekian banyak sepatu rilisan Piero, seri Jogger bisa dibilang menjadi yang paling menarik minat para kawula muda. Desainnya berkelas banget! Tidak kalah dengan kembarannya Newbalance 574 yang memang terkesan kembar identik.",
  },
  {
    gambar: "https://s3.bukalapak.com/uploads/content_attachment/868ef49a10e8d762ff6223c5/w-740/SEPATU_SLIP_ON_CASUAL_SUPERGA_COTU_BLACK_ORIGINAL.jpg.webp",
    title: "Superga",
    content:
      "Brand Superga tentu bukan nama asing buat kamu yang hobi mengoleksi sneakers. Merk sepatu ini terkenal dengan desainnya yang klasik dan penggunaan bahan-bahan berkualitas tinggi. Superga punya beragam jenis sneakers, termasuk edisi slip on.",
  },
  {
    gambar: "https://s3.bukalapak.com/uploads/content_attachment/363313a320e8d762a27223c5/w-740/5_Rekomendasi_Sneakers_Slip_On_-_FOTO_1_-_VANS_.jpg.webp",
    title: "Vans",
    content:
      "Sejarah sepatu Vans Checkerboard Slip-On dimulai pada 1977. Saat itu, Steve Van Doren, anaknya Paul Van Doren si pendiri Vans, melihat para skateboarder suka mewarnai bagian sol sepatunya dengan pola hitam-putih. Ia lalu punya ide untuk membuat motif tersebut juga, tetapi bukan di sol melainkan di bagian kanvasnya.",
  },
  
];
// buat const yang berisi file gambar yang akan dimasukkan ke dalam kerangka komponen card

function App() {
  return (
    <div>
      <Nav />
      <div className="container mb-4 mt-4">
          
      </div>
      <div className="container">
        <div className="row">
          {listSepatu.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card
                gambar={agt.gambar}
                title={agt.title}
                content={agt.content}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div className="container">
        <h2>State</h2>
        <ReactState />
      </div>
    </div>
  );
}
//kita ketik function untuk memasukkan elemen jsx seperti input nav dan card
//kemudian buat div classname yang berisi elemen jsx react
export default App;