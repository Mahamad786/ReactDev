import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    type Error = {
        statusText: "",
        message:""
    }
    const error = useRouteError()
    return <>
       <h1>Opps!</h1>
       <h5>Something went wrong, please try again</h5>
       <h6>
        <i>{error.statusText || error.message}</i>
      </h6>
    </>
}