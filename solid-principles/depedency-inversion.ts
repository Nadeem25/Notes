/* 
"Reduce the tight coupling"
"High-level modules should depend on abstractions, not concrete implementations"


In simpler terms:
1. Depend on interfaces or abstractions, not on concrete implementations.
2. This ensures that high-level business logic remains independent of low-level details.
*/


// Example: Violating DIP
// 1. Scenario: Notification System
// We have a notification system where a NotificationService sends notifications via email.

class EmailService {
    sendEmail(message:string) {
        console.log(message);
        
    }
}

class NotificationService {
    private emailService: EmailService;
    constructor() {
        this.emailService = new EmailService()
    }

    sendNotification(message: string) {
        this.emailService.sendEmail(message)
    }
}

const notificationService = new NotificationService()
notificationService.sendNotification(`Email send by Email Service`)


/* 
# Problems with This Code
1. Tight Coupling: NotificationService is tightly coupled to EmailService. 
    Replacing EmailService with another service (e.g., SMS, Push Notifications) requires modifying NotificationService.
*/

// Solution:
// Step 1: Define an Abstraction (Interface)

interface Notifications {
    send(message: string): void;
}

// Step 2: Create Concrete Implementations
class EmailService1 implements Notifications {
    send(message: string): void {
        console.log(`Sending Email: ${message}`);
    }
}

class SMSService implements Notifications {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

class PushNotificationService implements Notifications {
    send(message: string): void {
        console.log(`Sending Push Notification: ${message}`);
    }
}

// Step 3: Use Abstraction in the High-Level Module
class NotificationService1 {
    private notification: Notifications;

    constructor(notification: Notifications) {
        this.notification = notification;
    }

    sendNotification(message: string): void {
        this.notification.send(message);
    }
}

// Step 4: Instantiate with Different Implementations
// Using EmailService
const emailNotification = new NotificationService1(new EmailService1());
emailNotification.sendNotification("Hello via Email!");

// Using SMSService
const smsNotification = new NotificationService1(new SMSService());
smsNotification.sendNotification("Hello via SMS!");

// Using PushNotificationService
const pushNotification = new NotificationService1(new PushNotificationService());
pushNotification.sendNotification("Hello via Push Notification!");




