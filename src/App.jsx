import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import data from './assets/data.json';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { getItem, saveItem } from './helpers/localStorage';
import { documentActions } from './redux/document-slice';
import Editor from './components/editor/Editor';

const App = () => {
  const dispatch = useDispatch();
  const isPreview = useSelector((state) => state.docs.isPreview);

  useEffect(() => {
    const localData = getItem("docs");
    if (localData) dispatch(documentActions.loadDocuments(localData));
    else {
      dispatch(documentActions.loadDocuments(data));
      saveItem("docs", data);
    }
  }, []);
  return (
    <div
      className={`grid wrapper ${
        isPreview ? "preview-open" : "preview-closed"
      } transition-all`}
    >
      <Sidebar />
      <div>
        <Header />
        <main>
          <Editor />
        </main>
      </div>
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
}

export default App