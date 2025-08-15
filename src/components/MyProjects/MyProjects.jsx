
import { Stack } from "@mui/material";
import MyPortfolioHeading from './MyProjectsComponents/MyPortfolioHeading'
import ProjectsTab from './MyProjectsComponents/ProjectsTab/ProjectsTab'

function MyProjects() {
  
  return (
    <>
      <Stack
      >
        <div className='container'>
          <MyPortfolioHeading />
          <ProjectsTab />
        </div>
      </Stack>
    </>
  )
}

export default MyProjects