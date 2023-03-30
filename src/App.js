import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null)
  const colors = {
    light: 'white',
    dark: '#141416'
  }

  document.body.style.backgroundColor = darkMode ? colors.dark : colors.light;
  document.body.style.color = !darkMode ? colors.dark : colors.light;

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    showAlert(`${!darkMode ? 'Dark' : 'Light'} mode enabled.`, 'success');

  }


  return (
    <>
      <Navbar name="TextUtils" darkMode={darkMode} toggleMode={toggleDarkMode}></Navbar>
      <Alert alert={alert} />
      <TextForm textLabel="Enter Text to analyse" textHeight={8} darkMode={darkMode} colors={colors} showAlert={showAlert} />
    </>
  );
}

