import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import howToProtect from '../assets/images/Buttons/howToProtect.svg';
import redExploit from '../assets/images/Buttons/redExploit.svg';
import nullExploit from '../assets/images/Buttons/nullExploit.svg';
import Link from 'next/link';
import { Vulnerability } from '../services/models/analytics';

export function MainItem(Props: { vulnerability: Vulnerability }) {
    const { id, cvss, is_exploit } = Props.vulnerability;
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
        <div className={'list'}>
            <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
                item
            >
                <Grid item className={'text'} md={2} component={Typography}>
                    {id}
                </Grid>
                {isExploit ? (
                    <Grid
                        item
                        md={4}
                        component={Link}
                        href={`HowToExploit/${id}`}
                    >
                        <Image className="image" src={redExploit} />
                    </Grid>
                ) : (
                    <Grid item md={4}>
                        <Image className="image" src={nullExploit} />
                    </Grid>
                )}
                <Grid item md={4} component={Link} href={`HowToProtect/${id}`}>
                    <Image className="image" src={howToProtect} />
                </Grid>
                <Grid item className={'text'} md={1} component={Typography}>
                    cvss:{cvss}
                </Grid>
                <Grid item md={1}>
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