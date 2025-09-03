export const Step1 = ({
  step,
  totalSteps,
  handleOnClick,
  handleOnChange,
  userInfo,
  errors,
  setErrors,
  moveSteps,
}) => {
  function validateAndMove() {
    let hasError = false;

    const newErrors = {};

    if (userInfo.firstName === "") {
      newErrors.firstName = "must enter your first name";
      hasError = true;
    } else {
      newErrors.firstName = "";
    }

    if (userInfo.lastName === "") {
      (newErrors.lastName = "must enter your last name"), (hasError = true);
    } else {
      newErrors.lastName = "";
    }

    if (userInfo.surname === "") {
      newErrors.surname = "must enter your surname";
      hasError = true;
    } else {
      newErrors.lastName = "";
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
          First name <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            value={userInfo.firstName}
            type="text"
            className="border border-[#0CA5E9] p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal"
            placeholder="placeholder"
            onChange={(e) =>
              handleOnChange({
                ...userInfo,
                firstName: e.target.value,
              })
            }
          />
          {errors.firstName && (
            <div className="text-red-600 font-light mt-1 pl-2">
              {errors.firstName}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-[#334155] text-sm font-semibold">
        <p>
          Last name <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            className="border border-[#0CA5E9] p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal"
            placeholder="placeholder"
            onChange={(e) =>
              handleOnChange({
                ...userInfo,
                lastName: e.target.value,
              })
            }
          ></input>
          {errors.lastName && (
            <div className="text-red-600 font-light mt-1 pl-2">
              {errors.lastName}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-[#334155] text-sm font-semibold">
        <p>
          Surname <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            className="border border-[#0CA5E9] p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal"
            placeholder="placeholder"
            onChange={(e) =>
              handleOnChange({
                ...userInfo,
                surname: e.target.value,
              })
            }
          ></input>
          {errors.surname && (
            <div className="text-red-600 font-light mt-1 pl-2">
              {errors.surname}
            </div>
          )}
        </div>

        <button
          className="w-[416px] h-[44px] mt-25 bg-[#202124] border rounded-md text-[#FFFFFF] text-base font-medium leading-[24px]"
          onClick={validateAndMove}
        >
          Continue <span>{step}/</span> <span>{totalSteps}</span>
        </button>
      </div>
    </div>
  );
};
