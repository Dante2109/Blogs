"use client"
import { AuthContext } from '@/Context/authContext'
import Image from 'next/image'
import { useContext, useState } from 'react'

export default function Home() {
const {GoogleSignIn,handleSigninWithEmailAndPass,createUser}=useContext(AuthContext)
  const [state,setState]=useState({email:"",password:""})

  const change=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const submit=()=>{
    if(state.email && state.password){
      createUser(state.email,state.password)
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl'>
        hello
      </h1>
      <button onClick={GoogleSignIn}>
        Login
      </button>
      <input type="text" name="email" onChange={change} value={state.email} placeholder='email'></input>
      <input type="text" name="password" onChange={change} value={state.password} placeholder='password'></input>
      <button onClick={submit}>
          Submit
      </button>
    </main>
  )
}
