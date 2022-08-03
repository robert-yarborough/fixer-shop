import React, {useState} from 'react';
import {CaseFormContext} from "./CaseForm";

export const CaseFormProvider = ({children}) => (
  <CaseFormContext.Provider value={useState([])}>
    {children}
  </CaseFormContext.Provider>
);