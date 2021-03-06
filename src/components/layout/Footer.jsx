import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => {
	return (
		<footer>
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.com">Gatsby</a>
		</footer>
	)
}

export default Footer