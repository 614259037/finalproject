import React from 'react'
import { CardImg } from 'reactstrap';

const ImageProfile = ({ userimage }) => {
    return (
        <div>
            <center>
                {userimage.map(image => (
                    <CardImg className="allimage" width="350px" height="400px" src={image.urls.raw} alt="Card image cap" />
                ))}
            </center>
        </div>
    )
}

export default ImageProfile
