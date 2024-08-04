import React from 'react';
import { Route, BrowserRouter, Routes, Link, Outlet } from 'react-router-dom';
import './App.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <p>kamilianos3@gmail.com</p>
            </div>
        );
    }
}

class Something extends React.Component {
    render() {
        return (
            <div>
                <h1>Something</h1>
                <p>Well this is something...</p>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="page">
                <h1>Hello!</h1>
                <p>I am a man because i err. You never reach any truth without making fourteen mistakes, and very likely a hundred and fourteen.</p>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="content">
                <h1>Simple SPA</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/something" >Something</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="page">
                    <Outlet/>
                </div>
            </div>
        );
    }
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>
            </Route>

            <Route path="/something" element={<Main/>}>
                <Route index element={<Something/>}/>
            </Route>

            <Route path="/contact" element={<Main/>}>
                <Route index element={<Contact/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
