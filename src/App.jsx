import './App.css'
import ButtonNav from "./components/Header/Button-nav.jsx";
import ProductsBag from "./components/Main/Products-bag.jsx";
import Bag1 from "./assets/bag_1.png"
import Bag2 from "./assets/bag_2.png"
import Bag3 from "./assets/bag_3.png"
import Bag4 from "./assets/bag_4.png"
import Brand from "./assets/brand.png"
import OurStory from "./assets/our_story.png"
import TileFoot from "./components/Footer/Tile-foot.jsx";

function App() {
    return (
        <>
            <header>
                <h1>Handbags & Purses</h1>
                <ButtonNav title="to the collection"/>
                <ButtonNav title="shop all bags"/>
                <ButtonNav title="pre-orders" disabled/>
            </header>
            <main>
                <ProductsBag
                productBestSell="Best seller"
                img={Bag1}
                productDescription="The handy bag"
                productPrice="€400,-"
                />
                <ProductsBag
                    productBestSell="Best seller"
                    img={Bag2}
                    productDescription="The stylish bag"
                    productPrice="€250,-"
                />
                <ProductsBag
                    productBestSell="New collection"
                    img={Bag3}
                    productDescription="The simple bag"
                    productPrice="€300,-"
                />
                <ProductsBag
                    productBestSell="New collection"
                    img={Bag4}
                    productDescription="The trendy bag"
                    productPrice="€150,-"
                />
            </main>
            <footer>
                    <TileFoot><img src={Brand} alt="brand-picture"/></TileFoot>
                    <TileFoot
                    productTitle="The brand"
                    productDescription="LLorem ipsum dolor sit amet. A quis dolorem et dolorum consequuntur est consequatur dolor. Non
                        laboriosam error cum assumenda porro 33 voluptate necessitatibus est temporibus tenetur. Sit
                        At provident obcaecati sed placeat aliquam sit voluptatum dolorem et natus animi. Et reiciendis."
                    />
                <TileFoot
                    productTitle="Our story"
                    productDescription="LLorem ipsum dolor sit amet. A quis dolorem et dolorum consequuntur est consequatur dolor. Non
                        laboriosam error cum assumenda porro 33 voluptate necessitatibus est temporibus tenetur. Sit
                        At provident obcaecati sed placeat aliquam sit voluptatum dolorem et natus animi. Et reiciendis."
                />
                <TileFoot><img src={OurStory} alt="our-story-picture"/></TileFoot>
            </footer>
        </>
    )
}


export default App
