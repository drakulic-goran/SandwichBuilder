import React from 'react';

import Sandwich from '../../Sandwich/Sandwich';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Nadamo se da će biti ukusan!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Sandwich ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>ODUSTANI</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>NASTAVI</Button>
        </div>
    );
}

export default checkoutSummary;