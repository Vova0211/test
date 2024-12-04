import fs from 'fs';
test('myFirstTest', async () => {
  const initHtml = fs.readFileSync('index.html').toString();
  document.body.innerHTML = initHtml;

  const heading = document.querySelector('h1');
  console.log(document.querySelector('body'));
  expect(heading.textContent).toEqual('Hello world!');
});
