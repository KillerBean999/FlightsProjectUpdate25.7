import React from 'react';

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Flights from './components/DB/Flights/Flights';
import Home from './components/Home/Home'
import AddCustomer from './components/AddCustomer/AddCustomer';
import Ticket from './components/Ticket/Ticket';

const router = createBrowserRouter ([
    {
      path: "/",
      element: <Root/>, children: [
  {
    path: '/',
    element: <div><Home/></div>
  },
    {
    path: '/flights',
    element: <div><Flights/></div>
  },
  {
    path:'/addCustomer',
    element: <div><AddCustomer/></div>
  },
  {
    path:'/Ticket',
    element: <div><Ticket/></div>
  }

]

  }
])


function App() {


  return (
    <div className='App'>
     <RouterProvider router = {router} />
    </div>
  );
}

export default App;
