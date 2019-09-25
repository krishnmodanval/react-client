import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { trainee } from './data'

import { makeStyles } from '@material-ui/core/styles';
import Tables from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


let moment = require('moment');
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));


export class TraineeList extends Component {
    render() {
        return (
            trainee.map((trainee => <React.Fragment> <Link to={`/trainee/${trainee.id}`} >{trainee.name} <br /> </Link>

            </React.Fragment>))
        )
    }

}



export function Table(props) {
    const classes = useStyles();
    let i=1;
    return (<React.Fragment>
            <Paper className={classes.root}>
                <Tables >
                    <TableHead>
                        <TableRow 
                        hover>
                            {props.columns.map((tablecolumn=> <TableCell align={tablecolumn.align} >{tablecolumn.label} {<ArrowDownwardIcon onClick={()=>console.log('kjsdk')}/>}</TableCell>))}
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.table} > 
                        {props.data.map(row  => (
            <TableRow key={row.name} hover style={{backgroundColor:  i%2===0?'':'lavender'}} name={i=i+1}>
              <TableCell align={row.align} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {(row.email).toUpperCase()}
              </TableCell>
              <TableCell align='right' component="th" scope="row">
                {moment(row.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
              </TableCell>
            </TableRow>
          ))}
                    </TableBody>
                </Tables>
            </Paper>
           
        </React.Fragment>)
}