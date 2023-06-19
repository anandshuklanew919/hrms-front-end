import React from 'react'
import Modal, { ModalBody, ModalHeader, ModalFooter } from '../../../../UI/FormModalPopup/Modal'
import { Typography } from '@mui/material'

export default function CreateCompany() {
    return (
        <Modal>
            <ModalHeader><Typography>Department</Typography></ModalHeader>
            <ModalBody>
                <Typography>This is modal body</Typography>
            </ModalBody>
            <ModalFooter>
                <Typography>This is modal footer</Typography>
            </ModalFooter>
        </Modal>
    )
}
