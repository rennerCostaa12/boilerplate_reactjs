import * as yup from "yup";
import { SchemaLogin } from "./schema";

export type TypeSchemaLogin = yup.InferType<typeof SchemaLogin>;
