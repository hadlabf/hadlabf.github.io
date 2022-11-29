import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Card as CardUI } from "../../components/UI/Common";
import { Text1, Text2, Title4 } from "../../components/UI/Text";
import IconPeople from "@mui/icons-material/Diversity1";
import IconVillage from "@mui/icons-material/HolidayVillage";
import IconBehind from "@mui/icons-material/Handshake";
import styled from "styled-components";

export const GetToKnow = (): JSX.Element => {
  const { t } = useTranslation();
  const iconSize = "60px";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid mb={10} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }}>
        <CardLayout
          icon={<IconPeople sx={{ fontSize: iconSize }} />}
          title={t("pages.home.GTK.card1.title")}
          text={t("pages.home.GTK.card1.text")}
          hoverText={t("pages.home.GTK.card1.hoverText")}
          handleClick={() => {}}
        />
        <CardLayout
          icon={<IconBehind sx={{ fontSize: iconSize }} />}
          title={t("pages.home.GTK.card2.title")}
          text={t("pages.home.GTK.card2.text")}
          hoverText={t("pages.home.GTK.card2.hoverText")}
          handleClick={() => {}}
        />
        <CardLayout
          icon={<IconVillage sx={{ fontSize: iconSize }} />}
          title={t("pages.home.GTK.card3.title")}
          text={t("pages.home.GTK.card3.text")}
          hoverText={t("pages.home.GTK.card3.hoverText")}
          handleClick={() => {}}
        />
      </Grid>
    </Box>
  );
};

type CardLayoutProps = {
  icon: JSX.Element;
  title: string;
  text: string;
  hoverText: string;
  handleClick: () => void;
};
export const CardLayout = ({
  icon,
  title,
  text,
  hoverText,
  handleClick,
}: CardLayoutProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid xs={12} md={4} display="flex">
      <Card>
        <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center">
          <Box display="flex" justifyContent="center" mt={3} mb={6}>
            {icon}
          </Box>
          <Title4 mb={1} weight="bold">
            {title}
          </Title4>
          {/* <Text2 mb={1}>{hoverText}</Text2> */}
          <Text2 mb={3}>{text}</Text2>
          <Box display="flex" justifyContent="center" my={2}>
            <Button fontSize={2} px={8} onClick={handleClick} secondary>
              {t("common.readMore")}
            </Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};
export const Card = styled(CardUI)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;