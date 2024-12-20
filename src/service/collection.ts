import { createListCollection } from "@chakra-ui/react";

export const grade = createListCollection({
  items: [
    { label: "Pre Nursery", value: "pre-nursery" },
    { label: "Nursery", value: "nursery" },
    { label: "LKG", value: "LKG" },
    { label: "UKG", value: "UKG" },
    { label: "KG", value: "KG" },
    { label: "GRADE 1", value: "first class" },
    { label: "GRADE 2", value: "second class" },
    { label: "GRADE 3", value: "third class" },
    { label: "GRADE 4", value: "fourth class" },
    { label: "GRADE 5", value: "fifth class" },
    { label: "GRADE 6", value: "sixth class" },
    { label: "GRADE 7", value: "seventh class" },
    { label: "GRADE 8", value: "eighth class" },
    { label: "GRADE 9", value: "nineth class" },
    { label: "GRADE 10", value: "tenth class" },
    { label: "GRADE 11", value: "eleventh class" },
    { label: "GRADE 12", value: "twelfth class" },
  ],
});
export const relation = createListCollection({
  items: [
    { label: "Father", value: "father" },
    { label: "Mother", value: "mother" },
    { label: "Gaurdian", value: "gaurdian" },
    { label: "Other", value: "other" },
  ],
});
export const statesIndia = createListCollection({
  items: [
    { label: "Uttarakhand", value: "uttarakhand" },
    { label: "Delhi", value: "delhi" },
    { label: "Andhra Pradesh", value: "andhra-pradesh" },
    { label: "Arunachal Pradesh", value: "arunachal-pradesh" },
    { label: "Assam", value: "assam" },
    { label: "Bihar", value: "bihar" },
    { label: "Chhattisgarh", value: "chhattisgarh" },
    { label: "Goa", value: "goa" },
    { label: "Gujarat", value: "gujarat" },
    { label: "Haryana", value: "haryana" },
    { label: "Himachal Pradesh", value: "himachal-pradesh" },
    { label: "Jharkhand", value: "jharkhand" },
    { label: "Karnataka", value: "karnataka" },
    { label: "Kerala", value: "kerala" },
    { label: "Madhya Pradesh", value: "madhya-pradesh" },
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Manipur", value: "manipur" },
    { label: "Meghalaya", value: "meghalaya" },
    { label: "Mizoram", value: "mizoram" },
    { label: "Nagaland", value: "nagaland" },
    { label: "Odisha", value: "odisha" },
    { label: "Punjab", value: "punjab" },
    { label: "Rajasthan", value: "rajasthan" },
    { label: "Sikkim", value: "sikkim" },
    { label: "Tamil Nadu", value: "tamil-nadu" },
    { label: "Telangana", value: "telangana" },
    { label: "Tripura", value: "tripura" },
    { label: "Uttar Pradesh", value: "uttar-pradesh" },
    { label: "West Bengal", value: "west-bengal" },
  ],
});

export const enqSource = createListCollection({
  items: [
    { label: "Website", value: "website" },
    { label: "Referral", value: "referral" },
    { label: "Other", value: "other" },
  ],
});
