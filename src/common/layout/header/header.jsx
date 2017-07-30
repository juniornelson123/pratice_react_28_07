import React, { Component } from 'react'
import If from '../../operator/if'

class Header extends Component{
	constructor(props){
		super(props)

		this.state = { open: false }
	}

	openClose(){
		if (this.state.open) {
			this.setState({...this.state, open: false})
		}else{
			this.setState({...this.state, open: true})

		}
	}

	render(){
		return(
			<div>
				<If test={this.state.open}>
					<div className="bg-inverse" id="navbarHeader">
				      <div className="container">
				        <div className="row">
				          <div className="col-sm-8 py-4">
				            <h4 className="text-white">Sobre</h4>
				            <p className="text-muted">Uma aplicacao de teste para lista de afazeres</p>
				          </div>
				          <div className="col-sm-4 py-4">
				            <h4 className="text-white">Todo List</h4>
				            <ul className="list-unstyled">
				              <li><a href="#" className="text-white">Exemplo para nao esquecer</a></li>
				              <li><a href="#" className="text-white">Tem que praticar</a></li>
				            </ul>
				          </div>
				        </div>
				      </div>
				    </div>
				</If>
				<div className="navbar navbar-inverse bg-inverse">
			      <div className="container d-flex justify-content-between">
			        <a href="#" className="navbar-brand">Todo List</a>
			    	<ul className="nav navbar-nav navbar-right">
				       <li><a onClick={() => this.openClose()} >Mais informacoes</a></li>
				   	</ul>
			    	</div>
			    </div>
			</div>
		)
	}
}

export default Header