import { GridCard } from "../gridCard/gridCard";

type Item = {
    title: string;
    price: string;
    buttonText: string;
};

type GridMoleculeProps = {
    title: string;
    items: Item[];
    description: string;
    tags: string[];
};

export const GridMolecule = ({ title, items, description, tags }: GridMoleculeProps) => {
    return (
        <div className="ui">
            <div className="h-[280px] flex-col justify-start items-start gap-[21px] inline-flex">
                <div className="self-stretch h-[213px] flex-col justify-start items-start flex">
                    <div className="self-stretch h-[213px] flex-col justify-start items-start flex">
                        <div className="self-stretch text-white text-xl font-bold font-['Proxima Nova'] leading-10">
                            {title}
                        </div>
                        <div className="flex gap-[14px]">
                            {items.map((item, index) => (
                                <GridCard
                                    key={index}
                                    title={item.title}
                                    price={item.price}
                                    buttonText={item.buttonText}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[46px] flex-col justify-start items-start gap-3.5 flex">
                <div className="self-stretch text-neutral-200 text-xs font-normal font-['Proxima Nova'] leading-3">
                    {description}
                </div>
                <div className="self-stretch text-[#3269c8] text-xs font-normal font-['Proxima Nova'] leading-tight">
                    {tags.join(", ")}
                </div>
            </div>
        </div>
    );
};
