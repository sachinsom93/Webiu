import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'
import {withPrefix} from 'gatsby'
import "./style.sass"

const FeedItem = ({title, publishedDate, author, image, slug}) => {
  return (
    <div className="medium-feed-item-component">
      <img className="image" alt="medium" src={image.includes("cdn-images") ? image : './images/mediumPlaceholder.png'} />
      <div>
        {!title || (<p className="post-title">{title}</p>)}
        {!publishedDate || (
          <p className="post-published-date">
            <b>Published on</b> {moment(publishedDate).format("MMMM Do YYYY, h:mm A")}{' '}
            {moment().diff(moment(publishedDate), "days") <= 7 ? <span className="new-span">NEW</span> : null}
          </p> 
        )}
        {!author || (<p className="post-published-author">@{author}</p>)}
        {!slug || (
          <button className="readmore-btn" onClick={() => window.open(slug, "_blank")}>
            Read More
          </button>
        )}
      </div>
    </div>
  )
}

FeedItem.propTypes = {
  title: PropTypes.string,
  publishedDate: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
}

export default FeedItem