import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";

import { TypeSchemaLogin } from "./types";
import { SchemaLogin } from "./schema";

export const useLogin = () => {
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<TypeSchemaLogin>({
    resolver: yupResolver(SchemaLogin),
  });

  const handleSignIn = async (data: TypeSchemaLogin) => {};

  return {
    handleSignIn,
    loadingState,
    handleSubmit,
    control,
    Controller,
  };
};
