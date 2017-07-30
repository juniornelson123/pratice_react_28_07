import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const api = 'http://localhost:3000'
const INITIAL_VALUES = {description: ''}
export function getTodos(){
	return dispatch => {
		axios.get(`${api}/todos`).then(todos => {
			dispatch([
				{type: 'GET_TODOS', payload: todos},
				initialize('TodoListForm', INITIAL_VALUES)

			])
		})
		.catch(error => {
			console.log(error)
			toastr.error("Erro", "Nao foi possivel obter as tarefas")
		})
	}
}

export function addTodo(values){
	console.log(values)
	return dispatch =>{
		axios.post(`${api}/todos`, values).then(todo => {
			toastr.success("Sucesso", "Operação Realizada com sucesso")
			dispatch(getTodos())
		})
		.catch(error => {
			console.log(error)
			toastr.error("Erro", "Não foi possivel salvar registro")
		})
	}		
}

export function removeTodo(todo){
	return dispatch => {
		axios.delete(`${api}/todos/${todo.id}`).then(todo => {
			toastr.success("Deletado")
			dispatch(getTodos())
		})
		.catch(error => {
			toastr.error("Erro", "Erro ao deletar tast")
		})
	}
}

export function openClose(todo){
	var done = true
	if (todo.done) {
		done = false
	}
	return dispatch => {

		axios.put(`${api}/todos/${todo.id}`,{done: done}).then(todo => {
			toastr.success("Sucesso")
			dispatch(getTodos())
		})
		.catch(error => {
			console.log(error)
			toastr.error("Erro", "Não foi possivel fechar a tarefa")
		})
	}
}