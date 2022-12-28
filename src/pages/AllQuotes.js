import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Shokh", text: "Learning react is fun" },
  {
    id: "q2",
    author: "Ulug",
    text: " Playing pubg is fun, especially with a broken monitor",
  },
  { id: "q3", author: "Bobur", text: "Being useless is useful" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
