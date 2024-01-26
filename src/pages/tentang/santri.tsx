import Column from "@/src/components/Common/Column";
import PageHeader from "@/src/components/Common/PageHeader";
import PageSection from "@/src/components/Common/PageSection";
// import Row from "@/src/components/Common/Row";
import Text from "@/src/components/Common/Text";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/router";

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  kelas: string,
  jumlah: number,
  lakiLaki: number,
  perempuan: number,
) {
  let data: Array<{
    no: number;
    namaSantri: string;
    jenisKelamin: string;
    tempatLahir: string;
    tanggalLahir: string;
    agama: string;
    kewarganegaraan: string;
    namaAyah: string;
    namaIbu: string;
  }> = [];

  if (kelas === "Kelas 6") {
    data = [
      {
        no: 1,
        namaSantri: 'Muhammad Risky Sadikin',
        jenisKelamin: 'Laki - Laki',
        tempatLahir: 'Sumedang',
        tanggalLahir: '04-12-2011',
        agama: 'Islam',
        kewarganegaraan: 'WNI',
        namaAyah: 'Ikin Sadikin',
        namaIbu: 'Yeti Karyati',
      },
      {
        no: 2,
        namaSantri: 'Narendra Cahya Ramadhan',
        jenisKelamin: 'Laki - Laki',
        tempatLahir: 'Bandung',
        tanggalLahir: '23-08-2011',
        agama: 'Islam',
        kewarganegaraan: 'WNI',
        namaAyah: 'Adang Hendra Apitkan',
        namaIbu: 'Ernawati',
      },
      {
        no: 3,
        namaSantri: 'Qarina Nur Rahmah',
        jenisKelamin: 'Perempuan',
        tempatLahir: 'Sumedang',
        tanggalLahir: '26-07-2011',
        agama: 'Islam',
        kewarganegaraan: 'WNI',
        namaAyah: 'Kusnadi',
        namaIbu: 'Itit Wihati',
      },
      {
        no: 4,
        namaSantri: 'Warsinah',
        jenisKelamin: 'Perempuan',
        tempatLahir: 'Sumedang',
        tanggalLahir: '17-10-2011',
        agama: 'Islam',
        kewarganegaraan: 'WNI',
        namaAyah: 'Daryo',
        namaIbu: 'Cicih',
      },
      {
        no: 5,
        namaSantri: 'Zaskia Salwa Nabila',
        jenisKelamin: 'Perempuan',
        tempatLahir: 'Sumedang',
        tanggalLahir: '22-10-2011',
        agama: 'Islam',
        kewarganegaraan: 'WNI',
        namaAyah: 'Gugun Giantoro',
        namaIbu: 'Tati Daryati',
      }
    ];
  } else if (kelas === "Kelas 5") {
    data = [
      {
        no: 1,
        namaSantri: 'Bunga Rizky Amalia',
        jenisKelamin: 'Perempuan',
        tempatLahir: 'Sumedang',
        tanggalLahir: '02-07-2013',
        agama: 'Islam',
        kewarganegaraan: 'WNI',
        namaAyah: 'Mohamad Ifang Rifaldy',
        namaIbu: 'Rita Nurlina Agustin',
      },
      {
        no: 2,
        namaSantri: 'Hafidz Utsman',
        jenisKelamin: 'Laki - Laki',
        tempatLahir: 'Sumedang',
        tanggalLahir: '16-06-2012',
        agama: 'Islam',
        kewarganegaraan: 'WNI',
        namaAyah: 'Dede Suara',
        namaIbu: "Siti Sya'adah",
      },
      {
        no: 3,
        namaSantri: 'Heru Sapero',
        jenisKelamin: 'Laki - Laki',
        tempatLahir: 'Sumedang',
        tanggalLahir: '25-01-2013',
        agama: 'Islam',
        kewarganegaraan: 'WNI',
        namaAyah: 'Yayat Sudaryat',
        namaIbu: 'Nunung Nurhayati',
      },
      {
        no: 4,
        namaSantri: 'Kamelia Ramadani',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-06-01',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Taryo',
        namaIbu: 'Suminar',
      },
      {
        no: 5,
        namaSantri: 'Latifa Yuniar',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-11-06',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Maman Hermawan',
        namaIbu: 'Ara Rosidah',
      },
      {
        no: 6,
        namaSantri: 'Marsel Tiramukti',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-01-19',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Surya',
        namaIbu: 'Cacih Winarti',
      },
      {
        no: 7,
        namaSantri: 'M. Aditiya Pratama',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2012-03-06',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Komarudin',
        namaIbu: 'Wina K',
      },
      {
        no: 8,
        namaSantri: 'Nurani Syaqila Putri',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-06-21',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Nuryanto',
        namaIbu: 'Ani Fitriani',
      },
      {
        no: 9,
        namaSantri: 'Rizki Mutaqien',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2012-03-10',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Agus Mustofa',
        namaIbu: 'Wiwin M',
      },
      // Data lain untuk kelas 5 bisa ditambahkan di sini
    ];
  } else if (kelas === "Kelas 4") {
    data = [
      {
        no: 1,
        namaSantri: 'Abida Sholehatunnisa setia',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-09-30',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'CACAK SETIA',
        namaIbu: 'WIWIN',
      },
      {
        no: 2,
        namaSantri: 'FAIRUZ AL FAHMI',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2014-03-26',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'AJID BAHRUDIN',
        namaIbu: 'ENI HERNIATI',
      },
      {
        no: 3,
        namaSantri: 'FARREL SATRIA NUGRAHA',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-10-04',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'FERY BUDIANTO',
        namaIbu: 'KOMALA',
      },
      {
        no: 4,
        namaSantri: 'INDRA PERMANA',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-04-08',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'SUMARNA',
        namaIbu: 'DEWI SRIASTUTI',
      },
      {
        no: 5,
        namaSantri: 'MARWAH QURRATA AYUNI',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-03-01',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'TAHYUDIN',
        namaIbu: 'INDAH TRIANA',
      },
      {
        no: 6,
        namaSantri: 'MUHAMAD SULTAN DARMAWAN',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-08-26',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'YUSUP',
        namaIbu: 'TETI SRI HARYATI',
      },
      {
        no: 7,
        namaSantri: 'Neng Wilda Aulia zahra',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-03-02',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'AMIN',
        namaIbu: 'SITI JUBAEDAH',
      },
      {
        no: 8,
        namaSantri: 'Shafa qurrata ayuni',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-03-01',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'TAHYUDIN',
        namaIbu: 'INDAH TRIANA',
      },
      // Data lain untuk kelas 4 bisa ditambahkan di sini
    ];
  } else if (kelas === "Kelas 3") {
    data = [
      {
        no: 1,
        namaSantri: 'Aditya Naufal Pratama Wijaya',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2014-01-15',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Dicky Pratama Wijaya',
        namaIbu: 'Nurul Aprilliani',
      },
      {
        no: 2,
        namaSantri: 'AI SRI DIANI',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2014-06-06',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Cardi Winardi',
        namaIbu: 'Dewi Hati',
      },
      {
        no: 3,
        namaSantri: 'Arkenzo Bilal Khairan',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2014-08-25',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Abbas Basyari',
        namaIbu: 'Raden Intan Sri Suciati',
      },
      {
        no: 4,
        namaSantri: 'Elik Wi\'andi',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2013-11-09',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Jejen Zaenal Furkon',
        namaIbu: 'Siti Rodiah',
      },
      {
        no: 5,
        namaSantri: 'Fabian Nurfadilah',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2014-06-23',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Dede Wahyu Supendi',
        namaIbu: 'Warnati',
      },
      {
        no: 6,
        namaSantri: 'Ferly Nizar Rahman',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2014-11-17',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Rahman',
        namaIbu: 'Anny Sri Rahayu',
      },
      {
        no: 7,
        namaSantri: 'KHANZA NUR AL-FATHUNNISA',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2014-05-15',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Adang Jaenudin',
        namaIbu: 'Mimin Casmini',
      },
      {
        no: 8,
        namaSantri: 'KRESNA KURNIAWAN',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2014-11-02',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Cecep Somantri',
        namaIbu: 'Niknik Wilarni',
      },
      {
        no: 9,
        namaSantri: 'Muhamad Rasya Aditya',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2015-01-03',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Dede Irman Nuryana',
        namaIbu: 'Imas Masitoh',
      },
      {
        no: 10,
        namaSantri: 'Qanita Aulya Cesha',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'JAKARTA',
        tanggalLahir: '2015-04-14',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Tarso',
        namaIbu: 'Siti Maesyaroh',
      },
      {
        no: 11,
        namaSantri: 'Rian Kurniawan',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2015-01-25',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'TATA KARNATA',
        namaIbu: 'SURYATI',
      },
      {
        no: 12,
        namaSantri: 'TASYA NAYA NAYLA',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2015-06-22',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'TOTO HIDAYAT',
        namaIbu: 'SANTI MULYANI',
      },
      // Data lain untuk kelas 3 bisa ditambahkan di sini
    ];
  } else if (kelas === "Kelas 2") {
    data = [
      {
        no: 1,
        namaSantri: 'ARSYAD ABDURROSYID',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2015-08-19',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'MUHAMMAD IKHSANUDIN',
        namaIbu: 'NENDAWATI',
      },
      {
        no: 2,
        namaSantri: 'FIRMAN ARDIANSYAH',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2015-10-21',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Dudi Juhendi',
        namaIbu: 'Dedeh Kurniasih',
      },
      {
        no: 3,
        namaSantri: 'KANIA PUTRI',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-03-13',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Taryono',
        namaIbu: 'Misrah',
      },
      {
        no: 4,
        namaSantri: 'KINANTI KAMILIA ULFA',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2015-12-28',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Tedi Mulyadi',
        namaIbu: 'Neng Yulianti',
      },
      {
        no: 5,
        namaSantri: 'RAISYA SUTRISNO NAIRA THAFANA',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2015-10-27',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'CECEP SUTRISNO',
        namaIbu: 'LARA RISTARIA KARTIKA',
      },
      {
        no: 6,
        namaSantri: 'Sandi Maulana',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2015-05-07',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Edi Juardi',
        namaIbu: 'Dastini',
      },
      {
        no: 7,
        namaSantri: 'Tania Tri Santika',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-02-17',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Yoyo',
        namaIbu: 'Rohaeti',
      },
      // Data lain untuk kelas 2 bisa ditambahkan di sini
    ];
  } else if (kelas === "Kelas 1") {
    data = [
      {
        no: 1,
        namaSantri: 'ANWAR WIJAYA NUGRAHA',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-03-19',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Muhamad Emed',
        namaIbu: 'Lilis Lisnawati',
      },
      {
        no: 2,
        namaSantri: 'Faiz Khenzi Hamizan',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-11-17',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Endi Firmansyah',
        namaIbu: 'Susi Suherti',
      },
      {
        no: 3,
        namaSantri: 'Febrian Sidik Rosidin',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2017-02-20',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Asep Sunandar',
        namaIbu: 'Denih Haryati',
      },
      {
        no: 4,
        namaSantri: 'FEYZA DEWI ANJANI',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-11-02',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'DIANA',
        namaIbu: 'YULIANI',
      },
      {
        no: 5,
        namaSantri: 'Haini Noparinda',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-11-22',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Heri Wilantara',
        namaIbu: 'Minah',
      },
      {
        no: 6,
        namaSantri: 'KIRANI PUTRI',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-05-16',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Karmadi',
        namaIbu: 'Cacih Sumiarsih',
      },
      {
        no: 7,
        namaSantri: 'MUHAMAD NASIR',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-04-02',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Mumu Muharam',
        namaIbu: 'Mimin Sarmini',
      },
      {
        no: 8,
        namaSantri: 'Nadin Naila Rafany',
        jenisKelamin: 'PEREMPUAN',
        tempatLahir: 'JAKARTA',
        tanggalLahir: '2016-10-03',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Cece Ruhiat',
        namaIbu: 'Caryati',
      },
      {
        no: 9,
        namaSantri: 'Naufal Zumarullah Ulyaddin',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-05-28',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Kosnadi',
        namaIbu: 'Awang Wiarsih',
      },
      {
        no: 10,
        namaSantri: 'Willy Oktavian Putrayana',
        jenisKelamin: 'LAKI - LAKI',
        tempatLahir: 'SUMEDANG',
        tanggalLahir: '2016-10-19',
        agama: 'ISLAM',
        kewarganegaraan: 'WNI',
        namaAyah: 'Suryana',
        namaIbu: 'Siti Mulyani',
      },
      // Data lain untuk kelas 1 bisa ditambahkan di sini
    ];
  }

  return {
    kelas,
    jumlah,
    lakiLaki,
    perempuan,
    data,
  };
}


