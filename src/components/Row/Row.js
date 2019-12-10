import React from 'react'
import './Row.scss'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Row (props) {
  const { deleteRow, id, title} = props
  return (
    <div className="table-row">
      
      <div className = "table-row__table-coll table-row__id"> {id} </div>

      <div className = "table-row__table-coll table-row__title"> {title} </div>

      <div className = "table-row__table-coll table-row__action">
        <ul>
            <li className = "table-row__button-icon table-row__edi">
                <Link to = {`/items/${id}`} ></Link>
            </li>
            <li className = "table-row__button-icon table-row__del">
                <a onClick = {()=>{deleteRow({id})}}></a>
            </li>
        </ul>
      </div>
 
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