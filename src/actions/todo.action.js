import axios from 'axios'
import {
    GET_DATA_START,
    GET_DATA_ERROR,
    GET_DATA_END,

    DELETE_DATA_START,
    DELETE_DATA_ERROR,
    DELETE_DATA_END,

    EDIT_DATA_START,
    EDIT_DATA_ERROR,
    EDIT_DATA_END,

    CREAT_DATA_START,
    CREAT_DATA_ERROR,
    CREAT_DATA_END,

    OPEN_POPUP,
    CLOSE_POPUP
    

} from '../constants/TODO'

const API = 'https://test.megapolis-it.ru/api/list'

export const actionCreators = {
    getData: payload => (dispatch, getState) => {
      dispatch({
        type: GET_DATA_START
      })
  
      axios.get(API).then(res => {
        
        if (res.status === 200) {
          dispatch({
            type: GET_DATA_END, payload: res.data.data
          })
        } else {
          dispatch({
            type: GET_DATA_ERROR
          })
        }
      })
    },
    deleteRow: payload => (dispatch, getState) => {
      dispatch({
        type: DELETE_DATA_START
      })
      let result = [];
      // return
      axios({
        method: 'delete',
        url: `${API}/${payload.id}`
      }).then(res => {
        if (res.status === 200) {
          const arrayTaskState = [...getState().todoData.data];
          result = arrayTaskState.filter(item => item.id !== payload.id);
  
          dispatch({
            type: DELETE_DATA_END, payload:result
          })
        } else {
          dispatch({
            type: DELETE_DATA_ERROR
          })
        }
      })
  
    },
    editRow: payload => (dispatch, getState) => {
      dispatch({
        type: EDIT_DATA_START
      })
  
      axios({
        method: 'post',
        url: `${API}/${payload.id}`,
        data: { title: payload.text }
        }).then(res => {
        if (res.status === 200) {
            
        } else {
        
        }
        })
  
  
    },
    createRow: payload => (dispatch, getState) => {
      dispatch({
        type: CREAT_DATA_START 
      })
      
      axios({ 
        method: 'post', 
        url: API, 
        data: { title: payload.text} 
        }).then(res => { 
        if (res.status === 200) { 
          console.log(res.data.id);
          const arrayTaskState = [...getState().todoData.data];
          arrayTaskState.push({id: res.data.id, title: payload.text});

          dispatch({
            type: CREAT_DATA_END, payload:arrayTaskState 
          })   
        
        } else { 
          dispatch({
            type: CREAT_DATA_ERROR 
          })
        } 
        }) 
         
    },

    openPopUp: payload => (dispatch, getState) => {
      dispatch({
        type: OPEN_POPUP
      })   
    },

    closePopUp: payload => (dispatch, getState) => {
      dispatch({
        type: CLOSE_POPUP
      })   
    },
      
  }