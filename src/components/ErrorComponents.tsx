import { ErrorComponent, ErrorComponentProps } from "@tanstack/react-router";

export function ErrorComponents({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}
