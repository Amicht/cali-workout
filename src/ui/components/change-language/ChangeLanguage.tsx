import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { LanguageCtst } from '../../../services/context/LanguageService';

const ChangeLanguageComponent = () => {
    const {changeLangHandler, getLangOpts, language } = React.useContext(LanguageCtst);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onLangSelect = (langName: string) => {
        if(changeLangHandler){
            changeLangHandler(langName);
            handleClose();
        }
    }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {language.navbar.language.btn_name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {getLangOpts? getLangOpts().map(lan => 
                <div key={lan.key}
                onClick={() => onLangSelect(lan.key)}>{lan.name}</div>)
                :null}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ChangeLanguageComponent