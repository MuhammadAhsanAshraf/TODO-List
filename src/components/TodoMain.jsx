

import Heading from "./Heading";
import InputField from "./InputField";
import ContextProviderComponent from "../store/contextaapi";

const TodoMain = () => {
    return (
        <ContextProviderComponent>
            <div className="border-[1px] text-center w-[50%] h-[675px]">
                <Heading />
                <div className="p-[10px] ml-[00px]">
                    
                    <InputField />
                </div>
                
            </div>
        </ContextProviderComponent>
    );
};

export default TodoMain;
