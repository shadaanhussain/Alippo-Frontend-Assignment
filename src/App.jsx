import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Delete from './Components/Delete';

function App() {
  const [data, setData] = useState([
    {
      "name": "John Doe",
      "age": 28,
      "city": "New York",
      "pinCode": "10001"
      },
      {
      "name": "Alice Smith",
      "age": 32,
      "city": "Los Angeles",
      "pinCode": null
      },
      {
      "name": "Bob Johnson",
      "age": 24,
      "city": "Chicago",
      "pinCode": "60601"
      },
      {
      "name": null,
      "age": 30,
      "city": "San Francisco",
      "pinCode": "94101"
      },
      {
      "name": "Sarah Brown",
      "age": 22,
      "city": "Miami",
      "pinCode": "33101"
      },
      {
      "name": "David Wilson",
      "age": 35,
      "city": "Houston",
      "pinCode": "77001"
      },
      {
      "name": "Emily Davis",
      "age": 29,
      "city": "Boston",
      "pinCode": "02201"
      },
      {
      "name": "Michael Lee",
      "age": 27,
      "city": "Seattle",
      "pinCode": "98101"
      },
      {
      "name": "Linda Martinez",
      "age": 31,
      "city": "Dallas",
      "pinCode": "75201"
      },
      {
      "name": "William Johnson",
      "age": 26,
      "city": "Phoenix",
      "pinCode": "85001"
      },
      {
      "name": null,
      "age": 33,
      "city": "Philadelphia",
      "pinCode": "19101"
      },
      {
      "name": "Megan Harris",
      "age": 25,
      "city": "San Diego",
      "pinCode": "92101"
      },
      {
      "name": "Richard Taylor",
      "age": 28,
      "city": "Denver",
      "pinCode": "80201"
      },
      {
      "name": "Sophia Clark",
      "age": 29,
      "city": "Atlanta",
      "pinCode": "30301"
      },
      {
      "name": "Kevin White",
      "age": 27,
      "city": "Las Vegas",
      "pinCode": "89101"
      },
      {
      "name": "Ava Turner",
      "age": 30,
      "city": "Detroit",
      "pinCode": "48201"
      },
      {
      "name": "Thomas Hall",
      "age": 32,
      "city": "Minneapolis",
      "pinCode": "55401"
      },
      {
      "name": "Olivia Allen",
      "age": 23,
      "city": "San Antonio",
      "pinCode": "78201"
      },
      {
      "name": "Daniel Martin",
      "age": 26,
      "city": "Portland",
      "pinCode": "97201"
      },
      {
      "name": "Ella Walker",
      "age": 34,
      "city": "Orlando",
      "pinCode": "32801"
      },
      {
      "name": "James Turner",
      "age": 27,
      "city": "Raleigh",
      "pinCode": "27601"
      },
      {
      "name": "Grace Scott",
      "age": 28,
      "city": "Nashville",
      "pinCode": "37201"
      },
      {
      "name": "Joseph Harris",
      "age": 31,
      "city": "Kansas City",
      "pinCode": "64101"
      },
      {
      "name": "Emma Nelson",
      "age": 25,
      "city": "St. Louis",
      "pinCode": "63101"
      },
      {
      "name": "Christopher Garcia",
      "age": 30,
      "city": "Tampa",
      "pinCode": "33601"
      },
      {
      "name": "Avery King",
      "age": 29,
      "city": "Cleveland",
      "pinCode": "44101"
      },
      {
      "name": "Sophia Turner",
      "age": 28,
      "city": "Austin",
      "pinCode": "78701"
      },
      {
      "name": "Ethan Wright",
      "age": 24,
      "city": "San Jose",
      "pinCode": "95101"
      },
      {
      "name": "Olivia Miller",
      "age": 33,
      "city": "Salt Lake City",
      "pinCode": "84101"
      }
  ]);
  return (
    <Router>
      <div className="container">
      
      <Routes>
      <Route exact path="/" element={ <Home data={data} setData={setData} />} />
      <Route path="/edit/:index" element={<Edit data={data} setData={setData} />} />
      <Route path="/delete/:index" element={<Delete data={data} setData={setData} />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
