/* 
-- Inversion of Control (IoC):
1. Definition: IoC is a design principle where the control of creating and managing dependencies is transferred from the dependent object to an external entity or framework.
2. Purpose: It ensures that the code is loosely coupled, making it more maintainable, testable, and scalable.


-- Dependency Injection (DI):
1. Definition: DI is a specific implementation of IoC where dependencies are provided (injected) to a class by an external entity instead of the class creating them itself.
2. Purpose: It decouples the high-level module (class) from its low-level dependencies, improving flexibility and testability.
*/

class EmailServiceClass {
    sendEmail(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

class NotificationServiceClass {
    private emailService: EmailService;

    constructor() {
        this.emailService = new EmailService();
    }

    sendNotification(message: string): void {
        this.emailService.sendEmail(message);
    }
}

// Usage
const notificationServiceObj = new NotificationService();
notificationService.sendNotification("Hello!");

/* 
Problems Without DI:
1. Tight Coupling: NotificationService is tightly coupled to EmailService. Replacing EmailService with another service (e.g., SMSService) requires modifying NotificationService.
2. Poor Testability: It's hard to mock or substitute the EmailService for testing since it's directly instantiated in NotificationService.
3. Scalability Issues: Adding a new notification type requires modifying NotificationService, violating the Open/Closed Principle.

*/


// Dependency Interface
interface Notification2 {
    send(message: string): void;
}

// Email Service
class EmailService2 implements Notification2 {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

// SMS Service
class SMSService2 implements Notification2 {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

// Notification Service
class NotificationServiceClass1 {
    private notification: Notification2;

    constructor(notification: Notification2) {
        this.notification = notification;
    }

    sendNotification(message: string): void {
        this.notification.send(message);
    }
}

// Usage
const emailService = new EmailService2();
const smsService = new SMSService2();

const emailNotificationObj1 = new NotificationServiceClass1(emailService);
emailNotificationObj1.sendNotification("Hello via Email!");

const smsNotificationObj2 = new NotificationServiceClass1(smsService);
smsNotificationObj2.sendNotification("Hello via SMS!");

