
export function InputBox({
  label,
  className = "",
  options = [],
  onCurrencyChange,
  value="1",
  selected
}) {
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block">
                  {label?label:"Label"}
              </label>
              <input
                  
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  value={value}
                  readOnly
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  onChange={(e) => onCurrencyChange &&  onCurrencyChange(e.target.value)}
              >
                  {options.map((opts) => (
                      <option key={opts}>
                          {opts}
                      </option>
                  ))}
              
              </select>
          </div>
      </div>
  );
}
