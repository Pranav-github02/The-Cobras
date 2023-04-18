import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const initialState = {
    info: null,
    tables: null,
    cols: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CONNECTION':
            const newInfo = action.payload.filter((item) => !state.info.includes(item));
            // Return a new state object with the updated data array
            return { ...state, info: [...state.info, ...newInfo] };
        case 'TABLES':
            const newTable = action.payload.filter((item) => !state.tables.includes(item));
            // Return a new state object with the updated data array
            return { ...state, tables: [...state.tables, ...newTable] };
        case 'COLS':
            const newCols = action.payload.filter((item) => !state.cols.includes(item));
            // Return a new state object with the updated data array
            return { ...state, cols: [...state.cols, ...newCols] };
        default:
            return state;
    }
}

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);