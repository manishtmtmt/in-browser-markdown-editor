import React from "react";
import Markdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";

import { insertDocument } from "../../redux/actions";

const Body = () => {
  const dispatch = useDispatch();
  const { activeDoc, isPreview } = useSelector((state) => state.docs);

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

  return (
    <Markdown
      className={`overflow-y-auto p-6 bg-white dark:bg-neutral-100 w-full ${
        isPreview ? "md:max-w-screen-sm md:mx-auto" : ""
      } preview-markdown`}
    >
      {activeDoc.content}
    </Markdown>
  );
};

export default Body;
