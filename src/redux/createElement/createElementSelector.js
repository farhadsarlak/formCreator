import {createSelector} from 'reselect';

const selectElement = state => state.createElement;

export const selectElementData = createSelector(
    [selectElement],
    elementData=> elementData.elements
);