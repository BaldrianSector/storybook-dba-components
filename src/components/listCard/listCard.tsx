import { Button } from "../button/button";

type ListCardProps = {
  title: string;
  price: string;
  buttonText: string;
  description: string;
  linkText: string;
};

export const ListCard = ({
  title,
  price,
  buttonText,
  description,
  linkText,
}: ListCardProps) => {
  return (
    <div className="ui">
      <div className="flex">
        <div className="w-[240px] flex-col justify-start items-start gap-1 inline-flex">
          <div className="self-stretch h-[135px] rounded-md flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch grow shrink basis-0 bg-[#ffffff] rounded-md flex-col items-center gap-2.5 flex">
              <div className="self-start ">
                <Button title={buttonText} />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[34px] flex-col justify-start items-start gap-1 pl-4 flex">
          <div className="self-stretch h-[34px] flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-neutral-100 text-[15px] font-bold font-['Proxima Nova'] leading-[15px]">
              {title}
            </div>
            <div className="self-stretch text-[#3269c8] text-[15px] font-bold font-['Proxima Nova'] leading-[15px]">
              {price}
            </div>
          </div>
          <div className="pt-4 w-[235px] h-[57px] flex-col justify-start items-start gap-1 inline-flex">
            <div className="justify-center items-center inline-flex">
              <div className="text-neutral-200 text-xs font-normal font-['Proxima Nova'] leading-3">
                {description}
                <br />
                <br />
                {description}
              </div>
            </div>
          </div>
          <div className="pt-4 text-[#3269c8] text-xs font-normal font-['Proxima Nova'] leading-tight">{linkText}</div>
        </div>
      </div>
    </div>
  );
};
