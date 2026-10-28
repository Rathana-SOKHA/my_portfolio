export default function Button({
  href,
  type = "button",
  className = "",
  children,
  ...props
}) {
  const Element = href ? "a" : "button";
  const elementProps = href ? { href } : { type };

  return (
    <Element {...elementProps} {...props} className={className}>
      {children}
    </Element>
  );
}
