import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { insertDocument } from "../../redux/actions";
import { documentActions } from "../../redux/document-slice";

const Body = () => {
  const dispatch = useDispatch();
  const activeDoc = useSelector((state) => state.docs.activeDoc);

  const newDoc = () => {
    dispatch(insertDocument());
  };

  if (!activeDoc)
    return (
      <div className="m-4">
        <button onClick={newDoc} className="primary-btn rounded-md">
          Create new
        </button>
      </div>
    );

  const updateContent = (e) => {
    if (!activeDoc) return;

    dispatch(documentActions.updateMarkdown(e.target.value));
  };

  return (
    <>
      <label className="sr-only" htmlFor="markdownEditor">
        Markdown editor
      </label>
      <textarea
        id="markdownEditor"
        data-testid="markdownArea"
        className="w-full bg-white dark:bg-neutral-100 dark:text-neutral-700 p-4 font-mono text-sm"
        value={activeDoc?.content ? activeDoc.content : ""}
        onChange={updateContent}
      />
    </>
  );
};

export default Body;
