import Image from "next/image"
import React from "react"
import Section from "components/Section"
import AboutUsImg from "public/images/AboutUs.png"

const AboutUs = () => {
  return (
    <Section>
      <Image
        style={{ margin: "auto", display: "flex", mixBlendMode: "lighten" }}
        src={AboutUsImg}
        alt="image"
        width={550}
        height={550}
      />
      <div className="flex flex-col justify-center gap-5 p-8 text-white ">
        <h1 className="text-6xl">
          About<span className="text-bold text-red-900"> Us</span>
        </h1>
        <p className="text-justify">
          Welcome to <span className="text-bold text-red-900">MERTD</span> , where we celebrate the legend himself, Mert
          Mumtaz, Solana&apos;s trusted guardian and the crypto community&apos;s go-to source for humor-infused wisdom.
          <br />
          <br />
          With a wit as sharp as his defenses, Mert stands tall as the defender of Solana&apos;s integrity and the
          relentless foe of misinformation. But MERTD isn&apos;t just a tip of the hat to Mert; it&apos;s a battle cry!
          <br />
          <br />
          It&apos;s a reminder to laugh in the face of FUD, to meme like there&apos;s no tomorrow, and to never, ever
          let Solana get trashed by the haters. So here&apos;s the deal: Get MERTD or get lost. Join us in the fight to
          safeguard Solana&apos;s reputation and stand tall against the forces of FUD.
        </p>
      </div>
    </Section>
  )
}

export default AboutUs
