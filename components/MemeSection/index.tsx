import Image from "next/image"
import React, { FC } from "react"
import Merted02 from "public/images/Merted02.png"
import Merted03 from "public/images/Merted03.png"
import Merted04 from "public/images/Merted04.png"
import Merted05 from "public/images/Merted05.png"
import Merted06 from "public/images/Merted06.png"

const MemeSection: FC = () => {
  const imageArray = [Merted02, Merted03, Merted04, Merted05, Merted06]

  return (
    <section className="bg-stone-900 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-3 px-4 py-8 text-left lg:py-16">
        {imageArray.map((image, index) => (
          <Image
            style={{ margin: "auto", display: "flex", mixBlendMode: "lighten" }}
            key={index}
            src={image}
            alt="image"
            width={600}
            height={600}
          />
        ))}
      </div>
    </section>
  )
}

export default MemeSection
