import React, { useEffect, useRef, useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import { projects } from "../../constants/constants";
import Button from "../../styles/GlobalComponents/Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Div1, Div2 } from "../Header/HeaderStyles";
const Projects = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [projects, loadUpProjects] = useState([]);
  const git_url = "https://api.github.com/users/ashutosh2205x/repos";

  useEffect(() => {
    getProjectList();
  }, []);

  async function getProjectList() {
    try {
      fetch(git_url)
        .then((res) => res.json())
        .then((data) => {
          console.log("git repos", data);
          if (Array.isArray(data)) {
            data.map(async (g) => {
              return {
                ...g,
                // tags: Object.keys(await commonAPIWrapper(g.languages_url)),
              };
            });
            console.log("data new", data);
          }
          console.log("data new2", data);
          loadUpProjects(data);
        });
    } catch (error) {
      console.log("error", error);
    }
  }

  async function commonAPIWrapper(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (Object.keys(data).length > 0) {
        return data;
      } else return {};
    } catch (error) {
      return {};
    }
  }

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <Div1>
        <Swiper
          style={{}}
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {projects.length > 0 &&
            projects.map((p, i) => {
              return (
                <Div1 style={{ width: "100%" }}>
                  <SwiperSlide
                    key={`slide-${i}`}
                    virtualIndex={i}
                    style={{
                      alignItems: "center",
                      justifyItems: "center",
                      width: "1040px",
                      marginRight: "0px",
                      display: "grid",
                    }}
                  >
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
                  </SwiperSlide>
                </Div1>
              );
            })}
        </Swiper>
      </Div1>

      <Button
        onClick={() => {
          window.open("https://silly-wing-8ea493.netlify.app/", "_blank");
        }}
      >
        Show All Projects
      </Button>
    </Section>
  );
};

export default Projects;
