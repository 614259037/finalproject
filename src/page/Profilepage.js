import React from 'react'
import Profile from "../components/Profile"

const Profilepage = (props) => {
    return (
        <div>
            <Profile id={props.match.params.id} />
        </div>
    )
}

export default Profilepage
