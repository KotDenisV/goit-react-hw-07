import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    loading: false,
    error: false,
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {   
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        fetchContacts: (state, action) => {
            state.items = action.payload;
        },
        addContacts: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContacts: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const contactsReducer = slice.reducer;
export const { deleteContacts, addContacts, setLoading, setError, fetchContacts } = slice.actions;