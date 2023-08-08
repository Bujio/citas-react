import { useState, useEffect } from "react";

import Header from "./components/Header";
import FormPacient from "./components/FormPacient";
import PacientsList from "./components/PacientsList";

function App() {
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});

  useEffect(() => {
    const getLocalStore = () => {
      const pacientsLocalStore =
        JSON.parse(localStorage.getItem("pacients")) ?? [];
      setPacients(pacientsLocalStore);
    };
    getLocalStore();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacients", JSON.stringify(pacients));
  }, [pacients]);

  const deletePacient = (id) => {
    const currentPacients = pacients.filter((pacient) => pacient.id !== id);
    setPacients(currentPacients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <FormPacient
          pacient={pacient}
          setPacient={setPacient}
          pacients={pacients}
          setPacients={setPacients}
        />
        <PacientsList
          pacients={pacients}
          setPacient={setPacient}
          deletePacient={deletePacient}
        />
      </div>
    </div>
  );
}

export default App;
