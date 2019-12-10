import React from 'react'
import { link } from 'fs'
// import { Link } from 'react-router-dom'

const EditForm = (props) => {

    return (
        <div className="page-index__main">
        <div class="page-index__form">
            <div class="page-index__form-group">
                <label for="title" class="page-index__form-label">Краткое описание</label>
                <input type="text" class="page-index__form-input" />
                <span class="page-index__form-notify"></span>
            </div>
            <div class="page-index__form-group-bottun">
                <button class="page-index__btn-def" onClick = {}>
                    <span class="page-index__btn-def-name">Вернуться к списку</span>
                </button>
            </div>
        </div>
        </div>
    )

}

export default EditForm