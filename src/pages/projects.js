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
  const [projects, loadUpProjects] = useState([]);

  useEffect(() => {
    getProjectList();
  }, []);

  async function getProjectList() {
    try {
      fetch(git_url)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            data.map(async (g) => {
              return {
                ...g,
                // tags: Object.keys(await commonAPIWrapper(g.languages_url)),
              };
            });
          }
          console.log("data new2", data);
          loadUpProjects(data);
        });
    } catch (error) {
      console.log("error", error);
    }
  }

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
        >
          Listing few of my github projects
        </SectionText>
        <Container>
          {projects.length > 0 &&
            projects.map((p, i) => {
              return (
                <Item key={Math.random().toFixed(10)}>
                  <BlogCard key={i}>
                    {/* <Img src={p.image} /> */}
                    <TitleContent>
                      <HeaderThree
                        title
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                      >
                        {p.name}
                      </HeaderThree>
                    </TitleContent>
                    <CardInfo
                      className="card-info"
                      style={{ textAlign: "center" }}
                    >
                      {p.description}
                    </CardInfo>
                    <div>
                      <Hr />
                      <TitleContent
                        style={{
                          fontSize: 20,
                          color: "orangered",
                          borderBottomColor: "orangered",
                          borderBottomWidth: 1,
                        }}
                      >
                        Stack
                      </TitleContent>
                      <Hr />
                      <TagList>
                        {p.topics.map((t, i) => {
                          return <Tag key={i}>{t},&nbsp;</Tag>;
                        })}
                      </TagList>{" "}
                    </div>
                    <UtilityList>
                      <ExternalLinks href={p.html_url} target="_blank">
                        Code
                      </ExternalLinks>
                      {/* <ExternalLinks href={p.source}>Source</ExternalLinks> */}
                    </UtilityList>
                  </BlogCard>
                </Item>
              );
            })}
        </Container>
      </Section>
    </Layout>
  );
}
