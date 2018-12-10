import SamplePage from '../../page/page1/samplePage.js';

let samplePage = new SamplePage();

fixture `sample`
    .page `https://devexpress.github.io/testcafe/example/`;

test
   ('sample test', async t => {
    await t 
        .typeText(samplePage.sampleInput,'testcafe')
});