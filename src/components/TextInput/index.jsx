import "./styles.css";

export const TextInput = ({ actioFn, inputValue }) => {
  return (
    <input
      maxLength={69}
      className="text-input"
      type="search"
      value={inputValue}
      onChange={actioFn}
      placeholder="Digite o título que você procura"
    />
  );
};
