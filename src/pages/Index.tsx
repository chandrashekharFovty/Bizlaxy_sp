import React from "react";
import ProfilePager from "./ProfilePager";
import Sidebar from "@/components/layout/Sidebar";
import Editprofile from "@/components/profile/EditProfile";

const Index: React.FC = () => {
  const profileDetails = [];

  return (
    <div className="w-screen h-screen flex gap-0 overflow-x-hidden">
      <div className="xl:w-1.5/12 md:overflow-hidden">
        <Sidebar />
      </div>
      <div className="ml-[260px] w-9/12">
        <Editprofile
          fullName="Arav Mehta"
          bio="💼 VC | 🚀 Early-stage AI, SaaS & CleanTech | 🤝 Partner @ CapVision Capital."
          website="www.capvisioncapital.com"
          profileImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true"
          coverImage="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d8baaafd5f56675475acaefa10801eb7315e942c?placeholderIfAbsent=true"
        />
      </div>
    </div>
  );
};

export default Index;
