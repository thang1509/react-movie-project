import { FETCH_MOVIES, FETCH_MOVIE_DETAIL, FETCH_MOVIE_DETAIL_FAILURE, FETCH_MOVIE_DETAIL_REQUSET, FETCH_MOVIE_FAILURE, FETCH_MOVIE_REQUEST, THEM_PHIM_FAILURE, THEM_PHIM_RESPONSE, THEM_PHIM_SUCCESS } from "../Action/type";

const initialState={
    isLoading: false,
    movies:[],
    movieDetail:{},
    heThongLichChieu:[],
    lichChieu:[],
    error:null,
    dsPhimTheoNgay:[]
}

function MovieReducer(state = initialState , action){
    switch(action.type){
        case FETCH_MOVIE_REQUEST:
            return{...state,isLoading:true,error:null}
        case FETCH_MOVIES:{
          
            return{...state,movies:action.payload.data,isLoading:false,error:null}
        }
        case FETCH_MOVIE_FAILURE:{
            return{...state,isLoading:false,error:action.payload.error}
        }
        case FETCH_MOVIE_DETAIL_REQUSET:
            return{...state,isLoading:true,error:null}
        case FETCH_MOVIE_DETAIL:
            return{...state,movieDetail:action.payload.data,heThongLichChieu:action.payload.data.heThongRapChieu,isLoading:false}
        case FETCH_MOVIE_DETAIL_FAILURE:{
            return{...state,isLoading:false,error:action.payload.error}
            }
        // case "dsTheoNgay":{
        //     return{...state,dsPhimTheoNgay:action.payload}
        // }
        default:
            return state;
    }
}
export default MovieReducer