export const Step1 = ({
  step,
  totalSteps,
  handleOnClickSteps,
  handleOnChange,
}) => {
  return (
    <div>
      <div className="mt-7 text-[#334155] text-sm font-semibold">
        <p>
          First name <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            type="text"
            className="border border-[#0CA5E9] p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal"
            placeholder="placeholder"
            onChange={handleOnChange}
          ></input>
        </div>
      </div>

      <div className="mt-3 text-[#334155] text-sm font-semibold">
        <p>
          Last name <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            className="border border-[#0CA5E9] p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal"
            placeholder="placeholder"
            onChange={handleOnChange}
          ></input>
        </div>
      </div>

      <div className="mt-3 text-[#334155] text-sm font-semibold">
        <p>
          Surname <span className="text-[#E14942] text-lg">*</span>
        </p>
        <div className="w-[416px] h-[45px] mt-2">
          <input
            className="border border-[#0CA5E9] p-3 w-[416px] h-[45px] rounded-lg text-lg text-[#121316] font-normal"
            placeholder="placeholder"
            onChange={handleOnChange}
          ></input>
        </div>

        <button
          className="w-[416px] h-[44px] mt-25 bg-[#202124] border rounded-md text-[#FFFFFF] text-base font-medium leading-[24px]"
          onClick={handleOnClickSteps}
        >
          Continue <span>{step}/</span> <span>{totalSteps}</span>
        </button>
      </div>
    </div>
  );
};
