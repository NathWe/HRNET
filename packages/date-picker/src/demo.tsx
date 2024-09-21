import React from "react";
import { createRoot } from "react-dom/client";
import DatePickerComponent from "./lib/DatePicker";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<DatePickerComponent />);
}
