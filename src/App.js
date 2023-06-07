import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState({});

  const handleInputChange = (event, aspek, mahasiswa) => {
    const { value } = event.target;
    setData(prevData => ({
      ...prevData,
      [aspek]: {
        ...prevData[aspek],
        [mahasiswa]: value
      }
    }));
  };

  const handleSave = () => {
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
  };

  const renderTableRows = () => {
    const mahasiswas = ['Mahasiswa 1', 'Mahasiswa 2', 'Mahasiswa 3', 'Mahasiswa 4', 'Mahasiswa 5', 'Mahasiswa 6', 'Mahasiswa 7', 'Mahasiswa 8', 'Mahasiswa 9', 'Mahasiswa 10'];
    const aspekPenilaian = ['Aspek Penilaian 1', 'Aspek Penilaian 2', 'Aspek Penilaian 3', 'Aspek Penilaian 4'];

    return mahasiswas.map(mahasiswa => (
      <tr key={mahasiswa}>
        <td>{mahasiswa}</td>
        {aspekPenilaian.map(aspek => (
          <td key={aspek}>
            <input
              type="number"
              name={mahasiswa}
              onChange={event => handleInputChange(event, aspek, mahasiswa)}
            />
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default App;
