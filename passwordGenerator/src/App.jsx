import { useCallback, useEffect, useRef, useState } from "react"



function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState()

  // useRef Hook
  let passwordRef = useRef(null);

  // Generate Password
  const generatePassword = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "@#$%^&*()_{}[]~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,characterAllowed,setPassword])

  // Copy Password
  const copyPassword = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  // To Call
  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,characterAllowed,setPassword])

  return (
    <div className="flex items-center justify-center w-full h-screen px-5 md:px-10 lg:px-32">
     <div className="px-5 py-5 bg-gray-900 w-full flex items-center justify-center flex-col rounded-md">

      <h1 className="text-white mb-3 text-2xl">Password Generator</h1>
      <div className="w-full flex flex-col gap-5">
        
        <div className="flex bg-white w-full rounded-lg overflow-hidden">

          {/* Password */}
          <input className="w-full px-5 py-2 text-lg outline-none text-gray-800"
            type="text" 
            placeholder="Password"
            value={password}
            ref={passwordRef}
          />

          {/* Button */}
          <button onClick={copyPassword}
           className="bg-blue-600 px-5 shrink-0 lg:px-10 text-lg text-white">Copy</button>
        </div>

        <div className="flex items-center justify-center flex-col gap-10 md:flex-row">

          {/* Length */}
          <div className="flex justify-center items-center gap-2">
            <input 
              type="range" 
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white text-lg">Length : {length}</label>
          </div>

          {/* Number */}
          <div className="flex justify-center items-center gap-2">
            <input 
              type="checkbox" 
              defaultValue={setNumberAllowed}
              value={numberAllowed}
              onChange={() => {setNumberAllowed((prev) => !prev)
              }}
            />
            <label className="text-white text-lg">Number</label>
          </div>

          {/* Character */}
          <div className="flex justify-center items-center gap-2">
            <input 
              type="checkbox" 
              defaultValue={setCharacterAllowed}
              value={characterAllowed}
              onChange={() => {setCharacterAllowed((prev) => !prev)
              }}
            />
            <label className="text-white text-lg">Character</label>
          </div>

        </div>
      </div>
     </div>
    </div>
  )
}

export default App
