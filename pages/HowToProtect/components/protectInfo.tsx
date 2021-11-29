import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Protection } from '@/../services/models/analytics';
import { ProtectItem } from './protectItem';

export function ProtectInfo(Props: { protection: Protection }) {
    const { id, name, prerequisites, solutions, summary } = Props.protection;

    return (
        <div
            className={'list'}
            style={{
                marginTop: 50,
                paddingLeft: '2rem',
                paddingBottom: '2rem',
            }}
        >
            <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="flex-start"
                item
            >
                <Grid item className={'itemMainTitle'} component={Typography}>
                    {name}
                </Grid>
                <ProtectItem title={'Summary'} description={summary} />
                <ProtectItem
                    title={'Prerequisites'}
                    description={prerequisites}
                />
                <ProtectItem title={'Solutions'} description={solutions} />
            </Grid>
        </div>
    );
}
