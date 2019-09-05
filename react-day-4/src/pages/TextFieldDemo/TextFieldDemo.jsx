import React,{Component} from 'react';
import {TextField} from './../../components'
class TextFieldDemo extends Component{
    render(){
         return( 
        <div > 
            <b>This is Disabled Input</b><br/>
            <TextField  disabled='true' value='Disabled Input'/>
            <b>A Valid Input</b><br/>
            <TextField value="Accessible" />
            <b>An Input with errors</b><br/>
            <TextField  error="true" value="101" />  
        </div>);
}
}

export  {TextField} from './../../components' ;
export {TextFieldDemo};

