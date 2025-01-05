'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface BackgroundGeneratorProps {
  setBackground: (background: string) => void
}

export default function BackgroundGenerator({ setBackground }: BackgroundGeneratorProps) {
  const [color1, setColor1] = useState('#00ff00')
  const [color2, setColor2] = useState('#ff0000')

  const generateBackground = () => {
    setBackground(`linear-gradient(to right, ${color1}, ${color2})`)
  }

  return (
    <section id="background-generator" className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Background Generator</h2>
      <div className="flex items-center space-x-2 mb-2">
        <Input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-12 h-12" />
        <Input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-12 h-12" />
        <Button onClick={generateBackground}>Generate Background</Button>
      </div>
    </section>
  )
}

