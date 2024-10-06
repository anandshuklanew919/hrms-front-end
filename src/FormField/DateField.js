import React, { useEffect, useState } from 'react'
import {useField} from 'formik'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { FormControl, FormHelperText } from '@mui/material'


export default function DateField(props) {

    const { label, fullWidth } = props;
    const [field, meta, helper] = useField(props);
    const [selectedDate, setSelectedDate] = useState(null);
    const isError = meta.error && meta.touched;
    const { value } = field;
    const { setValue } = helper

    function _renderhelperText() {
        if (isError) {
            return (
                <FormHelperText>{meta.error}</FormHelperText>
            )
        }
    }

    useEffect(() => {
        if (value) {
            const date = new Date(value);
            setSelectedDate(date);
        }

    }, [value])

    function _onChange(date) {
        if (date) {
            setSelectedDate(date);
            try {
                const ISODateString = date.ISODateString();
                setValue(ISODateString)
            } catch (error) {
                setValue(date)
            }
        }
        else {
            setValue(date);
        }
    }


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl variant='filled' error={isError} >
                <DatePicker
                    value={selectedDate}
                    label={label}
                    {...props}
                    {...field}
                    onChange={_onChange}
                />
                {_renderhelperText()}
            </FormControl>
        </LocalizationProvider>
    )
}


