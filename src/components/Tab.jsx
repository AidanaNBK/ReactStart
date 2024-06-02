export default function Tab({
  children,
  innerButtons,
  containerType = "menu",
}) {
  const ContainerType = containerType;
  return (
    <>
      <ContainerType>{innerButtons}</ContainerType>
      {children}
    </>
  );
}
