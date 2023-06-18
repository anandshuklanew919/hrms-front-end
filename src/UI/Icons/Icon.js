import React from 'react'
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddCardIcon from '@mui/icons-material/AddCard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { ICONS } from './IconConstant'

export default function Icon(props) {

    const getIcon = () => {
        const { icon } = props;
        if (icon === ICONS.SUMMARIZEICON) {
            return <SummarizeIcon />
        }
        else if (icon === ICONS.ADDCARDICON) {
            return <AddCardIcon />
        }
        else if (icon === ICONS.FILECOPYICON) {
            return <FileCopyIcon />
        }
    }

    return getIcon()
}
