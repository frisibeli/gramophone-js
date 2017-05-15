import React from 'react';
import styles from './Navigation.css';
import {Link} from 'react-router-dom'

const Navigation = () => (
  <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    Menu <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" to="/">Chris's blog</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/new-post">New Post</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

Navigation.propTypes = {

};

export default Navigation;
