import React from "react";
import { NextPage } from "next";
import { AccountLayout } from "../../components/accoutlayout"
import { StatisticsCard, UploadVideoPanelCard, SubscribeCard, CustomizeChannelPanelCard } from "../../components/cards"

const Index: NextPage = (): JSX.Element => {
    return (
        <AccountLayout> 
            <div className="" >
                <h1 className="text-xl text-black font-medium" >Channel Panel</h1>
            </div>
            <div className="flex" >
                <UploadVideoPanelCard />
                <div>
                    <StatisticsCard totalSubscribers={100} totalViews={975787} />
                </div>
                <div>
                    <SubscribeCard type="subscriptions" />
                    <SubscribeCard type="subscribers" />
                </div>
                <div>
                    <CustomizeChannelPanelCard />
                </div>
            </div>
        </AccountLayout>
    )
}

export default Index;
