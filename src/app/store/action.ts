import { createAction, props } from '@ngrx/store';
import { objectType } from './state.model';

export const setData = createAction('[Data] Set Data', props<{ data: string }>());
export const clearData = createAction('[Data] Clear Data');

export const addItem = createAction('[Data] Add Item', props<{ items: objectType[] }>());
export const updateItem = createAction('[Data] Update Data', props<{ index: number, items: objectType }>());
export const deleteItem = createAction('[Data] Delete Data', props<{ index: number }>());
export const clearItem = createAction('[Data] Clear Data');