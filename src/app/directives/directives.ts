import {AggregationDirective} from "./AggregationDirective";
import {FilterDirective} from "./FilterDirective";
import {HighlightDirective} from "./HighlightDirective";
import {HostDirective} from "./HostDirective";
import {IndexDirective} from "./IndexDirective";
import {InvertedDirective} from "./InvertedDirective";
import {OrFilterDirective} from "./OrFilterDirective";
import {QueryDirective} from "./QueryDirective";
import {SortDirective} from "./SortDirective";
import {VarDirective} from "./VarDirective";
import {ChecklistDirective} from "../widgets/directives/ChecklistDirective";
import {SearchboxDirective} from "../widgets/directives/SearchboxDirective";
import {SingleselectDirective} from "../widgets/directives/SingleselectDirective";
import {SimplePagingDirective} from "../widgets/directives/SimplePagingDirective";
import {CurrentFiltersDirective} from "../widgets/directives/currentfilters.directive";


export default angular.module('elasticslice.directives', [])
  .directive('eslAggregation', [AggregationDirective])
  .directive('eslFilter', [FilterDirective])
  .directive('eslHighlight', [HighlightDirective])
  .directive('eslHost', [HostDirective])
  .directive('eslIndex', [IndexDirective])
  .directive('eslInverted', [InvertedDirective])
  .directive('eslOrFilter', [OrFilterDirective])
  .directive('eslQuery', [QueryDirective])
  .directive('eslSort', [SortDirective])
  .directive('eslVar', [VarDirective])
  .directive('eslChecklist', ['$parse', ChecklistDirective])
  .directive('eslSearchbox', ['$parse', SearchboxDirective])
  .directive('eslSingleselect', ['$parse', SingleselectDirective])
  .directive('eslSimplePaging', ['$parse', SimplePagingDirective])
  .directive('eslCurrentFilters', ['$parse', CurrentFiltersDirective]);


;
