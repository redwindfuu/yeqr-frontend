import clsx from "clsx"

type LogoCompanyProps = {
    className ?: string;
}

export const LogoCompany: React.FC<LogoCompanyProps> = (props) => {
  return (
    <div className={clsx(`bg-red-700` , props?.className)}>
      logo company
    </div>
  )
}