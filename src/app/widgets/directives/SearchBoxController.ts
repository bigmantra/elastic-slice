


import {IIndexScope} from "../../controllers/IIndexScope";


export interface ISearchBoxScope extends IIndexScope {



}

export class SearchBoxController{
  private scope: ISearchBoxScope;

  static $inject = ['$scope'];
  constructor($scope: ISearchBoxScope){
    this.scope = $scope;
  }

  public init() {

  }

  public isDisabled=false;

  public doSearch(searchtext:any){
    console.log(searchtext)
    ejs.MatchQuery('_all', searchtext)
    
  }

}

