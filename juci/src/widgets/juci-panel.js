/*	
	This file is part of JUCI (https://github.com/mkschreder/juci.git)

	Copyright (c) 2015 Martin K. Schröder <mkschreder.uk@gmail.com>

	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/ 

JUCI.app
.directive("juciPanel", function(){
	return {
		templateUrl: "/widgets/juci-panel.html", 
		replace: true, 
		scope: {
			title: "@", 
			is_expanded: "@isOpen"
		}, 
		compile: function(element, attrs){
			if(!attrs.isExpanded) attrs.isExpanded = true; 
		}, 
		transclude: true, 
		controller: "juciPanel"
	};  
}).controller("juciPanel", function($scope){
	
}); 
