import React, { FC } from 'react';
//Bootstrap
import { Modal, Button } from 'react-bootstrap';
//Icons
import { FaGithub, FaLinkedin, FaDeviantart, FaYoutube } from "react-icons/fa";

interface ContactPanelProps {
    showModal: boolean;
    handleClose: () => void;
    theme: string;
}

const ContactPanel: FC<ContactPanelProps> = ({ showModal, handleClose, theme }) => {
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton className={`border-0 rounded-top-1 cs-bg-${theme}`}>
                <Modal.Title className={`cs-fc-${theme}`}>Contact links</Modal.Title>
            </Modal.Header>
            <Modal.Body className={`d-flex flex-row cs-bg-main-${theme}`}>
                <Button className={`cs-transition m-2 cs-btn-${theme} cs-bg-main-${theme}`} href='https://www.linkedin.com/in/sergiy-b-623426159/' target='_blank'>
                    <FaLinkedin size="1.5em" /> Linkedin
                </Button>
                <Button className={`cs-transition m-2 cs-btn-${theme} cs-bg-main-${theme}`} href='https://github.com/MrSeager' target='_blank'>
                    <FaGithub size="1.5em" /> Github
                </Button>
                <Button className={`cs-transition m-2 cs-btn-${theme} cs-bg-main-${theme}`} href='https://www.deviantart.com/mrseager29' target='_blank'>
                    <FaDeviantart size="1.5em" /> Deviantart
                </Button>
                <Button className={`cs-transition m-2 cs-btn-${theme} cs-bg-main-${theme}`} href='https://www.youtube.com/channel/UCQgY4AFsqQWgxOvdeNGs-cQ' target='_blank'>
                    <FaYoutube size="1.5em" /> YouTube
                </Button>
            </Modal.Body>
            <Modal.Footer className={`border-0 rounded-bottom-1 cs-shadow-${theme} cs-bg-${theme}`}>
                
            </Modal.Footer>
        </Modal>
    );
}

export default ContactPanel;