import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Index",
  };
};

export default function Index() {
  return <div>Start</div>;
}
