
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
      subTitle: "-41.99",
      secTitle: "-0.11",
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

// === Market ===
export const marketData = [
  {
    id: 0,
    title: "BUSD",
    subData: [
      {
        id: 0,
        pair: "OGN",
        title: "BUSD",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 1,
        title: "BUSD",
        pair: "GMT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 2,
        title: "BUSD",
        pair: "ATM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 3,
        title: "BUSD",
        pair: "TROY",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 4,
        title: "BUSD",
        pair: "ACM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 5,
        title: "BUSD",
        pair: "JUV",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 6,
        title: "BUSD",
        pair: "ALCX",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 7,
        title: "BUSD",
        pair: "MDX",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 8,
        title: "BUSD",
        pair: "QUICK",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 9,
        title: "BUSD",
        pair: "REQ",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 10,
        title: "BUSD",
        pair: "ALPACA",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 11,
        title: "BUSD",
        pair: "AVA",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 12,
        title: "BUSD",
        pair: "TORN",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
    ],
  },
  {
    id: 1,
    title: "USDT",
    subData: [
      {
        id: 13,
        title: "USDT",
        pair: "OG",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 14,
        title: "USDT",
        pair: "MBL",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 15,
        title: "USDT",
        pair: "ASR",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 16,
        title: "USDT",
        pair: "GMT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 17,
        title: "USDT",
        pair: "OGN",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 18,
        title: "USDT",
        pair: "ATM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 19,
        title: "USDT",
        pair: "TROY",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 20,
        title: "USDT",
        pair: "TCT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 21,
        title: "USDT",
        pair: "ACM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 22,
        title: "USDT",
        pair: "FIRO",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 23,
        title: "USDT",
        pair: "JUV",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 24,
        title: "USDT",
        pair: "ALCX",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 25,
        title: "USDT",
        pair: "REQ",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
    ],
  },
  {
    id: 2,
    title: "BNB",
    subData: [
      {
        id: 26,
        title: "BNB",
        pair: "OG",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 27,
        title: "BNB",
        pair: "MBL",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 28,
        title: "BNB",
        pair: "ASR",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 29,
        title: "BNB",
        pair: "GMT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 30,
        title: "BNB",
        pair: "OGN",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 31,
        title: "BNB",
        pair: "ATM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 32,
        title: "BNB",
        pair: "TROY",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 33,
        title: "BNB",
        pair: "TCT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 34,
        title: "BNB",
        pair: "ACM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 35,
        title: "BNB",
        pair: "FIRO",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 36,
        title: "BNB",
        pair: "JUV",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 37,
        title: "BNB",
        pair: "ALCX",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 38,
        title: "BNB",
        pair: "REQ",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
    ],
  },
  {
    id: 3,
    title: "BTC",
    subData: [
      {
        id: 39,
        pair: "OG",
        title: "BTC",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 40,
        title: "BTC",
        pair: "MBL",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 41,
        pair: "ASR",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 42,
        title: "BTC",
        pair: "GMT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 43,
        title: "BTC",
        pair: "OGN",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 44,
        title: "BTC",
        pair: "ATM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 45,
        title: "BTC",
        pair: "TROY",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 46,
        title: "BTC",
        pair: "TCT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 47,
        title: "BTC",
        pair: "ACM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 48,
        title: "BTC",
        pair: "FIRO",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 49,
        title: "BTC",
        pair: "JUV",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 50,
        title: "BTC",
        pair: "ALCX",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 51,
        title: "BTC",
        pair: "REQ",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
    ],
  },
  {
    id: 4,
    
    title: "ALTS",
    subData: [
      {
        id: 52,
        title: "ALTS",
        pair: "OG",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 53,
        title: "ALTS",
        pair: "MBL",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 54,
        title: "ALTS",
        pair: "ASR",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 55,
        title: "ALTS",
        pair: "GMT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 56,
        title: "ALTS",
        pair: "OGN",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 57,
        title: "ALTS",
        pair: "ATM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 58,
        title: "ALTS",
        pair: "TROY",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 59,
        title: "ALTS",
        pair: "TCT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 60,
        title: "ALTS",
        pair: "ACM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 61,
        title: "ALTS",
        pair: "FIRO",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 62,
        title: "ALTS",
        pair: "JUV",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 63,
        title: "ALTS",
        pair: "ALCX",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 64,
        title: "ALTS",
        pair: "REQ",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
    ],
  },
  {
    id: 5,
    title: "FIAT",
    subData: [
      {
        id: 65,
        title: "FIAT",
        pair: "OG",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 66,
        title: "FIAT",
        pair: "MBL",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 67,
        title: "FIAT",
        pair: "ASR",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 68,
        title: "FIAT",
        pair: "GMT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 69,
        title: "FIAT",
        pair: "OGN",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 70,
        title: "FIAT",
        pair: "ATM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 71,
        title: "FIAT",
        pair: "TROY",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 72,
        title: "FIAT",
        pair: "TCT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 73,
        title: "FIAT",
        pair: "ACM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 74,
        title: "FIAT",
        pair: "FIRO",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 75,
        title: "FIAT",
        pair: "JUV",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 76,
        title: "FIAT",
        pair: "ALCX",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 77,
        title: "FIAT",
        pair: "REQ",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
    ],
  },
  {
    id: 6,
    title: "Zones",
    subData: [
      {
        id: 78,
        title: "Zones",
        pair: "OG",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 79,
        title: "Zones",
        pair: "MBL",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 80,
        title: "Zones",
        pair: "ASR",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 81,
        title: "Zones",
        pair: "GMT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 82,
        title: "Zones",
        pair: "OGN",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 83,
        title: "Zones",
        pair: "ATM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 84,
        title: "Zones",
        pair: "TROY",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 85,
        title: "Zones",
        pair: "TCT",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 86,
        title: "Zones",
        pair: "ACM",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 87,
        title: "Zones",
        pair: "FIRO",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 88,
        title: "Zones",
        pair: "JUV",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 89,
        title: "Zones",
        pair: "ALCX",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
      {
        id: 90,
        title: "Zones",
        pair: "REQ",
        lastPrice: "0.0001577",
        change: "+97.62",
        value24H: "279.62",
      },
    ],
  },
];

// === Order Book Data ===
export const orderBook = {
  buyOrder: [
    {
      id: 0,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 1,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 2,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 3,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 4,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 5,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 6,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 7,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 8,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 9,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 10,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 11,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 12,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 13,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 14,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 15,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 16,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 17,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 18,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 19,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 20,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 21,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 22,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 23,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 24,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 25,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 26,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 27,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 28,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 29,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 30,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
  ],
  sellOrder: [
    {
      id: 0,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 1,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 2,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 3,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 4,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 5,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 6,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 7,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 8,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 9,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 10,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 11,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 12,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 13,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 14,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 15,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 16,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 17,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 18,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 19,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 20,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 21,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
    {
      id: 22,
      price: "41074.99",
      amount: "3.2421",
      total: "133,170.04658",
    },
  ],
};
// === Market Trades Data ===
export const trades = {
  trades: [
    {
      id: 0,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
      type: "sell",
    },
    {
      id: 1,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
      type: "buy",
    },
    {
      id: 2,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
      type: "sell",
    },
    {
      id: 3,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 4,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 5,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 6,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 7,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 8,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 9,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 10,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 11,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 12,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 13,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 14,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 15,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 16,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 17,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 18,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 19,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 20,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 21,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 22,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 23,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 24,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 25,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 26,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 27,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 28,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 29,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
    {
      id: 30,
      price: "41074.99",
      amount: "3.2421",
      time: "08:55:03",
    },
  ],
};
