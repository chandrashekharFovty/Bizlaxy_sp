// InfoPage.tsx
import { useLocation } from "react-router-dom";
import { UserType } from "./FormConfig";
import DynamicForm from "./DynamicForm";

function InfoPage() {
  const { state } = useLocation<{ userType: UserType }>();
  const userType = state?.userType;

  if (!userType) {
    return <p>User type not selected. Kindly select a user type to continue the process.</p>;
  }

  return <DynamicForm userType={userType} />;
}

export default InfoPage;
// import { useLocation } from "react-router-dom";
// import { UserType } from "./FormConfig";
// import DynamicForm from "./DynamicForm";

// function InfoPage() {
//   const { state } = useLocation< { userType: UserType } >();
//   const userType = state?.userType;

//   if (!userType) return <p>User type not selected. Kindly select a user type to continue the process.</p>;

//   return <DynamicForm userType={userType} />;
// }

// export default InfoPage;




