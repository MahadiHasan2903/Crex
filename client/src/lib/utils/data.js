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
  { id: 1, Name: "All Teams", Subname: "All" },
  { id: 2, Name: "Afghanistan", Subname: "AFG" },
  { id: 3, Name: "Australia", Subname: "AUS" },
  { id: 4, Name: "Bangladesh", Subname: "BD" },
  { id: 5, Name: "England", Subname: "ENG" },
  { id: 6, Name: "India", Subname: "IND" },
  { id: 7, Name: "Pakistan", Subname: "PAK" },
  { id: 8, Name: "South Africa", Subname: "SA" },
  { id: 9, Name: "Sri Lanka", Subname: "SL" },
  { id: 10, Name: "West Indies", Subname: "WI" },
  { id: 11, Name: "New Zealand", Subname: "NZ" },
  { id: 12, Name: "Zimbabwe", Subname: "ZIM" },
  { id: 13, Name: "Ireland", Subname: "IRE" },
  { id: 14, Name: "Netherlands", Subname: "NED" },
  { id: 15, Name: "Scotland", Subname: "SCO" },
  { id: 16, Name: "United Arab Emirates", Subname: "UAE" },
  { id: 17, Name: "Canada", Subname: "CAN" },
  { id: 18, Name: "Kenya", Subname: "KEN" },
  { id: 19, Name: "Namibia", Subname: "NAM" },
  { id: 20, Name: "Hong Kong", Subname: "HK" },
  { id: 21, Name: "Oman", Subname: "OMA" },
  { id: 22, Name: "Papua New Guinea", Subname: "PNG" },
  { id: 23, Name: "Nepal", Subname: "NEP" },
  { id: 24, Name: "Bermuda", Subname: "BER" },
  { id: 25, Name: "Afghanistan A", Subname: "AFGA" },
  { id: 26, Name: "Australia A", Subname: "AUSA" },
  { id: 27, Name: "Bangladesh A", Subname: "BDA" },
  { id: 28, Name: "England A", Subname: "ENGA" },
  { id: 29, Name: "India A", Subname: "INDA" },
  { id: 30, Name: "Pakistan A", Subname: "PAKA" },
  { id: 31, Name: "South Africa A", Subname: "SAA" },
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

export const battingData = [
  {
    player: "Mustafizur Rahman",
    battingStatus: "c Shaheen",
    runs: 53,
    balls: 26,
    fours: 2,
    sixes: 5,
    strikeRate: 169,
  },
  {
    player: "Tamim Iqbal",
    battingStatus: "b Rauf",
    runs: 42,
    balls: 30,
    fours: 3,
    sixes: 1,
    strikeRate: 140,
  },
  {
    player: "Shakib Al Hasan (C)",
    battingStatus: "b Hasan c Babar",
    runs: 65,
    balls: 40,
    fours: 4,
    sixes: 3,
    strikeRate: 162.5,
  },
  {
    player: "Mushfiqur Rahim(WK)",
    battingStatus: "ran out Ali",
    runs: 28,
    balls: 20,
    fours: 1,
    sixes: 0,
    strikeRate: 140,
  },
  {
    player: "Mahmudullah",
    battingStatus: "Not Out",
    runs: 36,
    balls: 25,
    fours: 2,
    sixes: 2,
    strikeRate: 144,
  },
  {
    player: "Soumya Sarkar",
    battingStatus: "Not Out",
    runs: 18,
    balls: 15,
    fours: 1,
    sixes: 0,
    strikeRate: 120,
  },
];

export const bowlingData = [
  {
    player: "Mustafizur Rahman",
    overs: 4,
    maiden: 1,
    runs: 25,
    wickets: 2,
    economyRate: 6.25,
  },
  {
    player: "Shakib Al Hasan",
    overs: 3,
    maiden: 0,
    runs: 15,
    wickets: 1,
    economyRate: 5,
  },
  {
    player: "Taskin Ahmed",
    overs: 4,
    maiden: 0,
    runs: 30,
    wickets: 1,
    economyRate: 7.5,
  },
  {
    player: "Mehidy Hasan",
    overs: 3,
    maiden: 0,
    runs: 20,
    wickets: 0,
    economyRate: 6.67,
  },
  {
    player: "Mohammad Saifuddin",
    overs: 4,
    maiden: 0,
    runs: 40,
    wickets: 1,
    economyRate: 10,
  },
];

