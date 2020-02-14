import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CvIcon = (className, id) => {
  const style = cx(
    'cv-icon',
    className ? className : ''
  )

  return (
    <svg className={ style } aria-hidden='true'>
      <use xlinkHref={ `sprite.svg#${id}` } />
    </svg>
  )
}

CvIcon.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default CvIcon
