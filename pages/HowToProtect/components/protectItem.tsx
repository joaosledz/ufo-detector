import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Protection } from '@/../services/models/analytics';

export function ProtectItem(Props: { title: string; description: string }) {
    const { title, description } = Props;

    return (
        <Grid
            container
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            item
        >
            <Grid className={'itemTitle'} item md={12} component={Typography}>
                {title}
            </Grid>
            <Grid
                className={'descripition'}
                item
                md={12}
                component={Typography}
            >
                {description}
            </Grid>
        </Grid>
    );
}
