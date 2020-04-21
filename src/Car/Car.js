import React from 'react';
// import Radium from 'radium';
import './Car.css'


class Car extends React.Component {

  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('Car componentWillReceiveProps', nextProps, nextContext)
  // }
  //
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('Car shouldComponentUpdate', nextProps, nextState, nextContext)
  //   return nextProps.name.trim() !== this.props.name.trim()
  // }
  //
  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('Car componentWillUpdate', nextProps, nextState, nextContext)
  // }
  //
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('Car getDerivedStateFromProps', nextProps, prevState)
  //
  //   return prevState
  // }
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('Car componentDidUpdate', prevProps, prevState, snapshot)
  // }
  //
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('Car getSnapshotBeforeUpdate')
  // }
  //
  // componentWillUnmount() {
  //   console.log('Car componentWillUnmount')
  // }


  render() {
    console.log('Car render')

    if (Math.random() > 0.7){
      throw new Error('Car random failed')
    }

    const inputClasses = ['input']
    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    const style = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0,0,0,.14)',
      ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0,0,0,.55)',
        cursor: 'pointer',
      }
    };

    return (
      <div className={'Car'} style={style}>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          className={inputClasses.join(' ')}
          type={'text'}
          onChange={this.props.onChangeName}
          value={this.props.name}/>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Car;
