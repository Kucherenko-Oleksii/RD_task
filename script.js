"use strict";

const socks = [
    {color: 'red', size: 42, style: 'striped', material: 'cotton', isClean: true},
    {color: 'blue', size: 40, style: 'plain', material: 'wool', isClean: false},
    {color: 'red', size: 42, style: 'striped', material: 'cotton', isClean: true},
    {color: 'green', size: 43, style: 'polka dots', material: 'synthetic', isClean: true},
    {color: 'yellow', size: 41, style: 'striped', material: 'wool', isClean: false}
];
const uniqueSocks = [...new Map(socks.map(sock => [JSON.stringify(sock), sock])).values()].sort((a,b) => a.size - b.size || a.isClean - b.isClean);
console.log(uniqueSocks.map(sock => `Color: ${sock.color}, Size: ${sock.size}, Style: ${sock.style}, Material: ${sock.material}, Clean: ${sock.isClean ? 'Yes' : 'No'}`).join('\n'));
   
