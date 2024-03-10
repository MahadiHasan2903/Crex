import { MdOutlineExpandMore } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";
import coverImage from "../../../public/cover.png";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Series", href: "#series", icon: <MdOutlineExpandMore /> },
  { label: "Fixtures", href: "/fixtures" },
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
        matchId: 1,
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
        matchId: 2,
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
        matchId: 3,
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
        matchId: 4,
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
  { name: "ODI" },
  { name: "T20" },
  { name: "Test" },
  { name: "T10" },
];

export const cricketSeries = [
  { name: "International" },
  { name: "Domestic" },
  { name: "League" },
];

export const seriesArray = [
  {
    id: 6927,
    name: "England tour of India, 2024",
    startDt: "1706140800000",
    endDt: "1710115200000",
  },
  {
    id: 6928,
    name: "Australia tour of South Africa, 2024",
    startDt: "1722960000000",
    endDt: "1726934400000",
  },
  {
    id: 6929,
    name: "New Zealand tour of West Indies, 2024",
    startDt: "1730361600000",
    endDt: "1734336000000",
  },
  {
    id: 6930,
    name: "Pakistan tour of Bangladesh, 2024",
    startDt: "1737772800000",
    endDt: "1741747200000",
  },
  {
    id: 6931,
    name: "India tour of Australia, 2024",
    startDt: "1745184000000",
    endDt: "1749158400000",
  },
  {
    id: 6932,
    name: "South Africa tour of England, 2024",
    startDt: "1752595200000",
    endDt: "1756569600000",
  },
  {
    id: 6933,
    name: "West Indies tour of New Zealand, 2024",
    startDt: "1760006400000",
    endDt: "1763980800000",
  },
  {
    id: 6934,
    name: "Bangladesh tour of Pakistan, 2024",
    startDt: "1767417600000",
    endDt: "1771392000000",
  },
  {
    id: 6935,
    name: "England tour of India, 2024",
    startDt: "1774828800000",
    endDt: "1778803200000",
  },
  {
    id: 6936,
    name: "Australia tour of South Africa, 2024",
    startDt: "1782240000000",
    endDt: "1786214400000",
  },
  {
    id: 6937,
    name: "New Zealand tour of West Indies, 2024",
    startDt: "1789651200000",
    endDt: "1793625600000",
  },
  {
    id: 6938,
    name: "Pakistan tour of Bangladesh, 2024",
    startDt: "1797062400000",
    endDt: "1801036800000",
  },
  {
    id: 6939,
    name: "India tour of Australia, 2024",
    startDt: "1804492800000",
    endDt: "1808467200000",
  },
  {
    id: 6940,
    name: "South Africa tour of England, 2024",
    startDt: "1811875200000",
    endDt: "1815849600000",
  },
  {
    id: 6941,
    name: "West Indies tour of New Zealand, 2024",
    startDt: "1819286400000",
    endDt: "1823260800000",
  },
  {
    id: 6942,
    name: "Bangladesh tour of Pakistan, 2024",
    startDt: "1826697600000",
    endDt: "1830672000000",
  },
  {
    id: 6943,
    name: "England tour of India, 2024",
    startDt: "1834108800000",
    endDt: "1838083200000",
  },
  {
    id: 6944,
    name: "Australia tour of South Africa, 2024",
    startDt: "1841520000000",
    endDt: "1845494400000",
  },
];

export const matchData = [
  {
    team: "HK",
    score: "212/6",
    overs: "20.0",
    result: "HK Won",
    description: "Only Match Hong Kong Friendship Cup 2024",
  },
  {
    team: "IND",
    score: "275/4",
    overs: "25.5",
    result: "IND Won",
    description: "Exciting Match in 2024 Series",
  },
  {
    team: "AUS",
    score: "198/8",
    overs: "18.3",
    result: "AUS Won",
    description: "T20 Clash in International Tournament",
  },
  {
    team: "ENG",
    score: "189/7",
    overs: "22.0",
    result: "Match Tied",
    description: "Thrilling Encounter in Global Cup",
  },
  {
    team: "SA",
    score: "145/5",
    overs: "15.2",
    result: "SA Won",
    description: "Fast-paced Game in Friendship Cup",
  },
  {
    team: "NZ",
    score: "230/3",
    overs: "19.4",
    result: "NZ Won",
    description: "Close Contest in 2024 Championship",
  },
];

