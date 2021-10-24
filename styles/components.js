import * as React from 'react';
import { styled } from '@mui/styles';
import {TextField} from '@mui/material';

export const MyTextField = styled(({ color, ...other }) => <TextField {...other} />)({
  
  fontFamily: 'Schoolbell Regular'
});