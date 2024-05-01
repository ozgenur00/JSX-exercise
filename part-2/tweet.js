function Tweet({ username, name, date, message }) {
    return (
        <div className="tweet">
            <h4>{name} (@{username})</h4>
            <p>{message}</p>
            <span>{date}</span>
        </div>
    )
}