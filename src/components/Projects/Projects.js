import React, { useEffect, useRef, useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
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
// import { projects } from "../../constants/constants";
import Button from "../../styles/GlobalComponents/Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Div1, Div2 } from "../Header/HeaderStyles";
import Link from "next/link";
import { git_url } from "../../constants/constants";

import {
  Button as Button2,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Carousel from "../Carousel/Carousel";
import { project_temp } from "./project.data";
import { ResponsiveCard } from "./ResponsiveCard";

const Projects = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [hovered, setHovered] = useState(false);
  const shuffled = project_temp.sort(() => 0.5 - Math.random());
  const [projects, loadUpProjects] = useState(shuffled.slice(0, 3));

  const animationProps = useSpring({
    transform: hovered ? "scale(1.2)" : "scale(1)",
  });

  useEffect(() => {
    // getProjectList();
  }, []);

  const Pad = styled.text`
    padding: 1rem;
  `;

  async function getProjectList() {
    try {
      await fetch(git_url)
        .then((res) => res.json())
        .then((data) => {
          console.log("git repos", data);
          if (Array.isArray(data)) {
            data
              .sort((a, b) => {
                return a.name - b.name;
              })
              .map(async (g) => {
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
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {!!projects.length &&
            projects.map((p, i) => {
              return (
                <SwiperSlide
                  key={`slide-${i}`}
                  virtualIndex={i}
                  style={{
                    alignItems: "center",
                    justifyItems: "center",
                    marginRight: "0px",
                    display: "grid",
                  }}
                >
                  <ResponsiveCard props={p} />
                  {/* <Card>
                    <CardBody>
                      <Pad>
                        <CardTitle className="font-bold">{p.name}</CardTitle>
                      </Pad>
                      <CardText>{p.description}</CardText>
                    </CardBody>
                    <Pad>
                      <TitleContent
                        style={{
                          fontSize: 20,
                          color: "orangered",
                          borderBottomColor: "orangered",
                          borderBottomWidth: 1,
                          paddingBottom: 0,
                        }}
                      >
                        Stack
                      </TitleContent>
                    </Pad>
                    <Hr />
                    <TagList>
                      {p.topics.map((t, i) => {
                        return <Tag key={i}>{t},&nbsp;</Tag>;
                      })}
                    </TagList>{" "}
                  </Card> */}

                  {/* <BlogCard key={i}>
                    <Img src={p.image} />
                    <TitleContent>
                      <HeaderThree
                        title
                      >
                        {p.name}
                      </HeaderThree>
                    </TitleContent>
                    <CardInfo
                      className="card-info"
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
                       <ExternalLinks href={p.source}>Source</ExternalLinks> 
                    </UtilityList>
                  </BlogCard> */}
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Div1>
      <Link href="/projects">
        <Button>Show All Projects</Button>
      </Link>
    </Section>
  );
};

export default Projects;
