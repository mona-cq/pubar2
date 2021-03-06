import tpl from './member.jade'
import './member.scss'
import { angular, ionic } from 'library'

export default angular.module('member',[ionic])
    .config(function ($stateProvider) {
        "ngInject"
        $stateProvider
            .state('member', {
                url: '/member',
                controllerAs: 'vm',
                controller: MemberController,
                template: tpl()
            })
    });


class MemberController {
    constructor () {
        "ngInject"
        this.name = 'member'
    }
}