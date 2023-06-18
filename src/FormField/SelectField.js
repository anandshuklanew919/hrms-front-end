import React from 'react'
import useField from 'formik'
import {
    FormHelperText,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
}
    from '@mui/material'

export default function SelectField(props) {

    const { label, name, data, fullWidth, ...rest } = props;
    const [field, meta] = useField(props);
    const isError = meta.error && meta.touched;
    const { value } = field;

    function _renderhelperText() {
        if (isError) {
            return (
                <FormHelperText>{meta.error}</FormHelperText>
            )
        }
    }

    return (
        <FormControl variant='filled' {...rest} error={isError} fullWidth>
            <InputLabel id={name}>{label}</InputLabel>
            <Select
                labelId={name}
                id={name}
                label={name}
                {...field}
                {...props}
                value={value ? value : ''}
            >

                {
                    data.map((item, index) => (
                        <MenuItem key={index} value={item.id}>
                            {item.name}
                        </MenuItem>
                    ))
                }

            </Select>
            {_renderhelperText()}
        </FormControl>
    )
}
