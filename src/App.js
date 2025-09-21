import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <>
      <Accordion />
    </>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((data, i) => (
        <AccordionItem key={i} data={data} num={i} />
      ))}
    </div>
  );
}

function AccordionItem({ data, num }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      {" "}
      <p className="number" onClick={handleToggle}>
        {`${num + 1}`.padStart(2, "0")}
      </p>
      <p className="title text" onClick={handleToggle}>
        {data.title}
      </p>
      <p className="icon" onClick={handleToggle}>
        {" "}
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && (
        <div className="content-box">
          <ul>
            <li>{data.text}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
