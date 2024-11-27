import React from 'react';
import './style.css';

// import images
import winnieChineseImage from '../../assets/images/winnie-chinese-takeaway.png';
import jobHuntingImage from '../../assets/images/job-hunting.png';
import cfgGrubImage from '../../assets/images/cfg-grub.png';
import teamGeneratorImage from '../../assets/images/team-generator.png';
import weatherDashboardImage from '../../assets/images/weather-dashboard.png';
import codeQuizImage from '../../assets/images/code-quiz.png';
import bootstrapImage from '../../assets/images/bootstrap-portfolio1.png';

function Cards({projects}) {
    const imageURL = (title) => {
        switch (title) {
            case 'Winnie Chinese Takeaway':
                return winnieChineseImage;
            case 'Job Hunting':
                return jobHuntingImage;
            case 'CFG Grub':
                return cfgGrubImage;
            case 'Team Generator':
                return teamGeneratorImage;
            case 'Weather Dashboard':
                return weatherDashboardImage;
            case 'Code Quiz':
                return codeQuizImage;
            case 'Bootstrap Portfolio':
                return bootstrapImage;
            default:
                return null;
        }
    };

    return (
        <div className="card-container">
            {projects.map((project) => (
            <div key={project.id} className="card border-0" >
                <div className='card-content'>
                    <img src={imageURL(project.name)} className="card-img-top" alt={project.name}></img>
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.github} className="btn btn-primary" target='_blank'>Github Repo</a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Cards; 