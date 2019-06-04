import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const ImageBox = props => {
    const { name, toggle, imageUrl, modal } = props;

    return (
        <div className='image-box col-sm-12 col-lg-6'>
            <img
                className='product-photo'
                onClick={toggle}
                src={imageUrl}
                alt={name}
            />
            <FontAwesomeIcon
                onClick={toggle}
                icon={faSearchPlus}
            />
            <Modal
                isOpen={modal}
                toggle={toggle}
                className='modal-box'
            >
                <ModalHeader toggle={toggle}>
                    {name}
                </ModalHeader>
                <ModalBody>
                    <img
                        className='product-photo'
                        src={imageUrl}
                        alt={name}
                    />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ImageBox;