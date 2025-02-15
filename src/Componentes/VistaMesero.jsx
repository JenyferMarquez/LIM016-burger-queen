import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from '../Firebase/firebaseConfig';
import { obtenerUsuario } from '../Firebase/firebaseStore';
import BarraNav from './BarraNav';
import CabeceraMesero from './CabeceraMesero';
import '../Estilos/VistaMesero.scss';
export default function VistaMesero() {
  const [usuario, setUsuario] = useState('');
  console.log(auth.currentUser.uid);
  useEffect(() => obtenerUsuario(auth.currentUser.uid)
    .then((docu) => {
      console.log(docu);
      setUsuario(docu.nombre);
    }), []);

  return (
    <div className="VistaMesero">
      <BarraNav />
      <CabeceraMesero nombreMesero={usuario} fecha="16/03/2022" />
      <Outlet />
    </div>
  );
}
