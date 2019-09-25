import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import { NoMatch } from './../NoMatch'
import { trainee } from './data'
let moment = require('moment');
const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function TraineeDetail({ match, location }) {
    const Id = match.params.id
    const key = location.key

    return (
        <React.Fragment>
            {key === undefined ? <NoMatch /> :
                (<React.Fragment>
                    <Card className={useStyles.card}>
                        <Grid container spacing={0} style={{ minHeight: '30vh' }}>
                            <Grid item lg={2} style={{ display: 'flex', backgroundColor: 'gray', justifyContent: 'center' }}  >
                                <h6 style={{ marginTop: '13vh', color: 'white' }}>Thumbnail</h6>
                            </Grid>

                            <Grid  >
                                <CardContent>
                                    {trainee.map((trainee =>
                                        trainee.id === Id ?
                                                    <React.Fragment>
                                                        <Typography variant="h5" component="h2">
                                                            {trainee.name}
                                                        </Typography>
                                                        <Typography className={useStyles.pos} color="textSecondary">
                                                            {moment(trainee.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                                        </Typography>
                                                        <Typography variant="body2" component="p">
                                                            Email: {trainee.email}

                                                        </Typography>
                                                    </React.Fragment> : ''
                                                ))
                                    }
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card><br/><br/>
                    <Grid container spacing={2}>
                        <Grid item md={5}></Grid>
                        <Button variant="contained" className={useStyles.button}>
                            Back
                    </Button>

                    </Grid>
                </React.Fragment>
                )}
        </React.Fragment>
    );
}
