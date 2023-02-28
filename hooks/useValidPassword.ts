import { useEffect, useState } from "react";

export function useValidPassword(password: string) {
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const passwordRegex = /^(?=.[a-zA-Z])(?=.*\d)(?=.*\W).{8,16}$/;

  useEffect(() => {
    setIsValidPassword(passwordRegex.test(password));
  }, [password]);

  return {
    isValidPassword: isValidPassword,
  };
}
