import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";

// test suite

describe("Hero component", () => {


  test("renders the Hero component correctly", () => {
  render(<Hero />);
  const heroimage = screen.getByAltText("Hero Image");
  expect(heroimage).toBeInTheDocument();
  expect(heroimage).toHaveAttribute("src", "media/images/homeHero.png");
});



  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", {
      name: "Sign up for free",
    });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn btn-primary fs-5 mb-5 mt-4");
  });



});