import Link from 'next/link';

function NextLink(props) {
  const { children, prefetch = false, ...restProps } = props;

  if (prefetch === true) {
    return <Link {...restProps}>{children}</Link>;
  }

  return (
    <Link prefetch={prefetch} {...restProps}>
      {children}
    </Link>
  );
}

export default NextLink;
