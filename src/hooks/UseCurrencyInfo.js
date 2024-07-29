import { useEffect, useState } from "react";

export function useCurrencyInfo(currency = "inr") {
  const [data,setData] = useState({});
  

  useEffect(() => {
    async function getData() {
      const r = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
      const resp = await r.json();
      setData(resp[currency]);
    }
    getData();
  },[currency]);
  return data;
}