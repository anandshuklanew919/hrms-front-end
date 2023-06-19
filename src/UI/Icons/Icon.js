import React from 'react'
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddCardIcon from '@mui/icons-material/AddCard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ClassIcon from '@mui/icons-material/Class';
import DashboardIcon from '@mui/icons-material/Dashboard';
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
        else if (icon === ICONS.BUSINESSICON) {
            return <BusinessIcon />
        }
        else if (icon === ICONS.CLASSICON) {
            return <ClassIcon />
        }
        else if (icon === ICONS.GROUPICON) {
            return <GroupIcon />
        }
        else if (icon === ICONS.DOMAINADDICON) {
            return <DomainAddIcon />
        }
        else if (icon === ICONS.DASHBOARDICON) {
            return <DashboardIcon />
        }
    }

    return getIcon()
}
