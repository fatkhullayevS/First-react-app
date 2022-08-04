import { Link } from "react-router-dom"
import './render-posts.css'

const RenderPosts = ({ item }) => {
    return (
        <>
            <Link className="container shadow p-3 bg-body rounded text-decoration-none" to="/"><i class="fa-solid fa-arrow-left me-2"></i>Back</Link>
            <div className="col-5 flag">
                <img className="rounded" src={item.flags.svg} alt="" width="559" height="483" />
            </div>
            <div className="col-7">
                <div className="row">
                    <div className="col-6 left">
                        <h3 >{item.name.common}</h3>
                        <p>Native Name: <strong> {item.name.official}</strong></p>
                        <p>Population: <strong> {item.population}</strong></p>
                        <p>Region: <strong> {item.region}</strong></p>
                        <p>Sub Region: <strong> {item.subregion}</strong></p>
                        <p>Capital: <strong> {item.capital}</strong></p>
                    </div>
                    <div className="col-6 right">
                        <p>Top Level domain: <strong> {item.tld}</strong></p>
                        <p>Currencies: <strong> {item.currencies.EUR}</strong></p>
                        <p>languages: <strong> {item.languages.deu}</strong></p>
                    </div>
                    <div className="d-flex ms-5 mt-3">
                        <p>Border Countries: <span>Chegaradosh davlatlar keltirilmagan😭😭</span></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RenderPosts