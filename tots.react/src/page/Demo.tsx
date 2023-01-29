import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import React from "react";

const query = /* GraphQL */ `
  query messageQuery {
    messageQuery {
      message
    }
  }
`;

// const { data } = useQuery<PostQuery>("posts", async () => {
//   const { posts } = await request("", query);
//   return posts;
// });
