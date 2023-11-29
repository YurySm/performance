import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IClothing, IElectronics, IFood} from "../../interfaces";

interface IInitialState  {
    basket: (IFood | IClothing | IElectronics)[]
}

const initialState: IInitialState = {
    basket: []
}
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToCard: (state, action: PayloadAction<IFood | IClothing | IElectronics>) => {
            if(state.basket.filter(item => item.id === action.payload.id).length === 0) {
                state.basket = [...state.basket, action.payload]
            }
        },
        deleteFromCard: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        },
    }
})
export default basketSlice