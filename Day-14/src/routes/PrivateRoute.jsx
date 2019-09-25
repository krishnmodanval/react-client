import React from 'react'
import { TextFieldDemo } from './../pages'
import { InputDemo } from './../pages'
import { ChildrenDemo } from './../pages'
// import { Login } from './../pages'
import { Trainee } from './../pages'
import { Route} from 'react-router-dom'
import TraineeDetail from './../pages/Trainee/TraineeDetail';
//import { Switch } from 'react-router-dom'
export function PrivateRoute() {
    return (
        <React.Fragment>
                <Route path='/textfielddemo' component={TextFieldDemo} />
                <Route path='/inputdemo' component={InputDemo} />
                <Route path='/childrendemo' component={ChildrenDemo} />
                <Route path='/trainee/:id' component={TraineeDetail} />
                <Route exact path='/trainee' component={Trainee} />
            
        </React.Fragment>
    )
}