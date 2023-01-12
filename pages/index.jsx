import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef, useEffect } from "react";
import styles from '../styles/Home.module.css'

const banner = `
        | Welcome to blackout |
          ⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⢀⣄⠀⣠⠶⠲⠞⠁⠀⠙⠛⠳⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⡟⠙⠛⠁⣀⣀⢀⡤⢤⠀⠀⠀⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀
          ⢠⡷⢄⣠⠊⠀⠀⠁⠀⡀⠑⠒⠈⢳⠀⢻⡆⠀⠀⠀⠀⠀⠀
          ⠀⣷⠃⢠⡀⠀⠀⠀⠀⠈⠀⠀⠀⢎⠀⢸⡇⠀⠀⠀⠀⠀⠀
          ⢠⡇⠀⠘⢁⡄⠀⠀⠉⠉⠀⠀⠀⣳⢧⣾⠃⠀⠀⠀⠀⠀⠀
          ⢸⡇⠀⠀⠘⠆⠀⠀⢀⠀⠀⠀⠀⠁⢿⡏⠀⠀⠀⠀⠀⠀⠀
          ⠈⣇⠸⢖⡀⠀⠐⣂⠹⡇⠀⠀⠀⣀⣼⠇⠀⠀⠀⠀⠀⠀⠀
          ⠀⠹⣦⠀⠈⠭⠉⠀⠀⠀⠀⣠⡾⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠈⠳⢦⣄⣀⣀⣠⡴⠞⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

const help = `
    Available commands:

start - Start the game
help - Display this output
clear - Clears the display
`

export default function Home() {
  const [input, setInput] = useState("$ > ")
  const [output, setOutput] = useState("")
  const inputRef = useRef()


  useEffect(() => {
    inputRef.current.focus()
    setOutput(banner)
  }, [])

  return (
    <>
      <Head>
        <title>BlackOut</title>
        <meta name="description" content="BlackOut is Web TUI-like game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} onClick={e => {
        setInput("$ > ")
        inputRef.current.focus()
      }}>
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
                case "$ > start":
                  newOutput = ""
                  break;
                case "$ > help":
                  newOutput = help
                  break;
                case "$ > clear":
                  newOutput = ""
                  break;
                default:
                  newOutput += "Command not found (try help)!"
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
