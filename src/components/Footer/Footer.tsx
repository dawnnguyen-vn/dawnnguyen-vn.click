import { Container } from "@/components/Container";
import { Separate } from "../Separate";
import { SocialBlock } from "../SocialBlock";

export function Footer() {
  return (
    <footer className="mt-12">
      <Container>
        <Separate />
        <div className="py-6 flex justify-between max-md:flex-col-reverse max-md:items-center max-md:gap-4">
          <div className="flex md:gap-4 items-center max-md:flex-col">
            <span>Copyright © 2023</span>
            <span className="w-[1px] h-[10px] bg-black max-md:hidden"></span>
            <span>All rights reserved.</span>
          </div>
          <SocialBlock />
        </div>
      </Container>
    </footer>
  );
}
