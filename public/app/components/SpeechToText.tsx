'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognitionInstance = new SpeechRecognition()
      recognitionInstance.continuous = true
      recognitionInstance.interimResults = true

      recognitionInstance.onresult = (event) => {
        const result = event.results[event.results.length - 1]
        setTranscript(result[0].transcript)
      }

      setRecognition(recognitionInstance)
    }
  }, [])

  const toggleRecording = () => {
    if (isRecording) {
      recognition?.stop()
    } else {
      recognition?.start()
    }
    setIsRecording(!isRecording)
  }

  return (
    <section id="speech-to-text" className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Speech to Text</h2>
      <Button onClick={toggleRecording} variant={isRecording ? 'destructive' : 'default'}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </Button>
      {transcript && <p className="mt-2">{transcript}</p>}
    </section>
  )
}

