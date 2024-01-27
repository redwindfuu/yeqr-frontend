import { Footer } from "@src/shared/component/footer";
import { UnauthorizedHeader } from "./_component/unauthorized-header";
import React from "react";


type AuthProps = {
  children: React.ReactElement | React.ReactElement[] | string | string[] | null | undefined;
  props ?: any;
}



export const AuthLayout: React.FC<AuthProps> = ({ children }) => {
  return <div className="auth-layout">
    <UnauthorizedHeader/>
    <div className="auth-layout__content">
      {children}
    </div>
    <Footer/>
  </div>;
};


