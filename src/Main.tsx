import './styles/1main.css';
import { Link } from 'react-router-dom'

export const Links = () => {
  return (
    <div className="v1_3">
      <div className="v2_4"></div>
      <div className="v2_10"></div>
      <div className="v2_7"></div>
      <div className="v2_11"></div>
      <div className="v2_8"></div>
      <div className="v2_9"></div>
      <div className="v2_12"></div>
      <div className="v2_13"></div>
      <div className="v2_15"></div>
      <div className="v2_16"></div>
      <div className="v2_18"></div>
      <div className="v2_19"></div>
      <div className="v2_20"></div>
      <div className="v2_21"></div>
      <div className="v2_22"></div>
      <div className="v2_23"></div>
      <div className="v2_24"></div>

      <Link to="/sigin" className="button-singin">
        <div className="button-container">
          <div className="button-inner">
            <div className="v2_17"></div>
            <span className="v2_153">Регистрация</span>
          </div>
        </div>
      </Link>

      <Link to="/glavst" className="button-glavst">
        <div className="button-container">
          <div className="button-inner">
            <div className="v2_6"></div>
            <span className="v2_151">Главная</span> 
          </div>
        </div>
      </Link>

      <Link to="/login" className="button-login">
        <div className="button-container">
          <div className="button-inner">
            <div className="v2_14"></div>
            <span className="v2_152">Авторизация</span>
          </div>
        </div>
      </Link>
    </div>
  );
}