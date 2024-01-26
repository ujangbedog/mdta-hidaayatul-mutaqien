import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../Common/PageSection";
import PageSectionColumn from "../Common/PageSectionColumn";
import CardComp from "../Common/Card";
import Text from "../Common/Text";
import Link from "next/link";

const JobsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const JobDetails = ({ title = "", items = [] }) => (
    <Stack width="100%">
      <Text color={theme.palette.blue.dark} variant="cardtitle">
        {title}
      </Text>

      <Text>
        {items?.map((bullet, i) => (
          <span key={i} style={{ lineHeight: 2 }}>
            {bullet}
            <br />
          </span>
        ))}
      </Text>
    </Stack>
  );

  const JobSection = ({
    item = { title: "", jobDescription: [], qualifications: [], documents: [] },
  }) => (
    <CardComp>
      <Text color={theme.palette.blue.dark} variant="subtitle">
        {item.title}
      </Text>

      <JobDetails
        title={t("Media.Jobs.JobDescription")}
        items={item.jobDescription}
      />

      <JobDetails
        title={t("Media.Jobs.Qualifications")}
        items={item.qualifications}
      />

      <JobDetails title={t("Media.Jobs.Documents")} items={item.documents} />

      <Link target="_blank" href="mailto:Principal@aqsa.edu.my">
        <Button
          size="large"
          sx={{
            fontWeight: "bold",
            width: "50%",
            bgcolor: theme.palette.blue.dark,
            color: theme.palette.basic.light,
            borderRadius: "1vw",
            "&:hover": {
              color: theme.palette.blue.dark,
              bgcolor: theme.palette.basic.light,
            },
          }}
        >
          {t("Media.Jobs.Apply")}
        </Button>
      </Link>
    </CardComp>
  );

  // const jobsList = [
  //   {
  //     title: t("Media.Jobs.Opportunity1.Title"),
  //     jobDescription: [
  //       t("Media.Jobs.Opportunity1.Description.Point1"),
  //       t("Media.Jobs.Opportunity1.Description.Point2"),
  //     ],
  //     qualifications: [
  //       t("Media.Jobs.Opportunity1.Qualifications.Point1"),
  //       t("Media.Jobs.Opportunity1.Qualifications.Point2"),
  //       t("Media.Jobs.Opportunity1.Qualifications.Point3"),
  //       t("Media.Jobs.Opportunity1.Qualifications.Point4"),
  //       t("Media.Jobs.Opportunity1.Qualifications.Point5"),
  //       t("Media.Jobs.Opportunity1.Qualifications.Point6"),
  //       t("Media.Jobs.Opportunity1.Qualifications.Point7"),
  //       t("Media.Jobs.Opportunity1.Qualifications.Point8"),
  //     ],
  //     documents: [
  //       t("Media.Jobs.Opportunity1.Documents.Point1"),
  //       t("Media.Jobs.Opportunity1.Documents.Point2"),
  //       t("Media.Jobs.Opportunity1.Documents.Point3"),
  //       t("Media.Jobs.Opportunity1.Documents.Point4"),
  //       t("Media.Jobs.Opportunity1.Documents.Point5"),
  //     ],
  //   },
  // ];

  return (
    <PageSection bg="">
        <PageSectionColumn md={12}>
          <Text center variant="cardtitle">
            {t("Media.Jobs.NoJobs")}
          </Text>

          <Text center variant="subtitle">
            {t("Media.Jobs.Email")}
          </Text>
        </PageSectionColumn>
    </PageSection>
  );
};

export default JobsSection;
