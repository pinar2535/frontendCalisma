import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Grid, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const demirciler = [
    { sirketAd: "demirciler", tarih: "21/7/2024", istanımı: "istanımı", islokasyon: "rgrteh" },
    { sirketAd: "abc Company", tarih: "25/7/2024", istanımı: "diğer iş ilanı", islokasyon: "şehir" },
    { sirketAd: "XYZ Ltd.", tarih: "30/7/2024", istanımı: "bir diğer iş ilanı", islokasyon: "başka bir şehir" },
    { sirketAd: "Örnek Şirket", tarih: "10/8/2024", istanımı: "örnek iş ilanı", islokasyon: "örnek lokasyon" }
];


const Demirci = () => {

    const [open, setOpen] = React.useState(false);
    const [selectedIlan, setSelectedIlan] = React.useState(null);
    const handleClickOpen = (ilan) => {
        setOpen(true);
        setSelectedIlan(ilan);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container spacing={1}>
            {demirciler.map((ilan, index) => (
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                    <Card sx={{ minWidth: 250, margin: 2, backgroundColor: 'white', border: 2, borderColor: 'lightblue' }}>
                        <CardHeader title={ilan.sirketAd} />
                        <CardContent>
                            <Typography variant='h9' fontFamily={'serif'}><p> Tarih: {ilan.tarih}</p></Typography>
                            <Typography variant='h9' fontFamily={'serif'}><p> İstanimi: {ilan.istanımı}</p></Typography>
                            <Typography variant='h9' fontFamily={'serif'}><p> İş Lokasyonu: {ilan.islokasyon}</p></Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" onClick={() => handleClickOpen(ilan)} startIcon={<TipsAndUpdatesIcon />}>
                                Detaylı Bilgi Gör
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                BackdropProps={{
                    style: {
                        backgroundColor: 'transparent', // Arkaplanı tamamen şeffaf yap
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    {selectedIlan && selectedIlan.sirketAd}
                </DialogTitle>
                <DialogContent>
                    {selectedIlan &&
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Typography variant='h9' fontFamily={'serif'}><p> Tarih: {selectedIlan.tarih}</p></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='h9' fontFamily={'serif'}><p> İstanimi: {selectedIlan.istanımı}</p></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='h9' fontFamily={'serif'}><p> İş Lokasyonu: {selectedIlan.islokasyon}</p></Typography>
                            </Grid>
                        </Grid>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Tamam
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );


}
export default Demirci;