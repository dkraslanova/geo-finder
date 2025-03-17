import React from 'react';
import styles from './App.module.scss';
import Finder from './components/Finder';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Geo Finder</h1>
      </header>
      <main className={styles.content}>
        <Finder />
      </main>
      <footer className={styles.footer}>
        <p>© 2025 Diana Čarnoká, Geo Finder</p>
      </footer>
    </div>
  );
}

export default App;
