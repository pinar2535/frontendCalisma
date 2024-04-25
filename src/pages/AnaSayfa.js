
import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import Profil from './İsverenSekmeler/Profil';
import Ilanlarim from './İsverenSekmeler/İlanlarim';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useNavigate } from "react-router-dom";
import IlanVer from './İsverenSekmeler/IlanVer';
import UstaBul from './İsverenSekmeler/UstaBul';

// Drawer'ın genişliği
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`, // Drawer kapalıyken ana içeriği kaydır
    ...(open && {
        marginLeft: 0, // Drawer açıkken ana içeriği kaydırmayı durdur
    }),
}));

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`, // Drawer açıkken AppBar'ın genişliğini ayarla
        marginLeft: `${drawerWidth}px`, // Drawer açıkken AppBar'ın sola kaydırılması
    }),
}));

// Drawer'ı kapatmak için kullanılan bileşen
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const AnaSayfa = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false); // Drawer'ın açık veya kapalı olduğunu tutan durum

    const [profilOpen, setProfilOpen] = useState(true);
    const [ilanlarimOpen, setIlanlarimOpen] = useState(false);
    const [ilanVerOpen, setIlanVerOpen] = useState(false);
    const [ustaBulOpen, setUstaBulOpen] = useState(false);

    // Drawer'ı açmak için
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    // Drawer'ı kapatmak için
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleProfilClick = () => {
        setProfilOpen(true);
        setIlanlarimOpen(false);
        setIlanVerOpen(false);
        setUstaBulOpen(false);

    };

    const handleIlanlarimClick = () => {
        setProfilOpen(false);
        setIlanlarimOpen(true);
        setIlanVerOpen(false);
        setUstaBulOpen(false);
    };

    const handleIlanVerClick = () => {
        setProfilOpen(false);
        setIlanlarimOpen(false);
        setIlanVerOpen(true);
        setUstaBulOpen(false);
    }

    const handleUstaBulClick = () => {
        setProfilOpen(false);
        setIlanlarimOpen(false);
        setIlanVerOpen(false);
        setUstaBulOpen(true);
    }

    const navigate = useNavigate();
    const handleClickCikis = () => {
        navigate("/");
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer (işverenin adı soyadı gelecek)
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItemButton onClick={handleProfilClick}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="İşveren Profili" />
                    </ListItemButton>
                    <ListItemButton onClick={handleIlanlarimClick}>
                        <ListItemIcon>
                            <FormatIndentIncreaseIcon />
                        </ListItemIcon>
                        <ListItemText primary="İlanlarım" />
                    </ListItemButton>
                    <ListItemButton onClick={handleIlanVerClick}>
                        <ListItemIcon>
                            <AddAlertIcon />
                        </ListItemIcon>
                        <ListItemText primary="İlan Ver" />
                    </ListItemButton>
                    <ListItemButton onClick={handleUstaBulClick}>
                        <ListItemIcon>
                            <EngineeringIcon />
                        </ListItemIcon>
                        <ListItemText primary="Usta Bul" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClickCikis}>
                        <ListItemIcon>
                            <HighlightOffIcon />
                        </ListItemIcon>
                        <ListItemText primary="Çıkış" />
                    </ListItemButton>
                </List>

            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {profilOpen && <Profil />}
                {ilanlarimOpen && <Ilanlarim />}
                {ilanVerOpen && <IlanVer />}
                {ustaBulOpen && <UstaBul />}
            </Main>
        </Box>
    );
}

export default AnaSayfa;