import Image from "next/image";
import { LogoCompany } from "../logo-company";
import { Avatar } from "../avatar";


export const Header = () => {
  return <main className="!w-full h-16 !bg-red-900 flex p-1 items-center justify-between">
    {/* logo company */}
    <LogoCompany
      className="w-12 h-12 "
    />
    {/* search */}
    {/* cart */}
    {/* menu */}
    <Avatar
      //flex flex-row-reverse
      className="w-12 h-12 items-end"
    />
  </main>;
}