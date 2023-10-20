import { useState } from 'react';
import { allUsers } from '../service/loginService';
import { Button } from '@mui/material';
// import Games from './games';

const Home = () => {
  const [data, setData] = useState([] as any[]);
  const [tables, setTables] = useState(false);

  const handleTable = () => {
    setTables(true);
    allUsers()
      .then((resp) => {
        const response: any[] = resp.data;
        const respObj: any[] = [];
        response.forEach((r) => {
          respObj.push({
            email: r.email,
            username: `${r.firstName} ${r.lastName}`,
            phoneNumber: r.phoneNumber,
          });
        });
        setData([...respObj]);
      })
      .catch((err) => alert('err' + err));
  };

  return (
    <div>
      <Button onClick={handleTable}>Add Table</Button>
      <Button
        onClick={() => {
          setTables(false);
        }}>
        Remove Table
      </Button>
      {tables && (
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>email</th>
              <th>phoneNumber</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* <div>
        <Games id={2} color={'black'} />
      </div> */}
    </div>
  );
};

export default Home;
