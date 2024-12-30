/* ---------- Single Responsibility ---------------------------
Any module that is set of function or class or source code or package should have reasone to change by only one Actor (stack holder)

## Key Advantages of SRP
1. Improved Maintainability: By isolating responsibilities, changes can be made in one part without affecting others.
2. Easier Testing: Smaller, focused classes/functions are easier to test.
3. Reduced Coupling: Different responsibilities are decoupled, making the system more modular.
4. Enhanced Readability: Each class or function has a clear purpose.

## When SRP Can Cause Issues
1. Over-engineering: If SRP is applied too strictly, you may end up with too many small classes or modules, making the codebase more complex to navigate.
2. Performance Impact: In certain cases, breaking functionality into multiple small units may slightly degrade performance due to increased inter-module communication.

*/

// # Example withoud SRP
class ReportManager {
    generateReport(data) {
        // Generates the report from data
        console.log("Generating report...");
    }

    saveReportToFile(report) {
        // Saves the report to a file
        console.log("Saving report to file...");
    }

    sendReportByEmail(report, email) {
        // Sends the report via email
        console.log(`Sending report to ${email}...`);
    }
}

// Problems:
// - If email-sending logic changes, it will require changes in this class.
// - If file-saving logic changes, this class will also need modifications.
// - Testing each responsibility (generate, save, send) independently is difficult.


// # Example with SRP

// Class for generating reports
class ReportGenerator {
    generateReport(data) {
        console.log("Generating report...");
        return `Report for ${data}`;
    }
}

// Class for saving reports to a file
class ReportSaver {
    saveToFile(report) {
        console.log("Saving report to file...");
    }
}

// Class for sending reports via email
class ReportSender {
    sendByEmail(report, email) {
        console.log(`Sending report to ${email}...`);
    }
}

// Usage
const data = "Sales Data";
const generator = new ReportGenerator();
const saver = new ReportSaver();
const sender = new ReportSender();

const report = generator.generateReport(data);
saver.saveToFile(report);
sender.sendByEmail(report, "example@example.com");

