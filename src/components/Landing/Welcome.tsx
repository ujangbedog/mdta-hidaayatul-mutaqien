import { GridLayoutStyles, SquaresShape } from "@/components/Landing/styles";
import PageSection from "@/src/components/common/PageSection";
import PageSectionColumn from "@/src/components/common/PageSectionColumn";
import Square from "@/src/components/common/Square";
import Text from "@/src/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import React from "react";

const WelcomeSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const theme = useTheme();

  const squares = [
    {
      radiusMobile: ["1.5vw", "1.1.1.0"],
      radiusDesktop: ["0.5vw", "1.1.1.0"],
      bgcolor: theme.palette.orange.main,
      rows: "10 / 12",
      cols: "20 /22",
    },
    {
      radiusMobile: ["3vw", "1.1.1.0"],
      radiusDesktop: ["1.5vw", "1.1.1.0"],
      bgcolor: theme.palette.brown.main,
      rows: "12 / 16",
      cols: "20 / 24",
    },
    {
      radiusMobile: ["2.5vw", "1.1.0.1"],
      radiusDesktop: ["1.2vw", "1.1.0.1"],
      bgcolor: theme.palette.blue.dark,
      rows: "16 / 19",
      cols: "9 / 12",
    },
    {
      radiusMobile: ["6vw", "1.0.1.1"],
      radiusDesktop: ["3vw", "1.0.1.1"],
      bgcolor: theme.palette.orange.main,
      rows: "16 / 24",
      cols: "12 / 20",
    },
    {
      radiusMobile: ["5vw", "0.1.1.1"],
      radiusDesktop: ["2.2vw", "0.1.1.1"],
      bgcolor: theme.palette.blue.dark,
      rows: "16 / 22",
      cols: "20 / 26",
    },
    {
      radiusMobile: ["1.5vw", "0.1.1.1"],
      radiusDesktop: ["0.5vw", "0.1.1.1"],
      bgcolor: theme.palette.brown.main,
      rows: "22 / 24",
      cols: "20 / 22",
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn xs={12} lg={6}>
        <Stack spacing={3} alignItems="center" justifyContent="center">
          <Avatar
            alt="Main Logo"
            src="/images/AIS-Favcion-Logo.png"
            sx={{
              width: { xs: "20vw", md: "12vw" },
              height: { xs: "20vw", md: "12vw" },
            }}
          />

          <Text color={theme.palette.blue.dark} variant="subtitle" center>
            {t("SchoolName")}
          </Text>
        </Stack>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <SquaresShape sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box sx={GridLayoutStyles}>
            <Square
              radius={{
                mobile: ["4vw", "1.1.0.1"],
                desktop: ["2vw", "1.1.0.1"],
              }}
              sx={{
                gridRow: "1 / 16",
                gridColumn: "1 / 20",
              }}
            >
              <Avatar
                variant="square"
                alt="Main Image"
                src={"/images/Photo-9.jpg"}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Square>

            {squares.map((block, i) => (
              <React.Fragment key={i}>
                <Square
                  bgcolor={block.bgcolor}
                  radius={{
                    mobile: block.radiusMobile,
                    desktop: block.radiusDesktop,
                  }}
                  sx={{
                    gridRow: block.rows,
                    gridColumn: block.cols,
                  }}
                />
              </React.Fragment>
            ))}
          </Box>
        </SquaresShape>
      </PageSectionColumn>
    </PageSection>
  );
};

export default WelcomeSection;
