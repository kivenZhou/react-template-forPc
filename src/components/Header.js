import React, { Component } from 'react'
import { NavBar, Drawer, List, Icon } from 'antd-mobile'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.onLeftClicks = this.onLeftClicks.bind(this)
        this.menuShow = this.menuShow.bind(this)
    }
    componentDidMount() {
        
    }
    onLeftClicks() {
        window.history.back()
    }
    menuShow() {
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        const { title } = this.props
        return (
            <div>
                <NavBar leftContent="返回"
                mode="light"
                onLeftClick={ this.onLeftClicks }
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                    <Icon key="1" type="ellipsis" onClick={ this.menuShow } />,
                ]}
                >{ title }</NavBar>
            </div>
        )
    }
}

export default Header