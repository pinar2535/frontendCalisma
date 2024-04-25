import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import Typography from '@mui/material/Typography';

const IsciKayit = () => {

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/");
    };
    const handleClickLogIn = () => {
        navigate("/");
    };
    const [ad, setAd] = React.useState('');

    const handleChangeAd = (event) => {
        setAd(event.target.value)
    }

    const [soyad, setSoyAd] = React.useState('');

    const handleChangeSoyAd = (event) => {
        setSoyAd(event.target.value)
    }

    const [eposta, setEposta] = React.useState('');

    const handleChangeEposta = (event) => {
        setEposta(event.target.value)
    }

    const [kullaniciAdi, setKullaniciAdi] = React.useState('');

    const handleChangeKullaniciAdi = (event) => {
        setKullaniciAdi(event.target.value)
    }

    const [sifre, setSifre] = React.useState('');

    const handleChangeSifre = (event) => {
        setSifre(event.target.value)
    }

    const [telefon, setTelefon] = React.useState('');

    const handleChangeTelefon = (newValue) => {
        setTelefon(newValue)
    }

    const [deneyim, setDeneyim] = React.useState('');

    const handleChangeDeneyim = (event) => {
        setDeneyim(event.target.value)
    }

    const [referans, setReferans] = React.useState('');

    const handleChangeReferans = (event) => {
        setReferans(event.target.value)
    }

    const [checkedKalıpcı, setCheckedKalıpcı] = useState(false);
    const handleChangeKalipci = (event) => {
        setCheckedKalıpcı(event.target.checked);
    };
    const [checkeddemirci, setCheckeddemirci] = useState(false);
    const handleChangeDemirci = (event) => {
        setCheckeddemirci(event.target.checked);
    };

    const [checkedsivaci, setCheckedsivaci] = useState(false);
    const handleChangeSivaci = (event) => {
        setCheckedsivaci(event.target.checked);
    };
    const [checkedtesisatci, setCheckedTesisatci] = useState(false);
    const handleChangeTesisatci = (event) => {
        setCheckedTesisatci(event.target.checked);
    };

    const [checkedduvarustasi, setCheckedDuvarUstasi] = useState(false);
    const handleChangeDuvarUstasi = (event) => {
        setCheckedDuvarUstasi(event.target.checked);
    };
    const [checkedUstaYardimcisi, setCheckedUstaYardimcisi] = useState(false);
    const handleChangeUstaYardimcisi = (event) => {
        setCheckedUstaYardimcisi(event.target.checked);
    };

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Ad"
                        autoFocus
                        value={ad}
                        onChange={handleChangeAd}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Soyad"
                        name="lastName"
                        autoComplete="family-name"
                        value={soyad}
                        onChange={handleChangeSoyAd}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="E-Posta Adresi"
                        name="email"
                        autoComplete="email"
                        value={eposta}
                        onChange={handleChangeEposta}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Kullanıcı Adı"
                        value={kullaniciAdi}
                        onChange={handleChangeKullaniciAdi}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Şifre"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={sifre}
                        onChange={handleChangeSifre}
                    />
                </Grid>
                <Grid item xs={6}>
                    <MuiTelInput required label="Telefon" fullWidth value={telefon} onChange={handleChangeTelefon} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Deneyim"
                        name="lastName"
                        autoComplete="family-name"
                        value={deneyim}
                        onChange={handleChangeDeneyim}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Referanslar"
                        name="lastName"
                        autoComplete="family-name"
                        value={referans}
                        onChange={handleChangeReferans}
                        multiline
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box sx={{ border: 1, borderRadius: 1, borderColor: 'lightgrey', p: 2, mb: 2, mt: 2, position: 'relative' }}>
                        <Typography
                            sx={{
                                fontWeight: 'regular',
                                color: 'black',
                                backgroundColor: 'white',
                                paddingInline: '10px',
                                zIndex: 1,
                                position: 'absolute',
                                top: '-10px',
                                left: '6%',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            Yetkinlik
                        </Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={checkedKalıpcı} onChange={handleChangeKalipci} />} label="Kalıpçı" />
                            <FormControlLabel
                                control={<Checkbox checked={checkeddemirci} onChange={handleChangeDemirci} />}
                                label="Demirci"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkedsivaci} onChange={handleChangeSivaci} />}
                                label="Sıvacı"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkedtesisatci} onChange={handleChangeTesisatci} />}
                                label="Tesisatçı"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkedduvarustasi} onChange={handleChangeDuvarUstasi} />}
                                label="Duvar Ustası"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkedUstaYardimcisi} onChange={handleChangeUstaYardimcisi} />}
                                label="Usta Yardımcısı"
                            />
                        </FormGroup>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Kaydol
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleClickLogIn}
                    >
                        Hesabınız Var Mı ? Giriş yapın !
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );

}

export default IsciKayit;