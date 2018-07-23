import React, { Component } from 'react'
import { DatePicker, Button, Slider, Switch, Icon } from 'antd'
import 'antd/dist/antd.css'

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            valor: 'Lucas',
            disabled: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }
    handleChange(e) {
        console.log('clicou')
        this.setState({...this.state, valor: e.target.value})
    }
    digaOla() {
        console.log('Ola! 😄 🐕')
    }
    render() {
        const { disabled } = this.state;
        return (
            <div>
                <h1>{this.state.valor}</h1>
                <input onChange={this.handleChange} value={this.state.valor} type="text" />
                <hr/>
                <DatePicker />
                <hr/>
                <hr/>
                <Button type="primary" onClick={this.digaOla}>Clique aqui</Button>
                <hr/>
                <hr/>
                <Slider defaultValue={30} disabled={disabled} />
                <Slider range defaultValue={[20, 50]} disabled={disabled} />
                Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
                <hr/>
                <hr/>
                <Icon type="loading" />
            </div>
        )
    }
}