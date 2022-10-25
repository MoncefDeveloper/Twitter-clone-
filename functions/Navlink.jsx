import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

function NavLink({ to, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === to : pathname.startsWith(to);
  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={to}>
      <a {...props}>{children}</a>
    </Link>
  );
}
export default NavLink;

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};
