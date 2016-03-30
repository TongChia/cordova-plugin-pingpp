# Cordova Pingpp Plugin

>抱歉没能即时更新, 同样未能测试全部功能, 如发现问题请及时指正, 谢谢~

## Using

>!!!已删除安装插件时设置 URL_SCHEME 的功能, 请自行到 iOS 工程中添加.

#### 仅包含支付宝和微信支付的插件

install form github

```sh
$ cordova plugin add https://github.com/TongChia/cordova-plugin-pingpp.git
```

#### 包含百度钱包/银联支付/ApplePay (Coming soon)

```sh
$ cordova plugin add https://github.com/TongChia/cordova-plugin-pingpp.git#all
```

javascript

```js
pingpp.createPayment(charge, function(result){
    console.log('suc: '+result)  //"success"
  }, function(result){
    console.log('err: '+result)  //"fail"|"cancel"|"invalid"
});
```

with Angular (#ionic)

```js
angular.module('yourApp', [])
  .factory('$pingpp', ['$q', '$window', function ($q, $window) {
    return {
      createPayment: function (charge) {
        return $q(function (resolve, reject) {
          $window.pingpp.createPayment(charge, function () {
            resolve();
          }, function (err) {
            reject(err);
          });
        });
      }
    };
  }]);
```

## More Info

Base on pingpp native sdk

[pingpp-ios](https://github.com/PingPlusPlus/pingpp-ios)

[pingpp-android](https://github.com/PingPlusPlus/pingpp-android)

## ChangeLog
- Download sdk from git
- Remove URL_SCHEME variable
- Change plugin ID to "me.tongchia.cordova.pingpp"

## Issues
[issues](https://github.com/TongChia/cordova-plugin-pingpp/issues)

## To do
- [ ] 包含百度钱包/银联支付/ApplePay的全功能版本
- [ ] 壹收款

## Next
- [ ] 使用 Ping++ Js SDK 支持其他平台

## 如果本插件给您或您的公司带来帮助 请别忘记点击右上角的【Star】

## License

Apache License 2.0
