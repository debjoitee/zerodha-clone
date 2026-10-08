import React, { useState } from "react";

const categoriesData = [
  {
    id: "account-opening",
    title: "Account Opening",
    icon: "bi-plus-circle",
    items: [
      { id: "resident-individual", label: "Resident individual" },
      { id: "minor", label: "Minor" },
      { id: "nri", label: "Non Resident Indian (NRI)" },
      { id: "company", label: "Company, Partnership, HUF and LLP" },
      { id: "glossary", label: "Glossary" },
    ],
  },
  {
    id: "zerodha-account",
    title: "Your Zerodha Account",
    icon: "bi-person-circle",
    items: [],
  },
  {
    id: "kite",
    title: "Kite",
    icon: "bi-arrow-repeat",
    items: [],
  },
  {
    id: "funds",
    title: "Funds",
    icon: "bi-currency-rupee",
    items: [],
  },
  {
    id: "console",
    title: "Console",
    icon: "bi-at",
    items: [],
  },
  {
    id: "coin",
    title: "Coin",
    icon: "bi-clock-history",
    items: [],
  },
];

const questionsData = {
  "resident-individual": [
    {
      id: "q1",
      question: "How to open a Zerodha demat account online?",
      important: [
        "AMC is free for the first year for all resident individual accounts opened on or after 1st June 2026.",
        "If you transfer your holdings from another broker to Zerodha, Zerodha refunds the transfer charges your current broker deducts, up to ₹30 per stock, capped at ₹500 in total. This isn't just for new accounts. If you already have a Zerodha account and are moving stocks from another broker, we'll refund those charges too.",
      ],
      videoTitle:
        "How to open a free demat account with Zerodha online | Step-by-Step guide",
    },
    {
      id: "q2",
      question:
        "Can I open a demat account if I already have a trading or commodity account?",
    },
    {
      id: "q3",
      question:
        "What details does Zerodha collect when you open an account, and why?",
    },
    {
      id: "q4",
      question:
        "Can I open a trading and demat account with Zerodha if I have an existing account with another broker?",
    },
    {
      id: "q5",
      question:
        "Can I open a Zerodha account online without Aadhaar linked to a mobile number?",
    },
    {
      id: "q6",
      question: "Can I open a trading account without opening a demat account?",
    },
    {
      id: "q7",
      question:
        "Can I open a commodity account without opening an equity trading and demat account?",
    },
    {
      id: "q8",
      question:
        "Can I link my demat account from another broker to my Zerodha trading account?",
    },
    {
      id: "q9",
      question:
        "Can I close my demat account while keeping my trading account open?",
    },
  ],
};

function SupportCategories() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleItemClick = (category, item) => {
    setSelectedItem({ category, item });
    setSelectedQuestion(null);
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const selectedCategory = categoriesData.find((cat) =>
    cat.items.some((it) => it.id === selectedItem?.item.id),
  );

  return (
    <div>
      {/* Header strip */}
      <div className="bg-light py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold m-0">Support Portal</h2>
            <button className="btn btn-primary">My tickets</button>
          </div>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Eg: How do I open my account, How do i activate F&O..."
            />
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          {/* Left: Accordion categories */}
          <div className="col-md-5">
            {categoriesData.map((category) => (
              <div key={category.id} className="border rounded mb-2">
                <div
                  className="d-flex justify-content-between align-items-center p-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="d-flex align-items-center gap-2">
                    <i className={`bi ${category.icon} text-primary fs-5`}></i>
                    <span className="fw-semibold">{category.title}</span>
                  </div>
                  <i
                    className={`bi ${
                      expandedCategory === category.id
                        ? "bi-chevron-up"
                        : "bi-chevron-down"
                    }`}
                  ></i>
                </div>

                {expandedCategory === category.id &&
                  category.items.length > 0 && (
                    <ul className="list-unstyled ps-5 pb-3 mb-0">
                      {category.items.map((item) => (
                        <li key={item.id} className="mb-2">
                          <span
                            className={`text-primary ${
                              selectedItem?.item.id === item.id
                                ? "text-decoration-underline fw-semibold"
                                : "text-decoration-none"
                            }`}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleItemClick(category, item)}
                          >
                            {item.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}
          </div>

          {/* Right: Sidebar OR questions list  */}
          <div className="col-md-7">
            {selectedQuestion ? (
              <div>
                <nav className="mb-3 small">
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    Home
                  </span>{" "}
                  <i className="bi bi-chevron-right small mx-1"></i>
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    {selectedCategory?.title}
                  </span>{" "}
                  <i className="bi bi-chevron-right small mx-1"></i>
                  <span
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedQuestion(null)}
                  >
                    {selectedItem?.item.label}
                  </span>{" "}
                  <i className="bi bi-chevron-right small mx-1"></i>
                  <span>Online</span>
                </nav>

                <h3 className="fw-bold mb-4">{selectedQuestion.question}</h3>

                {selectedQuestion.important && (
                  <div className="border-start border-warning border-4 bg-warning-subtle p-4 mb-4">
                    <h6 className="text-warning fw-bold mb-3">Important</h6>
                    <ul className="mb-0 ps-3">
                      {selectedQuestion.important.map((point, index) => (
                        <li key={index} className="mb-3">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedQuestion.videoTitle && (
                  <div
                    className="position-relative rounded overflow-hidden"
                    style={{
                      background: "#000",
                      height: "220px",
                      cursor: "pointer",
                    }}
                  >
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3 text-white">
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <div
                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: "28px", height: "28px" }}
                          >
                            <i className="bi bi-play-fill"></i>
                          </div>
                          <span className="fw-semibold">Zerodha</span>
                        </div>
                        <div className="fw-semibold">
                          {selectedQuestion.videoTitle}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : selectedItem ? (
              <div>
                <nav className="mb-3">
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    Home
                  </span>{" "}
                  <i className="bi bi-chevron-right small mx-1"></i>
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    {selectedCategory?.title}
                  </span>{" "}
                  <i className="bi bi-chevron-right small mx-1"></i>
                  <span>{selectedItem.item.label}</span>
                </nav>

                <h3 className="fw-bold mb-3">{selectedItem.item.label}</h3>

                <div className="border rounded p-3 mb-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">Online</span>
                    <i className="bi bi-chevron-up"></i>
                  </div>
                  <ol className="mt-3 mb-0">
                    {(questionsData[selectedItem.item.id] || []).map((q) => (
                      <li key={q.id} className="mb-2">
                        <span
                          className="text-primary"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleQuestionClick(q)}
                        >
                          {q.question}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-warning-subtle border-start border-warning border-4 p-3 mb-4">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="#" className="text-decoration-underline">
                        Current Takeovers and Delisting – September 2026
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-underline">
                        Surveillance measure on scrips - September 2026
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border rounded">
                  <div className="bg-light fw-semibold p-3 border-bottom">
                    Quick links
                  </div>
                  <ul className="list-unstyled p-3 mb-0">
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        1. Track account opening
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        2. Track segment activation
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        3. Intraday margins
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none">
                        4. Kite user manual
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        5. Learn how to create a ticket
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportCategories;