function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.kelas}
        </TableCell>
        <TableCell align="right">{row.jumlah}</TableCell>
        <TableCell align="right">{row.lakiLaki}</TableCell>
        <TableCell align="right">{row.perempuan}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Data Santri
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}>No.</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Nama santri</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Jenis Kelamin</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Tempat Lahir</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Tanggal Lahir</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Agama</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Kewarganegaraan</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Nama Ayah</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Nama Ibu</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.data.map((dataRow) => (
                    <TableRow key={dataRow.namaSantri}>
                      <TableCell component="th" scope="row">
                        {dataRow.no}
                      </TableCell>
                      <TableCell>{dataRow.namaSantri}</TableCell>
                      <TableCell>{dataRow.jenisKelamin}</TableCell>
                      <TableCell>{dataRow.tempatLahir}</TableCell>
                      <TableCell>{dataRow.tanggalLahir}</TableCell>
                      <TableCell>{dataRow.agama}</TableCell>
                      <TableCell>{dataRow.kewarganegaraan}</TableCell>
                      <TableCell>{dataRow.namaAyah}</TableCell>
                      <TableCell>{dataRow.namaIbu}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Kelas 6', 5, 2, 3),
  createData('Kelas 5', 9, 5, 4),
  createData('Kelas 4', 8, 4, 4),
  createData('Kelas 3', 12, 8, 4),
  createData('Kelas 2', 7, 3, 4),
  createData('Kelas 1', 10, 6, 4),
];

export default function CollapsibleTable() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader bg={departmentColors.about} title={t("About.Santri.Title")} />
      <PageSection>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell style={{ fontWeight: 'bold' }}>Kelas</TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>Jumlah</TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>Laki - Laki</TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>Perempuan</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.kelas} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageSection>
    </Stack>
  );
}
