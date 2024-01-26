import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Column from "../Common/Column";
import PageSection from "../Common/PageSection";
import Row from "../Common/Row";
import Text from "../Common/Text";
import { Button } from "@mui/material";
import Link from "next/link";

const AcademicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const buttons1 = [
    {
      title: t("Academics.Curriculum.CheckOut"),
      link: "/akademik/kurikulum",
    },
    {
      title: t("Academics.Kosp.CheckOut"),
      link: "/akademik/kosp",
    },
  ];
  const buttons2 = [
    {
      title: t("Academics.Skkd.CheckOut"),
      link: "/akademik/skkd",
    },
    {
      title: t("Academics.Modul.CheckOut"),
      link: "/akademik/modul",
    },
  ];

  return (
    <PageSection py={20}>
      <Row sx={3}>
        <Column>
          <Text color={theme.palette.blue.dark} variant="title">
            {t("Academics.Title")}
          </Text>
        </Column>

        <Column lg={12}>
          <Text doubleHeight justify>
            {t("Academics.StudyLevels.Description")}
          </Text>
        </Column>

        {buttons1.map(({ title, link }, i) => (
          <Column lg={6} key={i}>
            <Link href={link} passHref>
              <button
                style={{
                  backgroundColor: theme.palette.blue.dark,
                  padding: "12px 24px",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <p style={{ fontSize: '15pt', margin: 0 }}>{title}</p>
              </button>
            </Link>
          </Column>
        ))}
        {buttons2.map(({ title, link }, i) => (
          <Column lg={6} key={i}>
            <Link href={link} passHref>
            <button
                style={{
                  backgroundColor: theme.palette.blue.dark,
                  padding: "12px 24px",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <p style={{ fontSize: '15pt', margin: 0 }}>{title}</p>
              </button>
            </Link>
          </Column>
        ))}
      </Row>
    </PageSection>
  );
};

export default AcademicSection;
