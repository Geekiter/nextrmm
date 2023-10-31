import Link from "next/link";
import { AuthForm } from "~/components/auth-form";
import type { Locale } from "~/i18n-config";
import { getDictionary } from "~/lib/dictionary";
import { AuthFormType } from "~/types/index.d";

type Props = {
  params: { locale: Locale };
};

export default async function LogInPage({ params: { locale } }: Props) {
  const d = await getDictionary(locale);

  return (
    <>
      <div className="container flex h-full w-full flex-col items-center justify-center">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {d.login["welcome-back"]}
              </h1>
              <p className="text-sm text-muted-foreground">
                {d.login["enter-email"]}
              </p>
            </div>
            <AuthForm authFormType={AuthFormType.SignIn} d={d["auth-form"]} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              <Link
                href="/register"
                className="hover:text-brand underline underline-offset-4"
              >
                {d.login["no-account"]}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
