import classes from './Modal.module.css';
import React from 'react-dom'
const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}


const overlays = document.getElementById('overlays');

const Modal = props => {
    return <>
    {React.createPortal(<Backdrop />, overlays)}
    {React.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays) }
    </>
}

export default Modal;