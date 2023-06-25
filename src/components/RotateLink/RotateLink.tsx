import { ReactNode } from "react";

type RotateLinkProps = {
  children: ReactNode;
};

export function RotateLink({ children }: RotateLinkProps) {
  return (
    <a href="#" className="text-[#282728] hover:text-primary hover:rotate-6">
      {children}
    </a>
  );
}
