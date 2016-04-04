import * as React from "react";

interface HiProps {
    name: string;
    message:string;
}

class Hello extends React.Component<HiProps, {}> {
    render() {
        return <div>Hello, {this.props.name} {this.props.message}</div>;
    }
}

export default Hello;
