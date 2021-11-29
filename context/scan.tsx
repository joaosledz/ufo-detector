import React, { createContext, useState, useCallback } from 'react';
// import {
//     imageApi,
// } from '../../services';
import { analytics } from '../services/sample';
type TypeScanContext = {
    scanData: any | null;
    loading: boolean;
    getScanData: (project_id: number) => Promise<any>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    // createProject: (
    //     data: ProjectModel,
    //     company_id: number,
    //     department_id: number,
    //     image?: File
    // ) => Promise<TypeProject>;
};

export const ScanContext = createContext<TypeScanContext>(
    {} as TypeScanContext
);

// const getStoragedProject = () => {
//     const projectDataAux = sessionStorage.getItem('@Mands:project');
//     if (projectDataAux) {
//         // const projectData: TypeProject = JSON.parse(projectDataAux);
//         // return projectData;
//     } else return null;
// };

export const ScanProvider: React.FC = ({ children }) => {
    // const projectData = getStoragedProject();

    const [loading, setLoading] = useState(false);
    const [scanData, setScanData] = useState(analytics);

    const getScanData = useCallback(async (project_id: number) => {
        // try {
        //     const response = await projectApi.show(project_id);
        //     sessionStorage.setItem(
        //         '@Mands:project',
        //         JSON.stringify(response.data)
        //     );
        //     setProject(response.data);
        //     return Promise.resolve(response.data);
        //     // alerta de troca de empresa bem sucedida
        // } catch (error) {
        //     console.log(error);
        //     return Promise.reject(error);
        // } finally {
        // }
    }, []);

    return (
        <ScanContext.Provider
            value={{
                scanData,
                loading,
                getScanData,
                setLoading,
            }}
        >
            {children}
        </ScanContext.Provider>
    );
};
