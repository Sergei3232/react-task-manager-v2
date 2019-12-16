import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'
import { Switch, Route } from 'react-router-dom'
import './Todo.scss'

import PopUp from '../../components/PopUp/PopUp'
import HeaderAdd from '../../components/header/headerAdd'
import TableRow from '../../components/tableRow/tableRow'
import EditForm from '../../components/EditMain/EditMain'
import Footer from '../../components/footer/footer'

const Todo = (props) => {

    const { getData, deleteRow, openPopUp } = props
    const { todoData: { isAjax, isEmpty, data, popUp } } = props

    const svgItemsDel = (<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <title></title>
                        <g id="icomoon-bin">
                        </g>
                        <path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32v-320h-352zM160 448h-32v-224h32v224zM224 448h-32v-224h32v224zM288 448h-32v-224h32v224zM352 448h-32v-224h32v224z"></path>
                        <path d="M424 64h-104v-40c0-13.2-10.8-24-24-24h-112c-13.2 0-24 10.8-24 24v40h-104c-13.2 0-24 10.8-24 24v40h416v-40c0-13.2-10.8-24-24-24zM288 64h-96v-31.599h96v31.599z"></path>
                    </svg>)

    useEffect(() => {
        getData()
    }, [])

    const windowPopUp = popUp ? <PopUp /> : null

    if (isAjax || isEmpty) { return <div>пусто</div> }

    return (
        <div className="page-index">
            
            <Switch>
                <Route path='/' exact >
                    <HeaderAdd actionButton={openPopUp} titleForm="Список задач" textButton="Добавить" svgItems = {null}/>
                    <TableRow data={data} deleteRow={deleteRow}/>
                </Route>
                <Route path='/items/:id' render={({ match }) => {
                    const { id } = match.params;
                    const valueTask = data.find((element) => { if (element.id == id) { return (element.title) } })
                    return (
                        <>
                            <HeaderAdd actionButton={(id) => { deleteRow(id) }} titleForm={`Задача №${id}`} textButton="Удалить" id={id} svgItems = {svgItemsDel}/>
                            <EditForm valueTask={valueTask.title} id={id}/>
                        </>)
                }} />
            </Switch>
            <Footer />

            {windowPopUp}

        </div>
    )
}
const mapStateToProps = state => ({
    todoData: state.todoData
})

const mapDispatchToProps = {
    getData: actionCreators.getData,
    deleteRow: actionCreators.deleteRow,
    editRow: actionCreators.editRow,
    openPopUp: actionCreators.openPopUp,
    closePopUp: actionCreators.closePopUp,
    createRow: actionCreators.createRow
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)