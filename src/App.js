import React, {Component} from 'react'
import './App.scss';
import {connect} from 'react-redux';
import Counter from "./Counter";
import {add, addNumber, sub, asyncAdd} from "./redux/Actions/actions";

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAddNubmer(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNubmer(-17)}>Вычесть 17</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>
            Асинхронно добавить 100
          </button>
        </div>

        <Counter />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter,
  }
}

function mapDispathToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNubmer: number => dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(App);
