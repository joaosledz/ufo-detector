import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { Vulnerability } from '../services/models/analytics';
import { MainItem } from './mainItem';

export function MainInfo(Props: { vulnerabilities: Vulnerability[] }) {
    const { vulnerabilities } = Props;
    const [page, setPage] = useState(1);
    return (
        <Grid>
            {vulnerabilities.map(item => {
                return <MainItem vulnerability={item} />;
            })}
        </Grid>
    );
}
