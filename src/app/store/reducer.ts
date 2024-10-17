import { createReducer, on, Action } from '@ngrx/store';
import * as DataActions from './action'
import { AppState } from './state.model';

export const initialState: AppState = {
    data: 'Initial Value',
    items: []
}

const _dataReducer = createReducer(
    initialState,
    on(DataActions.setData, (state, { data }) => ({
        ...state, data: data
    })),
    on(DataActions.clearData, () => initialState),

    on(DataActions.addItem, (state, { items }) => ({
        ...state,
        items: [...state.items, ...items]
    })),
    on(DataActions.updateItem, (state, { index, items }) => ({
        ...state,
        items: state.items.map((item, i) => i === index ? items : item)
    })),
    on(DataActions.deleteItem, (state, { index }) => ({
        ...state,
        items: state.items.filter((_, i) => i !== index)
    })),
    on(DataActions.clearItem, (state) => ({
        ...state,
        items: []
    }))
);

export function dataReducer(state: AppState | undefined, action: Action) {
    return _dataReducer(state, action);
}
