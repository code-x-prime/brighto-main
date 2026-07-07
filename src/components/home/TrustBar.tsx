"use client";

import { Logos3 } from "../ui/logos3";



const clientList = [
  // Banking
  { id: "c-1", name: "HDFC Bank" },
  { id: "c-2", name: "ICICI Bank" },
  { id: "c-3", name: "Kotak Mahindra" },
  { id: "c-4", name: "Canara Bank" },
  { id: "c-5", name: "Axis Bank" },
  { id: "c-6", name: "Yes Bank" },
  { id: "c-7", name: "Federal Bank" },
  { id: "c-8", name: "IndusInd Bank" },
  { id: "c-9", name: "South Indian Bank" },
  { id: "c-10", name: "Karnataka Bank" },
  { id: "c-11", name: "City Union Bank" },
  { id: "c-12", name: "DCB Bank" },

  // NBFC
  { id: "c-13", name: "Muthoot Finance" },
  { id: "c-14", name: "Manappuram Finance" },
  { id: "c-15", name: "Shriram Finance" },
  { id: "c-16", name: "TVS Credit" },
  { id: "c-17", name: "Bajaj Finserv" },
  { id: "c-18", name: "IIFL Finance" },
  { id: "c-19", name: "Home Credit" },
  { id: "c-20", name: "Hero FinCorp" },
  { id: "c-21", name: "Mahindra Finance" },
  { id: "c-22", name: "Tata Capital" },
  { id: "c-23", name: "Aditya Birla" },
  { id: "c-24", name: "L&T Finance" },

  // Fintech
  { id: "c-25", name: "Lendingkart" },
  { id: "c-26", name: "KreditBee" },
  { id: "c-27", name: "Slice" },
  { id: "c-28", name: "Cashe" },
  { id: "c-29", name: "Faircent" },
  { id: "c-30", name: "MoneyTap" },
  { id: "c-31", name: "PaySense" },
  { id: "c-32", name: "StashFin" },
  { id: "c-33", name: "EarlySalary" },
  { id: "c-34", name: "Navi" },
  { id: "c-35", name: "Fibe" },
  { id: "c-36", name: "Pine Labs" },

  // Insurance
  { id: "c-37", name: "HDFC Life" },
  { id: "c-38", name: "SBI Life" },
  { id: "c-39", name: "Max Life" },
  { id: "c-40", name: "Bajaj Allianz" },
  { id: "c-41", name: "ICICI Prudential" },
  { id: "c-42", name: "Tata AIG" },
  { id: "c-43", name: "Star Health" },
  { id: "c-44", name: "Niva Bupa" },

  // Others from user list
  { id: "c-45", name: "Fullerton India" },
  { id: "c-46", name: "DHFL" },
  { id: "c-47", name: "Indiabulls" },
  { id: "c-48", name: "Capri Global" },
  { id: "c-49", name: "Unofin" },
  { id: "c-50", name: "Can Fin Homes" },
  { id: "c-51", name: "Srei" },
  { id: "c-52", name: "Reliance Capital" },
  { id: "c-53", name: "Hinduja" },
  { id: "c-54", name: "Ummeed" },
  { id: "c-55", name: "OfBusiness" },
  { id: "c-56", name: "Karvy" },
  { id: "c-57", name: "Roha" },
  { id: "c-58", name: "EY" },
  { id: "c-59", name: "Ziploan" },
  { id: "c-60", name: "Muthoot Blue" },
  { id: "c-61", name: "WheelsEMI" },
  { id: "c-62", name: "Growth Source" },
  { id: "c-63", name: "Equitas" },
  { id: "c-64", name: "Shivalik" },
  { id: "c-65", name: "Ujjivan" }
];

export default function TrustBar() {
  return (
    <div className="border-y border-[#E2E8F0] bg-[#F8FAFC]/50 py-4">
      <Logos3
        heading="Trusted by 500+ Top Financial Institutions & Enterprises"
        logos={clientList}
      />
    </div>
  );
}
