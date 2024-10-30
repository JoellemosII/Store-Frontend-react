import { useState } from "react";

export const usePaginate =(array) =>{

    const [currentPage , setCurrentPage] = useState (1);
    let totalPages = Math.ceil(array.length /10);
    const arrayCortado = array.slice(10*(currentPage -1), (10 *currentPage))
    const netxPage = () =>{
        if(currentPage < totalPages)
        setCurrentPage(currentPage +1);
    };
    const prevPage =() =>{
        if(currentPage >1)
        setCurrentPage ( currentPage -1);
    }
    return {arrayCortado , netxPage, prevPage ,currentPage };
};