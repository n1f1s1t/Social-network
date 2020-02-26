import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form"
import { getAuthUserData } from "./auth-reducer";

const INITIALAZED_SUCCES = 'INITIALAZED_SUCCES';

let initialState = {
    initialazed: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALAZED_SUCCES: {        
            return {
                ...state,
                initialazed : true
            }
        }
        default: return state;
    }
};

export const initialazedSuccess = () => ({type: INITIALAZED_SUCCES});

export const initialazeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initialazedSuccess());
        })
};

export default appReducer;