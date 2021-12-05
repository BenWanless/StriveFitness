import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../../assets/logos/Vertical-Logo.svg'
import './LoginPage.scss'

class Login extends Component{
    render(){
        return(
            <div className="login__container">
                <img className="logo" src={Logo} alt="Logo" />
                <form className="form" action="">
                    <label className="form__wrapper">
                        <p className="form__text">Username</p>
                        <input className="form__input" type="text" />
                    </label>
                    <label className="form__wrapper">
                        <p className="form__text">Password</p>
                        <input className="form__input" type="text" />
                    </label>
                    <div className="form__button">
                        <Button/>
                    </div>
                    <Link to="/signup" className="form__link">Sign up</Link>
                </form>
            </div>
        )
    }
}

export default Login;