import { NextApiRequest, NextApiResponse } from "next";
import { exec } from 'child_process';
import { parseJson, findExploits } from '../../utils/jsonParser';

const urlRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const message = req.body;
    const nmapCommand = `nmap -sV --script vulners ${message.url} ${message.port ? message.port : ''} -oX public/out/${message.user}.xml`;

    exec(nmapCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
      
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      
      parseJson(message.user);
      let exploits = findExploits(message.user);
      res.status(201).json(exploits);
    });
    
  }
};

export default urlRequest;
