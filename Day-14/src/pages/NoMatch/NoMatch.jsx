import React from 'react'
import Grid from '@material-ui/core/Grid'
export default function NoMatch(){
    return(
        <div>
                  <Grid container spacing={3} alignContent='center'direction='column' >
                     <Grid item xs={5}></Grid>

                     <h1>Not Found</h1>
                     </Grid>
                     <Grid container spacing={1}>
                  <Grid item xs={4} ></Grid><p>Seems like page you are looking after does not exist</p>
                  </Grid>
        </div>
    )
}