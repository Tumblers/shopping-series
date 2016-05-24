// 商品列表页面
angular.module('goodsList.controller', ['goodsList.service'])
  .controller('GoodsListCtrl', function ($scope,$stateParams,GoodsListFty,$ionicLoading,$ionicHistory) {

    console.log($stateParams.typeNumber);

  })
