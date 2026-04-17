'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface CommandOutput {
  command: string
  output: string
  type: 'command' | 'output' | 'error'
}

const COMMANDS: Record<string, string | string[]> = {
  help: [
    'Available commands:',
    '  hi         - Start a conversation',
    '  fortune    - Get a random fortune',
    '  joke       - Get a random joke',
    '  compliment - Get a random compliment',
    '  clear      - Clear terminal',
    '  whoami     - About me',
    '  skills     - My tech skills',
    '  contact    - How to reach me',
  ],
  fortune: [
    'The only way to do great work is to love what you do.',
    'Innovation distinguishes between a leader and a follower.',
    'The best time to plant a tree was 20 years ago. The second best time is now.',
    'Technology is best when it brings people together.',
    'Great things never came from comfort zones.',
    'Your code is like humor. When you have to explain it, it&apos;s bad.',
    'Why do programmers prefer dark mode? Because light attracts bugs!',
  ],
  joke: [
    'Why do Java developers wear glasses? Because they don\'t C#!',
    'How many programmers does it take to change a light bulb? None, that\'s a hardware problem.',
    'Why did the developer go broke? Because he used up all his cache!',
    'Why do programmers prefer dark mode? Because light attracts bugs!',
    'What\'s a programmer\'s favorite place to hang out? Foo Bar!',
    'Why did the programmer quit his job? Because he didn\'t get arrays.',
    'How many programmers does it take to change a loop? None. That\'s a hardware problem.',
  ],
  compliment: [
    'Your code is cleaner than my kitchen!',
    'You\'re like a human debugger!',
    'Your commits have great messages - seriously!',
    'You make working with APIs look easy!',
    'Your problem-solving skills are impressive!',
    'You\'re a git master!',
    'Your attention to detail is remarkable!',
    'You code like you were born to do it!',
  ],
  whoami: [
    'Jan Christian Garcia',
    'Full-stack web developer passionate about creating beautiful, accessible experiences',
    'Located in 🌍 | Always learning new technologies',
    'Coffee enthusiast ☕ and open-source contributor',
  ],
  skills: [
    'Frontend: React, Next.js, TypeScript, Tailwind CSS',
    'Backend: Node.js, Python, PostgreSQL',
    'Tools: Git, Docker, VS Code, Figma',
    'Specialties: Web Performance, Accessibility, UI/UX',
  ],
  contact: [
    'Feel free to reach out!',
    'GitHub: https://github.com',
    'LinkedIn: https://linkedin.com',
    'Email: hello@example.com',
    'Twitter: @yourhandle',
  ],
  hi: 'conversation',
}

const ALL_COMMANDS = Object.keys(COMMANDS).filter(cmd => cmd !== 'hi')

export function Terminal() {
  const [history, setHistory] = useState<CommandOutput[]>([])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      setTimeout(() => {
        terminalRef.current?.scrollTo({
          top: terminalRef.current.scrollHeight,
          behavior: 'smooth',
        })
      }, 0)
    }
  }, [history])

  // Update suggestions based on input
  useEffect(() => {
    if (input.trim().length === 0) {
      setSuggestions([])
    } else {
      const matches = ALL_COMMANDS.filter((cmd) =>
        cmd.toLowerCase().startsWith(input.toLowerCase())
      )
      setSuggestions(matches)
    }
  }, [input])

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    if (!trimmed) return

    // Add to command history
    setCommandHistory((prev) => [...prev, trimmed])
    setHistoryIndex(-1)

    // Add command to output
    let newHistory: CommandOutput[] = [
      ...history,
      { command: trimmed, output: '', type: 'command' },
    ]

    if (trimmed === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    if (trimmed === 'hi') {
      const conversations = [
        'Hey there! How\'s it going?',
        'Hi! Nice to meet you!',
        'Hello! Welcome to my terminal!',
        'Hey! What brings you here?',
        'Howdy! 👋',
      ]
      const randomGreeting = conversations[Math.floor(Math.random() * conversations.length)]
      newHistory.push({ command: '', output: randomGreeting, type: 'output' })
      
      // Add a follow-up message after a short delay
      setTimeout(() => {
        const followUps = [
          'Want to know more? Try: whoami, skills, or projects',
          'Feel free to explore! Type help for commands',
          'You can type commands like fortune, joke, or compliment for fun!',
          'Try typing one of the available commands above!',
        ]
        const randomFollowUp = followUps[Math.floor(Math.random() * followUps.length)]
        setHistory(prev => [
          ...prev,
          { command: '', output: randomFollowUp, type: 'output' }
        ])
      }, 800)
    } else if (trimmed in COMMANDS) {
      const outputs = COMMANDS[trimmed as keyof typeof COMMANDS]
      if (typeof outputs === 'string') {
        newHistory.push({ command: '', output: outputs, type: 'output' })
      } else {
        const randomOutput = outputs[Math.floor(Math.random() * outputs.length)]
        newHistory.push({ command: '', output: randomOutput, type: 'output' })
      }
    } else {
      newHistory.push({
        command: '',
        output: `Command not found: ${trimmed}. Type 'help' for available commands.`,
        type: 'error',
      })
    }

    setHistory(newHistory)
    setInput('')
    setSuggestions([])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      executeCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault()
      setInput(suggestions[0])
      setSuggestions([])
    }
  }

  return (
    <div className="w-full h-full rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
      {/* Terminal header */}
      <div className="bg-zinc-800 px-4 py-3 border-b border-zinc-700 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-zinc-400 text-xs font-mono ml-2">~ Terminal</span>
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto px-4 py-3 text-xs font-mono text-zinc-300 bg-zinc-950 space-y-1"
      >
        <div className="text-zinc-500">
          Welcome to the terminal! Type &apos;help&apos; to see available commands.
        </div>

        {history.length === 0 ? (
          <div className="text-zinc-600 py-4">Try: fortune, joke, compliment, or help</div>
        ) : (
          history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.type === 'command' && item.command && (
                <div className="text-cyan-400">
                  <span className="text-zinc-500">$</span> {item.command}
                </div>
              )}
              <div
                className={
                  item.type === 'error'
                    ? 'text-red-400'
                    : item.type === 'output'
                      ? 'text-zinc-300'
                      : ''
                }
              >
                {item.output}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Terminal input */}
      <div className="bg-zinc-900 border-t border-zinc-800 px-4 py-3">
        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <div className="mb-2 text-zinc-400 text-xs space-y-1">
            {suggestions.slice(0, 3).map((suggestion) => (
              <div key={suggestion} className="text-cyan-400 opacity-60 cursor-pointer">
                {suggestion}
              </div>
            ))}
            {suggestions.length > 3 && (
              <div className="text-zinc-500 text-xs">+{suggestions.length - 3} more</div>
            )}
          </div>
        )}

        {/* Input line */}
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command..."
            className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 focus:outline-none font-mono text-xs"
            autoFocus
            spellCheck="false"
          />
          <span className="animate-pulse text-cyan-400">│</span>
        </div>
      </div>
    </div>
  )
}
