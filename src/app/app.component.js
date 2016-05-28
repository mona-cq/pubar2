/**
 * Created by wj on 2016/5/28.
 */
import { angular, ionic } from "library"
import cart from './component/cart/cart.component'
import numberPick from './component/numberPick/numberPick.component'

export default angular.module('app.component', [ionic])
    .component('cart', cart)
    .component('numberPick',numberPick)