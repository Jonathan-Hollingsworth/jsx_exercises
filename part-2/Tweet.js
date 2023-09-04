const Tweet = (props) => {
    return (
        <section class="tweet">
            <b>{props.name}</b><p class="username">@{props.username}</p>
            <br />
            <time>{props.date}</time>
            <br />
            <p>{props.message}</p>
        </section>
    )
}