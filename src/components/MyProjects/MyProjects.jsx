import React from 'react'
import MyPortfolioHeading from './MyProjectsComponents/MyPortfolioHeading'
import ProjectsTab from './MyProjectsComponents/ProjectsTab/ProjectsTab'

function MyProjects() {
  return (
    <>
    <div className='container'>
    <MyPortfolioHeading />
    <ProjectsTab />
    </div>
    </>
  )
}

export default MyProjects