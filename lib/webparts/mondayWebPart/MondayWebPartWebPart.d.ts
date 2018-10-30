import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IMondayWebPartWebPartProps {
    description: string;
    test: string;
    test1: boolean;
    test2: string;
    test3: boolean;
}
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    Id: string;
}
export default class MondayWebPartWebPart extends BaseClientSideWebPart<IMondayWebPartWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    private _getMockListData();
    private _getListData();
    private _renderList(items);
    private _renderListAsync();
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
