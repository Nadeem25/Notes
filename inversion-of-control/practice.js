var RazorPay = /** @class */ (function () {
    function RazorPay() {
    }
    RazorPay.prototype.sendMoney = function (message) {
        console.log("Money was send by: ".concat(message));
    };
    return RazorPay;
}());
var GooglePay = /** @class */ (function () {
    function GooglePay() {
    }
    GooglePay.prototype.sendMoney = function (message) {
        console.log("Money was send by: ".concat(message));
    };
    return GooglePay;
}());
var PaymentGatewayService = /** @class */ (function () {
    function PaymentGatewayService(paymentGateway) {
        this.paymentGateway = paymentGateway;
    }
    PaymentGatewayService.prototype.sendMoneyService = function (message) {
        this.paymentGateway.sendMoney(message);
    };
    return PaymentGatewayService;
}());
var razorPay = new RazorPay();
var googlePay = new GooglePay();
var razonPayService = new PaymentGatewayService(razorPay);
razonPayService.sendMoneyService('Hello via RazorPay');
var googlePayService = new PaymentGatewayService(razorPay);
googlePayService.sendMoneyService('Hello via RazorPay');
