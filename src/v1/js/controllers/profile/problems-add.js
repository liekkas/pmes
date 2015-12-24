/**
 * Created by liekkas on 15/11/18.
 */
(function (app) {
    'use strict';

    app.controller('ProblemsAddCtrl', ProblemsAddCtrl);

    /* @ngInject */
    function ProblemsAddCtrl($cordovaActionSheet,$cordovaImagePicker,Cache,
                             $cordovaCamera,$cordovaToast,EventBus,$state) {
        //视图模型ViewModel
        var vm = this;
        vm.txt = "";
        vm.type = "请选择";

        vm.isUploadImage = false;
        vm.images = [];

        var options = {
            //title: 'What do you want with this image?',
            buttonLabels: ['从相册选择'],
            addCancelButtonWithLabel: '取消',
            androidEnableCancelButton : true,
            winphoneEnableCancelButton : true,
            addDestructiveButtonWithLabel : '拍照'
        };

        var imagePickerOptions = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };

        var cameraOptions = {
            quality: 80,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 800,
            targetHeight: 800,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true,
            correctOrientation:true
        };

        vm.showSelectValue = function(mySelect) {
            vm.type = mySelect;
        };

        vm.save = function () {
            if(vm.type == "请选择"){
                $cordovaToast.showShortCenter("请选择问题归类!");
                return;
            }

            if(vm.txt == ""){
                $cordovaToast.showShortCenter("请输入问题详情!");
                return;
            }

            $cordovaToast.showShortCenter("问题提交成功,我们会尽快处理!");

            var problem = {
                title: vm.type,
                kind: vm.type,
                desc: vm.txt,
                time: new Date().toLocaleDateString(),
                images: vm.images
            };
            EventBus.emitMsg('problemAdded',problem);
            $state.go('app.problems');
        };


        vm.openSheet = function () {
            $cordovaActionSheet.show(options)
                .then(function(btnIndex) {
                    var index = btnIndex;
                    console.log(index);

                    if(index == 1){
                        takeCamera();
                    }else if(index == 2) {
                        pickImage();
                    }
                });
        };

        function takeCamera(){
            $cordovaCamera.getPicture(cameraOptions).then(function(imageData,path) {
                var src = "data:image/jpeg;base64," + imageData;
                //vm.images.push(src);
                //vm.isUploadImage = true;

                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
                //vm.useCamera = true;
                console.log(imageData);
                console.log(path);
            }, function(err) {
                // error
            });
        }

        function pickImage() {
            $cordovaImagePicker.getPictures(imagePickerOptions)
                .then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                        vm.images.push({src:results[i]});
                    }
                    vm.isUploadImage = results.length > 0;
                }, function(error) {
                    // error getting photos
                });
        }
    }

})(angular.module(APP_NAME));
