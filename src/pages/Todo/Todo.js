import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './Todo.scss'
import Row from '../../components/Row/Row'
import PopUp from '../../components/PopUp/PopUp'

function Todo(props) {

    const { getData, deleteRow, editRow, createRow, openPopUp, closePopUp, todoData: { isAjax, isEmpty, data, popUp} } = props

    useEffect(() => {
        getData()
    }, [])
    
    let windowPopUp = "";
    if(popUp){
        windowPopUp = <PopUp/>    
    }

    if (isEmpty) {
        return <div>пусто</div>
    }

    return (
        <div className="page-index">
        
            <div className="page-index__header">
                <div className="page-index__header_title">
                    <h1>Список задач</h1>
                </div>
                <div className="page-index__header_bottun">
                    <button onClick = {()=>{
                        openPopUp()
                        
                    }}>
                        <span>Добавить</span>
                    </button>
                </div>

            </div>
            <div className="page-index__main">
                {
                    data.map((item, key) => {
                        return <Row
                            {...item}

                            deleteRow={(id) => { deleteRow(id) }}

                            editRow={(id) => {
                                editRow({ id, text: "Редактирование" })
                            }}
                            key={item.id} />
                    })
                }
            </div>
            <div className="page-index__footer">
                <p>© 2019 АО "Мегаполис"</p>
            </div>
            {windowPopUp}

         </div>
        )
}
const mapStateToProps = state => ({
    todoData: state.todoData
})

const mapDispatchToProps = {
    getData: actionCreators.getData,
    deleteRow: actionCreators.deleteRow,
    editRow: actionCreators.editRow,
    openPopUp: actionCreators.openPopUp,
    closePopUp: actionCreators.closePopUp,
    createRow: actionCreators.createRow
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Todo)