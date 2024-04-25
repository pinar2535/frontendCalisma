import React from 'react';
import { Card, CardHeader, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


const ilanlar = [
    { sirketAd: "getrh", tarih: "21/7/2024", istanımı: "istanımı", islokasyon: "rgrteh" },
    { sirketAd: "abc Company", tarih: "25/7/2024", istanımı: "diğer iş ilanı", islokasyon: "şehir" },
    { sirketAd: "XYZ Ltd.", tarih: "30/7/2024", istanımı: "bir diğer iş ilanı", islokasyon: "başka bir şehir" },
    { sirketAd: "Örnek Şirket", tarih: "10/8/2024", istanımı: "örnek iş ilanı", islokasyon: "örnek lokasyon" }
];

const Ilanlarim = () => {
    return (
        <Grid container spacing={1}>
            {ilanlar.map((ilan, index) => (
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Card key={index} sx={{ minWidth: 250, margin: 2, backgroundColor: 'white', border: 2, borderColor: 'lightblue' }}>
                        <CardHeader title={ilan.sirketAd} />
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography variant='h9' fontFamily={'serif'}><p> Tarih: {ilan.tarih}</p></Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h9' fontFamily={'serif'}><p> İstanimi: {ilan.istanımı}</p></Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h9' fontFamily={'serif'}><p> İş Lokasyonu: {ilan.islokasyon}</p></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );


}
export default Ilanlarim;