import { Feature } from "@/types/feature";
import ShieldSVG from "@/assets/svg/shield.svg";
import VaultSVG from "@/assets/svg/vault-1.svg";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <ShieldSVG />
    ),
    title: "Governance",
    paragraph:
      "Users will be able to stake their $SNAKE tokens in our governance vault in order to vote on changes in the protocol. Users will earn rewards from staking their tokens in governance, equal to 15% of the profits that the gaming platform makes, split equally between all governance stakers.",
  },
  {
    id: 2,
    icon: (
      <VaultSVG />
    ),
    title: "LP Vault",
    paragraph:
      "Liquidity rewards will be distributed for between 16 and 40 months. Rewards will be emitted to all liquidity providers and preference will be given to long-term stakers. Emissions will start at 375 per month and go up to 937.50 per month (2.5x) after 4 months of continuous staking.",
  }
];
export default featuresData;
