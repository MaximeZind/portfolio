export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

export function updateLanguage(data){
    return (dispatch) => {
        dispatch({ type: UPDATE_LANGUAGE, payload: data });
    }
}