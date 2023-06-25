import { MenuItem } from "../MenuItem";

type MenuListItem = {
  className: string;
};

export function MenuListItem({ className }: MenuListItem) {
  return (
    <ul className="flex flex-col items-center gap-8 pb-8 pt-4">
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
