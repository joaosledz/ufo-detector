export type vulnerabilitie = {
    id: string;
    name: string;
    prerequisites: string;
    related_weakness: string[];
    solutions: string;
    summary: string;
};

export type Analytics = {
    Modified: string;
    Published: string;
    access: any;
    assigner: string;
    capec: vulnerabilitie[];
    cvss: number;
    id: string;
};
