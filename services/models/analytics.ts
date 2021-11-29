export type Protection = {
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
    capec: Protection[];
    cvss: number;
    id: string;
};

export type Vulnerability = {
    type:
        | 'cve'
        | 'metasploit'
        | 'exploitpack'
        | 'zdt'
        | 'githubexploit'
        | 'exploitdb'
        | 'seebug';
    is_exploit: string; //boolean
    id: string;
    cvss: string; //number
};
