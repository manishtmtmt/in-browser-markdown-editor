import React from "react";
import { useSelector } from "react-redux";

import Document from "./Document";

const Documents = () => {
  const documents = useSelector((state) => state.docs.documents);
  return (
    <ul className="max-h-[70vh] overflow-y-auto">
      {documents
        ? documents.map((item) => {
            return (
              <Document
                key={item.id}
                id={item.id}
                createdAt={item.createdAt}
                name={item.name}
              />
            );
          })
        : null}
    </ul>
  );
};

export default Documents;
