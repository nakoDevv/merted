import React, { FC } from "react"

type Props = {
  title: string
  description: string
}

const Card: FC<Props> = ({ title, description }) => {
  return (
    <div className="rounded-2xl bg-stone-900 py-10 text-center shadow-lg shadow-emerald-400 lg:flex lg:justify-center lg:py-16">
      <div className="mx-auto px-8">
        <p className="text-5xl font-bold tracking-tight text-red-900">{title}</p>
        <p className="mt-6 text-xs leading-5 text-white">{description}</p>
      </div>
    </div>
  )
}

export default Card
