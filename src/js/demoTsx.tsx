/**
 * Created by caozheng on 2016/12/28.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Input} from 'antd';
import "./../css/demo.less";

export interface MainProps {
    type ?: 'type1'|"type2"
}

class Main extends React.Component<MainProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: "默认"
        }
    }

    inputCommonChange(e) {
        this.setState({
            nameValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Input value={this.state.nameValue}
                    onChange={this.inputCommonChange.bind(this)}/>
            </div>
            
        )
    }

}
ReactDOM.render(<Main />, document.querySelector("#wrapper"));





