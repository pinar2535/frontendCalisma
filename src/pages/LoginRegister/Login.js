import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import image from '../../images/calismaresim1.jpg';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Login = (props) => {

    const navigate = useNavigate();
    //login oldukyan sonra secili olan kullanıcın isveren ya da isci olduğuna balkılıp bu yönlendirme düzenleenek.
    const [isveren, setIsveren] = React.useState(true);

    const handleClickSignIn = () => {
        if (isveren) {
            navigate("/anasayfa");
        }
        else {
            navigate("/anasayfaIsci");
        }

    }

    const handleClickSignUp = () => {
        navigate("/register");
    }
    const [kullaniciAdi, setKullaniciAdi] = React.useState('');

    const handleChangeKullaniciAdi = (event) => {
        setKullaniciAdi(event.target.value)
    }
    const [sifre, setSifre] = React.useState('');

    const handleChangeSifre = (event) => {
        setSifre(event.target.value)
    }

    const [selectedValue, setSelectedValue] = React.useState('isveren');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Giriş
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Kullanıcı Adı"
                                name="email"
                                autoFocus
                                value={kullaniciAdi}
                                onChange={handleChangeKullaniciAdi}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Şifre"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={sifre}
                                onChange={handleChangeSifre}
                            />

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
                                    İşveren / İşçi
                                </Typography>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="isveren" control={<Radio value={"isveren"} checked={selectedValue === 'isveren'} onChange={handleChange} />} label="İşveren" />
                                    <FormControlLabel value="isci" control={<Radio value={"isci"} checked={selectedValue === 'isci'} onChange={handleChange} />} label="İşçi" />
                                </RadioGroup>
                            </Box>

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Beni Hatırla"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleClickSignIn}
                            >
                                Giriş Yap
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Şİfremi Unuttum !
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="outlined"
                                        sx={{ mt: 5, mb: 2 }}
                                        onClick={handleClickSignUp}
                                    >

                                        Bir hesabınız yok mu? Kaydol !
                                    </Button>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );


}

export default Login;
