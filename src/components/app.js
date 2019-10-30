import { h, Component } from 'preact';
import PizzaMenu from './PizzaMenu';

export default class App extends Component {
	state = {
		pizzaOrder: {
      toppings: [],
      cost: 0,

    },
    toppingSelection: ['TeddyBears', 'Pepper', 'Icecream', 'Knives']
	};

	render() {
		const pizzaToppings = this.state.pizzaOrder.toppings.map((toppings) => {
			return<li>{toppings}</li>;
		});

    const toppingOptions = this.state.toppingSelection.map((option) => {
      return <button onClick={() => pickTopping(option)}>{option}</button>;
    });
		const pickTopping = (pickedTopping) => {
      const newToppings = [...this.state.pizzaOrder.toppings];
      newToppings.push(pickedTopping);

      this.setState({
        pizzaOrder: {
          toppings: newToppings
        }
      });
		}

		return (
			<div id="app">
				<div style="height:500px; width:500px; border: 4px solid black; margin: 30px auto;">
					<h1 style="text-align: center">Your Order</h1>
					<ul>
						{pizzaToppings}
					</ul>
				</div>
				{toppingOptions}
			</div>
		);
	}
}
