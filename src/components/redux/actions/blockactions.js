import axios from 'axios';
const mseconds = new Date().getTime();
export const loadBlocklist = () => {
    return (dispatch) => {
        dispatch({type:'FETCH_STARTED'});
        axios.get('https://blockchain.info/blocks/'+mseconds+'?format=json&cors=true')
        .then(res => {
            dispatch({type:'FETCH_SUCCESS', payload:res.data.blocks});
        }).catch(err => {
            if(err) {
                dispatch({type:'FETCH_FAILED'});
            }

        })

    }
}