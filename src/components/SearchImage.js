import React from 'react'
import "../css/search.css"
import { CardBody, CardText, CardTitle } from 'reactstrap';
import { Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const image = ({ image }) => {
    return (
        <div>
            <div className="result">
                {image.map((image) => (
                    <div className="middle">
                        <Card style={{ marginBottom: "20px", width: "450px" }}>
                            <CardBody >
                                <CardTitle tag="h3">
                                    <center className="photohead">
                                        <img className="photoprofile" src={image.user.profile_image.medium} style={{ marginBottom: "0px" }} alt={image.user.profile_image.medium} />
                                        <label className="photohead">
                                            <a className="photoname" href={"/profile/" + image.user.username}>{image.user.username}</a>
                                        </label></center>
                                </CardTitle>
                            </CardBody>

                            <img className="image" src={image.urls.small} alt={image.urls.small} style={{ marginBottom: "10px", width: "450px" }} />

                            <CardBody>
                                <left style={{ margin: "10px" }} className="photodead"><FontAwesomeIcon icon={faHeart} style={{ marginBottom: "0px" }} />
                                    <b > {image.likes} Like</b>
                                </left>
                                <CardText>
                                    <p style={{ margin: "10px" }} className="comment"><b>#</b>{" "}
                                        {image.description}
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default image
