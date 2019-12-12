import React from 'react'
import { useHistory } from "react-router-dom"

function HeaderAdd(props) {
   
    const { actionButton, titleForm, textButton, id = null } = props
    let history = useHistory();
    
    return (
     <div className="page-index__header">
        <div className="page-index__header_title">
            <h1>{titleForm}</h1>
        </div>
        <div className="page-index__header_bottun">
            <button onClick={() => {
                actionButton({id}) 
                if(id!=null){
                    history.push("/");
                }   
            }}>
                
                <span>{textButton}</span>
            </button>
        </div>   
     </div>
    )
}

export default HeaderAdd

    