// @ts-nocheck
import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

export const parseJson = (fileName: string) => {
    var parser = new xml2js.Parser();

    const dirRelativeToPublicFolder = 'out';
    const dir = path.resolve('./public', dirRelativeToPublicFolder);

    const outputXml = fs.readFileSync(dir + `/${fileName}.xml`);
    parser.parseString(outputXml, function(err: any, result: any) {
        fs.writeFileSync(dir + `/${fileName}.json`, JSON.stringify(result));
    });
}

export const findExploits = (fileName: string) => {
    const dirRelativeToPublicFolder = 'out';
    const dir = path.resolve('./public', dirRelativeToPublicFolder);

    try {
        const outputJson = fs.readFileSync(dir + `/${fileName}.json`, 'utf8')
        
        let obj = JSON.parse(outputJson);
    
        if (!obj?.nmaprun?.host) {
            return [];
        }
    
        let exploits = obj?.nmaprun?.host[0]?.ports[0]?.port[0]?.script[1]?.table[0]?.table;
    
        let parsedExploits = [];
        for (let exploit of exploits) {
            let newObj = {};
            exploit.elem.map(el=> {
                newObj[el.$.key] = el._;            
            })
            parsedExploits.push(newObj);
        }
        return parsedExploits;

    } catch(err) {
        console.log(err);
        throw "Could not find exploits"
    }
}