# Cordova Pingpp Plugin

>未能测试全部功能, 如发现问题请及时指正, 谢谢~

## Using

Install the plugin

```sh
# 暂未上传 cordova 插件库 请先从 github 或 coding 安装
```

or install form github

```sh
$ cordova plugin add https://github.com/TongChia/cordova-plugin-pingpp.git --variable URL_SCHEME=YOUR-URL-SCHEME
```

form coding.net

```sh
$ cordova plugin add https://git.coding.net/tongchia/cordova-plugin-pingpp.git --variable URL_SCHEME=YOUR-URL-SCHEME
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

### Issues
[issues](https://github.com/TongChia/cordova-plugin-pingpp/issues)

#### 如果本插件给您或您的公司带来帮助 请别忘记点击右上角的【Star】

## License

Apache License 2.0
