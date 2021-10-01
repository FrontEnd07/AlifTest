import React from 'react';
import './modal.scss'
import close from '@assets/Modal/closeModal.svg'

const Modal = ({
                   onToggle,
                   children,
                   appClassName = '',
               }) => {

    return (
        <div className={`modal ${appClassName}`}>
            <div>
                <i onClick={onToggle}>
                    <img src={close} alt=""/>
                </i>
                {children}
            </div>
        </div>
    )

}

export default Modal;
