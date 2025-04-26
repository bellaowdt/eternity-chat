import { Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ButtonWithLoading } from "@/components/ButtonWithLoading";
import auth from "@/lib/auth";
import { facebookSigning, getFacebookUrl } from "@/services/iam";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const GoogleLoginButton = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams?.get("code");

  const { data, isFetching } = useQuery({
    queryKey: ["GET_FACEBOOK_URL"],
    queryFn: async () => {
      const { data } = await getFacebookUrl();
      return data.data;
    },
  });

  const router = useRouter();

  const facebook = data?.urls?.find((item) =>
    item.url.toLowerCase().includes(getMainDomain())
  );

  const { mutateAsync, isPending } = useMutation({
    mutationFn: facebookSigning,
  });

  useEffect(() => {
    const init = async () => {
      const { data, status } = await mutateAsync({
        payload: {
          code,
          redirectUrl: facebook?.redirect_url,
        },
      });
      if (status >= 200 && status < 300) {
        auth.login({ access_token: data.data.token });
        router.push("");
      }
    };
    if (!!code && facebook?.redirect_url) {
      init();
    }
  }, [code, facebook?.redirect_url, mutateAsync, router]);

  return (
    <ButtonWithLoading
      fullWidth
      component={"a"}
      href={facebook?.url}
      isLoading={isFetching || isPending}
      variant="outlined"
      color="inherit"
      startIcon={
        <Image alt="" width={25} height={25} src="/assets/images/google.png" />
      }
    >
      <Typography
        variant="body2"
        component="span"
        sx={{
          textAlign: "center",
        }}
      >
        Continue with Google
      </Typography>
    </ButtonWithLoading>
  );
};

export default GoogleLoginButton;
