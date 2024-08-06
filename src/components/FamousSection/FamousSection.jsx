import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';

function FamousSection() {
  useEffect(() => {
    fetchPeople();
  }, [])

  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  const fetchPeople = () => {
   axios({
      method: 'GET',
      url: '/api/people'
    })
      .then((response) => {
        setPeopleArray(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      })
  }

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    axios({
      method: 'POST',
      url: '/api/people',
      data: {
        name: famousPersonName,
        role: famousPersonRole
      }
    })
      .then((response) => {
        setPersonName('');
        setPersonRole('');
        // Let's fetch the data again and update the React state:
        fetchPeople();
      })
      .catch((error) => {
        console.log('Error:', error);
      })

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" placeholder="Name" value={famousPersonName} onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" placeholder="Role" value={famousPersonRole} onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <ul>
        {famousPeopleArray.map((person) => {
          return (
            <li
              key={person.id}>
              {person.name} is famous for {person.role}.
            </li>
          )})}
        </ul>
      </section>
    );
}

export default FamousSection;
