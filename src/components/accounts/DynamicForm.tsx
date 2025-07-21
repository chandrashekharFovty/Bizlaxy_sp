// File: DynamicForm.tsx
import React from "react";
import { FieldHead, formHeadConfig, UserType } from "./FormConfig";
import InfoCrousel from "./InfoCrousel";
import CompanyForm from "./infoForms/CompanyForm";
import CreatorForm from "./infoForms/CreatorForm";
import LearnerForm from "./infoForms/LearnerForm";
import InvestorForm from "./infoForms/InvestorForm";
import StartupIdeaForm from "./infoForms/StartupIdeaForm";
import BusinessOwnerForm from "./infoForms/BusinessOwnerForm";
import StartupForm from "./infoForms/StartupForm";

const InfoBox = [
  {
    title: "Connect & Grow Together",
    descp:
      "Build meaningful social and professional connections, explore, chat, and collaborate with like-minded people.",
  },
  {
    title: "Explore New Opportunities",
    descp: "Find events, groups, and collaborations.",
  },
  {
    title: "Share & Learn",
    descp: "Share insights, ask questions, and grow your knowledge.",
  },
];

type Props = { userType: UserType };

export default function DynamicForm({ userType }: Props) {
  const headings = formHeadConfig[userType] || [];

  const formComponents = {
    company: <CompanyForm />,
    investor: <InvestorForm />,
    startup: <StartupForm />,
    learner: <LearnerForm />,
    startupidea: <StartupIdeaForm />,
    businessowner: <BusinessOwnerForm />,
    creator: <CreatorForm />,
  };

  const SelectedForm = formComponents[userType];

  return (
    <div className="flex max-md:flex-col min-h-screen min-w-screen scrollbar-hide overflow-hidden">
      {/* Left side */}
      <div className="max-w-3xl max-md:hidden w-3/12 max-md:w-screen h-screen max-md:pt-1 pt-[33%] fixed bg-indigo-600 text-white flex overflow-hidden items-center justify-center">
        <InfoCrousel InfoBoxes={InfoBox} />
      </div>

      {/* Right side */}
      <div className="w-9/12 ml-[25%] px-5 max-md:w-screen max-md:h-full max-md:mx-auto bg-white">
        {headings.map((heading: FieldHead, idx: number) => (
          <div
            key={idx}
            className="fixed bg-white w-full h-14 my-4 max-md:my-2 flex flex-col gap-2 z-30"
          >
            <h3 className="text-2xl font-bold max-md:text-[16px]">{heading.formheading}</h3>
            <p className="text-sm max-md:text-xs font-normal text-gray-500">
              {heading.formdescription}
            </p>
          </div>
        ))}
        <div className="w-full overflow-scroll scrollbar-hide mt-20 py-2 flex flex-col gap-5 z-10">
          {SelectedForm}
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { FieldHead, formHeadConfig, UserType } from "./FormConfig";
// import InfoCarousel from "./InfoCrousel";
// import CompanyForm from "./infoForms/CompanyForm";
// import ProfessionalForm from "./infoForms/ProfessionalForm";
// import LearnerForm from "./infoForms/LearnerForm";
// import InvestorForm from "./infoForms/StartupForm";
// import StartupIdeaFrom from "./infoForms/StartupForm";
// import BusinessOwnerForm from "./infoForms/StartupForm";
// import StartupForm from "./infoForms/StartupForm";

// const InfoBox = [
//   {
//     title: "Connect & Grow Together",
//     descp:
//       "Build meaningful social and professional connections, explore, chat, and collaborate with like-minded people.",
//   },
//   {
//     title: "Explore New Opportunities",
//     descp: "Find events, groups, and collaborations.",
//   },
//   {
//     title: "Share & Learn",
//     descp: "Share insights, ask questions, and grow your knowledge.",
//   },
//   // add all 7 entries here...
// ];
// type Props = { userType: UserType };

// export default function DynamicForm({ userType }: Props) {
//   const headings = formHeadConfig[userType] || [];
// const formComponents = {
//   company: <CompanyForm />,
//   investor: <InvestorForm />,
//   startup: <StartupForm />,
//   learner: <LearnerForm />,
//   startupidea: <StartupIdeaFrom />,
//   businessowner: <BusinessOwnerForm />,
//   professional: <ProfessionalForm />,
// };

// const SelectedForm = formComponents[userType];

//   return (
//     <div className="flex min-h-screen min-w-screen overflow-x-hidden">
//       {/* Left side */}
//       <div className="max-w-[500px] w-[420px] h-screen pt-[33%] fixed bg-blue-600 text-white flex overflow-hidden items-center justify-center">
//         <InfoCarousel InfoBoxes={InfoBox} />
//       </div>
//       {/* Right side */}
//       <div className="w-[1012px] max-w-screen bg-white ml-[31%] scrollbar-hide">
//         {headings.map((headings: FieldHead) => (
//           <div className="fixed bg-white w-[96%] h-[58px] flex flex-col gap-[6px] z-20">
//             <h3 className="text-2xl font-bold mt-8">{headings.formheading}</h3>
//             <p className="text-[16px] font-normal text-gray-500">
//               {headings.formdescription}
//             </p>
//           </div>
//         ))}
//         <div className="z-10">
//          {SelectedForm}
//         </div>
//       </div>
//     </div>
//   );
// }