export const teamFormData = [
  {
    team1: "HK",
    score1: "176/10",
    overs1: "20.0",
    team2: "BD",
    score2: "180/8",
    overs2: "18.4",
    matchType: "Final Match",
    tournament: "Hong Kong Friendship Cup 2024",
  },
  {
    team1: "TeamA",
    score1: "200/5",
    overs1: "25.0",
    team2: "TeamB",
    score2: "180/6",
    overs2: "22.3",
    matchType: "Friendly Match",
    tournament: "Some Tournament 2024",
  },
  {
    team1: "TeamC",
    score1: "150/8",
    overs1: "18.0",
    team2: "TeamD",
    score2: "160/4",
    overs2: "16.5",
    matchType: "Final Match",
    tournament: "Another Cup 2024",
  },
  {
    team1: "TeamX",
    score1: "220/7",
    overs1: "30.0",
    team2: "TeamY",
    score2: "200/9",
    overs2: "25.2",
    matchType: "Only Match",
    tournament: "League Match 2024",
  },
  {
    team1: "TeamP",
    score1: "130/9",
    overs1: "15.0",
    team2: "TeamQ",
    score2: "140/3",
    overs2: "14.1",
    matchType: "Friendly Match",
    tournament: "Championship Cup 2024",
  },
];

export const bangladeshCricketTeam = [
  {
    playerName: "T Iqbal",
    playerRole: "Opening Batsman",
    playerType: "Playing",
  },
  {
    playerName: "L Das (WK)",
    playerRole: "Batsman",
    playerType: "Playing",
  },
  {
    playerName: "S A Hasan (C)",
    playerRole: "All-Rounder",
    playerType: "Playing",
  },
  {
    playerName: "M Rahim (WK)",
    playerRole: "Batsman",
    playerType: "Playing",
  },
  {
    playerName: "M Riyad",
    playerRole: "All-Rounder",
    playerType: "Playing",
  },
  {
    playerName: "M Hasan",
    playerRole: "Spinner",
    playerType: "Playing",
  },
  {
    playerName: "M Rahman",
    playerRole: "Fast Bowler",
    playerType: "Playing",
  },
  {
    playerName: "T Ahmed",
    playerRole: "Fast Bowler",
    playerType: "Playing",
  },
  {
    playerName: "S Sarkar",
    playerRole: "All-Rounder",
    playerType: "Playing",
  },
  {
    playerName: "M Hossain",
    playerRole: "All-Rounder",
    playerType: "Playing",
  },
  {
    playerName: "A Hossain",
    playerRole: "All-Rounder",
    playerType: "Playing",
  },
  {
    playerName: "N H Shanto",
    playerRole: "Batsman",
    playerType: "Bench",
  },
  {
    playerName: "M Saifuddin",
    playerRole: "All-Rounder",
    playerType: "Bench",
  },
  {
    playerName: "R Hossain",
    playerRole: "Fast Bowler",
    playerType: "Bench",
  },
];

export const australianCricketTeam = [
  {
    playerName: "D Warner",
    playerRole: "Opening Batsman",
    playerType: "Playing",
  },
  {
    playerName: "A Finch (C)",
    playerRole: "Opening Batsman",
    playerType: "Playing",
  },
  {
    playerName: "S Smith",
    playerRole: "Batsman",
    playerType: "Playing",
  },
  {
    playerName: "G Maxwell",
    playerRole: "All-Rounder",
    playerType: "Playing",
  },
  {
    playerName: "M Stoinis",
    playerRole: "All-Rounder",
    playerType: "Playing",
  },
  {
    playerName: "A Carey (WK)",
    playerRole: "Batsman",
    playerType: "Playing",
  },
  {
    playerName: "P Cummins",
    playerRole: "Fast Bowler",
    playerType: "Playing",
  },
  {
    playerName: "M Starc",
    playerRole: "Fast Bowler",
    playerType: "Playing",
  },
  {
    playerName: "A Zampa",
    playerRole: "Spinner",
    playerType: "Playing",
  },
  {
    playerName: "J Hazlewood",
    playerRole: "Fast Bowler",
    playerType: "Playing",
  },
  {
    playerName: "M Wade (WK)",
    playerRole: "Batsman",
    playerType: "Playing",
  },
  {
    playerName: "Labuschagne",
    playerRole: "Batsman",
    playerType: "Bench",
  },
  {
    playerName: "A Agar",
    playerRole: "All-Rounder",
    playerType: "Bench",
  },
  {
    playerName: "C Green",
    playerRole: "All-Rounder",
    playerType: "Bench",
  },
];
