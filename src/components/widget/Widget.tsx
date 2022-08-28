import React from 'react';
import './Widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = () => {
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">21321</span>
                <span className="link">See all users</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                <PersonOutlinedIcon className='icon' />
            </div>
        </div>
    );
};

export default Widget;