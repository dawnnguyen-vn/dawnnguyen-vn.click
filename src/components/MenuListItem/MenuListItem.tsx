import { MenuItem } from "../MenuItem";

type MenuListItem = {
  className: string;
  pathname: string;
};

export function MenuListItem({ className, pathname }: MenuListItem) {
  return (
    <ul className={className}>
      <MenuItem
        className={pathname == "/projects" ? "active" : ""}
        href="/projects"
        lable="Projects"
      />
      <MenuItem
        className={pathname == "/posts" ? "active" : ""}
        href="/posts"
        lable="Posts"
      />
      <MenuItem
        className={pathname == "/contact" ? "active" : ""}
        href="#"
        lable="Contact"
      />
    </ul>
  );
}
