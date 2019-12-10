import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'
import './PopUp.SCSS'

function PopUp(props) {

    const { createRow, closePopUp } = props
    let valueImput = '';

    return (
    <div className="popup-index">
        <div className="popup">
            <div className="popup__main">

                <div className="popup__main_wraper">
                    <button className="popup__main_button" onClick={() => { closePopUp() }}>
                        <i></i>
                    </button>
                </div>

                <div className="popup__main_grup">
                    <div className="popup__main_grup1">
                        <label>Краткое описание</label>
                        <input type="text" className="popup__main_grup1_input" onChange={(event) => {
                            valueImput = event.target.value
                        }}>

                        </input>
                        <span className="popup__main_grup1_input-notify"></span>

                    </div>
                    <div className="popup__main_grup2">
                        <button onClick={() => {
                            createRow({ text: valueImput })
                            closePopUp()
                        }}>
                            <span>Создать</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

const mapDispatchToProps = {
    
    closePopUp: actionCreators.closePopUp,
    createRow: actionCreators.createRow
}


export default connect(null, mapDispatchToProps)(PopUp)