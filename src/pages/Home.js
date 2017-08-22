import React, { Component } from 'react'
import { DatePicker, message } from 'antd'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            date: ''
        }
    }
    handleChange(date) {
        this.setState({ date })
    }
    render() {
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        )
    }
}

export default Home