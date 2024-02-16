import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import Login from './component/login';
import Home from './component/home';
import Signup from './component/signup';
import UserSettings from './user-settings/userSettings';
import FlappyBird from './games/flappy-bird/flappy-bird';
import VideoPlayer from './component/videoPlayer';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/settings',
        element: <UserSettings />,
      },
      {
        path: '/flappyBird',
        element: <FlappyBird />,
      },
      {
        path: '/videoPlayer',
        element: <VideoPlayer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
