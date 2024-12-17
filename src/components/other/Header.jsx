import React, { useState, useEffect } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({ changeUser, data }) => {
  const [greeting, setGreeting] = useState('Hello')
  const username = data ? data.firstName : 'Admin'

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good Morning')
    else if (hour < 18) setGreeting('Good Afternoon') 
    else setGreeting('Good Evening')
  }, [])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className='flex items-end justify-between bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl'>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-medium text-gray-300'>{greeting}</h1>
        <span className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          {username} <span className='animate-wave'>👋</span>
        </span>
      </div>
      <button 
        onClick={logOutUser}
        className='bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 
                   text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 
                   transform hover:scale-105 hover:shadow-lg'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header