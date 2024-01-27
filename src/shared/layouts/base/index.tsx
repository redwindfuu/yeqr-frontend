import { Footer } from "@src/shared/component/footer";
import { Header } from "./_component/header";


type BaseProps = {
  children: React.ReactNode;
  props ?: any;
}

export const BaseLayout: React.FC<BaseProps> = ({ children }) => {
  return <div className="w-full flex-col flex">
    <Header/>
    {children}
    <Footer/>
  </div>;
}