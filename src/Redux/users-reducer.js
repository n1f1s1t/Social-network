import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users:
        [
            // {id: 1, photoUrl: 'https://icdn.lenta.ru/images/2020/02/19/14/20200219145958241/square_320_eecc76508c152fbf5baa050f32fb0c57.jpg', followed: true, name: 'Vladimir', status:'ok', location:{country: 'Russia', city: 'Voronezh'} },
            // {id: 2, photoUrl: 'https://icdn.lenta.ru/images/2020/02/19/14/20200219145958241/square_320_eecc76508c152fbf5baa050f32fb0c57.jpg', followed: false, name: 'Ivan', status:'!!!', location:{country: 'Russia', city: 'Moscow'} },
            // {id: 3, photoUrl: 'https://icdn.lenta.ru/images/2020/02/19/14/20200219145958241/square_320_eecc76508c152fbf5baa050f32fb0c57.jpg', followed: true, name: 'Artem', status:'', location:{country: 'Russia', city: 'St Petersburg'} }
        ],
    pageSize: 5,
    totalUsersCount: 23,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    };
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    };
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => action.userId)
            }
        }
        default: return state
    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toogleFollowingProgress(true, userId));
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toogleFollowingProgress(true, userId));
        })
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toogleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toogleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching});

export default usersReducer;