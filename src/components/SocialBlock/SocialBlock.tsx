import { Facebook } from "../Icons/Facebook";
import { Github } from "../Icons/Github";
import { Instagram } from "../Icons/Instagram";
import { Linkedin } from "../Icons/Linkedin";
import { RotateLink } from "../RotateLink";

export function SocialBlock() {
  return (
    <div className="flex items-center gap-2">
      <RotateLink>
        <Github />
      </RotateLink>
      <RotateLink>
        <Facebook />
      </RotateLink>
      <RotateLink>
        <Instagram />
      </RotateLink>
      <RotateLink>
        <Linkedin />
      </RotateLink>
    </div>
  );
}
