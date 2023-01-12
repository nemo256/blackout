import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef, useEffect } from "react";
import styles from '../styles/Home.module.css'

const banner = `
Initializing AnderShell 3000 v0.1
Copyright (c) 2014 Anders Evenrud <andersevenrud@gmail.com>

Type 'help for a list of available commands.


`;

export default function Home() {
  const [input, setInput] = useState("$ > ")
  const [output, setOutput] = useState("")
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <Head>
        <title>BlackOut</title>
        <meta name="description" content="BlackOut is Web TUI-like game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} onClick={e => {inputRef.current.focus()}}>
        <input 
          ref={inputRef} 
          type="text"
          name="input"
          className={styles.terminal}    
          value={input}
          onChange={e => setInput(e.target.value)} 
          onKeyDown={e => {
            if (e.key === "Enter") {
              let newOutput = " "
              newOutput = output + "\n"
              switch (input) {
                case "$ > clear":
                  newOutput = ""
                  break;
                default:
                  newOutput += "Command not found!"
                  break;
              }
              setOutput(newOutput)
              setInput("$ > ")
            }
          }} 
        />
        <div className={styles.terminal}>
          {output}
        </div>
      </main>
    </>
  )
}
