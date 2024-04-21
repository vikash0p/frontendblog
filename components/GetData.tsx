'use client'
import { useGlobalAuthContext } from '@/context/AuthProvider'
import React from 'react'

const GetData = () => {
    const{user}=useGlobalAuthContext();
    console.log("🚀 ~ file: GetData.tsx:7 ~ user:", user);
  return (
    <div>
<h1>{user?.user?.email} </h1>
    </div>
  )
}

export default GetData

