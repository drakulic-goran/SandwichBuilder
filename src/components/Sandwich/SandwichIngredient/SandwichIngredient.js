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
            case ( 'Podrigusa' ):
                ingredient = <div className={classes.Podrigusa}></div>;
                break;
            case ( 'Budjavi_sir' ):
                ingredient = <div className={classes.Budjavi_sir}></div>;
                break;
            case ( 'Prokisla_pasteta' ):
                ingredient = <div className={classes.Prokisla_pasteta}></div>;
                break;
            case ( 'Crvljiva_salata' ):
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