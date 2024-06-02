export default function Tab({ children, innerButtons, containerType }) {
  const ContainerType = containerType;
  return (
    <>
      <ContainerType>{innerButtons}</ContainerType>
      {children}
    </>
  );
}