export const fallOfWicketsData = [
  { batsman: "Tamim Iqbal", score: "25-1", over: "5.2" },
  { batsman: "Soumya Sarkar", score: "40-2", over: "8.1" },
  { batsman: "Liton Das", score: "55-3", over: "11.4" },
  { batsman: "Mushfiqur Rahim", score: "65-4", over: "13.3" },
  { batsman: "Mahmudullah", score: "80-5", over: "16.5" },
];

export const partnerships = [
  {
    batter1: {
      name: "Morne van Wyk",
      runs: "1",
      balls: "1",
    },
    batter2: {
      name: "Abdul",
      runs: "4",
      balls: "4",
    },
  },
  {
    batter1: {
      name: "Player 2",
      runs: "10",
      balls: "15",
    },
    batter2: {
      name: "Player 3",
      runs: "20",
      balls: "25",
    },
  },
  {
    batter1: {
      name: "Player 4",
      runs: "30",
      balls: "25",
    },
    batter2: {
      name: "Player 5",
      runs: "15",
      balls: "10",
    },
  },
  {
    batter1: {
      name: "Player 6",
      runs: "5",
      balls: "8",
    },
    batter2: {
      name: "Player 7",
      runs: "12",
      balls: "18",
    },
  },
  {
    batter1: {
      name: "Player 8",
      runs: "8",
      balls: "12",
    },
    batter2: {
      name: "Player 9",
      runs: "12",
      balls: "15",
    },
  },
  // Add more partnership data objects as needed
];

export const cricketPlayers = [
  {
    name: "C White",
    runs: 10,
    ballPlayed: 6,
    wicket: "c N Deonarine b A Gunaratne",
    fours: 2,
    sixes: 0,
    SR: 33.33,
  },
  {
    name: "B Smith",
    runs: 25,
    ballPlayed: 18,
    wicket: "b M Johnson",
    fours: 3,
    sixes: 1,
    SR: 138.89,
  },
];

export const players = [
  {
    name: "C White",
    age: "35 years",
    best: "159*",
    playerType: "Batsman",
    matches: 12,
    runs: 625,
    avg: 45,
    SR: 89.33,
  },
  {
    name: "A Johnson",
    age: "28 years",
    best: "5/20",
    playerType: "Bowler",
    matches: 15,
    wickets: 82,
    avg: 18.5,
    Econ: 6.75,
  },
];

export const matchesData = [
  {
    team1: "Chennai Super Kings",
    team2: "Royal Challengers Bangladesh",
    date: "Mar 24 / 8:00 PM",
    venue: "5th T20, Narendra Modi Stadium, Ahmedabad",
    imageSrc: "/team.png",
  },
  {
    team1: "Mumbai Indians",
    team2: "Delhi Capitals",
    date: "Mar 25 / 7:30 PM",
    venue: "8th T20, Wankhede Stadium, Mumbai",
    imageSrc: "/team.png",
  },
  {
    team1: "Kolkata Knight Riders",
    team2: "Sunrisers Hyderabad",
    date: "Mar 26 / 4:00 PM",
    venue: "12th T20, Eden Gardens, Kolkata",
    imageSrc: "/team.png",
  },
  {
    team1: "Rajasthan Royals",
    team2: "Punjab Kings",
    date: "Mar 27 / 6:30 PM",
    venue: "15th T20, Sawai Mansingh Stadium, Jaipur",
    imageSrc: "/team.png",
  },
  {
    team1: "Delhi Capitals",
    team2: "Chennai Super Kings",
    date: "Mar 28 / 8:00 PM",
    venue: "18th T20, Feroz Shah Kotla Ground, Delhi",
    imageSrc: "/team.png",
  },
];

