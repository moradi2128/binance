// === Icons ===
import { SiBitcoinsv, SiSololearn } from "react-icons/si";
import {
  RiBarChartFill,
  RiDonutChartFill,
  RiMoneyDollarCircleFill,
} from "react-icons/ri";
import { GiTrade } from "react-icons/gi";
import { BsFillFolderSymlinkFill, BsDiamond, BsDownload } from "react-icons/bs";
import { MdOutlineCenterFocusWeak } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { MdLanguage } from "react-icons/md";

// === Nav Item Data ===
export const navItem = [
  {
    id: 0,
    title: "Buy Crypto",
    icon: SiBitcoinsv,
    badge: "EUR",
    subset: [
      {
        id: 0,
        title: "Pay width",
        href: "/",
        subset: [
          {
            id: 0,
            title: "EUR",
          },
          {
            id: 1,
            title: "USD",
          },
        ],
      },
      {
        id: 1,
        title: "Deposit",
        href: "/",
      },
      {
        id: 4,
        title: "Credit/Debit card",
        href: "/",
      },
      {
        id: 5,
        title: "P2P Trading",
        href: "/",
      },
      {
        id: 6,
        title: "Recurring Buy",
        href: "/",
      },
      {
        id: 7,
        title: "Crash Balance",
        href: "/",
      },
      {
        id: 8,
        title: "Third-party Payment",
        href: "/",
      },
    ],
  },
  {
    id: 1,
    title: "Markets",
    href: "/",
    icon: RiBarChartFill,
  },
  {
    id: 2,
    title: "Trade",
    icon: GiTrade,
    subset: [
      {
        id: 0,
        title: "Convent ",
        href: "/",
      },
      {
        id: 1,
        title: "Classic",
        href: "/",
      },
      {
        id: 2,
        title: "Advanced",
        href: "/",
      },
      {
        id: 3,
        title: "Margin",
        href: "/",
      },
      {
        id: 4,
        title: "P2P",
        href: "/",
      },
      {
        id: 5,
        title: "Strategy Trading",
        href: "/",
      },
      {
        id: 6,
        title: "Swap Farming",
        href: "/",
      },
      {
        id: 7,
        title: "Fan Token",
        href: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Derivatives",
    icon: BsFillFolderSymlinkFill,
    subset: [
      {
        id: 0,
        title: "Pay width",
        href: "/",
      },
      {
        id: 1,
        title: "Pay width",
        href: "/",
      },
      {
        id: 2,
        title: "Pay width",
        href: "/",
      },
      {
        id: 3,
        title: "Pay width",
        href: "/",
      },
      {
        id: 4,
        title: "Pay width",
        href: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Earn",
    icon: SiSololearn,
    subset: [
      {
        id: 0,
        title: "Pay width",
        href: "/",
      },
      {
        id: 1,
        title: "Pay width",
        href: "/",
      },
      {
        id: 2,
        title: "Pay width",
        href: "/",
      },
      {
        id: 3,
        title: "Pay width",
        href: "/",
      },
      {
        id: 4,
        title: "Pay width",
        href: "/",
      },
    ],
  },
  {
    id: 5,
    title: "Finance",
    icon: RiDonutChartFill,
    subset: [
      {
        id: 0,
        title: "Pay width",
        href: "/",
      },
      {
        id: 1,
        title: "Pay width",
        href: "/",
      },
      {
        id: 2,
        title: "Pay width",
        href: "/",
      },
      {
        id: 3,
        title: "Pay width",
        href: "/",
      },
      {
        id: 4,
        title: "Pay width",
        href: "/",
      },
    ],
  },
  {
    id: 6,
    title: "NFT",
    icon: MdOutlineCenterFocusWeak,
    badge: "New",
    subset: [
      {
        id: 0,
        title: "Pay width",
        href: "/",
      },
      {
        id: 1,
        title: "Pay width",
        href: "/",
      },
      {
        id: 2,
        title: "Pay width",
        href: "/",
      },
      {
        id: 3,
        title: "Pay width",
        href: "/",
      },
      {
        id: 4,
        title: "Pay width",
        href: "/",
      },
    ],
  },
  {
    id: 7,
    title: "Guide",
    icon: BsDiamond,
    subset: [
      {
        id: 0,
        title: "Pay width",
        href: "/",
      },
      {
        id: 1,
        title: "Pay width",
        href: "/",
      },
      {
        id: 2,
        title: "Pay width",
        href: "/",
      },
      {
        id: 3,
        title: "Pay width",
        href: "/",
      },
      {
        id: 4,
        title: "Pay width",
        href: "/",
      },
    ],
  },
  {
    id: 8,
    title: "Products",
    icon: CgMenuGridR,
    subset: [
      {
        id: 0,
        title: "Exchange",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 1,
        title: "Academy",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 2,
        title: "Broker",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 3,
        title: "Institutional & VIP Services",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 4,
        title: "Charity",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 5,
        title: "Cloud",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 6,
        title: "DEX",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 7,
        title: "Labs",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 8,
        title: "Launchpad",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 9,
        title: "Research",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 10,
        title: "Trust Wallet",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },
      {
        id: 11,
        title: "Gift Card",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
      },

      {
        id: 12,
        title: "Binance Live",
        href: "/",
        description: "White-glove approach for tailored trading solutions",
        badge: "new",
      },
    ],
  },
];

export const navItemSecond = [
  {
    id: 0,
    title: "Downloads",
    href: "/",
    icon: BsDownload,
  },
  {
    id: 1,
    title: "English",
    href: "/",
    icon: MdLanguage,
  },
  {
    id: 2,
    title: "USD",
    icon: RiMoneyDollarCircleFill,
    href: "/",
  },
];

// === Support Data ===

export const supportData = [
  {
    id: 0,
    title: "Dual Investment Giveaway - 30,000 BUSD to Be Shared! (2022-03-10)",
    href: "/",
    date: "03-10",
  },
  {
    id: 1,
    title: "Binance Liquid Swap Adds ATA, Opens Two New Liquidity Pools",
    href: "/",
    date: "03-10",
  },
  {
    id: 2,
    title:
      "Binance Adds ANC/BNB, ATOM/EUR, GALA/EUR, KSM/ETH & UMA/TRY Trading Pairs",
    href: "/",
    date: "03-10",
  },
  {
    id: 3,
    title:
      "Trade Layer 1 Tokens and Collect the Icon Cards on Binance Futures to Share Up to 188,888 BUSD",
    href: "/",
    date: "03-10",
  },
  {
    id: 4,
    title:
      "BTTC Staking Special: Enjoy Up to 100.99% APY and Share 33.9 Billion BTTC in Rewards",
    href: "/",
    date: "03-10",
  },
  {
    id: 5,
    title:
      "Register, Complete KYC, and Share Rewards of $45,000 in STEPN (GMT) !",
    href: "/",
    date: "03-10",
  },
  {
    id: 6,
    title: "Earn Wednesday: High-Yield Offers Not to Miss Out! (2022-03-09)",
    href: "/",
    date: "03-10",
  },
  {
    id: 7,
    title:
      "New Dual Investment Products Launched: Earn Up to 2X APY (2022-03-09)",
    href: "/",
    date: "03-10",
  },
  {
    id: 8,
    title:
      "Binance Completes the STEPN Subscription Launchpad and Will Open Trading for GMT",
    href: "/",
    date: "03-9",
  },
];

// === Sub Header Data ===
export const subHeaderData = {
  subHeaderLeft: [
    {
      id: 0,
      title: "BTC/USDT",
      href: "/",
      subTitle: "Bitcoin Price",
    },
    {
      id: 1,
      title: "39,111,99",
      subTitle: "39,111,99",
    },
  ],
  subHeaderRight: [
    {
      id: 0,
      title: "24h Change",
      subTitle: "-41.99 -0.11",
    },
    {
      id: 1,
      title: "24h High",
      subTitle: "40,236.26",
    },
    {
      id: 2,
      title: "24h Low",
      subTitle: "38,308.83",
    },
    {
      id: 3,
      title: "24h Volume(BTC)",
      subTitle: "47,943.80",
    },
    {
      id: 4,
      title: "24h Volume(USDT)",
      subTitle: "1,879,178,202.03",
    },
  ],
};
