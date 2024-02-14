import Image from 'next/image'
import React from 'react'
import { Button } from 'components/Button/Button'
import Section from 'components/Section'
import GetMerted from 'public/images/get-merted.png'
import IconBirdEye from 'public/images/birdeye.png'
import IconRaydium from 'public/images/Raydium.png'



const HowToBuy = () => {
  return (
    <Section>
          <Image
        style={{ margin: "auto", display: "flex", mixBlendMode: "hard-light" }}
        src={GetMerted}
        alt="image"
        width={550}
        height={550}
      />
      <div className="flex flex-col justify-center gap-5 p-8 text-white ">
        <h1 className="text-6xl">
          How to buy<span className="text-bold text-red-900"> $MERTD</span>
        </h1>
        <p className="text-justify">
            To buy $MERTD, get phantom wallet. Purchase $SOL and send it to your phantom wallet.
            <br />
            <br />
            Then, connect your phantom wallet to Raydium/Birdeye and swap your $SOL for $MERTD.
        </p>
        <div className="flex gap-5">
        <Button href="" className="w-[fit-content] h-10 bg-transparent shadow-lg hover:shadow-red-600/100"> Raydium
        <Image
        src={IconRaydium}
        alt='icon'
        width={40}
        height={40}
        style={{ mixBlendMode: "lighten", marginLeft: "10px"}}
        />
        </Button>
        <Button href="" className="w-[fit-content] h-10 bg-transparent shadow-lg hover:shadow-red-600/100"> Birdeye
        <Image
        src={IconBirdEye}
        alt='icon'
        width={40}
        height={40}
        style={{ mixBlendMode: "lighten", marginLeft: "10px"}}
        />
        </Button>
        </div>

      </div>

    </Section>
  )
}

export default HowToBuy