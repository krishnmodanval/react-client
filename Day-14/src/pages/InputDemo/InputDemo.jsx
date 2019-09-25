import React, { Component } from 'react'
import { TextField, Button,SelectField } from './../../components/TextField'
// import Select from '@material-ui/core/Select'


export class InputDemo extends Component {
    render() {
        return (
            <div><p></p>
                <label><b>Name</b></label>
                <TextField disabled="false" /><p></p>
                <label ><b>Select the game you play?</b></label><br />
                {/* <Select option={[['cricket','football'], [['Wicketkeeper', 'Batsman', 'Bowler', 'Allrounder'], ['wk', 'bm', 'bl', 'ar']],[['Defender', 'Striker'], ['df', 'str']]]}/> */}


                <SelectField >
                    <option value='cricket'>Cricket</option>
                    <option value='football'>Football</option>
                </SelectField>
                {/* <Radio name='cricket' option={}  />
                <Radio name='football' option={} /><br/> */}
                <Button value="Cancle" onClick="Cancle" disabled="false" />
                <Button value="Submit" onClick="Submit" />

            </div>
        )
    }
}