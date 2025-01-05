'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function TextToSpeech() {
  const [text, setText] = useState('')

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }

  return (
    <section id="text-to-speech" className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Text to Speech</h2>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} className="mb-2" rows={4} />
      <Button onClick={speak}>Speak</Button>
    </section>
  )
}

