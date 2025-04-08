// src/pages/api/og-image.ts
import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

export const config = {
  runtime: "edge",
};

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get("title") ?? "Jesse Ajioh";

  const html = {
    type: "div",
    key: "og-image",
    props: {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#060e17",
        color: "#f9fafb",
        padding: "40px",
        fontFamily: "Maven Pro",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          width: "240px",
                          height: "240px",
                          overflow: "hidden",
                          borderRadius: "24px",
                          flexShrink: 0,
                          backgroundColor: "#172637",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: {
                          type: "img",
                          props: {
                            src: `${url.origin}/profile-small.png`,
                            style: {
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: "56px",
                          fontWeight: 700,
                          lineHeight: "1.2",
                          maxWidth: "70%",
                        },
                        children: title,
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    fontSize: "32px",
                    color: "#c1def4",
                    fontWeight: 500,
                    marginTop: "40px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: { color: "#3b82f6", fontWeight: 700 },
                        children: title,
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: { padding: "0 16px" },
                        children: "|",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        children: "Blog",
                      },
                    },
                  ],
                },
              },
            ],
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
