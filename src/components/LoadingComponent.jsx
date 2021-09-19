import React from "react";
import { useIsFetching } from "react-query";
import { BallSpinner } from "react-spinners-kit";

const LoadingComponent = () => {
  const isFetching = useIsFetching();
  return (
    <div className="loadingContainer">{isFetching && <BallSpinner />}</div>
  );
};

export default LoadingComponent;
