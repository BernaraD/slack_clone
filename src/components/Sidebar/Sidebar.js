import React, {useEffect, useState} from 'react';
import "./Sidebar.css";
import db from "../../firebase/firebase";
import SidebarOption from "../SidebarOption/SidebarOption";

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useStateValue} from "../../StateProvider/StateProvider";


function Sidebar() {

    const [{user}] = useStateValue();

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => {
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Tea room</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </div>

                <CreateIcon/>
            </div>

            <SidebarOption Icon={InsertCommentIcon} title="Tea Chats"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>

            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>

            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel"/>


            {/*Connect to DB*/}
            {channels.map((channel) => (
                <SidebarOption key={channel.id}
                               title={channel.name}
                               id={channel.id}
                />
            ))}

        </div>
    )
}

export default Sidebar;