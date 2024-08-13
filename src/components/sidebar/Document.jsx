import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CopyIcon from '../../assets/icon-document.svg';
import { documentActions } from "../../redux/document-slice";

const Document = ({ createdAt, name, id }) => {
  const dispatch = useDispatch();
  const activeDocId = useSelector((state) => state.docs.activeDoc?.id);

  const setActiveDocument = () => {
    dispatch(documentActions.setActiveDocument(id));
  };

  return (
    <li className="overflow-x-hidden">
      <button
        onClick={setActiveDocument}
        title={name}
        className="group relative flex items-center overflow-x-auto mt-6 "
      >
        <img src={CopyIcon} alt="" />
        <span className="ml-4 block">
          <span className="hidden w-fit text-neutral-600 text-xs leading-none md:block">
            {createdAt}
          </span>
          <span
            className={`${
              activeDocId === id ? "text-primary-100" : "text-white"
            }  group-hover:text-primary-100 block text-left w-min`}
          >
            {name}
          </span>
        </span>
      </button>
    </li>
  );
};

export default Document;
