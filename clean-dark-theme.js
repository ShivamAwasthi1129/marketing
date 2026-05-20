const fs = require('fs');
const path = require('path');

const dirsToProcess = ['components', 'app'];

const replacements = [
    { regex: /dark:bg-slate-950\/95/g, replace: 'dark:bg-black/80' },
    { regex: /dark:bg-slate-950\/90/g, replace: 'dark:bg-black/80' },
    { regex: /dark:bg-slate-950\/80/g, replace: 'dark:bg-black/70' },
    { regex: /dark:bg-slate-950/g, replace: 'dark:bg-black' },
    { regex: /dark:bg-slate-900\/90/g, replace: 'dark:bg-[#0a0a0a]/80' },
    { regex: /dark:bg-slate-900\/80/g, replace: 'dark:bg-[#0a0a0a]/70' },
    { regex: /dark:bg-slate-900/g, replace: 'dark:bg-[#0a0a0a]' },
    { regex: /shadow-2xl/g, replace: 'shadow-md dark:shadow-none' },
    { regex: /shadow-xl/g, replace: 'shadow-sm dark:shadow-none' },
    { regex: /shadow-lg/g, replace: 'shadow-sm dark:shadow-none' },
    // Fix any double dark:shadow-none
    { regex: /dark:shadow-none dark:shadow-none/g, replace: 'dark:shadow-none' },
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const { regex, replace } of replacements) {
                content = content.replace(regex, replace);
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Cleaned dark theme in: ${fullPath}`);
            }
        }
    }
}

for (const dir of dirsToProcess) {
    if (fs.existsSync(dir)) {
        processDirectory(dir);
    }
}
