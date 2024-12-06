import { PropsWithChildren } from "react";
import { FormProvider as ReactHookFormProvider, UseFormReturn } from "react-hook-form";

// ==============================================================
interface Props<T> extends PropsWithChildren {
  methods: UseFormReturn<T>;
  onSubmit: VoidFunction;
}
// ==============================================================

export default function FormProvider<T>({ children, methods, onSubmit }: Props<T>) {
  return (
    <ReactHookFormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </ReactHookFormProvider>
  );
}
