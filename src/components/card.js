import German from "../images/germany.png"


const Card = ({ img, UserName, desc, Region, Capital }) => {
    return (

        <div className="col-3">
            <div className="card card-style shadow  bg-body rounded mb-5">
                <img src={img} />
                <div className="card-body">
                    <h5>{UserName}</h5>
                    <p>{desc}</p>
                    <p>{Region}</p>
                    <p>{Capital}</p>
                </div>
            </div>
        </div>
    )
}

export default Card