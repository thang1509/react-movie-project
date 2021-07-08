import React from 'react'
import carousel1 from '../../Assets/img/ban-tay-diet-quy-evil-expeller-16177781815781.png'
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
export default function Carousel() {
  // let isFalse = false
  // const handleChange =()=>{
  //   isFalse =!isFalse
  //   if(isFalse){
  //     document.getElementById("btn").style.backgroundColor="red"
    
  //   }else
  //   document.getElementById("btn").style.backgroundColor="blue"
    
  // }
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    return (
      <>
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active ">
     <a className="w-100" type="button"  onClick={handleOpen}><img className="img-fluid w-100" src={carousel1} alt />
</a>

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
          
            
            <iframe id="trailer" width="660" height="500" src="https://www.youtube.com/embed/gFlqRCto2zY" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
        </Fade>
      </Modal>
<div class="button">
        <a  className="w-100" type="button"  onClick={handleOpen}><i class="fa fa-play-circle"></i></a>
            </div>
    </div>
    <div className="carousel-item">
    <a className="w-100" type="button"  onClick={handleOpen}><img className="img-fluid w-100" src={carousel1} alt />
</a>

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
          
            
            <iframe id="trailer" width="660" height="500" src="https://www.youtube.com/embed/gFlqRCto2zY" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
        </Fade>
      </Modal>
<div class="button">
        <a  className="w-100" type="button"  onClick={handleOpen}><i class="fa fa-play-circle"></i></a>
            </div>
    </div>
    <div className="carousel-item">
    <a className="w-100" type="button"  onClick={handleOpen}><img className="img-fluid w-100" src={carousel1} alt />
</a>

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
          
            
            <iframe id="trailer" width="660" height="500" src="https://www.youtube.com/embed/gFlqRCto2zY" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
        </Fade>
      </Modal>
<div class="button">
        <a  className="w-100" type="button"  onClick={handleOpen}><i class="fa fa-play-circle"></i></a>
            </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
 
</div>
{/* <button id="btn" className="btn" onClick={handleChange}>click</button> */}
</>


    )
}
