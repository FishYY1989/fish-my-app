import React, { Component } from 'react'
import Layout from './Layout'

export default class UserPage extends Component {
    render() {
        return (
            <div>
                <Layout showTopBar={true} showBottomBar={true} title="用户中心">
                    <div>
                        <h3>UserPage</h3>
                    </div>
                </Layout>
            </div>
        )
    }
}
