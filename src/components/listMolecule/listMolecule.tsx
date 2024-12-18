import { ListCard } from "../listCard/listCard";

type Item = {
    title: string;
    price: string;
    buttonText: string;
    description: string; // Add this
    linkText: string;    // Add this
};

type ListMoleculeProps = {
    title: string;
    items: Item[];
    description: string;
    tags: string[];
};

export const ListMolecule = ({ title, items}: ListMoleculeProps) => {
    return (
        <div className="ui">
            <div className="h-[280px] flex-col justify-start items-start gap-[21px] inline-flex">
                <div className="self-stretch h-[213px] flex-col justify-start items-start flex">
                    <div className="self-stretch h-[213px] flex-col justify-start items-start flex">
                        <div className="self-stretch text-white text-xl font-bold font-['Proxima Nova'] leading-10">
                            {title}
                        </div>
                        <div className="flex flex-col gap-4">
                            {items.map((item, index) => (
                                <ListCard
                                    key={index}
                                    title={item.title}
                                    price={item.price}
                                    buttonText={item.buttonText}
                                    description={item.description} // Pass description
                                    linkText={item.linkText}       // Pass linkText
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
