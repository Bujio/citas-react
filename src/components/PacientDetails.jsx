const PacientDetails = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold mb.3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Coscón</span>
      </p>
      <p className="font-bold mb.3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Javi</span>
      </p>
      <p className="font-bold mb.3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb.3 text-gray-700 uppercase">
        Fecha de alta:{" "}
        <span className="font-normal normal-case">12-05-2023, 20:00h</span>
      </p>
      <p className="font-bold mb.3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          quasi alias facilis, amet molestias quae natus quaerat voluptates
          explicabo pariatur laboriosam. Nesciunt ut ex sed laudantium impedit,
          commodi tenetur expedita.
        </span>
      </p>
    </div>
  );
};

export default PacientDetails;
