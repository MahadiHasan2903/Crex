import { MdOutlineExpandMore } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";
import coverImage from "../../../public/cover.png";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Series", href: "#series", icon: <MdOutlineExpandMore /> },
  { label: "Fixtures", href: "/fixtures/match-list" },
  {
    label: "States Corner",
    href: "/states",
    withIcon: true,
    icon: <GiCricketBat color="#F3AD61" />,
  },
  { label: "Rankings", href: "/rankings" },
];

export const fixtureLinks = [
  { to: "/fixtures/match-list", label: "Days" },
  { to: "/fixtures/series-list", label: "Series" },
  { to: "/fixtures/team-list", label: "Teams" },
];

export const footerItems = [
  { label: "About", href: "#about" },
  { label: "Grievance", href: "#grievance" },
  { label: "Refund Policy", href: "#refund-policy" },
  {
    label: "Privacy Policy",
    href: "#privacy-policy",
  },
  { label: "Terms and Conditions", href: "#terms-and-conditions" },
  { label: "Contact Us", href: "#contact-us" },
];

export const dummyNews = [
  {
    id: 1,
    coverImage: coverImage,
    intro: "Laura and Mooney- Partnership Analysis",
    headLine:
      " WPL 2024, Match 13 - Mooney-Wolvaardt Opening Partnership Leads Giants to First Win",
    description:
      "In a high-scoring encounter, Gujarat Giants secured a 19-run victory against Royal Challengers Bangalore, thanks to stellar performances by Laura Wolvaardt and Beth Mooney. The duo's formidable partnership of 140 runs wreaked havoc on the RCB bowling attack, propelling the Giants to a challenging total. Wolvaardt's aggressive innings of 76 off 45 balls and Mooney's impressive 85 off 51 deliveries displayed their dominance with the bat. Laura Wolvaardt showcased a masterful innings, scoring a fluent 76 off 45 balls with precision in her shot selection, accumulating 13 fours without resorting to aggressive strokes. Beth Mooney complemented Wolvaardt's innings by ensuring swift runs between the wickets, allowing Wolvaardt to dominate against the quicks. Mooney, known for her consistency, tactically paced her innings, turning a 21-ball 32 into a composed 82 off 51 balls, showcasing her proficiency in scoring against spinners. In contrast, Smriti Mandhana's team experienced a challenging day as none of their batters managed to convert starts into substantial innings. This inability to build significant partnerships allowed the Gujarat Giants to assert control by consistently taking wickets. Despite a late onslaught from Georgia Wareham, who scored a rapid 48 off 22 balls, the valiant effort proved futile in preventing a comprehensive defeat for Smriti Mandhana's side.",
    pubTime: "56 minutes ago",
    tags: ["INDIA", "ENGLAND", "ROHIT SHARMA", "ENGLAND TOUR OF INDIA 2024"],
  },
  {
    id: 2,
    coverImage: coverImage,
    intro: "New Player Joining - Exciting Times Ahead",
    headLine: " Exciting Times for Team as Star Player Joins Squad",
    description: "Team management expresses optimism...",
    pubTime: "2 hours ago",
    tags: ["CRICKET", "TEAM NEWS", "TRANSFERS"],
  },
  {
    id: 3,
    coverImage: coverImage,
    intro: "Record-Breaking Performance in T20 Series",
    headLine: " Player Shatters Records in T20 Series Victory",
    description: "In a stunning display of skill and determination...",
    pubTime: "5 hours ago",
    tags: ["T20", "RECORDS", "PLAYER PERFORMANCE"],
  },
];

