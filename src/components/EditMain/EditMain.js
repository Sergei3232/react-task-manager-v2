import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'

const EditForm = (props) => {
    
    const { editButtonOpen, editButtonClose, valueTask, todoData: { buttonEdit } } = props 
    let newValueTask = valueTask;
    
    const LinkText = buttonEdit?(<button to='/' className='page-index__btn-def'>
                                    <span className="page-index__btn-def-name">Сохранить</span>
                                </button>):
                            (<Link to='/' className='page-index__btn-def'>
                                <span className="page-index__btn-def-name">Вернуться к списку</span>
                            </Link>)    

    return (
        <div className="page-index__main">
            <div className="page-index__form">
                <div className="page-index__form-group">
                    <label for="title" className="page-index__form-label">Краткое описание</label>
                    
                    <input type="text" 
                        className="page-index__form-input" 
                        defaultValue={newValueTask} 
                        onChange ={(event)=>{
                            newValueTask = event.target.value
                            if(newValueTask===valueTask){
                                editButtonClose()
                            }else{
                                editButtonOpen()    
                            }}}/>                     
                    <span className="page-index__form-notify"></span>
                </div>
                <div className="page-index__form-group-button">
                    {LinkText}

                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    todoData: state.todoData
})

const mapDispatchToProps = {
    editButtonOpen: actionCreators.editButtonOpen,
    editButtonClose: actionCreators.editButtonClose
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
