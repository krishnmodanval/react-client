import React,{Component} from 'react';
import Style from './Style';
export class TextField extends Component{
render(){  
    return(
        // <div>{this.props.disabled? <input type="text" disabled value={this.props.value}/> : (this.props.error? <input type="text" defaultValue={this.props.value}/> :<input type="text" defaultValue={this.props.value}/>)}
        // {this.props.error?<p style={Style.errorinput}>Could not be greater than</p>:""}
        // </div>
        <div Style="display:flex;flex-flow:column ;">{this.props.disabled? <input Style=" flex-grow:4; height:25px" type="text" disabled value={this.props.value}/> 
        : (this.props.error? <React.Fragment><input Style="display:flex ; flex-grow:4; height:25px" type="text" defaultValue={this.props.value}/><br/><p style={Style.errorinput}>Could not be greater than</p></React.Fragment> 
        :<input Style="display:flex ; flex-grow:4; height:25px" type="text" defaultValue={this.props.value}/>)}
        </div>
    );
}
}
    