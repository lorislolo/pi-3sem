import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './buttonImage.module.css'
import PropTypes from 'prop-types'

function ButtonImage({ onClick, image, url, className, isSelected }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    if (url) {
      navigate(url)
    }
  }

  return (
    <button
      className={`${styles.buttonImage} ${isSelected ? styles.selected : ''} ${className}`}
      onClick={handleClick}
    >
      <img src={image} alt="" />
    </button>
  )
}

ButtonImage.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  className: PropTypes.string,
  isSelected: PropTypes.bool,
}

export default ButtonImage
