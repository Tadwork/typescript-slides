import * as React from "react";

interface HiProps {
    name: string;
}

class Hello extends React.Component<HiProps, {}> {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

export default Hello;
