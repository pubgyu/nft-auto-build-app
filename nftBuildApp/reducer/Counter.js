const ADD = "ADD";
const DELETE = "DELETE";

function stateUpdate(state=[], action) {
    switch(action.type) {
        case ADD:
            return [
                ...state,
                {
                    id : action.id,
                    title : action.title
                }
            ]
        case DELETE:
            return state.filter(state => state.id !== action.id)
        default:
            return state
    }
}

export const ACTION_addCounter = (id,title) => {
    return {
        type:ADD,
        id:id,
        title:title
    }
}
export const ACTION_deleteCounter = (id) => {
    return {
        type:DELETE,
        id:id
    }
}

export default stateUpdate;