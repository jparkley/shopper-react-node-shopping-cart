import PropTypes from "prop-types"

const Top = ({ name, category }) => {
  return (
    <>
      <p className="text-center mb-4 display-6">
        <strong>{name}</strong>
      </p>
      <h5 className="text-center mb-5">{category}</h5>
    </>
  )
}

Top.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

Top.defaultProps = {
  title: "Shop Now",
  category: "Modern and upscale shopping destination"
}

export default Top
