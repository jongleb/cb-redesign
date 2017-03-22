import angular from 'angular';
import Navbar from './navbar/navbar';
import CountGroup from './count-group/count-group';
import HomeItem from './home-item/home-item'

let commonModule = angular.module('app.common', [Navbar, CountGroup, HomeItem]).name;

export default commonModule;
