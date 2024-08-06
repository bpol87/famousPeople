import FamousPerson from "./FamousPerson.jsx"

function FamousPersonList(props) {

    return (
        <div>
            {props.peopleList.map((person) => {
                console.log('person is:',person)
                return (
                    <FamousPerson props={person} />
                )
            })}
        </div>
    )

}

export default FamousPersonList;