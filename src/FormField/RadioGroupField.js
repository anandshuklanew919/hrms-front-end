import React from 'react'
import useField from 'formik'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

export default function RadioGroupField(props) {

    const { label, name, data, fullWidth, ...rest } = props;
    const [field, meta] = useField(props);
    const isError = meta.error && meta.touched;

    function _renderhelperText() {
        if (isError) {
            return (
                <FormHelperText>{meta.error}</FormHelperText>
            )
        }
    }

    return (
        <FormControl >
            <FormLabel id={`${name}label`}></FormLabel>
            <RadioGroup
                aria-labelledby={`${name}label`}
                id={name}
                name={name}
                row
                {...field}
                {...rest}
            >
                {
                    data.map((item, index) => {
                        return <FormControlLabel
                            key={index}
                            control={<Radio />}
                            name={name}
                            label={item.label}
                        />
                    })
                }

            </RadioGroup>
            {_renderhelperText()}
        </ FormControl>
    )
}
