import React,{Component} from 'react';
import {TextField,Image} from './../../components'
class TextFieldDemo extends Component{
      render(){
         return( 
        <div > 
            <Image banner={[
            '/images/cloud.jpg',
            '/images/dns-server.png',
            '/images/full-stack-web-development.jpg',
            '/images/js.jpg',
            '/images/load-balancer.jpg'
        ]} duration={2000} height={200}/>
            <b>This is Disabled Input</b>
            <TextField  value='Disabled Input'/>
            <b>A Valid Input</b>
            <TextField value="Accessible" disabled="false" />
            <b>An Input with errors</b>
            <TextField  error="true" value="101" disabled="false" />  
        </div>);
}
}
export  {TextField} from './../../components' ;
export {TextFieldDemo};

