import { DAT_GHE,HUY_GHE } from "./type"

export function datGhe(ghe){
    return (dispatch)=>{
        dispatch({
            type:DAT_GHE,
            ghe
        })
    }
}

export function huyGhe(soGhe){
    return (dispatch)=>{
        dispatch({
            type:HUY_GHE,
            payload:soGhe
        })
    }
}
export function doiGheDaDat(daDat){
    return(dispatch)=>{
        dispatch({
            type:"DADAT",
            payload:daDat
        })
    }
}
