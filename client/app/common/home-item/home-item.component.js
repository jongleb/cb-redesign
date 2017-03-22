import template from './home-item.html';
import controller from './home-item.controller';
import './home-item.scss';

const homeItemComponent = {
  restrict: 'E',
  bindings: {
    image: '<',
    title: '<',
    text: '<'
  },
  controllerAs 	: '$ctrl',
  template,
  transclude: true,
  controller
};

export default homeItemComponent;
