import React from 'react'
import './Row.scss'
import { Link } from 'react-router-dom'

function Row(props) {
  const { deleteRow, id, title } = props
  return (
    <div className="table-row">

      <div className="table-row__table-coll table-row__id"> {id} </div>

      <div className="table-row__table-coll table-row__title"> {title} </div>

      <div className="table-row__table-coll table-row__action">
        <ul>
          <li className="table-row__button-icon table-row__edi">
            <Link to={`/items/${id}`} >
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title></title>
                <g id="icomoon-pencil">
                </g>
                <path d="M432 0c44.182 0 80 35.817 80 80 0 18.010-5.955 34.629-16 48l-32 32-112-112 32-32c13.371-10.045 29.989-16 48-16zM32 368l-32 144 144-32 296-296-112-112-296 296zM357.789 181.789l-224 224-27.578-27.578 224-224 27.578 27.578z"></path>             
              </svg>
            </Link>
          </li>
          <li className="table-row__button-icon table-row__del">
            <a onClick={() => { deleteRow({ id }) }}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title></title>
                <g id="icomoon-bin">
                </g>
                <path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32v-320h-352zM160 448h-32v-224h32v224zM224 448h-32v-224h32v224zM288 448h-32v-224h32v224zM352 448h-32v-224h32v224z"></path>
                <path d="M424 64h-104v-40c0-13.2-10.8-24-24-24h-112c-13.2 0-24 10.8-24 24v40h-104c-13.2 0-24 10.8-24 24v40h416v-40c0-13.2-10.8-24-24-24zM288 64h-96v-31.599h96v31.599z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Row