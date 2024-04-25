import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { MuiTelInput } from 'mui-tel-input'
import { useNavigate } from "react-router-dom";

const IsverenKayit = () => {

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/");
    };
    const handleClickLogIn = () => {
        navigate("/");
    };

    const [ad, setAd] = React.useState('');

    const handleChangeAd = (event) => {
        setAd(event.target.value);
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

    const [sirketAdi, setSirketadi] = React.useState('');

    const handleChangeSirketAdi = (event) => {
        setSirketadi(event.target.value)
    }

    const [sirketAdresi, setSirketAdresi] = React.useState('');

    const handleChangeSirketadresi = (event) => {
        setSirketAdresi(event.target.value)
    }
    const [adres, setAdres] = React.useState('');

    const handleChangeAdres = (event) => {
        setAdres(event.target.value)
    }
    const [sifre, setSifre] = React.useState('');

    const handleChangeSifre = (event) => {
        setSifre(event.target.value)
    }

    const [telefon, setTelefon] = React.useState('');

    const handleChangeTelefon = (newValue) => {
        setTelefon(newValue)
    }
    const [sirketTelefon, setSirketTelefon] = React.useState('');

    const handleChangeSirketTelefon = (newValue) => {
        setSirketTelefon(newValue)
    }

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
                <Grid item xs={12}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Adres"
                        autoFocus
                        value={adres}
                        onChange={handleChangeAdres}
                    />
                </Grid>
                <Grid item xs={6}>
                    <MuiTelInput required label="Telefon" fullWidth value={telefon} onChange={handleChangeTelefon} />
                </Grid>
                <Grid item xs={6}>
                    <MuiTelInput required label="Şirket Telefonu" fullWidth value={sirketTelefon} onChange={handleChangeSirketTelefon} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        autoComplete="given-name"
                        name="firstName"
                        fullWidth
                        id="firstName"
                        label="Şirket Adı"
                        autoFocus
                        value={sirketAdi}
                        onChange={handleChangeSirketAdi}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Şirket Adresi"
                        autoFocus
                        value={sirketAdresi}
                        onChange={handleChangeSirketadresi}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="İletişim adreslerim üzerinden ilanlardan haberdar olmak istiyorum."
                    />
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

export default IsverenKayit;