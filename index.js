import { useEffect, useState } from "react";

export default function ConnexionAllah() {
  const [date, setDate] = useState("");
  const [verse, setVerse] = useState(null);
  const [hadithMorning, setHadithMorning] = useState(null);
  const [duaMorning, setDuaMorning] = useState(null);
  const [hadithEvening, setHadithEvening] = useState(null);
  const [duaEvening, setDuaEvening] = useState(null);

  useEffect(() => {
    const today = new Date();
    setDate(today.toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));

    setVerse({
      sourate: 3,
      numero: 1,
      texte: "Alif, Lam, Mim.",
      explication: "Ce sont des lettres dont le sens exact n'est connu que d'Allah. Elles introduisent souvent des passages importants dans le Coran."
    });

    setHadithMorning({
      texte: "Les actions ne valent que par les intentions...",
      source: "Bukhari, Muslim",
      explication: "Ce hadith montre que l'intention pure est essentielle dans chaque acte."
    });

    setDuaMorning({
      texte: "Ô Allah, accorde-moi la sincérité dans mes paroles et mes actes.",
      explication: "Une invocation simple pour purifier les intentions dès le début de la journée."
    });

    setHadithEvening({
      texte: "Celui qui se rappelle Allah en marchant, en étant couché...",
      source: "Muslim",
      explication: "Un rappel que le dhikr est accessible dans toutes les situations."
    });

    setDuaEvening({
      texte: "Ya Allah, pardonne-moi les fautes de ce jour.",
      explication: "Parfaite pour conclure la journée avec humilité."
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 font-sans">
      <h1 className="text-3xl font-bold mb-2">Connexion à Allah</h1>
      <p className="text-sm text-gray-300 mb-4">{date}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Verset du jour</h2>
        {verse && (
          <div className="mt-2">
            <p className="text-lg italic">Sourate {verse.sourate}, verset {verse.numero}</p>
            <p className="mt-1">"{verse.texte}"</p>
            <p className="text-gray-400 text-sm mt-1">{verse.explication}</p>
          </div>
        )}
      </div>

      <div className="mb-6">
        <details open>
          <summary className="text-lg font-semibold">Matin</summary>
          <div className="mt-2">
            <details open>
              <summary className="text-md font-medium">Hadith</summary>
              <p className="mt-1">{hadithMorning?.texte}</p>
              <p className="text-gray-400 text-sm">Source : {hadithMorning?.source}</p>
              <p className="text-gray-400 text-sm">{hadithMorning?.explication}</p>
            </details>
            <details className="mt-2" open>
              <summary className="text-md font-medium">Du‘a</summary>
              <p className="mt-1">{duaMorning?.texte}</p>
              <p className="text-gray-400 text-sm">{duaMorning?.explication}</p>
            </details>
          </div>
        </details>
      </div>

      <div className="mb-6">
        <details open>
          <summary className="text-lg font-semibold">Soir</summary>
          <div className="mt-2">
            <details open>
              <summary className="text-md font-medium">Hadith</summary>
              <p className="mt-1">{hadithEvening?.texte}</p>
              <p className="text-gray-400 text-sm">Source : {hadithEvening?.source}</p>
              <p className="text-gray-400 text-sm">{hadithEvening?.explication}</p>
            </details>
            <details className="mt-2" open>
              <summary className="text-md font-medium">Du‘a</summary>
              <p className="mt-1">{duaEvening?.texte}</p>
              <p className="text-gray-400 text-sm">{duaEvening?.explication}</p>
            </details>
          </div>
        </details>
      </div>
    </div>
  );
}
