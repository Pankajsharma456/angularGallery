'use strict';
angular.module('myApp', ['ngAnimate', 'ngTouch'])
.controller('MainCtrl', function ($scope) {
// Set of Photos
$scope.photos = [
	{	
		src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', 
		imageDesc: "Morbi sed vulputate nunc. Fusce quis dolor eget quam condimentum efficitur sit amet quis est. Aenean tempor dictum ipsum, eu egestas nibh iaculis id. Suspendisse potenti.",
		imageTitle: "Etiam pellentesque",
		imageUrl: "http://lorempixel.com/1200/700/sports/",
	},
	{
		src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg',
		imageDesc: "Aliquam pellentesque, lorem euismod ultrices interdum, neque velit finibus dui, at accumsan sem neque vitae ligula. Sed volutpat vestibulum ex quis pellentesque.",
		imageTitle: "Morbi sed vulputate nunc",
		imageUrl: "http://lorempixel.com/1200/700/people/",
	},
	{
		src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg',
		imageDesc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi quam massa, maximus et ullamcorper sit amet, hendrerit non dolor.",
		imageTitle: "volutpat justo interdum ac",
		imageUrl: "http://lorempixel.com/1200/700/transport/",
	},
	{
		src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg',
		imageDesc: "Integer interdum pellentesque sapien ut aliquam. Donec eget tincidunt leo. Nam nec odio vel lectus cursus pulvinar vitae sed ex. Cras et ex eget neque commodo hendrerit. Donec in finibus ligula, at fermentum lorem.",
		imageTitle: "Sed id gravida nibh",
		imageUrl: "http://lorempixel.com/1200/700/nature/",
	},
	{
		src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg',
		imageDesc: "Donec lacus mi, mattis a scelerisque a, malesuada consequat massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi quam massa, maximus et ullamcorper sit amet, hendrerit non dolor. ",
		imageTitle: "facilisis posuere",
		imageUrl: "http://lorempixel.com/1200/700/food/",
	},
	{
		src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg',
		imageDesc: "Cras et ex eget neque commodo hendrerit. Donec in finibus ligula, at fermentum lorem. Mauris venenatis condimentum arcu, eu eleifend urna accumsan a.",
		imageTitle: "pulvinar vitae sed ex",
		imageUrl: "http://lorempixel.com/1200/700/nightlife/",
	}
];

// initial image index
$scope._Index = 0;
// if a current image is the same as requested image
$scope.isActive = function (index) {
return $scope._Index === index;
};
// show prev image
$scope.showPrev = function () {
$scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
};
// show next image
$scope.showNext = function () {
$scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
};
// show a certain image
$scope.showPhoto = function (index) {
$scope._Index = index;
};
});
