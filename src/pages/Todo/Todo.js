import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './Todo.scss'
import Row from '../../components/Row/Row'

function Todo(props) {

    const { getData, deleteRow, editRow, todoData: { isAjax, isEmpty, data } } = props

    useEffect(() => {
        getData()
    }, [])

    if (isAjax || isEmpty) {
        return <div>пусто</div>
    }

    return (
        <div className = "page-index">
            <div className = "page-index__header">
                <div className = "page-index__header_title">
                    <h1>Список задач</h1>
                </div>
                <div  className = "page-index__header_bottun">
                    <button>
                        <span>Добавить</span>
                    </button>
                </div>

            </div>
            <div className="page-index__main">
                {
                    data.map((item, key) => {
                        return <Row
                            {...item}
                            
                            deleteRow={(id) => {deleteRow(id)}}
                            
                            editRow={(id) => {
                                editRow({ id, text: "Редактирование" })
                            }}
                            key={key} />
                    })
                }    
            </div>
            <div className="page-index__footer">
                <p>© 2019 АО "Мегаполис"</p>
            </div>


            {/* <div > */}
            {/* <div className={css.h_title}>
                        <h1>Список задач</h1>
                    </div>
                    <div className={css.h_adding}>
                        <button className = {css.btn_icon}>
                            <span>Добавить</span>
                        </button>
                    </div> */}

            {/* </div> */}
            {/* <div > */}
            {/* {
                    data.map((item, key) => {
                        return <Row
                            {...item}
                            className={css.item}
                            deleteRow={(id) => {deleteRow(id)}}
                            
                            editRow={(id) => {
                                editRow({ id, text: "Редактирование" })
                            }}
                            key={key} />
                    })
                }   */}
            {/* </div> */}
            {/* <div > */}

            {/* </div> */}


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