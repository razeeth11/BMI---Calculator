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
  return (
    <div className="w-full md:w-[500px] border mx-auto flex flex-col gap-15 p-10 rounded-2xl bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Calculate your BMI
      </h1>
      <div className="flex flex-col gap-8">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="cursor-pointer"
        />
        <div className="flex items-center gap-7">
          <p className="text-xl font-medium md:text-2xl">Weight : </p>
          <div className="flex items-center gap-1">
            <p className="text-xl md:text-2xl font-medium px-3 bg-gray-200">
              78
            </p>
            <p className="text-xl md:text-2xl">kg</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xl md:text-2xl font-medium px-3 bg-gray-200">
              78
            </p>
            <p className="text-xl md:text-2xl">lbs</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="cursor-pointer"
        />
        <div className="flex items-center gap-7">
          <p className="text-xl font-medium md:text-2xl">Height : </p>
          <div className="flex items-center gap-1">
            <p className="text-xl md:text-2xl font-medium px-3 bg-gray-200">
              78
            </p>
            <p className="text-xl md:text-2xl">cm</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xl md:text-2xl font-medium px-3 bg-gray-200">
              78
            </p>
            <p className="text-xl md:text-2xl">in</p>
          </div>
        </div>
      </div>
      <Button className="p-7 text-xl cursor-pointer">Calculate</Button>
      <div>
        <div className="flex items-center gap-2.5">
          <h3 className="text-xl font-bold">Your BMI : </h3>
          <p className="text-xl">28.3</p>
        </div>
        <p className="text-center font-medium mt-8">Start your workout!</p>
      </div>

      {/* <p>Your perfect!</p>
      <p>Lose some fat!</p> */}
    </div>
  );
}

export default App;
