import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { insertDocument } from "../../redux/actions";

const NewDocumentBtn = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(insertDocument());
    toast.success("New document created");
  };
  return (
    <button
      data-testid="newDocBtn"
      aria-label="New document"
      onClick={onClickHandler}
      className="primary-btn w-full p-3 rounded-md mt-7"
    >
      <span>+ New Document</span>
    </button>
  );
};

export default NewDocumentBtn;
