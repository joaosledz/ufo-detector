import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import howToProtect from '../assets/images/Buttons/howToProtect.svg';
import redExploit from '../assets/images/Buttons/redExploit.svg';
import nullExploit from '../assets/images/Buttons/nullExploit.svg';
import nullProtect from '../assets/images/Buttons/nullProtect.svg';
import Link from 'next/link';
import { Vulnerability } from '../services/models/analytics';

export function MainItem(Props: { vulnerability: Vulnerability }) {
    const { id, cvss, is_exploit, type } = Props.vulnerability;
    const [color, setColor] = useState<string>('green');
    const [classification, setClassification] = useState<string>('low');
    const isExploit = is_exploit === 'true';
    const classify = (cvss: number) => {
        if (cvss <= 3.9) {
            setColor('#21B803');
            setClassification('low');
            return;
        }
        if (cvss <= 6.9) {
            setColor('#FBBC04');
            setClassification('medium');
            return;
        }
        if (cvss <= 8.9) {
            setColor('#F66E0B');
            setClassification('high');
            return;
        }
        setColor('#F41907');
        setClassification('critical');
        return;
    };

    useEffect(() => {
        classify(parseFloat(cvss));
    }, [cvss]);
    return (
        <div className={'list'} style={{ marginTop: '10px' }}>
            <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
                item
            >
                <Grid item className={'text'} xs={6} component={Typography}>
                    {id}
                </Grid>
                {isExploit ? (
                    <Grid
                        item
                        xs={2}
                        component={Link}
                        href={`https://www.exploit-db.com/search?q=${id}`}
                    >
                        <Image className="image" src={redExploit} />
                    </Grid>
                ) : (
                    <Grid item xs={2}>
                        <Image src={nullExploit} />
                    </Grid>
                )}
                {type === 'cve' ? (
                    <Grid
                        item
                        xs={2}
                        component={Link}
                        href={`HowToProtect/${id}`}
                        alignContent={'center'}
                    >
                        <Image className="image" src={howToProtect} />
                    </Grid>
                ) : (
                    <Grid item xs={2}>
                        <Image src={nullProtect} />
                    </Grid>
                )}

                <Grid item className={'text'} xs={1} component={Typography}>
                    cvss:{cvss}
                </Grid>
                <Grid item xs={1}>
                    <span
                        className="dot"
                        style={{ backgroundColor: `${color}` }}
                    ></span>
                    <Grid className={'text'}> {classification} </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
