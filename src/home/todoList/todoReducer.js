const INITIAL_VALUE = { list: [], description: '' }

export default (state = INITIAL_VALUE, action) => {
	switch(action.type){
		case 'GET_TODOS':
			return {...state, list: action.payload.data}
		default:
			return state
			
		
	}
}