import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input'
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
const IlanVer = () => {

    const [sirketad, setSirketAd] = React.useState('');

    const handleChangeSirketAd = (event) => {
        setSirketAd(event.target.value)
    }

    const [isTanimi, setIsTanimi] = React.useState('');

    const handleChangeIsTanimi = (event) => {
        setIsTanimi(event.target.value)
    }

    const [isLokasyonu, setIsLokasyonu] = React.useState('');

    const handleChangeIsLokasyonu = (event) => {
        setIsLokasyonu(event.target.value)
    }

    const [ucret, setUcret] = React.useState('');

    const handleChangeUcret = (event) => {
        setUcret(event.target.value)
    }

    const [baslangicTarihi, setBaslangicTarihi] = React.useState();

    const handleChangeBaslangicTarihi = (event) => {
        setBaslangicTarihi(event.target.value)
    }

    const [bitisTarihi, setBitisTarihi] = React.useState();

    const handleChangeBitisTarihi = (event) => {
        setBitisTarihi(event.target.value)
    }

    const [telefon, setTelefon] = React.useState('');

    const handleChangeTelefon = (newValue) => {
        setTelefon(newValue)
    }

    const [selectedValue, setSelectedValue] = React.useState('süreli');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

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

    const handleKaydet = () => {

    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <AddAlertIcon />
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h6" fontFamily={"serif"}>İlan oluşturma işlemlerini buradan sağlayabilirsiniz.</Typography>
                </Grid>
                <Grid item xs={1}>
                    <NotificationImportantIcon />
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h6" fontFamily={"serif"}>İlan oluştururken iş lokasyonunu ve tanımını eksiksiz belirtmelisiniz.</Typography>
                    <Typography variant="h6" fontFamily={"serif"}>Ücret ve süre tanımlarınız sistem tarafında hem işveren hem de işçi haklarını koruma
                        adına gerekli özenle tutulmaktadır.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" fontFamily={"serif"} fontWeight={"bold"}>İlan Kaydetme Formu</Typography>
                </Grid>
            </Grid>
            <Paper elevation={5} sx={{ mt: 5, mb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={5} sx={{ ml: 3, mt: 3 }}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            required
                            fullWidth
                            label="Şirket Adı"
                            autoFocus
                            value={sirketad}
                            onChange={handleChangeSirketAd}
                        />
                    </Grid>
                    <Grid item xs={5} sx={{ mt: 3 }}>
                        <MuiTelInput required label="Şirket Telefonu" fullWidth value={telefon} onChange={handleChangeTelefon} />
                    </Grid>
                    <Grid item xs={10} sx={{ ml: 3 }}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            required
                            fullWidth
                            label="İş Tanımı"
                            autoFocus
                            value={isTanimi}
                            onChange={handleChangeIsTanimi}
                        />
                    </Grid>
                    <Grid item xs={10} sx={{ ml: 3 }}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            required
                            fullWidth
                            label="İş Lokasyonu"
                            autoFocus
                            value={isLokasyonu}
                            onChange={handleChangeIsLokasyonu}
                        />
                    </Grid>
                    <Grid item xs={5} sx={{ ml: 3 }}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            required
                            fullWidth
                            label="Ücret (Günlük-Yevmiye)"
                            autoFocus
                            value={ucret}
                            onChange={handleChangeUcret}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h9" fontFamily={"serif"}>Verilen ücret sigorta vs. dahil edilmeden net ücret olarak yazılmalıdır.</Typography>
                    </Grid>
                    <Grid item xs={5} sx={{ ml: 3 }}>
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
                                    left: '15%',
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                Süreli / Sürekli
                            </Typography>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="süreli" control={<Radio value={"süreli"} checked={selectedValue === 'süreli'} onChange={handleChange} />} label="Süreli" />
                                <FormControlLabel value="sürekli" control={<Radio value={"sürekli"} checked={selectedValue === 'sürekli'} onChange={handleChange} />} label="Sürekli" />
                            </RadioGroup>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={5} sx={{ ml: 3, mb: 5 }}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            required
                            fullWidth
                            label="Başlangıç Tarihi"
                            autoFocus
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={baslangicTarihi}
                            onChange={handleChangeBaslangicTarihi}
                        />
                    </Grid>
                    <Grid item xs={5} sx={{ mb: 5 }}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            fullWidth
                            label="Bitiş Tarihi (Sürekli alımlarda gerekli değildir.)"
                            autoFocus
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={bitisTarihi}
                            onChange={handleChangeBitisTarihi}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Box sx={{ border: 1, borderRadius: 1, borderColor: 'lightgrey', p: 2, mb: 2, ml: 3, position: 'relative', width: 530 }}>
                            <Typography
                                sx={{
                                    fontWeight: 'regular',
                                    color: 'black',
                                    backgroundColor: 'white',
                                    paddingInline: '10px',
                                    zIndex: 1,
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '10%',
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
                    <Grid item xs={8}>

                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            sx={{ mb: 3, width: "100%" }}
                            fullWidth
                            variant="contained"
                            onClick={handleKaydet}
                        >
                            Kaydet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}
export default IlanVer;