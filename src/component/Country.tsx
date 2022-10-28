interface CountryProps {
  name: string;
}

export const Country = ({ name }: CountryProps) => {
  return <>{name}</>;
};
