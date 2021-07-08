
import  movieService  from "../../Services/movie";
import { FETCH_MOVIES, FETCH_MOVIE_DETAIL, FETCH_MOVIE_DETAIL_FAILURE, FETCH_MOVIE_DETAIL_REQUSET, FETCH_MOVIE_FAILURE, FETCH_MOVIE_REQUEST } from "./type";

// async action
export function fetchMovies(){
    return async (dispatch)=>{
        dispatch({type:FETCH_MOVIE_REQUEST});
        try{
            const {data} = await movieService.listMovies();
            dispatch({type:FETCH_MOVIES,payload:{data}});
        }catch(error){
            dispatch({
                type:FETCH_MOVIE_FAILURE,
                payload:{error:error.response.data},
            })
        }
        // movieService.listMovies()
        // .then(res=>{
        //     dispatch(creationAction(FETCH_MOVIES,res.data))
        // }).catch((err)=>{
        //     console.log(err);
        // })
       
    }
}
export function fetchMovieDetail(value){
    return async (dispatch)=>{
        dispatch({type:FETCH_MOVIE_DETAIL_REQUSET});
        try{
            const {data} = await movieService.movieDetail(value);
            dispatch({type:FETCH_MOVIE_DETAIL,payload:{data}});
            
        }catch(error){
            dispatch({
                type:FETCH_MOVIE_DETAIL_FAILURE,
                payload:{error:error.reponse.data},
            })
        }
      
    }
    // movieService.movieDetail()
    // .then(res=>{
    //     dispatch(creationAction(FETCH_MOVIE_DETAIL,res.data))
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
}
