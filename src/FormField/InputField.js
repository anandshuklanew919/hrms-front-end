import React from 'react'
import useField from 'formik'
import { TextField } from '@mui/material'

export default function InputField(props) {

    const [field, meta] = useField(props);
    const isError = meta.error && meta.touched;

    function _renderhelperText() {
        if (isError) {
            return meta.error
        }
    }

    return (

        <TextField
            variant='filled'
            type='text'
            error={isError ? true : false}
            helperText={_renderhelperText}
            {...props}
            {...field}
        >

        </TextField>
    )
}
