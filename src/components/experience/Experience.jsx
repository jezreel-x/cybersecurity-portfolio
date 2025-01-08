import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills and Competencies</h5>
            <h2>Technical Skills</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3><i>Programming languages and frameworks</i></h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Nodejs/Express</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of front end */}

                <div className="experience__backend">
                    <h3><i>Tools & Software</i></h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Linux & Windows OS features</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Network Analysis tools such as Wireshark</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Pen-testing tools such as Metasploit framework</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Malware, Threat & Risk Analysis</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>SIEM tools such as Splunk & IBM QRadar</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Network Security tools and Protocols such as Incident Response & Firewalls</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Experience