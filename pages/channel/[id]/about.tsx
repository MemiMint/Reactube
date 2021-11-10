import React from "react";
import { NextPage } from "next";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaReddit
} from "react-icons/fa";
import { Navbar } from "../../../components/navbar";
import { ChannelLayout } from "../../../components/channellayout";
import { SocialLink } from "../../../components/links/"
import { ISocialLinkProps } from "../../../components/links/IProps"

const socialLinks: Array<ISocialLinkProps> = [
  {
    href: "/",
    social: 'Facebook'
  },
  {
    href: "/",
    social: "Instagram"
  },
  {
    href: "/",
    social: "Twitter"
  },
  {
    href: "/",
    social: "Discord"
  },
  {
    href: "/",
    social: 'Reddit'
  }
]

const About: NextPage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <ChannelLayout>
        <div className="mt-4 space-y-4 px-2 text-center">
          <h1 className="text-lg font-medium text-gray-600">Description</h1>
          <p className="text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur minus minima quo, quam delectus quia recusandae laborum soluta ab iure deleniti eius porro id dolores ipsam! Animi quis atque quidem quod, tempore sed dolore dicta amet accusantium natus libero similique perspiciatis ducimus voluptatem fugit laudantium esse. Libero animi doloribus distinctio porro unde delectus eveniet, quos molestiae recusandae ut iure cum minus quia sint doloremque fugit id quibusdam alias modi architecto. Qui recusandae quisquam facilis adipisci quasi accusamus nobis repudiandae!</p>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-lg font-medium text-gray-600">Social Links</h1>
          <div className="mt-8 flex px-4 justify-between md:justify-center md:space-x-4 lg:justify-center lg:space-x-16">
            {
              socialLinks.map((link, index): JSX.Element => {
                return (
                  <SocialLink
                    key={index}
                    href={link.href}
                    social={link.social}
                    text={link.text}
                  />
                )
              })
            }
          </div>
        </div>
      </ChannelLayout>
    </>
  );
};

export default About;
