import React, { useEffect, useState } from "react";
import { Layout } from "../layout/Layout";
import { Section, SectionText } from "../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  TagList,
  Tag,
  TitleContent,
  UtilityList,
} from "../components/Projects/ProjectsStyles";
import { git_url } from "../constants/constants";
import styled from "styled-components";
import { ResponsiveCard } from "../components/Projects/ResponsiveCard";
import { Grid, Stack } from "@mui/material";
import { project_temp } from "../components/Projects/project.data";
import { Div1 } from "../components/Header/HeaderStyles";

const Container = styled.div`
  gap:10px
  padding: 10px;
`;
const Item = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`;

const Overlay = styled.div`
  position: "absolute";
  top: "2%";
`;

export default function Projects() {
  const [projects, loadUpProjects] = useState(project_temp);

  useEffect(() => {
    console.log("project", projects);
  }, []);

  return (
    <Layout>
      <Section style={{ alignItems: "center" }}>
        <SectionText
          style={{
            color: "white",
            textAlign: "center",
            color: "white",
            borderBottom: "1px solid",
            color: "white",
          }}
        ></SectionText>

        <Div1>
          <Grid container spacing={3}>
            {!!projects.length &&
              projects.map((p, i) => {
                return (
                  <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
                    <ResponsiveCard props={p} />
                  </Grid>
                );
              })}
          </Grid>
        </Div1>
      </Section>
    </Layout>
  );
}
