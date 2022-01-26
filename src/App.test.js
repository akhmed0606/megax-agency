import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router";
import App from "./App";
import { Home, Pricing, Products,Footer } from "./components";

jest.mock("../src/pages/Pricing/Pricing");
jest.mock("../src/pages/Homepage/Home");
jest.mock("../src/pages/Products/Products");
jest.mock("../src/pages/Footer/Footer")

//Homepage
test("Should render ALL meetups page on default route", () => {
  Home.mockImplementation(() => <div>HomePage</div>);

  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("HomePage")).toBeInTheDocument();
});

               //Products
test("Should render Products page on products route", () => {
    Products.mockImplementation(() => <div>Products</div>);
  
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <Products />
      </MemoryRouter>
    );
  
    expect(screen.getByText("Products")).toBeInTheDocument();
  });


               //Pricing
test("Should render Products page on products route", () => {
    Pricing.mockImplementation(() => <div>Services</div>);
  
    render(
      <MemoryRouter initialEntries={["/service"]}>
        <Pricing />
      </MemoryRouter>
    );
  
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

    //Footer
test("Should render Products page on products route", () => {
    Footer.mockImplementation(() => <div>SignUp</div>);
  
    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <Footer />
      </MemoryRouter>
    );
  
    expect(screen.getByText("SignUp")).toBeInTheDocument();
  });
