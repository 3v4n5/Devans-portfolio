import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';
import resumeData from '../../utils/resumeData'
import WorkIcon from '@material-ui/icons/Work';


import './Resume.css'

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
                    <Grid container resume_timeline>
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                                {resumeData.experiences.map(experiences =>(
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{experiences.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{experiences.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{experiences.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        
                        {/* Education */}
                        <Grid item sm={12} md={6}></Grid>
                    </Grid>  
                </Grid>
            </Grid>



            {/* About Me */}
            <Grid container className="3"></Grid>
        </>
    )
}

export default Resume
