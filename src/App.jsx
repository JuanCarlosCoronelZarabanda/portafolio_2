import React from 'react';
import './App.css';
import CanCodes from './components/CanCodes';
import { IconHeartCode } from '@tabler/icons-react';
import MyProyects from './components/MyProyects';
import Addresses from './components/Addresses';
import ContactMe from './ContactMe';

function App() {
  return (
    <main className='bg-[#0e0d16]  text-[#ffffff]' >
      <header className=' h-20  fixed w-full '>
        <Addresses />
      </header>
      <div className='grid grid-cols-2 items-start bg-[#0e0d16]' id="home">
        <div className='px-[20px] w-full grid md:grid-cols-2 gap-1 pt-[200px]  pr-[40%]'>
          <div className='md:pl-[60px] w-[300px]'>
            <img src='/photo.jpeg' className='rounded-full w-[200px] h-[200px] border-[10px] hover:border-[15px] border-[#0d166b77]' alt='photo' />
          </div>
          <div className='w-[400px] md:pl-[200px] lg:pl-20 h-[70%]'>
            <h1 className='text-4xl font-extrabold  '><span className='text-[#1d4983]' >Hola!</span> yo soy Juan Carlos Coronel Zarabanda estudio desarrollo web y me gusta escribir.
            </h1>
          </div>
          <h1 className='text-3xl pl-0 text-[#08dcf8] font-bold flex justify-stretch'><IconHeartCode size={40} />I Can:</h1>
        </div>
        <div  className='sm:h-1 py-40 ps-10 sm:w-1 md:h-[400px] md:w-[500px] md:pt-0 lg:h-[500px] lg:w-[700px]  lg:pt-0'>
          <img src="/Frame.png" alt="" />
        </div>
        
      </div>
      <div style={{ backgroundImage: 'url("/Ellipse.png")' }}  >
        
        <CanCodes />
        <hr className=" border-[#08dcf8] border-[1px]" />
        <div id="proyects" className='text-center '>
          <div className='py-10'>
            <h1 className='text-3xl font-bold text-[#19265f] pe-5'>Mis Blogs, </h1>
            <span>...todos los derechos reservados...</span>

          </div>
          <hr className=" border-[#08dcf8]  border-[1px]" />
        <div className=''>  
          <MyProyects />
        </div>
       
        <div>
            <div className="w-full h-[1%] " >

                <div className='grid grid-cols-[repeat(auto-fit,_500px)] justify-center gap-2  mx-auto py-20'>
                    <div className='pr-10  pt-[240px]'>
                        <img className='h-[500px] ' src='https://i.pinimg.com/564x/86/ed/da/86eddabf4b51db4e782c6420e5920990.jpg' alt='' />
                    </div>

                    <div className='px-10 py-40 '>
                       <h1>EL PARAÍSO PERDIDO (Fragmento 2)</h1>
                       <h2>Autor del poema: John Milton</h2>
                       <h3>
¡Salud, mundo infernal! Y tú, profundo Averno,
Recibe a tu nuevo señor, cuyo espíritu
No cambiará nunca, ni con el tiempo, ni en lugar alguno.
El espíritu vive en sí mismo, y en sí mismo
Puede hacer un cielo del infierno, o un infierno del cielo.
¿Qué importa el lugar donde yo resida,si soy el mismo que era,
Si lo soy todo, aunque inferior a aquel
A quien el trueno ha hecho más poderoso?
Aquí, al menos, seremos libres,
Pues no ha de haber hecho el Omnipotente este sitio
Para envidiárnoslo, ni querrá, por lo tanto, expulsarnos de él;
Aquí podremos reinar con seguridad, y para mí,
Reinar es ambición digna, aun cuando sea sobre el infierno,
Porque más vale reinar aquí, que servir en el cielo.
Pero, ¿dejaremos a nuestros fieles amigos,
A los partícipes y compañeros de nuestra ruina,
Yacer anonadados en el lago del olvido?
¿No hemos de invitarlos a que compartan con nosotros
Esta triste mansión, o intentar una vez más,
Con nuestras fuerzas reunidas, si hay todavía algo que
Recobrar en el cielo, o más que perder en el infierno?"

Autor del poema: John Milton</h3>
                    </div>


                </div>
            </div></div>
      </div>
      <div className=' bg-[#060718]' id='contact-me'>
          <ContactMe />
        </div>
      </div>
    </main>
  );
}

export default App;