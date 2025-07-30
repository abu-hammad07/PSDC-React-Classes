const Card = (props: {title: string, description: string}) => {

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card