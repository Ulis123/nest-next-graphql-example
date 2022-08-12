import { useMemo } from "react";
import { useRouter } from "next/router";

const useDialogState = (dialogName: string) => {
  const {
    query: { modal },
  } = useRouter();
  const isOpen = useMemo(() => modal === dialogName, [dialogName, modal]);
  return [isOpen];
};

export default useDialogState;
