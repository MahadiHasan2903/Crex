import { MdOutlineExpandMore } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";
import teamLogo from "../../../public/logo.webp";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Series", href: "/series", icon: <MdOutlineExpandMore /> },
  { label: "Fixtures", href: "/fixtures" },
  {
    label: "States Corner",
    href: "/states",
    withIcon: true,
    icon: <GiCricketBat color="#F3AD61" />,
  },
  { label: "Rankings", href: "/rankings" },
];

export const matches = [
  {
    id: 1,
    status: "Live",
    tournament: "PSL 2024",
    matchDetails: "20th Match, Rawalpindi Cricket Stadium, Rawalpindi",
    team1: {
      logo: teamLogo,
      abbreviation: "BD",
      score: "79/2",
      overs: "9.4",
    },
    team2: {
      logo: teamLogo,
      abbreviation: "OPP",
      score: "120/3",
      overs: "15.2",
    },
    decision: "BD won the toss and chose to bowl",
  },
  {
    id: 2,
    status: "Upcoming",
    tournament: "PSL 2024",
    matchDetails: "21st Match, Gaddafi Stadium, Lahore",
    team1: {
      logo: teamLogo,
      abbreviation: "KK",
      score: "-",
      overs: "-",
    },
    team2: {
      logo: teamLogo,
      abbreviation: "MS",
      score: "-",
      overs: "-",
    },
    decision: "To be decided",
  },

  {
    id: 3,
    status: "Completed",
    tournament: "PSL 2024",
    matchDetails: "22nd Match, Multan Cricket Stadium, Multan",
    team1: {
      logo: teamLogo,
      abbreviation: "IU",
      score: "145/5",
      overs: "20",
    },
    team2: {
      logo: teamLogo,
      abbreviation: "QG",
      score: "142/8",
      overs: "20",
    },
    decision: "IU won by 3 runs",
  },

  {
    id: 4,
    status: "Live",
    tournament: "PSL 2024",
    matchDetails: "23rd Match, National Stadium, Karachi",
    team1: {
      logo: teamLogo,
      abbreviation: "LQ",
      score: "105/4",
      overs: "13.5",
    },
    team2: {
      logo: teamLogo,
      abbreviation: "PZ",
      score: "120/2",
      overs: "14.2",
    },
    decision: "PZ won the toss and chose to bat",
  },
  {
    id: 5,
    status: "Live",
    tournament: "PSL 2024",
    matchDetails: "20th Match, Rawalpindi Cricket Stadium, Rawalpindi",
    team1: {
      logo: teamLogo,
      abbreviation: "BD",
      score: "79/2",
      overs: "9.4",
    },
    team2: {
      logo: teamLogo,
      abbreviation: "OPP",
      score: "120/3",
      overs: "15.2",
    },
    decision: "BD won the toss and chose to bowl",
  },
  {
    id: 6,
    status: "Upcoming",
    tournament: "PSL 2024",
    matchDetails: "21st Match, Gaddafi Stadium, Lahore",
    team1: {
      logo: teamLogo,
      abbreviation: "KK",
      score: "-",
      overs: "-",
    },
    team2: {
      logo: teamLogo,
      abbreviation: "MS",
      score: "-",
      overs: "-",
    },
    decision: "To be decided",
  },

  {
    id: 7,
    status: "Upcoming",
    tournament: "PSL 2024",
    matchDetails: "24th Match, Rawalpindi Cricket Stadium, Rawalpindi",
    team1: {
      logo: teamLogo,
      abbreviation: "MS",
      score: "-",
      overs: "-",
    },
    team2: {
      logo: teamLogo,
      abbreviation: "QG",
      score: "-",
      overs: "-",
    },
    decision: "To be decided",
  },
];
