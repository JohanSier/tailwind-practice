import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "../assets/images/volver.png";

const BackButton = () => {
  return (
    <Link
        to="/actividades"
        className="z-90 cursor-pointer absolute top-20 left-20 flex items-center gap-2 justify-center w-fit box-border hover:opacity-50"
      >
        <img src={arrow} alt="arrow" className="w-10 h-10" />
        <span
          className="text-3xl font-semibold"
          style={{ fontFamily: "Caveat, sans-serif" }}
        >
          Volver
        </span>
      </Link>
  )
}

export default BackButton
