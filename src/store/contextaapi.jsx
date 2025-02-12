import { createContext, useState } from "react";

export const ContextProvider = createContext();

const ContextProviderComponent = ({ children }) => {
    const [items, setItems] = useState([]);

    const addNewItems = (text, date) => {
        if (text === "" || date === "") return;
        const newItem = { item: text, date: date };
        setItems([...items, newItem]);
    };

    const deleteItem = (index) => {
        const updatedList = items.filter((_, i) => i !== index);
        setItems(updatedList);
    };

    return (
        <ContextProvider.Provider value={{ items, addNewItems, deleteItem, setItems }}>
            {children}
        </ContextProvider.Provider>
    );
};

export default ContextProviderComponent;
