import { Button } from '../button/button';

type GridCardProps = {
  title: string;
  price: string;
  buttonText: string;
};

export const GridCard = ({ title, price, buttonText }: GridCardProps) => {
  return (
    <div className="ui">
      <div className="w-[136.23px] h-[173px] flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch h-[135px] rounded-md flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch grow shrink basis-0 bg-[#ffffff] rounded-md flex-col items-center gap-2.5 flex">
            <div className="self-start ">
              <Button title={buttonText} />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[34px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-neutral-100 text-[15px] font-bold font-['Proxima Nova'] leading-[15px]">{title}</div>
          <div className="self-stretch text-[#3269c8] text-[15px] font-bold font-['Proxima Nova'] leading-[15px]">{price}</div>
        </div>
      </div>
    </div>
  );
};