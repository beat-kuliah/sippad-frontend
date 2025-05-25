"use client";

import withAuth from "../components/hocs/withAuth";

const NotFound = () => {
  return (
    <div>
      <h1>404 Yes</h1>
    </div>
  );
};

export default withAuth(NotFound);
