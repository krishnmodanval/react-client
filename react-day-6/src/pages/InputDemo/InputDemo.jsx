import React,{Component} from 'react'
import {TextField, Select} from './../../components/TextField' 
export class InputDemo extends Component{
    render(){
        return (
            <div><p></p>
                <label><b>Name</b></label>
                <TextField disabled="false" /><p></p>
                <label ><b>Select the game you play?</b></label><br/>
                <Select option={[['cricket','football'], [['Wicketkeeper', 'Batsman', 'Bowler', 'Allrounder'], ['wk', 'bm', 'bl', 'ar']],[['Defender', 'Striker'], ['df', 'str']]]}/> 
            </div>
        )
    }
}