import PageHeader from "@/src/components/Common/PageHeader";
import CoursesSection from "@/components/Curriculum/CoursesSection";
import IslamicSection from "@/components/Curriculum/IslamicSection";
import LanguagesSection from "@/components/Curriculum/LanguagesSection";
import ModernSection from "@/components/Curriculum/ModernSection";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function Corriculum() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.academic}
        title={t("Academics.Kosp.Title")}
      />
      {/* <CoursesSection />
      <LanguagesSection />
      <IslamicSection />
      <ModernSection /> */}
    </Stack>
  );
}
