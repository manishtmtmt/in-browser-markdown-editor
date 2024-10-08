import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import CopyIcon from "../../assets/icon-document.svg";
import { documentActions } from "../../redux/document-slice";

const DocumentTitle = () => {
  const activeDoc = useSelector((state) => state.docs.activeDoc);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    console.log("activeDoc", activeDoc);
    if (!activeDoc) return;

    dispatch(
      documentActions.updateName({
        id: activeDoc?.id,
        name: e.target.value,
      })
    );
  };

  const copyMarkdown = () => {
    let content = activeDoc?.content;
    if (content) {
      try {
        navigator.clipboard.writeText(content);
        toast("markdown copied");
      } catch (error) {
        toast.error("copy failed");
      }
    } else {
      toast.error("nothing to copy");
    }
  };

  return (
    <div title="test.md" className="relative flex items-center overflow-x-auto">
      <button onClick={copyMarkdown}>
        <img src={CopyIcon} alt="copy markdown" />
      </button>
      <div className="ml-4 ">
        <label
          className="hidden text-neutral-600 text-xs leading-none md:block"
          htmlFor="docName"
        >
          Document Name
        </label>
        <input
          id="docName"
          data-testid="titleInput"
          type="text"
          className={`text-white bg-[transparent] outline-none border-b border-b-[transparent] focus:border-b-neutral-800 caret-primary-100 selection:bg-primary-100`}
          value={activeDoc ? activeDoc.name : ""}
          disabled={activeDoc ? false : true}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default DocumentTitle;
