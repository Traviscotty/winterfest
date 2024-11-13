import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-1 h-full min-h-screen overflow-x-auto bg-black">
      <div className="col-span-2 bg-blue-500">
        01
        <Image
          src="/bmw.jpg" // Pfad zu deinem Bild
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
      <div className="bg-white">03</div>
      <div className="col-span-2 bg-blue-500">
        04
        <Image
          src="/bmw.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className="col-span-2 bg-blue-500">
        05
        <Image
          src="/bmw.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className="bg-white">06</div>
      <div className=" bg-white ">07</div>
      <div className="col-span-2 bg-blue-500">
        08{' '}
        <Image
          src="/bmw.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className="col-span-2 bg-blue-500 ">
        09
        <Image
          src="/bmw.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
      <div className=" bg-white">10</div>
      <div className=" bg-white ">11</div>
      <div className="col-span-2 bg-blue-500 ">
        12
        <Image
          src="/bmw.jpg" // Pfad zu deinem Bild
          width={800}
          height={400}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
    </div>
  );
}
