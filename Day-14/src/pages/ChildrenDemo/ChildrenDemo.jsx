import React from 'react'
import {Math} from './../../theme'

export class ChildrenDemo extends React.Component{
   render(){ 
    return(
    <React.Fragment >
            <Math  first='7' second='4' operator='+' />
            <Math first='7' second='3' operator='-' />
            <Math first='7' second='0' operator='/' />
            <Math first='7' second='8' operator='^' />
            <Math first='7' second='4' operator='+'>
             <div></div>
            </Math>
    </React.Fragment>);
}}