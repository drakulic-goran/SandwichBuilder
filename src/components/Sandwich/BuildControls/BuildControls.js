import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salata', type: 'Salata' },
    { label: 'Sir', type: 'Sir' },
    { label: 'Salama', type: 'Salama' },
    { label: 'Pašteta', type: 'Pašteta' },
];

const buildControls = ( props ) => (
    <div className={classes.BuildControls}>
        {/* <p>Novih stranačkih bodova: <strong>{props.price.toFixed( 2 )}</strong></p> */}
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded( ctrl.type )}
                removed={() => props.ingredientRemoved( ctrl.type )}
                disabled={props.disabled[ctrl.type]} />
        ) )}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'PRIJAVI SENDVIČ' : 'REGISTRUJ SE DA PRIJAVIŠ SENDVIČ'}</button>
    </div>
);

export default buildControls;