export const matchList = [
  {
    date: "Sat, 9 Mar 2024",
    matches: [
      {
        matchInfo: "7th T20",
        seriesName: "Malaysia T20 2024",
        matchStatus: "MLY Won",
        team1: {
          name: "Kuwait",
          image: "kuwaitTeamImage",
          subName: "KUW",
          runs: 87,
          wickets: 10,
          over: 18.4,
        },
        team2: {
          name: "Malaysia",
          image: "malaysiaTeamImage",
          subName: "MLY",
          runs: 88,
          wickets: 3,
          over: 13.4,
        },
      },
      {
        matchInfo: "8th T20",
        seriesName: "Malaysia T20 2024",
        matchStatus: "Draw",
        team1: {
          name: "Australia",
          image: "australiaTeamImage",
          subName: "AUS",
          runs: 150,
          wickets: 5,
          over: 20,
        },
        team2: {
          name: "India",
          image: "indiaTeamImage",
          subName: "IND",
          runs: 150,
          wickets: 5,
          over: 20,
        },
      },
    ],
  },
  {
    date: "Sun, 10 Mar 2024",
    matches: [
      {
        matchInfo: "9th T20",
        seriesName: "Malaysia T20 2024",
        matchStatus: "IND Won",
        team1: {
          name: "Pakistan",
          image: "pakistanTeamImage",
          subName: "PAK",
          runs: 120,
          wickets: 8,
          over: 18.2,
        },
        team2: {
          name: "India",
          image: "indiaTeamImage",
          subName: "IND",
          runs: 125,
          wickets: 3,
          over: 16.4,
        },
      },
      {
        matchInfo: "10th T20",
        seriesName: "Malaysia T20 2024",
        matchStatus: "In Progress",
        team1: {
          name: "Bangladesh",
          image: "bangladeshTeamImage",
          subName: "BAN",
          runs: 95,
          wickets: 7,
          over: 15.5,
        },
        team2: {
          name: "Pakistan",
          image: "pakistanTeamImage",
          subName: "PAK",
          runs: 100,
          wickets: 3,
          over: 12.3,
        },
      },
    ],
  },
];

export const cricketTeams = [
  { Name: "All Teams", Subname: "All" },
  { Name: "Afghanistan", Subname: "AFG" },
  { Name: "Australia", Subname: "AUS" },
  { Name: "Bangladesh", Subname: "BD" },
  { Name: "England", Subname: "ENG" },
  { Name: "India", Subname: "IND" },
  { Name: "Pakistan", Subname: "PAK" },
  { Name: "South Africa", Subname: "SA" },
  { Name: "Sri Lanka", Subname: "SL" },
  { Name: "West Indies", Subname: "WI" },
  { Name: "New Zealand", Subname: "NZ" },
  { Name: "Zimbabwe", Subname: "ZIM" },
  { Name: "Ireland", Subname: "IRE" },
  { Name: "Netherlands", Subname: "NED" },
  { Name: "Scotland", Subname: "SCO" },
  { Name: "United Arab Emirates", Subname: "UAE" },
  { Name: "Canada", Subname: "CAN" },
  { Name: "Kenya", Subname: "KEN" },
  { Name: "Namibia", Subname: "NAM" },
  { Name: "Hong Kong", Subname: "HK" },
  { Name: "Oman", Subname: "OMA" },
  { Name: "Papua New Guinea", Subname: "PNG" },
  { Name: "Nepal", Subname: "NEP" },
  { Name: "Bermuda", Subname: "BER" },
  { Name: "Afghanistan A", Subname: "AFGA" },
  { Name: "Australia A", Subname: "AUSA" },
  { Name: "Bangladesh A", Subname: "BDA" },
  { Name: "England A", Subname: "ENGA" },
  { Name: "India A", Subname: "INDA" },
  { Name: "Pakistan A", Subname: "PAKA" },
  { Name: "South Africa A", Subname: "SAA" },
];

export const cricketFormats = [
  { name: "All Formats" },
  { name: "ODI" },
  { name: "T20" },
  { name: "Test" },
  { name: "T10" },
  { name: "100B" },
];

export const cricketSeries = [
  { name: "All Series" },
  { name: "International" },
  { name: "Domestic" },
  { name: "League" },
];
