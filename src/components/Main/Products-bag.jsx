import Bag2 from "../../assets/bag_2.png";

function ProductsBag (props) {
    console.log(props)
    return (
        <>
            <article>
                <span>{props.productBestSell}</span>
                <img src={props.img}/>
                <p>{props.productDescription}</p>
                <h4>{props.productPrice}</h4>
            </article>
        </>
    )
}

export default ProductsBag