// Clase abstracta
abstract class PaymentMethod {
    public amount : String

  constructor(amount: String) {
    this.amount = amount
  }

  // Método abstracto: las hijas deben implementarlo
  abstract processPayment(): void;

  // Método normal: todas las hijas lo heredan tal cual
  printReceipt(): String {
    let amount = `${String(this.amount)} Gomez Madrid`;
    return amount
  }
}

// Clase concreta
export class CreditCardPayment extends PaymentMethod {
  processPayment(): void {
    console.log(`Procesando pago con tarjeta por $${this.amount}`);
  }
}

// // Uso
// const payment1 = new CreditCardPayment(100);
// export let pay1 = payment1.processPayment(); // Procesando pago con tarjeta por $100
// export let pay2 = payment1.printReceipt();   // Pago realizado por: $100




