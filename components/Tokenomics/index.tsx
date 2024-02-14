import Image from "next/image"
import React from "react"
import Section from "components/Section"
import PieChart3D from "public/images/PieChart3D.png"

const Tokenomics = () => {
  return (
    <Section>
      <div className="flex flex-col justify-center gap-5 p-8 text-white ">
        <h1 className="text-6xl text-red-900">
          Tokenomics
        </h1>
        <h2>Symbol: $MERTD</h2>
        <h2>Tax: 0%</h2>
        <h2>Total Supply: 1,000,000</h2>
        <h2>LP: Burned Forever</h2>
        <h2>Token Address: HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4</h2>
        <p>

        </p>
      </div>
      <Image
        style={{ margin: "auto", display: "flex", mixBlendMode: "hard-light" }}
        src={PieChart3D}
        alt="image"
        width={550}
        height={550}
      />
    </Section>
  )
}

export default Tokenomics
