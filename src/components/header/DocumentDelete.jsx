import React, { useState } from "react";
import { useSelector } from "react-redux";

import DeleteIcon from "../../assets/icon-delete.svg";
import DeletePrompt from "./DeletePrompt";

const DocumentDelete = () => {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const activeDoc = useSelector((state) => state.docs.activeDoc);

  const onClickHandler = () => {
    setIsPromptOpen(true);
  };
  return (
    <>
      <DeletePrompt isOpen={isPromptOpen} setIsPromptOpen={setIsPromptOpen} />
      <button
        data-testid="removeBtn"
        className={`ml-auto ${!activeDoc ? "invisible" : ""}`}
        onClick={onClickHandler}
      >
        <img src={DeleteIcon} aria-hidden={true} alt="" />
        <span className="sr-only">delete markdown document</span>
      </button>
    </>
  );
};

export default DocumentDelete;
