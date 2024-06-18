import { configureStore, type Middleware } from "@reduxjs/toolkit";
// import sampleReducer1 from './Bookings/sampleReducer1';
// import sampleReducer2 from './Bookings/sampleReducer2';
// import sampleReducer3 from './Bookings/sampleReducer3';
// import sampleReducer4 from './Bookings/sampleReducer4';
import { State } from "./interfaces";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    const initAppState = localStorage.getItem('__app__state__');

    const initState: State = initAppState ? JSON.parse(initAppState) : {
        auth: null,
        app: null
    };
    
    localStorage.setItem("__app__state__", JSON.stringify({
        ...initState,
        app: {
            element1: store.getState().element1,
            element2: store.getState().element2,
            element3: store.getState().element3,
            element4: store.getState().element4,
        }
    }));
}

export const store = configureStore({
    reducer: {
        // reducer1: sampleReducer1,
        // reducer2: sampleReducer2,
        // reducer3: sampleReducer3,
        // reducer4: sampleReducer4
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;