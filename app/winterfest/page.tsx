
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-1 h-full min-h-screen overflow-x-auto bg-black">
      
      <div className='col-span-3 bg-white h-20 text-center'>
      <Link href="/">
  <div className="relative group">
    <Image
      src="/st.JPG" // Pfad zu deinem Bild
      width={200}
      height={200}
      alt="Bildbeschreibung 01"
      className="pl-1 pt-1 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
    />
    {/* Optionaler Text, falls du ihn anzeigen möchtest */}
    {/* <p className="text-center mt-2">Click here</p> */}
  </div>
</Link>

      </div>
      
      <div className="col-span-2 bg-blue-400">
        
        <Image
          src="/9098.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className="bg-white">
        <h1 className="pl-40 underline italic font-bold">Informationen</h1>
        <p className="pl-3  italic font-bold text-2xl"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="bg-white">
      <p className='pl-3 italic font-bold text-2xl'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
    
      </div>
      <div className="col-span-2 bg-blue-400">
        
        <Image
          src="/1255.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className="col-span-2 bg-blue-400">
        
        <Image
          src="/3969.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className="bg-white"></div>
      <div className=" bg-white "></div>
      <div className="col-span-2 bg-blue-400">
        {' '}
        <Image
          src="/3959.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className="col-span-2 bg-blue-400 ">
        
        <Image
          src="/3953.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className=" bg-white"></div>
      <div className=" bg-white "></div>
      <div className="col-span-2 bg-blue-400 ">
        
        <Image
          src="/594.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
    </div>
  );
}
