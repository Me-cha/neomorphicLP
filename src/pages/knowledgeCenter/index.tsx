import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography, Button, CardContent, Card } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArticleIcon from "@mui/icons-material/Article";
import ImageIcon from "@mui/icons-material/Image";
import InfoIcon from "@mui/icons-material/Info";

// Styled components using Material-UI's styled function
const Section = styled("section")({
  minHeight: "100vh",
  padding: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  marginTop: "60px",
  flexDirection: "column",
});

const Content = styled(Typography)(({ theme }) => ({
  height: "100%",
  fontWeight: "bold",
  fontSize: "3rem",
  background: "linear-gradient(to right, #9b4dca, #ec4899, #3b82f6)", // Gradient from purple to pink to blue
  WebkitBackgroundClip: "text", // Apply background clip to the text
  color: "transparent", // Make text transparent to show the gradient
  display: "inline", // Ensure the gradient applies correctly to text
}));

const KnowleadgeCenterWrapper = styled(Stack)(({ theme }) => ({
  width: "50%",
  marginTop: "20px",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const ContentTypeWrapper = styled(Stack)(({ theme }) => ({
  width: "30%",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  overflowY: "auto",
  maxHeight: "500px",
  marginRight: "10px",
  border: "1px solid grey",
  borderRadius: "10px",
  boxShadow: "-1px 2px 20px 3px rgb(255 60 255 / 28%)", // Purple shadow (RGBA for transparency)
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
    borderRadius: "4px",
  },
}));

const Subheading = styled(Typography)({
  marginTop: "7px",
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "lighter",
});

interface ContentButtonProps {
  active?: boolean;
}

const ContentButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active", // Prevents 'active' from being passed to DOM element
})<ContentButtonProps>(({ theme, active }) => ({
  width: "100%",
  justifyContent: "flex-start", // Align text to the left
  backgroundColor: active ? theme.palette.primary.main : "transparent",
  color: active ? theme.palette.common.white : theme.palette.grey[300],
  fontWeight: active ? "bold" : "normal",
  padding: theme.spacing(1.5),
  borderRadius: "4px",
  textAlign: "left", // Align text to the left
  "&:hover": {
    backgroundColor: active
      ? theme.palette.primary.dark
      : theme.palette.action.hover,
  },
}));

const ContentViewWrapper = styled(Stack)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  backgroundColor: theme.palette.grey[800],
  borderRadius: "7px",
  padding: theme.spacing(1),
  overflowY: "auto",
  overflowX: "hidden",
  scrollbarWidth: "none",
}));

const ContentCard = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  color: theme.palette.common.white,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  height: "auto",
  borderRadius: "5px",
}));

type Section = {
  type: "video" | "article" | "image";
  title: string;
  description: string;
  embedLink?: string;
  link?: string;
  imageLink?: string;
};

type ContentSec = {
  sections: Section[];
};

const contentSec: ContentSec = {
  sections: [
    {
      type: "video",
      title: "Top 10 Financial Concepts You Must Know",
      embedLink: "https://www.youtube.com/embed/WN9Mks1s4tM",
      description: "A comprehensive guide to essential financial concepts.",
    },
    {
      type: "video",
      title: "Financial Education | The 4 Rules Of Being Financially Literate",
      embedLink: "https://www.youtube.com/embed/q5JWp47z4bY",
      description:
        "Learn the key rules of financial literacy and take control of your finances.",
    },
    {
      type: "video",
      title: "ONDC Explained: Understanding The 'UPI Of E-Commerce'",
      embedLink:
        "https://www.youtube.com/embed/ugykOPSXskQ?si=3ld4F3ivHCzBNyXZ",
      description:
        "The Indian government is working on an exciting project - ONDC, the Open Network For Digital Commerce. In a nutshell, this means that you'll have one platform that connects ALL e-commerce websites, apps and services. The centre's main agenda in this is to counter the dominance of current e-comm giants like Amazon, Flipkart, Zomato, Swiggy, Ola and Uber. With ONDC, the government hopes to bring smaller retailers at par with them.",
    },
    {
      type: "video",
      title: "The Best Financial Plan 2024 | Step by Step Guide",
      embedLink: "https://www.youtube.com/embed/xR1BHEynXgA",
      description:
        "A step-by-step guide to creating the best financial plan for 2024.",
    },
    {
      type: "article",
      title: "The Basics of Personal Finance",
      link: "hhttps://www.investopedia.com/articles/younginvestors/08/eight-tips.asp",
      description:
        "An in-depth article on personal finance basics for beginners.",
    },
    {
      type: "article",
      title: "Investment Strategies for 2024",
      link: "https://www.investopedia.com/personal-finance-4427760",
      description:
        "Expert tips on building a successful investment portfolio in 2024.",
    },
  ],
};

