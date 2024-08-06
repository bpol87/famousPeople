import { useState } from 'react';
import axios from 'axios';

function FamousPersonForm(props) {
    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');

    const addPerson = (event) => {
        event.preventDefault();
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
                props.fetchPeople();
            })
            .catch((error) => {
                console.log('Error:', error);
            })
    }
    return (
        <form onSubmit={addPerson}>
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" placeholder="Name" value={famousPersonName} onChange={e => setPersonName(e.target.value)} />
            <label htmlFor="role-input">Famous for:</label>
            <input id="role-input" placeholder="Role" value={famousPersonRole} onChange={e => setPersonRole(e.target.value)} />
            <button type="submit">Done</button>
        </form>
    )
}

export default FamousPersonForm;