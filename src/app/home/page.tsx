'use client'
import Image from 'next/image';
import Logo from '../../public/LogoBranca.png'
import HeaderDoc from '../components/header/header';

export default function Home() {
  return (
    <div>
      <HeaderDoc></HeaderDoc>
      <div className="flex flex-wrap">
        <nav className="flex flex-col items-center flex-start w-64 p-4 h-screen bg-gray-800 text-white">
          <div className="flex flex-col items-center justify-evenly w-64 h-64 p-4">
            <button>Cte</button>
            <button>Nfes</button>
          </div>
          <div></div>
        </nav>
        <main className="flex-1 p-4">Conteúdo Principal</main>
      </div>
    </div>
  );
}
