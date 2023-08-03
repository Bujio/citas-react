import { useEffect, useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    owner: "",
    email: "",
    date: "",
    symptoms: "",
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y
        <span className="text-indigo-600 font-bold "> Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10"
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            placeholder="nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            name="owner"
            value={data.owner}
            onChange={handleInputChange}
            placeholder="nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            placeholder="email de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 font-bold uppercase"
          >
            Fecha de alta
          </label>
          <input
            id="fecha"
            value={data.date}
            name="date"
            onChange={handleInputChange}
            type="datetime-local"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 font-bold uppercase"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            value={data.symptoms}
            name="symptoms"
            onChange={handleInputChange}
            placeholder="Describe los síntomas..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 uppercase cursor-pointer transition-color rounded-md"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Form;
