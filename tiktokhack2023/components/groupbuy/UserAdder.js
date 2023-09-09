import {View, TouchableOpacity, Text} from "react-native";
import {useTailwind} from "tailwind-rn/dist";
import {useState, useEffect} from "react";
import { friendListAtom } from "../../state";
import {useAtom} from "jotai";

const UserAdder = ({userId}) => {
    const tailwind = useTailwind();

    const [users, setUsers] = useAtom(friendListAtom);
    const [counter, setCounter] = useState(0);
    useEffect(()=>{console.log(userId);
    
    const indexOfUser1 = users.findIndex(el=>el.id===userId);
    console.log(`indexOfUser = ${indexOfUser1}`);}
    ,[]);
    
    
    const valueChangeHandler = (str) => () => {

        setCounter(str==="+"?counter+1:counter>0?counter-1:0);
        const indexOfUser = users.findIndex(el=>el.id===userId);
        console.log(`indexOfUser = ${indexOfUser}`);

     
        setUsers(prev=>{
            const newList = [...prev];
            let user = newList[0];
            const offset=str==="+"?1:counter>0?-1:0;
            user = {id: userId, name: user.name, amount:user.amount+offset}
            newList[indexOfUser]=user;
            console.log(users);
            return newList;
        })
    }
    return(
        <View style={tailwind("flex flex-row bg-slate-200 rounded gap-2")}>
            <TouchableOpacity onPress={valueChangeHandler("-")} style={tailwind("rounded-full border-solid border-2 border-slate-300 mr-3 w-5 h-5 flex justify-center items-center")}>
                <Text>-</Text>
            </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity onPress={valueChangeHandler("+")} style={tailwind("rounded-full border-solid border-2 border-slate-300 ml-3 w-5 h-5 flex justify-center items-center")}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserAdder;