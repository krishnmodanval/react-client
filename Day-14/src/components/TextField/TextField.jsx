import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './Style';
import { getNextRoundRobin } from './../../lib/utils/math';

import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(3, "Name needs to be at least 3 characters")
        .required("Please enter your name"),

    select: yup
        .string()
        .trim()
        .required(),

    what_you_do: yup
        .string()
        .required()
});
//   let schemaS = yup.object().shape({
//     select: yup
//     .string()
//     .required()
//     });
// let schemaR =yup.object().shape({
//     what_you_do: yup
//     .string()
//     .required()
// })
let hasError1, hasError2, hasError3 = false

let name = '" "', sport = '" "', cricket = '" "', football = '" "'

let val = {}
function isTouched(e) {
    console.log("You touched button")
}


export class TextField extends Component {
    constructor() {
        super();
        this.state = {
            nameError: ''
        }
        this.handlechange = this.handlechange.bind(this)
    }
    handlechange(event) {
        val = {
            name: event.target.value,
            select: '',
            what_you_do: ''
        }
        name = event.target.value;
        console.log('{ name=' + name + ', sport=' + sport + ', cricket=' + cricket + ',football=' + football + '}')
        //     schema.isValid(val).then (function(valid){
        //     hasError1=valid
        //    })
        //     console.log(hasError1)
        //     //hasError1?this.setState({nameError:''}):this.setState({nameError: "Name is required"})
        //     console.log(event.target.value)
    }
    render() {
        return (
            // <div>{this.props.disabled ? <input type="text" disabled value={this.props.value} /> : (this.props.error ? <input type="text" defaultValue={this.props.value} required /> : <input type="text" required defaultValue={this.props.value} onChange={this.handalchange} />)}
            //     {this.props.error ? <p style={Style.errorinput}>Could not be greater than</p> : ""}
            // </div>

            // <div style={{display:'flex',flexDirection:'column'}}>{(this.props.error ? <input type="text" style={{height:"25px"}} disabled={!this.props.disabled} defaultValue={this.props.value} required /> : <input type="text" style={{height:"25px"}}  disabled={!this.props.disabled} required defaultValue={this.props.value} onChange={this.handalchange} onHov={isTouched} />)}
            //         {this.props.error ? <p style={Style.errorinput}>Could not be greater than</p> : ""}

            //         <p style={Style.Error}>{this.state.nameError}</p>
            //     </div>

            <div Style="display:flex;flex-flow:column ;">{!this.props.disabled ? <input Style=" flex-grow:4; height:25px" type="text" disabled value={this.props.value} />
                : (this.props.error ? <React.Fragment><input Style="display:flex ; flex-grow:4; height:25px" type="text" defaultValue={this.props.value} /><br /><p style={Style.errorinput}>Could not be greater than</p></React.Fragment>
                    : <input Style="display:flex ; flex-grow:4; height:25px" type="text" defaultValue={this.props.value} onChange={this.handlechange} />)}
            </div>
        );
    }
}

export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            duration: this.props.duration
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.Next(), this.state.duration)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    Next() {
        this.setState({ i: getNextRoundRobin(this.props.banner.length - 1, this.state.i) })

    }

    render() {
        const banner = this.props.banner;
        const height = this.props.height;
        let imgheight = ("height:" + height + "px")
        return (
            <div Style="display:flex;justify-content:center">
                <img Style={imgheight} src={banner[this.state.i]} alt="Default Banner" />
            </div>
        )
    }
}

Image.propTypes = {
    banner: PropTypes.array.isRequired,
    duration: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};
