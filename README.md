# Cordova Pingpp Plugin



## Using

Install the plugin

    $ cordova plugin install cordova-plugin-pingpp --variable URL_SCHEME=YOUR-URL-SCHEME

or install form github

    $ cordova plugin install https://github.com/TongChia/cordova-plugin-pingpp.git --variable URL_SCHEME=YOUR-URL-SCHEME

javascript

```js
pingpp.createPayment(charge, function(result){
    console.log('suc: '+result)  //"success"
  }, function(result){
    console.log('err: '+result)  //"fail"|"cancel"|"invalid"
});
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
