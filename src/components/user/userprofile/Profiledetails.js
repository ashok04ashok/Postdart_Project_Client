import React from 'react'

import { BiMessageSquareEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"
import { IoMdSave } from "react-icons/io"

export default function Profiledetails() {
    return ( 

        <div className="skills_card">
        <span className="skills_card_1"> </span>
        <span className="skills_card_2">hello@rsmarque rsmarque techrsmarquetechrsmarquetechrsm arquetechrsmarquetechrsmarquetechrsmarquetechrsmarquetechtech.com</span>
        <span className="skills_card_3">
             <BiMessageSquareEdit />
            <IoMdSave />
            <AiOutlineDelete />
        </span>
    </div>

     );
}
