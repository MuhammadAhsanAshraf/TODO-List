

import Heading from "./Heading";
import InputField from "./InputField";
import ContextProviderComponent from "../store/contextaapi";
import SortingItems from "./sortingItems";

const TodoMain = () => {
    return (
        <ContextProviderComponent>
            <div className="border-[1px] m-[0 auto] text-center w-[50%] h-[675px]">
                <Heading />
                <div className="p-[10px] flex ml-[100px]">
                    <SortingItems />
                    <InputField />
                </div>
                
            </div>
        </ContextProviderComponent>
    );
};

export default TodoMain;
