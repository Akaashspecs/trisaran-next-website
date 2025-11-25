const TermsAndConditions = ({ setPrivacyPageOpen }) => {
  const privacyPolicyText = [
    {
      id: 1,
      heading: "Acceptance of Terms",
      desc: "By using our website, mobile application, or applying for any of our financial products Credit Card, Instant Loan, Personal Loan, Business Loan, Home Loan, Loan Against Property, Education Loan, Auto Loan, Savining Accounts, Demat Accounts, Micro Loan, Group Loan, Private Funding and more, you agree to be bound by these Terms and our Privacy Policy.",
    },
    {
      id: 2,
      heading: "Eligibility",
      desc: "To use our services, you must:",
      list: [
        "Be an Indian citizen above 18 years of age",
        "Provide valid KYC and income-related documents",
        "Have a verifiable address and contact information",
      ],
      desc2:
        "We reserve the right to approve or reject applications at our sole discretion.",
    },
    {
      id: 3,
      heading: "Services Offered",
      desc: "Trisaran Money offers the following services through backed models:",
      desc2:
        "Credit Card, Instant Loan, Personal Loan, Business Loan, Home Loan, Loan Against Property, Education Loan, Auto Loan, Savining Accounts, Demat Accounts, Micro Loan, Group Loan, Private Funding and more.",
      note: "Loan amounts, interest rates, tenure, and repayment terms are based on internal credit assessment and risk profiling.",
    },

    {
      id: 4,
      heading: "User Obligations",
      desc: "As a user, you agree to:",
      list: [
        "Provide accurate and complete information",
        "Use the services legally and responsibly",
        "Repay loans on time as per agreed terms",
        "Not misuse or duplicate our content or technology",
      ],
      desc2:
        "Providing false information or attempting fraud will lead to legal action and blacklisting.",
    },
    {
      id: 5,
      heading: "Charges & Fees",
      desc: "YAll applicable charges including processing fees, interest rates, penalties for late payments, etc., will be clearly mentioned in your loan agreement. These charges may vary depending on the product and profile.",
    },
    {
      id: 6,
      heading: "Loan Approval & Disbursement",
      desc: "Loan approval is subject to internal verification, creditworthiness, and documentation. Approval is not guaranteed for every applicant. Disbursement may take 1–7 business days after successful verification.",
    },
    {
      id: 7,
      heading: "Data Usage & Consent",
      desc: "By applying for any service, you authorize Trisaran Money to:",
      list: [
        "Use your data for credit assessment and processing",
        "Share it with partners like NBFCs, credit bureaus, and regulators as required",
        "Contact you via SMS, call, email, or WhatsApp for transaction updates and service communication",
      ],
    },
    {
      id: 8,
      heading: "Limitation of Liability",
      desc: "Trisaran Money shall not be liable for any indirect, incidental, or consequential damages arising from:",
      list: [
        "System outages, delays, or service interruptions",
        "Rejection of applications",
        "Data misuse by third-party platforms beyond our control",
      ],
    },
    {
      id: 9,
      heading: "Intellectual Property",
      desc: "All logos, content, branding, and technology used by Trisaran Money are proprietary. Unauthorized use or reproduction is strictly prohibited.",
    },
    {
      id: 10,
      heading: "Termination of Services",
      desc: "We reserve the right to suspend or terminate your access to our services if:",
      list: [
        "You violate these terms",
        "You default on payments",
        "You are found to be involved in fraudulent activities",
      ],
    },
    {
      id: 11,
      heading: "Changes to Terms",
      desc: "Trisaran Money may update these Terms & Conditions at any time without prior notice. The updated version will be posted on our official platform. Continued use of services implies acceptance of changes.",
    },
    {
      id: 12,
      heading: "Limitation of Liability",
      desc: "For any queries regarding these terms, please contact",
      list: [
        "Email: contact@trisaranmoney.in",
        "Address: Anjanvel Bouddhwadi, RGPPL Anjanvel, Guhagar, Ratnagiri, Maharashtra 415634",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center ">
      <div className=" md:p-14 p-5   shadow-lg rounded-2xl  ">
        <div className="flex w-full justify-between">
          <h3 className="text-xl font-semibold">Terms And Conditions</h3>
        </div>

        <div className="text-[14px] text-gray-700 mt-4">
          Welcome to Trisaran Money, By accessing or using our services, you
          agree to the following Terms & Conditions. Please read them carefully
          before proceeding.
        </div>
        <div className="flex flex-col gap-4 mt-5 text-gray-500">
          {privacyPolicyText.map((item) => (
            <div key={item.id}>
              <div className="flex gap-2 text-[15px] font-semibold">
                {item.id} <h4>{item.heading}</h4>
              </div>
              <div className="text-[14px]  mt-3">{item.desc}</div>
              <div className="my-2 text-gray-500 flex flex-col gap-1">
                {item.list &&
                  item.list.map((text, i) => (
                    <div
                      key={i}
                      className="ml-2 text-[14px]  mt-1 flex gap-2 items-center"
                    >
                      {" "}
                      <div className="text-[9px]">●</div>
                      {text}
                    </div>
                  ))}
              </div>
              {item.desc2 && <div className="text-[14px]">{item.desc2}</div>}
              {item.note && (
                <div className="font-semibold flex gap-2 text-[14px] md:text-[12px] my-3">
                  <div className=" ">Note:-</div>
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-blue-500/20 text-blue-500 p-3 text-[14px] rounded-xl mt-3 text-center">
          By using Trisaran Money, you agree to these Terms & Conditions. Your
          trust and cooperation help us build a stronger, more financially
          inclusive India.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
