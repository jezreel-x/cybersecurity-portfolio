import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-photo.png'
import IMG2 from '../../assets/portfolio-photo(2).png'
import IMG3 from '../../assets/portfolio-photo(3).png'
import IMG4 from '../../assets/portfolio4.jpg'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Utilized Python to develop an automated Reverse shell script for Windows Operating System - hosted on Github.',
        github: 'https://github.com/jezreel-x',
        demo: 'https://github.com/jezreel-x',
    },
    {
        id: 2,
        image: IMG2,
        title: 'My Personal Portfolio Website uses React and is deployed on Netlify.',
        github: 'https://github.com/jezreel-x',
        demo: 'https://cybersec-portfolio.netlify.app/',
    },
    {
        id: 3,
        image: IMG3,
        title: `Qwarqo web application - a website that allows users to seek for rentals at the comfort of their 
        homes. Perfomed pen-testing and vulnerability assessments to improve its web security.`,
        github: '#',
        demo: 'https://qwarqo.com',
    },
    {
        id: 4,
        image: IMG4,
        title: 'A graduation project was done by my team. A website scans malicious content in URLs and blocks sites on blacklists.',
        github: 'https://github.com/NguyenVu1310/threeblock',
        demo: 'https://3block.systems.netlify.app/',
    },
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio