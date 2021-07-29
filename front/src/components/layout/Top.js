import PropTypes from "prop-types"

const Top = ({ title, subtitle }) => {
  return (
    <>
      <p className="text-center mb-2 display-6">
        <strong>{title}</strong>
      </p>
      <h5 className="text-center mb-5">{subtitle}</h5>
    </>
  )
}

Top.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

Top.defaultProps = {
  title: "Shop Now",
  subtitle: "Modern and upscale shopping destination"
}

export default Top
