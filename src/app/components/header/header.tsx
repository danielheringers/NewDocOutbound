import Image from 'next/image';
import Logo from '../../../../public/LogoBranca.png';


export default function HeaderDoc() {

  return (
    <>
    <div className='flex w-auto items-center justify-between p-4 px-10 bg-zinc-800 text-white'>
        <div><Image src={Logo} width={200} alt='logo'/></div>
        <div className='font-roboto font-bold text-2xl'>Documentação Outbound</div>
        <div></div>
    </div>
    </>
  );
}
