import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PushPinIcon from "@mui/icons-material/PushPin";
import { useRouter } from "next/router";

import CardComp from "../Common/Card";
import PageSection from "../Common/PageSection";
import PageSectionColumn from "../Common/PageSectionColumn";
import Column from "../Common/Column";
import Row from "../Common/Row";
import Text from "../Common/Text";

const ContactsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <CardComp bg={theme.palette.basic.light}>
          <Row>
            <Column>
              <Text color={theme.palette.brown.main} variant="subtitle" center>
                {t("Contact.Contacts.Title")}
              </Text>
            </Column>

            <Column md={4}>
              <LocalPhoneIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />
              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Call.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Call.Description1")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Call.Description2")}
              </Text>
            </Column>

            <Column md={4}>
              <EmailIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />

              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Email.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Email.Description1")}
              </Text>
            </Column>

            <Column md={4}>
              <PushPinIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />

              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Meeting.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Meeting.Description1")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Meeting.Description2")}
              </Text>
            </Column>
          </Row>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d990.3179125575898!2d108.0515924!3d-6.8580095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2df36570d489%3A0xefb41e8fccb4bef1!2sAjeungan%20M.%20Ita%20Z.M!5e0!3m2!1sen!2sid!4v1706286191264!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          />

          <Text color={theme.palette.brown.main} center>
            {t("Contact.Contacts.Meeting.Description3")}
          </Text>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactsSection;
