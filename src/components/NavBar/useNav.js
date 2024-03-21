import React, { useState } from "react";

const useNav = () => {
  const [page, setPage] = React.useState("Home");
  const updatePage = (e) => {
    setPage(e);
  };
  return {
    page,
    updatePage,
  };
};

export default useNav;
