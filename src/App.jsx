import { useState } from "react";
import { Button } from "./components/ui/button";
import { Slider } from "./components/ui/slider";
import { cn } from "@/lib/utils";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <BmiCalculator />
    </div>
  );
}

function BmiCalculator() {
  const [weight, setWeight] = useState([60]);
  const [height, setHeight] = useState([1]);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("Know your BMI!");

  const weightChangeHandler = (newValue) => {
    setWeight(newValue);
  };
  const heightChangeHandler = (newValue) => {
    setHeight(newValue);
  };
  const bmiCalculationHandler = () => {
    const heightInMtr = height * 0.3048;
    const bmi = (weight / (heightInMtr * heightInMtr)).toFixed(1);
    setBmi(bmi);
    setMessage(
      bmi < 18.5
        ? "Fuel up, champ🙃  - (UnderWeight)"
        : bmi < 24.9
        ? "You're crushing it  -  (Normal)"
        : bmi <= 30
        ? "Time to reset  -  (Overweight)"
        : "Start strong today  -  (Obese)"
    );
  };

  return (
    <div className="w-full md:w-[500px] border mx-2 flex flex-col gap-15 p-10 rounded-2xl bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Calculate your BMI
      </h1>
      <div className="flex flex-col gap-8">
        <Slider
          min={40}
          max={200}
          step={1}
          className="cursor-pointer"
          value={weight}
          onValueChange={weightChangeHandler}
        />
        <div className="flex items-center gap-7">
          <p className="text-xl font-medium md:text-2xl">Weight : </p>
          <div className="flex items-center gap-1">
            <p className="text-xl md:text-2xl font-medium px-3 bg-gray-200">
              {weight}
            </p>
            <p className="text-xl md:text-2xl">kg</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xl md:text-2xl font-medium px-3 bg-gray-200">
              {(weight * 2.2).toFixed(1)}
            </p>
            <p className="text-xl md:text-2xl">lbs</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Slider
          defaultValue={[50]}
          max={10}
          step={0.1}
          className="cursor-pointer"
          value={height}
          onValueChange={heightChangeHandler}
        />
        <div className="flex items-center gap-7">
          <p className="text-xl font-medium md:text-2xl">Height : </p>
          <div className="flex items-center gap-1">
            <p className="text-xl md:text-2xl font-medium px-3 bg-gray-200">
              {height}
            </p>
            <p className="text-xl md:text-2xl">ft</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xl md:text-2xl font-medium px-3 bg-gray-200">
              {(height * 0.3048).toFixed(1)}
            </p>
            <p className="text-xl md:text-2xl">mt</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <Button
          className="p-7 text-xl cursor-pointer w-full"
          onClick={bmiCalculationHandler}
        >
          Calculate
        </Button>
        <div className="flex items-center gap-2.5">
          <h3 className="text-xl font-bold">Your BMI : </h3>
          <p className="text-xl">{bmi}</p>
        </div>
        <p className="text-center font-medium">{message}</p>
      </div>
    </div>
  );
}

export default App;
