import React from "react";
import { useDispatch } from "react-redux";

import ShowIcon from "../../assets/icon-show-preview.svg";
import { documentActions } from "../../redux/document-slice";

const Header = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(documentActions.togglePreview());
  };
  return (
    <div className="bg-neutral-900 dark:bg-neutral-200   px-4 py-3 flex justify-between items-center">
      <span className="font-medium text-neutral-600 dark:text-neutral-700 text-sm tracking-widest">
        MARKDOWN
      </span>
      <button className="md:hidden" onClick={onClickHandler}>
        <img src={ShowIcon} alt="" />
      </button>
    </div>
  );
};

export default Header;
