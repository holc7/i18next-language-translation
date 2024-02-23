import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");
  return <p>{t("title")}</p>;
}
