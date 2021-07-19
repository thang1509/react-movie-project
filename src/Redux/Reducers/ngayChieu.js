const initialState ={
    ngayChieuGioChieu:[]
}
function ngayChieu(state=initialState,action){
    switch(action.type){
        case "NGAY_CHIEU":{
            let date = new Date("2019-01-01")
            for(let i=1;i<10;i++){
                state.ngayChieuGioChieu.push(date.toISOString().slice(0,10))
                date.setDate(date.getDate()+1)
                
            }

            return{...state}
        }
        default:
            return {...state}
        
    }
}
export default ngayChieu