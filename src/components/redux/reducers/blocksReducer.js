const initial_state = {
    loading: false,
    blocks: [],
    error: false
}

export const blocksReducer = (state =  initial_state, action) => {
    switch(action.type) {
        case 'FETCH_STARTED':
            return {
                ...state,
                loading : true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading : false,
                blocks : action.payload,
                error : false

            }
        case 'FETCH_FAILED':
            return {
                ...state,
                loading : false,
                blocks : [],
                error : true

            }


        default:
            return state;
    }
}
