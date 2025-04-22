interface ButtonProps {
  msg: string;
  cn: string;
  action: () => void;
}

export default function TailButton({ msg, cn, action }: ButtonProps) {
  return (
    <button className={cn} onClick={action}>
      {msg}
    </button>
  );
}
