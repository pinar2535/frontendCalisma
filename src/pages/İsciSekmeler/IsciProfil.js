import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import makeStyles from '@mui/styles/makeStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme.typography.h6 = {
    fontSize: "1rem",
    "@media (min-width:900px)": {
        fontSize: "1.05rem"
    },
    "@media (min-width:1000px)": {
        fontSize: "1.1rem"
    },
    "@media (min-width:1200px)": {
        fontSize: "1.2rem"
    },
    "@media (min-width:1300px)": {
        fontSize: "1.25rem"
    }
};


// dummy data
const user = {
    ad: "First Name",
    soyad: "Last Name",
    telefon: "123",
    email: "email@gmail.com",
    deneyim: "1 yıl",
    referanslar: "Some Position",
    yetkinlik: "Usta Yardımcısı",
};

const mapInformation = {
    ad: "Ad",
    soyad: "Soyad",
    telefon: "Telefon",
    email: "E - Posta",
    deneyim: "Deneyim",
    referanslar: "Referanslar",
    yetkinlik: "Yetkinlik",
};

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "dodgerblue",
        color: "white",
        padding: "1em",
        width: "60%",
    },
    form: {
        backgroundColor: "white",
        color: "dodgerblue ",
        padding: "1em",
        width: "60%",
    }
}));

const UserInfoFormItem = (formState, onChange, propt, index) => {
    const classes = useStyles();
    return (
        <Grid
            item
            xs={6}
            key={`display-${index}`}
            container
            direction="column"
            alignItems="center"
        >
            <Paper className={classes.form}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">{mapInformation[propt]}</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                        defaultValue={formState[propt]}
                        name={Object.keys(user)[index]}
                        onChange={onChange}
                    />
                </Grid>
            </Paper>
        </Grid>
    );
};

const UserInfoGridItem = (formState, propt, index) => {
    const classes = useStyles();
    return (
        <Grid
            item
            xs={6}
            key={`display-${index}`}
            container
            direction="column"
            alignItems="center"
        >
            <Paper className={classes.paper}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">{mapInformation[propt]}</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h6">{formState[propt]}</Typography>
                </Grid>
            </Paper>
        </Grid>
    );
};

const IsciProfil = () => {
    const [isForm, setIsForm] = useState(false);
    const [formInput, setFormInput] = useState(user);

    const handleEdit = () => setIsForm(true);

    const handleChange = (e) => {
        const value = e.target.value;
        setFormInput((prev) => ({
            ...prev,
            [e.target.name]: value
        }));
    };

    const handleSubmit = () => {
        setFormInput(formInput);
        setIsForm(false);
    };

    const toggleRender = () => {
        if (isForm) {
            return Object.keys(user).map((key, index) =>
                UserInfoFormItem(formInput, handleChange, key, index)
            );
        }

        return Object.keys(user).map((key, index) =>
            UserInfoGridItem(formInput, key, index)
        );
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container spacing={2}>
                    <Grid item xs={12} container spacing={2}>
                        <Grid item sm={6} md={6} alignt="right">
                            <IconButton
                                style={{ backgroundColor: "dodgerblue", marginLeft: "1rem" }}
                                onClick={handleEdit}
                            >
                                <EditIcon style={{ color: "white" }} />
                            </IconButton>

                        </Grid>
                    </Grid>
                    {toggleRender()}
                    <Grid item xs={12} align="center">
                        {!isForm ? (
                            <div></div>
                        ) : (
                            <Button
                                style={{ color: "white", backgroundColor: "dodgerblue" }}
                                onClick={handleSubmit}
                            >
                                SAVE
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );

}

export default IsciProfil;