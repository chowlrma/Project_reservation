import React from 'react';
import './PeopleNum.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }
    onClickHandler=(plusMinus)=>{
        this.setState({value:this.state.value+plusMinus})

    }
    render(){
        return(
            <div>
                <Display value={this.state.value}/>
                <Button mother={()=>this.onClickHandler(1)}>추가</Button>
                <div><button onClick={()=>this.onClickHandler(-1)}>감소</button></div>
            </div>
        );
    }
}
const Button = ({children,mother}) =>
<div>
    <button onClick={mother}>{children}</button>
</div>

const Display = (props) =>
<div>
    <h1>{props.value}</h1>
</div>

export default App;