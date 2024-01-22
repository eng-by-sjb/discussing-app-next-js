"use client";

import { Button, type ButtonProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

type Props = {
  text: string;
  loadingText: string;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
};

const FormButton = ({ text, loadingText, color = "default", variant = "flat" }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button color={color} variant={variant} type="submit" isLoading={pending}>
      {pending ? loadingText : text}
    </Button>
  );
};
export default FormButton;
