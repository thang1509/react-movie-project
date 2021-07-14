import { DAT_GHE, FETCH_CHECKOUT_FAILURE, FETCH_CHECKOUT_RESPONSE, FETCH_CHECKOUT_SUCCESS, FETCH_RAPPHIM_FAILURE, FETCH_RAPPHIM_SUCCESS, HUY_GHE, MUA_VE, MUA_VE_FAILURE, MUA_VE_REPOSNE } from "../Action/type";

const initialState ={
    checkOut:{},
    dsGhe:[],
    isLoading: false,
    error:null,
    dsGheDangDat:[],
    muave:{},
    // thongTin:{},
  
    
}

function checkoutService(state= initialState,action){
    switch(action.type){
        case FETCH_CHECKOUT_RESPONSE:{
            return {...state,isLoading:true,error:null}
        };
        case FETCH_CHECKOUT_SUCCESS:{
            return {...state,checkOut:action.payload.data.thongTinPhim,dsGhe:action.payload.data.danhSachGhe,isLoading:false,error:null}
        };
        case FETCH_CHECKOUT_FAILURE:{
            return{...state,isLoading:false,error:action.payload.error}
        };
        case DAT_GHE:{
            let dsGheDangDatUpdate = [...state.dsGheDangDat]
            let index = dsGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.maGhe===action.ghe.maGhe)
            if(index !== -1){
                dsGheDangDatUpdate.splice(index,1)
            }
            else{
                dsGheDangDatUpdate.push(action.ghe)
                // state.dsGheDangDat.push(action.ghe)
                  
            }
            state.dsGheDangDat = dsGheDangDatUpdate 
            
            return {...state}
        }
        case HUY_GHE:{
            let dsGheDangDatUpdate = [...state.dsGheDangDat]
            let index = dsGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe===action.payload.soGhe)
            if(index !== -1){
                dsGheDangDatUpdate.splice(index,1)
            }
           
            state.dsGheDangDat = dsGheDangDatUpdate 
            return{...state}
        }
        case MUA_VE_REPOSNE:{
            return{...state,isLoading:true}
        }
        case MUA_VE:{
            return{...state,muaVe:action.payload}
        }
        case MUA_VE_FAILURE:{
            return{...state}
        }
        // case "thongtin":{
        //     return{...state,thongTin:action.payload}
        // }
        case "DADAT":{
            return {...state,dsGheDangDat:action.payload.daDat,dsGhe:action.payload}
        }
        default:
            return {...state};
    }
}

export default checkoutService