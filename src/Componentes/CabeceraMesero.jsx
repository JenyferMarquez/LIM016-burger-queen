import React from 'react';

export default function CabeceraMesero(props) {
  const { nombreMesero, fecha } = props;
  return (
    <div className="CabeceraMesero">
      <div>
        <h1>
          {nombreMesero}
        </h1>
        <h4>
          {fecha}
        </h4>
      </div>
      <div>
        <input className="barraBusqueda" placeholder="Buscar alimento o bebida" />
      </div>
    </div>
  );
}
