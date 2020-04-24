import React from 'react';
import '../assets/css/App.css';
import '../assets/css/NeumoForm.css';
import Header from '../components/Header';
import Navi from '../components/Navi';
import Footer from '../components/Footer';

const TodoApp = ({ task, tasks, inputTask, addTask }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="contents">
                <Navi />
                <main className="todo-form">
                    <input
                        type="text"
                        placeholder="Please Input"
                        onChange={(e) => inputTask(e.target.value)}
                    />
                    <button
                        type="button"
                        value="add"
                        onClick={ () => addTask(task) }
                    >+</button>
                    <ul>
                        {tasks.map((item, i) => {
                            return (
                                <React.Fragment>
                                    <li className="item" key={i}>{item}</li>
                                </React.Fragment>
                            );
                        })}
                    </ul>
                </main>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default TodoApp;