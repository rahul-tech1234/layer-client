import { roleValidation } from "@/lib/api/session";
import React from "react";

const LawyerLayout = async ({ children }) => {
  //  await roleValidation("lawyer");
    return children;
};

export default LawyerLayout;
