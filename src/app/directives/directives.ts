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


export default angular.module('elasticslice.directives', [])
  .directive('euiAggregation', [AggregationDirective])
  .directive('euiFilter', [FilterDirective])
  .directive('euiHighlight', [HighlightDirective])
  .directive('euiHost', [HostDirective])
  .directive('euiIndex', [IndexDirective])
  .directive('euiInverted', [InvertedDirective])
  .directive('euiOrFilter', [OrFilterDirective])
  .directive('euiQuery', [QueryDirective])
  .directive('euiSort', [SortDirective])
  .directive('euiVar', [VarDirective])
  .directive('euiChecklist', ['$parse',ChecklistDirective])
  .directive('euiSearchbox', ['$parse',SearchboxDirective])
  .directive('euiSingleselect', ['$parse',SingleselectDirective])
  .directive('euiSimplePaging', ['$parse',SimplePagingDirective]);

;