export const playerStats = [
  {
    player: "Quinton de Kock",
    team: "SA",
    hundreds: 4,
    matches: 10,
    innings: 10,
    highestScore: 174,
    average: 59.4,
    strikeRate: 107.03,
    runs: 594,
    fifties: 1,
    fours: 57,
    sixes: 21,
  },
  {
    player: "Virat Kohli",
    team: "IND",
    hundreds: 3,
    matches: 11,
    innings: 11,
    highestScore: 117,
    average: 95.63,
    strikeRate: 90.32,
    runs: 765,
    fifties: 6,
    fours: 68,
    sixes: 9,
  },
  {
    player: "Rachin Ravindra",
    team: "NZ",
    hundreds: 3,
    matches: 10,
    innings: 10,
    highestScore: 123,
    average: 64.22,
    strikeRate: 106.45,
    runs: 578,
    fifties: 2,
    fours: 55,
    sixes: 17,
  },
  {
    player: "Player 18",
    team: "Team 18",
    hundreds: 0,
    matches: 0,
    innings: 0,
    highestScore: 0,
    average: 0,
    strikeRate: 0,
    runs: 0,
    fifties: 0,
    fours: 0,
    sixes: 0,
  },
  {
    player: "Player 19",
    team: "Team 19",
    hundreds: 0,
    matches: 0,
    innings: 0,
    highestScore: 0,
    average: 0,
    strikeRate: 0,
    runs: 0,
    fifties: 0,
    fours: 0,
    sixes: 0,
  },
  {
    player: "Player 20",
    team: "Team 20",
    hundreds: 0,
    matches: 0,
    innings: 0,
    highestScore: 0,
    average: 0,
    strikeRate: 0,
    runs: 0,
    fifties: 0,
    fours: 0,
    sixes: 0,
  },
];

export const seasonData = [
  { label: "2023", value: "2023" },
  { label: "2019", value: "2019" },
  { label: "2015", value: "2015" },
  { label: "2011", value: "2011" },
  { label: "2007", value: "2007" },
  { label: "2003", value: "2003" },
  { label: "1999", value: "1999" },
];

export const tournament = [
  { label: "BPL", value: "BPL" },
  { label: "IPL", value: "IPL" },
  { label: "PSL", value: "PSL" },
  { label: "BBL", value: "BBL" },
  { label: "CPL", value: "CPL" },
  { label: "BBL", value: "BBL" },
  { label: "BBL", value: "BBL" },
  { label: "World Cup", value: "World Cup" },
  { label: "Asia Cup", value: "Asia Cup" },
  { label: "T20 WC", value: "T20 WC" },
];

export const playingCountry = [
  { label: "All", value: "All" },
  { label: "Bangladesh", value: "Bangladesh" },
  { label: "India", value: "India" },
  { label: "Pakistan", value: "PSL" },
  { label: "Sri Lanka ", value: "Sri Lanka" },
  { label: "Australia", value: "Australia" },
  { label: "New zealand", value: "New zealand" },
];

export const record = [
  { label: "Runs", value: "Runs" },
  { label: "Fifties", value: "Fifties" },
  { label: "Wickets", value: "Wickets" },
  { label: "Hundreds", value: "Hundreds" },
  { label: "Sixes", value: "Sixes" },
  { label: "Fours", value: "Fours" },
  { label: "Highest Strike Rate", value: "Highest Strike Rate" },
];

export const venueData = [
  { label: "All", value: "All" },

  {
    label: "Dubai International Cricket Stadium, Dubai",
    value: "Dubai International Cricket Stadium, Dubai",
  },
  {
    label: "Sharjah Cricket Stadium, Sharjah",
    value: "Sharjah Cricket Stadium, Sharjah",
  },
  { label: "Gaddafi Stadium, Lahore", value: "Gaddafi Stadium, Lahore" },
  {
    label: "National Bank Cricket Arena, Karachi",
    value: "National Bank Cricket Arena, Karachi",
  },
  {
    label: "Sheikh Zayed Stadium, Abu Dhabi",
    value: "Sheikh Zayed Stadium, Abu Dhabi",
  },
  {
    label: "Rawalpindi Cricket Stadium, Rawalpindi",
    value: "Rawalpindi Cricket Stadium, Rawalpindi",
  },
  {
    label: "Multan Cricket Stadium, Multan",
    value: "Multan Cricket Stadium, Multan",
  },
];

export const cricketFormatData = [
  { label: "Test", value: "Test" },
  { label: "ODI", value: "ODI" },
  { label: "T20I", value: "T20I" },
  { label: "T10", value: "T10" },
  { label: "Twenty20", value: "Twenty20" },
  { label: "One-Day", value: "One-Day" },
  { label: "First-Class", value: "First-Class" },
];
