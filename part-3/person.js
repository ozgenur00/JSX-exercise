function Person({ age, hobbies, name }) {
    const votingText = age >= 18 ? "Go Vote!" : "Go study"

    const hobbiesLis = hobbies.map(hobby => <li>{hobby}</li>)

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age {age}</li>
            <ul>
            Hobbies:
            {hobbiesLis}
            </ul>
        </ul>
        <h3>{votingText}</h3>
        </div>
    )
}