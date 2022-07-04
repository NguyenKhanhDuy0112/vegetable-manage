import { combineReducers } from '@reduxjs/toolkit';
import modalProduct from './modalProductItem/modalProduct';

const rootReducer = combineReducers({
    modalProduct:  modalProduct,
});

export default rootReducer;