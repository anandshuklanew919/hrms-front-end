import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Box, useTheme } from '@mui/material'

import classes from './Modal.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

export const ModalHeader = (props) => {
    const theme = useTheme();

    console.log(theme);
    return (
        <Box component="paper"
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.primary.main,
                display: 'flex',
                paddingTop: theme.spacing(1.5),
                paddingBottom: theme.spacing(1.5),
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
                justifyContent: 'space-between'
            }}

            className={`${classes["modal-header"]}`}>
            {props.children}
            <span className={classes.close} onClick={props.onClose}>&times;</span>
        </Box>
    )
}

export const ModalBody = (props) => {

    const theme = useTheme();

    return (
        <Box sx={{ padding: theme.spacing(2) }} className={`${classes["modal-body"]}`}>
            {props.children}
        </Box>
    )
}

export const ModalFooter = (props) => {
    const theme = useTheme();
    return (
        <Box sx={{
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.primary.main,
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))'
        }} className={`${classes["modal-footer"]}`}>
            {props.children}
        </Box>
    )
}

export const ModalOverlay = (props) => {
    const theme = useTheme();
    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper }} className={`${classes["modal-content"]} ${classes.modal}`}>
            {props.children}
        </Box>
    )
}

const potalElement = document.getElementById('overlays');


export default function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, potalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, potalElement)}
        </Fragment>
    )
}

