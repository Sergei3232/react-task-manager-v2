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
        <div className="page-index">
            <div className="page-index__header">
                <div className="page-index__header_title">
                    <h1>Список задач</h1>
                </div>
                <div className="page-index__header_bottun">
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

                            deleteRow={(id) => { deleteRow(id) }}

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

            {/* <div class="popup-index"> */}
                {/* <div class="popup">
                    <div class="popup__main">
                        <div class="popup__main_wraper">
                            <button class="popup__main_button">
                                <i></i>
                            </button>
                        </div>

                        <div class="popup__main_grup">
                            <div class="popup__main_grup1">
                                <label>Краткое описание</label>
                                <input type="text" class="popup__main_grup1_input" value=""></input>
                                <span class="popup__main_grup1_input-notify"></span>

                            </div>
                            <div class="popup__main_grup2">
                                <button>
                                    <span>Создать</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
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