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

    const { getData, deleteRow, editRow, openPopUp } = props
    const { todoData: { isAjax, isEmpty, data, popUp } } = props

    useEffect(() => {
        getData()
    }, [])

    const windowPopUp = popUp ? <PopUp /> : null

    if (isAjax || isEmpty) { return <div>пусто</div> }

    return (
        <div className="page-index">
            <Switch>
                <Route path='/' exact >
                    <HeaderAdd actionButton={openPopUp} titleForm="Список задач" textButton="Добавить" />
                    <TableRow data={data} deleteRow={deleteRow}/>
                </Route>
                <Route path='/items/:id' render={({ match }) => {
                    const { id } = match.params;
                    const valueTask = data.find((element) => { if (element.id == id) { return (element.title) } })
                    return (
                        <>
                            <HeaderAdd actionButton={(id) => { deleteRow(id) }} titleForm={`Задача №${id}`} textButton="Удалить" id={id} />
                            <EditForm valueTask={valueTask.title} />
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