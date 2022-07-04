import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: false,
    product: {}
}

const modalProduct = createSlice({
    name: "cart",
    initialState,

    reducers : {
        showModal: (state, action) => {
            state.status = true
            state.product = action.payload
        },
        hideModal : (state, action) => {
            state.status = action.payload
        },
       
    }

})

export const { showModal, hideModal} = modalProduct.actions
export default modalProduct.reducer
