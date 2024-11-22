import * as yup from "yup";

export const SchemaLogin = yup
  .object({
    email: yup
      .string()
      .email("Email precisa ser válido")
      .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  })
  .required();
