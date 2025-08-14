import React from 'react'
import PersonalInfo from './InfoComponents/PersonalInfo'
import DownloadCv from './InfoComponents/DownloadCv'
import EducInfo from './InfoComponents/EducInfo'
import { Box, Stack } from "@mui/material";

function Myinfor() {
    return (
        <>
            <div className='container'>
                <Box className='sec-spacing'>
                     <Stack direction={{ xs: "column", md: "row" }} spacing={2}> 
                    <PersonalInfo />
                    <EducInfo />
                    </Stack>
                    <DownloadCv />
                </Box>
            </div>
        </>
    )
}

export default Myinfor