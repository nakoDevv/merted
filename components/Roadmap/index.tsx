import { CheckIcon } from "@heroicons/react/20/solid"
import React from "react"
import Section from "components/Section"
import Card from "./Card"

const Features = () => {
  const features = [
    {
      title: "Rewards",
      description: "Earn rewards for holding $MERTD",
    },
    {
      title: "Charity",
      description: "A portion of the transaction fees will be donated to charity",
    },
    {
      title: "Deflationary",
      description: "A portion of the transaction fees will be burned",
    },
  ]

  return (
    <Section>
      <div className="mx-auto mt-16 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none lg:flex-col lg:items-center">
        <h1 className="text-5xl text-white mb-12">Features Roadmap</h1>
        <div className="-mt-2 flex gap-10 p-2 lg:mt-0 lg:w-full lg:shrink-0">
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Features
