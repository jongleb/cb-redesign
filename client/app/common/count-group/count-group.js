import angular from 'angular';
import countGroupComponent from './count-group.component';

const countGroupModule = angular
  .module('count-group', [])
  .component('countGroup', countGroupComponent)
  .name;

export default countGroupModule;
