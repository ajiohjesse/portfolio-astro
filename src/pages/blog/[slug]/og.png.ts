import { ImageResponse } from "@vercel/og";
import type { APIContext, APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export async function getStaticPaths() {
  console.log("Generating paths");
  const posts = await getCollection("blog", (post) => post.data.isPublished);
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post,
  }));
}

export const GET: APIRoute<CollectionEntry<"blog">> = async ({
  url,
  props,
}) => {
  const { title, description } = props.data;

  const html = {
    type: "section",
    key: "og-image",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        backgroundColor: "#0a192f",
        color: "#e6f1ff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "48px",
        position: "relative", // Needed for absolute children like badge/footer
        padding: "48px",
      },
      children: [
        // BLOG POST badge
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: "24px",
              left: "32px",
              backgroundColor: "#ffdb64",
              color: "#0a192f",
              fontWeight: "bold",
              fontSize: "14px",
              padding: "6px 12px",
              borderRadius: "8px",
              letterSpacing: "1px",
            },
            children: "BLOG POST",
          },
        },
        // Text content
        {
          type: "div",
          props: {
            style: {
              position: "relative",
              zIndex: "1",
              flex: "1",
              paddingTop: "0px",
              display: "flex",
              flexDirection: "column",
            },
            children: [
              {
                type: "h1",
                props: {
                  style: {
                    marginBottom: "8px",
                    fontSize: "48px",
                    lineHeight: "1.25",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "#e6f1ff",
                  },
                  children: `${title}`,
                },
              },
              {
                type: "p",
                props: {
                  style: {
                    fontSize: "20px",
                    marginBottom: "16px",
                    color: "#8892b0",
                    maxWidth: "90%",
                  },
                  children: `${description}`,
                },
              },
              {
                type: "h2",
                props: {
                  style: {
                    color: "#ffdb64",
                    fontSize: "24px",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                  },
                  children: `By Jesse Ajioh`,
                },
              },
            ],
          },
        },
        // Profile image block
        {
          type: "div",
          props: {
            style: {
              position: "relative",
              maxWidth: "400px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    borderColor: "rgba(255, 219, 100, 0.4)",
                    borderWidth: "4px",
                    position: "absolute",
                    top: "96px",
                    left: "48px",
                    right: "-16px",
                    bottom: "0",
                    zIndex: "0",
                  },
                },
              },
              {
                type: "img",
                props: {
                  src: `${url.origin}/profile-small.png`,
                  alt: "Jesse - Fullstack Developer",
                  style: {
                    position: "relative",
                    zIndex: "1",
                    width: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                    objectPosition: "top",
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    position: "absolute",
                    top: "-16px",
                    bottom: "-16px",
                    left: "-16px",
                    right: "-16px",
                    zIndex: "1",
                    backgroundImage:
                      "linear-gradient(to bottom, transparent, #0a192f)",
                    filter: "blur(16px)",
                  },
                },
              },
            ],
          },
        },
        // Footer text
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              bottom: "24px",
              left: "48px",
              fontSize: "18px",
              color: "#8892b0",
            },
            children: "rehx.name.ng",
          },
        },
      ],
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  });
};
