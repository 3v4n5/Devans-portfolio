import React, { Component } from 'react'
import './Pdf.css'
import pdf from '../../assets/images/CV_EVANS_MONDRAGON.pdf'
import { Grid } from '@material-ui/core';


export class Pdf extends Component {
    render() {
        return (

            <Grid container>
                <Grid item item item xs={12} sm={12} md={4} lg={3}>
                <div className='pdf'>
                    <object
                        data={pdf}
                        type="application/pdf"
                        width="90%"
                        height="100%"
                    >

                    </object>

                </div>
                </Grid>
            </Grid>



        );

    }



}

export default Pdf
