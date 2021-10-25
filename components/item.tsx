import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import howToProtect from '../assets/images/Buttons/howToProtect.svg';
import redExploit from '../assets/images/Buttons/redExploit.svg';
import nullExploit from '../assets/images/Buttons/nullExploit.svg';

type Item = {
    id: string;
    cvss: number;
};

export function Item(Props: Item) {
    const { id, cvss } = Props;
    const [color, setColor] = useState<string>('green');
    const [classification, setClassification] = useState<string>('low');

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
        classify(cvss);
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
                <Grid
                    item
                    md={4}
                    component={Image}
                    src={redExploit}
                    height={40}
                />
                <Grid item md={4} component={Image} src={howToProtect} />
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
