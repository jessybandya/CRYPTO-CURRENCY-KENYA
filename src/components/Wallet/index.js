import Header from '../Header'
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../ErrorBoundary"
import Banner from "../Banner/Banner";
// import CoinsTable from "../components/CoinsTable";
import LoadingSpinner from "../Spinner/LoadingSpinner";

const CoinsTable = React.lazy(() => import("../CoinsTable"));

function Wallet() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Suspense fallback= {<div className="center"> {LoadingSpinner} </div>}>
        <CoinsTable />
      </Suspense>
    </ErrorBoundary>
      </React.Fragment>
  )
}

export default Wallet