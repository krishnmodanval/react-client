import React, { Component } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TableFooter from '@material-ui/core/TableFooter';
import * as yup from 'yup';
let schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required(),
});
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
  parent: {
    display: 'flex',
    flexFlow: 'column',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textFieldpwd: {
    display: 'flex',
    justifyContent: 'center'
  },
  dense: {
    marginTop: theme.spacing(2),
  },

  button: {

    textAlign: 'center',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));
// let val=''
let ee = false;
let pwd = false;
let passwdval = ''
let bool = false;


export default class AddDialog extends Component {
  state = {
    name: true,
    emval: true,
    pwd: true,
    cnfpwd: true,
    pwdcnf: '',
    nameerror: '',
    emailerror: '',
    pwderror: '',
    cpwderror: '',
    Name: '',
    Email: '',
    Password: '',
    btn: false,

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
  handleName = (e) => {
    e.target.value === '' ? this.setState({ nameerror: 'Name is required' }) : this.setState({ nameerror: '', btn: false })
    schema
      .isValid({ name: e.target.value })
      .then(function (valid) {
        bool = valid
      })
    this.setState({ name: bool, Name: e.target.value, btn: true })
  }

  handlepwd(e) {
    pwschema
      .isValid({ passwd: e.target.value })
      .then(function (err) {
        pwd = err
      })

    passwdval = e.target.value
    e.target.value === '' ? this.setState({ pwderror: 'Password is required', pwd: false }) : this.setState({ pwd: pwd, pwderror: pwd ? '' : 'Must contain 8 characters', Password: e.target.value, btn: false })

    // this.state.pwdcnf!=='' && this.state.pwdcnf!==e.target.value?this.setState({cnfpwd:false}):this.setState({cnfpwd:true})
  }
  handle_cnf_pwd(e) {
    e.target.value === '' ? this.setState({ cpwderror: 'Confirm password is required', btn: false, cnfpwd: false }) :
      passwdval === e.target.value ?
        this.setState({ cnfpwd: true, pwdcnf: passwdval, cpwderror: '', btn: true })
        : this.setState({ cnfpwd: false, cpwderror: 'Must match password' })


  }


  render() {
    return (
      <form autoComplete="off">
        <Typography variant='h5'>Add Trainee</Typography>
        <Typography variant='inherit' align='center' gutterBottom>  Enter Your Trainee Details </Typography>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          error={!(this.state.name)}
          className={useStyles.textField}
          margin="normal"
          variant="outlined"
          bordercolor='red'
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          // {...console.log(this.state.name)}
          onChange={
            this.handleName
          }
          onBlur={this.handleName}

          helperText={this.state.name ? "" : this.state.nameerror}
        //onChange={(e)=>e.target.value.length<3?this.setState({nameerror:'Value must be 3'}):this.setState({nameerror:''})}
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={useStyles.textField}
          error={!this.state.emval}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          fullWidth
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
        // onFocus={(e)=>e.target.value.length<3?this.setState({emailerror:'Value must be 3'}):this.setState({emailerror:''})}
        // onChange={(e)=>e.target.value.length<3?this.setState({emailerror:'Value must be 3'}):this.setState({emailerror:''})}

        />
        <Grid container spacing={3} direction="row" alignItems="flex-end">
          <Grid item xs={6}>
            <TextField
              id="outlined-password-input"
              label="Password"
              className={useStyles.textField}
              error={!this.state.pwd}
              type="password"
              name="password"
              margin="normal"
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
            // {...console.log(this.state.pwderror,this.state.pwd)}

            // helperText={this.state.passerror}
            // onFocus={(e)=>e.target.value.length<3?this.setState({passerror:'Value must be 3'}):this.setState({passerror:''})}
            // onChange={(e)=>e.target.value.length<3?this.setState({passerror:'Value must be 3'}):this.setState({passerror:''})}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-confirm-password-input"
              label="Confirm Password"
              className={useStyles.textFieldpwd}
              error={!this.state.cnfpwd}
              type="password"
              name="confirm-password"
              margin="normal"
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

              onChange={this.handle_cnf_pwd.bind(this)}
              onBlur={this.handle_cnf_pwd.bind(this)}

              helperText={this.state.cpwderror}


            // helperText={this.state.conferror}
            // onFocus={(e)=>e.target.value.length<3?this.setState({conferror:'Value must be 3'}):this.setState({conferror:''})}
            // onChange={(e)=>e.target.value.length<3?this.setState({conferror:'Value must be 3'}):this.setState({conferror:''})}
            />
          </Grid>
        </Grid>
        <br /> <br />
        <Grid container spacing={2} direction="row" alignItems="flex-end">
          <Grid item xs={8}></Grid>
          <Button variant="outlined" color="primary" >Cancle</Button>
          <Button disabled={!((this.state.btn) && (this.state.name && this.state.emval && this.state.pwd && this.state.cnfpwd))} onClick={(e) => console.log("name: ", this.state.Name, 'email: ', this.state.Email, 'password: ', this.state.Password)} variant="outlined" color="primary">Submit</Button>
        </Grid>

        <TableFooter style={{ display: 'flex', justifyContent: 'center', marginTop:'15px' }}>
          <font size='2'> @Successive Technologies </font>
        </TableFooter>

      </form>

    )
  }
}