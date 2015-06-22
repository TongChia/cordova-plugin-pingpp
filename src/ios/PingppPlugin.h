#import <Cordova/CDV.h>

@interface PingppPlugin : CDVPlugin

- (void) createPayment:(CDVInvokedUrlCommand*)command;
@property (nonatomic, strong) NSString* myCallbackId;

@end
