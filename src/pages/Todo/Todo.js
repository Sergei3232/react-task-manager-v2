import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

function Todo (props) {

    const { getData, deleteRow, editRow, todoData: { isAjax, isEmpty, data } } = props

    useEffect(() => {
        getData()
    }, [])

    if (isAjax || isEmpty) {
        return <div>пусто</div>
    }

    return (
        <div>
            <div>
                <h1>Список задач</h1>
                <button>Добавить</button>
            </div>
            {/* <div className={css.table}>
                {
                    data.map((item, key) => {
                        return <Row
                            {...item}
                            className={css.item}
                            deleteRow={(id) => {
                                
                                deleteRow(id)
                            }}
                            editRow={(id) => {
                                editRow({ id, text: "Редактирование" })
                            }}
                            key={key} />
                    })
                }
            </div> */}
            
        </div>
    )
}
const mapStateToProps = state => ({
    todoData: state.todoData
})

const mapDispatchToProps = {
    getData: actionCreators.getData,
    deleteRow: actionCreators.deleteRow,
    editRow: actionCreators.editRow
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Todo)