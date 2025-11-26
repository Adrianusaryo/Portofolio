export interface IProject {
  image: string;
  name: string;
  description: string;
  tools: string[];
  path?: string;
}

export const PROJECTS: IProject[] = [
  {
    image: "",
    name: "Sistem Pengawasan PMSE",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "CodeIgniter",
      "Bootstrap",
      "AOS",
      "Echarts",
      "Highcharts",
    ],
    description:
      "Website PMSE yang berfungsi untuk melakukan pengawasan perdagangan melalui sistem elektronik, termasuk pengecekan pelaku usaha dan pemantauan aktivitas transaksi.",
    path: "https://simpktn.kemendag.go.id/pmse/#informasi",
  },
  {
    image: "",
    name: "Nusantara",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "Vue.js",
      "Bootstrap",
      "Axios",
      "Filament",
      "Midtrans",
    ],
    description:
      "Nusantara adalah platform pemesanan makanan berbasis website yang terhubung Midtrans untuk pembayaran aman, mendukung pesanan dine-in dan delivery.",
    path: "",
  },
  {
    image: "",
    name: "E-Library MBK",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Vue.js",
      "Laravel",
      "Bootstrap",
      "Axios",
      "Filament",
      "Chart.js",
    ],
    description:
      "E-Library MBK adalah platform berbasis website yang menyediakan layanan peminjaman buku serta fitur pengiriman cerpen dari pengguna, sehingga memudahkan akses literasi dan partisipasi kreatif.",
    path: "",
  },
];
