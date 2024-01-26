import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../Common/PageSection";
import PageSectionColumn from "../Common/PageSectionColumn";
import Text from "../Common/Text";
import FeeCards from "./FeeCards";

const DiscountsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const discountSection = [
    {
      title: t("Media.Discounts.Parent.Title"),
      items: [
        {
          title: t("Media.Discounts.Parent.Details.Title"),
          price: t("Media.Discounts.Parent.Details.Price"),
          description: t("Media.Discounts.Parent.Details.Description"),
        },
      ],
    },
    {
      title: t("Media.Discounts.Siblings.Title"),
      items: [
        {
          title: t("Media.Discounts.Siblings.Sibling1.Title"),
          price: t("Media.Discounts.Siblings.Sibling1.Price"),
          description: t("Media.Discounts.Siblings.Sibling1.Description"),
        },
        {
          title: t("Media.Discounts.Siblings.Sibling2.Title"),
          price: t("Media.Discounts.Siblings.Sibling2.Price"),
          description: t("Media.Discounts.Siblings.Sibling2.Description"),
        },
        {
          title: t("Media.Discounts.Siblings.Sibling3.Title"),
          price: t("Media.Discounts.Siblings.Sibling3.Price"),
          description: t("Media.Discounts.Siblings.Sibling3.Description"),
        },
      ],
    },
    {
      title: t("Media.Discounts.AdvancePayment.Title"),
      items: [
        {
          title: t("Media.Discounts.AdvancePayment.Details.Title"),
          price: t("Media.Discounts.AdvancePayment.Details.Price"),
          description: t("Media.Discounts.AdvancePayment.Details.Description"),
        },
      ],
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn md={6}>
        <Text color={theme.palette.orange.main} variant="title" center>
          {t("Media.Discounts.Title")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Avatar
          src="/images/Char-1-Color.png"
          variant="square"
          sx={{
            width: "30%",
            height: "auto",
            margin: "auto auto",
          }}
        />
      </PageSectionColumn>

      <FeeCards
        templateId="discount section"
        boxes={discountSection}
      />
    </PageSection>
  );
};

export default DiscountsSection;
