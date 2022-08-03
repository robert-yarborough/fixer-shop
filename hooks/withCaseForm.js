import {CaseFormContext} from "../components/CaseForm";

export const withCaseForm = () => (
  <CaseFormContext.Consumer>
    {(context) => <Child {...props} {...context} />}
  </CaseFormContext.Consumer>
);