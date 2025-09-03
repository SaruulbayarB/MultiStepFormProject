"use client";
import { useState } from "react";

import { Step1, Step2, Step3 } from "@/components";

export default function Home() {
  // Detect input elements

  const [inputValue, setInputValue] = useState("");

  // Step 1: User profile information
  const [userInfo, setUSerInfo] = useState({
    firstName: "",
    lastName: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });

  // Step 3: Error messages to display

  const [errors, setErrors] = useState("");

  // "Continue 1/3" Button - step shift function

  const [step, setStep] = useState(3);
  const totalSteps = 4;

  const moveSteps = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleOnClick = () => {
    // validate();
    moveSteps();
  };

  const handleOnClickBackSteps = () => {
    setStep(step - 1);
  };

  if (step == 1) {
    return (
      <div
        className="w-[480px] h-[655px] bg-[#FFF] p-8 flex flex-col items-start ml-180 mt-45
      rounded-lg"
      >
        <img src="/pinecone.svg" className="width-15 height-15"></img>
        <h3 className="text-[#202124] text-2xl font-semibold tracking-[-o.78px] mt-2">
          Join Us!
        </h3>
        <p className="text-[#8E8E8E] text-lg">
          Please provide all current information accurately.
        </p>

        <Step1
          userInfo={userInfo}
          step={step}
          totalSteps={totalSteps}
          handleOnChange={setUSerInfo}
          handleOnClick={handleOnClick}
          errors={errors}
          setErrors={setErrors}
          moveSteps={moveSteps}
        />
      </div>
    );
  }

  if (step == 2) {
    return (
      <div
        className="w-[480px] h-[655px] bg-[#FFF] p-8 flex flex-col items-start ml-180 mt-45
      rounded-lg"
      >
        <img src="/pinecone.svg" className="width-15 height-15"></img>
        <h3 className="text-[#202124] text-2xl font-semibold tracking-[-o.78px] mt-2">
          Join Us!
        </h3>
        <p className="text-[#8E8E8E] text-lg">
          Please provide all current information accurately.
        </p>

        <Step2
          userInfo={userInfo}
          step={step}
          totalSteps={totalSteps}
          handleOnChange={setUSerInfo}
          handleOnClick={handleOnClick}
          errors={errors}
          handleOnClickBackSteps={handleOnClickBackSteps}
          setErrors={setErrors}
          moveSteps={moveSteps}
        />
      </div>
    );
  }

  if (step == 3) {
    return (
      <div
        className="w-[480px] h-[655px] bg-[#FFF] p-8 flex flex-col items-start ml-180 mt-45
      rounded-lg"
      >
        <img src="/pinecone.svg" className="width-15 height-15"></img>
        <h3 className="text-[#202124] text-2xl font-semibold tracking-[-o.78px] mt-2">
          Join Us!
        </h3>
        <p className="text-[#8E8E8E] text-lg">
          Please provide all current information accurately.
        </p>

        <Step3
          userInfo={userInfo}
          step={step}
          totalSteps={totalSteps}
          handleOnChange={setUSerInfo}
          handleOnClick={handleOnClick}
          errors={errors}
          handleOnClickBackSteps={handleOnClickBackSteps}
          setErrors={setErrors}
          moveSteps={moveSteps}
        />
      </div>
    );
  }

  if (step == 4) {
    return (
      <div
        className="w-[480px] h-[193px] bg-[#FFF] p-8 flex flex-col items-start ml-180 mt-45
      rounded-lg"
      >
        <img src="/pinecone.svg" className="width-15 height-15"></img>
        <div className="flex gap-2">
          <h3 className="text-[#202124] text-2xl font-semibold tracking-[-o.78px] mt-2">
            You're all set
          </h3>
          <img src="/fire.png" className="w-9 h-9"></img>
        </div>

        <p className="text-[#8E8E8E] text-lg">
          We have received your submussion. Thank you!{" "}
        </p>
      </div>
    );
  }
}
