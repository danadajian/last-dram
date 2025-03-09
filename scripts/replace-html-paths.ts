import { $ } from 'bun';

const html = await Bun.file('./dist/index.html').text();
const replacedHtml = html.replace(/="\//g, '="./');
await Bun.write('./dist/index.html', replacedHtml);
console.log('Updated index.html to set relative paths');

await $`cp -a ./dist/. ./public`;

export {};
