import clsx from "clsx"

type AvatarProps = {
    className ?: string;
    
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <div className={clsx(`bg-slate-500 p-1`, props?.className)}>
      avatar
    </div>
  )
}