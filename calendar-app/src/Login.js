import { Input } from 'antd';
import Button from 'antd/es/button';
import React, { useState } from 'react';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import ImageVct from './assets/login_img.svg';


import './Login.css';

function Login() {

    const [register, setRegister] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [password2, setPassword2] = useState("");


    return (
        <div className="login">
            <div className="login__left">
                <div className="login__div">
                    <EventAvailableIcon className="login__calendarIcon" />
                    <div style={{marginLeft: 20}} >
                        <h1>Calendar</h1>
                        <h3>Organizating and Planning</h3>
                    </div>

                </div>

                <img src={ImageVct} style={{overflow: 'hidden'}} />
            </div>

            <div className="login__right">
                {!register ? (
                    <>
                        <h1>Welcome</h1>
                        <h3>Organize and share your events easily</h3>
                        <Input value={email} onChange={e => {setEmail(e.target.value)}} placeholder={"Email"} prefix={<MailOutlineOutlinedIcon />} className="login__input" ></Input>
                        <Input value={password} onChange={e => {setPassword(e.target.value)}} placeholder={"Password"} prefix={<LockOutlinedIcon />} className="login__input" ></Input>
                        <Button className="login__btnFilled" >Sign In</Button>
                        <p>or</p>
                        <Button className="login__btn" onClick={() => setRegister(true)} >Sign Up</Button>
                    </>
                ) : (
                    <>
                        <h1>Sign Up</h1>
                        <h3>Please fill your informations</h3>
                        <Input value={name} onChange={e => {setName(e.target.value)}} placeholder={"Name"} prefix={<PersonOutlineOutlinedIcon />} className="login__input" ></Input>
                        <Input value={email} onChange={e => {setEmail(e.target.value)}} placeholder={"Email"} prefix={<MailOutlineOutlinedIcon />} className="login__input" ></Input>
                        <Input value={password} onChange={e => {setPassword(e.target.value)}} placeholder={"Password"} prefix={<LockOutlinedIcon />} className="login__input" ></Input>
                        <Input value={password2} onChange={e => {setPassword2(e.target.value)}} placeholder={"Repeat Password"} prefix={<LockOutlinedIcon />} className="login__input" ></Input>
                        <Button className="login__btnFilled" >Sign Up</Button>
                        <p>or</p>
                        <Button className="login__btn" onClick={() => setRegister(false)} >Sign In</Button>
                    </>
                )}
                


            </div>
            
        </div>
    );
}

export default Login;
