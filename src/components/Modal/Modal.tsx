import React from 'react'

import { IModalElementProps, IModalProps } from '../../interfaces/modal.interface'

const Modal = ({ children, isOpen, closeModal, className }: IModalProps): JSX.Element => {
  React.useEffect(() => {
    isOpen && document.body.classList.add('modal-body')

    return () => {
      document.body.classList.remove('modal-body')
    }
  }, [isOpen])

  return (
    <div className={isOpen ? "modal-wrapper active" : "modal-wrapper"} onClick={closeModal}>
      <div className={`modal-window ${className || ''}`} onClick={(e) => e.stopPropagation()}>
        { children }
      </div>
    </div>
  )
}

const ModalHeader = ({ children }: IModalElementProps): JSX.Element => {
  return (
    <div className="modal-window__header">
      { children }
    </div>
  )
}

const ModalContent = ({ children }: IModalElementProps): JSX.Element => {
  return (
    <div className="modal-window__content">
      { children }
    </div>
  )
}

const ModalFooter = ({ children }: IModalElementProps): JSX.Element => {
  return (
    <div className="modal-window__footer">
      { children }
    </div>
  )
}

Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Footer = ModalFooter

export default Modal