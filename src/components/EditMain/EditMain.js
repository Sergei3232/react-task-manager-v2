import React from 'react'
import { Link } from 'react-router-dom'

const EditForm = (props) => {
    
    let { valueTask } = props
    
    const LinkText = (<Link to='/' className='page-index__btn-def'>
                        <span className="page-index__btn-def-name">Вернуться к списку</span>
                      </Link>)

    return (
        <div className="page-index__main">
            <div className="page-index__form">
                <div className="page-index__form-group">
                    <label for="title" className="page-index__form-label">Краткое описание</label>
                    {/* <input type="text" className="page-index__form-input" value={props.valueTask.title} /> */}
                    <input type="text" 
                        className="page-index__form-input" 
                        defaultValue={valueTask} 
                        onChange ={(event)=>{valueTask = event.target.value
                            console.log("Значение новое:",valueTask)}}/> 
                    
                    <span className="page-index__form-notify"></span>
                </div>
                <div className="page-index__form-group-bottun">
                    {LinkText}
                        {/* <Link to='/' className='page-index__btn-def'>
                            <span className="page-index__btn-def-name">Вернуться к списку</span>
                        </Link> */}

                </div>
            </div>
        </div>
    )

}

export default EditForm