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
    label: "Nama Anda",
    type: "text",
    placeholder: "Masukkan nama Anda...",
  },
  {
    id: "email",
    label: "Email Anda",
    type: "email",
    placeholder: "Masukkan alamat email yang dapat dihubungi...",
  },
  {
    id: "message",
    label: "Pesan",
    type: "textarea",
    placeholder: "Tulis pesan atau pertanyaan Anda di sini...",
    rows: 3,
  },
];
