import {MapFilter} from './MapFilter'
import {CachedFilter} from './CachedFilter'
import {RoundFilter} from './RoundFilter'
import {PageRangeFilter} from './PageRangeFilter'
import {RangeFilter} from './RangeFilter'
import {TimestampFilter} from './TimestampFilter'


export default angular.module('elasticslice.filters', [])
  .filter('euiMap', MapFilter)
  .filter('euiCached', CachedFilter)
  .filter('euiRound', RoundFilter)
  .filter('euiPageRange', PageRangeFilter)
  .filter('euiRange', RangeFilter)
  .filter('euiTimestamp', TimestampFilter);
;


