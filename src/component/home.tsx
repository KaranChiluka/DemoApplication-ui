import { useEffect, useState } from 'react';
import NavBar from '../common/navBar';
import { allUsers } from '../service/loginService';

const Home = () => {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    allUsers()
      .then((resp) => setData(resp.data))
      .catch((err) => alert('err' + err));
  });

  return (
    <div>
      <NavBar />
      <div>
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
                <td>{data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
