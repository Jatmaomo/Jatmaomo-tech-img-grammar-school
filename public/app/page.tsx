'use client'

import { useState } from 'react'
import Calculator from './components/Calculator'
import AgeCalculator from './components/AgeCalculator'
import TextToSpeech from './components/TextToSpeech'
import SpeechToText from './components/SpeechToText'
import TodoList from './components/TodoList'
import BackgroundGenerator from './components/BackgroundGenerator'
import PomodoroTimer from './components/PomodoroTimer'
import PasswordGenerator from './components/PasswordGenerator'
import UnitConverter from './components/UnitConverter'

export default function Home() {
  const [background, setBackground] = useState('linear-gradient(to right, #00ff00, #ff0000)')

  return (
    <div style={{ background, minHeight: '100vh' }}>
      <header className="bg-gray-800 text-white text-center p-4">
        <h1 className="text-3xl font-bold">Maomo Tech Tools</h1>
      </header>
      <nav className="bg-gray-700 text-white p-2">
        <ul className="flex justify-around">
          <li><a href="#calculator" className="hover:underline">Calculator</a></li>
          <li><a href="#age-calculator" className="hover:underline">Age Calculator</a></li>
          <li><a href="#text-to-speech" className="hover:underline">Text to Speech</a></li>
          <li><a href="#speech-to-text" className="hover:underline">Speech to Text</a></li>
          <li><a href="#todo-list" className="hover:underline">Todo List</a></li>
          <li><a href="#pomodoro-timer" className="hover:underline">Pomodoro Timer</a></li>
          <li><a href="#password-generator" className="hover:underline">Password Generator</a></li>
          <li><a href="#unit-converter" className="hover:underline">Unit Converter</a></li>
          
        </ul>
      </nav>
      <main className="p-4 space-y-8">
        <Calculator />
        <AgeCalculator />
        <TextToSpeech />
        <SpeechToText />
        <TodoList />
        <PomodoroTimer />
        <PasswordGenerator />
        <UnitConverter />
        <BackgroundGenerator setBackground={setBackground} />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; 2023 Maomo Tech Tools. All rights reserved.</p>
      </footer>
    </div>
  )
}

