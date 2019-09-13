import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './Style';
import { getNextRoundRobin } from './../../lib/utils/math';
let name = '" "', sport = '" "', cricket = '" "', football = '" "'
console.log("{name=" + name, "sport=" + sport, "cricket=" + cricket, "football=" + football)

export class TextField extends Component {
    constructor() {
        super();
        this.state = {
            nameError: ''
        }
        this.handalchange = this.handalchange.bind(this)
    }
    handalchange(event) {
        event.target.value === '' ? name = '' : name = event.target.value
        console.log("{name=' " + name + " '", "sport=' " + sport + " '", "cricket=' " + cricket + " '", "football=' " + football + " '}")
    }
    render() {
        return (
            <div style={{ display: "flex", flexFlow: "column" }}>{!this.props.disabled ? <input Style=" flex-grow:4; height:25px" type="text" disabled value={this.props.value} />
                : (this.props.error ? <React.Fragment><input Style="display:flex ; flex-grow:4; height:25px" type="text" defaultValue={this.props.value} /><br /><p style={Style.errorinput}>Could not be greater than</p></React.Fragment>
                    : <input style={{ display: "flex", flexGrow: "4", height: "25px" }} type="text" defaultValue={this.props.value} onChange={this.handalchange} />)}
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
    handleSportChange(event) {
        cricket = '" "'
        football = '" "'
        event.target.value === '' ? sport = '' : sport = event.target.value
        console.log("{name=' " + name + " '", "sport=' " + sport + " '", "cricket=' " + cricket + " '", "football=' " + football + " '}")
        event.target.value === '' ? this.setState({ e: '', t: 0 }) : this.setState({ e: event.target.value, t: (parseInt(event.target.id) + 1) });
    }
    handlePlayerChange = (event) => {
        cricket = '" "'
        football = '" "'
        sport === 'cricket' ? event.target.value === '' ? cricket = '" "' : cricket = event.target.value : event.target.value === '' ? football = '" "' : football = event.target.value
        console.log("{name=' " + name + " '", "sport=' " + sport + " '", "cricket=' " + cricket + " '", "football=' " + football + " '}")
    }

    render() {
        let i = 0, j = this.state.t
        // console.log(this.props.option[2][0])

        return (
            <div>
                <select name="Select" id="sport" style={{ display: 'flex', width: '100%', height: '6vh' }}>
                    <option value="" name="select" onClick={this.handleSportChange.bind(this)}>Select</option >
                    {this.props.option[0].length === this.props.option.length - 1 ?
                        this.props.option[0].map((name => <option value={name} name="sport" key={name} id={i++} sport={name} onClick={this.handleSportChange}>{name}</option>))
                        : console.log("Array values are not equal")}
                </select>
                {j !== 0 ? this.props.option[j][0].map((name, index) =>
                    <React.Fragment> <br />
                        <input
                            type="radio"
                            key={name + index}
                            name={this.props.option[0][j - 1]}
                            value={name}
                            onChange={this.handlePlayerChange}
                        />{name}
                    </React.Fragment>
                ) : ''}
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
        this.setState({ t: event.target.value })
    }

    render() {
        let i = 0, b = 0
        return (
            <div style={Style.hide}>
                {this.state.value.map((number) => <React.Fragment > <br /> <input type="radio" key={b} name={this.props.name} value={number} onChange={(e) => console.log("radio clicked", e)} />{this.state.label[i]} {(b <= i++)} </React.Fragment>)}
            </div>

        )
    }
}
