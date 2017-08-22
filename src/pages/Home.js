import React, { Component } from 'react'
import Header from '../components/Header'
import TabBars from '../components/TabBar'
import { Button } from 'antd-mobile'

class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header title='首页' />
                
                <TabBars>
                    <div className="container">
                        <p>Home</p>
                        <img src={require('../static/img/test.jpg')} alt="" />
                        <Button>Start</Button>
                    </div>
                </TabBars>
            </div>
        )
    }
}

export default Home