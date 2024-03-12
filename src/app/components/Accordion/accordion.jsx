'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function AccordionIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className={`${isOpen ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function MyAccordion({ title, children, onAccordionClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-solid border-zinc-800 border-b-2 overflow-hidden">
      <button
        className="flex items-center justify-between w-full py-4 px-6 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <AccordionIcon isOpen={isOpen} />
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="text-white py-2 px-6 hover:bg-zinc-800 transition-colors duration-300">
          {React.Children.map(children, child =>
            React.cloneElement(child, { onClick: () => onAccordionClick(title) })
          )}
        </div>
      </div>
    </div>
  );
}

export default function AccordionGroup({ onAccordionClick }) {
  return (
    <div>
      <MyAccordion title="Export" onAccordionClick={onAccordionClick}>
        <button className="text-white w-full h-full">Exportar</button>
      </MyAccordion>
      <MyAccordion title="NFe" onAccordionClick={onAccordionClick}>
        <button className="text-white w-full h-full">Lister NFe</button>
      </MyAccordion>
      <MyAccordion title="NFCe">
        <Link href='#'>Listar NFCe</Link>
      </MyAccordion>
      <MyAccordion title="NFSe">
        <Link href='#'>Listar NFSe</Link>
      </MyAccordion>
      <MyAccordion title="XML">
        <Link href='#'>Listar XML</Link>
      </MyAccordion>
      <MyAccordion title="CTe">
        <Link href='#'>Listar CTe</Link>
      </MyAccordion>
      <MyAccordion title="CTeOS">
        <Link href='#'>Listar CTeOS</Link>
      </MyAccordion>
      <MyAccordion title="DFe">
        <Link href='#'>Listar DFe</Link>
      </MyAccordion>
      <MyAccordion title="Download">
        <Link href='#'>Download</Link>
      </MyAccordion>
      <MyAccordion title="FiscalDocument">
        <Link href='#'>Fiscal Document</Link>
      </MyAccordion>
      <MyAccordion title="NFeEnergia">
        <Link href='#'>NFeEnergia</Link>
      </MyAccordion>
      <MyAccordion title="NFeTelecomunicacoes">
        <Link href='#'>NFeTelecomunicacoes</Link>
      </MyAccordion>
    </div>
  );
}
