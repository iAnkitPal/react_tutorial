import { useEffect } from "react";

export function useCurrencyInfo(currency = "inr") {
  

  useEffect(() => {
    async function getData() {
      const r = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`);
      const resp = await r.json();
      return resp;
    }
    getData().then((success) => {
      return success;
    }).catch((err) => {
      return err;
    })
  })
}