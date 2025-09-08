import { useEffect, useState } from "react";
import { CreditCardPayment } from "./01";
import { add } from "@amcharts/amcharts5/.internal/core/util/Time";

export const MiComponente = () => {
  const [pay, setPay] = useState("");

  let pruebaScroll = () => {
    let scroll = window.scrollY;

    if (scroll === 100) {
      alert("scroll");
    }
  };

  

  useEffect(() => {
    const payment1 = new CreditCardPayment("carmab");
    console.log(payment1.processPayment()); // Procesando pago con tarjeta por $100
    console.log(payment1.printReceipt()); // Pago realizado por: $100
    let pay2 = payment1.printReceipt();
    setPay(String(pay2));
    addEventListener("scroll", pruebaScroll); 
    
  }, []);

  return (
    <div>
      <span>Mi componente {pay}</span>
      <span>Mi componente {pay}</span>;
    </div>
  );
};
