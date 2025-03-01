const html = await Bun.file('./dist/index.html').text();
const replacedHtml = html.replace(/="\//g, '="./');
await Bun.write('./dist/index.html', replacedHtml);
