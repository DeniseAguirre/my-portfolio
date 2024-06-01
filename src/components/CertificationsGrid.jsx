import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CardCertification from "./CardCertification";
import { useTranslation } from "react-i18next";

export default function CertificationsGrid() {
  const { t } = useTranslation();
  const cardItems = t("certifications.cards", { returnObjects: true });
  return (
    <div
      id="certifications"
      className=" px-8 md:px-24 py-8 sm:py-16 dark:bg-[#131313]"
    >
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center m-4 lg:pb-8">
        {t("certifications.title")}
      </h1>
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cardItems.map((skill, index) => (
            <Grid xs={12} sm={4} md={6} key={skill.id + index}>
              <CardCertification data={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