export class Select extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.option)
        this.handleSportChange = this.handleSportChange.bind(this)
    }
    state = {
        e: '', label: this.props.option[1][1],
        value: this.props.option[1][0],
        t: 0, selectError: ''
    }

    onRadioChange = (e) => {
        console.log("Radio clicked=", e.currentTarget)
    }



    handleSportChange(event) {
        val = {
            select: event.target.value,
            what_you_do: ''
        }
        sport = event.target.value
        console.log('{ name=' + name + ', sport=' + sport + ', cricket=' + cricket + ',football=' + football + '}')
        event.target.value === '' ? this.setState({ e: '', t: 0 }) : this.setState({ e: event.target.value, t: (parseInt(event.target.id) + 1) });

        hasError2 ? this.setState({ selectError: '' }) : this.setState({ selectError: "Please Select Sport " })
    }
    render() {
        let i = 0, j = this.state.t
        // console.log(this.props.option[2][0])

        return (
            <div>
                {/* <select id="sport">
                    <option value="">Select</option>
                    {this.props.option[0].map((name=><option value={name} name="sport" sport={name} onClick={this.handleSportChange.bind(this)}>{name}</option>))}
                    {/* <option value="cricket" name="sport" sport="cricket" onClick={this.handleSportChange.bind(this)}>Cricket</option>
                    <option value="football" name="sport" sport="football" onClick={this.handleSportChange.bind(this)} >Football</option> */}
                {/* </select> */}
                {/* {this.state.e === "cricket" ? <Radio name='cricket' option={[['Wicketkeeper', 'Batsman', 'Bowler', 'Allrounder'], ['wk', 'bm', 'bl', 'ar']]} /> : ''}
                {this.state.e === "football" ? <Radio name='football' option={[['Defender', 'Striker'], ['df', 'str']]} /> : ''} */}

                {/* {this.state.e==="cricket"?<div >
                <input type="radio" name='cricket' value="wk" onClick={this.handleNameChange.bind(this)}/> Wicket Keeper <br/>
                <input type="radio" name='cricket' value="bm"onClick={this.handleNameChange.bind(this)}/> Batsman <br/>
                <input type="radio" name='cricket' value="bl" onClick={this.handleNameChange.bind(this)}/> Bowler <br/>
                <input type="radio" name='cricket' value="ar" onClick={this.handleNameChange.bind(this)}/> Allrounder 
                </div>:''}
                {this.state.e==='football'?<div>
                <input type="radio" name='football' value="df" onClick={this.handleNameChange.bind(this)}/> Defender <br/>
                <input type="radio" name='football' value="str" onClick={this.handleNameChange.bind(this)}/> Striker <br/>
                </div>:''} */}

                {/* <Radio option={[['Wicketkeeper', 'Batsman','Bowler','Allrounder'],['wk','bm','bl','ar']]}/> */}

                <select name="Select" id="sport" onTouchEnd={isTouched} style={{ display: 'flex', width: '100%', height: '6vh' }} >
                    <option value="" name="select" onClick={this.handleSportChange.bind(this)}>Select</option >
                    {this.props.option[0].length === this.props.option.length - 1 ?
                        this.props.option[0].map((name => <option value={name} name="sport" id={i++} sport={name} onClick={this.handleSportChange}>{name}</option>))
                        : console.log("Array values are not equal")}
                </select>
                {j !== 0 ? this.props.option[j][0].map((name) => <React.Fragment> <br /><input type="radio" name={this.props.option[0][j - 1]} sport={this.props.option[j][0]} onChange={this.onRadioChange} />{name} </React.Fragment>) : ''}
                {/* {j !== 0?console.log():console.log("")} */}
                <p style={Style.Error}>{this.state.selectError}</p>
            </div>
        )
    }
}


export class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.option[0],
            value: this.props.option[1],
            t: '',
            radioError: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)

    }
    handleNameChange(event) {
        console.log(event.target)
        val = {
            what_you_do: event.target.value
        }
        sport === 'cricket' ? cricket = event.target.value : football = event.target.value
        console.log('{ name=' + name + ', sport=' + sport + ', cricket=' + cricket + ',football=' + football + '}')
        this.setState({ t: event.target.value })
        // console.log(event.target.value)
        schema.isValid(val).then(function (valid) {
            hasError3 = valid
            return valid
        })

        hasError3 ? this.setState({ radioError: '' }) : this.setState({ radioError: "Please Select Sport " })
        // console.log(hasError1, hasError2, hasError3)
    }

    render() {
        let i = 0, b = 0
        return (
            <div style={Style.hide}>
                {this.state.value.map((number) => <React.Fragment > <br />
                    <input
                        type="radio"
                        key={b}
                        name={this.props.name}
                        value={number}
                        checked={this.props.sport === sport}
                        onChange={this.handleNameChange}
                    />
                    {this.state.label[i]} {(b <= i++)} </React.Fragment>)}
            </div>

        )
    }
}

let disable = ''
export class Button extends Component {
    constructor(props) {
        super(props);
        disable = this.props.disabled
        hasError1 ? (hasError2 ? (hasError3 ? disable = "false" : console.log(hasError3)) : console.log(hasError2)) : console.log(hasError1)
    };
    // }
    // state={handle:''}
    // setState({handle:this.props.onClick})


    handalsubmit() { }
    handlecancle() { }

    render() {
        return (
            <button disabled={!disable} type={this.props.value} onClick={this.props.onClick.toLowerCase() === 'submit' ? this.handalsubmit.bind(this) : (this.props.onClick.toLowerCase() === 'cancle' ? this.handlecancle.bind(this) : '')}>{this.props.value}</button>
        )
    }
}


export class SelectField extends Component {
    render() {
        return (
            <select >
                <option value=''>Select</option>
                {this.props.children}
            </select>
        )
    }
}