import React from 'react';
import './App.scss';
import Routes from './routes'
import Button from "@material-ui/core/Button";
import NavigationDrawer from "./NavigationDrawer";

export default class App extends React.Component {
    render() {
        return <Routes/>
    }
}