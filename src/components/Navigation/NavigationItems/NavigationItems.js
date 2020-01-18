import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Pravljenje sendviča</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Status u stranci na osnovu sendviča</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Prijavi se</NavigationItem>
            : <NavigationItem link="/logout">Odjavi se</NavigationItem>}
    </ul>
);

export default navigationItems;