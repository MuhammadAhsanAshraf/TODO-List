

import { useContext, useState } from "react";
import { ContextProvider } from "../store/contextaapi";
import ListItems from "./ListItems";

const InputField = () => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    const { addNewItems } = useContext(ContextProvider);

    return (
        <div>
            <div className="flex justify-center gap-4 mt-4">
                <input
                    type="text"
                    value={text}
                    className="border-[1px] h-[40px] p-[10px] rounded w-[30%]"
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Enter your text here"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className="border-[1px] h-[40px] p-[10px] rounded w-[30%]"
                />
                <button
                    className="border-[1px] h-[40px] p-[8px] rounded bg-red-400 w-[15%]"
                    onClick={() => {
                        addNewItems(text, date);
                        setText("");
                        setDate("");
                    }}
                >
                    Add
                </button>
            </div>
            <ListItems />
        </div>
    );
};

export default InputField;
