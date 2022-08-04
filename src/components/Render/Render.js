import Header from "../header";
import { useState, useEffect } from "react"
import Hero from "../hero"
import Card from "../card"
import './render.css'
import Infinity from "../../images/Infinity.svg"

const Render = () => {
    const [value, setValue] = useState("")
    const [select, setSelect] = useState("")
    const [countries, setCountries] = useState({
        isLoading: true,
        isError: false,
        data: {}
    })

    // RENDER FETCH
    useEffect(() => {
        if (value.length) {
            fetch(`https://restcountries.com/v3.1/name/${value}`)
                .then((res) => res.json())
                .then((data) => setCountries({
                    ...countries,
                    isLoading: false,
                    data: data
                }))
                .catch((err) => setCountries({
                    ...countries,
                    isLoading: false,
                    isError: true
                }))
        } else if (select.length && select !== "All") {
            fetch(`https://restcountries.com/v3.1/region/${select}`)
                .then((res) => res.json())
                .then((data) => setCountries({
                    ...countries,
                    isLoading: false,
                    data: data
                }))
                .catch((err) => setCountries({
                    ...countries,
                    isLoading: false,
                    isError: true
                }))
        } else {
            fetch(`https://restcountries.com/v3.1/all`)
                .then((res) => res.json())
                .then((data) => setCountries({
                    ...countries,
                    isLoading: false,
                    data: data
                }))
                .catch((err) => setCountries({
                    ...countries,
                    isLoading: false,
                    isError: true
                }))
        }
    }, [value, select,])

    return (
        <>
            <Header />
            <Hero setValue={setValue} setSelect={setSelect} />
            <div className="container mt-5">
                <div className="row">
                    {countries.isLoading && < img className="loading" src={Infinity} alt="" />}
                    {countries.isError && <h1 className="error">Afsus Ma'lumot topilmadi🤦‍♂️</h1>}
                    {
                        countries.data.length && countries.data.map((e) => (
                            <Card item={e} key={e.name.official} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Render