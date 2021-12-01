import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router'
import { Grid, CircularProgress } from '@mui/material';
import howToProtect from '../../assets/images/Buttons/howToProtect.svg';
import { useState, useEffect } from 'react';
import { Protection } from '@/../services/models/analytics';
import ProtectInfo from '../../components/protectInfo';
import { DrawedButton } from '@/../components/drawedButton';
import axios from 'axios';

export default function HowToProtect() {
    const router = useRouter();
    const cveApiUrl = "https://cve.circl.lu/api/cve";
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Protection[]>([]);

    useEffect(() => {
        console.log('chamou1')
        axios
        .get(`${cveApiUrl}/${id}`)
        .then(function (response) {
                console.log('chamou2')
                setData(response.data.capec)
                setLoading(false);
            })
            .catch(function (error) {
                console.log('chamou3')
                console.log(error);
            });
    }, []);

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
                            alt="Imagem"
                            width={300}
                            height={120}
                            className="image"
                            src={howToProtect}
                        />
                    </span>
                </Grid>
                <Grid />
            </Grid>

            {loading ?
                <CircularProgress style={{ position: 'fixed', top: '50%', left: '50%' }}/>
                :
                null
            }

            {data.length === 0 ? 
                (<h2>No results found</h2>)
                :
                data.map((protection: Protection, index: number) => {
                    return <ProtectInfo key={index} protection={protection} />;
                })
            }
        </div>
    );
}
