import './Login.css';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function SocialLogin() {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log(response);
    // Aquí puedes enviar el token de acceso a tu servidor para autenticar al usuario
    // Luego, redirige al usuario a la página de inicio
    navigate('/home');
  };

  return (
    <div>
      <h2>Iniciar sesión con Google:</h2>
      <GoogleLogin
        clientId="297668179428-s96aom2csi1ikhb0tmg29kbpatk03luq.apps.googleusercontent.com"
        buttonText="Iniciar sesión con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default SocialLogin;
