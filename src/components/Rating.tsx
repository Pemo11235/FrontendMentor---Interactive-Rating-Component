import React, { useState } from 'react'
import '../App.css'
import { styles } from '../colors'
import IconButton from './IconButton'
import SvgStar from '../assets/iconStar.svg'
import Row from './Row'
import ThankYou from './ThankYou'

interface RatingProps {
  ratingMaxValue?: number
  onSubmit: (rating: number | null) => void
  title: string
  text: string
}

const Rating = ({ ratingMaxValue = 5, onSubmit, title, text }: RatingProps) => {
  const [ratingSelected, setRatingSelected] = React.useState<null | number>(
    null
  )
  const [showThankYou, setShowThankYou] = React.useState<boolean>(false)

  const ratings = Array.from({ length: ratingMaxValue }, (_, i) => i + 1)

  const handleRatingClick = (rating: number) => {
    setRatingSelected(rating)
  }

  const handleRatingSubmit = (rating: number | null) => {
    if(rating === null) {
      return
    }
    onSubmit(rating)
    setShowThankYou(!showThankYou)
  }

  return (
    <div className='ratingContainer' style={styles.ratingContainer}>
      {!showThankYou && (
        <>
          <Row>
            <IconButton style={styles.iconButton}>
              <img src={SvgStar} className='iconStar' />
            </IconButton>
          </Row>
          <Row>
            <h1 className='title'>{title}</h1>
          </Row>
          <Row>
            <p className='paragraph' style={styles.paragraph}>
              {text}
            </p>
          </Row>
          <Row
            style={{ justifyContent: 'space-between', margin: '2em 0 0 0 ' }}>
            {ratings.map((rating) => (
              <IconButton
                key={rating}
                className={`rating ${
                  rating === ratingSelected && 'ratingSelected'
                }`}
                onClick={() => handleRatingClick(rating)}>
                {rating}
              </IconButton>
            ))}
          </Row>
          <Row>
            <button
              className='button'
              onClick={() => handleRatingSubmit(ratingSelected)}>
              Submit
            </button>
          </Row>
        </>
      )}
      {showThankYou && <ThankYou value={ratingSelected} />}
    </div>
  )
}

export default Rating
