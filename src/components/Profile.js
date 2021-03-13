import React, { useState, useEffect } from 'react'
import { Button } from "reactstrap";
import axios from 'axios';
import { IoArrowUndo, IoBookOutline, IoLocationOutline } from "react-icons/io5";
import "../css/profile.css"
import { CardImg, Col, Row } from 'reactstrap';
import ImageProfile from './ImageProfile'
const accessKey = 'hbWNFLqR9DSdaANCxsUglCxSBXhgGeWDQj9g-FPg3cE';

const Profile = ({ id }) => {
    const [profile, setprofile] = useState([]);
    const [image, setimage] = useState([]);
    const imageuser = "https://api.unsplash.com/users/" + id + "/photos?page=1&query=&per_page=15&client_id=" + accessKey;
    useEffect(() => {
        axios.get('https://api.unsplash.com/search/users', {
            params: { query: id },
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        }).then((res) => {
            console.log(res);
            setprofile(res.data.results);
        })
        axios.get(imageuser).then((res) => {
            setimage(res.data);

        });
    }, [])

    return (
        <div>
            <Button href={"/Search/"}><IoArrowUndo /></Button>
            {profile.map((profile) => (
                <Row >
                    <Col >
                        <div class="containers">
                            <p>{profile.username}</p>
                        </div><br />
                    </Col>
                    <Col className="blackProfile">
                        <div className="__img">
                            <img className="imgprofile" src={profile.profile_image.large} style={{ width: '170px', height: '170px', borderRadius: '150px' }} alt={profile.profile_image.large} />
                        </div><br />
                    </Col>
                    <center>

                        <p style={{ color: "white" }}><IoBookOutline /> {profile.bio}</p>
                        <p style={{ color: "white" }}><IoLocationOutline /> {profile.location}</p>
                    </center>
                    <Col>
                        <div class="titleProfile">
                            <center>
                                <p style={{ fontSize: "25px", color: "white" }}>
                                    <b style={{ fontSize: "30px" }}>Photo |</b>&nbsp;{profile.total_photos}&nbsp;&nbsp;&nbsp;&nbsp;
                                <b style={{ fontSize: "30px" }}>Like |</b>&nbsp;{profile.total_likes}&nbsp;&nbsp;&nbsp;&nbsp;
                                <b style={{ fontSize: "30px" }}>Collections |</b>&nbsp;{profile.total_collections}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                            </center>
                        </div>

                    </Col>
                </Row>
            ))}
            <ImageProfile userimage={image} />
        </div>
    )
}

export default Profile
