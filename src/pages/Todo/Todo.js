import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../actions/todo.action'
import { Switch, Route } from 'react-router-dom'
import { compose } from 'redux'
import './Todo.scss'

import PopUp from '../../components/PopUp/PopUp'
import HeaderAdd from '../../components/header/headerAdd'
import TableRow from '../../components/tableRow/tableRow'
import Footer from '../../components/footer/footer'

function Todo(props) {

    const { getData, deleteRow, editRow, openPopUp, todoData: { isAjax, isEmpty, data, popUp } } = props

    useEffect(() => {
        getData()
    }, [])

    let windowPopUp = "";
    if (popUp) {
        windowPopUp = <PopUp />
    }

    if (isAjax || isEmpty) {
        return <div>пусто</div>
    }

    return (
        <div className="page-index">
            <Switch>
                
                <Route path='/' exact >
                    <HeaderAdd actionButton={openPopUp} titleForm="Список задач" textButton="Добавить" />
                    <TableRow data={data} deleteRow={deleteRow} deleteRow={editRow} />
                </Route>
                <Route path='/items/:id' render={({match}) => {
                    const { id } = match.params;
                     return (<HeaderAdd actionButton={(id) => { deleteRow(id) }} titleForm={`Задача №${id}`} textButton="Удалить" id={id} /> )     
                }} />
                <div className="page-index__main">
                
                <Route path='/items/:id'>
                    <Footer />    
                </Route>
                </div>
                


                
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

// export default compose(
//     withRouter,
//     connect(mapStateToProps, mapDispatchToProps)
// )(Todo)
export default connect(mapStateToProps, mapDispatchToProps)(Todo)