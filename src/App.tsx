import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';


function App() {
  const {t,i18n} = useTranslation()
  console.log(i18n.language)
  return (
    <div className="App">
      {t("Welcome")}
    </div>
  );
}

export default App;
