import React from 'react'
import Row from '../../components/Row/Row'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

function TableRow(props) {

    const { deleteRow, editRow, todoData: { data } } = props

    return (
        <div className="page-index__main">
            {
                data.map((item) => {
                    return <Row
                        {...item}

                        deleteRow={(id) => { deleteRow(id) }}

                        editRow={(id) => {
                            editRow({ id, text: "Редактирование" })
                        }}
                        key={item.id} />
                })
            }
        </div>)
}

const mapStateToProps = state => ({
    todoData: state.todoData
})

const mapDispatchToProps = {
    deleteRow: actionCreators.deleteRow,
    editRow: actionCreators.editRow,
    createRow: actionCreators.createRow
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(TableRow)
