import axios from "axios"
import { useQuery } from "react-query"
import { useLocation } from "react-router-dom"
import { formatCurrencyString } from "use-shopping-cart"
import Spinner from "../components/utils/Spinner"

function useQueryString() {
  return new URLSearchParams(useLocation().search)
}

const Result = () => {
  const queryString = useQueryString()
  const sessionId = queryString.get("session_id")

  const { data, isLoading, isError } = useQuery("Result", () => (sessionId ? axios(`/api/checkout-sessions/${sessionId}`).then(res => res.data) : null))

  if (isLoading) return <Spinner />
  if (!data && !isLoading) return <div className="display-warning">No payment found</div>
  if (isError) return <div className="display-danger">Error in result page</div>

  const total = formatCurrencyString({
    value: data.amount_total,
    currency: data.currency,
    language: navigator.language
  })

  return (
    <div className="container">
      <main role="main" className="inner cover text-center">
        {/* Add image here */}
        <h1 className="cover-heading mt-10">Payment Accepted.</h1>
        <p className="lead">Below is your payment summary.</p>
        <p className="lead">
          <h4 className="">Order Total: {total} </h4>
          <h4 className="">Email:{data.customer_details.email} </h4>
        </p>
      </main>
    </div>
  )
}

export default Result
