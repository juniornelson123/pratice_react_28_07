import React, {Component} from 'react'

import Header from '../common/layout/header/header'
import Form from './todoList/todoListForm'
import TodoList from './todoList/todoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodo } from './todoList/todoActions'  
class Home extends Component {
	render(){
		return(
			<div>
				<Header />
				<section className="jumbotron text-center">
			      	<div className="container">
				        <h1 className="jumbotron-heading">Adicione uma tarefa</h1>
				    	<Form onSubmit={this.props.addTodo}/>
			    	</div>
			    </section>
			    <TodoList />		
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({addTodo}, dispatch)
export default connect(null, mapDispatchToProps)(Home)