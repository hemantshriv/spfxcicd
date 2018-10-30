import { ISPList } from './MondayWebPartWebPart';
export default class MockHttpClient {
    private static _items;
    static get(): Promise<ISPList[]>;
}
