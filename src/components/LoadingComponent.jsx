import React from "react";
import { BallSpinner } from "react-spinners-kit";
import { useIsFetching } from 'react-query'

const LoadingComponent = () => {
  const isFetching = useIsFetching()
  return (
    <section className="loading-component">
      <BallSpinner />
    </section>
  );
};

export default LoadingComponent;
