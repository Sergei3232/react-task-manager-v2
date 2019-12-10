import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'

function HeaderAdd(props) {

    const { openPopUp } = props

    return (<div className="page-index__header">
        <div className="page-index__header_title">
            <h1>Список задач</h1>
        </div>
        <div className="page-index__header_bottun">
            <button onClick={() => {
                openPopUp()

            }}>
                <span>Добавить</span>
            </button>
        </div>

    </div>)
}

const mapDispatchToProps = {   
    openPopUp: actionCreators.openPopUp
}

export default connect(null, mapDispatchToProps)(HeaderAdd)
    