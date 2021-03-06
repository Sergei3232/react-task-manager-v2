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
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <title></title>
                                <g id="icomoon-cross">
                                </g>
                                <path d="M507.331 411.33c-0.002-0.002-0.004-0.004-0.006-0.005l-155.322-155.325 155.322-155.325c0.002-0.002 0.004-0.003 0.006-0.005 1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688 0.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.080 0.775-4.035 1.984-5.709 3.655 0 0.002-0.002 0.003-0.004 0.005l-155.324 155.326-155.324-155.325c-0.002-0.002-0.003-0.003-0.005-0.005-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-0.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914 0.776 2.080 1.985 4.036 3.656 5.708 0.002 0.001 0.003 0.003 0.005 0.005l155.325 155.324-155.325 155.326c-0.001 0.002-0.003 0.003-0.004 0.005-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-0.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.080-0.776 4.035-1.985 5.708-3.656 0.001-0.002 0.003-0.003 0.005-0.005l155.324-155.325 155.324 155.325c0.002 0.001 0.004 0.003 0.006 0.004 1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342 0.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-0.776-2.080-1.985-4.034-3.657-5.707z"></path>
                           </svg>
                            
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