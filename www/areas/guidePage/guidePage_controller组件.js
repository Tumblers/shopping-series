// guidePage页面业务逻辑
// 页面功能：引导页功能          创建日期：2020.23.23
// 创建者：张三                 修改日期：2020.3.46
angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl',function ($scope,$state, $ionicPopover,$ionicPopup,$ionicModal,$ionicSlideBoxDelegate,$ionicActionSheet) {

    // 浮动框方法集合
    $ionicPopover.fromTemplateUrl("popover.html", {
        scope: $scope
      })
      .then(function(popover){
        $scope.popover = popover;
      })

    $scope.openPopover = function($event) {
      $scope.popover.show();
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    //销毁事件回调处理：清理popover对象
    $scope.$on("$destroy", function() {
      $scope.popover.remove();
    });
    // 隐藏事件回调处理
    $scope.$on("popover.hidden", function() {
      // Execute action
    });
    //删除事件回调处理
    $scope.$on("popover.removed", function() {
      // Execute action
    });



    // 一个确认对话框
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Consume Ice Cream',
        template: 'Are you sure you want to eat this ice cream?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };


    // 弹出提醒组件
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Don\'t eat that!',
        template: 'It might taste good'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };



    // actionsheet组件
    $scope.show = function() {
      // 显示操作表
      $ionicActionSheet.show({
        buttons: [
          { text: '拍照' },
          { text: '相册' },
        ],
        //destructiveText: '删除',
        titleText: '选择照片',
        cancelText: '取消',
        buttonClicked: function(index) {
          switch(index){
            case 0: console.log('拍照');break;
            case 1: console.log('相册');break;
          }
          return true;
        }
      });
    };





// 模态窗口方法
    $ionicModal.fromTemplateUrl('modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //当我们用到模型时，清除它！
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // 当隐藏的模型时执行动作
    $scope.$on('modal.hide', function() {
      // 执行动作
    });
    // 当移动模型时执行动作
    $scope.$on('modal.removed', function() {
      // 执行动作
    });














    // 幻灯片定时切换
    setInterval(function(){
      $ionicSlideBoxDelegate.next();
    },2000)


    // 单选按钮的数据
    $scope.radioData=[
      {
        name:"中国",
        value:"CN"
      },
      {
        name:"美国",
        value:"USA"
      },
      {
        name:"英国",
        value:"UK"
      }
    ];

    // 单选按钮绑定的值
    $scope.choice={
      choice:""
    }


  })
