'use client'

import { useState } from 'react'

interface SidenoteProps {
  id: number
  children: React.ReactNode
}

export function Sidenote({ id, children }: SidenoteProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <label
        htmlFor={`sidenote-${id}`}
        className="sidenote-number"
        onClick={() => setIsOpen(!isOpen)}
      >
        {id}
      </label>
      <input
        type="checkbox"
        id={`sidenote-${id}`}
        className="sidenote-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <span className={`sidenote ${isOpen ? 'sidenote-open' : ''}`}>
        <span className="sidenote-number-inline">{id}</span>
        {children}
      </span>
    </>
  )
}

export function Marginnote({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <label
        className="marginnote-indicator"
        onClick={() => setIsOpen(!isOpen)}
      >
        ⊕
      </label>
      <input
        type="checkbox"
        className="marginnote-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <span className={`marginnote ${isOpen ? 'marginnote-open' : ''}`}>
        {children}
      </span>
    </>
  )
}
