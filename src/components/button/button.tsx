type ButtonProps = {
  title: string;
};

export const Button = ({ title }: ButtonProps) => {
  return (
    <div className="ui">
      <div className="w-[95.08px] h-6 justify-center items-center inline-flex">
        <div className="w-[95.08px] h-6 px-1.5 py-[3px] bg-[#3269c8] rounded-tl-md rounded-br-md flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="justify-start items-center gap-1 inline-flex">
            <img
              className="w-[17.04px] h-[17.04px] bg-white"
            />
            <div className="w-[63px] text-neutral-100 text-xs font-normal font-['Proxima Nova'] leading-[17px]">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
