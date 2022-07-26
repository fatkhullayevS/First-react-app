import "./header.css"

// RENDER HEADER
const Header = () => {
    return(
        <header className="shadow-sm p-3 mb-5 bg-body rounded container d-flex align-items-center">
            <h1 className="fs-2">Where in the world?</h1>
            <p className=" header-desc mt-3">Dark Mode</p>
        </header>
    )
}

export default Header