import React from 'react'
import css from './Row.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

function Row (props) {
  const { deleteRow, editRow, id, title, className } = props
  return (
    <div className={cn(css.tableRow, className)}>
      
      <div className = {css.id}>
        {id}  
      </div>

      <div className = {css.title}>
        {title}
      </div>

      <div className = {css.action}>
        <ul className = {css.actionUl}>
            <li className = {css.liEdit}>
                <a>
                    <i></i>
                </a>
            </li>
            <li className = {css.liDel}>
                <a>
                    <i></i>
                </a>
            </li>
        </ul>
      </div>

      {/* <button
          onClick={() => {
            editRow(id)
          }}>
          Ре
        </button>
        <button
          onClick={() => {
            deleteRow({id})
          }}
        >
          Уд
        </button> */}

        
      
    </div>
  )
}

Row.propTypes = {
  deleteRow: PropTypes.func,
  editRow: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string
}

export default Row