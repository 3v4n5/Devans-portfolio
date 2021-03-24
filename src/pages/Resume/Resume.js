import { Grid, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';
/* import TimelineSeparator from '@material-ui/lab/TimelineSeparator'; */
/* import TimelineDot from '@material-ui/lab/TimelineDot'; */
import TimelineContent from '@material-ui/lab/TimelineContent';
import resumeData from '../../utils/resumeData'
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';


import './Resume.css'
import CustomButton from '../../components/Button/Button';

const Resume = () => {
    return (
        <>
            {/* About Me */}
            <Grid container className="section">
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='about_text'>{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* Education Experience */}
            <Grid container className="section">
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                                {resumeData.experience.map(experience => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{experience.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Education' icon={<SchoolIcon />}>
                                {resumeData.education.map(education => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            {/* Services */}
            <Grid container className="section" >
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>My Services</h6>
                </Grid>

                <Grid item xs={12} className="bg-color">
                    <Grid container spacing={3} justify='space-between' className="bg-color">
                        {resumeData.services.map(service => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper elevation={3}>
                                    <div className="service">
                                        <div className='service_icon'>{service.icon}</div>
                                        <Typography className='services_title' variant='h6'>{service.title}</Typography>
                                        <Typography className='services_description' variant='body2'>{service.description}</Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* Contact */}
            <Grid container className='section' spacing={5}>
                {/* Contact form */}
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className='section_title'>
                            <span></span>
                            <h6 className='section_title_text'>Contact</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label='name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='E-mail' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label='Message' multiline rows={4} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text='Submit' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Contact information */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className='section_title'>
                            <span></span>
                            <h6 className='section_title_text'>Contact Information</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className='contactinfo_item'>
                                        <span>Addres: </span>{resumeData.addres}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactinfo_item'>
                                        <span>Phone: </span>{resumeData.phone}
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

export default Resume
