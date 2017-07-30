import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../../common/operator/if'

import { getTodos, openClose, removeTodo } from './todoActions'
class TodoList extends Component{

	constructor(props){
		super(props)
		this.props.getTodos()
	}
	renderList(){
		const list = this.props.list || []
		return(
			list.map(todo => (

				<div className="card" key={todo.id}>
					<p className="card-text">{todo.description}</p>
					<If test={!todo.done}>
						<button className="btn btn-danger" type="button" onClick={ () => this.props.openClose(todo) } >Fechar Tarefa</button>
					</If>
					<If test={todo.done}>
						<button className="btn btn-primary" type="button" onClick={ () => this.props.openClose(todo) }>Reabrir Tarefa</button>
					</If>
					<If test={todo.done}>
						<button className="btn btn-warning" type="button" onClick={ () => this.props.removeTodo(todo) }><i className="glyphicon glyphicon-remove" /></button>
					</If>
				</div>
			))
		)
	}	
	render(){
		return(
			<div className="album text-muted">
				<div className="container">
					<div className="row">
						{this.renderList()}
					</div>
				</div>	
			</div>	
		)
	}
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({getTodos, openClose, removeTodo}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)