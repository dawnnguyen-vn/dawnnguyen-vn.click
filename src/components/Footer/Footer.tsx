import { Container } from "@/components/Container";
import { Separate } from "../Separate";
import { Github } from "../Icons/Github";

export function Footer() {
  return (
    <footer>
      <Container>
        <Separate />
        <div className="py-6">
          <div className="flex gap-4 items-center">
            <span>Copyright © 2023</span>
            <span className="w-[1px] h-[10px] bg-black"></span>
            <span>All rights reserved.</span>
          </div>
          <div>
            <Github />
          </div>
        </div>
      </Container>
    </footer>
  );
}
