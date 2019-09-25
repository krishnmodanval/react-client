import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Trainee Portal
          </Typography>
                    <NavLink to='/trainee'><Button style={{color:'white'}} >TRAINEE</Button></NavLink>
                   <NavLink to='/textfielddemo'> <Button style={{color:'white'}}>TEXTFIELD DEMO</Button></NavLink>
                    <NavLink to='/inputdemo'><Button style={{color:'white'}}>INPUT DEMO</Button></NavLink>
                    <NavLink to='/childrendemo'><Button style={{color:'white'}}>CHILDREN DEMO</Button></NavLink>
                    <pre>   </pre>
                    <Button color="inherit">LOGOUT</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

