import React from 'react';
import { ScanProvider } from './scan';

const AppProviders: React.FC = ({ children }) => {
    return <ScanProvider>{children}</ScanProvider>;
};

export default AppProviders;
