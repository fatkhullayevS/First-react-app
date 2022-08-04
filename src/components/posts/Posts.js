import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Loading from "../../images/Infinity.svg"
import "./posts.css"
import Header from '../header';
import RenderPosts from '../renderPosts/RenderPosts';
const Posts = () => {

    const [posts, setPosts] = useState({
        isLoading: true,
        isError: false,
        data: {}
    })
    const { name } = useParams();

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/name/' + name)
            .then(res => res.json())
            .then(data => setPosts({
                ...posts,
                isLoading: false,
                data: data,
            })).catch((err) => setPosts({
                ...posts,
                isLoading: false,
                isError: true
            }))
    }, [])

    return (
        <>
            <Header />
            {posts.isLoading && < img className="loading" src={Loading} alt="" />}
            {posts.isError && <h1 className="error">Afsus Ma'lumot topilmadi🤦‍♂️</h1>}
            {posts.data.length &&
                posts.data.map((e) => (
                    <div className='container'>
                        <div className='row'>
                            <RenderPosts key={e.name.common} item={e} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Posts