import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

import resumeData from '../../utils/resumeData'

import emailjs from 'emailjs-com';

import './Contacto.css'
import CustomButton from '../../components/Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const Contacto = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_frl36dm', 'template_x79vbik', e.target, 'user_JyYbbd9aUhjFKBkknblwM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }






    return (


        <>

            {/* Contact */}
            <Grid container className='section' spacing={10}>
                {/* Contact form */}
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className='section_title'>
                            <span></span>
                            <h6 className='section_title_text'>Contacto</h6>
                        </Grid>

                        <form onSubmit={sendEmail}>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth name='name' label='Nombre' required='true' />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth name='email' label='E-mail' required='true' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth name='message' label='Mensaje' multiline rows={4} required='true' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <input type="submit" value="Enviar" className='btn btn-primary  pt-2 pb-2 px-5 br-50 rounded-pill'/> 
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>

                {/* Contact information */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className='section_title'>
                            <span></span>
                            <h6 className='section_title_text'>Información de Contacto</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className='contactinfo_item'>
                                        <span>Ubicacion: </span>{resumeData.addres}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactinfo_item'>
                                        <span>Tel: </span>{resumeData.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactinfo_item'>
                                        <span>Email: </span>{resumeData.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container className='contacinfo_socialContainer'>
                                {Object.keys(resumeData.socials).map(key => (
                                    <Grid item className='contacInfo_social'>
                                        <a href={resumeData.socials[key].link} target="_blank">
                                            {resumeData.socials[key].icon}
                                        </a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Contacto
