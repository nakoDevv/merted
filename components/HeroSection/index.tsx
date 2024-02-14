import Image from "next/image"
import React, { FC } from "react"
import { Button } from "components/Button/Button"
import Section from "components/Section"
import MertedHeroImg from "public/images/MertedHero.png"
import IconRaydium from "public/images/Raydium.png"

const HeroSection: FC = () => {
  return (
    <Section>
      <div className="mx-auto place-self-center">
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
          Welcome to <br />
          <span className="text-red-700">$MERTD</span>
        </h1>
        <p className="mb-6 max-w-lg font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
          Tribute to the Solana Gatekeeper and truth seeker <a className="text-red-900 hover:text-white" href="https://twitter.com/0xMert_/" target="_blank" rel="noreferrer">@0xMert_</a>
        </p>
        <Button href="" className="bg-transparent shadow-lg hover:shadow-red-600/100"> Raydium
        <Image
        src={IconRaydium}
        alt='icon'
        width={40}
        height={40}
        style={{ mixBlendMode: "lighten", marginLeft: "10px"}}
        />
        </Button>
        <Button
          href="https://t.me/MertedOnSol"
          intent="secondary"
          className="bg-transparent shadow-lg hover:shadow-red-600/100 ml-4 py-4"
        >
          Join Us
        </Button>
      </div>
      <Image src={MertedHeroImg} alt="image" width={600} height={500} style={{ mixBlendMode: "lighten"}}></Image>
    </Section>
  )
}

export default HeroSection
