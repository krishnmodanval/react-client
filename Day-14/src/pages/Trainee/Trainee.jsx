import React from 'react'
import Button from '@material-ui/core/Button'
import { AddDialog } from './components'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle"
import { makeStyles } from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TraineeList } from './TraineeList'
import { Table } from './TraineeList'
import { trainee } from './data'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    margin: {
        margin: '20px',
        paddingInline: '10px',
    },
    div: {

        width: '100px'
    },
}))

export default function Trainee() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    return (
        <React.Fragment>
            <Grid container spacing={1}> <Grid item lg={10}></Grid><Grid style={{ marginLeft: '6%' }}>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    ADD TRAINEE
                </Button>
            </Grid>
            </Grid>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <Container  >
                    {/* <DialogTitle id="simple-dialog-title" >Add Trainee</DialogTitle> */}
                    <AddDialog className={useStyles.margin} />
                    <DialogTitle id="simple-dialog-title" > <p></p> </DialogTitle>
                </Container>
            </Dialog>
            <br />
            <Table
                data={trainee}
                columns={[{
                    field: 'name',
                    label: 'Name',
                    align: 'left'
                },
                {
                    field: 'email',
                    label: 'Email Address'
                },
                {
                    field: 'date',
                    label: 'Date',
                    align: 'right'
                }
                ]} />
            <TraineeList />

        </React.Fragment>
    );



}

