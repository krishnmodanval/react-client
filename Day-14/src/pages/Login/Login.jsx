import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

import * as yup from 'yup';
let eschema = yup.object().shape({
    email: yup.string().email().required(),
})
let pwschema = yup.object().shape({
    passwd: yup
        .string()
        .min(8)
        .required()
})
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    root: {
        padding: theme.spacing(3, 2),
    },
    textField: {
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
    }
}));

const ValidationTextField = withStyles({
    root: {
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
    },
})(TextField);

let ee = false;
let pwd = false;
export default class Login extends Component {
    state = {
        emval: true,
        pwd: true,
    }

    handleEmail(e) {
        e.target.value === '' ? this.setState({ emailerror: 'Email is required' }) : this.setState({ emailerror: 'Enter valid Email', btn: false })
        eschema
            .isValid({ email: e.target.value })
            .then(function (err) {
                ee = err
            })
        // e.target.value!==''?this.setState({emailerror:'Email is require'}):ee?this.setState({emailerror:'Enter valid Email'}):console.log(this.state.emailerror)
        this.setState({ emval: ee, Email: e.target.value, btn: true })
    }

    handlepwd(e) {
        pwschema
            .isValid({ passwd: e.target.value })
            .then(function (err) {
                pwd = err
            })

        e.target.value === '' ? this.setState({ pwderror: 'Password is required', pwd: false }) : this.setState({ pwd: pwd, pwderror: pwd ? '' : 'Must contain 8 characters', Password: e.target.value, btn: false })
    }


    render() {
        return (
            <div Style="background-color:rgb(251, 255, 240)">

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '60vh' }}
                >

                    <Grid item xs={3}>
                        <Card>
                            <CardActions>
                                <form autoComplete="off">
                                    <Grid container spacing={1} direction="column" alignItems="center">
                                        <Grid >
                                            <LockOutlinedIcon />
                                        </Grid>
                                        <Grid >
                                            <Typography variant='h5'>Login</Typography>
                                        </Grid>
                                    </Grid>
                                    <ValidationTextField
                                        id="outlined-email-input"
                                        label="Email"
                                        error={!this.state.emval}
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        margin="normal"
                                        variant="outlined"

                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={this.handleEmail.bind(this)}
                                        onBlur={this.handleEmail.bind(this)}
                                        helperText={this.state.emval ? "" : this.state.emailerror}
                                    /> <br />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        className={useStyles.textField}
                                        type="password"
                                        name="password"
                                        margin="normal"
                                        required
                                        error={!this.state.pwd}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <VisibilityOffIcon />
                                                </InputAdornment>
                                            ),
                                        }}

                                        onChange={this.handlepwd.bind(this)}
                                        onBlur={this.handlepwd.bind(this)}
                                        helperText={this.state.pwderror}
                                    /><br />

                                    <Button size='large' fullWidth disabled={!(this.state.emval && this.state.pwd && pwd)} variant="contained" color="primary">Sign in</Button>
                                </form>
                            </CardActions>
                        </Card>

                    </Grid>
                    
                </Grid>

            </div>

        )
    }
}