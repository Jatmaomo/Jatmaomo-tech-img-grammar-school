'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function UnitConverter() {
  const [inputValue, setInputValue] = useState('')
  const [fromUnit, setFromUnit] = useState('m')
  const [toUnit, setToUnit] = useState('km')
  const [result, setResult] = useState('')

  const conversionFactors = {
    m: 1,
    km: 0.001,
    cm: 100,
    mm: 1000,
    mi: 0.000621371,
    yd: 1.09361,
    ft: 3.28084,
    in: 39.3701,
  }

  const convert = () => {
    const inputNumber = parseFloat(inputValue)
    if (isNaN(inputNumber)) {
      setResult('Invalid input')
      return
    }

    const meterValue = inputNumber / conversionFactors[fromUnit]
    const resultValue = meterValue * conversionFactors[toUnit]
    setResult(`${resultValue.toFixed(6)} ${toUnit}`)
  }

  return (
    <section id="unit-converter" className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Unit Converter (Length)</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="input-value">Value:</Label>
          <Input
            id="input-value"
            type="number"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              convert()
            }}
            placeholder="Enter value"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <Label htmlFor="from-unit">From:</Label>
            <Select value={fromUnit} onValueChange={(value) => {
              setFromUnit(value)
              convert()
            }}>
              <SelectTrigger id="from-unit">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(conversionFactors).map((unit) => (
                  <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Label htmlFor="to-unit">To:</Label>
            <Select value={toUnit} onValueChange={(value) => {
              setToUnit(value)
              convert()
            }}>
              <SelectTrigger id="to-unit">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(conversionFactors).map((unit) => (
                  <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {result && (
          <div>
            <Label>Result:</Label>
            <Input value={result} readOnly />
          </div>
        )}
      </div>
    </section>
  )
}

