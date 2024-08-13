import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  documents: null,
  activeDoc: null,
  unsavedData: false,
  isPreview: false,
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    loadDocuments: (state, action) => {
      state.documents = action.payload;
      state.activeDoc = action.payload[0];
    },
    setActiveDocument: (state, action) => {
      state.unsavedData = false;
      const docs = state.documents;
      const newActive = docs?.find((doc) => doc.id === action.payload);
      if (newActive) {
        state.activeDoc = newActive;
        state.isPreview = false;
      }
    },
    updateName: (state, action) => {
      if (!state.activeDoc) return;
      state.unsavedData = true;
      state.activeDoc.name = action.payload.name;
    },
    updateMarkdown: (state, action) => {
      if (!state.activeDoc) return;
      state.unsavedData = true;
      state.activeDoc.content = action.payload;
    },
    insertDocument: (state, action) => {
      state.unsavedData = false;
      state.isPreview = false;
      state.documents?.push(action.payload);
      state.activeDoc = action.payload;
    },
    deleteDocument: (state, action) => {
      if (!state.documents) return;
      const newDocs = action.payload;
      state.documents = newDocs;

      if (state.documents.length > 0) {
        state.activeDoc = state.documents[0];
      } else {
        state.activeDoc = null;
      }
    },
    saveChanges: (state, action) => {
      state.documents = action.payload;
    },
    togglePreview: (state) => {
      state.isPreview = !state.isPreview;
    },
  },
});

// Action creators are generated for each case reducer function
export const documentActions = documentSlice.actions;

export default documentSlice.reducer;
