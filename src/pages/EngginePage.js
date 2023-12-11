// src/pages/EngginePage.js
import React, { useState } from 'react';

const EngginePage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [companyName, setCompanyName] = useState('Nama Perusahaan ABC'); // Ganti dengan nama perusahaan yang sesuai
  const [applicantName, setApplicantName] = useState('Nama Pemohon'); // Ganti dengan nama pemohon yang sesuai

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan selectedOption, misalnya kirim ke server
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Halaman Enggine</h1>

      {/* Bagian Atas */}
      <div className="mb-4">
        <p className="text-lg font-bold">Nama Perusahaan: {companyName}</p>
        <p className="text-lg font-bold">Nama Pemohon: {applicantName}</p>
      </div>

      {/* Form Pilihan */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-2">
          <label className="block mb-2">
            <input
              type="radio"
              value="optionA"
              checked={selectedOption === 'optionA'}
              onChange={handleOptionChange}
              className="hidden"
            />
            <button
              type="button"
              className={`bg-blue-500 text-white px-4 py-2 rounded w-full ${
                selectedOption === 'optionA' ? 'bg-blue-600' : ''
              }`}
              onClick={() => setSelectedOption('optionA')}
            >
              Option A
            </button>
          </label>
        </div>
        <div className="mb-2">
          <label className="block mb-2">
            <input
              type="radio"
              value="optionB"
              checked={selectedOption === 'optionB'}
              onChange={handleOptionChange}
              className="hidden"
            />
            <button
              type="button"
              className={`bg-blue-500 text-white px-4 py-2 rounded w-full ${
                selectedOption === 'optionB' ? 'bg-blue-600' : ''
              }`}
              onClick={() => setSelectedOption('optionB')}
            >
              Option B
            </button>
          </label>
        </div>
        <div className="mb-2">
          <label className="block mb-2">
            <input
              type="radio"
              value="optionC"
              checked={selectedOption === 'optionC'}
              onChange={handleOptionChange}
              className="hidden"
            />
            <button
              type="button"
              className={`bg-blue-500 text-white px-4 py-2 rounded w-full ${
                selectedOption === 'optionC' ? 'bg-blue-600' : ''
              }`}
              onClick={() => setSelectedOption('optionC')}
            >
              Option C
            </button>
          </label>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EngginePage;
