import angular from 'angular';
import homeItemComponent from './home-item.component';

const homeItemModule = angular
  .module('home-item', [])
  .component('homeItem', homeItemComponent)
  .name;

export default homeItemModule;
