import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Icon from '../Icons/Icon';
import { NavLink, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import classes from './Sidebar.module.css'


const MyNavLink = React.forwardRef((props, ref) => (

    <NavLink
        ref={ref}
        to={props.to}
        className={({ isActive }) => `${props.className} ${isActive ? props.active : ''}`}
    >
        {props.children}
    </NavLink>
));


export default function Sidebar(props) {

    const location = useLocation();

    console.log(location.pathname);
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: 120,
                flexShrink: 0,
                position: 'sticky',
                overflow: 'hidden',
                display: 'flex',
                [`& .MuiDrawer-paper`]: { width: 120, boxSizing: 'border-box', top: '64px' },
                backgroundColor: 'primary.main',

            }}
        >
            <List>
                {props.sidemenus.map((menu, index) => {

                    return (
                        <ListItem
                            key={index}
                            disablePadding
                        >
                            <ListItemButton
                                to={menu.menupath}
                                LinkComponent={MyNavLink}
                                active={classes.active}
                                sx={{
                                    marginLeft: menu.menutext.length < 9 ? '10px' : ''
                                }}
                            >
                                <Grid
                                    justifyContent='center'
                                    sx={{ marginBottom: 1, textAlign: 'center' }}
                                >

                                    <ListItemIcon sx={{ display: 'block' }}>
                                        <Icon icon={menu.icon} />
                                    </ListItemIcon>
                                    <Typography>
                                        {menu.menutext}
                                    </Typography>
                                    <Divider />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    )

                })
                }
            </List>
        </Drawer >
    )
}
