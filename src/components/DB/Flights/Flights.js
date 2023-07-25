import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './flights.css'

export default function Flights() {
  const [flightsDB, setFlightsDB] = useState([]); 
  const [airlineCompanies, setAirlineCompanies] = useState([]);
//   const [countries, setCountries] = useState([]);


const handleBookFlight = (flightId) =>{
  localStorage.setItem('SelectedFlightId', flightId);
}



  const fetchFlightsDB = () => {
    fetch('http://localhost:3001/api/getAllFlights')
      .then(response => response.json())
      .then(data => {
          console.log('Flights Data: ',data);
          setFlightsDB(data);
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  };



  const fetchAirlineCompaniesDB = () => {
    fetch('http://localhost:3000/api/getAllAirlineCompanies')
    .then(response => response.json())
    .then(data => {
        console.log('Airline Data: ',data);
        setAirlineCompanies(data)
    })
    .catch(err => console.log('Error: ',err))
  }

  
//   const fetchCountriesDB = () =>{
//     fetch('http://localhost:3001/api/getAllCountries')
//     .then(response => response.json())
//     .then(data => {
//         console.log('Countries Data: ',data);
//         setCountries(data)
//     })
//     .catch(err=> console.log('Error: ', err))
//   }



    useEffect(fetchFlightsDB,
            fetchAirlineCompaniesDB,
               
            []);
            

 const getAirlineName = (airlineId) => {
  const airline = airlineCompanies.find(company => company.id === airlineId);
  return airline ? airline.airline_name : "Unknown Airline";
};


//       const getCountryName = (countryId) => {
//         const country = countries.find
//             (country => country.id === countryId);
//     return country ? country.country_name : 'Unknown Country';
//   };

  return (
    <div className="flights-container">
      <h1 className="flights-heading">Flights List</h1>
      <table className="flight-table">
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Airline ID</th>
            <th>Origin Country ID</th>
            <th>Destination Country ID</th>
            <th>Departure Time</th>
            <th>Landing Time</th>
            <th>Tickets</th>
            <th>Book Flight</th>
          </tr>
        </thead>
        <tbody>
          {flightsDB.map(flight => (
            <tr key={flight.id} className="flight-item">
              <td>{flight.id}</td>
              <td>{getAirlineName(flight.airline_company_id)}</td>
              <td>{flight.origin_country_id}</td>
              <td>{flight.destination_country_id}</td>
              <td>{flight.departure_time}</td>
              <td>{flight.landing_time}</td>
              <td>{flight.remaining_tickets}</td>
              <td>
                <Link to="/addCustomer"
                 className="book-btn"
                 onClick={() => handleBookFlight(flight.id)}>
                  Book
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
