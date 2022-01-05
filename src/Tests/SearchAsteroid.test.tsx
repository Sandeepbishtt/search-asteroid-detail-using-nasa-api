import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchAsteroid from '../Components/SearchAsteroid';
import{Provider} from 'react-redux'
import store from '../Redux/Store'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

describe('check snapshot' ,() =>{
  let container:HTMLDivElement

  beforeEach(()=>{
    container= document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <BrowserRouter>
     <Provider store= {store}>
    <SearchAsteroid />
    </Provider>
</BrowserRouter>,container)
  })

  afterEach(()=>{
    document.body.removeChild(container)
    container.remove()
  })
  it('render snapshot',()=>{
    expect(container).toMatchSnapshot()
  })
})
test('render async calling api',async()=>{
    render(
      <BrowserRouter>
      <Provider store={store}>
          <SearchAsteroid />
        </Provider>
      </BrowserRouter>
          )
          const element = await screen.getAllByRole('progressbar')
          expect(element).toHaveLength(1)
  })

 
  