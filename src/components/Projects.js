import React from 'react'
import PROJECTS from '../data/projects'

const Project = (props) => {
    
    const { image, title, description, link } = props.project
    return (
        <div style={{ display: 'inline-block', margin: 12, width: 300 }}>
            <h3>{ title }</h3>
            <img src={ image } alt='profile' style= {{ width: 200, height: 120 }}/>
            <p>{ description }</p>
            <a href={link} className="btn btn-default">{ link }</a>
        </div>
    )
}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
        {
            PROJECTS.map((PROJECT) => (<Project key= {PROJECT.id} project= {PROJECT}/>))
        }
        </div>
    </div>
)

export default Projects