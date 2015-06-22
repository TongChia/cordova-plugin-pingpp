package co.airsia.cordova;

import android.content.ComponentName;
import android.content.Intent;
import com.pingplusplus.android.PaymentActivity;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class PingppPlugin extends CordovaPlugin {

    private static final int REQUEST_CODE_PAYMENT = 1;
    private CallbackContext callbackContext;

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

        this.callbackContext = callbackContext;

        if (action.equals("createPayment")) {
            String charge = data.get(0).toString();

            Intent intent = new Intent();
            String packageName = this.cordova.getActivity().getPackageName();
            ComponentName componentName = new ComponentName(packageName, packageName + ".wxapi.WXPayEntryActivity");
            intent.setComponent(componentName);
            intent.putExtra(PaymentActivity.EXTRA_CHARGE, charge);
            this.cordova.startActivityForResult(this, intent, REQUEST_CODE_PAYMENT);

            return true;
        } else {
            return false;
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {

        if (requestCode == REQUEST_CODE_PAYMENT) {
            if (resultCode == android.app.Activity.RESULT_OK) {
                String result = data.getExtras().getString("pay_result");
                //String errorMsg = data.getExtras().getString("error_msg"); // 错误信息
                //String extraMsg = data.getExtras().getString("extra_msg"); // 错误信息

                if(result.equals("success")){
                    callbackContext.success(result);
                }else {
                    callbackContext.error(result);
                }
            } else if (resultCode == android.app.Activity.RESULT_CANCELED) {
                callbackContext.error("cancel");
            }
        }
    }
}
