// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Section = (props: any) => {
  const { children, className } = props;

  return (
    <section className={`px-7 lg:px-16 mb-8  ${className}`}>{children}</section>
  );
};

export default Section;
