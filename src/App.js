import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Authorization from './Components/Authorization';
import Task from './Components/Task';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Authorization/>
    },
    {
      path: "/Task",
      element: <Task/>
    }
  ]
)

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
