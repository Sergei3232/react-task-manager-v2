import React from 'react'
import {Link} from 'react-router-dom'
function HeaderAdd(props) {
   
    const { actionButton, titleForm, textButton, id = '' } = props
    
    return (
     <div className="page-index__header">
        <div className="page-index__header_title">
            <h1>{titleForm}</h1>
        </div>
        <div className="page-index__header_bottun">
            <button onClick={() => {
                console.log(id);
                actionButton({id})    
            }}>
                
                <span>{textButton}</span>
            </button>
        </div>   
     </div>
    )
}

export default HeaderAdd

    