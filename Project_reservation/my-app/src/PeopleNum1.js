import React, {Component} from 'react';
import './App.css';


class Count extends Component {
    constructor(props : Count) {
        super(props);
        this.Increase = this.Increase.bind(this);
        this.Decrease = this.Decrease.bind(this);
    }
    state=
        {
            counter : 0
        }
    Increase = ()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    Decrease = () =>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    render() {
        return (
            <div>
                <div className='peoplenum'>인원 {this.state.counter}</div>
                <button onClick={this.Increase}>증가</button>
                <button onClick={this.Decrease}>감소</button>
            </div>
        );
    }
}

export default Count;