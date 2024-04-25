import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Demirci from '../İsverenSekmeler/UstBulBilesenler/Demirci';
import Kalipci from '../İsverenSekmeler/UstBulBilesenler/Kalipci';
import DuvarUstasi from '../İsverenSekmeler/UstBulBilesenler/DuvarUstasi';
import Sivaci from '../İsverenSekmeler/UstBulBilesenler/Sivaci';
import Tesisatci from '../İsverenSekmeler/UstBulBilesenler/Tesisatci';
import UstaYardimcisi from '../İsverenSekmeler/UstBulBilesenler/UstaYardimcisi';

const UstaBul = () => {

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
                <Typography variant="h6" fontFamily={"serif"}>Sistemimizde kayıtlı ustalara buradan ulaşabilirsiniz.</Typography>
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
                    {kalipci && <Kalipci />}
                    {demirci && <Demirci />}
                    {sivaci && <Sivaci />}
                    {ustaYardimcisi && <UstaYardimcisi />}
                    {duvarUstasi && <DuvarUstasi />}
                    {tesisatci && <Tesisatci />}
                </Paper>
            </Grid>
        </Grid>
    );


}
export default UstaBul;