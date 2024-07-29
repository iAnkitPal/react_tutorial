import { useEffect, useState } from "react";
import { InputBox } from "../containers/InputBox";
import {useCurrencyInfo} from "../hooks/UseCurrencyInfo";

export function CurrencyConvertor() {
  const [options,setOptions] = useState([]);
  const [selectedTo,setSelectedTo] = useState("");
  const [selectedFrom,setSelectedFrom] = useState("");


  const getCurrency = useCurrencyInfo("inr");
  useEffect(() => {
    setOptions(Object.keys(getCurrency));
  },[getCurrency,setOptions])
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" options={options} onCurrencyChange={(e) => console.log(e)}/>
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" options={options} onCurrencyChange={(e) => console.log(e)} />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
