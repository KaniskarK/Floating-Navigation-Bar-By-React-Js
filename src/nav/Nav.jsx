import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GrContactInfo} from 'react-icons/gr'
import {AiOutlineMessage} from 'react-icons/ai'


const Nav = () => {
    return (
        <nav>
        <a href="#"><AiOutlineHome/></a>
        <a href="#"><AiOutlineUser/></a>
        <a href="#"><GrContactInfo/></a>
        <a href="#"><AiOutlineMessage/></a>
        </nav>
    )
}

export default Nav