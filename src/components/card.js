import German from "../images/germany.png"


const Card = () => {
    return (

            <div className="col-3">
        <div className="card card-style shadow  bg-body rounded mb-5">
            <img src={German} />
        <div className="card-body">
        <h5>Germany</h5>
        <p>Population: 81,770,900</p>
        <p>Region: Europe</p>
        <p>Capital: Berlin</p>
        </div>
        </div>
        </div>
    )
}

export default Card