import React from 'react'
import { Login } from './../pages'
import { Route } from 'react-router-dom'
import TableFooter from '@material-ui/core/TableFooter';
export function AuthRoute() {
    return (
        <React.Fragment>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login} />
            
            <TableFooter style={{ display: 'flex', justifyContent: 'center' }}>
                <font size='2'> @Successive Technologies </font>
            </TableFooter>


        </React.Fragment>
    )
}