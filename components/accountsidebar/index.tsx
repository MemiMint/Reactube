import React, { FunctionComponent } from "react";
import { useUser } from "../../context"
import { BsFillGrid1X2Fill, BsFillCaretRightSquareFill, BsDoorClosedFill } from "react-icons/bs";
import { RiPlayList2Fill, RiVideoUploadFill } from "react-icons/ri";
import { MdComment } from "react-icons/md";
import { FaUserEdit, FaUsers } from "react-icons/fa";
import { UserPicture } from "../userpicture"
import { AccountSideBarLink } from "../links"
import { IAccountSidebarLinkProps } from "../links/IProps"

export const AccountSideBar: FunctionComponent = (): JSX.Element => {
    const { picture, username } = useUser();
    
    const links: Array<IAccountSidebarLinkProps> = [
        {
            leftIcon: <BsFillGrid1X2Fill size={20} />,
            href: "/account",
            text: "Panel",
            depth: 1
        },
        {
            leftIcon: <BsFillCaretRightSquareFill size={20} />,
            href: "/account/content",
            text: "Content",
            depth: 1
        },
        {
            leftIcon: <RiVideoUploadFill size={20} />,
            href: "/account/upload",
            text: "Upload a video",
            depth: 1
        },
        {
            leftIcon: <FaUsers size={20} />,
            href: "/account/subscriptions",
            text: "Subscriptions",
            depth: 1
        }, 
        {
            leftIcon: <FaUsers size={20} />,
            href: "/account/subscribers",
            text: "Subscribers",
            depth: 1
        },  
        {
            leftIcon: <RiPlayList2Fill size={20} />,
            href: "/account/playlist",
            text: "Playlist",
            depth: 1
        },
        {
            leftIcon: <MdComment size={20} />,
            href: "/account/comments",
            text: "Comments",
            depth: 1
        },
        {
            leftIcon: <FaUserEdit size={20} />,
            href: "/account/customize",
            text: "Customize Channel",
            depth: 2   
        },
        {
            leftIcon: <BsDoorClosedFill size={20} />,
            href : "/",
            text: "Back to Channel",
            depth: 2
        }
    ]

    const UserInfo = (): JSX.Element => {

        if (!picture) return <p>loading ...</p>

        return (
            <div className="w-full h-auto flex flex-col items-center justify-center space-y-2 p-8">
                <UserPicture
                    picture={picture}
                    width={100}
                    height={100}
                />
                <div className="text-center" >
                    <p className="text-sm font-medium text-gray-700">Your channel</p>
                    <p className="text-sm font-medium text-gray-500" >{username}</p>
                </div>
            </div>
        )
    }

    const PrimaryLinks = (): JSX.Element => {
        const filteredLinks = links.filter((link) => (link.depth as number) === 1);

        return (
            <ul>
                {
                    filteredLinks.map((link, index): JSX.Element => {
                        return (
                            <li>
                                <AccountSideBarLink key={index} href={link.href} leftIcon={link.leftIcon} text={link.text}  />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    const SecondaryLinks = (): JSX.Element => {
        const filteredLinks = links.filter((link) => (link.depth as number) === 2);

        return (
            <ul>
                {
                    filteredLinks.map((link, index): JSX.Element => {
                        return (
                            <li>
                                <AccountSideBarLink key={index} href={link.href} leftIcon={link.leftIcon} text={link.text}  />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <div className="flex flex-col justify-between w-80 h-screen bg-white border-r border-gray-300   ">
            <div>
                <UserInfo />
                <PrimaryLinks/>
            </div>
            <SecondaryLinks/>
        </div>
    )
}