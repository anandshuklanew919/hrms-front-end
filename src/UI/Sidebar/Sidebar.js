import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Icon from '../Icons/Icon';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import classes from './Sidebar.module.css';

const MyNavLink = React.forwardRef((props, ref) => (
    <NavLink
        ref={ref}
        end
        to={props.to}
        className={({ isActive }) => `${props.className} ${isActive ? props.active : ''}`}
    >
        {props.children}
    </NavLink>
));

export default function Sidebar({ sidemenus }) {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: 120,
                flexShrink: 0,
                position: 'sticky',
                overflow: 'hidden',
                [`& .MuiDrawer-paper`]: { width: 120, boxSizing: 'border-box', top: '64px' },
            }}
        >
            <List>
                {sidemenus.map((menu) => (
                    <React.Fragment key={menu.menupath}> {/* Use a unique key here */}
                        <ListItem disablePadding>
                            <ListItemButton
                                to={menu.menupath}
                                LinkComponent={MyNavLink}
                                active={classes.active}
                                sx={{
                                    paddingLeft: menu.menutext.length < 9 ? '25px' : '',
                                    '&.active': {
                                        color: 'blue',
                                        fontWeight: 600
                                    }
                                }}
                                aria-label={menu.menutext} // Accessibility improvement
                            >
                                <Grid justifyContent='center' sx={{ marginBottom: 1, textAlign: 'center' }}>
                                    <ListItemIcon sx={{ display: 'block' }}>
                                        <Icon icon={menu.icon} />
                                    </ListItemIcon>
                                    <Typography>{menu.menutext}</Typography>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    );
}
