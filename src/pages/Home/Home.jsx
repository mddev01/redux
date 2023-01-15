import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Home.scss'

function Home() {
  const dispatch = useDispatch()
  const productAdd = (e)=>{
    e.preventDefault()
    let val = e.target.product.value
    dispatch({type:"ADD", payload: {'meva': val}})
    console.log('ok');
    e.target.product.value = ''
  }
  return (
    <div>
      <h1>Home</h1>
      <form action="#" onSubmit={productAdd}>
        <input name='product' type="text" placeholder='meva kiriting' />
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default Home