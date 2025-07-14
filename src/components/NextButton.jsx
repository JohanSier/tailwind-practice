import React from 'react'
import { Link } from 'react-router-dom'
import next from "../assets/images/Next.svg";

const NextButton = ({page}) => {
  return (
    <Link
        to={page}
        className="z-90 cursor-pointer absolute top-20 right-30 flex items-center gap-2 justify-center w-fit box-border hover:opacity-50"
      >
        <img src={next} alt="arrow" className="w-10 h-10" />
        <span
          className="text-3xl font-semibold"
          style={{ fontFamily: "Caveat, sans-serif" }}
        >
          Siguiente
        </span>
      </Link>
  )
}

export default NextButton
