import {combineReducers} from 'redux'
import adminReducer from './admin';
import checkoutService from './checkout';

import MovieReducer from './movie'
import rapPhimService from './rap';
import UserReducer from './user'

const RootReducer = combineReducers({
    movie: MovieReducer,
    user: UserReducer,
    rap: rapPhimService,
    checkout: checkoutService,
    admin: adminReducer,
})

export default RootReducer;