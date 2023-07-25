import React, {useState, useEffect} from 'react'
import './AddCustomer.css'
import { Link } from 'react-router-dom';
export default function AddCustomer() {

    const [addCustomer, setAddCustomer] = useState([]);

    const fetchAddCustomer = () => {
    fetch('http://localhost:3001/api/addCustomer')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAddCustomer(data);
      })
      .catch(err => console.log('Error: ', err));
  };

  useEffect(() => {
    fetchAddCustomer();
  }, []);




    const handleSubmit = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        //get form data
        const formData = new FormData(event.target) 
        //Convert form data to a JSON obj
        const customerData = {}
        formData.forEach((value,key) => {
        customerData[key] = value;
        })
    
         // Send the POST request to add the customer
        fetch('http://localhost:3001/api/addCustomer', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(customerData)
        })
        .then(response => response.json())
        .then(data => {
        console.log('New Customer Added : ', data);
        })
        .catch(err => console.log('Error: ', err))
    }
    const handleSaveCustomerId = (CustomerId) =>{
        localStorage.setItem('NewCustomerId', CustomerId);
    }
  return (
    <>
    <div className="container">
      <div className="form-container">
        <h1>Add Customer</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname" required />

          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <label htmlFor="phone_no">Phone Number:</label>
          <input type="text" id="phone_no" name="phone_no" required />

          <label htmlFor="credit_card_no">Credit Card Number:</label>
          <input type="text" id="credit_card_no" name="credit_card_no" required />

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
            <Link to='/Ticket'>
          <button type="submit" onClick={handleSaveCustomerId}>Submit</button>
          </Link>
        </form>
      </div>
    </div>
    </>
  )
}
