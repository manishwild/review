import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reviews from './data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = reviews[index]

  const CheckNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0
    }
    if (number < 0) {
      return reviews.length - 1
    }
    return number
  }

  function prePerson() {
    setIndex((index) => {
      let newIndex = index - 1
      return CheckNumber(newIndex)
    })
  }

  const nxtPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return CheckNumber(newIndex)
    })
  }

  const rndPerson = () => {
    let randomNum = Math.floor(Math.random() * reviews.length)
    if (randomNum === index) {
      randomNum = index + 1
    }
    setIndex(CheckNumber(randomNum))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prePerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nxtPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={rndPerson}>
        Suprise me
      </button>
    </article>
  )
}

export default Review
