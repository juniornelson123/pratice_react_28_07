import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import labelAndInput from '../../common/form/labelAndInput'

class TodoListForm extends Component{
	render(){
		const { handleSubmit } = this.props

		return(
			<form role="form" onSubmit={handleSubmit}>
				<Field component={labelAndInput} name="description" label="Descrição" readOnly={false} />
				
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

const mapStateToProps = state => ({ todo: state.todo })

TodoListForm = reduxForm({form: 'TodoListForm', destroyOnUnmount: false})(TodoListForm)
export default connect(mapStateToProps)(TodoListForm)