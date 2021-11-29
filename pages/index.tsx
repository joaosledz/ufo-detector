import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Grid, TextField, Typography } from '@mui/material';
import LogoUFO from '../assets/images/logoUFO.png';
import pageNotFound from '../assets/images/pageNotFoundBanner.svg';
import { analytics } from '../services/sample';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { vulnerabilitiesData } from '../services/sample';
import SocketIOClient from 'socket.io-client';
import { MainInfo } from '../components/MainInfo';
interface IMsg {
    user: string;
    url: string;
    port: string;
}
interface Vulnerability {
    cvss: string,
    type: string,
    is_exploit: boolean,
    id: string
}

const user = "user_" + String(new Date().getTime()).substr(-3);

const Home: NextPage = () => {
    const [search, setSearch] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('Ufo Detector');
    const [connected, setConnected] = useState<boolean>(false);
    const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);

    const [port, setPort] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);

    useEffect((): any => {
        // connect to socket server
        const socket = SocketIOClient.connect(process.env.BASE_URL, {
            path: '/api/socketio',
        });

        socket.on('connect', () => {
            console.log('SOCKET CONNECTED!', socket.id);
            setConnected(true);
        });

        socket.on('message', (message: IMsg) => {
            vulnerabilities.push(message);
            setVulnerability([...vulnerabilities]);
            console.log(vulnerabilities);
        });

        if (socket) return () => socket.disconnect();
    }, []);

    const sendMessage = async () => {
        setConnected(true);
        if (url) {
            const message: IMsg = { user, url, port };

            axios.post('/api/url', message)
                .then(function (response) {
                    setSearch(true);
                    setVulnerabilities(response.data);
                })
                .catch(function (error) {
                    console.log(error);

            });
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Schoolbell&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main
                className={styles.main}
                style={{
                    width: '100vw',
                    padding: 50,
                    justifyItems: 'flex-start',
                }}
            >
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item component={Image} src={LogoUFO} />
                    <Grid
                        item
                        component={Typography}
                        variant="h1"
                        className={'title'}
                    >
                        {title}
                    </Grid>
                    <Grid
                        item
                        md={12}
                        component={Typography}
                        variant="h3"
                        className={'subtitle'}
                        // style={{ fontFamily: 'Schoolbell Regular' }}
                    >
                        Detect Vulnerabilities in your website
                    </Grid>
                </Grid>
                <Grid
                    container
                    style={{
                        margin: '20 10',
                        paddingTop: '2rem',
                        paddingLeft: '6rem',
                        paddingRight: '6rem',
                    }}
                >
                    <Grid md={6}>
                        <TextField
                            variant="standard"
                            className={'url'}
                            fullWidth
                            value={url}
                            onChange={event => setUrl(event.target.value)}
                            label="URL"
                        />
                    </Grid>
                    <Grid md={1} />
                    <Grid md={3}>
                        <TextField
                            variant="standard"
                            className={'port'}
                            fullWidth
                            value={port}
                            onChange={event => setPort(event.target.value)}
                            label="PORT"
                        />
                    </Grid>
                    <Grid style={{ padding: '0 12px' }} md={2}>
                        <button
                            className={'lined thick'}
                            onClick={() => {
                                sendMessage();
                            }}
                        >
                            GO
                        </button>
                    </Grid>
                    <Grid
                        className={'description'}
                        container
                        component={Typography}
                    >
                        {isError ? (
                            <Image
                                width={145}
                                height={145}
                                className="image"
                                src={pageNotFound}
                            />
                        ) : !search ? (
                            <Typography>
                                The objective of this work is to develop a
                                Network Vulnerability Test (NVT) used to scan
                                endpoints to identify and detect vulnerabilities
                                that measure and return a cybersecurity
                                assessment to know the degree of maturity in
                                terms of information protection and make sure
                                that it is in line with its OWASP (Open Web
                                Application Security Project) and other
                                regulatory requirements.
                            </Typography>
                        ) : (
                            <MainInfo vulnerabilities={vulnerabilitiesData} />
                        )}
                    </Grid>
                </Grid>
            </main>
        </div>
    );
};

export default Home;
