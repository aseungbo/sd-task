interface LimitBoxProps {
  limit: number;
  setLimit: any;
}

export default function LimitBox(props: LimitBoxProps): JSX.Element {
  const { limit, setLimit } = props;
  const handleChange = (e: any) => {
    setLimit(e.target.value);
  };

  return (
    <select value={limit} onChange={handleChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  );
}
