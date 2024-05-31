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

export default function CardCertification(data) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={data?.data.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontWeight: "light", color: "gray" }}
              >
                {data?.data.title}
              </Typography>
              <Typography variant="body2" gutterBottom color="text.secondary">
                {data?.data.description}
              </Typography>
            </Grid>
            <Grid item>
              <Link
                to={data?.data.href}
                sx={{ cursor: "pointer" }}
                className="text-indigo-600 font-bold flex mb-4"
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
          </Grid>
        </Grid>
      </Grid>
      <div className="md:m-4">
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="left"
          flexWrap={"wrap"}
          useFlexGap={true}
        >
          {data?.data.skills.map((skill) => (
            <Chip size="small" label={skill} key={skill} />
          ))}
        </Stack>
      </div>
    </Paper>
  );
}
