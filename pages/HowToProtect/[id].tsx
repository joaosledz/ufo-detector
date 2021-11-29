import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Grid } from '@mui/material';
import howToProtect from '../../assets/images/Buttons/howToProtect.svg';
import { ScanContext } from '../../context/scan';
import { useContext } from 'react';
import { Protection } from '@/../services/models/analytics';
import { ProtectInfo } from './components/protectInfo';
import { DrawedButton } from '@/../components/drawedButton';

export default function HowToProtect() {
    const { scanData } = useContext(ScanContext);
    return (
        <div
            className={styles.container}
            style={{ justifyContent: 'flex-start', paddingBottom: '3rem' }}
        >
            <Grid
                container
                style={{ marginTop: '3rem', width: '80vw' }}
                alignItems="center"
                justifyContent="space-between"
            >
                <DrawedButton title="<" />
                <Grid>
                    <span>
                        <Image
                            width={300}
                            height={120}
                            className="image"
                            src={howToProtect}
                        />
                    </span>
                </Grid>
                <Grid />
            </Grid>

            {scanData.capec.map((protection: Protection) => {
                return <ProtectInfo protection={protection} />;
            })}
        </div>
    );
}
