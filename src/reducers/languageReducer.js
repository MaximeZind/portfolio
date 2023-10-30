import { UPDATE_LANGUAGE } from "../actions/language.action";

const initialState = navigator.language || navigator.userLanguage;

export default function languageReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
}