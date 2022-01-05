import React,{useEffect,useState} from 'react'
import {Box,Input,Button,CircularProgress,Alert,AlertTitle} from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {addData,fetchData} from '../Redux/Reducer'

const classes = {
spinner:{
	marginLeft:'50%'
},
form:{
	margin:'2rem'
},
button:{
	marginLeft:'5rem'
}
}




const SearchAsteroid :React.FC= () =>{
const dispatch= useDispatch()
const data = useSelector(fetchData)
const history =useHistory()
const [showSpinner,setShowSpinner] = useState(true)


useEffect(()=>{
	axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=CBH09wOsGOJRJs55CYRSTc8jaDQhSMY22ImnKytP`)
.then((response) =>{
	dispatch(addData(response.data))
	setShowSpinner(false)
})
.catch(error => console.log(error))
},[])

const [input,setInput] = useState('')
const [showAlert,setShowAlert] = useState(false)
const submitHandler = (e:React.FormEvent) =>{
	e.preventDefault()
	data.near_earth_objects.forEach((val:any,index:number) =>{
		if(val.id===input){
			history.push({
				pathname:'/AsteroidDetail',
				state:{val}
			})
		}
		else{
			setShowAlert(true)
		}
	})
	setInput('')
}

useEffect(()=>{
setTimeout(()=>{
	setShowAlert(false)
},3000)
},[showAlert])


const randomIdHandler = (e:React.MouseEvent) =>{
const idArray = data.near_earth_objects
const id = idArray[Math.floor(Math.random()*idArray.length)].id
idArray.forEach((val:any,index:number) =>{
		if(val.id===id){
			history.push({
				pathname:'/AsteroidDetail',
				state:{val}
			})
		}
	})
}





	return(
<>
{showAlert && 
<Alert severity='error'>
<AlertTitle>Error</AlertTitle>
This is an error Alert -<strong> Asteroid ID not found </strong>
</Alert>
}
{showSpinner ? <CircularProgress size={80} style={classes.spinner}   /> :
<Box
border={1}
borderColor='grey.500'
bgcolor='white.main'
borderRadius={5}
boxShadow={3}
width={400}
height={200}
mx="auto"
mt='2rem'
data-test = 'box'
>
<form onSubmit={submitHandler} style={classes.form}>
<Input
type='text'
required
className='form-control'
placeholder= 'Enter Asteroid ID'
onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
value={input}
/>
<Button
type='submit'
variant='contained'
color='primary'
disabled={input===""}

>
Submit</Button>
</form>
<Button
type='submit'
variant='contained'
color='primary'
style={classes.button}
onClick={randomIdHandler}
>
Random Asteroid</Button>
</Box>
}
</>

		)
}

export default SearchAsteroid