import React,{Component} from 'react';
import {TextField} from './../../components'
import {getNextRoundRobin,getRandomNumber} from './../../lib/utils/math'
import {banner,DEFAULT_BANNER_IMAGE} from './../../configs/constants'
let img=DEFAULT_BANNER_IMAGE;
let k=0;
class TextFieldDemo extends Component{
    constructor(){
        super();
        this.state={i:''}
    }
componentDidMount(){
    this.timerID=setInterval(()=>this.Next(),2000)
}
componentWillUnmount(){
    clearInterval(this.timerID)
}
Next(){
    getRandomNumber(banner.length)>=0?this.setState({i:banner[k=getNextRoundRobin(banner.length,k)].src}):this.setState({i:img })
    //this.setState({i: getNextRoundRobin(banner.length,this.state.i)}):(img=DEFAULT_BANNER_IMAGE)
    // getRandomNumber(banner.length)>=0? 
    // k=getNextRoundRobin(banner.length,k=+1)
    // :(img=DEFAULT_BANNER_IMAGE)
    // getRandomNumber(banner.length)>=0?(img=banner[k].src):
    // console.log(k,img)
}
  
    
    
    render(){   
         return( 
        <div > 
            <div  Style="display:flex;justify-content:center"><img Style="height:200px" src={this.state.i} alt=""/></div>
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

