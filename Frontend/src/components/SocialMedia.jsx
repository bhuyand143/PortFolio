import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {SiLeetcode} from 'react-icons/si';
import { IoIosMail } from "react-icons/io";

const SocialMedia = () => {
    return (

        <div className="app__social">
            <div>
                <a href="mailto:dbhuyan912@gmail.com"><IoIosMail/></a>
            </div>
            <div>
                <a href="https://www.leetcode.com/bhuyand143"><SiLeetcode /></a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/dibyajyoti-bhuyan-b0a985181/' target='new' ><AiFillLinkedin /></a>
            </div>
            <div>
                <a href='https://github.com/bhuyand143' target='new'><AiFillGithub /></a>
            </div>
        </div>
    );
}

export default SocialMedia