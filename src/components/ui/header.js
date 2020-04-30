import React, { Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const app_title = `{ View Blocks }`;

function ElevationScroll(props) {
    const { children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


const useStyles = makeStyles(theme => ({

    tabContainer: {
        marginLeft: 'auto'
    },
    title:{
        fontFamily:'Pacifico',
        fontSize:"2rem",
        [theme.breakpoints.down("md")]:{
            fontSize:"1.5em"
        },
        [theme.breakpoints.down("xs")]:{
            fontSize:"1.2em"
        }
    },
    tab: {
        color:"#ffffff",
        fontSize: "0.90rem",
        minWidth:10,
        marginLeft:"25px"
    },
    button: {
        borderRadius:'15px',
        marginLeft:"50px",
        marginRight:"25px",
        textTransform: "none",
        fontSize:"1rem"
    },
    drawerIcon: {
        height:"50px",
        width: "50px",
        [theme.breakpoints.down("xs")]:{
            height: "30px",
            width: "30px"
        }
    },
    drawerContainer: {
        marginLeft:"auto",
        "&:hover": {
            backgroundColor:"transparent",
        }
    }
}))

function Header () {
   const classes = useStyles();
   const theme = useTheme();
   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
   const matches = useMediaQuery(theme.breakpoints.down("md"));

   const handleChange = (e, value) => {
        setValue(value)
    }
    const [value, setValue] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    useEffect(()=> {
        if(window.location.pathname === '/' && value !== 0) {
            setValue(0);
        }else if(window.location.pathname === '/singleblock' && value !== 1) {
            setValue(1);
        }else if(window.location.pathname === '/singletransact' && value !== 2) {
            setValue(2);
        }
        else if(window.location.pathname === '/latestblock' && value !== 3){
            setValue(3);
        }
    },[value])

    const tabs = (
        <Fragment>
        <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                    <Tab className={classes.tab} label="Blocklist" component={Link} to="/" />
                    <Tab className={classes.tab} label="Single Block" component={Link} to="/singleblock" />
                    <Tab className={classes.tab} label="Single Transaction" component={Link} to="/singletransact" />
                    <Tab className={classes.tab} label="Latest Block" component={Link} to="/latestblock" />
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>Get Started</Button>
                </Fragment>
    )

    const drawer = (
        <Fragment>
        <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
        open={openDrawer} onClose={()=>setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)}
        >
        <List disablePadding>
            <ListItem divider button component={Link} to="/" onClick={()=>setOpenDrawer(false)}>
                <ListItemText disableTypography>Blocklist</ListItemText>
            </ListItem>
            <ListItem divider button component={Link} to="/singleblock" onClick={()=>setOpenDrawer(false)}>
                <ListItemText disableTypography>Single Block</ListItemText>
            </ListItem>
            <ListItem divider button component={Link} to="/singletransact" onClick={()=>setOpenDrawer(false)}>
                <ListItemText disableTypography>Single Transaction</ListItemText>
            </ListItem>
            <ListItem divider button component={Link} to="/latestblock" onClick={()=>setOpenDrawer(false)}>
                <ListItemText disableTypography>Latest Block</ListItemText>
            </ListItem>
        </List>
        </SwipeableDrawer>
        <IconButton className={classes.drawerContainer} onClick={()=> setOpenDrawer(!openDrawer)} disableRipple>
            <MenuIcon className={classes.drawerIcon}s/>
        </IconButton>
        </Fragment>
    )

    return(
        <Fragment>
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar className={classes.useStyle}>
                <Typography className={classes.title}>{app_title}</Typography>
                    {
                        matches ? drawer : tabs
                    }
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <Toolbar />
        </Fragment>

    )
}

export default Header;