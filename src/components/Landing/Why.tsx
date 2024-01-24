import CardComp from "@/src/components/Common/Card";
import Column from "@/src/components/Common/Column";
import PageSection from "@/src/components/Common/PageSection";
import Row from "@/src/components/Common/Row";
import Text from "@/src/components/Common/Text";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";

const AboutSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const cards = [
    {
      src: "/images/Islamic.png",
      alt: "islamic-icon",
      text: t("About.WhyAIS.Islamic.Title"),
    },
    {
      src: "/images/Cambridge.png",
      alt: "cambridge-icon",
      text: t("About.WhyAIS.Cambridge.Title"),
    },
    {
      src: "/images/Cheap.png",
      alt: "cheap-zone-icon",
      text: t("About.WhyAIS.Reasonable.Title"),
    },
  ];

  return (
    <PageSection py={20} bgcolor="">
      <Row sx={3}>
        <Column>
          <Text color={theme.palette.orange.main} variant="title">
            {t("About.Title")}
          </Text>

          <Text doubleHeight justify>
            {t("About.Description")}
          </Text>
        </Column>

        {cards.map((item, i) => (
          <Column sm={6} lg={4} key={i}>
            <CardComp bg={theme.palette.orange.main}>
              <Avatar
                variant="square"
                alt={item.alt}
                src={item.src}
                sx={{
                  width: "50%",
                  height: "auto",
                  margin: "auto auto",
                }}
              />

              <Text
                variant="cardtitle"
                center
                color={theme.palette.basic.light}
                mt={4}
                bold
              >
                {item.text}
              </Text>
            </CardComp>
          </Column>
        ))}
      </Row>
    </PageSection>
  );
};

export default AboutSection;
