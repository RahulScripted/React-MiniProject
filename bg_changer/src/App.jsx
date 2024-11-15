import { useState } from "react"


function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen relative pr-10 pl-10 flex items-center justify-center " style={{backgroundColor:color}}>
      <div className="bg-white fixed bottom-5 flex flex-wrap items-center justify-between px-5 py-2 rounded-lg gap-10">

        <button onClick={() => setColor("red")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"red"}}
        >
          Red
        </button>

        <button onClick={() => setColor("green")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"green"}}
        >
          Green
        </button>

        <button onClick={() => setColor("black")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"black"}}
        >
          Black
        </button>

        <button onClick={() => setColor("olive")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"olive"}}
        >
          Olive
        </button>

        <button onClick={() => setColor("violet")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"violet"}}
        >
          Violet
        </button>

        <button onClick={() => setColor("blue")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"blue"}}
        >
          Blue
        </button>

        <button onClick={() => setColor("orange")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"orange"}}
        >
          Orange
        </button>

        <button onClick={() => setColor("royalblue")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"royalblue"}}
        >
          Royalblue
        </button>

        <button onClick={() => setColor("brown")}
          className="px-4 py-1 text-white rounded-lg text-md"
          style={{backgroundColor:"brown"}}
        >
          Brown
        </button>

      </div>
    </div>
  )
}

export default App
