import React from "react";
import ResourceInfo from "../ResourceInfo";
import { render, screen } from "@testing-library/react";
describe("ResourceInfo", () => {
  const basis = "basis-1/5";
  const src = "../assets/images/stone_icon.png";
  const alt = "stone";
  const num = 5;
  it("Resource Info content", () => {
    render(<ResourceInfo basis={basis} img={src} alt={alt} num={num} />);

    // src 경로 확인
    const resourceItemImg = screen.getByAltText(alt);
    expect(resourceItemImg).toHaveAttribute("src", src);

    // alt 속성 확인
    expect(resourceItemImg).toHaveAttribute("alt", alt);

    // num 확인
    expect(screen.getByText(num.toString())).toBeInTheDocument();
  });
});
