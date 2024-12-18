
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
        <h1 className="pl-20  underline italic font-bold text-blue-400 text-xl">Gemeinsames Basteln</h1>
        <p className="pl-3  italic font-bold text-2xl">Auf diesem Bild sieht ihr eine kreative Bastelrunde, die für Kinder viel Freude bereitet. Gemeinsam sitzen sie an einem Tisch, um mit buntem Papier, Scheren, Klebstoff und weiteren Materialien zu werken. Die Kinder konzentrieren sich voll und ganz auf ihre Bastelarbeiten, während die Erwachsenen helfend zur Seite stehen und sie anleiten.

Solche Bastelaktionen fördern nicht nur die Feinmotorik und Kreativität der Kinder, sondern schaffen auch ein Gefühl von Gemeinschaft und Teamarbeit. Die Vielfalt an Materialien, wie Papier in unterschiedlichen Farben und Formen, lässt der Fantasie freien Lauf. Nebenbei entsteht eine entspannte Atmosphäre, in der alle Beteiligten miteinander interagieren, voneinander lernen und gemeinsam etwas Schönes gestalten.</p>
      </div>
      <div className="bg-white">
        <h1 className="font-bold italic underline pl-20 text-blue-400 text-xl">Grillen auf dem Winterfest</h1>
      <p className='pl-3 italic font-bold text-2xl'> Grillen gehört für viele zu den warmen Sommermonaten, doch auch im Winter hat es eine ganz besondere stimmung vor allem auf einem Winterfest. Die kalte Luft, der Duft von Gegrilltem und die warme Glut des Grills schaffen eine gemütliche Atmosphäre, die alle Besucher zusammenbringt.

während sich viele um den Grill versammeln, brutzeln Würstchen, Fleischspieße oder sogar vegetarische Leckereien über dem Feuer. Ein Grillmeister sorgt dafür, dass alles perfekt geart ist, während die Gäste sich freuen und die Gesellige Stimmung genießen.
Grillen im Winter hat etwas Magisches  die Mischung aus frostiger Kälte, wärmendem Feuer und gutem Essen verbindet Menschen. Es schafft unvergessliche Momente und zeigt Grillen ist nicht nur für den Sommer gemacht! </p>
    
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
      <div className="bg-white">
       <h1 className='font-bold pl-20 underline italic text-blue-400 text-xl'>Musik auf der Bühne </h1>
      <p className='pl-3 italic font-bold text-2xl'>Das Winterfest der Schule ist jedes Jahr ein besonderes Highlight für Schüler, Lehrer und Eltern. Ein besonders stimmungsvoller Moment entsteht, wenn die Bühne zum Leben erwacht und die Musik die Halle erfüllt. Die Schüler präsentieren voller Begeisterung, was sie in den letzten Wochen und Monaten vorbereitet haben. Klavier, Trommeln insBesonders schön ist es zu sehen, wie die Schüler selbstbewusst und voller Freude auf der Bühne stehen und ihre Talente präsentieren. </p>

      </div>
      <div className=" bg-white ">
      <h1 className='font-bold pl-20 underline italic text-blue-400 text-xl'>Towers Camp </h1>
     <p className='pl-3 italic font-bold text-2xl'>Das Towers Camp bringt Basketballspaß direkt in die Schule und begeistert Schüler mit dem Ziel, so viele Körbe wie möglich zu werfen. Egal ob Anfänger oder erfahrene Spieler  beim Körbewerfen steht die Freude am Basketball im Mittelpunkt. Unter der Anleitung von engagierten Lehrer/Lehrerinnen haben die Schüler die Möglichkeit, ihre Wurftechnik zu verbessern. </p>


      </div>
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
      <div className=" bg-white">
     <h1 className='font-bold pl-20 underline italic text-blue-400 text-xl'> Kreatives Bauen   </h1>
     <p className='pl-3 italic font-bold text-2xl'> Beim kreativen Bauprojekt in der Schule hatten die Kinder die Möglichkeit, ihrer Fantasie freien Lauf zu lassen und kleine Häuser aus Bastelstäbchen zu bauen. Mit viel Geduld, Geschick und einer großen Portion Teamarbeit entstanden beeindruckende kleine Bauwerke, die alle begeisterten.</p>

      </div>
      <div className=" bg-white ">

     <h1 className='font-bold pl-20 underline italic text-blue-400 text-xl'> Weihnachtsdekoration</h1>
     <p className='pl-3 italic font-bold text-xl'>Die Vorweihnachtszeit ist eine der schönsten und stimmungsvollsten Zeiten des Jahres. Auch in der Schule sorgt die liebevoll gestaltete Weihnachtsdekoration für eine gemütliche und festliche Atmosphäre. Gemeinsam mit den Kindern werden Klassenzimmer, Flure und sogar der Schulhof weihnachtlich geschmückt.</p>

      </div>
      <div className="col-span-2 bg-blue-400 ">
        
        <Image
          src="/594.jpg" // Pfad zu deinem Bild
          width={800}
          height={200}
          alt="Bildbeschreibung 01"
          className="pl-4"
        />
      </div>
    </div>
  );
}
