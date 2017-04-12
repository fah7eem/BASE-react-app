/**
 * Created by faheem on 2017/04/12.
 */
import React, { Component } from 'react';

export class InputArea extends Component {
    render() {
        return <input/>
    }
}

export class SomeList extends Component {
    render() {
        return <ul/>
    }
}

export class ShowSomethingContainer extends Component {
    render() {
        return (<div>
            <InputArea/>
            <SomeList/>
        </div>);
    }
}