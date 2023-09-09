import {useAtom} from "jotai";
import { totalPriceAtom, friendListAtom } from "../state";
import {useEffect, useState} from "react";

export const calculateTotal = (ls, unitPrice) => {
    let counter = 0;
    ls.forEach(el=>{
        counter+=el.amount*unitPrice;
    })

    return counter;
}