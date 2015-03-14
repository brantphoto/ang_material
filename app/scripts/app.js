angular.module('myApp', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria','zumba.angular-waypoints']);

//angular.module('myApp')
  //.config(function($stateProvider){
    //$stateProvider.state('home',
      //{
        //url: 'contacts/{contacts}',
        //template: "Hi There"
      //}
    //);
  //});


angular.module('myApp')
  .controller('appCtrl', ['$scope', '$interval', '$mdDialog',
      function($scope, $interval, $mdDialog){

        vm = this;
        vm.photos = [
                      {lineOne: "SPEEDING TICKETS?",
                      lineTwo: "LET US HELP",
                      url: 'images/cars.jpg'
                      },
                      {lineOne: "SUCCESS RATE",
                      lineTwo: "OF OVER 90%",
                      url: 'images/catalina.jpg'
                      },
                      {lineOne: "OUR EXPERIENCE",
                      lineTwo: "MAKES THE DIFFERENCE",
                      url: 'images/slide1.jpg'
                      },
                      {lineOne: "OUR CLIENTS",
                      lineTwo: "GET RESULTS",
                      url: 'images/slide4.jpg'
                      },
                      {lineOne: "GOOD LAWYERS",
                      lineTwo: "HAVE MORE FUN",
                      url: 'images/horse.jpg'
                      }
        ];


        vm.photosIndex = 0;
        vm.currentIndex = 0;

        vm.submit = function() {
          console.log("hello");
        };

        vm.slides = [
            {quote: 'Test1. He hiadas asd asdf sdf fssdf '},
            {quote: 'Test2'},
            {quote: 'Sample'}
        ];

        vm.isCurrentSlideIndex = function (index) {
          return $scope.currentIndex === index;
        };

        vm.changeSlide = function() {
          if (vm.currentIndex === vm.slides.length - 1) {
            vm.currentIndex = 0;
          } else {
          vm.currentIndex++;
          }
        };

      //vm.mode = 'query';
      //vm.determinateValue = 0;
      //$interval(function() {
        //vm.determinateValue += 1;
        //if (vm.determinateValue > 100) {
         //vm.determinateValue = 0;
        //}
      //}, 10, 0, true);

        // after this line VIDEO POPUP LOGIC

        vm.showAdvanced = function(ev) {
          $mdDialog.show({
            controller: DialogController,
            template: '<md-dialog><iframe width="560" height="315" src="https://www.youtube.com/embed/1AKslgGPwnY?autoplay=1" frameborder="0" allowfullscreen></iframe></md-dialog>',
            targetEvent: ev,
          })
          .then(function(answer) {
            $scope.alert = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.alert = 'You cancelled the dialog.';
          });
        };


     }]);

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}


angular.module('myApp')
  .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    var scope = element.scope(),
                        finishPoint = element.parent().width();

                    if(scope.direction !== 'right') finishPoint = -finishPoint;

                    TweenLite.to(element, 0.5, {left:finishPoint, ease: Ease.easeInOut, onComplete: done});
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    var scope = element.scope(),
                        startPoint = element.parent().width(),
                        tl = new TimelineLite();

                    if(scope.direction === 'right') startPoint = -startPoint;

                    tl.fromTo(element, 0.5, { left: startPoint}, {left:0, ease: Ease.easeInOut, onComplete: done})
                        .fromTo(element.find('.title'), 0.5, { left: 800,  alpha: 0}, {left:0, alpha:1, ease:Ease.easeInOut} )
                        .fromTo(element.find('.subtitle'), 0.5, { left: -200, alpha: 0}, {left:0, alpha:1, ease:Ease.easeInOut} )
                        .fromTo(element.find('.avatar'), 0.5, { left: 800, alpha: 0}, {left:300, alpha:1, ease:Ease.easeInOut} );
                }
                else {
                    done();
                }
            }
        };
    });


     angular.module('myApp')
       .animation('.slide-image-animation', function () {
         return {
          addClass: function(element, className, done) {
            element.css('opacity',1);
            TweenMax.to(element, 1.2, {css:{opacity:0}, onComplete: done});
            //done();
          },
          beforeRemoveClass: function(element, className, done) {
            element.css('opacity', 0);
            TweenMax.to(element, 1.2, {css:{opacity:1}, onComplete: done});
          }
        }
      });

    // angular.module('myApp')
    //   .animation('.slide-image-animation', function () {
    //     return {
    //       beforeAddClass: function (element, className, done) {
    //         if (className == 'ng-hide') {
    //           var scope = element.scope();
    //           element.css('opacity',0);
    //           TweenMax.to(element, 1, {css:{opacity:1}, ease: Ease.easeInOut, onComplete: done});
    //         }
    //         else {
    //           done();
    //         }
    //       },
    //       removeClass: function (element, className, done) {
    //         if (className == 'ng-hide') {
    //           // var scope = element.scope(),
    //           // startPoint = element.parent().width(),
    //           // tl = new TimelineLite();

    //           // console.log(tl);
    //           // //if(scope.direction === 'right') startPoint = -startPoint;
    //           // tl.fromTo(element.find('slide-image'), 3, {alpha:1}, {alpha:0, ease: Ease.easeInOut, onComplete: done});

    //           //tl.fromTo(element, 0.5, { left: startPoint}, {left:0, ease: Ease.easeInOut, onComplete: done})
    //             //.fromTo(element.find('.title'), 0.5, { left: 800,  alpha: 0}, {left:0, alpha:1, ease:Ease.easeInOut} )
    //             //.fromTo(element.find('.subtitle'), 0.5, { left: -200, alpha: 0}, {left:0, alpha:1, ease:Ease.easeInOut} )
    //             //.fromTo(element.find('.avatar'), 0.5, { left: 800, alpha: 0}, {left:300, alpha:1, ease:Ease.easeInOut} );
    //           }
    //           else {
    //               done();
    //           }
    //         }
    //     };
    //   });

  //angular.module('myApp')
    //.directive('pwCheck', function() {

      //return {
        //require: 'ngModel',
        //scope: {
            //otherModelValue: '=pwCheck'
        //},
        //link: function(scope, element, attributes, ctrl) {

          //ctrl.$validators.pwCheck = function(modelValue) {
            //if (ctrl.$isEmpty(modelValue)) {
              //// consider empty models to be valid
              //return true;
            //}
            //return modelValue === scope.otherModelValue;
          //};
        //}
      //};
    //});

//angular.module('myApp')
  //.directive("scroll", function ($window) {
    //return function(scope, element, attrs) {

    //element.$observe(jj
    //};
  //});

