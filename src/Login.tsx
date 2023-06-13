import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/6login.css';
import { Link } from 'react-router-dom'
import { IUser } from './models/IUser'

export const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (event: React.FormEvent) => {
        if (username && password) {
            const userData: IUser = {
                id: 0,
                login: username,
                password: password,
                avgScore: 0.0,
            };
            const response = await axios.post<IUser>('http://localhost:5555/user/login', userData);
            localStorage.setItem('id', response.data.id.toString());
            localStorage.setItem('login', response.data.login);
            localStorage.setItem('avgScore', response.data.avgScore.toFixed(1).toString());

            navigate('/glavst');
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    };

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("login");
    //     if (loggedInUser) {
    //       const foundUser = JSON.parse(loggedInUser);
    //       setUsername(foundUser);
    //     }
    //   }, []);

    return (
        <div className="v2_112">
            <div className="auth-container">
                <input
                    className="auth-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Логин"
                />
                <input
                    className="auth-input2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                />
                <button className="auth-button" onClick={loginHandler}>
                    <div className="streka1"></div>
                    <div className="streka2"></div>
                    <div className="streka3"></div>
                </button>
            </div>

            <Link to="/" className="button-main">
                <div className="button-container">
                    <div className="button-inner">
                        <div className="v54_78"></div>
                        <div className="v54_80"></div>
                        <div className="v54_81"></div>
                        <div className="v54_82"></div>
                    </div>
                </div>
            </Link>
        </div>
    );
}