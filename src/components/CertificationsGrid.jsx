import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CardCertification from "./CardCertification";
import certifications from "../data/certifications.json";

export default function CertificationsGrid() {
  return (
    <div id="certifications" className=" px-8 md:px-24 py-8 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center m-4">
        Certifications
      </h1>
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {certifications.map((skill) => (
            <Grid xs={12} sm={4} md={6} key={skill.id}>
              <CardCertification data={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
