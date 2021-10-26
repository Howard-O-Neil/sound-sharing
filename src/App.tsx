import * as React from "react";

export interface AppProps extends React.Props<any> {
    message: string;
};

export class App extends React.Component<AppProps, any> {
    render() {
        let {message} = this.props;
        return <h1>{message}</h1>;
    }
}