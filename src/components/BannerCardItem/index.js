// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={`banner-list-container ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCard
