interface PaymentGateway {
    sendMoney(message: string): void;
}

class RazorPay implements PaymentGateway {
    sendMoney(message: string): void {
        console.log(`Money was send by: ${message}`);
        
    }
}

class GooglePay implements PaymentGateway {
    sendMoney(message: string): void {
         console.log(`Money was send by: ${message}`);
    }
}

class PaymentGatewayService {
    private paymentGateway: PaymentGateway;

    constructor(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    sendMoneyService(message: string) {
        this.paymentGateway.sendMoney(message)
    }
}

const razorPay = new RazorPay()
const googlePay = new GooglePay()
const razonPayService= new PaymentGatewayService(razorPay)
razonPayService.sendMoneyService('Hello via RazorPay')

const googlePayService = new PaymentGatewayService(razorPay)
googlePayService.sendMoneyService('Hello via GooglePay')