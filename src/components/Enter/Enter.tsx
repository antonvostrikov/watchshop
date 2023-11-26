import React from "react";

import CloseSvg from '../../ímg/close.svg'

import Modal from "../Modal/Modal";
import EnterContent from "./EnterContent";

interface IEnterProps {
  popup: boolean
  closePopup: () => void
}

const Enter:React.FC<IEnterProps> = ({ popup, closePopup }) => {
  const [tab, setTab] = React.useState(1)

  const toggleTabSection = (index: number, className: string) => {
    return tab === index ? className : ""
  }  

  return (
    <>
      <Modal isOpen={popup} closeModal={closePopup}>
        <Modal.Header>
          <div className="enter-title">
            <h2>Войти или создать профиль</h2>
          </div>
          <div className="modal-close">
            <span onClick={() => closePopup()}><img src={CloseSvg} alt="" /></span>
          </div>
        </Modal.Header>
        <Modal.Content>
          <EnterContent 
            tabSectionHandler={toggleTabSection}
            tabHandler={setTab}  
          />
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Enter