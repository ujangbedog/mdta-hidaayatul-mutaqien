import { latestNews } from "@/components/Community/NewsSection";
import PageSection from "@/src/components/common/PageSection";
import PageSectionColumn from "@/src/components/common/PageSectionColumn";
import Text from "@/src/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";

export default function NewsDetails() {
  const router = useRouter();
  const { t } = useTranslation(router);

  const post = latestNews.find(
    ({ title }) => t(title).replaceAll(" ", "_") === router?.query?.post
  );

  return (
    <PageSection>
      <PageSectionColumn>
        <Text center>
          <img src={post?.src} width="50%" />
        </Text>
      </PageSectionColumn>

      <PageSectionColumn>
        <Text variant="subtitle" center>
          {t(post?.title)}
        </Text>

        <Text variant="p">{post?.date}</Text>
      </PageSectionColumn>

      <PageSectionColumn>
        {post?.description.map((par, i) => (
          <Text justify doubleHeight key={i}>
            {t(par)}
          </Text>
        ))}
      </PageSectionColumn>
    </PageSection>
  );
}
