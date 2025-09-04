export const Step2 = ({
  step,
  totalSteps,
  handleOnChange,
  handleOnClickBackSteps,
  errors,
  moveSteps,
  setErrors,
  userInfo,
}) => {
  function validateAndMove() {
    let hasError = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;

    const newErrors = {};

    if (!emailRegex.test(userInfo.email)) {
      newErrors.email = "must enter valid email";
      hasError = true;
    } else {
      newErrors.email = "";
    }

    if (!phoneRegex.test(userInfo.phone)) {
      newErrors.phone = "must enter valid phone number";
      hasError = true;
    } else {
      newErrors.phone = "";
    }

    if (userInfo.password === "") {
      newErrors.password = "must enter your password";
      hasError = true;
    } else {
      newErrors.password = "";
    }

    if (userInfo.confirmPassword === "") {
      newErrors.confirmPassword = "must confirm your password";
      hasError = true;
    } else if (userInfo.password !== userInfo.confirmPassword) {
      newErrors.confirmPassword = "your password does not match";
      hasError = true;
    } else {
      newErrors.confirmPassword = "";
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
          Email <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            type="text"
            className={`border  p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal ${
              errors.email ? "border-red-500" : "border-[#0CA5E9]"
            }`}
            placeholder="placeholder"
            onChange={(e) =>
              handleOnChange({
                ...userInfo,
                email: e.target.value,
              })
            }
          ></input>

          {errors.email && (
            <div className="text-red-600 font-light mt-1 pl-2">
              {errors.email}
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 text-[#334155] text-sm font-semibold">
        <p>
          Phone number <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            className={`border  p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal ${
              errors.phone ? "border-red-500" : "border-[#0CA5E9]"
            }`}
            placeholder="placeholder"
            onChange={(e) =>
              handleOnChange({
                ...userInfo,
                phone: e.target.value,
              })
            }
          ></input>

          {errors.phone && (
            <div className="text-red-600 font-light mt-1 pl-2">
              {errors.phone}
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 text-[#334155] text-sm font-semibold">
        <p>
          Password <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            type="password"
            className={`border  p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal ${
              errors.password ? "border-red-500" : "border-[#0CA5E9]"
            }`}
            placeholder="placeholder"
            onChange={(e) =>
              handleOnChange({
                ...userInfo,
                password: e.target.value,
              })
            }
          ></input>

          {errors.password && (
            <div className="text-red-600 font-light mt-1 pl-2">
              {errors.password}
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 text-[#334155] text-sm font-semibold">
        <p>
          Confirm password <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            type="password"
            className={`border  p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal ${
              errors.confirmPassword ? "border-red-500" : "border-[#0CA5E9]"
            }`}
            placeholder="placeholder"
            onChange={(e) =>
              handleOnChange({
                ...userInfo,
                confirmPassword: e.target.value,
              })
            }
          ></input>
          {errors.confirmPassword && (
            <div className="text-red-600 font-light mt-1 pl-2">
              {errors.confirmPassword}
            </div>
          )}
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
      </div>
    </div>
  );
};
