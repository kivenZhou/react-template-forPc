import React, { Component } from 'react'

import { TabBar, Icon } from 'antd-mobile'

class TabBars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        }
    }
    renderContent(pageText) {
        return (
            <div>
                {this.props.children}
                {pageText}
            </div>
        );
    }

    render() {
        return (
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={this.state.hidden}>
                <TabBar.Item title="生活" key="生活"
                icon={<div style={{width: '0.84rem', height: '0.84rem',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.82rem 0.82rem no-repeat' }}
                />
                }
                selectedIcon={<div style={{width: '0.84rem', height: '0.84rem',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.82rem 0.82rem no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                // badge={1}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                }}
                data-seed="logId"
                >
                {this.renderContent('生活')}
                </TabBar.Item>
                <TabBar.Item icon={<Icon type="koubei-o" size="md" />}
                selectedIcon={<Icon type="koubei" size="md" />}
                title="口碑"
                key="口碑"
                // badge={'new'}
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                    this.setState({
                    selectedTab: 'redTab',
                    });
                }}
                data-seed="logId1"
                >
                {this.renderContent('口碑')}
                </TabBar.Item>
                <TabBar.Item
                icon={
                    <div style={{
                    width: '0.84rem',
                    height: '0.84rem',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.82rem 0.82rem no-repeat' }}
                    />
                }
                selectedIcon={
                    <div style={{
                    width: '0.84rem',
                    height: '0.84rem',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.82rem 0.82rem no-repeat' }}
                    />
                }
                title="朋友"
                key="朋友"
                dot
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'greenTab',
                    });
                }}
                >
                {this.renderContent('朋友')}
                </TabBar.Item>
                <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="我的"
                key="我的"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'yellowTab',
                    });
                }}
                >
                {this.renderContent('我的')}
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default TabBars