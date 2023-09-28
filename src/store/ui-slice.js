import { createSlice } from "@reduxjs/toolkit";


const initialUiState={isDashboardOpen: true, selectedFilters: []};

const uiSlice=createSlice({
    initialState:initialUiState,
    name:"ui",
    reducers:{
        toggleDashboard(state){
            state.isDashboardOpen=!state.isDashboardOpen;
        }
        // selectFilter(state, action){}
        // removeFilter(){}
        // clearFilters(){}
    }
});

export const uiActions= uiSlice.actions;

export default uiSlice.reducer;
