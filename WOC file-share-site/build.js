const fs=require('fs'),path=require('path');
const dir=path.join(__dirname,'files');
const list=fs.existsSync(dir)?fs.readdirSync(dir).filter(f=>!f.startsWith('.')).map(f=>{const s=fs.statSync(path.join(dir,f));return{name:f,size:s.size,modified:s.mtime}}).sort((a,b)=>new Date(b.modified)-new Date(a.modified)):[];
fs.writeFileSync(path.join(__dirname,'files.json'),JSON.stringify(list,null,2));
console.log('Listed',list.length,'files');
