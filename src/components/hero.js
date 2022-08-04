import "./hero.css"

const Hero = ({ setValue, setSelect }) => {

    return (
        <div className="container d-flex">
            <form className="d-flex w-50">
                <input onChange={(evt) => setValue(evt.target.value)} className="form-control me-2 shadow-sm  bg-body" type="Search" placeholder="Search" />
                <button className="btn btn-outline-success">Search</button>
            </form>
            <select onChange={(evt) => setSelect(evt.target.value)} defaultValue="value" className="form-select w-25 shadow-sm  bg-body select" aria-label="Default select example">
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Hero