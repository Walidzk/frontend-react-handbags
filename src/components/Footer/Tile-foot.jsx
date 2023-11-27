function TileFoot (props) {
    console.log(props)
    return (
        <>
            <section>
                {props.children}
                <h2>{props.productTitle}</h2>
                <p>{props.productDescription}</p>
            </section>

        </>
    )
}

export default TileFoot