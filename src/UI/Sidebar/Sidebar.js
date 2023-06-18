import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '../Icons/Icon';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';


export default function Sidebar(props) {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: 110,
                flexShrink: 0,
                position: 'sticky',
                overflow: 'hidden',
                display: 'flex',
                [`& .MuiDrawer-paper`]: { width: 110, boxSizing: 'border-box' },
            }}

        >
            <List sx={{ marginTop: 9 }}>
                {props.sidemenus.map((menu, index) => {

                    return (
                        <ListItem key={index} disablePadding>
                            <NavLink to={menu.path}
                                style={{ textDecoration: 'none' }}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                <Grid
                                    justifyContent='center'
                                    sx={{ textAlign: 'center', marginBottom: 1 }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon sx={{ display: 'block' }}>
                                            <Icon icon={menu.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary={menu.menutext} />
                                        <Divider />
                                    </ListItemButton>
                                </Grid>
                            </NavLink>
                        </ListItem>
                    )

                })
                }
            </List>
        </Drawer>
    )
}
