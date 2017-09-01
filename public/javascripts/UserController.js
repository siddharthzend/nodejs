app.controller('UserController', ['$scope', '$http', '$rootScope', '$window', '$document', '$stateParams', 'PagerService', function($scope, $http, $rootScope, $window, $document, $stateParams, PagerService) {
	var vm = this;
	$scope.singlevideo = {};
	/* Page slideup variables */
	var top = 0;
	var duration = 2000; //milliseconds
	/* ******************* */
	vm.pager = {};
	vm.setPage = setPage;

	initController();
	console.log($stateParams.id);
	
	function initController() {
		// initialize to page 1
		vm.setPage(1);
	}


	function setPage(page) {
		if($stateParams.id==undefined){
		$document.scrollTop(top, duration).then(function() {
		$http.post('http://localhost:5000/getallvideos',{"msg":"hi"}).then(function(success){
			console.log(success.data.result);
			vm.dummyItems = success.data.result;
			vm.videos = success.data.result;
			if (page < 1 || page > vm.pager.totalPages) {
				return;
			}
			// get pager object from service
			vm.pager = PagerService.GetPager(vm.dummyItems.length, page);

			// get current page of items
			vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
		});
		});
		}
	}
	 
	 
	 
	 
	 if($stateParams.id!=undefined){
		$document.scrollTop(0, 1000).then(function() {
		$http.post('http://localhost:5000/getuniquevideo',{"id":$stateParams.id}).then(function(success){
			console.log(success.data.data[0]);
			$scope.singlevideo = success.data.data[0];
		});
		});
	 }
	 
	 if($stateParams.photoid!=undefined){
		 
		 $http.post('http://localhost:5000/getphotos',{"id":$stateParams.photoid}).then(function(success){
			$scope.photos = success.data.data;
		});
		 
		 
		 
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
	 }
	 
	 
	 
	 
    $window.scrollTo(0,0);
	$scope.videoURL = 'https://www.youtube.com/watch?v=OPmOXJtxxoo';
	
	$http.post('http://localhost:5000/getallvideos',{"msg":"hi"}).then(function(success){
		console.log(success.data.result);
		vm.dummyItems = success.data.result;
		vm.videos = success.data.result;
	},function(error){
		
	});
	
	
    
    
    
	
	$scope.baseurl = "http://localhost:5000/";
	$scope.reg = {};
	$scope.status = false;
	$scope.msg = "this is test call";
	$scope.login = {};
	
	$scope.checklogin = function(){
		$http.post('http://localhost:5000/dowork',{"msg":"hi"}).then(function(success){
			console.log(success);
		},function(error){
			
		});
	}
	$scope.register = function(){
		$http.post('http://localhost:5000/register',{"data":$scope.reg}).then(function(success){
			if(success.data.status == "1"){
				$scope.status = "Your account has been created. Please verify.";
			}
		},function(error){
			
		});
	}
	
	$scope.checklogin = function(){
		alert(JSON.stringify($scope.login));
	}
}]);

