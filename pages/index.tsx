import Head from 'next/head';
import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord, FaTwitch } from 'react-icons/fa';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Almeida</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 276.52 257.66"
          className={styles.logo}>
          <g className={styles['svg-struct']}>
            <polygon points="179.62 173.19 156.82 160.79 141.11 133.24 163.9 145.63 179.62 173.19" />
            <polygon
              className={styles['polygon-1']}
              points="77.3 216.39 54.5 203.99 199.52 183.61 222.31 196.01 77.3 216.39"
            />
            <polygon points="83.26 211.71 60.47 199.31 193.14 180.66 215.93 193.06 83.26 211.71" />
            <polygon
              className={styles['polygon-2']}
              points="222.31 196.01 199.52 183.61 127.2 67.29 149.99 79.69 222.31 196.01"
            />
            <polygon points="215.93 193.06 193.14 180.66 127.07 74.41 149.87 86.81 215.93 193.06" />
            <polygon points="77.29 216.39 54.5 203.99 68.93 173.15 91.73 185.55 77.29 216.39" />
            <polygon points="91.73 185.55 68.93 173.15 156.82 160.79 179.62 173.19 91.73 185.55" />
            <polygon points="125.77 122.18 102.97 109.78 127.2 67.28 149.99 79.69 125.77 122.18" />
            <polygon points="29.06 252.94 6.26 240.54 247.4 206.65 270.19 219.05 29.06 252.94" />
            <polygon
              className={styles['polygon-3']}
              points="29.06 252.94 6.26 240.54 55.04 145.33 77.84 157.73 29.06 252.94"
            />
            <polygon
              className={styles['polygon-1']}
              points="77.84 157.73 55.04 145.33 141.11 133.24 163.9 145.63 77.84 157.73"
            />
            <polygon points="94.25 126.61 71.46 114.2 102.97 109.78 125.77 122.18 94.25 126.61" />
            <polygon points="270.19 219.05 247.4 206.65 126.37 7.46 149.17 19.86 270.19 219.05" />
            <polygon
              className={styles['polygon-3']}
              points="94.25 126.61 71.46 114.21 126.37 7.46 149.17 19.86 94.25 126.61"
            />
            <path
              d="M960.71,426.1l127.36,209.61L834.35,671.36l53-103.49,90.16-12.67,19.77,34.69L905.4,602.8l-10.59,22.61,132.67-18.64L961.42,500.51l-22.2,39L899.53,545ZM889.39,571.44l-48.78,95.21,241.14-33.89-121-199.2L905.81,540.31l31.51-4.43,24.22-42.49,72.33,116.33-145,20.38,14.43-30.85,87.89-12.35-15.72-27.56-86.06,12.1"
              transform="translate(-811.55 -413.71)"
            />
            <polygon
              className={styles['polygon-4']}
              points="149.17 19.86 270.19 219.05 29.06 252.94 77.84 157.73 163.9 145.63 179.62 173.19 91.73 185.55 77.3 216.39 222.31 196.01 149.99 79.69 125.77 122.18 94.25 126.61 149.17 19.86"
            />
            <polygon points="22.79 257.66 0 245.26 53.02 141.77 75.82 154.17 22.79 257.66" />
            <polygon points="75.82 154.17 53.02 141.77 143.18 129.1 165.97 141.5 75.82 154.17" />
            <polygon points="87.97 131.33 65.18 118.93 126.36 0 149.16 12.4 87.97 131.33" />
          </g>
        </svg>

        <h1 className={styles.title}>Almeida</h1>
        <p className={styles.description}>Web developer</p>

        <div className={styles.iconContainer}>
          <a href="https://github.com/almeidx">
            <AiFillGithub />
            GitHub
          </a>
          <a href="https://discord.com/users/385132696135008259">
            <FaDiscord />
            Discord
          </a>
          <a href="https://twitch.tv/almeidx">
            <FaTwitch />
            Twitch
          </a>
        </div>
      </main>
    </div>
  );
}
