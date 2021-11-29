import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Grid, TextField, Typography } from '@mui/material';

export default function HowToProtect() {
    return (
        <div className={styles.container}>
            <Typography> PAGINA HOW TO PROTECT</Typography>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
