import { createSlice } from "@reduxjs/toolkit";


const initialUiState={isCreation: false};

const uiSlice=createSlice({
    initialState:initialUiState,
    name:"ui",
    reducers:{
        toggleCreationUi(state){
            state.isCreation=!state.isCreation;
        }
    }
});

export const uiActions= uiSlice.actions;

export default uiSlice.reducer;
