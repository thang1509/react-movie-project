import {combineReducers} from 'redux'
import adminReducer from './admin';
import checkoutService from './checkout';

import MovieReducer from './movie'
import ngayChieu from './ngayChieu';
import rapPhimService from './rap';
import UserReducer from './user'

const RootReducer = combineReducers({
    movie: MovieReducer,
    user: UserReducer,
    rap: rapPhimService,
    checkout: checkoutService,
    admin: adminReducer,
    ngay: ngayChieu
})

export default RootReducer;