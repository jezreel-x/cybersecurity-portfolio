import React from 'react'
import './about.css'
import myImage from '../../assets/profile-photo.jpg';
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={myImage} alt='' />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Level</h5>
                            <small>Intermediate</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certificate</h5>
                            <small>Cybersecurity: White-Hat Ethical Hacker</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>4+ Completed including a Reverse-shell program written in Python</small>
                        </article>
                    </div>

                    <p>
                    Results-driven Cybersecurity Analyst with 2+ years of experience in Vulnerability Assessments, 
                    Penetration-testing, Threat and Malware Analysis and Incident Response with a proven track 
                    record of developing and implementing impeccable security measures.
                    </p>

                    <p>
                    Seeking to leverage my skills, knowledge and expertise gained through course-work and relevant work experiences, in your company, to solve real-world problems by protecting critical digital assets, 
                    enhancing security operations and improving the overall security health of the company’s systems.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;