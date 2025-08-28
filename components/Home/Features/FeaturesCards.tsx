import React from "react"
import Image from "next/image"

type Props = {
  icon: string
  title: string
  description: string
}

const FeaturesCards = ({ icon, title, description }: Props) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center hover:scale-105 transition">
      <Image src={icon} alt={title} width={60} height={60} className="mx-auto mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </div>
  )
}

export default FeaturesCards
