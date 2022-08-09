import { Link } from "react-router-dom"

const Card = ({ item, theme }) => {

    return (
        <Link to={`name/${item.name.common}`} className="col-lg-3 text-decoration-none text-black ">
            <div className={`${theme} card card-style shadow bg-body rounded mb-5`}>
                <img src={item.flags.svg} />
                <div className="card-body link">
                    <h5>{item.name.common}</h5>
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                    <p>Capital: {item.capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card