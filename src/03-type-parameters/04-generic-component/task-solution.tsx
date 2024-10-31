export type Option = {
  value: string;
  label: string;
};

type SelectProps<TOption extends Option> = {
  options: TOption[];
  selectedOption: TOption | null;
  onChange: (selectedOption: TOption | null) => void;
};

export function Select<TOption extends Option>({
  options,
  selectedOption,
  onChange,
}: SelectProps<TOption>) {
  return (
    <select
      value={selectedOption?.value}
      onChange={(event) => {
        onChange(
          options.find((option) => option.value === event.target.value) ?? null,
        );
      }}
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
