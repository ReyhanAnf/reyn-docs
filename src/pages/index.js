import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FiBook, FiGithub } from 'react-icons/fi';
import styles from './index.module.css';

const GRID_SIZE = 4;

function Game2048() {
  const [board, setBoard] = useState(getEmptyBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const initialBoard = getEmptyBoard();
    addRandomTile(initialBoard);
    addRandomTile(initialBoard);
    setBoard(initialBoard);
  }, []);

  function getEmptyBoard() {
    return Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
  }

  function addRandomTile(currentBoard) {
    const emptyTiles = [];
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (currentBoard[r][c] === 0) emptyTiles.push({ r, c });
      }
    }
    if (emptyTiles.length === 0) return;
    const { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    currentBoard[r][c] = Math.random() < 0.9 ? 2 : 4;
  }

  function move(direction) {
    if (gameOver) return;
    let newBoard = JSON.parse(JSON.stringify(board));
    let moved = false;
    let addedScore = 0;

    // Simplistic move logic (rotate board to always move 'left', then rotate back)
    // This keeps code cleaner for a quick implementation
    const rotateLeft = (b) => {
      const rows = b.length;
      const cols = b[0].length;
      let res = Array.from({ length: cols }, () => Array(rows).fill(0));
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          res[cols - 1 - c][r] = b[r][c];
        }
      }
      return res;
    };

    let rotatedBoard = newBoard;
    let rotations = 0;
    if (direction === 'up') rotations = 1;
    if (direction === 'right') rotations = 2;
    if (direction === 'down') rotations = 3;

    for(let k=0; k<rotations; k++) rotatedBoard = rotateLeft(rotatedBoard);

    // Core logic: compress left
    for (let r = 0; r < GRID_SIZE; r++) {
      let row = rotatedBoard[r].filter(val => val !== 0);
      for (let c = 0; c < row.length - 1; c++) {
        if (row[c] === row[c + 1]) {
          row[c] *= 2;
          addedScore += row[c];
          row.splice(c + 1, 1);
        }
      }
      while (row.length < GRID_SIZE) row.push(0);
      if (rotatedBoard[r].join(',') !== row.join(',')) moved = true;
      rotatedBoard[r] = row;
    }

    // Rotate back
    for(let k=0; k<(4-rotations)%4; k++) rotatedBoard = rotateLeft(rotatedBoard);
    newBoard = rotatedBoard;

    if (moved) {
      addRandomTile(newBoard);
      setBoard(newBoard);
      setScore(score + addedScore);
      // Check game over (simplistic: if no empty space)
      // A real check would look for possible merges
    }
  }

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.key === 'ArrowUp') move('up');
      if(e.key === 'ArrowDown') move('down');
      if(e.key === 'ArrowLeft') move('left');
      if(e.key === 'ArrowRight') move('right');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameHeader}>
        <Heading as="h3" className={styles.gameTitle}>2048</Heading>
        <div className={styles.gameStatus}>Score: {score}</div>
      </div>

      <div className={styles.grid2048}>
        {board.map((row, r) => (
          row.map((cell, c) => (
             <div key={`${r}-${c}`} className={clsx(styles.tile, styles[`tile${cell}`])}>
               {cell !== 0 ? cell : ''}
             </div>
          ))
        ))}
      </div>

      <div className={styles.gameControls}>
        <button onClick={() => move('left')}>←</button>
        <button onClick={() => move('down')}>↓</button>
        <button onClick={() => move('up')}>↑</button>
        <button onClick={() => move('right')}>→</button>
      </div>

      <button className="button button--secondary button--block" onClick={() => {
        const newEmptyBoard = getEmptyBoard();
        addRandomTile(newEmptyBoard);
        addRandomTile(newEmptyBoard);
        setBoard(newEmptyBoard);
        setScore(0);
        setGameOver(false);
      }} style={{marginTop: '1rem'}}>
        RESTART
      </button>
      <p style={{fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 600}}>Use Arrow Keys</p>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>JUST</div>
          <Heading as="h1" className={styles.heroTitle}>
            RDocs
          </Heading>
          <p className={styles.heroSubtitle}>
            My code playground. <br/>
            No pressure here.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              <FiBook className={styles.buttonIcon} />
              Read Notes
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/ReyhanAnf">
              <FiGithub className={styles.buttonIcon} />
              My Github
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageGameSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            BORED?
          </Heading>
          <p className={styles.featuresSubtitle}>
            Play a game.
          </p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Game2048 />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Playground"
      description="Reyhan's Personal Playground">
      <HomepageHeader />
      <main>
        <HomepageGameSection />
      </main>
    </Layout>
  );
}
