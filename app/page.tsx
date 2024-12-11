
import Image from 'next/image';
import Link from 'next/link';
import { boogie } from './fonts';

export default function dashboard() {
    return (

<div>

<div className="grid grid-cols-6 gap-0 h-full min-h-screen bg-zinc-300 ">
  <div className="col-start-1 col-span-2 bg-white " 
  style={{ backgroundImage: "url('/schneeflocken.jpg')" }}
  >

  <Image
          src="/st.JPG" // Pfad zu deinem Bild
          width={600}
          height={200}
          alt="Bildbeschreibung 01"
          className="pl-1 pt-1"
          
        />
    <h1 className='text-center text-4xl pt-1 underline text-bold italic'>Schuljahr 2023-2024</h1>
</div>


               {/* Container für die Überschrift zentrieren */}
<div
  className="col-start-3 col-end-7 bg-white "
  style={{ backgroundImage: "url('/schneeflocken.jpg')" }}
>
  <h1 className={`${boogie.className} text-9xl text-sky-600 text-center  `}>
    Winterfest
  </h1>
  {/* Button unter der Überschrift */}


  <div className="text-center mt-8">
  <Link href='/winterfest'>
    <button
      className="px-7 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 focus:outline-none"
    >
      Weitere Informationen
    </button>
    </Link>
  </div>
</div>



  <div className="col-start-1 col-end-4 bg-slate-100  relative"
  >
        <Image
          src="/dsa.jpg" // Pfad zu deinem Bild
          alt="Bildbeschreibung 01"
          className="object-cover"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
  </div>
  <div className="col-end-7 col-span-3 bg-slate-100  relative"
  >
      <Image
          src="/ok.jpg" // Pfad zu deinem Bild
          alt="Bildbeschreibung 01"
          className=" object-cover"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />    
  </div>



  <div className="col-start-1 col-end-4 bg-slate-100  relative"
  >
        <Image
          src="/.jpg" // Pfad zu deinem Bild
          alt="Bildbeschreibung 01"
          className="object-cover"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
  </div>
  <div className="col-end-7 col-span-3 bg-slate-100  relative"
  >
      <Image
          src="/flur.jpg" // Pfad zu deinem Bild
          alt="Bildbeschreibung 01"
          className=" object-cover"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />    
  </div>





</div>



</div>


        );
}






