type VideoCardProps = {
  title: string;
  embedLink: string;
  description: string;
};

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  embedLink,
  description,
}) => (
  <ContentCard>
    <CardContent
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <div
        style={{
          position: "relative",
          paddingTop: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={embedLink}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0 }}
        ></iframe>
      </div>
      <Typography variant="body2" mt={2}>
        {description}
      </Typography>
    </CardContent>
  </ContentCard>
);

type ArticleCardProps = {
  title: string;
  link: string;
  description: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  link,
  description,
}) => (
  <ContentCard>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" mb={1}>
        {description}
      </Typography>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "cyan", textDecoration: "none" }}
      >
        Read More
      </a>
    </CardContent>
  </ContentCard>
);

type ImageCardProps = {
  title: string;
  imageLink: string;
  description: string;
};

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  imageLink,
  description,
}) => (
  <ContentCard>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <img
        src={imageLink}
        alt={title}
        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
      />
      <Typography variant="body2" mt={2}>
        {description}
      </Typography>
    </CardContent>
  </ContentCard>
);

type DynamicContentDisplayProps = {
  content: ContentSec;
};

const DynamicContentDisplay: React.FC<DynamicContentDisplayProps> = ({
  content,
}) => (
  <ContentViewWrapper spacing={2}>
    {content.sections.map((section, index) => {
      if (section.type === "video" && section.embedLink) {
        return (
          <VideoCard
            key={index}
            title={section.title}
            embedLink={section.embedLink}
            description={section.description}
          />
        );
      } else if (section.type === "article" && section.link) {
        return (
          <ArticleCard
            key={index}
            title={section.title}
            link={section.link}
            description={section.description}
          />
        );
      } else if (section.type === "image" && section.imageLink) {
        return (
          <ImageCard
            key={index}
            title={section.title}
            imageLink={section.imageLink}
            description={section.description}
          />
        );
      }
      return null;
    })}
  </ContentViewWrapper>
);

const KnowLeadgeCenterPage = () => {
  const [activeItem, setActiveItem] = useState("articles");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <Section>
        {/* Wrapper for Content and Subheading */}
        <Stack flexDirection="column" width="50%" height="50%">
          <Content textAlign={"left"} variant="h4">
            Knowleadge Center Page
          </Content>
          <Subheading variant="h6" sx={{ color: "#C6C6C6" }}>
            Discover videos, photos, and articles designed to help you maximize
            your profit potential. Gain valuable insights, tips, and strategies
            to elevate your business and enhance your growth opportunities in
            the ever-evolving market.
          </Subheading>
        </Stack>
        {/* Content and Types selection */}
        <KnowleadgeCenterWrapper>
          <ContentTypeWrapper>
            <Typography variant="h6" gutterBottom color="white">
              Choose Content Type
            </Typography>
            <ContentButton
              active={activeItem === "articles"}
              onClick={() => handleItemClick("articles")}
              startIcon={<ArticleIcon />}
            >
              Articles
            </ContentButton>
            <ContentButton
              active={activeItem === "videos"}
              onClick={() => handleItemClick("videos")}
              startIcon={<PlayArrowIcon />}
            >
              Videos
            </ContentButton>
            <ContentButton
              active={activeItem === "photos"}
              onClick={() => handleItemClick("photos")}
              startIcon={<ImageIcon />}
            >
              Photos
            </ContentButton>
            <ContentButton
              active={activeItem === "information"}
              onClick={() => handleItemClick("information")}
              startIcon={<InfoIcon />}
            >
              Other Information
            </ContentButton>
          </ContentTypeWrapper>
          <ContentViewWrapper>
            <DynamicContentDisplay content={contentSec} />
          </ContentViewWrapper>
        </KnowleadgeCenterWrapper>
      </Section>
    </>
  );
};

export default KnowLeadgeCenterPage;
