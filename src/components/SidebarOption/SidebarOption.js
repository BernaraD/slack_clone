import React from 'react';
import './SidebarOption.css'
import {useHistory} from "react-router-dom";
import db from "../../firebase/firebase";


function SidebarOption(props) {

    const {Icon, title, addChannelOption, id} = props;
    const history = useHistory();

    //UseHistory hook- allows whenever you clink on a link, or you go forward or back  a page,
    // it has track history we are going force or redirect;
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push("/title/")
        }
    }

    const addChannel = () => {
        const channelName = prompt("Enter the channel name")

        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }

    return (
        <div
            className="sidebarOption"
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon ? (
                <h3>
                    <Icon className="sidebarOption__icon" /> {title}
                </h3>
            ) : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> {title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption;