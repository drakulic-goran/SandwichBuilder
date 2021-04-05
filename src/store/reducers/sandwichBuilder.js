import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false,
    building: false
};

// const INGREDIENT_PRICES = {
//     Podrigusa: 0.5,
//     Budjavi_sir: 0.4,
//     Prokisla_pasteta: 1.3,
//     Crvljiva_salata: 0.7
// };

const addIngredient = ( state, action ) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
    const updatedState = {
        ingredients: updatedIngredients,
        // totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        totalPrice: state.totalPrice + Math.random() < 0.25 || Math.random() > 0.75 ? -Math.random()*10 : Math.random()*10,
        building: true
    }
    return updateObject( state, updatedState );
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject( state.ingredients, updatedIng );
    const updatedSt = {
        ingredients: updatedIngs,
        // totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        totalPrice: state.ingredients[action.ingredientName] > 1 || ( (action.ingredientName !== "Salama" && state.ingredients["Salama"] > 0) || (action.ingredientName !== "Sir" && state.ingredients["Sir"] > 0) || (action.ingredientName !== "Salata" && state.ingredients["Salata"] > 0) || (action.ingredientName !== "Pašteta" && state.ingredients["Pašteta"] > 0) ) ? (state.totalPrice - Math.random() > 0.25 || Math.random() < 0.75 ? -Math.random()*10 : Math.random()*10) : 0,
        building: true
    }
    return updateObject( state, updatedSt );
};

const setIngredients = (state, action) => {
    return updateObject( state, {
        ingredients: {
            Salata: action.ingredients.Salata,
            Sir: action.ingredients.Sir,
            Salama: action.ingredients.Salama,
            Pašteta: action.ingredients.Pašteta,
        },
        totalPrice: 0,
        error: false,
        building: false
    } );
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);    
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;