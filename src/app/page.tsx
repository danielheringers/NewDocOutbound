'use client'
import { SetStateAction, useState } from 'react';
import HeaderDoc from './components/header/header';
import AccordionGroup from './components/Accordion/accordion';

export default function Home() {
  const [activeContent, setActiveContent] = useState('');

  const handleAccordionClick = (title: SetStateAction<string>) => {
    setActiveContent(title);
  };

  return (
    <div>
      <HeaderDoc></HeaderDoc>
      <div className="flex">
        <nav className="flex flex-col items-center w-64 bg-zinc-900 border-solid border-zinc-800 border-r-2 text-white">
          <div className="flex flex-col w-64">
            <AccordionGroup onAccordionClick={handleAccordionClick}></AccordionGroup>
          </div>
        </nav>
        <main className="flex w-screen flex-col p-4 bg-zinc-900 gap-2">
          <div><p className='text-gray-400'>Version 0.0.1</p></div>
          <div className='text-lg text-yellow-600'>{activeContent}</div>
          <span className='text-sm text-yellow-600'>EFETUA A EXPORTAÇÃO DE DOCUMENTOS FISCAIS</span>
          <div className='flex max-w-4xl h-fit text-green-600 bg-zinc-900 border-solid border-zinc-800 border-2 rounded-md p-4'><p>http://localhost:3000/api/export</p></div>
          <div className='flex max-w-4xl flex-row justify-between'>
            <div className='flex flex-col w-fit h-fit gap-5 text-gray-300 bg-zinc-900 border-solid border-zinc-800 border-2 rounded-md p-4'>
              <div className='flex w-96 border-solid border-zinc-800 border-b-2 justify-between'>
                <p>Header</p>
                <p>Value</p>
              </div>
              <div className='flex w-96 border-solid border-zinc-800 border-b-2 justify-between'>
                <p>token</p>
                <p>string</p>
              </div>
              <div className='flex w-96 border-solid border-zinc-800 border-b-2 justify-between'>
                <p>x-api-key</p>
                <p>string</p>
              </div>
            </div>
            <div className='flex flex-col w-fit h-fit gap-5 text-gray-300 bg-zinc-900 border-solid border-zinc-800 border-2 rounded-md p-4'>
              <div className='flex w-96 border-solid border-zinc-800 border-b-2 justify-between'>
                <p>Query Params</p>
                <p>Value</p>
              </div>
              <div className='flex w-96 border-solid border-zinc-800 border-b-2 justify-between'>
                <p>token</p>
                <p>string</p>
              </div>
              <div className='flex w-96 border-solid border-zinc-800 border-b-2 justify-between'>
                <p>x-api-key</p>
                <p>string</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
