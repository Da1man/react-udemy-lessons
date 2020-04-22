import React, {Component} from 'react';
import './App.css';
import Radium from "radium";
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda 1', year: 2010},
      ],
      pageTitle: 'React components',
      showCars: false,
    };
  }

  onChangeName(name, index){
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car
    this.setState({
      cars,
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  };

  deleteHandler (index){
    const cars = this.state.cars.concat();

    cars.splice(index,1);
    this.setState({cars})
  }

  render() {
    const divStyle = {
      textAlign: 'center',
    };
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return(
          <ErrorBoundary key={index} >
          <Car
            name={car.name}
            year={car.year}
            index={index}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
          />
          </ErrorBoundary>
        )
      })
    }
    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{this.props.title}</h1>
        <Counter />
        <hr/>

        <button
          onClick={this.toggleCarsHandler}
          style={{
            fontWeight: 900,
            padding: 15,
            backgroundColor: "#ffffff",
            textTransform: 'uppercase',
            border: '2px solid #ccc',
            cursor: 'pointer',
            outline: 'none',
            marginTop: 20,
            ':hover' : {
              backgroundColor: "#e7e7e7",
            }
          }}
        >
          Toggle Cars
        </button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px',
        }}>
          {cars}
        </div>

      </div>
    );
  }
}

export default Radium (App);
