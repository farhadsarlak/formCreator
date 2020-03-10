import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectUsersData = createSelector(
    [selectUser],
    usersData => usersData.users
);

export const selectIsUsersFetching = createSelector(
    [selectUser],
    usersFetching => usersFetching.isFetching
);
