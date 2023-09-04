const Person = (props) => {
    return (
        <div>
            <h2>{props.name.length > 8 ? props.name.slice(0,6) : props.name}</h2>
            <p>Learn some information about this person</p>
            <b>Age: {props.age}</b>
            <h3>{props.age >= 18? "please go vote!" : "you must be 18"}</h3>
            <b>Hobbies:</b>
            <ul>{props.hobbies.map(h => <li id={props.hobbies.indexOf(h) + 1}>{h}</li>)}</ul>
        </div>
    )
}