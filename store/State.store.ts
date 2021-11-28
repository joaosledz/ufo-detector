import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'state',
    initialState: 0,
    reducers: {
        increment: (state, action: PayloadAction<number>) =>
            state + action.payload,
    },
});

// export const {increment}
