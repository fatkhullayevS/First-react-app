import "./hero.css"


const Hero = () => {
    return (
        <div className="container d-flex">
        <form className="d-flex w-50 " >
            <input className="form-control me-2 shadow-sm  bg-body" type="Search" placeholder="Search" />
            <button className="btn btn-outline-success">Search</button>
        </form>
        <select className="form-select w-25 shadow-sm  bg-body select" aria-label="Default select example">
        <option selected>Filter by Region</option>
        <option value="1">Africa</option>
        <option value="2">America</option>
        <option value="3">Asia</option>
        <option value="4">Europe</option>
        <option value="5">Oceania</option>
        </select>
        </div>
    )
}

export default Hero