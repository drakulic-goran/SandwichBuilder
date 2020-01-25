import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Crvljiva salata', type: 'Crvljiva_salata' },
    { label: 'Buđavi sir', type: 'Budjavi_sir' },
    { label: 'Podriguša', type: 'Podrigusa' },
    { label: 'Prokisla pašteta', type: 'Prokisla_pasteta' },
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