import { Selector } from 'testcafe';

fixture `sample`
    .page `https://devexpress.github.io/testcafe/example/`;

test
   ('sample test', async t => {
    await t 
        .typeText(Selector('#developer-name'),'testcafe')
});