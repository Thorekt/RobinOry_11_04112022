
import React from "react";
import { Link } from "react-router-dom";
import '../styles/Error.css';

function ErrorPage() {
  return (
    <div className="error">
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default ErrorPage;