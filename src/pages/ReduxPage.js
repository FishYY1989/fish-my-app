import React, { Component } from "react";
import store from "../store";

export default class ReduxPage extends Component {
    render() {
        console.log('store', store);
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={() => store.dispatch({ type: "ADD" })}>add</button>
            </div>
        )
    }
}