import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { deleteDocs } from "../../redux/actions";

const DeletePrompt = ({ isOpen, setIsPromptOpen }) => {
  const dispatch = useDispatch();
  const activeDoc = useSelector((state) => state.docs.activeDoc);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const deleteDocument = () => {
    dispatch(deleteDocs());
    setIsPromptOpen(false);
    toast.success("document deleted");
  };

  return (
    <div
      data-testid="deletePrompt"
      className={`${
        isOpen ? "block" : "hidden"
      } absolute left-0 top-0 bg-transparent dark:bg-lightTransparent w-screen h-screen`}
      onClick={() => setIsPromptOpen(false)}
    >
      <div
        className="w-[343px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-100 rounded-md p-6"
        onClick={stopPropagation}
      >
        <span className="text-neutral-400 dark:text-white font-bold text-xl font-serif">
          Delete this document?
        </span>
        <p className="my-4 text-neutral-600 dark:text-neutral-700 font-serif font-normal text-sm">
          Are you sure you want to delete the ‘{activeDoc?.name}’ document and
          its contents? This action cannot be reversed.
        </p>
        <button
          data-testid="confirmDeletion"
          className="primary-btn rounded-md w-full"
          onClick={deleteDocument}
        >
          <span>Confirm & Delete</span>
        </button>
      </div>
    </div>
  );
};

export default DeletePrompt;
