import { LuMail, LuKey } from "react-icons/lu";

import { Container, Form, ContentInput, ContentBtnSubmit } from "./styles";
import { Typography } from "../../components/Typography";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLogin } from "./useLogin";

export const LoginPage = () => {
  const { handleSignIn, loadingState, handleSubmit, control, Controller } =
    useLogin();

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Typography variant="h1" align="center">
          LOGIN
        </Typography>

        <ContentInput>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input.Root>
                <Input.Icon icon={<LuMail size={25} />} />
                <Input.Content
                  fullWidth
                  id="email"
                  onChange={onChange}
                  value={value}
                  aria-invalid={error ? "true" : "false"}
                  type="email"
                  sizeInput="medium"
                  placeholder="jhondoe@email.com"
                  errorInput={Boolean(error)}
                  message={error?.message}
                />
              </Input.Root>
            )}
          />
        </ContentInput>

        <ContentInput>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input.Root>
                <Input.Icon icon={<LuKey size={25} />} />
                <Input.Content
                  fullWidth
                  id="password"
                  onChange={onChange}
                  value={value}
                  type="password"
                  sizeInput="medium"
                  placeholder="Senha"
                  errorInput={Boolean(error)}
                  message={error?.message}
                />
              </Input.Root>
            )}
          />
        </ContentInput>

        <ContentBtnSubmit>
          <Button.Root>
            <Button.Content type="submit" loading={loadingState}>
              Login
            </Button.Content>
          </Button.Root>
        </ContentBtnSubmit>
      </Form>
    </Container>
  );
};
