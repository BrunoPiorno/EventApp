import './Login.css';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function SocialLogin({ setUserProfilePic }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const responseGoogle = (response) => {
    if (response.profileObj) {
      setUserProfilePic(response.profileObj.imageUrl);
      navigate('/home'); // Redirige al usuario a la página de inicio ("/home")
    } else {
      setError('No se pudo obtener la imagen de perfil del usuario.');
    }
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
      {error && <p>{error}</p>}
    </div>
  );
}

export default SocialLogin;

