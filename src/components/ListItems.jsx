import { useContext } from "react";
import { ContextProvider } from "../store/contextaapi";




const ListItems = () =>{

     const {items,deleteItem}= useContext(ContextProvider);
return (
<div className="">
   {items.map((item,index) =>(
    <div key={index} className="">
        <ul className="flex ml-[60px] p-[20px]">
        <li className="  mr-[30px]  rounded-[0.7rem] w-[30%]">{item.item}</li>
        <li  className="   mr-[45px] rounded-[0.7rem] w-[30%]" >{item.date}</li>
        <button  className="border-[1px]  p-[8px] rounded-[0.7rem] bg-red-400 w-[108px]"
         onClick={() => deleteItem(index)}>delete</button>
    </ul>
    
    </div>))}
</div>)
}
export default ListItems;