const transactionService = require('./transactionService');

// Wrapper for backward compatibility
class ExpenseService {
    async createExpense(rawData, userId, io) {
        console.warn('Deprecation Warning: ExpenseService.createExpense is deprecated. Use TransactionService.createTransaction instead.');
        return await transactionService.createTransaction(rawData, userId, io);
    }
}

module.exports = new ExpenseService();
