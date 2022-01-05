import React from 'react';
import AsteroidDetail from '../Components/AsteroidDetail'
import{Provider} from 'react-redux'
import store from '../Redux/Store'
import {Router} from 'react-router-dom'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom'
import {createMemoryHistory} from 'history'
import {render} from '@testing-library/react'

it('render location state',()=>{
	const history = createMemoryHistory()
	const data ={
		val:{
			name:'433 eros',
		nasa_jpl_url :"http://jsd:ipl",
is_potentially_hazardous_asteroid:false,
id:2542100

		}
	}
	history.push(`./AsteroidDetail/`,data)
const {getByTestId} = render(
<Router history={history}>
<Provider store= {store}>
    <AsteroidDetail/>
    </Provider>
    </Router>
	)
getByTestId(`location`)
expect('name:433 eros').toBe(`name:${data.val.name}`)




})