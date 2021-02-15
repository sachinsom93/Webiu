import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import {Container, Row, Col} from 'react-bootstrap'

export const GuideLines = ({ heading, description, guidelines}) => {
  return (
    <div className="guide-lines-component" style={{ backgroundImage: 'url(./images/dots.png)' }}>
      <Container>
        <Row>
          <Col> 
            {!heading || (<h1>{heading}</h1>)}
            {!description || (<h2>{description}</h2>)}
            <ol>
              {!guidelines || guidelines.map((guideline, i) => (
                <li key={`${guideline}-${i}`}>{guideline}</li>
              ))}
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

GuideLines.propTypes = {
  heading: PropTypes.string, 
  description: PropTypes.string,
  guidelines: PropTypes.array
}