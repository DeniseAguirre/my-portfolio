import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";

const Img = styled("img")({
  width: 90,
  height: 90,
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "50%",
});

const SmallFontChip = styled(Chip)({
  fontSize: "0.75rem",
  padding: "4px",
});

export default function CardCertification(data) {
  return (
    <Paper
      sx={{
        p: 3,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        borderRadius: "12px",
      }}
      className="dark:bg-[#1F1E24] dark:shadow-md dark:shadow-black"
    >
      <Grid container>
        <Grid item>
          <ButtonBase sx={{ width: 55, height: 55, marginRight: 4 }}>
            <Img alt="complex" src={data?.data.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "light", color: "gray" }}
                className="dark:text-white text-sm"
              >
                {data?.data.title}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="text.secondary"
                className="dark:text-gray-400 text-xs"
              >
                {data?.data.description}
              </Typography>
            </Grid>
            <Grid item>
              <Link
                to={data?.data.href}
                sx={{ cursor: "pointer" }}
                className="text-indigo-600 font-bold flex mb-4 dark:text-green-500"
                target="_blank"
                rel="noreferrer"
              >
                {data?.data.button}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.5 18.31L5.69 15.5l6.37-6.38H7.11V5.69h11.2v11.2h-3.42v-4.95z"
                  />
                </svg>
              </Link>
            </Grid>
            <Grid item>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="left"
                flexWrap={"wrap"}
                useFlexGap={true}
              >
                {data?.data.skills.map((skill) => (
                  <SmallFontChip
                    size="small"
                    label={skill}
                    key={skill}
                    className="dark:text-gray-200 dark:bg-gray-700 dark:shadow-sm dark:shadow-black"
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
