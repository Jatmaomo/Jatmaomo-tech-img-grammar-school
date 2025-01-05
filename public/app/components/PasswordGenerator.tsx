'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const generatePassword = () => {
    let charset = ''
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+{}[]|:;<>,.?/~'

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  return (
    <section id="password-generator" className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Label htmlFor="length">Length:</Label>
          <Input
            id="length"
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min="4"
            max="32"
            className="w-20"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="uppercase" checked={includeUppercase} onCheckedChange={setIncludeUppercase} />
          <Label htmlFor="uppercase">Uppercase</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="lowercase" checked={includeLowercase} onCheckedChange={setIncludeLowercase} />
          <Label htmlFor="lowercase">Lowercase</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="numbers" checked={includeNumbers} onCheckedChange={setIncludeNumbers} />
          <Label htmlFor="numbers">Numbers</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="symbols" checked={includeSymbols} onCheckedChange={setIncludeSymbols} />
          <Label htmlFor="symbols">Symbols</Label>
        </div>
      </div>
      <Button onClick={generatePassword} className="mt-4">Generate Password</Button>
      {password && (
        <div className="mt-4">
          <Label htmlFor="generated-password">Generated Password:</Label>
          <Input id="generated-password" value={password} readOnly className="mt-1" />
        </div>
      )}
    </section>
  )
}

