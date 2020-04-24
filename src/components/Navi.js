import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';
import HomeIcon from '../assets/img/earth.png'
import TodoIcon from '../assets/img/todo.png'

const Navi = () => {
return (
        <React.Fragment>
            <nav>
                <Link to="./" className="link">
                    <img
                        className="pc-icon"
                        src={ HomeIcon }
                        alt="ホームアイコン"
                    />
                    <img
                        className="sp-icon"
                        src={ HomeIcon }
                        alt="ホームアイコン"
                    />
                    <span className="pc-icon-text">Dashboard</span>
                    <span className="sp-icon-text">Dashboard</span>
                </Link>
                <Link to="./todo" className="link">
                    <img
                        className="pc-icon"
                        src={ TodoIcon }
                        alt="Todoアイコン"
                    />
                    <img
                        className="sp-icon"
                        src={ TodoIcon }
                        alt="Todoアイコン"
                    />
                    <span className="pc-icon-text">Todo</span>
                    <span className="sp-icon-text">Todo</span>
                </Link>
            </nav>
        </React.Fragment>
    );
}
  
export default Navi;