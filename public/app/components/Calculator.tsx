'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Calculator() {
  const [display, setDisplay] = useState('')

  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString())
      } catch (error) {
        setDisplay('Error')
      }
    } else if (value === 'C') {
      setDisplay('')
    } else {
      setDisplay(display + value)
    }
  }

  return (
    <section id="calculator" className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>
      <div className="max-w-xs mx-auto">
        <Input type="text" value={display} readOnly className="mb-2 text-right text-lg" />
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/', 'C'].map((btn) => (
            <Button key={btn} onClick={() => handleClick(btn)} variant={btn === 'C' ? 'destructive' : 'default'}>
              {btn}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

