import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DemirciIlanlari from './IlanBulSekmeler/DemirciIlanlari';
import KalipciIlanlari from './IlanBulSekmeler/KalipciIlanlari';
import DuvarUstasiIlanlari from './IlanBulSekmeler/DuvarUstasiIlanlari';
import SivaciIlanlari from './IlanBulSekmeler/SivaciIlanlari';
import TesisatciIlanlari from './IlanBulSekmeler/TesisatciIlanlari';
import UstaYardimcisiIlanlari from './IlanBulSekmeler/UstaYardimcisiIlanlari';


const IlanBul = () => {

    const [kalipci, setKalipci] = useState(false);
    const handleKalipci = () => {
        setKalipci(true);
        setDemirci(false);
        setSivaci(false);
        setTesisatci(false);
        setDuvarUstasi(false);
        setUstaYardimcisi(false);
    }

    const [demirci, setDemirci] = useState(false);
    const handleDemirci = () => {
        setKalipci(false);
        setDemirci(true);
        setSivaci(false);
        setTesisatci(false);
        setDuvarUstasi(false);
        setUstaYardimcisi(false);
    }

    const [sivaci, setSivaci] = useState(false);
    const handleSivaci = () => {
        setKalipci(false);
        setDemirci(false);
        setSivaci(true);
        setTesisatci(false);
        setDuvarUstasi(false);
        setUstaYardimcisi(false);
    }

    const [tesisatci, setTesisatci] = useState(false);
    const handleTesisatci = () => {
        setKalipci(false);
        setDemirci(false);
        setSivaci(false);
        setTesisatci(true);
        setDuvarUstasi(false);
        setUstaYardimcisi(false);
    }

    const [duvarUstasi, setDuvarUstasi] = useState(false);
    const handleDuvarUstasi = () => {
        setKalipci(false);
        setDemirci(false);
        setSivaci(false);
        setTesisatci(false);
        setDuvarUstasi(true);
        setUstaYardimcisi(false);
    }
    const [ustaYardimcisi, setUstaYardimcisi] = useState(false);
    const handleUstaYardimcisi = () => {
        setKalipci(false);
        setDemirci(false);
        setSivaci(false);
        setTesisatci(false);
        setDuvarUstasi(false);
        setUstaYardimcisi(true);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mb: 3 }}>
                <Typography variant="h6" fontFamily={"serif"}>Sistemimizde kayıtlı ilanlara buradan ulaşabilirsiniz.</Typography>
                <Typography variant="h6" fontFamily={"serif"}>Lütfen aşağıdan bulmak istediğiniz ilan kategorisni seçiniz.</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Button variant="contained" onClick={handleKalipci} startIcon={<EngineeringIcon />}>
                    Kalıpçı
                </Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Button variant="contained" onClick={handleDemirci} startIcon={<EngineeringIcon />}>
                    DEMİRCİ
                </Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Button variant="contained" onClick={handleSivaci} startIcon={<EngineeringIcon />}>
                    Sıvacı
                </Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Button variant="contained" onClick={handleTesisatci} startIcon={<EngineeringIcon />}>
                    TESİSATÇI
                </Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Button variant="contained" onClick={handleDuvarUstasi} startIcon={<EngineeringIcon />}>
                    Duvar Ustası
                </Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Button variant="contained" onClick={handleUstaYardimcisi} startIcon={<EngineeringIcon />}>
                    Usta Yardımcısı
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 3, ml: 2, mr: 2, mb: 3 }}>
                <Paper elevation={5}>
                    {kalipci && <KalipciIlanlari />}
                    {demirci && <DemirciIlanlari />}
                    {sivaci && <SivaciIlanlari />}
                    {ustaYardimcisi && <UstaYardimcisiIlanlari />}
                    {duvarUstasi && <DuvarUstasiIlanlari />}
                    {tesisatci && <TesisatciIlanlari />}
                </Paper>
            </Grid>
        </Grid>
    );

}

export default IlanBul;