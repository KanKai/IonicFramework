angular.module('starter.controllers', [])


// loading message
.constant('$ionicLoadingConfig', {
        template: '<i class="ion-loading-a"></i>  Loading...', // กำหนด template
        noBackdrop: false, // ไม่แสดพื้นหลังทึบ หรือไม่ true ไม่แสดง | false แสดง
        delay: 1000, // กำหนดแสดงหลังจากกี่วินาที ตัวเลข milisecond หาร 1000 เท่ากับ 1 วินาที
        duration: 3000 // กำหนดให้ซ่อนอัตโนมัติในกี่วินาที แบบไม่ต้องเรียก method hide() อีก
    })
    .controller("starterCtrl", function($scope, $ionicLoading, $timeout) {

        $scope.show = function() {
            $ionicLoading.show({
                template: '<i class="ion-loading-a"></i>  My Loading...', // กำหนด template
            });
        }

    })

// pageController
.controller('HomeCtrl', function($scope) {})

.controller('BarcodeCtrl', function($scope) {})

.controller('PeopleCtrl', function($scope) {})

.controller('DetailCtrl', function($scope) {})

.controller('SettingCtrl', function($scope) {})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
});
