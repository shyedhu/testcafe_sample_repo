import { Selector } from 'testcafe';

export default class SamplePage {
    constructor() {
        this.sampleInput = Selector('#developer-name');
    }
}
