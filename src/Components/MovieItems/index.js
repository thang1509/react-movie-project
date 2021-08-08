import React, { Component,useEffect } from 'react'
import Detail from '../../Pages/Detail';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchMovieDetail} from '../../Redux/Action/movie'
import index from './index.scss'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function MovieItems(props) {
    const {item} = props
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchMovieDetail(item.maPhim))
    // }, [])
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div className="movie-item card p-2">
             <Link className="tag"  to={`/detail/${item.maPhim}`}>
                <img src={item.hinhAnh} style={{width:'100%',height:'350px'}} alt="img"/>
                <p className="lead">{item.tenPhim}</p>
               
                <div>
                
                </div>

                
             
                </Link>
               <a className="link" onClick={handleOpen} type="button"><i class="link1 fa fa-play"></i></a> 
                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 50000,
        }}
      >
        <Fade in={open}>
          
            
            <iframe id="trailer" width="660" height="500" src={item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
        </Fade>
      </Modal>
                
               
         
            </div>
    )
}

// export default class MovieItems extends Component {
//     //  getMovie =(data)=>{
//     //     console.log(data);
//     // }
//     render() {
//         return (
//             <div className="card p-2">
//                 <img src={this.props.item.hinhAnh} style={{width:'100%',height:'300px'}}/>
//                 <p className="lead">{this.props.item.tenPhim}</p>
//                 <p className="lead">{this.props.item.biDanh}</p>
//                 <p className="lead">{this.props.item.danhGia}</p>
//                 <button className="btn btn-success "
//                 //  onClick={this.getMovie(this.props.item.maPhim)}
//                  >detail</button>
//             </div>
//         )
//     }
// }
