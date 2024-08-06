import { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';
import FamousPersonForm from './FamousPersonForm.jsx';
import FamousPersonList from './FamousPersonList.jsx';


function FamousSection() {

  useEffect(() => {
    fetchPeople();
  }, [])


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

  return (
    <section className="new-person-section">
      <FamousPersonForm fetchPeople={fetchPeople} />
      <FamousPersonList peopleList={famousPeopleArray} />
    </section>
  );
}

export default FamousSection;
