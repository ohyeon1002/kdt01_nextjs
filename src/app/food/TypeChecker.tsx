interface TypeCheckerProps {
  value: string;
  chk: (c: string) => void;
}

export default function TypeChecker({ value, chk }: TypeCheckerProps) {
  return (
    <div className="m-3">
      <input
        type="radio"
        value={value}
        name="choice"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          chk(e.target.value)
        }
        id={value}
        className="mr-1.5"
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}
