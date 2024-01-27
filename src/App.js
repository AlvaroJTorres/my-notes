import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NoteContainer from './components/NoteContainer';
import { css, Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global
        styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        * {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          color: #333333;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: #f2f2f2;
        }
      `}
      />
      <div className='container'>
        <Header title="Mis Notas"/>
        <NoteContainer/>
      </div>
    </>
  );
}

export default App;
