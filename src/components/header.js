import { useState } from "react"
import "./header.css"


// RENDER HEADER
const Header = ({ theme, setTheme }) => {

    return (
        <>
            <header className={` ${theme} header shadow-sm p-3 bg-body d-flex align-items-center`}>
                <div className="container">
                    <h1 className="fs-2 heading">Where in the world?</h1>
                    <select defaultValue={`${theme}`} className="select-mode" onChange={(evt) => {
                        setTheme(evt.target.value)
                    }}>
                        <option value="light">Light Mode</option>
                        <option value="dark">Dark Mode</option>
                    </select>
                </div>
            </header>
        </>
    )


}


export default Header