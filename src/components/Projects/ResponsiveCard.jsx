import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardTitle } from "reactstrap";
import Link from "next/link";
import { Div1 } from "../Header/HeaderStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "styled-components";
import Theme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "20px",
    [theme?.breakpoints?.up("xs")]: {
      maxWidth: 345,
    },
  },
  media: {
    height: 200,
  },
  chipCustom: {
    marginRight: 5,
    "& .MuiChip-label": { fontSize: 15 },
  },
  title: {
    width: "fit-content",

    fontSize: 20,
  },
  border: {
    borderBottom: "1px solid black",
  },
  space: {
    paddingBottom: 10,
    marginBottom: 10,
  },
  subcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
    margin: "15px 0px",
  },
}));

export const ResponsiveCard = ({ props }) => {
  const matches = useMediaQuery("(min-width:400px)");
  console.log("props", props);
  const classes = useStyles();

  function handleClick(link) {
    console.log(link);
    window.open(Object.values(link), "_blank");
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {props?.image && (
          <CardMedia className={classes.media} image={props.image} content="" />
        )}
        <CardContent>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <CardTitle
              className={`${classes.title} ${classes.border} ${classes.space}`}
            >
              {props.name}
            </CardTitle>
          </Stack>
          <Stack direction={"column"} spacing={0}>
            <CardTitle
              className={`${classes.title} ${classes.border} ${classes.space}`}
            >
              {props.company}
            </CardTitle>
            <CardTitle
              className={`${classes.title} ${classes.space}`}
              style={{ fontSize: 10 }}
            >
              {props?.startDate && props.startDate}{" "}
              {props?.endDate && `- ${props.endDate}`}
            </CardTitle>
          </Stack>

          <CardTitle
            className={`${classes.title} ${classes.space}`}
            style={{
              fontSize: 15,
            }}
          >
            {props.desc}
          </CardTitle>

          {props?.stack && props.stack?.length > 0 && (
            <Div1 className={classes.subcon}>
              <CardTitle
                className={`${classes.title} ${classes.space}`}
                style={{
                  fontSize: 15,
                }}
              >
                Stack : &nbsp;&nbsp;
              </CardTitle>
              {props.stack.map((s) => {
                return (
                  <Chip
                    className={classes.chipCustom}
                    label={s}
                    variant="outlined"
                  />
                );
              })}
            </Div1>
          )}

          {props?.links && props.links?.length > 0 && (
            <Div1 className={classes.subcon}>
              <CardTitle
                className={`${classes.title} ${classes.space}`}
                style={{
                  fontSize: 15,
                }}
              >
                Links : &nbsp;&nbsp;
              </CardTitle>
              {props.links.map((s, i) => {
                return (
                  <Chip
                    className={classes.chipCustom}
                    label={Object.keys(s)}
                    variant="outlined"
                    color="primary"
                    onClick={() => handleClick(s)}
                  />
                );
              })}
            </Div1>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
