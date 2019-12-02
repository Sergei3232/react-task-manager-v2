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
    CREAT_DATA_END
} from '../constants/TODO'

const initialState = {
    isAjax: false,
    isError: false,
    data: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_DATA_START:
        return {
          ...state,
          isAjax: true,
          data: []
        }
      case GET_DATA_END:
        return {
          ...state,
          isAjax: false,
          data: action.payload
        }
      case GET_DATA_ERROR:
        return {
          isError: true,
          isAjax: false,
          data: []
        }
      case DELETE_DATA_START:
        return {
          ...state,
          isAjax: true,
        }
      case DELETE_DATA_END:
        return {
          ...state,
          isAjax: false,
          data: action.payload
        }
      case DELETE_DATA_ERROR:
        return {
          ...state,
          isError: true,
          isAjax: false
        }
  
      case EDIT_DATA_START:
        return {
          ...state,
          isError: false,
          isAjax: true
        }
  
      case EDIT_DATA_END:
        return {
          ...state,
          isError: false,
          isAjax: false,
          data: action.payload
        }
  
      case EDIT_DATA_ERROR:
        return {
          ...state,
          isError: true,
          isAjax: false
          
        }
      
        case CREAT_DATA_START:
          return {
            ...state,
            isError: false,
            isAjax: true
          }
    
        case CREAT_DATA_END:
          return {
            ...state,
            isError: false,
            isAjax: false,
            data: action.payload
          }
    
        case CREAT_DATA_ERROR:
          return {
            ...state,
            isError: true,
            isAjax: false
            
          }  

      default:
        return state
    }
  }