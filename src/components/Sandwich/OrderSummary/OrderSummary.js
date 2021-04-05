import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Tvoj sendvič</h3>
                <p>Prelepi napredni sendvič sa sledećim sastojcima:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                {/* <p><strong>Ukupno novih stranckih bodova: {this.props.price.toFixed( 2 )}</strong></p> */}
                <p>Da li je završeno pravljenje sendviča?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>ODUSTANI</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>NASTAVI</Button>
            </Aux>
        );
    }
}

export default OrderSummary;