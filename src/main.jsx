import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import NotFoundPage from './pages/404';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,

  },
  {
    path: '/contact',
    element: <ContactPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
