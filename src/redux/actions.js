import { saveItem } from "../helpers/localStorage";
import { documentActions } from "./document-slice";

export const saveDocument = () => {
  return (dispatch, getState) => {
    const state = getState();
    let docs = [];
    let activeDoc = state.docs.activeDoc;

    if (state.docs.documents && activeDoc) {
      docs = state.docs.documents.map((a) => ({ ...a }));

      const docIdx = docs.findIndex((doc) => doc.id === activeDoc?.id);

      docs[docIdx].name = activeDoc.name;
      docs[docIdx].content = activeDoc.content;
      docs[docIdx].createdAt = new Date().toLocaleDateString("en-US");

      dispatch(documentActions.saveChanges(docs));
      saveItem("docs", docs);
    }
  };
};

export const insertDocument = () => {
  return (dispatch, getState) => {
    const state = getState();
    let docs = [];

    if (state.docs.documents) {
      docs = state.docs.documents.map((a) => ({ ...a }));

      const newDoc = {
        id: window.crypto.randomUUID(),
        content: "",
        createdAt: new Date().toLocaleDateString("en-US"),
        name: "Document.md",
      };

      dispatch(documentActions.insertDocument(newDoc));
      docs.push(newDoc);
      saveItem("docs", docs);
    }
  };
};

export const deleteDocs = () => {
  return (dispatch, getState) => {
    const state = getState();
    let docs = [];

    if (state.docs.documents) {
      docs = state.docs.documents.map((a) => ({ ...a }));
      const newDocs = docs.filter((doc) => doc.id !== state.docs.activeDoc?.id);

      dispatch(documentActions.deleteDocument(newDocs));
      saveItem("docs", newDocs);
    }
  };
};
