type RequiredProps = {
  name: string;
  age: number;
};

export const RequiredProps = ({ name, age }: RequiredProps) => {
  return (
    <div>
      <h3>Required Props</h3>
      <p>{name} is {age} years old.</p>
    </div>
  );
};
