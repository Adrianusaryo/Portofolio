interface ICONTACTFIELDS {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  rows?: number;
}

export const CONTACTFIELDS: ICONTACTFIELDS[] = [
  {
    id: "name",
    label: "Nama Lengkap",
    type: "text",
    placeholder: "",
  },
  {
    id: "email",
    label: "Email Anda",
    type: "email",
    placeholder: "",
  },
  {
    id: "message",
    label: "Pesan",
    type: "textarea",
    placeholder: "",
    rows: 3,
  },
];
