import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Home from "@/components/Home";
import Ready from "@/components/Ready";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import Video from "@/components/Video";
import Whitepaper from "@/components/Whitepaper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snakedice",
  description: "SnakeDice DAO plans to be a social casino, utilizing the native deflationary token SNAKE, to offer decentralized gambling on the Ethereum blockchain to users in the United States and worldwide.",
  // other metadata
};

export default function Index() {
  return (
    <>
      <ScrollUp />
      <Home />
      <Whitepaper />
      <Tokenomics />
      <Team />
      <Roadmap />
      <Video />
      <Features />
      <Ready />
    </>
  );
}
