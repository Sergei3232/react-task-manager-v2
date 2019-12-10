import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'

function HeaderAdd(props) {
   
    const { actionButton, titleForm, textButton } = props
    
    return (<div className="page-index__header">
        <div className="page-index__header_title">
            <h1>{titleForm}</h1>
        </div>
        <div className="page-index__header_bottun">
            <button onClick={() => {
                actionButton()
            }}>
                <span>{textButton}</span>
            </button>
        </div>

    </div>)
}

export default HeaderAdd

    