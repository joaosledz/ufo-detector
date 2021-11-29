import React, { useState, useEffect } from 'react';
import { Grid, Pagination, Stack, Typography } from '@mui/material';
import { Vulnerability } from '../services/models/analytics';
import { MainItem } from './mainItem';

export function MainInfo(Props: { vulnerabilities: Vulnerability[] }) {
    const { vulnerabilities } = Props;
    const size = Math.round(vulnerabilities.length / 3);
    const [pageSize, setPageSize] = useState(size);
    const [page, setPage] = useState(1);

    const indexOfLastItem = page * 3;
    const indexOfFirstItem = indexOfLastItem - 3;
    const currentItems = vulnerabilities.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    useEffect(() => {
        console.log(indexOfLastItem, indexOfFirstItem);
    }, [indexOfLastItem, indexOfFirstItem]);

    const handleChange = (event: any, value: number) => {
        console.log(value);
        setPage(value);
    };

    return (
        <Grid alignItems={'center'}>
            {currentItems.map(item => {
                return <MainItem vulnerability={item} />;
            })}
            <Stack spacing={2}>
                {/* <Typography>Page: {page}</Typography> */}
                <Pagination
                    style={{ alignSelf: 'center', paddingTop: '2rem' }}
                    count={pageSize}
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </Grid>
    );
}
