import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import SaveIcon from "../../assets/icon-save.svg";
import { saveDocument } from "../../redux/actions";

const DocumentSave = () => {
  const dispatch = useDispatch();
  const activeDoc = useSelector((state) => state.docs.activeDoc);

  const onClickHandler = () => {
    dispatch(saveDocument());
    toast.success("Document saved");
  };

  return (
    <button
      data-testid="saveBtn"
      aria-label="Save changes"
      className="primary-btn p-3 rounded-md"
      onClick={onClickHandler}
      disabled={!activeDoc}
    >
      <img src={SaveIcon} alt="" aria-hidden={true} />
      <span className="hidden md:inline-block">Save Changes</span>
    </button>
  );
};

export default DocumentSave;
