import React from "react"

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" bg-stone-900 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl px-4 pb-8 text-left lg:pb-16">
        {children}
    </div>
    </section>
  )
}

export default Section
