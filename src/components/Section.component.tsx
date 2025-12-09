// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Section = (props: any) => {
  const { children, className, id } = props;

  return (
    <section id={id} className={`px-7 lg:px-16 mb-8 min-h-fit  ${className}`}>
      {children}
    </section>
  );
};

export default Section;
