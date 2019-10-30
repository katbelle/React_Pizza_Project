import { h, Component } from 'preact';

const PizzaMenu = (props) =>{
    console.log("These are my props:", props);

    return (
    <div class="pizza-menu">
        <h1>{props.storeName}</h1>
        <ul>
            <li>{props.menuItem}</li>
            <li>{props.menuItem2}</li>
        </ul>
    </div>
    );
};

export default PizzaMenu;