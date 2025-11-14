type OptionalProps = {
  title?: string;
  subtitle?: string;
};

export const OptionalProps = ({ title, subtitle }: OptionalProps) => {
  return (
    <div>
      <h3>Optional Props</h3>
      <p>{title ?? "No Title Provided"}</p>
      <p>{subtitle ?? "No Subtitle"}</p>
    </div>
  );
};
