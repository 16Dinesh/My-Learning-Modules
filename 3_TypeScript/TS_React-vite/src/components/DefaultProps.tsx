type DefaultProps = {
  msg?: string;
};

export const DefaultProps = ({ msg = "Default Message" }: DefaultProps) => {
  return <p>{msg}</p>;
};
