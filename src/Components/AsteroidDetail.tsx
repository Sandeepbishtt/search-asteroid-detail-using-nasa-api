import React from 'react'
import {useLocation} from 'react-router'
import{Box} from '@mui/material'

const AsteroidDetail =() =>{
const location = useLocation()
const data:any= location.state
return(
<>
<Box
border={1}
borderColor='grey.500'
bgcolor='white.main'
borderRadius={5}
boxShadow={3}
width={500}
height={300}
mx="auto"
mt='2rem'
>
<div>
<h2 data-testid='location'>Name:{data.val.name}</h2>
<h2>nasa_jpl_url:{data.val.nasa_jpl_url}</h2>
<h2>is_potentially_hazardous_asteroid:{data.val.is_potentially_hazardous_asteroid ?'True':'False'}</h2>
</div>
</Box>
</>

		)
}

export default AsteroidDetail