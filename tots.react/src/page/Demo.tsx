import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { REACT_APP_GRAPHQL_PORT } from "../env";
import { DemoQuery } from "../gql/graphql";


export function DemoComponent() {
  const query = /* GraphQL */ `
  query demo {
    demo {
      id,
      value
    }
  }
`;

  const { data } = useQuery<DemoQuery>({
    queryKey: ["demo"],
    queryFn: async () =>
      request(
        `http://localhost:${REACT_APP_GRAPHQL_PORT}/graphql`,
        query,
      ),
  });



  return (
    <div className="Demo">
      {data && data.demo.map(x => (<p> {x.value} </p>))}
    </div >
  );
}