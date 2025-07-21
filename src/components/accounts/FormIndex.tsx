import { useLocation } from "react-router-dom";
import { UserType } from "./FormConfig";
import DynamicForm from "./DynamicForm";

function InfoPage() {
  const { state } = useLocation< { userType: UserType } >();
  const userType = state?.userType;

  if (!userType) return <p>No user type selected.</p>;

  return <DynamicForm userType={userType} />;
}
