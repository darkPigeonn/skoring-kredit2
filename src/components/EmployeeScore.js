import React, { useState } from 'react';
import { firestore } from '../firebases';

const EmployeeScore = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [score, setScore] = useState('');

  const handleSaveScore = async (e) => {
    e.preventDefault();

    try {
      await firestore.collection('employeeScores').add({
        employeeName,
        score: parseInt(score, 10),
        timestamp: new Date(),
      });
      console.log('Skor berhasil disimpan!');
    } catch (error) {
      console.error('Gagal menyimpan skor:', error);
    }
  };

  return (
    <div>
      <h2>Form Skor Pegawai</h2>
      <form onSubmit={handleSaveScore}>
        <label>
          Nama Pegawai:
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Skor:
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Simpan Skor</button>
      </form>
    </div>
  );
};

export default EmployeeScore;