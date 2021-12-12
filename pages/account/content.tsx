import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { AccountLayout } from "../../components/accoutlayout";
import { stringShortener } from "../../utils/string-shortener"

const Content: NextPage = (): JSX.Element => {
    return (
        <AccountLayout>
            <div className="w-full h-full bg-white">
               <table className="w-full">
                   <tr className="border-b border-gray-300" >
                       <th>
                           <input style={{width: 20, height: 20}} type="checkbox" />
                       </th>
                       <th>thumbnail</th>
                       <th>title</th>
                       <th>views</th>
                       <th>comments</th>
                       <th>date</th>
                       <th>likes vs dislikes (%perc)</th>
                   </tr>
                </table> 
            </div>
        </AccountLayout>
    )
}

export default Content;