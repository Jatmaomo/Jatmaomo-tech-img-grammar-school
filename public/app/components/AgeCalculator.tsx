'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('')
  const [age, setAge] = useState('')

  const calculateAge = () => {
    const birth = new Date(birthdate)
    const today = new Date()
    let ageYear = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      ageYear--
    }
    
    setAge(`Your age is ${ageYear} years.`)
  }

  return (
    <section id="age-calculator" className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Age Calculator</h2>
      <Input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} className="mb-2" />
      <Button onClick={calculateAge}>Calculate Age</Button>
      {age && <p className="mt-2">{age}</p>}
    </section>
  )
}

