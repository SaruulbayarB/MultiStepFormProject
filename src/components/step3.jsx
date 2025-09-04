"use client";
import { useState } from "react";
export const Step3 = ({
  step,
  totalSteps,
  handleOnClick,
  handleOnChange,
  handleOnClickBackSteps,
  userInfo,
  setErrors,
  errors,
  moveSteps,
}) => {
  const [preview, setPreview] = useState();

  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
  }
  function validateAndMove() {
    let hasError = false;

    const newErrors = {};

    if (userInfo.dateOfBirth === "") {
      newErrors.dateOfBirth = "must enter your date of birth";
      hasError = true;
    } else {
      newErrors.dateOfBirth = "";
    }

    if (userInfo.profileImage === "") {
      newErrors.profileImage = "must enter your date of birth";
      hasError = true;
    } else {
      newErrors.profileImage = "";
    }

    setErrors(newErrors);
    if (!hasError) {
      moveSteps();
    }
  }

  return (
    <div>
      <div className="mt-7 text-[#334155] text-sm font-semibold">
        <p>
          Date of Birth <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            type="date"
            className="border border-[#0CA5E9] p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal"
            placeholder="placeholder"
            onChange={handleOnChange}
          ></input>
          {errors.dateOfBirth && (
            <div className="text-red-600 font-light mt-1 pl-2">
              {errors.dateOfBirth}
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 text-[#334155] text-sm font-semibold ">
        <p>
          Profile Image <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className=" w-[416px] h-[180px] bg-[#7F7F800D] mt-2 rounded-lg flex flex-col items-center justify-center relative overflow-x-hidden">
          <img src={preview} className="absolute object-fill"></img>
          <input
            type="file"
            className="absolute inset-0 opacity-0"
            onChange={handleImageChange}
            multiple
          ></input>
          <button className="text-[#09090B] font-semibold">Add Image</button>
        </div>
      </div>

      <div>
        <button
          className="w-[128px] h-[44px] mt-10 bg-[#FFFFFF] border  border-[#CBD5E1] rounded-md text-[#202124] text-base font-medium leading-[24px]"
          onClick={handleOnClickBackSteps}
        >
          Back
        </button>
        <button
          className="w-[280px] h-[44px] mt-10 bg-[#202124] border rounded-md text-[#FFFFFF] text-base font-medium leading-[24px] ml-2"
          onClick={validateAndMove}
        >
          Continue <span>{step}/</span> <span>{totalSteps}</span>
        </button>
        console.log(validateAndMove)
      </div>
    </div>
  );
};
