const fs = require('fs');
const https = require('https');

https.get('https://megaplay.buzz/lib/e1-player.min.js?v=2.20', {
    headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://megaplay.buzz/' }
}, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
        // Find the function M3kH text exactly
        const start = data.indexOf('function M3kH(vjsz){');
        const end = data.lastIndexOf('})("');
        const m3khStr = data.substring(start, end);
        const vjsz = data.substring(end + 4, data.length - 2);
        
        function nbPz(PIRz) {
            let j6Jz = 143286419;
            for (let LFjA = 0; LFjA < PIRz.length; LFjA++) {
                j6Jz ^= (PIRz.charCodeAt(LFjA) * 2087546 + PIRz.charCodeAt(LFjA >>> 4)) ^ 885692652;
            }
            let ndmA = '';
            for (let j8gA = 0; j8gA < 4; j8gA++) {
                const Dv9z = (j6Jz >>> 0) % 64;
                j6Jz = Math.floor((j6Jz >>> 0) / 64);
                ndmA += Dv9z >= 36 ? String.fromCharCode(65 + (Dv9z - 36)) : Dv9z >= 10 ? String.fromCharCode(97 + (Dv9z - 10)) : String.fromCharCode(48 + Dv9z);
            }
            return ndmA;
        }

        function f3bA(zq4z, bY6z) {
            zq4z = decodeURI(zq4z);
            let Dn1x = 0;
            let fV3x = '';
            for (let bQYx = 0; bQYx < zq4z.length; bQYx++) {
                fV3x += String.fromCharCode(zq4z.charCodeAt(bQYx) ^ bY6z.charCodeAt(Dn1x));
                Dn1x++;
                if (Dn1x >= bY6z.length) Dn1x = 0;
            }
            return fV3x;
        }

        const key = nbPz(m3khStr);
        console.log('Derived Key:', key);
        const decrypted = f3bA(vjsz, key);
        console.log('Decrypted Length:', decrypted.length);
        fs.writeFileSync('e1_decrypted.js', decrypted);
        console.log('Saved to e1_decrypted.js');
    });
});
