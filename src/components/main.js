import "./main.css"
import Card from "./card"
// IMAGE IMPORT
import Usa from "../images/usa.png"
import Brazil from "../images/brazil.png"
import Island from "../images/islandiya.png"
import Afgan from "../images/afgan.png"
import AlandIsland from "../images/aland-island.png"
import Albaniya from "../images/albaniya.png"
import Algeriya from "../images/algeriya.png"
import German from "../images/germany.png"

// RENDER CARD
const Main = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <Card Capital="Capital: Berlin" Region="Region: Europe" desc="Population: 81,770,900" UserName="Germany" img={German} />
                <Card Capital="Capital: Washington, D.C." Region="Region: Americas" desc="Population: 206,135,893" UserName="Brazil" img={Usa} />
                <Card Capital="Capital: Brasília" Region="Region: Europe" desc="Population: 334,300" UserName="Iceland" img={Brazil} />
                <Card Capital="Capital: Reykjavík" Region="Region: Asia" desc="Population: 27,657,145" UserName="Afghanistan" img={Island} />
                <Card Capital="Capital: Kabul" Region="Region: Europe" desc="Population: 28,875" UserName="Åland Islands" img={Afgan} />
                <Card Capital="Capital: Mariehamn" Region="Region: Europe" desc="Population: 2,886,026" UserName="Albania" img={AlandIsland} />
                <Card Capital="Capital: Tirana" Region="Region: Africa" desc="Population: 40,400,000" UserName="Algeria" img={Albaniya} />
                <Card Capital="Capital: Tirana" Region="Region: Africa" desc="Population: 40,400,000" UserName="Algeria" img={Algeriya} />
            </div>
        </div>
    )
}

export default Main