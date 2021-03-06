/**
 * Created by wj on 2016/5/28.
 */
import { angular, ionic } from "library"
import cart from './component/cart/cart.component'
import numberPick from './component/numberPick/numberPick.component'
import location from './directive/location/location'
import filter from './directive/filter/filter.tpl'
import shortBtn from './directive/shortBtn/shortBtn.directive'
import share from './directive/share/share.directive'

export default angular.module('app.component', [ionic])
    .directive('cart', cart)
    .directive('numberPick',numberPick)
    .directive('filter',filter)
    .directive('location',location)
    .directive('sBtn',shortBtn)
    .directive('share',share)