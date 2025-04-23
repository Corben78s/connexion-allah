import { useEffect, useState } from "react";

export default function Home() {
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
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Connexion à Allah</h1>
      <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>{date}</p>

      <div style={{ marginTop: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Verset du jour</h2>
        {verse && (
          <div style={{ marginTop: '10px' }}>
            <p style={{ fontStyle: 'italic' }}>Sourate {verse.sourate}, verset {verse.numero}</p>
            <p>"{verse.texte}"</p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{verse.explication}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <details open>
          <summary style={{ fontSize: '1rem', fontWeight: '600' }}>Matin</summary>
          <div style={{ marginTop: '10px' }}>
            <details open>
              <summary style={{ fontSize: '0.95rem', fontWeight: '500' }}>Hadith</summary>
              <p>{hadithMorning?.texte}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Source : {hadithMorning?.source}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{hadithMorning?.explication}</p>
            </details>
            <details style={{ marginTop: '10px' }} open>
              <summary style={{ fontSize: '0.95rem', fontWeight: '500' }}>Du‘a</summary>
              <p>{duaMorning?.texte}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{duaMorning?.explication}</p>
            </details>
          </div>
        </details>
      </div>

      <div style={{ marginTop: '20px' }}>
        <details open>
          <summary style={{ fontSize: '1rem', fontWeight: '600' }}>Soir</summary>
          <div style={{ marginTop: '10px' }}>
            <details open>
              <summary style={{ fontSize: '0.95rem', fontWeight: '500' }}>Hadith</summary>
              <p>{hadithEvening?.texte}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Source : {hadithEvening?.source}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{hadithEvening?.explication}</p>
            </details>
            <details style={{ marginTop: '10px' }} open>
              <summary style={{ fontSize: '0.95rem', fontWeight: '500' }}>Du‘a</summary>
              <p>{duaEvening?.texte}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{duaEvening?.explication}</p>
            </details>
          </div>
        </details>
      </div>
    </div>
  );
}
