"use client";

import './globals.css';
// import styles from "./page.module.css";
import { useRef, useState } from "react";

export default function Home() {

  const testeref = useRef([]);
  const [countProgress, setCountProgress] = useState(0);
  const [maximo, setMaximo] = useState(0);

  const [progress, setProgress] = useState(0);

  const atualizaProgress = async () => {
    setProgress(progress + (100 / maximo))
    return progress + (100 / maximo)
  }

  const progressBarFunction = async () => {
    if(maximo === 0) {
      alert('Por favor preencha algum numero!');
      return;
    }
    if(countProgress == maximo) {
      alert('Já deu guerreiro!!')
      return;
    }
    const valor = await atualizaProgress();
    testeref.current.style.width = `${valor}%`;
    setCountProgress(countProgress + 1);
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <main className="flex items-center justify-center h-screen flex-col bg-gray-300">

      <h1 className="text-4xl font-bold text-blue-600">Sua barra de progresso</h1>
      <p>Total: {countProgress}</p>
      <input 
        onChange={(val) => {
          setMaximo(val.target.value)
          // setProgress(progress + (100 / maximo))
          // console.log('foi', maximo)
        }}
        type='number'
        value={maximo}
        className='border-2 p-1 m-2'
      />
      <button 
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        onClick={progressBarFunction}
      >+
      </button>
      <button
        onClick={handleRefresh}
        className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
      >
        Apagar
      </button>
      <div className='w-4/5 bg-gray-200 rounded-full h-3 dark:bg-gray-700'>
        <div ref={testeref} className="bg-blue-600 h-3 rounded-full w-0" ></div>
      </div>

    </main>
  );  
}
