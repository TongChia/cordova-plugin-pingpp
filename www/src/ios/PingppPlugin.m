#import "PingppPlugin.h"
#import "Pingpp.h"

@implementation PingppPlugin

- (void)createPayment:(CDVInvokedUrlCommand*)command
{

    NSString* data = [[command arguments] objectAtIndex:0];
    NSString* URLScheme = nil;
    self.myCallbackId = command.callbackId;

    NSArray* URLTypes = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleURLTypes"];
    if (URLTypes != nil) {
        NSDictionary* dict = [URLTypes objectAtIndex:0];
        if (dict != nil) {
            NSArray* URLSchemes = [dict objectForKey:@"CFBundleURLSchemes"];
            if (URLSchemes != nil) {
                URLScheme = [URLSchemes objectAtIndex:0];
            }
        }
    }

    //NSLog(@"%@", data);

    UIViewController * __weak weakSelf = self.viewController;
    dispatch_async(dispatch_get_main_queue(), ^{

        [Pingpp createPayment:data viewController:weakSelf
                appURLScheme: URLScheme
                withCompletion:^(NSString *result, PingppError *error) {
            //渠道为银联、百度钱包、支付宝 但未安装相应APP时，从此返回
            //NSLog(@"completion block: %@", result);
            [self callbackResult:result error:error];

        }];
    });
}

- (void)handleOpenURL:(NSNotification*)notification
{
    NSURL* url = [notification object];

    NSLog(@"handleOpenURL: %@", [url description]);

    if (![url isKindOfClass:[NSURL class]]) {
        return;
    }

    [Pingpp handleOpenURL:url withCompletion:^(NSString* result, PingppError* error) {
        [self callbackResult:result error:error];
    }];
}

- (void) callbackResult:(NSString*)result error:(PingppError*) error
{
    CDVPluginResult* pluginResult = nil;

    if ([result isEqualToString:@"success"]) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"success"];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:result];
        //NSLog(@"PingppError: code=%lu msg=%@", error.code, [error getMsg]); //支付失败
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:self.myCallbackId];
}
@end
