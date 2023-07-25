import React, {useEffect, useState} from 'react'


export default function Ticket() {
    const {tickets, setTickets} = useState([])
    
    const fetchTickets = () =>{
        fetch('http://localhost:3001/api/getLastTicket')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setTickets(data)
        })
        .catch(err=> console.log('Error: ',err))
    }
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Your Ticket!</h1>
      <table>
      <thead>
          <tr>
            <th>Ticket Number</th>
            <th>Flight Number</th>
            <th>Customer Number</th>
        </tr>
      </thead>
      <tbody>
        <td>{tickets.id}</td>
        <td>{tickets.flight_id}</td>
        <td>{tickets.customer_id}</td>
      </tbody>
      </table>
    </div>
  )
}
