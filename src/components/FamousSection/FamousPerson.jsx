function FamousPerson(props) {
console.log('props is:',props)
    return (
        <div
            key={props.props.id}>
            {props.props.name} is famous for {props.props.role}.
        </div>
    )
}

export default FamousPerson;