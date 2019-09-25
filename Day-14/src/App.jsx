import React from 'react';
// import { TextFieldDemo } from './pages'
// import { InputDemo } from './pages'
// import { ChildrenDemo } from './pages'
// import { Login } from './pages'
import { Navbar } from './pages'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

// import TraineeDetail from './pages/Trainee/TraineeDetail';
import {NoMatch} from './pages'
//import {Trainee} from './pages'
import { PrivateRoute, AuthRoute } from './routes'
function App() {

   return (
      <React.Fragment>

         <Router>
            <Navbar /><br />
            <Switch>
            <PrivateRoute path='/textfielddemo'/>
            <PrivateRoute path='/inputdemo'/>
            <PrivateRoute path='/trainee/:id'/>
            <PrivateRoute path='/trainee'/>
            <PrivateRoute path='/childrendemo'/>
            <AuthRoute path='/login'/>
            <AuthRoute path='/'/>
            <Route default component={NoMatch} />
         
            </Switch>
         </Router>
         {/* <TextFieldDemo/>
            <InputDemo/>
            <ChildrenDemo/> */}
         {/* <Trainee /> */}
         {/* <Login /> */}
      </React.Fragment>
   )
}
export default App;
