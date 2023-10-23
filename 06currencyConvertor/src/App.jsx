/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [fromValue, setFromValue] = useState(0)
  const [toValue, setToValue] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)


  const swap = () => {
    setFrom(to)
    setTo(from)
    setFromValue(toValue)
    setToValue(fromValue)
  }


  const converter = () => {
    const convertedAmount = fromValue * currencyInfo[to]
    setToValue(convertedAmount)
  }


  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
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
              <InputBox
                label="From"
                amount={fromValue}
                options={options}
                selectCurrency={from}
                onAmountChange={(amount) => setFromValue(amount)}
                onOptionChange={(option) => setFrom(option)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={toValue}
                options={options}
                selectCurrency={to}
                onAmountChange={(amount) => setToValue(amount)}
                onOptionChange={(option) => setTo(option)}
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={converter}
            >
              Convert 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
