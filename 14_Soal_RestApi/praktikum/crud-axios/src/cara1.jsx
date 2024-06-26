import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(['data', 'nama']);

  const fetchData = async () => {
    const response = await axios.get('https://660faeb2356b87a55c520904.mockapi.io/users');
    setData(response.data);
    console.log('function di panggil', response);
  };

  useEffect(() => {
    // const response = axios.get("https://660faeb2356b87a55c520904.mockapi.io/users");
    // console.log(response);
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Fetch Data with Axios</h1>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <img src={user.image} alt="" className="mb-5" />
          </div>
        );
      })}
    </>
  );
}

export default App;
