import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ id, children, className = "" }: Props) => {
  return (
    <section id={id} className={`py-4 md:py-10 lg:py-12 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
