import "./main.css"
// IMAGE IMPORT
import German from "../images/germany.png"
import Usa from "../images/usa.png"
import Brazil from "../images/brazil.png"
import Island from "../images/islandiya.png"
import Afgan from "../images/afgan.png"
import AlandIsland from "../images/aland-island.png"
import Albaniya from "../images/albaniya.png"
import Algeriya from "../images/algeriya.png"

// RENDER CARD
const Main = () => {
    return (
        <div className="container">
            <div className="row mt-5">

            <div className="col-3">
        <div className="card card-style shadow  bg-body rounded">
            <img src={German} />
        <div className="card-body">
        <h5>Germany</h5>
        <p>Population: 81,770,900</p>
        <p>Region: Europe</p>
        <p>Capital: Berlin</p>
        </div>
        </div>
        </div>

        <div className="col-3">
        <div className="card card-style shadow  bg-body rounded">
        <img src={Usa} />
        <div className="card-body">
        <h5>United States of America</h5>
        <p>Population: 323,947,000</p>
        <p>Region: Americas</p>
        <p>Capital: Washington, D.C.</p>
        </div>
        </div>
        </div>
        <div className="col-3">
        <div className="card card-style shadow  bg-body rounded">
        <img src={Brazil} />
        <div className="card-body">
        <h5>Brazil</h5>
        <p>Population: 206,135,893</p>
        <p>Region: Americas</p>
        <p>Capital: Brasília</p>
        </div>
        </div>
        </div>
        <div className="col-3">
        <div className="card card-style shadow  bg-body rounded">
        <img src={Island} />
        <div className="card-body">
        <h5>Iceland</h5>
        <p>Population: 334,300</p>
        <p>Region: Europe</p>
        <p>Capital: Reykjavík</p>
        </div>
        </div>
        </div>
        <div className="col-3 mt-5 mb-5">
        <div className="card card-style shadow  bg-body rounded">
        <img src={Afgan} />
        <div className="card-body">
        <h5>Afghanistan</h5>
        <p>Population: 27,657,145</p>
        <p>Region: Asia</p>
        <p>Capital: Kabul</p>
        </div>
        </div>
        </div>

        <div className="col-3 mt-5 mb-5">
        <div className="card card-style shadow  bg-body rounded">
        <img src={AlandIsland} />
        <div className="card-body">
        <h5>Åland Islands</h5>
        <p>Population: 28,875</p>
        <p>Region: Europe</p>
        <p>Capital: Mariehamn</p>
        </div>
        </div>
        </div>

        <div className="col-3 mt-5 mb-5">
        <div className="card card-style shadow  bg-body rounded">
        <img src={Albaniya} />
        <div className="card-body">
        <h5>Albania</h5>
        <p>Population: 2,886,026</p>
        <p>Region: Europe</p>
        <p>Capital: Tirana</p>
        </div>
        </div>
        </div>

        <div className="col-3 mt-5 mb-5">
        <div className="card card-style shadow  bg-body rounded">
        <img src={Algeriya} />
        <div className="card-body">
        <h5>Capital: Tirana</h5>
        <p>Population: 40,400,000</p>
        <p>Region: Africa</p>
        <p>Capital: Algiers</p>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Main