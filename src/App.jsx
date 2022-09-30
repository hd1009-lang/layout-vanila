import Home from './page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/work',
    element: <Home />,
  },
  {
    path: '/services',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
