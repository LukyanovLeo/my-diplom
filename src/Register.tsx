import  React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/7sigin.css';
import { Link } from 'react-router-dom'
import { IUser } from './models/IUser';
import { IRegister } from './models/IRegister';
import axios from 'axios';

export const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setConfirmPassword] = useState('');
    
    const registerHandler = async (event: React.FormEvent) => {
        if (username && password && repeatPassword) {

            const userData: IRegister = {
                id: 0,
                login: username,
                password: password,
                repeatPassword: repeatPassword,
                avgScore: 0.0,
            }
            const response = await axios.post<IRegister>('https://localhost:5555/user/register', userData)
            localStorage.setItem('id', response.data.id?.toString());
            localStorage.setItem('login', response.data.login);
            localStorage.setItem('avgScore', response.data.avgScore?.toFixed(1).toString());

            navigate('/glavst');
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    };

  return (
        <div className="v2_97">
            <div className="registration-container">
                <input
                    className="registration-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Логин"
                />
                <input
                    className="registration-input2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                />
                <input
                    className="registration-input3"
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Повторите пароль"
                />
                <button className="registration-button" onClick={registerHandler}>
                    <div className="str1"></div>
                    <div className="str2"></div>
                    <div className="str3"></div>
                </button>
            </div>

            <Link to="/" className="button-main">
              <div className="button-container">
                <div className="button-inner">
                    <div className="v54_73"></div>
                    <div className="v54_75"></div>
                    <div className="v54_76"></div>
                    <div className="v54_77"></div>
                </div>
              </div>
            </Link>
            
        </div>
    );
}