import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(['data', 'nama']);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [nameEdit, setNameEdit] = useState();
  const [ageEdit, setAgeEdit] = useState();
  const [addressEdit, setAddressEdit] = useState();
  const [error, setError] = useState(null);

  const ErrorMessage = ({ message }) => {
    return <div className="error">{message}</div>;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://660faeb2356b87a55c520904.mockapi.io/users');
      setData(response.data);
      console.log('Data berhasil diambil:', data);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleClicks(id) {
    console.log(`ID kalian, ${id} data`);
    axios
      .delete(`https://660faeb2356b87a55c520904.mockapi.io/users/${id}`)
      .then(() => {
        console.log('Data berhasil dihapus');
        const newData = data.filter((user) => user.id !== id);
        setData(newData);
        fetchData(); // Reload data setelah menghapus
      })
      .catch((error) => {
        console.error('Gagal menghapus data:', error);
        setError(error.message);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', name + ' ' + age + ' ' + address);
    const userData = {
      name: name,
      age: age,
      address: address,
    };

    axios
      .post('https://660faeb2356b87a55c520904.mockapi.io/users', userData)
      .then(() => {
        console.log('Data berhasil ditambahkan');
        // lebih baik data ditambahkan lagi di dalam state lokal ketika data sudah tersimpan di API
        setData([...data, userData]);
        fetchData(); // Reload data setelah menambahkan
      })
      .catch((error) => {
        console.error('Gagal menambahkan data:', error);
        setError(error.message);
      });
  };

  function handleSubmitEdit(e, id) {
    e.preventDefault();
    console.log('click', nameEdit + ' ' + ageEdit + ' ' + addressEdit + ' ' + id);
    const userData = {
      name: nameEdit,
      age: ageEdit,
      address: addressEdit,
    };
    axios
      .put(`https://660faeb2356b87a55c520904.mockapi.io/users/${id}`, userData)
      .then(() => {
        console.log('Data berhasil diubah');
        fetchData(); // Reload data setelah mengubah
      })
      .catch((error) => {
        console.error('Gagal mengubah data:', error);
        setError(error.message);
      });
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Latihan Fetch Data dengan Library Axios</h1>

        <form onSubmit={handleSubmit} action="post" className="flex flex-col items-center">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs mb-2"
          />
          <input
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="number"
            placeholder="Age"
            className="input input-bordered w-full max-w-xs mb-2"
          />
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            type="text"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs mb-2"
          />
          <button className="btn btn-primary max-w-20">Add Data</button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {data.map((user, index) => {
            return (
              <div key={index} className="border p-4 rounded-lg">
                <h2 className="text-xl font-semibold">Card {index + 1}</h2>
                <div className="flex justify-end">
                  <button
                    className="btn btn-error mr-2"
                    onClick={() => {
                      handleClicks(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <p className="text-xl font-semibold">Name : {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Address: {user.address}</p>
                <img src={user.image} alt="" className="my-2 rounded-lg" />
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-semibold text-center mb-2">Edit Data</h2>
                  <form
                    onSubmit={(e) => {
                      handleSubmitEdit(e, user.id);
                    }}
                    className="flex flex-col items-center"
                  >
                    <input
                      onChange={(e) => {
                        setNameEdit(e.target.value);
                      }}
                      type="text"
                      placeholder="Name"
                      className="input input-bordered input-primary w-full max-w-xs my-2"
                    />
                    <input
                      onChange={(e) => {
                        setAgeEdit(e.target.value);
                      }}
                      type="number"
                      placeholder="Age"
                      className="input input-bordered input-primary w-full max-w-xs my-2"
                    />
                    <input
                      onChange={(e) => {
                        setAddressEdit(e.target.value);
                      }}
                      type="text"
                      placeholder="Address"
                      className="input input-bordered input-primary w-full max-w-xs my-2"
                    />
                    <button className="btn btn-primary my-2">Edit Data</button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
