import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@components/ui/input-otp";
import { useRecovery } from "@hooks/useRecovery";
import {
  IConfirmCodeSchema,
  confirmCodeResolver,
} from "@validations/recoveryPassword/confirmCode";
import { ArrowLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { verifyCodeId } from "services/recoveryPassword";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

export const ConfirmCodeForm: React.FC = () => {
  const navigate = useNavigate();
  const { codeId } = useParams<{ codeId: string }>();
  const { isLoading, validateCode } = useRecovery();
  const [isCodeValid, setIsCodeValid] = useState(true);

  const form = useForm<IConfirmCodeSchema>({
    resolver: confirmCodeResolver,
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form;

  const verifyCode = useCallback(async () => {
    const isValid = await verifyCodeId(codeId ?? "");
    setIsCodeValid(isValid);
  }, [codeId]);

  useEffect(() => {
    verifyCode();
  }, [verifyCode]);

  if (!codeId || !isCodeValid) return <Navigate to="/recovery/request" />;

  return (
    <Form {...form}>
      <form
        id="form-signup"
        className="w-full flex flex-col items-start justify-center p-6 border rounded-md space-y-8 lg:w-1/2 bg-background xl:max-w-lg animate-slide-left"
        onSubmit={handleSubmit(() =>
          validateCode(Number(form.getValues().code), codeId)
        )}
      >
        <div>
          <Button
            variant="outline"
            size="icon"
            className="mb-4"
            type="button"
            onClick={() => navigate("/recovery/request")}
          >
            <ArrowLeft />
          </Button>
          <div>
            <span className="text-2xl font-semibold mb-3">
              Confirme o código de verficação
            </span>
            <p className="text-gray-500">
              Caso não tenha recebido o código, por favor, verifique sua caixa
              de entrada de e-mail, incluindo a pasta de spam ou lixo
              eletrônico.
            </p>
          </div>
        </div>
        <div
          id="input-container"
          className="w-full flex flex-col justify-center items-center space-y-2"
        >
          <FormField
            control={control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    autoFocus
                    maxLength={4}
                    render={({ slots }) => (
                      <>
                        <InputOTPGroup className="w-full">
                          {slots.map((slot, index) => (
                            <InputOTPSlot
                              key={index}
                              className="h-14 w-full"
                              {...slot}
                            />
                          ))}
                        </InputOTPGroup>
                      </>
                    )}
                    className="w-full flex items-center justify-center"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <footer className="w-full flex flex-col items-center space-y-2 justify-between">
          <Button
            className="w-full"
            disabled={!isValid}
            loading={isLoading}
            type="submit"
          >
            Continuar
          </Button>
          <Button
            variant="link"
            className="flex items-center font-sans text-sm underline cursor-pointer transition-colors font-medium hover:text-gray-400"
          >
            Reenviar código
          </Button>
        </footer>
      </form>
    </Form>
  );
};
