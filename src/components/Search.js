import React, { useState } from 'react'
import "../css/search.css"
import { Container } from '@material-ui/core';
import axios from 'axios';
import SearchImage from './SearchImage'
const accessKey = 'hbWNFLqR9DSdaANCxsUglCxSBXhgGeWDQj9g-FPg3cE';

const Search = () => {

    const [key, setkey] = useState("")
    const [image, setimage] = useState([])

    const searchPhoto = (e) => {
        e.preventDefault();
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: key, per_page: 20 },
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        }).then((response) => {
            console.log(response);
            setimage(response.data.results);
        });
    }

    return (
        <div>
            <Container className="search">
                <center> <p className="MyStagram">Search Photos</p></center><br />
                <form onSubmit={searchPhoto}>
                    <div class="container">
                        <input class="search" type="text" placeholder="Search photos" onChange={e => setkey(e.target.value)} />
                    </div><br />
                    <SearchImage image={image} />
                </form>
            </Container >
        </div >

    )
}

export default Search
