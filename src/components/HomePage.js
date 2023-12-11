// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex h-screen bg-blue-500">
      {/* Skoring Kelayakan Kredit (1/4) */}
      <div className="w-1/4 mx-4 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Skoring Kelayakan Kredit</h2>
        <p className="text-black">
          Gunakan bagian ini untuk melakukan skoring kelayakan kredit. Masukkan informasi yang diperlukan dan peroleh skor kelayakan kredit.
        </p>

        {/* Tombol-tombol */}
        <div className="mt-8 flex flex-col">
          <Link to="/enggine" className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600">
            Enggine
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600">
            Prinsip Penilaian
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600">
            Kelayakan Agunan
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            5C & 7P
          </button>
        </div>
      </div>

      {/* Bagian 3/4 */}
      <div className="w-3/4 p-8 text-white flex flex-col items-center justify-center">
        {/* Tulisan berada di tengah */}
        <h1 className="text-4xl font-bold mb-4">
          Penilaian Kelayakan Usaha dengan Metoda Scoring
        </h1>
        <p className="text-lg mb-4">
          Selamat datang di aplikasi penilaian kelayakan usaha menggunakan metoda scoring. Gunakan formulir di halaman berikut untuk memasukkan skor pegawai.
        </p>
        <Link to="/score" className="text-blue-500 hover:underline">Form Skor Pegawai</Link>
      </div>
    </div>
  );
};

export default HomePage;
