import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './SandwichIngredient.css';

class SandwichIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                ingredient = <div className={classes.BreadTop}></div>;
                break;
            case ( 'Salama' ):
                ingredient = <div className={classes.Podrigusa}></div>;
                break;
            case ( 'Sir' ):
                ingredient = <div className={classes.Budjavi_sir}></div>;
                break;
            case ( 'Pašteta' ):
                ingredient = <div className={classes.Prokisla_pasteta}></div>;
                break;
            case ( 'Salata' ):
                ingredient = <div className={classes.Crvljiva_salata}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

SandwichIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default SandwichIngredient;