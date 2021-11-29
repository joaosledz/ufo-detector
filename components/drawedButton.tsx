import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import circleButton from '../assets/images/Buttons/circleButton.svg';
import Router from 'next/router';

export function DrawedButton(Props: {
    title: string;
    set?: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { title, set } = Props;
    return (
        <Grid
            onClick={!set ? () => Router.back() : () => set(parseInt(title))}
            style={{ position: 'relative', cursor: 'pointer' }}
        >
            <Image
                width={'45vw'}
                height={'45vw'}
                className="image"
                src={circleButton}
            />
            <Typography
                style={{
                    position: 'absolute',
                    top: '-1.4rem',
                    left: '0.5rem',
                    fontSize: '3.5rem',
                    fontFamily: 'Schoolbell Regular',
                }}
            >
                {Props.title}
            </Typography>
        </Grid>
    );
}
