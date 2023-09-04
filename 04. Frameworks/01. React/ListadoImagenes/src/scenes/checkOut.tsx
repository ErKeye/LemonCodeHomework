import React from "react";
import { CenterLayout } from "@/layouts";
import { CheckOutListContainer } from "@/pods/checkOutList";

export const CheckOut: React.FC = () => {
  return (
    <CenterLayout>
      <CheckOutListContainer></CheckOutListContainer>
    </CenterLayout>
  );
};
