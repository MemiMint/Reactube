import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router"
import Head from "next/head";
import { useUser } from "../context"
import { Navbar } from "../components/navbar"
import { LayoutVideoList } from "../components/layoutvideolist"
import { IProps } from "../components/videocard/Iprops"

const Results: NextPage = (): JSX.Element => {
  
    const [description, setDescription] = useState<string>("Create Music Group, Inc. (en representación de 804569 Records DK); NirvanaDigitalPublishing, LatinAutor - SonyATV, UNIAO BRASILEIRA DE EDITORAS DE ")

    const user = useUser();
    const router = useRouter();

    if (!user.picture) return <p>loading...</p>

    const fakeData: Array<IProps> = [
      {
        thumbnail:
          "https://i.ytimg.com/an_webp/rfscVS0vtbw/mqdefault_6s_480x270.webp?du=3000&sqp=CNjupowG&rs=AOn4CLAhW51Ttd5Vd9PoGSWQbJmnL4R2og",
        title: "Build the best blog app with react!",
        date: "3 years ago",
        duration: "1:20:32",
        views: "1032",
        channel: {
          picture:
            "https://i.ytimg.com/vi/RoStZSd9CWk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCc6wj1cg2b13bXQWy8zwL6IDj9lg",
          name: "Average channel",
        },
        description
      },
      {
        thumbnail:
          "https://i.ytimg.com/an_webp/7o6m_TwVS9Y/mqdefault_6s.webp?du=3000&sqp=CIrlpowG&rs=AOn4CLAEGTDKw-QVjSWZFXcXsG-k75uCCQ",
        title: "Mi madre se puso a llorar cuando me fui al atletico madrid",
        duration: "8:08",
        views: "553k",
        date: "8 months ago",
        channel: {
          picture:
            "https://yt3.ggpht.com/ytc/AKedOLRlh_qkceyzmadF0Uxyy606XWFIbLMpq1o_FGE-=s68-c-k-c0x00ffffff-no-rj",
    
          name: "Charlando Tranquilamente",
        },
        description
      },
      {
        thumbnail:
          "https://i.ytimg.com/an_webp/4ZTP_QpQkYk/mqdefault_6s.webp?du=3000&sqp=CMTtpowG&rs=AOn4CLCe3OKeB-P2uNjRh2ruk5-6wl8DeA",
        title: "Los objetos mas raros del universo",
        duration: "11:03",
        views: "649k",
        date: "4 months ago",
        channel: {
          picture:
            "https://i.ytimg.com/vi/RLN3EDIg-bA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiN6qZS3AAiv8j30Cm90IWTMAXaQ",
          name: "El robot de platon",
        },
        description
      },
    ];

    return (
        <>
            <Head>
                <title>{router.query.search}</title>
            </Head>
          <Navbar/>
          <LayoutVideoList
              layout="column"
              videos={fakeData}
          />
        </>
    )
}

export default Results;