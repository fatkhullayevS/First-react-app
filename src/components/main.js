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

// RENDER CARD
const Main = () => {
    return (
        <div className="container mt-5">
        <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
    )
}

export default Main