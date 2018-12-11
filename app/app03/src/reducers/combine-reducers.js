import {combineReducers} from  "redux"
import UsersReducers from './reducer-users'
import MoviesReducers from './reducer-movies'
import ReduceUserClicked from './reducer-userclicked'

const allReducers = combineReducers({

users:UsersReducers,
movies:MoviesReducers,
clickeduser:ReduceUserClicked

})
export default allReducers