import React from "react";
import s from "./Modal.module.scss";
const Modal = (props) => {

    let handleClick = (e) => {
        if ( e.target.className.includes('js-modal-close') ) {
            props.closeModal();
        }
    };

    return (
        <div className={`${s.modal__wrapper} js-modal-close`} onClick={handleClick}>
            <div className={s.modal}>
                <div className={s.modal__contain}>
                    <div className={s.modal__body}>
                        <div className={s.modal__header}>
                            <h3>{props.title}</h3>
                            <div><button className={s.modal__closeBtn} onClick={props.closeModal}>[X] Close</button></div>
                        </div>
                        <div className={s.modal__main}>{props.children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;