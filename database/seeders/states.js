"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
        let states = [
            {
                "name": "Badakhshan",
                "isoCode": "BDS",
                "countryCode": "AF"
            },
            {
                "name": "Badghis",
                "isoCode": "BDG",
                "countryCode": "AF"
            },
            {
                "name": "Baghlan",
                "isoCode": "BGL",
                "countryCode": "AF"
            },
            {
                "name": "Balkh",
                "isoCode": "BAL",
                "countryCode": "AF"
            },
            {
                "name": "Bamyan",
                "isoCode": "BAM",
                "countryCode": "AF"
            },
            {
                "name": "Daykundi",
                "isoCode": "DAY",
                "countryCode": "AF"
            },
            {
                "name": "Farah",
                "isoCode": "FRA",
                "countryCode": "AF"
            },
            {
                "name": "Faryab",
                "isoCode": "FYB",
                "countryCode": "AF"
            },
            {
                "name": "Ghazni",
                "isoCode": "GHA",
                "countryCode": "AF"
            },
            {
                "name": "Ghōr",
                "isoCode": "GHO",
                "countryCode": "AF"
            },
            {
                "name": "Helmand",
                "isoCode": "HEL",
                "countryCode": "AF"
            },
            {
                "name": "Herat",
                "isoCode": "HER",
                "countryCode": "AF"
            },
            {
                "name": "Jowzjan",
                "isoCode": "JOW",
                "countryCode": "AF"
            },
            {
                "name": "Kabul",
                "isoCode": "KAB",
                "countryCode": "AF"
            },
            {
                "name": "Kandahar",
                "isoCode": "KAN",
                "countryCode": "AF"
            },
            {
                "name": "Kapisa",
                "isoCode": "KAP",
                "countryCode": "AF"
            },
            {
                "name": "Khost",
                "isoCode": "KHO",
                "countryCode": "AF"
            },
            {
                "name": "Kunar",
                "isoCode": "KNR",
                "countryCode": "AF"
            },
            {
                "name": "Kunduz Province",
                "isoCode": "KDZ",
                "countryCode": "AF"
            },
            {
                "name": "Laghman",
                "isoCode": "LAG",
                "countryCode": "AF"
            },
            {
                "name": "Logar",
                "isoCode": "LOG",
                "countryCode": "AF"
            },
            {
                "name": "Nangarhar",
                "isoCode": "NAN",
                "countryCode": "AF"
            },
            {
                "name": "Nimruz",
                "isoCode": "NIM",
                "countryCode": "AF"
            },
            {
                "name": "Nuristan",
                "isoCode": "NUR",
                "countryCode": "AF"
            },
            {
                "name": "Paktia",
                "isoCode": "PIA",
                "countryCode": "AF"
            },
            {
                "name": "Paktika",
                "isoCode": "PKA",
                "countryCode": "AF"
            },
            {
                "name": "Panjshir",
                "isoCode": "PAN",
                "countryCode": "AF"
            },
            {
                "name": "Parwan",
                "isoCode": "PAR",
                "countryCode": "AF"
            },
            {
                "name": "Samangan",
                "isoCode": "SAM",
                "countryCode": "AF"
            },
            {
                "name": "Sar-e Pol",
                "isoCode": "SAR",
                "countryCode": "AF"
            },
            {
                "name": "Takhar",
                "isoCode": "TAK",
                "countryCode": "AF"
            },
            {
                "name": "Urozgan",
                "isoCode": "URU",
                "countryCode": "AF"
            },
            {
                "name": "Zabul",
                "isoCode": "ZAB",
                "countryCode": "AF"
            },
            {
                "name": "Berat County",
                "isoCode": "01",
                "countryCode": "AL"
            },
            {
                "name": "Berat District",
                "isoCode": "BR",
                "countryCode": "AL"
            },
            {
                "name": "Bulqizë District",
                "isoCode": "BU",
                "countryCode": "AL"
            },
            {
                "name": "Delvinë District",
                "isoCode": "DL",
                "countryCode": "AL"
            },
            {
                "name": "Devoll District",
                "isoCode": "DV",
                "countryCode": "AL"
            },
            {
                "name": "Dibër County",
                "isoCode": "09",
                "countryCode": "AL"
            },
            {
                "name": "Dibër District",
                "isoCode": "DI",
                "countryCode": "AL"
            },
            {
                "name": "Durrës County",
                "isoCode": "02",
                "countryCode": "AL"
            },
            {
                "name": "Durrës District",
                "isoCode": "DR",
                "countryCode": "AL"
            },
            {
                "name": "Elbasan County",
                "isoCode": "03",
                "countryCode": "AL"
            },
            {
                "name": "Fier County",
                "isoCode": "04",
                "countryCode": "AL"
            },
            {
                "name": "Fier District",
                "isoCode": "FR",
                "countryCode": "AL"
            },
            {
                "name": "Gjirokastër County",
                "isoCode": "05",
                "countryCode": "AL"
            },
            {
                "name": "Gjirokastër District",
                "isoCode": "GJ",
                "countryCode": "AL"
            },
            {
                "name": "Gramsh District",
                "isoCode": "GR",
                "countryCode": "AL"
            },
            {
                "name": "Has District",
                "isoCode": "HA",
                "countryCode": "AL"
            },
            {
                "name": "Kavajë District",
                "isoCode": "KA",
                "countryCode": "AL"
            },
            {
                "name": "Kolonjë District",
                "isoCode": "ER",
                "countryCode": "AL"
            },
            {
                "name": "Korçë County",
                "isoCode": "06",
                "countryCode": "AL"
            },
            {
                "name": "Korçë District",
                "isoCode": "KO",
                "countryCode": "AL"
            },
            {
                "name": "Krujë District",
                "isoCode": "KR",
                "countryCode": "AL"
            },
            {
                "name": "Kukës County",
                "isoCode": "07",
                "countryCode": "AL"
            },
            {
                "name": "Kukës District",
                "isoCode": "KU",
                "countryCode": "AL"
            },
            {
                "name": "Kurbin District",
                "isoCode": "KB",
                "countryCode": "AL"
            },
            {
                "name": "Kuçovë District",
                "isoCode": "KC",
                "countryCode": "AL"
            },
            {
                "name": "Lezhë County",
                "isoCode": "08",
                "countryCode": "AL"
            },
            {
                "name": "Lezhë District",
                "isoCode": "LE",
                "countryCode": "AL"
            },
            {
                "name": "Librazhd District",
                "isoCode": "LB",
                "countryCode": "AL"
            },
            {
                "name": "Lushnjë District",
                "isoCode": "LU",
                "countryCode": "AL"
            },
            {
                "name": "Mallakastër District",
                "isoCode": "MK",
                "countryCode": "AL"
            },
            {
                "name": "Malësi e Madhe District",
                "isoCode": "MM",
                "countryCode": "AL"
            },
            {
                "name": "Mat District",
                "isoCode": "MT",
                "countryCode": "AL"
            },
            {
                "name": "Mirditë District",
                "isoCode": "MR",
                "countryCode": "AL"
            },
            {
                "name": "Peqin District",
                "isoCode": "PQ",
                "countryCode": "AL"
            },
            {
                "name": "Pogradec District",
                "isoCode": "PG",
                "countryCode": "AL"
            },
            {
                "name": "Pukë District",
                "isoCode": "PU",
                "countryCode": "AL"
            },
            {
                "name": "Përmet District",
                "isoCode": "PR",
                "countryCode": "AL"
            },
            {
                "name": "Sarandë District",
                "isoCode": "SR",
                "countryCode": "AL"
            },
            {
                "name": "Shkodër County",
                "isoCode": "10",
                "countryCode": "AL"
            },
            {
                "name": "Shkodër District",
                "isoCode": "SH",
                "countryCode": "AL"
            },
            {
                "name": "Skrapar District",
                "isoCode": "SK",
                "countryCode": "AL"
            },
            {
                "name": "Tepelenë District",
                "isoCode": "TE",
                "countryCode": "AL"
            },
            {
                "name": "Tirana County",
                "isoCode": "11",
                "countryCode": "AL"
            },
            {
                "name": "Tirana District",
                "isoCode": "TR",
                "countryCode": "AL"
            },
            {
                "name": "Tropojë District",
                "isoCode": "TP",
                "countryCode": "AL"
            },
            {
                "name": "Vlorë County",
                "isoCode": "12",
                "countryCode": "AL"
            },
            {
                "name": "Vlorë District",
                "isoCode": "VL",
                "countryCode": "AL"
            },
            {
                "name": "Adrar",
                "isoCode": "01",
                "countryCode": "DZ"
            },
            {
                "name": "Algiers",
                "isoCode": "16",
                "countryCode": "DZ"
            },
            {
                "name": "Annaba",
                "isoCode": "23",
                "countryCode": "DZ"
            },
            {
                "name": "Aïn Defla",
                "isoCode": "44",
                "countryCode": "DZ"
            },
            {
                "name": "Aïn Témouchent",
                "isoCode": "46",
                "countryCode": "DZ"
            },
            {
                "name": "Batna",
                "isoCode": "05",
                "countryCode": "DZ"
            },
            {
                "name": "Biskra",
                "isoCode": "07",
                "countryCode": "DZ"
            },
            {
                "name": "Blida",
                "isoCode": "09",
                "countryCode": "DZ"
            },
            {
                "name": "Bordj Baji Mokhtar",
                "isoCode": "52",
                "countryCode": "DZ"
            },
            {
                "name": "Bordj Bou Arréridj",
                "isoCode": "34",
                "countryCode": "DZ"
            },
            {
                "name": "Boumerdès",
                "isoCode": "35",
                "countryCode": "DZ"
            },
            {
                "name": "Bouïra",
                "isoCode": "10",
                "countryCode": "DZ"
            },
            {
                "name": "Béchar",
                "isoCode": "08",
                "countryCode": "DZ"
            },
            {
                "name": "Béjaïa",
                "isoCode": "06",
                "countryCode": "DZ"
            },
            {
                "name": "Béni Abbès",
                "isoCode": "53",
                "countryCode": "DZ"
            },
            {
                "name": "Chlef",
                "isoCode": "02",
                "countryCode": "DZ"
            },
            {
                "name": "Constantine",
                "isoCode": "25",
                "countryCode": "DZ"
            },
            {
                "name": "Djanet",
                "isoCode": "56",
                "countryCode": "DZ"
            },
            {
                "name": "Djelfa",
                "isoCode": "17",
                "countryCode": "DZ"
            },
            {
                "name": "El Bayadh",
                "isoCode": "32",
                "countryCode": "DZ"
            },
            {
                "name": "El M'ghair",
                "isoCode": "49",
                "countryCode": "DZ"
            },
            {
                "name": "El Menia",
                "isoCode": "50",
                "countryCode": "DZ"
            },
            {
                "name": "El Oued",
                "isoCode": "39",
                "countryCode": "DZ"
            },
            {
                "name": "El Tarf",
                "isoCode": "36",
                "countryCode": "DZ"
            },
            {
                "name": "Ghardaïa",
                "isoCode": "47",
                "countryCode": "DZ"
            },
            {
                "name": "Guelma",
                "isoCode": "24",
                "countryCode": "DZ"
            },
            {
                "name": "Illizi",
                "isoCode": "33",
                "countryCode": "DZ"
            },
            {
                "name": "In Guezzam",
                "isoCode": "58",
                "countryCode": "DZ"
            },
            {
                "name": "In Salah",
                "isoCode": "57",
                "countryCode": "DZ"
            },
            {
                "name": "Jijel",
                "isoCode": "18",
                "countryCode": "DZ"
            },
            {
                "name": "Khenchela",
                "isoCode": "40",
                "countryCode": "DZ"
            },
            {
                "name": "Laghouat",
                "isoCode": "03",
                "countryCode": "DZ"
            },
            {
                "name": "M'Sila",
                "isoCode": "28",
                "countryCode": "DZ"
            },
            {
                "name": "Mascara",
                "isoCode": "29",
                "countryCode": "DZ"
            },
            {
                "name": "Mila",
                "isoCode": "43",
                "countryCode": "DZ"
            },
            {
                "name": "Mostaganem",
                "isoCode": "27",
                "countryCode": "DZ"
            },
            {
                "name": "Médéa",
                "isoCode": "26",
                "countryCode": "DZ"
            },
            {
                "name": "Naama",
                "isoCode": "45",
                "countryCode": "DZ"
            },
            {
                "name": "Oran",
                "isoCode": "31",
                "countryCode": "DZ"
            },
            {
                "name": "Ouargla",
                "isoCode": "30",
                "countryCode": "DZ"
            },
            {
                "name": "Ouled Djellal",
                "isoCode": "51",
                "countryCode": "DZ"
            },
            {
                "name": "Oum El Bouaghi",
                "isoCode": "04",
                "countryCode": "DZ"
            },
            {
                "name": "Relizane",
                "isoCode": "48",
                "countryCode": "DZ"
            },
            {
                "name": "Saïda",
                "isoCode": "20",
                "countryCode": "DZ"
            },
            {
                "name": "Sidi Bel Abbès",
                "isoCode": "22",
                "countryCode": "DZ"
            },
            {
                "name": "Skikda",
                "isoCode": "21",
                "countryCode": "DZ"
            },
            {
                "name": "Souk Ahras",
                "isoCode": "41",
                "countryCode": "DZ"
            },
            {
                "name": "Sétif",
                "isoCode": "19",
                "countryCode": "DZ"
            },
            {
                "name": "Tamanghasset",
                "isoCode": "11",
                "countryCode": "DZ"
            },
            {
                "name": "Tiaret",
                "isoCode": "14",
                "countryCode": "DZ"
            },
            {
                "name": "Timimoun",
                "isoCode": "54",
                "countryCode": "DZ"
            },
            {
                "name": "Tindouf",
                "isoCode": "37",
                "countryCode": "DZ"
            },
            {
                "name": "Tipasa",
                "isoCode": "42",
                "countryCode": "DZ"
            },
            {
                "name": "Tissemsilt",
                "isoCode": "38",
                "countryCode": "DZ"
            },
            {
                "name": "Tizi Ouzou",
                "isoCode": "15",
                "countryCode": "DZ"
            },
            {
                "name": "Tlemcen",
                "isoCode": "13",
                "countryCode": "DZ"
            },
            {
                "name": "Touggourt",
                "isoCode": "55",
                "countryCode": "DZ"
            },
            {
                "name": "Tébessa",
                "isoCode": "12",
                "countryCode": "DZ"
            },
            {
                "name": "Andorra la Vella",
                "isoCode": "07",
                "countryCode": "AD"
            },
            {
                "name": "Canillo",
                "isoCode": "02",
                "countryCode": "AD"
            },
            {
                "name": "Encamp",
                "isoCode": "03",
                "countryCode": "AD"
            },
            {
                "name": "Escaldes-Engordany",
                "isoCode": "08",
                "countryCode": "AD"
            },
            {
                "name": "La Massana",
                "isoCode": "04",
                "countryCode": "AD"
            },
            {
                "name": "Ordino",
                "isoCode": "05",
                "countryCode": "AD"
            },
            {
                "name": "Sant Julià de Lòria",
                "isoCode": "06",
                "countryCode": "AD"
            },
            {
                "name": "Bengo Province",
                "isoCode": "BGO",
                "countryCode": "AO"
            },
            {
                "name": "Benguela Province",
                "isoCode": "BGU",
                "countryCode": "AO"
            },
            {
                "name": "Bié Province",
                "isoCode": "BIE",
                "countryCode": "AO"
            },
            {
                "name": "Cabinda Province",
                "isoCode": "CAB",
                "countryCode": "AO"
            },
            {
                "name": "Cuando Cubango Province",
                "isoCode": "CCU",
                "countryCode": "AO"
            },
            {
                "name": "Cuanza Norte Province",
                "isoCode": "CNO",
                "countryCode": "AO"
            },
            {
                "name": "Cuanza Sul",
                "isoCode": "CUS",
                "countryCode": "AO"
            },
            {
                "name": "Cunene Province",
                "isoCode": "CNN",
                "countryCode": "AO"
            },
            {
                "name": "Huambo Province",
                "isoCode": "HUA",
                "countryCode": "AO"
            },
            {
                "name": "Huíla Province",
                "isoCode": "HUI",
                "countryCode": "AO"
            },
            {
                "name": "Luanda Province",
                "isoCode": "LUA",
                "countryCode": "AO"
            },
            {
                "name": "Lunda Norte Province",
                "isoCode": "LNO",
                "countryCode": "AO"
            },
            {
                "name": "Lunda Sul Province",
                "isoCode": "LSU",
                "countryCode": "AO"
            },
            {
                "name": "Malanje Province",
                "isoCode": "MAL",
                "countryCode": "AO"
            },
            {
                "name": "Moxico Province",
                "isoCode": "MOX",
                "countryCode": "AO"
            },
            {
                "name": "Uíge Province",
                "isoCode": "UIG",
                "countryCode": "AO"
            },
            {
                "name": "Zaire Province",
                "isoCode": "ZAI",
                "countryCode": "AO"
            },
            {
                "name": "Barbuda",
                "isoCode": "10",
                "countryCode": "AG"
            },
            {
                "name": "Redonda",
                "isoCode": "11",
                "countryCode": "AG"
            },
            {
                "name": "Saint George Parish",
                "isoCode": "03",
                "countryCode": "AG"
            },
            {
                "name": "Saint John Parish",
                "isoCode": "04",
                "countryCode": "AG"
            },
            {
                "name": "Saint Mary Parish",
                "isoCode": "05",
                "countryCode": "AG"
            },
            {
                "name": "Saint Paul Parish",
                "isoCode": "06",
                "countryCode": "AG"
            },
            {
                "name": "Saint Peter Parish",
                "isoCode": "07",
                "countryCode": "AG"
            },
            {
                "name": "Saint Philip Parish",
                "isoCode": "08",
                "countryCode": "AG"
            },
            {
                "name": "Buenos Aires",
                "isoCode": "B",
                "countryCode": "AR"
            },
            {
                "name": "Catamarca",
                "isoCode": "K",
                "countryCode": "AR"
            },
            {
                "name": "Chaco",
                "isoCode": "H",
                "countryCode": "AR"
            },
            {
                "name": "Chubut",
                "isoCode": "U",
                "countryCode": "AR"
            },
            {
                "name": "Ciudad Autónoma de Buenos Aires",
                "isoCode": "C",
                "countryCode": "AR"
            },
            {
                "name": "Corrientes",
                "isoCode": "W",
                "countryCode": "AR"
            },
            {
                "name": "Córdoba",
                "isoCode": "X",
                "countryCode": "AR"
            },
            {
                "name": "Entre Ríos",
                "isoCode": "E",
                "countryCode": "AR"
            },
            {
                "name": "Formosa",
                "isoCode": "P",
                "countryCode": "AR"
            },
            {
                "name": "Jujuy",
                "isoCode": "Y",
                "countryCode": "AR"
            },
            {
                "name": "La Pampa",
                "isoCode": "L",
                "countryCode": "AR"
            },
            {
                "name": "La Rioja",
                "isoCode": "F",
                "countryCode": "AR"
            },
            {
                "name": "Mendoza",
                "isoCode": "M",
                "countryCode": "AR"
            },
            {
                "name": "Misiones",
                "isoCode": "N",
                "countryCode": "AR"
            },
            {
                "name": "Neuquén",
                "isoCode": "Q",
                "countryCode": "AR"
            },
            {
                "name": "Río Negro",
                "isoCode": "R",
                "countryCode": "AR"
            },
            {
                "name": "Salta",
                "isoCode": "A",
                "countryCode": "AR"
            },
            {
                "name": "San Juan",
                "isoCode": "J",
                "countryCode": "AR"
            },
            {
                "name": "San Luis",
                "isoCode": "D",
                "countryCode": "AR"
            },
            {
                "name": "Santa Cruz",
                "isoCode": "Z",
                "countryCode": "AR"
            },
            {
                "name": "Santa Fe",
                "isoCode": "S",
                "countryCode": "AR"
            },
            {
                "name": "Santiago del Estero",
                "isoCode": "G",
                "countryCode": "AR"
            },
            {
                "name": "Tierra del Fuego",
                "isoCode": "V",
                "countryCode": "AR"
            },
            {
                "name": "Tucumán",
                "isoCode": "T",
                "countryCode": "AR"
            },
            {
                "name": "Aragatsotn Region",
                "isoCode": "AG",
                "countryCode": "AM"
            },
            {
                "name": "Ararat Province",
                "isoCode": "AR",
                "countryCode": "AM"
            },
            {
                "name": "Armavir Region",
                "isoCode": "AV",
                "countryCode": "AM"
            },
            {
                "name": "Gegharkunik Province",
                "isoCode": "GR",
                "countryCode": "AM"
            },
            {
                "name": "Kotayk Region",
                "isoCode": "KT",
                "countryCode": "AM"
            },
            {
                "name": "Lori Region",
                "isoCode": "LO",
                "countryCode": "AM"
            },
            {
                "name": "Shirak Region",
                "isoCode": "SH",
                "countryCode": "AM"
            },
            {
                "name": "Syunik Province",
                "isoCode": "SU",
                "countryCode": "AM"
            },
            {
                "name": "Tavush Region",
                "isoCode": "TV",
                "countryCode": "AM"
            },
            {
                "name": "Vayots Dzor Region",
                "isoCode": "VD",
                "countryCode": "AM"
            },
            {
                "name": "Yerevan",
                "isoCode": "ER",
                "countryCode": "AM"
            },
            {
                "name": "Australian Capital Territory",
                "isoCode": "ACT",
                "countryCode": "AU"
            },
            {
                "name": "New South Wales",
                "isoCode": "NSW",
                "countryCode": "AU"
            },
            {
                "name": "Northern Territory",
                "isoCode": "NT",
                "countryCode": "AU"
            },
            {
                "name": "Queensland",
                "isoCode": "QLD",
                "countryCode": "AU"
            },
            {
                "name": "South Australia",
                "isoCode": "SA",
                "countryCode": "AU"
            },
            {
                "name": "Tasmania",
                "isoCode": "TAS",
                "countryCode": "AU"
            },
            {
                "name": "Victoria",
                "isoCode": "VIC",
                "countryCode": "AU"
            },
            {
                "name": "Western Australia",
                "isoCode": "WA",
                "countryCode": "AU"
            },
            {
                "name": "Burgenland",
                "isoCode": "1",
                "countryCode": "AT"
            },
            {
                "name": "Carinthia",
                "isoCode": "2",
                "countryCode": "AT"
            },
            {
                "name": "Lower Austria",
                "isoCode": "3",
                "countryCode": "AT"
            },
            {
                "name": "Salzburg",
                "isoCode": "5",
                "countryCode": "AT"
            },
            {
                "name": "Styria",
                "isoCode": "6",
                "countryCode": "AT"
            },
            {
                "name": "Tyrol",
                "isoCode": "7",
                "countryCode": "AT"
            },
            {
                "name": "Upper Austria",
                "isoCode": "4",
                "countryCode": "AT"
            },
            {
                "name": "Vienna",
                "isoCode": "9",
                "countryCode": "AT"
            },
            {
                "name": "Vorarlberg",
                "isoCode": "8",
                "countryCode": "AT"
            },
            {
                "name": "Absheron District",
                "isoCode": "ABS",
                "countryCode": "AZ"
            },
            {
                "name": "Agdam District",
                "isoCode": "AGM",
                "countryCode": "AZ"
            },
            {
                "name": "Agdash District",
                "isoCode": "AGS",
                "countryCode": "AZ"
            },
            {
                "name": "Aghjabadi District",
                "isoCode": "AGC",
                "countryCode": "AZ"
            },
            {
                "name": "Agstafa District",
                "isoCode": "AGA",
                "countryCode": "AZ"
            },
            {
                "name": "Agsu District",
                "isoCode": "AGU",
                "countryCode": "AZ"
            },
            {
                "name": "Astara District",
                "isoCode": "AST",
                "countryCode": "AZ"
            },
            {
                "name": "Babek District",
                "isoCode": "BAB",
                "countryCode": "AZ"
            },
            {
                "name": "Baku",
                "isoCode": "BA",
                "countryCode": "AZ"
            },
            {
                "name": "Balakan District",
                "isoCode": "BAL",
                "countryCode": "AZ"
            },
            {
                "name": "Barda District",
                "isoCode": "BAR",
                "countryCode": "AZ"
            },
            {
                "name": "Beylagan District",
                "isoCode": "BEY",
                "countryCode": "AZ"
            },
            {
                "name": "Bilasuvar District",
                "isoCode": "BIL",
                "countryCode": "AZ"
            },
            {
                "name": "Dashkasan District",
                "isoCode": "DAS",
                "countryCode": "AZ"
            },
            {
                "name": "Fizuli District",
                "isoCode": "FUZ",
                "countryCode": "AZ"
            },
            {
                "name": "Ganja",
                "isoCode": "GA",
                "countryCode": "AZ"
            },
            {
                "name": "Gobustan District",
                "isoCode": "QOB",
                "countryCode": "AZ"
            },
            {
                "name": "Goranboy District",
                "isoCode": "GOR",
                "countryCode": "AZ"
            },
            {
                "name": "Goychay",
                "isoCode": "GOY",
                "countryCode": "AZ"
            },
            {
                "name": "Goygol District",
                "isoCode": "GYG",
                "countryCode": "AZ"
            },
            {
                "name": "Gədəbəy",
                "isoCode": "GAD",
                "countryCode": "AZ"
            },
            {
                "name": "Hajigabul District",
                "isoCode": "HAC",
                "countryCode": "AZ"
            },
            {
                "name": "Imishli District",
                "isoCode": "IMI",
                "countryCode": "AZ"
            },
            {
                "name": "Ismailli District",
                "isoCode": "ISM",
                "countryCode": "AZ"
            },
            {
                "name": "Jabrayil District",
                "isoCode": "CAB",
                "countryCode": "AZ"
            },
            {
                "name": "Jalilabad District",
                "isoCode": "CAL",
                "countryCode": "AZ"
            },
            {
                "name": "Julfa District",
                "isoCode": "CUL",
                "countryCode": "AZ"
            },
            {
                "name": "Kalbajar District",
                "isoCode": "KAL",
                "countryCode": "AZ"
            },
            {
                "name": "Kangarli District",
                "isoCode": "KAN",
                "countryCode": "AZ"
            },
            {
                "name": "Khachmaz District",
                "isoCode": "XAC",
                "countryCode": "AZ"
            },
            {
                "name": "Khizi District",
                "isoCode": "XIZ",
                "countryCode": "AZ"
            },
            {
                "name": "Khojali District",
                "isoCode": "XCI",
                "countryCode": "AZ"
            },
            {
                "name": "Kurdamir District",
                "isoCode": "KUR",
                "countryCode": "AZ"
            },
            {
                "name": "Lachin District",
                "isoCode": "LAC",
                "countryCode": "AZ"
            },
            {
                "name": "Lankaran",
                "isoCode": "LAN",
                "countryCode": "AZ"
            },
            {
                "name": "Lankaran District",
                "isoCode": "LA",
                "countryCode": "AZ"
            },
            {
                "name": "Lerik District",
                "isoCode": "LER",
                "countryCode": "AZ"
            },
            {
                "name": "Martuni",
                "isoCode": "XVD",
                "countryCode": "AZ"
            },
            {
                "name": "Masally District",
                "isoCode": "MAS",
                "countryCode": "AZ"
            },
            {
                "name": "Mingachevir",
                "isoCode": "MI",
                "countryCode": "AZ"
            },
            {
                "name": "Nakhchivan Autonomous Republic",
                "isoCode": "NX",
                "countryCode": "AZ"
            },
            {
                "name": "Neftchala District",
                "isoCode": "NEF",
                "countryCode": "AZ"
            },
            {
                "name": "Oghuz District",
                "isoCode": "OGU",
                "countryCode": "AZ"
            },
            {
                "name": "Ordubad District",
                "isoCode": "ORD",
                "countryCode": "AZ"
            },
            {
                "name": "Qabala District",
                "isoCode": "QAB",
                "countryCode": "AZ"
            },
            {
                "name": "Qakh District",
                "isoCode": "QAX",
                "countryCode": "AZ"
            },
            {
                "name": "Qazakh District",
                "isoCode": "QAZ",
                "countryCode": "AZ"
            },
            {
                "name": "Quba District",
                "isoCode": "QBA",
                "countryCode": "AZ"
            },
            {
                "name": "Qubadli District",
                "isoCode": "QBI",
                "countryCode": "AZ"
            },
            {
                "name": "Qusar District",
                "isoCode": "QUS",
                "countryCode": "AZ"
            },
            {
                "name": "Saatly District",
                "isoCode": "SAT",
                "countryCode": "AZ"
            },
            {
                "name": "Sabirabad District",
                "isoCode": "SAB",
                "countryCode": "AZ"
            },
            {
                "name": "Sadarak District",
                "isoCode": "SAD",
                "countryCode": "AZ"
            },
            {
                "name": "Salyan District",
                "isoCode": "SAL",
                "countryCode": "AZ"
            },
            {
                "name": "Samukh District",
                "isoCode": "SMX",
                "countryCode": "AZ"
            },
            {
                "name": "Shabran District",
                "isoCode": "SBN",
                "countryCode": "AZ"
            },
            {
                "name": "Shahbuz District",
                "isoCode": "SAH",
                "countryCode": "AZ"
            },
            {
                "name": "Shaki",
                "isoCode": "SA",
                "countryCode": "AZ"
            },
            {
                "name": "Shaki District",
                "isoCode": "SAK",
                "countryCode": "AZ"
            },
            {
                "name": "Shamakhi District",
                "isoCode": "SMI",
                "countryCode": "AZ"
            },
            {
                "name": "Shamkir District",
                "isoCode": "SKR",
                "countryCode": "AZ"
            },
            {
                "name": "Sharur District",
                "isoCode": "SAR",
                "countryCode": "AZ"
            },
            {
                "name": "Shirvan",
                "isoCode": "SR",
                "countryCode": "AZ"
            },
            {
                "name": "Shusha District",
                "isoCode": "SUS",
                "countryCode": "AZ"
            },
            {
                "name": "Siazan District",
                "isoCode": "SIY",
                "countryCode": "AZ"
            },
            {
                "name": "Sumqayit",
                "isoCode": "SM",
                "countryCode": "AZ"
            },
            {
                "name": "Tartar District",
                "isoCode": "TAR",
                "countryCode": "AZ"
            },
            {
                "name": "Tovuz District",
                "isoCode": "TOV",
                "countryCode": "AZ"
            },
            {
                "name": "Ujar District",
                "isoCode": "UCA",
                "countryCode": "AZ"
            },
            {
                "name": "Yardymli District",
                "isoCode": "YAR",
                "countryCode": "AZ"
            },
            {
                "name": "Yevlakh",
                "isoCode": "YE",
                "countryCode": "AZ"
            },
            {
                "name": "Yevlakh District",
                "isoCode": "YEV",
                "countryCode": "AZ"
            },
            {
                "name": "Zangilan District",
                "isoCode": "ZAN",
                "countryCode": "AZ"
            },
            {
                "name": "Zaqatala District",
                "isoCode": "ZAQ",
                "countryCode": "AZ"
            },
            {
                "name": "Zardab District",
                "isoCode": "ZAR",
                "countryCode": "AZ"
            },
            {
                "name": "Acklins",
                "isoCode": "AK",
                "countryCode": "BS"
            },
            {
                "name": "Acklins and Crooked Islands",
                "isoCode": "AC",
                "countryCode": "BS"
            },
            {
                "name": "Berry Islands",
                "isoCode": "BY",
                "countryCode": "BS"
            },
            {
                "name": "Bimini",
                "isoCode": "BI",
                "countryCode": "BS"
            },
            {
                "name": "Black Point",
                "isoCode": "BP",
                "countryCode": "BS"
            },
            {
                "name": "Cat Island",
                "isoCode": "CI",
                "countryCode": "BS"
            },
            {
                "name": "Central Abaco",
                "isoCode": "CO",
                "countryCode": "BS"
            },
            {
                "name": "Central Andros",
                "isoCode": "CS",
                "countryCode": "BS"
            },
            {
                "name": "Central Eleuthera",
                "isoCode": "CE",
                "countryCode": "BS"
            },
            {
                "name": "Crooked Island",
                "isoCode": "CK",
                "countryCode": "BS"
            },
            {
                "name": "East Grand Bahama",
                "isoCode": "EG",
                "countryCode": "BS"
            },
            {
                "name": "Exuma",
                "isoCode": "EX",
                "countryCode": "BS"
            },
            {
                "name": "Freeport",
                "isoCode": "FP",
                "countryCode": "BS"
            },
            {
                "name": "Fresh Creek",
                "isoCode": "FC",
                "countryCode": "BS"
            },
            {
                "name": "Governor's Harbour",
                "isoCode": "GH",
                "countryCode": "BS"
            },
            {
                "name": "Grand Cay",
                "isoCode": "GC",
                "countryCode": "BS"
            },
            {
                "name": "Green Turtle Cay",
                "isoCode": "GT",
                "countryCode": "BS"
            },
            {
                "name": "Harbour Island",
                "isoCode": "HI",
                "countryCode": "BS"
            },
            {
                "name": "High Rock",
                "isoCode": "HR",
                "countryCode": "BS"
            },
            {
                "name": "Hope Town",
                "isoCode": "HT",
                "countryCode": "BS"
            },
            {
                "name": "Inagua",
                "isoCode": "IN",
                "countryCode": "BS"
            },
            {
                "name": "Kemps Bay",
                "isoCode": "KB",
                "countryCode": "BS"
            },
            {
                "name": "Long Island",
                "isoCode": "LI",
                "countryCode": "BS"
            },
            {
                "name": "Mangrove Cay",
                "isoCode": "MC",
                "countryCode": "BS"
            },
            {
                "name": "Marsh Harbour",
                "isoCode": "MH",
                "countryCode": "BS"
            },
            {
                "name": "Mayaguana District",
                "isoCode": "MG",
                "countryCode": "BS"
            },
            {
                "name": "New Providence",
                "isoCode": "NP",
                "countryCode": "BS"
            },
            {
                "name": "Nichollstown and Berry Islands",
                "isoCode": "NB",
                "countryCode": "BS"
            },
            {
                "name": "North Abaco",
                "isoCode": "NO",
                "countryCode": "BS"
            },
            {
                "name": "North Andros",
                "isoCode": "NS",
                "countryCode": "BS"
            },
            {
                "name": "North Eleuthera",
                "isoCode": "NE",
                "countryCode": "BS"
            },
            {
                "name": "Ragged Island",
                "isoCode": "RI",
                "countryCode": "BS"
            },
            {
                "name": "Rock Sound",
                "isoCode": "RS",
                "countryCode": "BS"
            },
            {
                "name": "Rum Cay District",
                "isoCode": "RC",
                "countryCode": "BS"
            },
            {
                "name": "San Salvador Island",
                "isoCode": "SS",
                "countryCode": "BS"
            },
            {
                "name": "San Salvador and Rum Cay",
                "isoCode": "SR",
                "countryCode": "BS"
            },
            {
                "name": "Sandy Point",
                "isoCode": "SP",
                "countryCode": "BS"
            },
            {
                "name": "South Abaco",
                "isoCode": "SO",
                "countryCode": "BS"
            },
            {
                "name": "South Andros",
                "isoCode": "SA",
                "countryCode": "BS"
            },
            {
                "name": "South Eleuthera",
                "isoCode": "SE",
                "countryCode": "BS"
            },
            {
                "name": "Spanish Wells",
                "isoCode": "SW",
                "countryCode": "BS"
            },
            {
                "name": "West Grand Bahama",
                "isoCode": "WG",
                "countryCode": "BS"
            },
            {
                "name": "Capital Governorate",
                "isoCode": "13",
                "countryCode": "BH"
            },
            {
                "name": "Central Governorate",
                "isoCode": "16",
                "countryCode": "BH"
            },
            {
                "name": "Muharraq Governorate",
                "isoCode": "15",
                "countryCode": "BH"
            },
            {
                "name": "Northern Governorate",
                "isoCode": "17",
                "countryCode": "BH"
            },
            {
                "name": "Southern Governorate",
                "isoCode": "14",
                "countryCode": "BH"
            },
            {
                "name": "Bagerhat District",
                "isoCode": "05",
                "countryCode": "BD"
            },
            {
                "name": "Bahadia",
                "isoCode": "33",
                "countryCode": "BD"
            },
            {
                "name": "Bandarban District",
                "isoCode": "01",
                "countryCode": "BD"
            },
            {
                "name": "Barguna District",
                "isoCode": "02",
                "countryCode": "BD"
            },
            {
                "name": "Barisal District",
                "isoCode": "06",
                "countryCode": "BD"
            },
            {
                "name": "Barisal Division",
                "isoCode": "A",
                "countryCode": "BD"
            },
            {
                "name": "Bhola District",
                "isoCode": "07",
                "countryCode": "BD"
            },
            {
                "name": "Bogra District",
                "isoCode": "03",
                "countryCode": "BD"
            },
            {
                "name": "Brahmanbaria District",
                "isoCode": "04",
                "countryCode": "BD"
            },
            {
                "name": "Chandpur District",
                "isoCode": "09",
                "countryCode": "BD"
            },
            {
                "name": "Chapai Nawabganj District",
                "isoCode": "45",
                "countryCode": "BD"
            },
            {
                "name": "Chittagong District",
                "isoCode": "10",
                "countryCode": "BD"
            },
            {
                "name": "Chittagong Division",
                "isoCode": "B",
                "countryCode": "BD"
            },
            {
                "name": "Chuadanga District",
                "isoCode": "12",
                "countryCode": "BD"
            },
            {
                "name": "Comilla District",
                "isoCode": "08",
                "countryCode": "BD"
            },
            {
                "name": "Cox's Bazar District",
                "isoCode": "11",
                "countryCode": "BD"
            },
            {
                "name": "Dhaka District",
                "isoCode": "13",
                "countryCode": "BD"
            },
            {
                "name": "Dhaka Division",
                "isoCode": "C",
                "countryCode": "BD"
            },
            {
                "name": "Dinajpur District",
                "isoCode": "14",
                "countryCode": "BD"
            },
            {
                "name": "Faridpur District",
                "isoCode": "15",
                "countryCode": "BD"
            },
            {
                "name": "Feni District",
                "isoCode": "16",
                "countryCode": "BD"
            },
            {
                "name": "Gaibandha District",
                "isoCode": "19",
                "countryCode": "BD"
            },
            {
                "name": "Gazipur District",
                "isoCode": "18",
                "countryCode": "BD"
            },
            {
                "name": "Gopalganj District",
                "isoCode": "17",
                "countryCode": "BD"
            },
            {
                "name": "Habiganj District",
                "isoCode": "20",
                "countryCode": "BD"
            },
            {
                "name": "Jamalpur District",
                "isoCode": "21",
                "countryCode": "BD"
            },
            {
                "name": "Jessore District",
                "isoCode": "22",
                "countryCode": "BD"
            },
            {
                "name": "Jhalokati District",
                "isoCode": "25",
                "countryCode": "BD"
            },
            {
                "name": "Jhenaidah District",
                "isoCode": "23",
                "countryCode": "BD"
            },
            {
                "name": "Joypurhat District",
                "isoCode": "24",
                "countryCode": "BD"
            },
            {
                "name": "Khagrachari District",
                "isoCode": "29",
                "countryCode": "BD"
            },
            {
                "name": "Khulna District",
                "isoCode": "27",
                "countryCode": "BD"
            },
            {
                "name": "Khulna Division",
                "isoCode": "D",
                "countryCode": "BD"
            },
            {
                "name": "Kishoreganj District",
                "isoCode": "26",
                "countryCode": "BD"
            },
            {
                "name": "Kurigram District",
                "isoCode": "28",
                "countryCode": "BD"
            },
            {
                "name": "Kushtia District",
                "isoCode": "30",
                "countryCode": "BD"
            },
            {
                "name": "Lakshmipur District",
                "isoCode": "31",
                "countryCode": "BD"
            },
            {
                "name": "Lalmonirhat District",
                "isoCode": "32",
                "countryCode": "BD"
            },
            {
                "name": "Madaripur District",
                "isoCode": "36",
                "countryCode": "BD"
            },
            {
                "name": "Meherpur District",
                "isoCode": "39",
                "countryCode": "BD"
            },
            {
                "name": "Moulvibazar District",
                "isoCode": "38",
                "countryCode": "BD"
            },
            {
                "name": "Munshiganj District",
                "isoCode": "35",
                "countryCode": "BD"
            },
            {
                "name": "Mymensingh District",
                "isoCode": "34",
                "countryCode": "BD"
            },
            {
                "name": "Mymensingh Division",
                "isoCode": "H",
                "countryCode": "BD"
            },
            {
                "name": "Naogaon District",
                "isoCode": "48",
                "countryCode": "BD"
            },
            {
                "name": "Narail District",
                "isoCode": "43",
                "countryCode": "BD"
            },
            {
                "name": "Narayanganj District",
                "isoCode": "40",
                "countryCode": "BD"
            },
            {
                "name": "Natore District",
                "isoCode": "44",
                "countryCode": "BD"
            },
            {
                "name": "Netrokona District",
                "isoCode": "41",
                "countryCode": "BD"
            },
            {
                "name": "Nilphamari District",
                "isoCode": "46",
                "countryCode": "BD"
            },
            {
                "name": "Noakhali District",
                "isoCode": "47",
                "countryCode": "BD"
            },
            {
                "name": "Pabna District",
                "isoCode": "49",
                "countryCode": "BD"
            },
            {
                "name": "Panchagarh District",
                "isoCode": "52",
                "countryCode": "BD"
            },
            {
                "name": "Patuakhali District",
                "isoCode": "51",
                "countryCode": "BD"
            },
            {
                "name": "Pirojpur District",
                "isoCode": "50",
                "countryCode": "BD"
            },
            {
                "name": "Rajbari District",
                "isoCode": "53",
                "countryCode": "BD"
            },
            {
                "name": "Rajshahi District",
                "isoCode": "54",
                "countryCode": "BD"
            },
            {
                "name": "Rajshahi Division",
                "isoCode": "E",
                "countryCode": "BD"
            },
            {
                "name": "Rangamati Hill District",
                "isoCode": "56",
                "countryCode": "BD"
            },
            {
                "name": "Rangpur District",
                "isoCode": "55",
                "countryCode": "BD"
            },
            {
                "name": "Rangpur Division",
                "isoCode": "F",
                "countryCode": "BD"
            },
            {
                "name": "Satkhira District",
                "isoCode": "58",
                "countryCode": "BD"
            },
            {
                "name": "Shariatpur District",
                "isoCode": "62",
                "countryCode": "BD"
            },
            {
                "name": "Sherpur District",
                "isoCode": "57",
                "countryCode": "BD"
            },
            {
                "name": "Sirajganj District",
                "isoCode": "59",
                "countryCode": "BD"
            },
            {
                "name": "Sunamganj District",
                "isoCode": "61",
                "countryCode": "BD"
            },
            {
                "name": "Sylhet District",
                "isoCode": "60",
                "countryCode": "BD"
            },
            {
                "name": "Sylhet Division",
                "isoCode": "G",
                "countryCode": "BD"
            },
            {
                "name": "Tangail District",
                "isoCode": "63",
                "countryCode": "BD"
            },
            {
                "name": "Thakurgaon District",
                "isoCode": "64",
                "countryCode": "BD"
            },
            {
                "name": "Christ Church",
                "isoCode": "01",
                "countryCode": "BB"
            },
            {
                "name": "Saint Andrew",
                "isoCode": "02",
                "countryCode": "BB"
            },
            {
                "name": "Saint George",
                "isoCode": "03",
                "countryCode": "BB"
            },
            {
                "name": "Saint James",
                "isoCode": "04",
                "countryCode": "BB"
            },
            {
                "name": "Saint John",
                "isoCode": "05",
                "countryCode": "BB"
            },
            {
                "name": "Saint Joseph",
                "isoCode": "06",
                "countryCode": "BB"
            },
            {
                "name": "Saint Lucy",
                "isoCode": "07",
                "countryCode": "BB"
            },
            {
                "name": "Saint Michael",
                "isoCode": "08",
                "countryCode": "BB"
            },
            {
                "name": "Saint Peter",
                "isoCode": "09",
                "countryCode": "BB"
            },
            {
                "name": "Saint Philip",
                "isoCode": "10",
                "countryCode": "BB"
            },
            {
                "name": "Saint Thomas",
                "isoCode": "11",
                "countryCode": "BB"
            },
            {
                "name": "Brest Region",
                "isoCode": "BR",
                "countryCode": "BY"
            },
            {
                "name": "Gomel Region",
                "isoCode": "HO",
                "countryCode": "BY"
            },
            {
                "name": "Grodno Region",
                "isoCode": "HR",
                "countryCode": "BY"
            },
            {
                "name": "Minsk",
                "isoCode": "HM",
                "countryCode": "BY"
            },
            {
                "name": "Minsk Region",
                "isoCode": "MI",
                "countryCode": "BY"
            },
            {
                "name": "Mogilev Region",
                "isoCode": "MA",
                "countryCode": "BY"
            },
            {
                "name": "Vitebsk Region",
                "isoCode": "VI",
                "countryCode": "BY"
            },
            {
                "name": "Antwerp",
                "isoCode": "VAN",
                "countryCode": "BE"
            },
            {
                "name": "Brussels-Capital Region",
                "isoCode": "BRU",
                "countryCode": "BE"
            },
            {
                "name": "East Flanders",
                "isoCode": "VOV",
                "countryCode": "BE"
            },
            {
                "name": "Flanders",
                "isoCode": "VLG",
                "countryCode": "BE"
            },
            {
                "name": "Flemish Brabant",
                "isoCode": "VBR",
                "countryCode": "BE"
            },
            {
                "name": "Hainaut",
                "isoCode": "WHT",
                "countryCode": "BE"
            },
            {
                "name": "Limburg",
                "isoCode": "VLI",
                "countryCode": "BE"
            },
            {
                "name": "Liège",
                "isoCode": "WLG",
                "countryCode": "BE"
            },
            {
                "name": "Luxembourg",
                "isoCode": "WLX",
                "countryCode": "BE"
            },
            {
                "name": "Namur",
                "isoCode": "WNA",
                "countryCode": "BE"
            },
            {
                "name": "Wallonia",
                "isoCode": "WAL",
                "countryCode": "BE"
            },
            {
                "name": "Walloon Brabant",
                "isoCode": "WBR",
                "countryCode": "BE"
            },
            {
                "name": "West Flanders",
                "isoCode": "VWV",
                "countryCode": "BE"
            },
            {
                "name": "Belize District",
                "isoCode": "BZ",
                "countryCode": "BZ"
            },
            {
                "name": "Cayo District",
                "isoCode": "CY",
                "countryCode": "BZ"
            },
            {
                "name": "Corozal District",
                "isoCode": "CZL",
                "countryCode": "BZ"
            },
            {
                "name": "Orange Walk District",
                "isoCode": "OW",
                "countryCode": "BZ"
            },
            {
                "name": "Stann Creek District",
                "isoCode": "SC",
                "countryCode": "BZ"
            },
            {
                "name": "Toledo District",
                "isoCode": "TOL",
                "countryCode": "BZ"
            },
            {
                "name": "Alibori Department",
                "isoCode": "AL",
                "countryCode": "BJ"
            },
            {
                "name": "Atakora Department",
                "isoCode": "AK",
                "countryCode": "BJ"
            },
            {
                "name": "Atlantique Department",
                "isoCode": "AQ",
                "countryCode": "BJ"
            },
            {
                "name": "Borgou Department",
                "isoCode": "BO",
                "countryCode": "BJ"
            },
            {
                "name": "Collines Department",
                "isoCode": "CO",
                "countryCode": "BJ"
            },
            {
                "name": "Donga Department",
                "isoCode": "DO",
                "countryCode": "BJ"
            },
            {
                "name": "Kouffo Department",
                "isoCode": "KO",
                "countryCode": "BJ"
            },
            {
                "name": "Littoral Department",
                "isoCode": "LI",
                "countryCode": "BJ"
            },
            {
                "name": "Mono Department",
                "isoCode": "MO",
                "countryCode": "BJ"
            },
            {
                "name": "Ouémé Department",
                "isoCode": "OU",
                "countryCode": "BJ"
            },
            {
                "name": "Plateau Department",
                "isoCode": "PL",
                "countryCode": "BJ"
            },
            {
                "name": "Zou Department",
                "isoCode": "ZO",
                "countryCode": "BJ"
            },
            {
                "name": "Devonshire Parish",
                "isoCode": "DEV",
                "countryCode": "BM"
            },
            {
                "name": "Hamilton Parish",
                "isoCode": "HA",
                "countryCode": "BM"
            },
            {
                "name": "Paget Parish",
                "isoCode": "PAG",
                "countryCode": "BM"
            },
            {
                "name": "Pembroke Parish",
                "isoCode": "PEM",
                "countryCode": "BM"
            },
            {
                "name": "Saint George's Parish",
                "isoCode": "SGE",
                "countryCode": "BM"
            },
            {
                "name": "Sandys Parish",
                "isoCode": "SAN",
                "countryCode": "BM"
            },
            {
                "name": "Smith's Parish,",
                "isoCode": "SMI",
                "countryCode": "BM"
            },
            {
                "name": "Southampton Parish",
                "isoCode": "SOU",
                "countryCode": "BM"
            },
            {
                "name": "Warwick Parish",
                "isoCode": "WAR",
                "countryCode": "BM"
            },
            {
                "name": "Bumthang District",
                "isoCode": "33",
                "countryCode": "BT"
            },
            {
                "name": "Chukha District",
                "isoCode": "12",
                "countryCode": "BT"
            },
            {
                "name": "Dagana District",
                "isoCode": "22",
                "countryCode": "BT"
            },
            {
                "name": "Gasa District",
                "isoCode": "GA",
                "countryCode": "BT"
            },
            {
                "name": "Haa District",
                "isoCode": "13",
                "countryCode": "BT"
            },
            {
                "name": "Lhuntse District",
                "isoCode": "44",
                "countryCode": "BT"
            },
            {
                "name": "Mongar District",
                "isoCode": "42",
                "countryCode": "BT"
            },
            {
                "name": "Paro District",
                "isoCode": "11",
                "countryCode": "BT"
            },
            {
                "name": "Pemagatshel District",
                "isoCode": "43",
                "countryCode": "BT"
            },
            {
                "name": "Punakha District",
                "isoCode": "23",
                "countryCode": "BT"
            },
            {
                "name": "Samdrup Jongkhar District",
                "isoCode": "45",
                "countryCode": "BT"
            },
            {
                "name": "Samtse District",
                "isoCode": "14",
                "countryCode": "BT"
            },
            {
                "name": "Sarpang District",
                "isoCode": "31",
                "countryCode": "BT"
            },
            {
                "name": "Thimphu District",
                "isoCode": "15",
                "countryCode": "BT"
            },
            {
                "name": "Trashigang District",
                "isoCode": "41",
                "countryCode": "BT"
            },
            {
                "name": "Trongsa District",
                "isoCode": "32",
                "countryCode": "BT"
            },
            {
                "name": "Tsirang District",
                "isoCode": "21",
                "countryCode": "BT"
            },
            {
                "name": "Wangdue Phodrang District",
                "isoCode": "24",
                "countryCode": "BT"
            },
            {
                "name": "Zhemgang District",
                "isoCode": "34",
                "countryCode": "BT"
            },
            {
                "name": "Beni Department",
                "isoCode": "B",
                "countryCode": "BO"
            },
            {
                "name": "Chuquisaca Department",
                "isoCode": "H",
                "countryCode": "BO"
            },
            {
                "name": "Cochabamba Department",
                "isoCode": "C",
                "countryCode": "BO"
            },
            {
                "name": "La Paz Department",
                "isoCode": "L",
                "countryCode": "BO"
            },
            {
                "name": "Oruro Department",
                "isoCode": "O",
                "countryCode": "BO"
            },
            {
                "name": "Pando Department",
                "isoCode": "N",
                "countryCode": "BO"
            },
            {
                "name": "Potosí Department",
                "isoCode": "P",
                "countryCode": "BO"
            },
            {
                "name": "Santa Cruz Department",
                "isoCode": "S",
                "countryCode": "BO"
            },
            {
                "name": "Tarija Department",
                "isoCode": "T",
                "countryCode": "BO"
            },
            {
                "name": "Bosnian Podrinje Canton",
                "isoCode": "05",
                "countryCode": "BA"
            },
            {
                "name": "Brčko District",
                "isoCode": "BRC",
                "countryCode": "BA"
            },
            {
                "name": "Canton 10",
                "isoCode": "10",
                "countryCode": "BA"
            },
            {
                "name": "Central Bosnia Canton",
                "isoCode": "06",
                "countryCode": "BA"
            },
            {
                "name": "Federation of Bosnia and Herzegovina",
                "isoCode": "BIH",
                "countryCode": "BA"
            },
            {
                "name": "Herzegovina-Neretva Canton",
                "isoCode": "07",
                "countryCode": "BA"
            },
            {
                "name": "Posavina Canton",
                "isoCode": "02",
                "countryCode": "BA"
            },
            {
                "name": "Republika Srpska",
                "isoCode": "SRP",
                "countryCode": "BA"
            },
            {
                "name": "Sarajevo Canton",
                "isoCode": "09",
                "countryCode": "BA"
            },
            {
                "name": "Tuzla Canton",
                "isoCode": "03",
                "countryCode": "BA"
            },
            {
                "name": "Una-Sana Canton",
                "isoCode": "01",
                "countryCode": "BA"
            },
            {
                "name": "West Herzegovina Canton",
                "isoCode": "08",
                "countryCode": "BA"
            },
            {
                "name": "Zenica-Doboj Canton",
                "isoCode": "04",
                "countryCode": "BA"
            },
            {
                "name": "Central District",
                "isoCode": "CE",
                "countryCode": "BW"
            },
            {
                "name": "Ghanzi District",
                "isoCode": "GH",
                "countryCode": "BW"
            },
            {
                "name": "Kgalagadi District",
                "isoCode": "KG",
                "countryCode": "BW"
            },
            {
                "name": "Kgatleng District",
                "isoCode": "KL",
                "countryCode": "BW"
            },
            {
                "name": "Kweneng District",
                "isoCode": "KW",
                "countryCode": "BW"
            },
            {
                "name": "Ngamiland",
                "isoCode": "NG",
                "countryCode": "BW"
            },
            {
                "name": "North-East District",
                "isoCode": "NE",
                "countryCode": "BW"
            },
            {
                "name": "North-West District",
                "isoCode": "NW",
                "countryCode": "BW"
            },
            {
                "name": "South-East District",
                "isoCode": "SE",
                "countryCode": "BW"
            },
            {
                "name": "Southern District",
                "isoCode": "SO",
                "countryCode": "BW"
            },
            {
                "name": "Acre",
                "isoCode": "AC",
                "countryCode": "BR"
            },
            {
                "name": "Alagoas",
                "isoCode": "AL",
                "countryCode": "BR"
            },
            {
                "name": "Amapá",
                "isoCode": "AP",
                "countryCode": "BR"
            },
            {
                "name": "Amazonas",
                "isoCode": "AM",
                "countryCode": "BR"
            },
            {
                "name": "Bahia",
                "isoCode": "BA",
                "countryCode": "BR"
            },
            {
                "name": "Ceará",
                "isoCode": "CE",
                "countryCode": "BR"
            },
            {
                "name": "Distrito Federal",
                "isoCode": "DF",
                "countryCode": "BR"
            },
            {
                "name": "Espírito Santo",
                "isoCode": "ES",
                "countryCode": "BR"
            },
            {
                "name": "Goiás",
                "isoCode": "GO",
                "countryCode": "BR"
            },
            {
                "name": "Maranhão",
                "isoCode": "MA",
                "countryCode": "BR"
            },
            {
                "name": "Mato Grosso",
                "isoCode": "MT",
                "countryCode": "BR"
            },
            {
                "name": "Mato Grosso do Sul",
                "isoCode": "MS",
                "countryCode": "BR"
            },
            {
                "name": "Minas Gerais",
                "isoCode": "MG",
                "countryCode": "BR"
            },
            {
                "name": "Paraná",
                "isoCode": "PR",
                "countryCode": "BR"
            },
            {
                "name": "Paraíba",
                "isoCode": "PB",
                "countryCode": "BR"
            },
            {
                "name": "Pará",
                "isoCode": "PA",
                "countryCode": "BR"
            },
            {
                "name": "Pernambuco",
                "isoCode": "PE",
                "countryCode": "BR"
            },
            {
                "name": "Piauí",
                "isoCode": "PI",
                "countryCode": "BR"
            },
            {
                "name": "Rio Grande do Norte",
                "isoCode": "RN",
                "countryCode": "BR"
            },
            {
                "name": "Rio Grande do Sul",
                "isoCode": "RS",
                "countryCode": "BR"
            },
            {
                "name": "Rio de Janeiro",
                "isoCode": "RJ",
                "countryCode": "BR"
            },
            {
                "name": "Rondônia",
                "isoCode": "RO",
                "countryCode": "BR"
            },
            {
                "name": "Roraima",
                "isoCode": "RR",
                "countryCode": "BR"
            },
            {
                "name": "Santa Catarina",
                "isoCode": "SC",
                "countryCode": "BR"
            },
            {
                "name": "Sergipe",
                "isoCode": "SE",
                "countryCode": "BR"
            },
            {
                "name": "São Paulo",
                "isoCode": "SP",
                "countryCode": "BR"
            },
            {
                "name": "Tocantins",
                "isoCode": "TO",
                "countryCode": "BR"
            },
            {
                "name": "Belait District",
                "isoCode": "BE",
                "countryCode": "BN"
            },
            {
                "name": "Brunei-Muara District",
                "isoCode": "BM",
                "countryCode": "BN"
            },
            {
                "name": "Temburong District",
                "isoCode": "TE",
                "countryCode": "BN"
            },
            {
                "name": "Tutong District",
                "isoCode": "TU",
                "countryCode": "BN"
            },
            {
                "name": "Blagoevgrad Province",
                "isoCode": "01",
                "countryCode": "BG"
            },
            {
                "name": "Burgas Province",
                "isoCode": "02",
                "countryCode": "BG"
            },
            {
                "name": "Dobrich Province",
                "isoCode": "08",
                "countryCode": "BG"
            },
            {
                "name": "Gabrovo Province",
                "isoCode": "07",
                "countryCode": "BG"
            },
            {
                "name": "Haskovo Province",
                "isoCode": "26",
                "countryCode": "BG"
            },
            {
                "name": "Kardzhali Province",
                "isoCode": "09",
                "countryCode": "BG"
            },
            {
                "name": "Kyustendil Province",
                "isoCode": "10",
                "countryCode": "BG"
            },
            {
                "name": "Lovech Province",
                "isoCode": "11",
                "countryCode": "BG"
            },
            {
                "name": "Montana Province",
                "isoCode": "12",
                "countryCode": "BG"
            },
            {
                "name": "Pazardzhik Province",
                "isoCode": "13",
                "countryCode": "BG"
            },
            {
                "name": "Pernik Province",
                "isoCode": "14",
                "countryCode": "BG"
            },
            {
                "name": "Pleven Province",
                "isoCode": "15",
                "countryCode": "BG"
            },
            {
                "name": "Plovdiv Province",
                "isoCode": "16",
                "countryCode": "BG"
            },
            {
                "name": "Razgrad Province",
                "isoCode": "17",
                "countryCode": "BG"
            },
            {
                "name": "Ruse Province",
                "isoCode": "18",
                "countryCode": "BG"
            },
            {
                "name": "Shumen",
                "isoCode": "27",
                "countryCode": "BG"
            },
            {
                "name": "Silistra Province",
                "isoCode": "19",
                "countryCode": "BG"
            },
            {
                "name": "Sliven Province",
                "isoCode": "20",
                "countryCode": "BG"
            },
            {
                "name": "Smolyan Province",
                "isoCode": "21",
                "countryCode": "BG"
            },
            {
                "name": "Sofia City Province",
                "isoCode": "22",
                "countryCode": "BG"
            },
            {
                "name": "Sofia Province",
                "isoCode": "23",
                "countryCode": "BG"
            },
            {
                "name": "Stara Zagora Province",
                "isoCode": "24",
                "countryCode": "BG"
            },
            {
                "name": "Targovishte Province",
                "isoCode": "25",
                "countryCode": "BG"
            },
            {
                "name": "Varna Province",
                "isoCode": "03",
                "countryCode": "BG"
            },
            {
                "name": "Veliko Tarnovo Province",
                "isoCode": "04",
                "countryCode": "BG"
            },
            {
                "name": "Vidin Province",
                "isoCode": "05",
                "countryCode": "BG"
            },
            {
                "name": "Vratsa Province",
                "isoCode": "06",
                "countryCode": "BG"
            },
            {
                "name": "Yambol Province",
                "isoCode": "28",
                "countryCode": "BG"
            },
            {
                "name": "Balé Province",
                "isoCode": "BAL",
                "countryCode": "BF"
            },
            {
                "name": "Bam Province",
                "isoCode": "BAM",
                "countryCode": "BF"
            },
            {
                "name": "Banwa Province",
                "isoCode": "BAN",
                "countryCode": "BF"
            },
            {
                "name": "Bazèga Province",
                "isoCode": "BAZ",
                "countryCode": "BF"
            },
            {
                "name": "Boucle du Mouhoun Region",
                "isoCode": "01",
                "countryCode": "BF"
            },
            {
                "name": "Bougouriba Province",
                "isoCode": "BGR",
                "countryCode": "BF"
            },
            {
                "name": "Boulgou",
                "isoCode": "BLG",
                "countryCode": "BF"
            },
            {
                "name": "Cascades Region",
                "isoCode": "02",
                "countryCode": "BF"
            },
            {
                "name": "Centre",
                "isoCode": "03",
                "countryCode": "BF"
            },
            {
                "name": "Centre-Est Region",
                "isoCode": "04",
                "countryCode": "BF"
            },
            {
                "name": "Centre-Nord Region",
                "isoCode": "05",
                "countryCode": "BF"
            },
            {
                "name": "Centre-Ouest Region",
                "isoCode": "06",
                "countryCode": "BF"
            },
            {
                "name": "Centre-Sud Region",
                "isoCode": "07",
                "countryCode": "BF"
            },
            {
                "name": "Comoé Province",
                "isoCode": "COM",
                "countryCode": "BF"
            },
            {
                "name": "Est Region",
                "isoCode": "08",
                "countryCode": "BF"
            },
            {
                "name": "Ganzourgou Province",
                "isoCode": "GAN",
                "countryCode": "BF"
            },
            {
                "name": "Gnagna Province",
                "isoCode": "GNA",
                "countryCode": "BF"
            },
            {
                "name": "Gourma Province",
                "isoCode": "GOU",
                "countryCode": "BF"
            },
            {
                "name": "Hauts-Bassins Region",
                "isoCode": "09",
                "countryCode": "BF"
            },
            {
                "name": "Houet Province",
                "isoCode": "HOU",
                "countryCode": "BF"
            },
            {
                "name": "Ioba Province",
                "isoCode": "IOB",
                "countryCode": "BF"
            },
            {
                "name": "Kadiogo Province",
                "isoCode": "KAD",
                "countryCode": "BF"
            },
            {
                "name": "Komondjari Province",
                "isoCode": "KMD",
                "countryCode": "BF"
            },
            {
                "name": "Kompienga Province",
                "isoCode": "KMP",
                "countryCode": "BF"
            },
            {
                "name": "Kossi Province",
                "isoCode": "KOS",
                "countryCode": "BF"
            },
            {
                "name": "Koulpélogo Province",
                "isoCode": "KOP",
                "countryCode": "BF"
            },
            {
                "name": "Kouritenga Province",
                "isoCode": "KOT",
                "countryCode": "BF"
            },
            {
                "name": "Kourwéogo Province",
                "isoCode": "KOW",
                "countryCode": "BF"
            },
            {
                "name": "Kénédougou Province",
                "isoCode": "KEN",
                "countryCode": "BF"
            },
            {
                "name": "Loroum Province",
                "isoCode": "LOR",
                "countryCode": "BF"
            },
            {
                "name": "Léraba Province",
                "isoCode": "LER",
                "countryCode": "BF"
            },
            {
                "name": "Mouhoun",
                "isoCode": "MOU",
                "countryCode": "BF"
            },
            {
                "name": "Nahouri Province",
                "isoCode": "NAO",
                "countryCode": "BF"
            },
            {
                "name": "Namentenga Province",
                "isoCode": "NAM",
                "countryCode": "BF"
            },
            {
                "name": "Nayala Province",
                "isoCode": "NAY",
                "countryCode": "BF"
            },
            {
                "name": "Nord Region, Burkina Faso",
                "isoCode": "10",
                "countryCode": "BF"
            },
            {
                "name": "Noumbiel Province",
                "isoCode": "NOU",
                "countryCode": "BF"
            },
            {
                "name": "Oubritenga Province",
                "isoCode": "OUB",
                "countryCode": "BF"
            },
            {
                "name": "Oudalan Province",
                "isoCode": "OUD",
                "countryCode": "BF"
            },
            {
                "name": "Passoré Province",
                "isoCode": "PAS",
                "countryCode": "BF"
            },
            {
                "name": "Plateau-Central Region",
                "isoCode": "11",
                "countryCode": "BF"
            },
            {
                "name": "Poni Province",
                "isoCode": "PON",
                "countryCode": "BF"
            },
            {
                "name": "Sahel Region",
                "isoCode": "12",
                "countryCode": "BF"
            },
            {
                "name": "Sanguié Province",
                "isoCode": "SNG",
                "countryCode": "BF"
            },
            {
                "name": "Sanmatenga Province",
                "isoCode": "SMT",
                "countryCode": "BF"
            },
            {
                "name": "Sissili Province",
                "isoCode": "SIS",
                "countryCode": "BF"
            },
            {
                "name": "Soum Province",
                "isoCode": "SOM",
                "countryCode": "BF"
            },
            {
                "name": "Sourou Province",
                "isoCode": "SOR",
                "countryCode": "BF"
            },
            {
                "name": "Sud-Ouest Region",
                "isoCode": "13",
                "countryCode": "BF"
            },
            {
                "name": "Séno Province",
                "isoCode": "SEN",
                "countryCode": "BF"
            },
            {
                "name": "Tapoa Province",
                "isoCode": "TAP",
                "countryCode": "BF"
            },
            {
                "name": "Tuy Province",
                "isoCode": "TUI",
                "countryCode": "BF"
            },
            {
                "name": "Yagha Province",
                "isoCode": "YAG",
                "countryCode": "BF"
            },
            {
                "name": "Yatenga Province",
                "isoCode": "YAT",
                "countryCode": "BF"
            },
            {
                "name": "Ziro Province",
                "isoCode": "ZIR",
                "countryCode": "BF"
            },
            {
                "name": "Zondoma Province",
                "isoCode": "ZON",
                "countryCode": "BF"
            },
            {
                "name": "Zoundwéogo Province",
                "isoCode": "ZOU",
                "countryCode": "BF"
            },
            {
                "name": "Bubanza Province",
                "isoCode": "BB",
                "countryCode": "BI"
            },
            {
                "name": "Bujumbura Mairie Province",
                "isoCode": "BM",
                "countryCode": "BI"
            },
            {
                "name": "Bujumbura Rural Province",
                "isoCode": "BL",
                "countryCode": "BI"
            },
            {
                "name": "Bururi Province",
                "isoCode": "BR",
                "countryCode": "BI"
            },
            {
                "name": "Cankuzo Province",
                "isoCode": "CA",
                "countryCode": "BI"
            },
            {
                "name": "Cibitoke Province",
                "isoCode": "CI",
                "countryCode": "BI"
            },
            {
                "name": "Gitega Province",
                "isoCode": "GI",
                "countryCode": "BI"
            },
            {
                "name": "Karuzi Province",
                "isoCode": "KR",
                "countryCode": "BI"
            },
            {
                "name": "Kayanza Province",
                "isoCode": "KY",
                "countryCode": "BI"
            },
            {
                "name": "Kirundo Province",
                "isoCode": "KI",
                "countryCode": "BI"
            },
            {
                "name": "Makamba Province",
                "isoCode": "MA",
                "countryCode": "BI"
            },
            {
                "name": "Muramvya Province",
                "isoCode": "MU",
                "countryCode": "BI"
            },
            {
                "name": "Muyinga Province",
                "isoCode": "MY",
                "countryCode": "BI"
            },
            {
                "name": "Mwaro Province",
                "isoCode": "MW",
                "countryCode": "BI"
            },
            {
                "name": "Ngozi Province",
                "isoCode": "NG",
                "countryCode": "BI"
            },
            {
                "name": "Rumonge Province",
                "isoCode": "RM",
                "countryCode": "BI"
            },
            {
                "name": "Rutana Province",
                "isoCode": "RT",
                "countryCode": "BI"
            },
            {
                "name": "Ruyigi Province",
                "isoCode": "RY",
                "countryCode": "BI"
            },
            {
                "name": "Banteay Meanchey",
                "isoCode": "1",
                "countryCode": "KH"
            },
            {
                "name": "Battambang",
                "isoCode": "2",
                "countryCode": "KH"
            },
            {
                "name": "Kampong Cham",
                "isoCode": "3",
                "countryCode": "KH"
            },
            {
                "name": "Kampong Chhnang",
                "isoCode": "4",
                "countryCode": "KH"
            },
            {
                "name": "Kampong Speu",
                "isoCode": "5",
                "countryCode": "KH"
            },
            {
                "name": "Kampong Thom",
                "isoCode": "6",
                "countryCode": "KH"
            },
            {
                "name": "Kampot",
                "isoCode": "7",
                "countryCode": "KH"
            },
            {
                "name": "Kandal",
                "isoCode": "8",
                "countryCode": "KH"
            },
            {
                "name": "Kep",
                "isoCode": "23",
                "countryCode": "KH"
            },
            {
                "name": "Koh Kong",
                "isoCode": "9",
                "countryCode": "KH"
            },
            {
                "name": "Kratie",
                "isoCode": "10",
                "countryCode": "KH"
            },
            {
                "name": "Mondulkiri",
                "isoCode": "11",
                "countryCode": "KH"
            },
            {
                "name": "Oddar Meanchey",
                "isoCode": "22",
                "countryCode": "KH"
            },
            {
                "name": "Pailin",
                "isoCode": "24",
                "countryCode": "KH"
            },
            {
                "name": "Phnom Penh",
                "isoCode": "12",
                "countryCode": "KH"
            },
            {
                "name": "Preah Vihear",
                "isoCode": "13",
                "countryCode": "KH"
            },
            {
                "name": "Prey Veng",
                "isoCode": "14",
                "countryCode": "KH"
            },
            {
                "name": "Pursat",
                "isoCode": "15",
                "countryCode": "KH"
            },
            {
                "name": "Ratanakiri",
                "isoCode": "16",
                "countryCode": "KH"
            },
            {
                "name": "Siem Reap",
                "isoCode": "17",
                "countryCode": "KH"
            },
            {
                "name": "Sihanoukville",
                "isoCode": "18",
                "countryCode": "KH"
            },
            {
                "name": "Stung Treng",
                "isoCode": "19",
                "countryCode": "KH"
            },
            {
                "name": "Svay Rieng",
                "isoCode": "20",
                "countryCode": "KH"
            },
            {
                "name": "Tai Po District",
                "isoCode": "NTP",
                "countryCode": "KH"
            },
            {
                "name": "Takeo",
                "isoCode": "21",
                "countryCode": "KH"
            },
            {
                "name": "Adamawa",
                "isoCode": "AD",
                "countryCode": "CM"
            },
            {
                "name": "Centre",
                "isoCode": "CE",
                "countryCode": "CM"
            },
            {
                "name": "East",
                "isoCode": "ES",
                "countryCode": "CM"
            },
            {
                "name": "Far North",
                "isoCode": "EN",
                "countryCode": "CM"
            },
            {
                "name": "Littoral",
                "isoCode": "LT",
                "countryCode": "CM"
            },
            {
                "name": "North",
                "isoCode": "NO",
                "countryCode": "CM"
            },
            {
                "name": "Northwest",
                "isoCode": "NW",
                "countryCode": "CM"
            },
            {
                "name": "South",
                "isoCode": "SU",
                "countryCode": "CM"
            },
            {
                "name": "Southwest",
                "isoCode": "SW",
                "countryCode": "CM"
            },
            {
                "name": "West",
                "isoCode": "OU",
                "countryCode": "CM"
            },
            {
                "name": "Alberta",
                "isoCode": "AB",
                "countryCode": "CA"
            },
            {
                "name": "British Columbia",
                "isoCode": "BC",
                "countryCode": "CA"
            },
            {
                "name": "Manitoba",
                "isoCode": "MB",
                "countryCode": "CA"
            },
            {
                "name": "New Brunswick",
                "isoCode": "NB",
                "countryCode": "CA"
            },
            {
                "name": "Newfoundland and Labrador",
                "isoCode": "NL",
                "countryCode": "CA"
            },
            {
                "name": "Northwest Territories",
                "isoCode": "NT",
                "countryCode": "CA"
            },
            {
                "name": "Nova Scotia",
                "isoCode": "NS",
                "countryCode": "CA"
            },
            {
                "name": "Nunavut",
                "isoCode": "NU",
                "countryCode": "CA"
            },
            {
                "name": "Ontario",
                "isoCode": "ON",
                "countryCode": "CA"
            },
            {
                "name": "Prince Edward Island",
                "isoCode": "PE",
                "countryCode": "CA"
            },
            {
                "name": "Quebec",
                "isoCode": "QC",
                "countryCode": "CA"
            },
            {
                "name": "Saskatchewan",
                "isoCode": "SK",
                "countryCode": "CA"
            },
            {
                "name": "Yukon",
                "isoCode": "YT",
                "countryCode": "CA"
            },
            {
                "name": "Barlavento Islands",
                "isoCode": "B",
                "countryCode": "CV"
            },
            {
                "name": "Boa Vista",
                "isoCode": "BV",
                "countryCode": "CV"
            },
            {
                "name": "Brava",
                "isoCode": "BR",
                "countryCode": "CV"
            },
            {
                "name": "Maio Municipality",
                "isoCode": "MA",
                "countryCode": "CV"
            },
            {
                "name": "Mosteiros",
                "isoCode": "MO",
                "countryCode": "CV"
            },
            {
                "name": "Paul",
                "isoCode": "PA",
                "countryCode": "CV"
            },
            {
                "name": "Porto Novo",
                "isoCode": "PN",
                "countryCode": "CV"
            },
            {
                "name": "Praia",
                "isoCode": "PR",
                "countryCode": "CV"
            },
            {
                "name": "Ribeira Brava Municipality",
                "isoCode": "RB",
                "countryCode": "CV"
            },
            {
                "name": "Ribeira Grande",
                "isoCode": "RG",
                "countryCode": "CV"
            },
            {
                "name": "Ribeira Grande de Santiago",
                "isoCode": "RS",
                "countryCode": "CV"
            },
            {
                "name": "Sal",
                "isoCode": "SL",
                "countryCode": "CV"
            },
            {
                "name": "Santa Catarina",
                "isoCode": "CA",
                "countryCode": "CV"
            },
            {
                "name": "Santa Catarina do Fogo",
                "isoCode": "CF",
                "countryCode": "CV"
            },
            {
                "name": "Santa Cruz",
                "isoCode": "CR",
                "countryCode": "CV"
            },
            {
                "name": "Sotavento Islands",
                "isoCode": "S",
                "countryCode": "CV"
            },
            {
                "name": "São Domingos",
                "isoCode": "SD",
                "countryCode": "CV"
            },
            {
                "name": "São Filipe",
                "isoCode": "SF",
                "countryCode": "CV"
            },
            {
                "name": "São Lourenço dos Órgãos",
                "isoCode": "SO",
                "countryCode": "CV"
            },
            {
                "name": "São Miguel",
                "isoCode": "SM",
                "countryCode": "CV"
            },
            {
                "name": "São Vicente",
                "isoCode": "SV",
                "countryCode": "CV"
            },
            {
                "name": "Tarrafal",
                "isoCode": "TA",
                "countryCode": "CV"
            },
            {
                "name": "Tarrafal de São Nicolau",
                "isoCode": "TS",
                "countryCode": "CV"
            },
            {
                "name": "Bamingui-Bangoran Prefecture",
                "isoCode": "BB",
                "countryCode": "CF"
            },
            {
                "name": "Bangui",
                "isoCode": "BGF",
                "countryCode": "CF"
            },
            {
                "name": "Basse-Kotto Prefecture",
                "isoCode": "BK",
                "countryCode": "CF"
            },
            {
                "name": "Haut-Mbomou Prefecture",
                "isoCode": "HM",
                "countryCode": "CF"
            },
            {
                "name": "Haute-Kotto Prefecture",
                "isoCode": "HK",
                "countryCode": "CF"
            },
            {
                "name": "Kémo Prefecture",
                "isoCode": "KG",
                "countryCode": "CF"
            },
            {
                "name": "Lobaye Prefecture",
                "isoCode": "LB",
                "countryCode": "CF"
            },
            {
                "name": "Mambéré-Kadéï",
                "isoCode": "HS",
                "countryCode": "CF"
            },
            {
                "name": "Mbomou Prefecture",
                "isoCode": "MB",
                "countryCode": "CF"
            },
            {
                "name": "Nana-Grébizi Economic Prefecture",
                "isoCode": "KB",
                "countryCode": "CF"
            },
            {
                "name": "Nana-Mambéré Prefecture",
                "isoCode": "NM",
                "countryCode": "CF"
            },
            {
                "name": "Ombella-M'Poko Prefecture",
                "isoCode": "MP",
                "countryCode": "CF"
            },
            {
                "name": "Ouaka Prefecture",
                "isoCode": "UK",
                "countryCode": "CF"
            },
            {
                "name": "Ouham Prefecture",
                "isoCode": "AC",
                "countryCode": "CF"
            },
            {
                "name": "Ouham-Pendé Prefecture",
                "isoCode": "OP",
                "countryCode": "CF"
            },
            {
                "name": "Sangha-Mbaéré",
                "isoCode": "SE",
                "countryCode": "CF"
            },
            {
                "name": "Vakaga Prefecture",
                "isoCode": "VK",
                "countryCode": "CF"
            },
            {
                "name": "Bahr el Gazel",
                "isoCode": "BG",
                "countryCode": "TD"
            },
            {
                "name": "Batha Region",
                "isoCode": "BA",
                "countryCode": "TD"
            },
            {
                "name": "Borkou",
                "isoCode": "BO",
                "countryCode": "TD"
            },
            {
                "name": "Ennedi Region",
                "isoCode": "EN",
                "countryCode": "TD"
            },
            {
                "name": "Ennedi-Est",
                "isoCode": "EE",
                "countryCode": "TD"
            },
            {
                "name": "Ennedi-Ouest",
                "isoCode": "EO",
                "countryCode": "TD"
            },
            {
                "name": "Guéra Region",
                "isoCode": "GR",
                "countryCode": "TD"
            },
            {
                "name": "Hadjer-Lamis",
                "isoCode": "HL",
                "countryCode": "TD"
            },
            {
                "name": "Kanem Region",
                "isoCode": "KA",
                "countryCode": "TD"
            },
            {
                "name": "Lac Region",
                "isoCode": "LC",
                "countryCode": "TD"
            },
            {
                "name": "Logone Occidental Region",
                "isoCode": "LO",
                "countryCode": "TD"
            },
            {
                "name": "Logone Oriental Region",
                "isoCode": "LR",
                "countryCode": "TD"
            },
            {
                "name": "Mandoul Region",
                "isoCode": "MA",
                "countryCode": "TD"
            },
            {
                "name": "Mayo-Kebbi Est Region",
                "isoCode": "ME",
                "countryCode": "TD"
            },
            {
                "name": "Mayo-Kebbi Ouest Region",
                "isoCode": "MO",
                "countryCode": "TD"
            },
            {
                "name": "Moyen-Chari Region",
                "isoCode": "MC",
                "countryCode": "TD"
            },
            {
                "name": "N'Djamena",
                "isoCode": "ND",
                "countryCode": "TD"
            },
            {
                "name": "Ouaddaï Region",
                "isoCode": "OD",
                "countryCode": "TD"
            },
            {
                "name": "Salamat Region",
                "isoCode": "SA",
                "countryCode": "TD"
            },
            {
                "name": "Sila Region",
                "isoCode": "SI",
                "countryCode": "TD"
            },
            {
                "name": "Tandjilé Region",
                "isoCode": "TA",
                "countryCode": "TD"
            },
            {
                "name": "Tibesti Region",
                "isoCode": "TI",
                "countryCode": "TD"
            },
            {
                "name": "Wadi Fira Region",
                "isoCode": "WF",
                "countryCode": "TD"
            },
            {
                "name": "Aisén del General Carlos Ibañez del Campo",
                "isoCode": "AI",
                "countryCode": "CL"
            },
            {
                "name": "Antofagasta",
                "isoCode": "AN",
                "countryCode": "CL"
            },
            {
                "name": "Arica y Parinacota",
                "isoCode": "AP",
                "countryCode": "CL"
            },
            {
                "name": "Atacama",
                "isoCode": "AT",
                "countryCode": "CL"
            },
            {
                "name": "Biobío",
                "isoCode": "BI",
                "countryCode": "CL"
            },
            {
                "name": "Coquimbo",
                "isoCode": "CO",
                "countryCode": "CL"
            },
            {
                "name": "La Araucanía",
                "isoCode": "AR",
                "countryCode": "CL"
            },
            {
                "name": "Libertador General Bernardo O'Higgins",
                "isoCode": "LI",
                "countryCode": "CL"
            },
            {
                "name": "Los Lagos",
                "isoCode": "LL",
                "countryCode": "CL"
            },
            {
                "name": "Los Ríos",
                "isoCode": "LR",
                "countryCode": "CL"
            },
            {
                "name": "Magallanes y de la Antártica Chilena",
                "isoCode": "MA",
                "countryCode": "CL"
            },
            {
                "name": "Maule",
                "isoCode": "ML",
                "countryCode": "CL"
            },
            {
                "name": "Región Metropolitana de Santiago",
                "isoCode": "RM",
                "countryCode": "CL"
            },
            {
                "name": "Tarapacá",
                "isoCode": "TA",
                "countryCode": "CL"
            },
            {
                "name": "Valparaíso",
                "isoCode": "VS",
                "countryCode": "CL"
            },
            {
                "name": "Ñuble",
                "isoCode": "NB",
                "countryCode": "CL"
            },
            {
                "name": "Anhui",
                "isoCode": "AH",
                "countryCode": "CN"
            },
            {
                "name": "Beijing",
                "isoCode": "BJ",
                "countryCode": "CN"
            },
            {
                "name": "Chongqing",
                "isoCode": "CQ",
                "countryCode": "CN"
            },
            {
                "name": "Fujian",
                "isoCode": "FJ",
                "countryCode": "CN"
            },
            {
                "name": "Gansu",
                "isoCode": "GS",
                "countryCode": "CN"
            },
            {
                "name": "Guangdong",
                "isoCode": "GD",
                "countryCode": "CN"
            },
            {
                "name": "Guangxi Zhuang",
                "isoCode": "GX",
                "countryCode": "CN"
            },
            {
                "name": "Guizhou",
                "isoCode": "GZ",
                "countryCode": "CN"
            },
            {
                "name": "Hainan",
                "isoCode": "HI",
                "countryCode": "CN"
            },
            {
                "name": "Hebei",
                "isoCode": "HE",
                "countryCode": "CN"
            },
            {
                "name": "Heilongjiang",
                "isoCode": "HL",
                "countryCode": "CN"
            },
            {
                "name": "Henan",
                "isoCode": "HA",
                "countryCode": "CN"
            },
            {
                "name": "Hong Kong SAR",
                "isoCode": "HK",
                "countryCode": "CN"
            },
            {
                "name": "Hubei",
                "isoCode": "HB",
                "countryCode": "CN"
            },
            {
                "name": "Hunan",
                "isoCode": "HN",
                "countryCode": "CN"
            },
            {
                "name": "Inner Mongolia",
                "isoCode": "NM",
                "countryCode": "CN"
            },
            {
                "name": "Jiangsu",
                "isoCode": "JS",
                "countryCode": "CN"
            },
            {
                "name": "Jiangxi",
                "isoCode": "JX",
                "countryCode": "CN"
            },
            {
                "name": "Jilin",
                "isoCode": "JL",
                "countryCode": "CN"
            },
            {
                "name": "Liaoning",
                "isoCode": "LN",
                "countryCode": "CN"
            },
            {
                "name": "Macau SAR",
                "isoCode": "MO",
                "countryCode": "CN"
            },
            {
                "name": "Ningxia Huizu",
                "isoCode": "NX",
                "countryCode": "CN"
            },
            {
                "name": "Qinghai",
                "isoCode": "QH",
                "countryCode": "CN"
            },
            {
                "name": "Shaanxi",
                "isoCode": "SN",
                "countryCode": "CN"
            },
            {
                "name": "Shandong",
                "isoCode": "SD",
                "countryCode": "CN"
            },
            {
                "name": "Shanghai",
                "isoCode": "SH",
                "countryCode": "CN"
            },
            {
                "name": "Shanxi",
                "isoCode": "SX",
                "countryCode": "CN"
            },
            {
                "name": "Sichuan",
                "isoCode": "SC",
                "countryCode": "CN"
            },
            {
                "name": "Taiwan",
                "isoCode": "TW",
                "countryCode": "CN"
            },
            {
                "name": "Tianjin",
                "isoCode": "TJ",
                "countryCode": "CN"
            },
            {
                "name": "Xinjiang",
                "isoCode": "XJ",
                "countryCode": "CN"
            },
            {
                "name": "Xizang",
                "isoCode": "XZ",
                "countryCode": "CN"
            },
            {
                "name": "Yunnan",
                "isoCode": "YN",
                "countryCode": "CN"
            },
            {
                "name": "Zhejiang",
                "isoCode": "ZJ",
                "countryCode": "CN"
            },
            {
                "name": "Amazonas",
                "isoCode": "AMA",
                "countryCode": "CO"
            },
            {
                "name": "Antioquia",
                "isoCode": "ANT",
                "countryCode": "CO"
            },
            {
                "name": "Arauca",
                "isoCode": "ARA",
                "countryCode": "CO"
            },
            {
                "name": "Archipiélago de San Andrés, Providencia y Santa Catalina",
                "isoCode": "SAP",
                "countryCode": "CO"
            },
            {
                "name": "Atlántico",
                "isoCode": "ATL",
                "countryCode": "CO"
            },
            {
                "name": "Bogotá D.C.",
                "isoCode": "DC",
                "countryCode": "CO"
            },
            {
                "name": "Bolívar",
                "isoCode": "BOL",
                "countryCode": "CO"
            },
            {
                "name": "Boyacá",
                "isoCode": "BOY",
                "countryCode": "CO"
            },
            {
                "name": "Caldas",
                "isoCode": "CAL",
                "countryCode": "CO"
            },
            {
                "name": "Caquetá",
                "isoCode": "CAQ",
                "countryCode": "CO"
            },
            {
                "name": "Casanare",
                "isoCode": "CAS",
                "countryCode": "CO"
            },
            {
                "name": "Cauca",
                "isoCode": "CAU",
                "countryCode": "CO"
            },
            {
                "name": "Cesar",
                "isoCode": "CES",
                "countryCode": "CO"
            },
            {
                "name": "Chocó",
                "isoCode": "CHO",
                "countryCode": "CO"
            },
            {
                "name": "Cundinamarca",
                "isoCode": "CUN",
                "countryCode": "CO"
            },
            {
                "name": "Córdoba",
                "isoCode": "COR",
                "countryCode": "CO"
            },
            {
                "name": "Guainía",
                "isoCode": "GUA",
                "countryCode": "CO"
            },
            {
                "name": "Guaviare",
                "isoCode": "GUV",
                "countryCode": "CO"
            },
            {
                "name": "Huila",
                "isoCode": "HUI",
                "countryCode": "CO"
            },
            {
                "name": "La Guajira",
                "isoCode": "LAG",
                "countryCode": "CO"
            },
            {
                "name": "Magdalena",
                "isoCode": "MAG",
                "countryCode": "CO"
            },
            {
                "name": "Meta",
                "isoCode": "MET",
                "countryCode": "CO"
            },
            {
                "name": "Nariño",
                "isoCode": "NAR",
                "countryCode": "CO"
            },
            {
                "name": "Norte de Santander",
                "isoCode": "NSA",
                "countryCode": "CO"
            },
            {
                "name": "Putumayo",
                "isoCode": "PUT",
                "countryCode": "CO"
            },
            {
                "name": "Quindío",
                "isoCode": "QUI",
                "countryCode": "CO"
            },
            {
                "name": "Risaralda",
                "isoCode": "RIS",
                "countryCode": "CO"
            },
            {
                "name": "Santander",
                "isoCode": "SAN",
                "countryCode": "CO"
            },
            {
                "name": "Sucre",
                "isoCode": "SUC",
                "countryCode": "CO"
            },
            {
                "name": "Tolima",
                "isoCode": "TOL",
                "countryCode": "CO"
            },
            {
                "name": "Valle del Cauca",
                "isoCode": "VAC",
                "countryCode": "CO"
            },
            {
                "name": "Vaupés",
                "isoCode": "VAU",
                "countryCode": "CO"
            },
            {
                "name": "Vichada",
                "isoCode": "VID",
                "countryCode": "CO"
            },
            {
                "name": "Anjouan",
                "isoCode": "A",
                "countryCode": "KM"
            },
            {
                "name": "Grande Comore",
                "isoCode": "G",
                "countryCode": "KM"
            },
            {
                "name": "Mohéli",
                "isoCode": "M",
                "countryCode": "KM"
            },
            {
                "name": "Bouenza Department",
                "isoCode": "11",
                "countryCode": "CG"
            },
            {
                "name": "Brazzaville",
                "isoCode": "BZV",
                "countryCode": "CG"
            },
            {
                "name": "Cuvette Department",
                "isoCode": "8",
                "countryCode": "CG"
            },
            {
                "name": "Cuvette-Ouest Department",
                "isoCode": "15",
                "countryCode": "CG"
            },
            {
                "name": "Kouilou Department",
                "isoCode": "5",
                "countryCode": "CG"
            },
            {
                "name": "Likouala Department",
                "isoCode": "7",
                "countryCode": "CG"
            },
            {
                "name": "Lékoumou Department",
                "isoCode": "2",
                "countryCode": "CG"
            },
            {
                "name": "Niari Department",
                "isoCode": "9",
                "countryCode": "CG"
            },
            {
                "name": "Plateaux Department",
                "isoCode": "14",
                "countryCode": "CG"
            },
            {
                "name": "Pointe-Noire",
                "isoCode": "16",
                "countryCode": "CG"
            },
            {
                "name": "Pool Department",
                "isoCode": "12",
                "countryCode": "CG"
            },
            {
                "name": "Sangha Department",
                "isoCode": "13",
                "countryCode": "CG"
            },
            {
                "name": "Bas-Uélé",
                "isoCode": "BU",
                "countryCode": "CD"
            },
            {
                "name": "Haut-Katanga",
                "isoCode": "HK",
                "countryCode": "CD"
            },
            {
                "name": "Haut-Lomami",
                "isoCode": "HL",
                "countryCode": "CD"
            },
            {
                "name": "Haut-Uélé",
                "isoCode": "HU",
                "countryCode": "CD"
            },
            {
                "name": "Ituri",
                "isoCode": "IT",
                "countryCode": "CD"
            },
            {
                "name": "Kasaï",
                "isoCode": "KS",
                "countryCode": "CD"
            },
            {
                "name": "Kasaï Central",
                "isoCode": "KC",
                "countryCode": "CD"
            },
            {
                "name": "Kasaï Oriental",
                "isoCode": "KE",
                "countryCode": "CD"
            },
            {
                "name": "Kinshasa",
                "isoCode": "KN",
                "countryCode": "CD"
            },
            {
                "name": "Kongo Central",
                "isoCode": "BC",
                "countryCode": "CD"
            },
            {
                "name": "Kwango",
                "isoCode": "KG",
                "countryCode": "CD"
            },
            {
                "name": "Kwilu",
                "isoCode": "KL",
                "countryCode": "CD"
            },
            {
                "name": "Lomami",
                "isoCode": "LO",
                "countryCode": "CD"
            },
            {
                "name": "Lualaba",
                "isoCode": "LU",
                "countryCode": "CD"
            },
            {
                "name": "Mai-Ndombe",
                "isoCode": "MN",
                "countryCode": "CD"
            },
            {
                "name": "Maniema",
                "isoCode": "MA",
                "countryCode": "CD"
            },
            {
                "name": "Mongala",
                "isoCode": "MO",
                "countryCode": "CD"
            },
            {
                "name": "Nord-Kivu",
                "isoCode": "NK",
                "countryCode": "CD"
            },
            {
                "name": "Nord-Ubangi",
                "isoCode": "NU",
                "countryCode": "CD"
            },
            {
                "name": "Sankuru",
                "isoCode": "SA",
                "countryCode": "CD"
            },
            {
                "name": "Sud-Kivu",
                "isoCode": "SK",
                "countryCode": "CD"
            },
            {
                "name": "Sud-Ubangi",
                "isoCode": "SU",
                "countryCode": "CD"
            },
            {
                "name": "Tanganyika",
                "isoCode": "TA",
                "countryCode": "CD"
            },
            {
                "name": "Tshopo",
                "isoCode": "TO",
                "countryCode": "CD"
            },
            {
                "name": "Tshuapa",
                "isoCode": "TU",
                "countryCode": "CD"
            },
            {
                "name": "Équateur",
                "isoCode": "EQ",
                "countryCode": "CD"
            },
            {
                "name": "Alajuela Province",
                "isoCode": "A",
                "countryCode": "CR"
            },
            {
                "name": "Guanacaste Province",
                "isoCode": "G",
                "countryCode": "CR"
            },
            {
                "name": "Heredia Province",
                "isoCode": "H",
                "countryCode": "CR"
            },
            {
                "name": "Limón Province",
                "isoCode": "L",
                "countryCode": "CR"
            },
            {
                "name": "Provincia de Cartago",
                "isoCode": "C",
                "countryCode": "CR"
            },
            {
                "name": "Puntarenas Province",
                "isoCode": "P",
                "countryCode": "CR"
            },
            {
                "name": "San José Province",
                "isoCode": "SJ",
                "countryCode": "CR"
            },
            {
                "name": "Abidjan",
                "isoCode": "AB",
                "countryCode": "CI"
            },
            {
                "name": "Agnéby",
                "isoCode": "16",
                "countryCode": "CI"
            },
            {
                "name": "Bafing Region",
                "isoCode": "17",
                "countryCode": "CI"
            },
            {
                "name": "Bas-Sassandra District",
                "isoCode": "BS",
                "countryCode": "CI"
            },
            {
                "name": "Bas-Sassandra Region",
                "isoCode": "09",
                "countryCode": "CI"
            },
            {
                "name": "Comoé District",
                "isoCode": "CM",
                "countryCode": "CI"
            },
            {
                "name": "Denguélé District",
                "isoCode": "DN",
                "countryCode": "CI"
            },
            {
                "name": "Denguélé Region",
                "isoCode": "10",
                "countryCode": "CI"
            },
            {
                "name": "Dix-Huit Montagnes",
                "isoCode": "06",
                "countryCode": "CI"
            },
            {
                "name": "Fromager",
                "isoCode": "18",
                "countryCode": "CI"
            },
            {
                "name": "Gôh-Djiboua District",
                "isoCode": "GD",
                "countryCode": "CI"
            },
            {
                "name": "Haut-Sassandra",
                "isoCode": "02",
                "countryCode": "CI"
            },
            {
                "name": "Lacs District",
                "isoCode": "LC",
                "countryCode": "CI"
            },
            {
                "name": "Lacs Region",
                "isoCode": "07",
                "countryCode": "CI"
            },
            {
                "name": "Lagunes District",
                "isoCode": "LG",
                "countryCode": "CI"
            },
            {
                "name": "Lagunes region",
                "isoCode": "01",
                "countryCode": "CI"
            },
            {
                "name": "Marahoué Region",
                "isoCode": "12",
                "countryCode": "CI"
            },
            {
                "name": "Montagnes District",
                "isoCode": "MG",
                "countryCode": "CI"
            },
            {
                "name": "Moyen-Cavally",
                "isoCode": "19",
                "countryCode": "CI"
            },
            {
                "name": "Moyen-Comoé",
                "isoCode": "05",
                "countryCode": "CI"
            },
            {
                "name": "N'zi-Comoé",
                "isoCode": "11",
                "countryCode": "CI"
            },
            {
                "name": "Sassandra-Marahoué District",
                "isoCode": "SM",
                "countryCode": "CI"
            },
            {
                "name": "Savanes Region",
                "isoCode": "03",
                "countryCode": "CI"
            },
            {
                "name": "Sud-Bandama",
                "isoCode": "15",
                "countryCode": "CI"
            },
            {
                "name": "Sud-Comoé",
                "isoCode": "13",
                "countryCode": "CI"
            },
            {
                "name": "Vallée du Bandama District",
                "isoCode": "VB",
                "countryCode": "CI"
            },
            {
                "name": "Vallée du Bandama Region",
                "isoCode": "04",
                "countryCode": "CI"
            },
            {
                "name": "Woroba District",
                "isoCode": "WR",
                "countryCode": "CI"
            },
            {
                "name": "Worodougou",
                "isoCode": "14",
                "countryCode": "CI"
            },
            {
                "name": "Yamoussoukro",
                "isoCode": "YM",
                "countryCode": "CI"
            },
            {
                "name": "Zanzan Region",
                "isoCode": "ZZ",
                "countryCode": "CI"
            },
            {
                "name": "Bjelovar-Bilogora County",
                "isoCode": "07",
                "countryCode": "HR"
            },
            {
                "name": "Brod-Posavina County",
                "isoCode": "12",
                "countryCode": "HR"
            },
            {
                "name": "Dubrovnik-Neretva County",
                "isoCode": "19",
                "countryCode": "HR"
            },
            {
                "name": "Istria County",
                "isoCode": "18",
                "countryCode": "HR"
            },
            {
                "name": "Karlovac County",
                "isoCode": "05",
                "countryCode": "HR"
            },
            {
                "name": "Koprivnica-Križevci County",
                "isoCode": "06",
                "countryCode": "HR"
            },
            {
                "name": "Krapina-Zagorje County",
                "isoCode": "02",
                "countryCode": "HR"
            },
            {
                "name": "Lika-Senj County",
                "isoCode": "09",
                "countryCode": "HR"
            },
            {
                "name": "Međimurje County",
                "isoCode": "20",
                "countryCode": "HR"
            },
            {
                "name": "Osijek-Baranja County",
                "isoCode": "14",
                "countryCode": "HR"
            },
            {
                "name": "Požega-Slavonia County",
                "isoCode": "11",
                "countryCode": "HR"
            },
            {
                "name": "Primorje-Gorski Kotar County",
                "isoCode": "08",
                "countryCode": "HR"
            },
            {
                "name": "Sisak-Moslavina County",
                "isoCode": "03",
                "countryCode": "HR"
            },
            {
                "name": "Split-Dalmatia County",
                "isoCode": "17",
                "countryCode": "HR"
            },
            {
                "name": "Virovitica-Podravina County",
                "isoCode": "10",
                "countryCode": "HR"
            },
            {
                "name": "Vukovar-Syrmia County",
                "isoCode": "16",
                "countryCode": "HR"
            },
            {
                "name": "Zadar County",
                "isoCode": "13",
                "countryCode": "HR"
            },
            {
                "name": "Zagreb",
                "isoCode": "21",
                "countryCode": "HR"
            },
            {
                "name": "Zagreb County",
                "isoCode": "01",
                "countryCode": "HR"
            },
            {
                "name": "Šibenik-Knin County",
                "isoCode": "15",
                "countryCode": "HR"
            },
            {
                "name": "Artemisa Province",
                "isoCode": "15",
                "countryCode": "CU"
            },
            {
                "name": "Camagüey Province",
                "isoCode": "09",
                "countryCode": "CU"
            },
            {
                "name": "Ciego de Ávila Province",
                "isoCode": "08",
                "countryCode": "CU"
            },
            {
                "name": "Cienfuegos Province",
                "isoCode": "06",
                "countryCode": "CU"
            },
            {
                "name": "Granma Province",
                "isoCode": "12",
                "countryCode": "CU"
            },
            {
                "name": "Guantánamo Province",
                "isoCode": "14",
                "countryCode": "CU"
            },
            {
                "name": "Havana Province",
                "isoCode": "03",
                "countryCode": "CU"
            },
            {
                "name": "Holguín Province",
                "isoCode": "11",
                "countryCode": "CU"
            },
            {
                "name": "Isla de la Juventud",
                "isoCode": "99",
                "countryCode": "CU"
            },
            {
                "name": "Las Tunas Province",
                "isoCode": "10",
                "countryCode": "CU"
            },
            {
                "name": "Matanzas Province",
                "isoCode": "04",
                "countryCode": "CU"
            },
            {
                "name": "Mayabeque Province",
                "isoCode": "16",
                "countryCode": "CU"
            },
            {
                "name": "Pinar del Río Province",
                "isoCode": "01",
                "countryCode": "CU"
            },
            {
                "name": "Sancti Spíritus Province",
                "isoCode": "07",
                "countryCode": "CU"
            },
            {
                "name": "Santiago de Cuba Province",
                "isoCode": "13",
                "countryCode": "CU"
            },
            {
                "name": "Villa Clara Province",
                "isoCode": "05",
                "countryCode": "CU"
            },
            {
                "name": "Famagusta District (Mağusa)",
                "isoCode": "04",
                "countryCode": "CY"
            },
            {
                "name": "Kyrenia District (Keryneia)",
                "isoCode": "06",
                "countryCode": "CY"
            },
            {
                "name": "Larnaca District (Larnaka)",
                "isoCode": "03",
                "countryCode": "CY"
            },
            {
                "name": "Limassol District (Leymasun)",
                "isoCode": "02",
                "countryCode": "CY"
            },
            {
                "name": "Nicosia District (Lefkoşa)",
                "isoCode": "01",
                "countryCode": "CY"
            },
            {
                "name": "Paphos District (Pafos)",
                "isoCode": "05",
                "countryCode": "CY"
            },
            {
                "name": "Benešov",
                "isoCode": "201",
                "countryCode": "CZ"
            },
            {
                "name": "Beroun",
                "isoCode": "202",
                "countryCode": "CZ"
            },
            {
                "name": "Blansko",
                "isoCode": "641",
                "countryCode": "CZ"
            },
            {
                "name": "Brno-město",
                "isoCode": "642",
                "countryCode": "CZ"
            },
            {
                "name": "Brno-venkov",
                "isoCode": "643",
                "countryCode": "CZ"
            },
            {
                "name": "Bruntál",
                "isoCode": "801",
                "countryCode": "CZ"
            },
            {
                "name": "Břeclav",
                "isoCode": "644",
                "countryCode": "CZ"
            },
            {
                "name": "Cheb",
                "isoCode": "411",
                "countryCode": "CZ"
            },
            {
                "name": "Chomutov",
                "isoCode": "422",
                "countryCode": "CZ"
            },
            {
                "name": "Chrudim",
                "isoCode": "531",
                "countryCode": "CZ"
            },
            {
                "name": "Domažlice",
                "isoCode": "321",
                "countryCode": "CZ"
            },
            {
                "name": "Děčín",
                "isoCode": "421",
                "countryCode": "CZ"
            },
            {
                "name": "Frýdek-Místek",
                "isoCode": "802",
                "countryCode": "CZ"
            },
            {
                "name": "Havlíčkův Brod",
                "isoCode": "631",
                "countryCode": "CZ"
            },
            {
                "name": "Hodonín",
                "isoCode": "645",
                "countryCode": "CZ"
            },
            {
                "name": "Hradec Králové",
                "isoCode": "521",
                "countryCode": "CZ"
            },
            {
                "name": "Jablonec nad Nisou",
                "isoCode": "512",
                "countryCode": "CZ"
            },
            {
                "name": "Jeseník",
                "isoCode": "711",
                "countryCode": "CZ"
            },
            {
                "name": "Jihlava",
                "isoCode": "632",
                "countryCode": "CZ"
            },
            {
                "name": "Jihomoravský kraj",
                "isoCode": "64",
                "countryCode": "CZ"
            },
            {
                "name": "Jihočeský kraj",
                "isoCode": "31",
                "countryCode": "CZ"
            },
            {
                "name": "Jindřichův Hradec",
                "isoCode": "313",
                "countryCode": "CZ"
            },
            {
                "name": "Jičín",
                "isoCode": "522",
                "countryCode": "CZ"
            },
            {
                "name": "Karlovarský kraj",
                "isoCode": "41",
                "countryCode": "CZ"
            },
            {
                "name": "Karlovy Vary",
                "isoCode": "412",
                "countryCode": "CZ"
            },
            {
                "name": "Karviná",
                "isoCode": "803",
                "countryCode": "CZ"
            },
            {
                "name": "Kladno",
                "isoCode": "203",
                "countryCode": "CZ"
            },
            {
                "name": "Klatovy",
                "isoCode": "322",
                "countryCode": "CZ"
            },
            {
                "name": "Kolín",
                "isoCode": "204",
                "countryCode": "CZ"
            },
            {
                "name": "Kraj Vysočina",
                "isoCode": "63",
                "countryCode": "CZ"
            },
            {
                "name": "Kroměříž",
                "isoCode": "721",
                "countryCode": "CZ"
            },
            {
                "name": "Královéhradecký kraj",
                "isoCode": "52",
                "countryCode": "CZ"
            },
            {
                "name": "Kutná Hora",
                "isoCode": "205",
                "countryCode": "CZ"
            },
            {
                "name": "Liberec",
                "isoCode": "513",
                "countryCode": "CZ"
            },
            {
                "name": "Liberecký kraj",
                "isoCode": "51",
                "countryCode": "CZ"
            },
            {
                "name": "Litoměřice",
                "isoCode": "423",
                "countryCode": "CZ"
            },
            {
                "name": "Louny",
                "isoCode": "424",
                "countryCode": "CZ"
            },
            {
                "name": "Mladá Boleslav",
                "isoCode": "207",
                "countryCode": "CZ"
            },
            {
                "name": "Moravskoslezský kraj",
                "isoCode": "80",
                "countryCode": "CZ"
            },
            {
                "name": "Most",
                "isoCode": "425",
                "countryCode": "CZ"
            },
            {
                "name": "Mělník",
                "isoCode": "206",
                "countryCode": "CZ"
            },
            {
                "name": "Nový Jičín",
                "isoCode": "804",
                "countryCode": "CZ"
            },
            {
                "name": "Nymburk",
                "isoCode": "208",
                "countryCode": "CZ"
            },
            {
                "name": "Náchod",
                "isoCode": "523",
                "countryCode": "CZ"
            },
            {
                "name": "Olomouc",
                "isoCode": "712",
                "countryCode": "CZ"
            },
            {
                "name": "Olomoucký kraj",
                "isoCode": "71",
                "countryCode": "CZ"
            },
            {
                "name": "Opava",
                "isoCode": "805",
                "countryCode": "CZ"
            },
            {
                "name": "Ostrava-město",
                "isoCode": "806",
                "countryCode": "CZ"
            },
            {
                "name": "Pardubice",
                "isoCode": "532",
                "countryCode": "CZ"
            },
            {
                "name": "Pardubický kraj",
                "isoCode": "53",
                "countryCode": "CZ"
            },
            {
                "name": "Pelhřimov",
                "isoCode": "633",
                "countryCode": "CZ"
            },
            {
                "name": "Plzeň-jih",
                "isoCode": "324",
                "countryCode": "CZ"
            },
            {
                "name": "Plzeň-město",
                "isoCode": "323",
                "countryCode": "CZ"
            },
            {
                "name": "Plzeň-sever",
                "isoCode": "325",
                "countryCode": "CZ"
            },
            {
                "name": "Plzeňský kraj",
                "isoCode": "32",
                "countryCode": "CZ"
            },
            {
                "name": "Prachatice",
                "isoCode": "315",
                "countryCode": "CZ"
            },
            {
                "name": "Praha, Hlavní město",
                "isoCode": "10",
                "countryCode": "CZ"
            },
            {
                "name": "Praha-východ",
                "isoCode": "209",
                "countryCode": "CZ"
            },
            {
                "name": "Praha-západ",
                "isoCode": "20A",
                "countryCode": "CZ"
            },
            {
                "name": "Prostějov",
                "isoCode": "713",
                "countryCode": "CZ"
            },
            {
                "name": "Písek",
                "isoCode": "314",
                "countryCode": "CZ"
            },
            {
                "name": "Přerov",
                "isoCode": "714",
                "countryCode": "CZ"
            },
            {
                "name": "Příbram",
                "isoCode": "20B",
                "countryCode": "CZ"
            },
            {
                "name": "Rakovník",
                "isoCode": "20C",
                "countryCode": "CZ"
            },
            {
                "name": "Rokycany",
                "isoCode": "326",
                "countryCode": "CZ"
            },
            {
                "name": "Rychnov nad Kněžnou",
                "isoCode": "524",
                "countryCode": "CZ"
            },
            {
                "name": "Semily",
                "isoCode": "514",
                "countryCode": "CZ"
            },
            {
                "name": "Sokolov",
                "isoCode": "413",
                "countryCode": "CZ"
            },
            {
                "name": "Strakonice",
                "isoCode": "316",
                "countryCode": "CZ"
            },
            {
                "name": "Středočeský kraj",
                "isoCode": "20",
                "countryCode": "CZ"
            },
            {
                "name": "Svitavy",
                "isoCode": "533",
                "countryCode": "CZ"
            },
            {
                "name": "Tachov",
                "isoCode": "327",
                "countryCode": "CZ"
            },
            {
                "name": "Teplice",
                "isoCode": "426",
                "countryCode": "CZ"
            },
            {
                "name": "Trutnov",
                "isoCode": "525",
                "countryCode": "CZ"
            },
            {
                "name": "Tábor",
                "isoCode": "317",
                "countryCode": "CZ"
            },
            {
                "name": "Třebíč",
                "isoCode": "634",
                "countryCode": "CZ"
            },
            {
                "name": "Uherské Hradiště",
                "isoCode": "722",
                "countryCode": "CZ"
            },
            {
                "name": "Vsetín",
                "isoCode": "723",
                "countryCode": "CZ"
            },
            {
                "name": "Vyškov",
                "isoCode": "646",
                "countryCode": "CZ"
            },
            {
                "name": "Zlín",
                "isoCode": "724",
                "countryCode": "CZ"
            },
            {
                "name": "Zlínský kraj",
                "isoCode": "72",
                "countryCode": "CZ"
            },
            {
                "name": "Znojmo",
                "isoCode": "647",
                "countryCode": "CZ"
            },
            {
                "name": "Ústecký kraj",
                "isoCode": "42",
                "countryCode": "CZ"
            },
            {
                "name": "Ústí nad Labem",
                "isoCode": "427",
                "countryCode": "CZ"
            },
            {
                "name": "Ústí nad Orlicí",
                "isoCode": "534",
                "countryCode": "CZ"
            },
            {
                "name": "Česká Lípa",
                "isoCode": "511",
                "countryCode": "CZ"
            },
            {
                "name": "České Budějovice",
                "isoCode": "311",
                "countryCode": "CZ"
            },
            {
                "name": "Český Krumlov",
                "isoCode": "312",
                "countryCode": "CZ"
            },
            {
                "name": "Šumperk",
                "isoCode": "715",
                "countryCode": "CZ"
            },
            {
                "name": "Žďár nad Sázavou",
                "isoCode": "635",
                "countryCode": "CZ"
            },
            {
                "name": "Capital Region of Denmark",
                "isoCode": "84",
                "countryCode": "DK"
            },
            {
                "name": "Central Denmark Region",
                "isoCode": "82",
                "countryCode": "DK"
            },
            {
                "name": "North Denmark Region",
                "isoCode": "81",
                "countryCode": "DK"
            },
            {
                "name": "Region Zealand",
                "isoCode": "85",
                "countryCode": "DK"
            },
            {
                "name": "Region of Southern Denmark",
                "isoCode": "83",
                "countryCode": "DK"
            },
            {
                "name": "Ali Sabieh Region",
                "isoCode": "AS",
                "countryCode": "DJ"
            },
            {
                "name": "Arta Region",
                "isoCode": "AR",
                "countryCode": "DJ"
            },
            {
                "name": "Dikhil Region",
                "isoCode": "DI",
                "countryCode": "DJ"
            },
            {
                "name": "Djibouti",
                "isoCode": "DJ",
                "countryCode": "DJ"
            },
            {
                "name": "Obock Region",
                "isoCode": "OB",
                "countryCode": "DJ"
            },
            {
                "name": "Tadjourah Region",
                "isoCode": "TA",
                "countryCode": "DJ"
            },
            {
                "name": "Saint Andrew Parish",
                "isoCode": "02",
                "countryCode": "DM"
            },
            {
                "name": "Saint David Parish",
                "isoCode": "03",
                "countryCode": "DM"
            },
            {
                "name": "Saint George Parish",
                "isoCode": "04",
                "countryCode": "DM"
            },
            {
                "name": "Saint John Parish",
                "isoCode": "05",
                "countryCode": "DM"
            },
            {
                "name": "Saint Joseph Parish",
                "isoCode": "06",
                "countryCode": "DM"
            },
            {
                "name": "Saint Luke Parish",
                "isoCode": "07",
                "countryCode": "DM"
            },
            {
                "name": "Saint Mark Parish",
                "isoCode": "08",
                "countryCode": "DM"
            },
            {
                "name": "Saint Patrick Parish",
                "isoCode": "09",
                "countryCode": "DM"
            },
            {
                "name": "Saint Paul Parish",
                "isoCode": "10",
                "countryCode": "DM"
            },
            {
                "name": "Saint Peter Parish",
                "isoCode": "11",
                "countryCode": "DM"
            },
            {
                "name": "Azua Province",
                "isoCode": "02",
                "countryCode": "DO"
            },
            {
                "name": "Baoruco Province",
                "isoCode": "03",
                "countryCode": "DO"
            },
            {
                "name": "Barahona Province",
                "isoCode": "04",
                "countryCode": "DO"
            },
            {
                "name": "Dajabón Province",
                "isoCode": "05",
                "countryCode": "DO"
            },
            {
                "name": "Distrito Nacional",
                "isoCode": "01",
                "countryCode": "DO"
            },
            {
                "name": "Duarte Province",
                "isoCode": "06",
                "countryCode": "DO"
            },
            {
                "name": "El Seibo Province",
                "isoCode": "08",
                "countryCode": "DO"
            },
            {
                "name": "Espaillat Province",
                "isoCode": "09",
                "countryCode": "DO"
            },
            {
                "name": "Hato Mayor Province",
                "isoCode": "30",
                "countryCode": "DO"
            },
            {
                "name": "Hermanas Mirabal Province",
                "isoCode": "19",
                "countryCode": "DO"
            },
            {
                "name": "Independencia",
                "isoCode": "10",
                "countryCode": "DO"
            },
            {
                "name": "La Altagracia Province",
                "isoCode": "11",
                "countryCode": "DO"
            },
            {
                "name": "La Romana Province",
                "isoCode": "12",
                "countryCode": "DO"
            },
            {
                "name": "La Vega Province",
                "isoCode": "13",
                "countryCode": "DO"
            },
            {
                "name": "María Trinidad Sánchez Province",
                "isoCode": "14",
                "countryCode": "DO"
            },
            {
                "name": "Monseñor Nouel Province",
                "isoCode": "28",
                "countryCode": "DO"
            },
            {
                "name": "Monte Cristi Province",
                "isoCode": "15",
                "countryCode": "DO"
            },
            {
                "name": "Monte Plata Province",
                "isoCode": "29",
                "countryCode": "DO"
            },
            {
                "name": "Pedernales Province",
                "isoCode": "16",
                "countryCode": "DO"
            },
            {
                "name": "Peravia Province",
                "isoCode": "17",
                "countryCode": "DO"
            },
            {
                "name": "Puerto Plata Province",
                "isoCode": "18",
                "countryCode": "DO"
            },
            {
                "name": "Samaná Province",
                "isoCode": "20",
                "countryCode": "DO"
            },
            {
                "name": "San Cristóbal Province",
                "isoCode": "21",
                "countryCode": "DO"
            },
            {
                "name": "San José de Ocoa Province",
                "isoCode": "31",
                "countryCode": "DO"
            },
            {
                "name": "San Juan Province",
                "isoCode": "22",
                "countryCode": "DO"
            },
            {
                "name": "San Pedro de Macorís",
                "isoCode": "23",
                "countryCode": "DO"
            },
            {
                "name": "Santiago Province",
                "isoCode": "25",
                "countryCode": "DO"
            },
            {
                "name": "Santiago Rodríguez Province",
                "isoCode": "26",
                "countryCode": "DO"
            },
            {
                "name": "Santo Domingo Province",
                "isoCode": "32",
                "countryCode": "DO"
            },
            {
                "name": "Sánchez Ramírez Province",
                "isoCode": "24",
                "countryCode": "DO"
            },
            {
                "name": "Valverde Province",
                "isoCode": "27",
                "countryCode": "DO"
            },
            {
                "name": "Aileu municipality",
                "isoCode": "AL",
                "countryCode": "TL"
            },
            {
                "name": "Ainaro Municipality",
                "isoCode": "AN",
                "countryCode": "TL"
            },
            {
                "name": "Baucau Municipality",
                "isoCode": "BA",
                "countryCode": "TL"
            },
            {
                "name": "Bobonaro Municipality",
                "isoCode": "BO",
                "countryCode": "TL"
            },
            {
                "name": "Cova Lima Municipality",
                "isoCode": "CO",
                "countryCode": "TL"
            },
            {
                "name": "Dili municipality",
                "isoCode": "DI",
                "countryCode": "TL"
            },
            {
                "name": "Ermera District",
                "isoCode": "ER",
                "countryCode": "TL"
            },
            {
                "name": "Lautém Municipality",
                "isoCode": "LA",
                "countryCode": "TL"
            },
            {
                "name": "Liquiçá Municipality",
                "isoCode": "LI",
                "countryCode": "TL"
            },
            {
                "name": "Manatuto District",
                "isoCode": "MT",
                "countryCode": "TL"
            },
            {
                "name": "Manufahi Municipality",
                "isoCode": "MF",
                "countryCode": "TL"
            },
            {
                "name": "Viqueque Municipality",
                "isoCode": "VI",
                "countryCode": "TL"
            },
            {
                "name": "Azuay",
                "isoCode": "A",
                "countryCode": "EC"
            },
            {
                "name": "Bolívar",
                "isoCode": "B",
                "countryCode": "EC"
            },
            {
                "name": "Carchi",
                "isoCode": "C",
                "countryCode": "EC"
            },
            {
                "name": "Cañar",
                "isoCode": "F",
                "countryCode": "EC"
            },
            {
                "name": "Chimborazo",
                "isoCode": "H",
                "countryCode": "EC"
            },
            {
                "name": "Cotopaxi",
                "isoCode": "X",
                "countryCode": "EC"
            },
            {
                "name": "El Oro",
                "isoCode": "O",
                "countryCode": "EC"
            },
            {
                "name": "Esmeraldas",
                "isoCode": "E",
                "countryCode": "EC"
            },
            {
                "name": "Galápagos",
                "isoCode": "W",
                "countryCode": "EC"
            },
            {
                "name": "Guayas",
                "isoCode": "G",
                "countryCode": "EC"
            },
            {
                "name": "Imbabura",
                "isoCode": "I",
                "countryCode": "EC"
            },
            {
                "name": "Loja",
                "isoCode": "L",
                "countryCode": "EC"
            },
            {
                "name": "Los Ríos",
                "isoCode": "R",
                "countryCode": "EC"
            },
            {
                "name": "Manabí",
                "isoCode": "M",
                "countryCode": "EC"
            },
            {
                "name": "Morona-Santiago",
                "isoCode": "S",
                "countryCode": "EC"
            },
            {
                "name": "Napo",
                "isoCode": "N",
                "countryCode": "EC"
            },
            {
                "name": "Orellana",
                "isoCode": "D",
                "countryCode": "EC"
            },
            {
                "name": "Pastaza",
                "isoCode": "Y",
                "countryCode": "EC"
            },
            {
                "name": "Pichincha",
                "isoCode": "P",
                "countryCode": "EC"
            },
            {
                "name": "Santa Elena",
                "isoCode": "SE",
                "countryCode": "EC"
            },
            {
                "name": "Santo Domingo de los Tsáchilas",
                "isoCode": "SD",
                "countryCode": "EC"
            },
            {
                "name": "Sucumbíos",
                "isoCode": "U",
                "countryCode": "EC"
            },
            {
                "name": "Tungurahua",
                "isoCode": "T",
                "countryCode": "EC"
            },
            {
                "name": "Zamora Chinchipe",
                "isoCode": "Z",
                "countryCode": "EC"
            },
            {
                "name": "Alexandria",
                "isoCode": "ALX",
                "countryCode": "EG"
            },
            {
                "name": "Aswan",
                "isoCode": "ASN",
                "countryCode": "EG"
            },
            {
                "name": "Asyut",
                "isoCode": "AST",
                "countryCode": "EG"
            },
            {
                "name": "Beheira",
                "isoCode": "BH",
                "countryCode": "EG"
            },
            {
                "name": "Beni Suef",
                "isoCode": "BNS",
                "countryCode": "EG"
            },
            {
                "name": "Cairo",
                "isoCode": "C",
                "countryCode": "EG"
            },
            {
                "name": "Dakahlia",
                "isoCode": "DK",
                "countryCode": "EG"
            },
            {
                "name": "Damietta",
                "isoCode": "DT",
                "countryCode": "EG"
            },
            {
                "name": "Faiyum",
                "isoCode": "FYM",
                "countryCode": "EG"
            },
            {
                "name": "Gharbia",
                "isoCode": "GH",
                "countryCode": "EG"
            },
            {
                "name": "Giza",
                "isoCode": "GZ",
                "countryCode": "EG"
            },
            {
                "name": "Ismailia",
                "isoCode": "IS",
                "countryCode": "EG"
            },
            {
                "name": "Kafr el-Sheikh",
                "isoCode": "KFS",
                "countryCode": "EG"
            },
            {
                "name": "Luxor",
                "isoCode": "LX",
                "countryCode": "EG"
            },
            {
                "name": "Matrouh",
                "isoCode": "MT",
                "countryCode": "EG"
            },
            {
                "name": "Minya",
                "isoCode": "MN",
                "countryCode": "EG"
            },
            {
                "name": "Monufia",
                "isoCode": "MNF",
                "countryCode": "EG"
            },
            {
                "name": "New Valley",
                "isoCode": "WAD",
                "countryCode": "EG"
            },
            {
                "name": "North Sinai",
                "isoCode": "SIN",
                "countryCode": "EG"
            },
            {
                "name": "Port Said",
                "isoCode": "PTS",
                "countryCode": "EG"
            },
            {
                "name": "Qalyubia",
                "isoCode": "KB",
                "countryCode": "EG"
            },
            {
                "name": "Qena",
                "isoCode": "KN",
                "countryCode": "EG"
            },
            {
                "name": "Red Sea",
                "isoCode": "BA",
                "countryCode": "EG"
            },
            {
                "name": "Sharqia",
                "isoCode": "SHR",
                "countryCode": "EG"
            },
            {
                "name": "Sohag",
                "isoCode": "SHG",
                "countryCode": "EG"
            },
            {
                "name": "South Sinai",
                "isoCode": "JS",
                "countryCode": "EG"
            },
            {
                "name": "Suez",
                "isoCode": "SUZ",
                "countryCode": "EG"
            },
            {
                "name": "Ahuachapán Department",
                "isoCode": "AH",
                "countryCode": "SV"
            },
            {
                "name": "Cabañas Department",
                "isoCode": "CA",
                "countryCode": "SV"
            },
            {
                "name": "Chalatenango Department",
                "isoCode": "CH",
                "countryCode": "SV"
            },
            {
                "name": "Cuscatlán Department",
                "isoCode": "CU",
                "countryCode": "SV"
            },
            {
                "name": "La Libertad Department",
                "isoCode": "LI",
                "countryCode": "SV"
            },
            {
                "name": "La Paz Department",
                "isoCode": "PA",
                "countryCode": "SV"
            },
            {
                "name": "La Unión Department",
                "isoCode": "UN",
                "countryCode": "SV"
            },
            {
                "name": "Morazán Department",
                "isoCode": "MO",
                "countryCode": "SV"
            },
            {
                "name": "San Miguel Department",
                "isoCode": "SM",
                "countryCode": "SV"
            },
            {
                "name": "San Salvador Department",
                "isoCode": "SS",
                "countryCode": "SV"
            },
            {
                "name": "San Vicente Department",
                "isoCode": "SV",
                "countryCode": "SV"
            },
            {
                "name": "Santa Ana Department",
                "isoCode": "SA",
                "countryCode": "SV"
            },
            {
                "name": "Sonsonate Department",
                "isoCode": "SO",
                "countryCode": "SV"
            },
            {
                "name": "Usulután Department",
                "isoCode": "US",
                "countryCode": "SV"
            },
            {
                "name": "Annobón Province",
                "isoCode": "AN",
                "countryCode": "GQ"
            },
            {
                "name": "Bioko Norte Province",
                "isoCode": "BN",
                "countryCode": "GQ"
            },
            {
                "name": "Bioko Sur Province",
                "isoCode": "BS",
                "countryCode": "GQ"
            },
            {
                "name": "Centro Sur Province",
                "isoCode": "CS",
                "countryCode": "GQ"
            },
            {
                "name": "Insular Region",
                "isoCode": "I",
                "countryCode": "GQ"
            },
            {
                "name": "Kié-Ntem Province",
                "isoCode": "KN",
                "countryCode": "GQ"
            },
            {
                "name": "Litoral Province",
                "isoCode": "LI",
                "countryCode": "GQ"
            },
            {
                "name": "Río Muni",
                "isoCode": "C",
                "countryCode": "GQ"
            },
            {
                "name": "Wele-Nzas Province",
                "isoCode": "WN",
                "countryCode": "GQ"
            },
            {
                "name": "Anseba Region",
                "isoCode": "AN",
                "countryCode": "ER"
            },
            {
                "name": "Debub Region",
                "isoCode": "DU",
                "countryCode": "ER"
            },
            {
                "name": "Gash-Barka Region",
                "isoCode": "GB",
                "countryCode": "ER"
            },
            {
                "name": "Maekel Region",
                "isoCode": "MA",
                "countryCode": "ER"
            },
            {
                "name": "Northern Red Sea Region",
                "isoCode": "SK",
                "countryCode": "ER"
            },
            {
                "name": "Southern Red Sea Region",
                "isoCode": "DK",
                "countryCode": "ER"
            },
            {
                "name": "Harju County",
                "isoCode": "37",
                "countryCode": "EE"
            },
            {
                "name": "Hiiu County",
                "isoCode": "39",
                "countryCode": "EE"
            },
            {
                "name": "Ida-Viru County",
                "isoCode": "44",
                "countryCode": "EE"
            },
            {
                "name": "Järva County",
                "isoCode": "51",
                "countryCode": "EE"
            },
            {
                "name": "Jõgeva County",
                "isoCode": "49",
                "countryCode": "EE"
            },
            {
                "name": "Lääne County",
                "isoCode": "57",
                "countryCode": "EE"
            },
            {
                "name": "Lääne-Viru County",
                "isoCode": "59",
                "countryCode": "EE"
            },
            {
                "name": "Pärnu County",
                "isoCode": "67",
                "countryCode": "EE"
            },
            {
                "name": "Põlva County",
                "isoCode": "65",
                "countryCode": "EE"
            },
            {
                "name": "Rapla County",
                "isoCode": "70",
                "countryCode": "EE"
            },
            {
                "name": "Saare County",
                "isoCode": "74",
                "countryCode": "EE"
            },
            {
                "name": "Tartu County",
                "isoCode": "78",
                "countryCode": "EE"
            },
            {
                "name": "Valga County",
                "isoCode": "82",
                "countryCode": "EE"
            },
            {
                "name": "Viljandi County",
                "isoCode": "84",
                "countryCode": "EE"
            },
            {
                "name": "Võru County",
                "isoCode": "86",
                "countryCode": "EE"
            },
            {
                "name": "Addis Ababa",
                "isoCode": "AA",
                "countryCode": "ET"
            },
            {
                "name": "Afar Region",
                "isoCode": "AF",
                "countryCode": "ET"
            },
            {
                "name": "Amhara Region",
                "isoCode": "AM",
                "countryCode": "ET"
            },
            {
                "name": "Benishangul-Gumuz Region",
                "isoCode": "BE",
                "countryCode": "ET"
            },
            {
                "name": "Dire Dawa",
                "isoCode": "DD",
                "countryCode": "ET"
            },
            {
                "name": "Gambela Region",
                "isoCode": "GA",
                "countryCode": "ET"
            },
            {
                "name": "Harari Region",
                "isoCode": "HA",
                "countryCode": "ET"
            },
            {
                "name": "Oromia Region",
                "isoCode": "OR",
                "countryCode": "ET"
            },
            {
                "name": "Somali Region",
                "isoCode": "SO",
                "countryCode": "ET"
            },
            {
                "name": "Southern Nations, Nationalities, and Peoples' Region",
                "isoCode": "SN",
                "countryCode": "ET"
            },
            {
                "name": "Tigray Region",
                "isoCode": "TI",
                "countryCode": "ET"
            },
            {
                "name": "Ba",
                "isoCode": "01",
                "countryCode": "FJ"
            },
            {
                "name": "Bua",
                "isoCode": "02",
                "countryCode": "FJ"
            },
            {
                "name": "Cakaudrove",
                "isoCode": "03",
                "countryCode": "FJ"
            },
            {
                "name": "Central Division",
                "isoCode": "C",
                "countryCode": "FJ"
            },
            {
                "name": "Eastern Division",
                "isoCode": "E",
                "countryCode": "FJ"
            },
            {
                "name": "Kadavu",
                "isoCode": "04",
                "countryCode": "FJ"
            },
            {
                "name": "Lau",
                "isoCode": "05",
                "countryCode": "FJ"
            },
            {
                "name": "Lomaiviti",
                "isoCode": "06",
                "countryCode": "FJ"
            },
            {
                "name": "Macuata",
                "isoCode": "07",
                "countryCode": "FJ"
            },
            {
                "name": "Nadroga-Navosa",
                "isoCode": "08",
                "countryCode": "FJ"
            },
            {
                "name": "Naitasiri",
                "isoCode": "09",
                "countryCode": "FJ"
            },
            {
                "name": "Namosi",
                "isoCode": "10",
                "countryCode": "FJ"
            },
            {
                "name": "Northern Division",
                "isoCode": "N",
                "countryCode": "FJ"
            },
            {
                "name": "Ra",
                "isoCode": "11",
                "countryCode": "FJ"
            },
            {
                "name": "Rewa",
                "isoCode": "12",
                "countryCode": "FJ"
            },
            {
                "name": "Rotuma",
                "isoCode": "R",
                "countryCode": "FJ"
            },
            {
                "name": "Serua",
                "isoCode": "13",
                "countryCode": "FJ"
            },
            {
                "name": "Tailevu",
                "isoCode": "14",
                "countryCode": "FJ"
            },
            {
                "name": "Western Division",
                "isoCode": "W",
                "countryCode": "FJ"
            },
            {
                "name": "Central Finland",
                "isoCode": "08",
                "countryCode": "FI"
            },
            {
                "name": "Central Ostrobothnia",
                "isoCode": "07",
                "countryCode": "FI"
            },
            {
                "name": "Eastern Finland Province",
                "isoCode": "IS",
                "countryCode": "FI"
            },
            {
                "name": "Finland Proper",
                "isoCode": "19",
                "countryCode": "FI"
            },
            {
                "name": "Kainuu",
                "isoCode": "05",
                "countryCode": "FI"
            },
            {
                "name": "Kymenlaakso",
                "isoCode": "09",
                "countryCode": "FI"
            },
            {
                "name": "Lapland",
                "isoCode": "LL",
                "countryCode": "FI"
            },
            {
                "name": "North Karelia",
                "isoCode": "13",
                "countryCode": "FI"
            },
            {
                "name": "Northern Ostrobothnia",
                "isoCode": "14",
                "countryCode": "FI"
            },
            {
                "name": "Northern Savonia",
                "isoCode": "15",
                "countryCode": "FI"
            },
            {
                "name": "Ostrobothnia",
                "isoCode": "12",
                "countryCode": "FI"
            },
            {
                "name": "Oulu Province",
                "isoCode": "OL",
                "countryCode": "FI"
            },
            {
                "name": "Pirkanmaa",
                "isoCode": "11",
                "countryCode": "FI"
            },
            {
                "name": "Päijänne Tavastia",
                "isoCode": "16",
                "countryCode": "FI"
            },
            {
                "name": "Satakunta",
                "isoCode": "17",
                "countryCode": "FI"
            },
            {
                "name": "South Karelia",
                "isoCode": "02",
                "countryCode": "FI"
            },
            {
                "name": "Southern Ostrobothnia",
                "isoCode": "03",
                "countryCode": "FI"
            },
            {
                "name": "Southern Savonia",
                "isoCode": "04",
                "countryCode": "FI"
            },
            {
                "name": "Tavastia Proper",
                "isoCode": "06",
                "countryCode": "FI"
            },
            {
                "name": "Uusimaa",
                "isoCode": "18",
                "countryCode": "FI"
            },
            {
                "name": "Åland Islands",
                "isoCode": "01",
                "countryCode": "FI"
            },
            {
                "name": "Ain",
                "isoCode": "01",
                "countryCode": "FR"
            },
            {
                "name": "Aisne",
                "isoCode": "02",
                "countryCode": "FR"
            },
            {
                "name": "Allier",
                "isoCode": "03",
                "countryCode": "FR"
            },
            {
                "name": "Alpes-Maritimes",
                "isoCode": "06",
                "countryCode": "FR"
            },
            {
                "name": "Alpes-de-Haute-Provence",
                "isoCode": "04",
                "countryCode": "FR"
            },
            {
                "name": "Alsace",
                "isoCode": "6AE",
                "countryCode": "FR"
            },
            {
                "name": "Ardennes",
                "isoCode": "08",
                "countryCode": "FR"
            },
            {
                "name": "Ardèche",
                "isoCode": "07",
                "countryCode": "FR"
            },
            {
                "name": "Ariège",
                "isoCode": "09",
                "countryCode": "FR"
            },
            {
                "name": "Aube",
                "isoCode": "10",
                "countryCode": "FR"
            },
            {
                "name": "Aude",
                "isoCode": "11",
                "countryCode": "FR"
            },
            {
                "name": "Auvergne-Rhône-Alpes",
                "isoCode": "ARA",
                "countryCode": "FR"
            },
            {
                "name": "Aveyron",
                "isoCode": "12",
                "countryCode": "FR"
            },
            {
                "name": "Bas-Rhin",
                "isoCode": "67",
                "countryCode": "FR"
            },
            {
                "name": "Bouches-du-Rhône",
                "isoCode": "13",
                "countryCode": "FR"
            },
            {
                "name": "Bourgogne-Franche-Comté",
                "isoCode": "BFC",
                "countryCode": "FR"
            },
            {
                "name": "Bretagne",
                "isoCode": "BRE",
                "countryCode": "FR"
            },
            {
                "name": "Calvados",
                "isoCode": "14",
                "countryCode": "FR"
            },
            {
                "name": "Cantal",
                "isoCode": "15",
                "countryCode": "FR"
            },
            {
                "name": "Centre-Val de Loire",
                "isoCode": "CVL",
                "countryCode": "FR"
            },
            {
                "name": "Charente",
                "isoCode": "16",
                "countryCode": "FR"
            },
            {
                "name": "Charente-Maritime",
                "isoCode": "17",
                "countryCode": "FR"
            },
            {
                "name": "Cher",
                "isoCode": "18",
                "countryCode": "FR"
            },
            {
                "name": "Clipperton",
                "isoCode": "CP",
                "countryCode": "FR"
            },
            {
                "name": "Corrèze",
                "isoCode": "19",
                "countryCode": "FR"
            },
            {
                "name": "Corse",
                "isoCode": "20R",
                "countryCode": "FR"
            },
            {
                "name": "Corse-du-Sud",
                "isoCode": "2A",
                "countryCode": "FR"
            },
            {
                "name": "Creuse",
                "isoCode": "23",
                "countryCode": "FR"
            },
            {
                "name": "Côte-d'Or",
                "isoCode": "21",
                "countryCode": "FR"
            },
            {
                "name": "Côtes-d'Armor",
                "isoCode": "22",
                "countryCode": "FR"
            },
            {
                "name": "Deux-Sèvres",
                "isoCode": "79",
                "countryCode": "FR"
            },
            {
                "name": "Dordogne",
                "isoCode": "24",
                "countryCode": "FR"
            },
            {
                "name": "Doubs",
                "isoCode": "25",
                "countryCode": "FR"
            },
            {
                "name": "Drôme",
                "isoCode": "26",
                "countryCode": "FR"
            },
            {
                "name": "Essonne",
                "isoCode": "91",
                "countryCode": "FR"
            },
            {
                "name": "Eure",
                "isoCode": "27",
                "countryCode": "FR"
            },
            {
                "name": "Eure-et-Loir",
                "isoCode": "28",
                "countryCode": "FR"
            },
            {
                "name": "Finistère",
                "isoCode": "29",
                "countryCode": "FR"
            },
            {
                "name": "French Guiana",
                "isoCode": "973",
                "countryCode": "FR"
            },
            {
                "name": "French Polynesia",
                "isoCode": "PF",
                "countryCode": "FR"
            },
            {
                "name": "French Southern and Antarctic Lands",
                "isoCode": "TF",
                "countryCode": "FR"
            },
            {
                "name": "Gard",
                "isoCode": "30",
                "countryCode": "FR"
            },
            {
                "name": "Gers",
                "isoCode": "32",
                "countryCode": "FR"
            },
            {
                "name": "Gironde",
                "isoCode": "33",
                "countryCode": "FR"
            },
            {
                "name": "Grand-Est",
                "isoCode": "GES",
                "countryCode": "FR"
            },
            {
                "name": "Guadeloupe",
                "isoCode": "971",
                "countryCode": "FR"
            },
            {
                "name": "Haut-Rhin",
                "isoCode": "68",
                "countryCode": "FR"
            },
            {
                "name": "Haute-Corse",
                "isoCode": "2B",
                "countryCode": "FR"
            },
            {
                "name": "Haute-Garonne",
                "isoCode": "31",
                "countryCode": "FR"
            },
            {
                "name": "Haute-Loire",
                "isoCode": "43",
                "countryCode": "FR"
            },
            {
                "name": "Haute-Marne",
                "isoCode": "52",
                "countryCode": "FR"
            },
            {
                "name": "Haute-Savoie",
                "isoCode": "74",
                "countryCode": "FR"
            },
            {
                "name": "Haute-Saône",
                "isoCode": "70",
                "countryCode": "FR"
            },
            {
                "name": "Haute-Vienne",
                "isoCode": "87",
                "countryCode": "FR"
            },
            {
                "name": "Hautes-Alpes",
                "isoCode": "05",
                "countryCode": "FR"
            },
            {
                "name": "Hautes-Pyrénées",
                "isoCode": "65",
                "countryCode": "FR"
            },
            {
                "name": "Hauts-de-France",
                "isoCode": "HDF",
                "countryCode": "FR"
            },
            {
                "name": "Hauts-de-Seine",
                "isoCode": "92",
                "countryCode": "FR"
            },
            {
                "name": "Hérault",
                "isoCode": "34",
                "countryCode": "FR"
            },
            {
                "name": "Ille-et-Vilaine",
                "isoCode": "35",
                "countryCode": "FR"
            },
            {
                "name": "Indre",
                "isoCode": "36",
                "countryCode": "FR"
            },
            {
                "name": "Indre-et-Loire",
                "isoCode": "37",
                "countryCode": "FR"
            },
            {
                "name": "Isère",
                "isoCode": "38",
                "countryCode": "FR"
            },
            {
                "name": "Jura",
                "isoCode": "39",
                "countryCode": "FR"
            },
            {
                "name": "La Réunion",
                "isoCode": "974",
                "countryCode": "FR"
            },
            {
                "name": "Landes",
                "isoCode": "40",
                "countryCode": "FR"
            },
            {
                "name": "Loir-et-Cher",
                "isoCode": "41",
                "countryCode": "FR"
            },
            {
                "name": "Loire",
                "isoCode": "42",
                "countryCode": "FR"
            },
            {
                "name": "Loire-Atlantique",
                "isoCode": "44",
                "countryCode": "FR"
            },
            {
                "name": "Loiret",
                "isoCode": "45",
                "countryCode": "FR"
            },
            {
                "name": "Lot",
                "isoCode": "46",
                "countryCode": "FR"
            },
            {
                "name": "Lot-et-Garonne",
                "isoCode": "47",
                "countryCode": "FR"
            },
            {
                "name": "Lozère",
                "isoCode": "48",
                "countryCode": "FR"
            },
            {
                "name": "Maine-et-Loire",
                "isoCode": "49",
                "countryCode": "FR"
            },
            {
                "name": "Manche",
                "isoCode": "50",
                "countryCode": "FR"
            },
            {
                "name": "Marne",
                "isoCode": "51",
                "countryCode": "FR"
            },
            {
                "name": "Martinique",
                "isoCode": "972",
                "countryCode": "FR"
            },
            {
                "name": "Mayenne",
                "isoCode": "53",
                "countryCode": "FR"
            },
            {
                "name": "Mayotte",
                "isoCode": "976",
                "countryCode": "FR"
            },
            {
                "name": "Meurthe-et-Moselle",
                "isoCode": "54",
                "countryCode": "FR"
            },
            {
                "name": "Meuse",
                "isoCode": "55",
                "countryCode": "FR"
            },
            {
                "name": "Morbihan",
                "isoCode": "56",
                "countryCode": "FR"
            },
            {
                "name": "Moselle",
                "isoCode": "57",
                "countryCode": "FR"
            },
            {
                "name": "Métropole de Lyon",
                "isoCode": "69M",
                "countryCode": "FR"
            },
            {
                "name": "Nièvre",
                "isoCode": "58",
                "countryCode": "FR"
            },
            {
                "name": "Nord",
                "isoCode": "59",
                "countryCode": "FR"
            },
            {
                "name": "Normandie",
                "isoCode": "NOR",
                "countryCode": "FR"
            },
            {
                "name": "Nouvelle-Aquitaine",
                "isoCode": "NAQ",
                "countryCode": "FR"
            },
            {
                "name": "Occitanie",
                "isoCode": "OCC",
                "countryCode": "FR"
            },
            {
                "name": "Oise",
                "isoCode": "60",
                "countryCode": "FR"
            },
            {
                "name": "Orne",
                "isoCode": "61",
                "countryCode": "FR"
            },
            {
                "name": "Paris",
                "isoCode": "75C",
                "countryCode": "FR"
            },
            {
                "name": "Pas-de-Calais",
                "isoCode": "62",
                "countryCode": "FR"
            },
            {
                "name": "Pays-de-la-Loire",
                "isoCode": "PDL",
                "countryCode": "FR"
            },
            {
                "name": "Provence-Alpes-Côte-d’Azur",
                "isoCode": "PAC",
                "countryCode": "FR"
            },
            {
                "name": "Puy-de-Dôme",
                "isoCode": "63",
                "countryCode": "FR"
            },
            {
                "name": "Pyrénées-Atlantiques",
                "isoCode": "64",
                "countryCode": "FR"
            },
            {
                "name": "Pyrénées-Orientales",
                "isoCode": "66",
                "countryCode": "FR"
            },
            {
                "name": "Rhône",
                "isoCode": "69",
                "countryCode": "FR"
            },
            {
                "name": "Saint Pierre and Miquelon",
                "isoCode": "PM",
                "countryCode": "FR"
            },
            {
                "name": "Saint-Barthélemy",
                "isoCode": "BL",
                "countryCode": "FR"
            },
            {
                "name": "Saint-Martin",
                "isoCode": "MF",
                "countryCode": "FR"
            },
            {
                "name": "Sarthe",
                "isoCode": "72",
                "countryCode": "FR"
            },
            {
                "name": "Savoie",
                "isoCode": "73",
                "countryCode": "FR"
            },
            {
                "name": "Saône-et-Loire",
                "isoCode": "71",
                "countryCode": "FR"
            },
            {
                "name": "Seine-Maritime",
                "isoCode": "76",
                "countryCode": "FR"
            },
            {
                "name": "Seine-Saint-Denis",
                "isoCode": "93",
                "countryCode": "FR"
            },
            {
                "name": "Seine-et-Marne",
                "isoCode": "77",
                "countryCode": "FR"
            },
            {
                "name": "Somme",
                "isoCode": "80",
                "countryCode": "FR"
            },
            {
                "name": "Tarn",
                "isoCode": "81",
                "countryCode": "FR"
            },
            {
                "name": "Tarn-et-Garonne",
                "isoCode": "82",
                "countryCode": "FR"
            },
            {
                "name": "Territoire de Belfort",
                "isoCode": "90",
                "countryCode": "FR"
            },
            {
                "name": "Val-d'Oise",
                "isoCode": "95",
                "countryCode": "FR"
            },
            {
                "name": "Val-de-Marne",
                "isoCode": "94",
                "countryCode": "FR"
            },
            {
                "name": "Var",
                "isoCode": "83",
                "countryCode": "FR"
            },
            {
                "name": "Vaucluse",
                "isoCode": "84",
                "countryCode": "FR"
            },
            {
                "name": "Vendée",
                "isoCode": "85",
                "countryCode": "FR"
            },
            {
                "name": "Vienne",
                "isoCode": "86",
                "countryCode": "FR"
            },
            {
                "name": "Vosges",
                "isoCode": "88",
                "countryCode": "FR"
            },
            {
                "name": "Wallis and Futuna",
                "isoCode": "WF",
                "countryCode": "FR"
            },
            {
                "name": "Yonne",
                "isoCode": "89",
                "countryCode": "FR"
            },
            {
                "name": "Yvelines",
                "isoCode": "78",
                "countryCode": "FR"
            },
            {
                "name": "Île-de-France",
                "isoCode": "IDF",
                "countryCode": "FR"
            },
            {
                "name": "Estuaire Province",
                "isoCode": "1",
                "countryCode": "GA"
            },
            {
                "name": "Haut-Ogooué Province",
                "isoCode": "2",
                "countryCode": "GA"
            },
            {
                "name": "Moyen-Ogooué Province",
                "isoCode": "3",
                "countryCode": "GA"
            },
            {
                "name": "Ngounié Province",
                "isoCode": "4",
                "countryCode": "GA"
            },
            {
                "name": "Nyanga Province",
                "isoCode": "5",
                "countryCode": "GA"
            },
            {
                "name": "Ogooué-Ivindo Province",
                "isoCode": "6",
                "countryCode": "GA"
            },
            {
                "name": "Ogooué-Lolo Province",
                "isoCode": "7",
                "countryCode": "GA"
            },
            {
                "name": "Ogooué-Maritime Province",
                "isoCode": "8",
                "countryCode": "GA"
            },
            {
                "name": "Woleu-Ntem Province",
                "isoCode": "9",
                "countryCode": "GA"
            },
            {
                "name": "Banjul",
                "isoCode": "B",
                "countryCode": "GM"
            },
            {
                "name": "Central River Division",
                "isoCode": "M",
                "countryCode": "GM"
            },
            {
                "name": "Lower River Division",
                "isoCode": "L",
                "countryCode": "GM"
            },
            {
                "name": "North Bank Division",
                "isoCode": "N",
                "countryCode": "GM"
            },
            {
                "name": "Upper River Division",
                "isoCode": "U",
                "countryCode": "GM"
            },
            {
                "name": "West Coast Division",
                "isoCode": "W",
                "countryCode": "GM"
            },
            {
                "name": "Adjara",
                "isoCode": "AJ",
                "countryCode": "GE"
            },
            {
                "name": "Autonomous Republic of Abkhazia",
                "isoCode": "AB",
                "countryCode": "GE"
            },
            {
                "name": "Guria",
                "isoCode": "GU",
                "countryCode": "GE"
            },
            {
                "name": "Imereti",
                "isoCode": "IM",
                "countryCode": "GE"
            },
            {
                "name": "Kakheti",
                "isoCode": "KA",
                "countryCode": "GE"
            },
            {
                "name": "Khelvachauri Municipality",
                "isoCode": "29",
                "countryCode": "GE"
            },
            {
                "name": "Kvemo Kartli",
                "isoCode": "KK",
                "countryCode": "GE"
            },
            {
                "name": "Mtskheta-Mtianeti",
                "isoCode": "MM",
                "countryCode": "GE"
            },
            {
                "name": "Racha-Lechkhumi and Kvemo Svaneti",
                "isoCode": "RL",
                "countryCode": "GE"
            },
            {
                "name": "Samegrelo-Zemo Svaneti",
                "isoCode": "SZ",
                "countryCode": "GE"
            },
            {
                "name": "Samtskhe-Javakheti",
                "isoCode": "SJ",
                "countryCode": "GE"
            },
            {
                "name": "Senaki Municipality",
                "isoCode": "50",
                "countryCode": "GE"
            },
            {
                "name": "Shida Kartli",
                "isoCode": "SK",
                "countryCode": "GE"
            },
            {
                "name": "Tbilisi",
                "isoCode": "TB",
                "countryCode": "GE"
            },
            {
                "name": "Baden-Württemberg",
                "isoCode": "BW",
                "countryCode": "DE"
            },
            {
                "name": "Bavaria",
                "isoCode": "BY",
                "countryCode": "DE"
            },
            {
                "name": "Berlin",
                "isoCode": "BE",
                "countryCode": "DE"
            },
            {
                "name": "Brandenburg",
                "isoCode": "BB",
                "countryCode": "DE"
            },
            {
                "name": "Bremen",
                "isoCode": "HB",
                "countryCode": "DE"
            },
            {
                "name": "Hamburg",
                "isoCode": "HH",
                "countryCode": "DE"
            },
            {
                "name": "Hesse",
                "isoCode": "HE",
                "countryCode": "DE"
            },
            {
                "name": "Lower Saxony",
                "isoCode": "NI",
                "countryCode": "DE"
            },
            {
                "name": "Mecklenburg-Vorpommern",
                "isoCode": "MV",
                "countryCode": "DE"
            },
            {
                "name": "North Rhine-Westphalia",
                "isoCode": "NW",
                "countryCode": "DE"
            },
            {
                "name": "Rhineland-Palatinate",
                "isoCode": "RP",
                "countryCode": "DE"
            },
            {
                "name": "Saarland",
                "isoCode": "SL",
                "countryCode": "DE"
            },
            {
                "name": "Saxony",
                "isoCode": "SN",
                "countryCode": "DE"
            },
            {
                "name": "Saxony-Anhalt",
                "isoCode": "ST",
                "countryCode": "DE"
            },
            {
                "name": "Schleswig-Holstein",
                "isoCode": "SH",
                "countryCode": "DE"
            },
            {
                "name": "Thuringia",
                "isoCode": "TH",
                "countryCode": "DE"
            },
            {
                "name": "Ahafo",
                "isoCode": "AF",
                "countryCode": "GH"
            },
            {
                "name": "Ashanti",
                "isoCode": "AH",
                "countryCode": "GH"
            },
            {
                "name": "Bono",
                "isoCode": "BO",
                "countryCode": "GH"
            },
            {
                "name": "Bono East",
                "isoCode": "BE",
                "countryCode": "GH"
            },
            {
                "name": "Central",
                "isoCode": "CP",
                "countryCode": "GH"
            },
            {
                "name": "Eastern",
                "isoCode": "EP",
                "countryCode": "GH"
            },
            {
                "name": "Greater Accra",
                "isoCode": "AA",
                "countryCode": "GH"
            },
            {
                "name": "North East",
                "isoCode": "NE",
                "countryCode": "GH"
            },
            {
                "name": "Northern",
                "isoCode": "NP",
                "countryCode": "GH"
            },
            {
                "name": "Oti",
                "isoCode": "OT",
                "countryCode": "GH"
            },
            {
                "name": "Savannah",
                "isoCode": "SV",
                "countryCode": "GH"
            },
            {
                "name": "Upper East",
                "isoCode": "UE",
                "countryCode": "GH"
            },
            {
                "name": "Upper West",
                "isoCode": "UW",
                "countryCode": "GH"
            },
            {
                "name": "Volta",
                "isoCode": "TV",
                "countryCode": "GH"
            },
            {
                "name": "Western",
                "isoCode": "WP",
                "countryCode": "GH"
            },
            {
                "name": "Western North",
                "isoCode": "WN",
                "countryCode": "GH"
            },
            {
                "name": "Achaea Regional Unit",
                "isoCode": "13",
                "countryCode": "GR"
            },
            {
                "name": "Aetolia-Acarnania Regional Unit",
                "isoCode": "01",
                "countryCode": "GR"
            },
            {
                "name": "Arcadia Prefecture",
                "isoCode": "12",
                "countryCode": "GR"
            },
            {
                "name": "Argolis Regional Unit",
                "isoCode": "11",
                "countryCode": "GR"
            },
            {
                "name": "Attica Region",
                "isoCode": "I",
                "countryCode": "GR"
            },
            {
                "name": "Boeotia Regional Unit",
                "isoCode": "03",
                "countryCode": "GR"
            },
            {
                "name": "Central Greece Region",
                "isoCode": "H",
                "countryCode": "GR"
            },
            {
                "name": "Central Macedonia",
                "isoCode": "B",
                "countryCode": "GR"
            },
            {
                "name": "Chania Regional Unit",
                "isoCode": "94",
                "countryCode": "GR"
            },
            {
                "name": "Corfu Prefecture",
                "isoCode": "22",
                "countryCode": "GR"
            },
            {
                "name": "Corinthia Regional Unit",
                "isoCode": "15",
                "countryCode": "GR"
            },
            {
                "name": "Crete Region",
                "isoCode": "M",
                "countryCode": "GR"
            },
            {
                "name": "Drama Regional Unit",
                "isoCode": "52",
                "countryCode": "GR"
            },
            {
                "name": "East Attica Regional Unit",
                "isoCode": "A2",
                "countryCode": "GR"
            },
            {
                "name": "East Macedonia and Thrace",
                "isoCode": "A",
                "countryCode": "GR"
            },
            {
                "name": "Epirus Region",
                "isoCode": "D",
                "countryCode": "GR"
            },
            {
                "name": "Euboea",
                "isoCode": "04",
                "countryCode": "GR"
            },
            {
                "name": "Grevena Prefecture",
                "isoCode": "51",
                "countryCode": "GR"
            },
            {
                "name": "Imathia Regional Unit",
                "isoCode": "53",
                "countryCode": "GR"
            },
            {
                "name": "Ioannina Regional Unit",
                "isoCode": "33",
                "countryCode": "GR"
            },
            {
                "name": "Ionian Islands Region",
                "isoCode": "F",
                "countryCode": "GR"
            },
            {
                "name": "Karditsa Regional Unit",
                "isoCode": "41",
                "countryCode": "GR"
            },
            {
                "name": "Kastoria Regional Unit",
                "isoCode": "56",
                "countryCode": "GR"
            },
            {
                "name": "Kefalonia Prefecture",
                "isoCode": "23",
                "countryCode": "GR"
            },
            {
                "name": "Kilkis Regional Unit",
                "isoCode": "57",
                "countryCode": "GR"
            },
            {
                "name": "Kozani Prefecture",
                "isoCode": "58",
                "countryCode": "GR"
            },
            {
                "name": "Laconia",
                "isoCode": "16",
                "countryCode": "GR"
            },
            {
                "name": "Larissa Prefecture",
                "isoCode": "42",
                "countryCode": "GR"
            },
            {
                "name": "Lefkada Regional Unit",
                "isoCode": "24",
                "countryCode": "GR"
            },
            {
                "name": "Pella Regional Unit",
                "isoCode": "59",
                "countryCode": "GR"
            },
            {
                "name": "Peloponnese Region",
                "isoCode": "J",
                "countryCode": "GR"
            },
            {
                "name": "Phthiotis Prefecture",
                "isoCode": "06",
                "countryCode": "GR"
            },
            {
                "name": "Preveza Prefecture",
                "isoCode": "34",
                "countryCode": "GR"
            },
            {
                "name": "Serres Prefecture",
                "isoCode": "62",
                "countryCode": "GR"
            },
            {
                "name": "South Aegean",
                "isoCode": "L",
                "countryCode": "GR"
            },
            {
                "name": "Thessaloniki Regional Unit",
                "isoCode": "54",
                "countryCode": "GR"
            },
            {
                "name": "West Greece Region",
                "isoCode": "G",
                "countryCode": "GR"
            },
            {
                "name": "West Macedonia Region",
                "isoCode": "C",
                "countryCode": "GR"
            },
            {
                "name": "Carriacou and Petite Martinique",
                "isoCode": "10",
                "countryCode": "GD"
            },
            {
                "name": "Saint Andrew Parish",
                "isoCode": "01",
                "countryCode": "GD"
            },
            {
                "name": "Saint David Parish",
                "isoCode": "02",
                "countryCode": "GD"
            },
            {
                "name": "Saint George Parish",
                "isoCode": "03",
                "countryCode": "GD"
            },
            {
                "name": "Saint John Parish",
                "isoCode": "04",
                "countryCode": "GD"
            },
            {
                "name": "Saint Mark Parish",
                "isoCode": "05",
                "countryCode": "GD"
            },
            {
                "name": "Saint Patrick Parish",
                "isoCode": "06",
                "countryCode": "GD"
            },
            {
                "name": "Alta Verapaz Department",
                "isoCode": "AV",
                "countryCode": "GT"
            },
            {
                "name": "Baja Verapaz Department",
                "isoCode": "BV",
                "countryCode": "GT"
            },
            {
                "name": "Chimaltenango Department",
                "isoCode": "CM",
                "countryCode": "GT"
            },
            {
                "name": "Chiquimula Department",
                "isoCode": "CQ",
                "countryCode": "GT"
            },
            {
                "name": "El Progreso Department",
                "isoCode": "PR",
                "countryCode": "GT"
            },
            {
                "name": "Escuintla Department",
                "isoCode": "ES",
                "countryCode": "GT"
            },
            {
                "name": "Guatemala Department",
                "isoCode": "GU",
                "countryCode": "GT"
            },
            {
                "name": "Huehuetenango Department",
                "isoCode": "HU",
                "countryCode": "GT"
            },
            {
                "name": "Izabal Department",
                "isoCode": "IZ",
                "countryCode": "GT"
            },
            {
                "name": "Jalapa Department",
                "isoCode": "JA",
                "countryCode": "GT"
            },
            {
                "name": "Jutiapa Department",
                "isoCode": "JU",
                "countryCode": "GT"
            },
            {
                "name": "Petén Department",
                "isoCode": "PE",
                "countryCode": "GT"
            },
            {
                "name": "Quetzaltenango Department",
                "isoCode": "QZ",
                "countryCode": "GT"
            },
            {
                "name": "Quiché Department",
                "isoCode": "QC",
                "countryCode": "GT"
            },
            {
                "name": "Retalhuleu Department",
                "isoCode": "RE",
                "countryCode": "GT"
            },
            {
                "name": "Sacatepéquez Department",
                "isoCode": "SA",
                "countryCode": "GT"
            },
            {
                "name": "San Marcos Department",
                "isoCode": "SM",
                "countryCode": "GT"
            },
            {
                "name": "Santa Rosa Department",
                "isoCode": "SR",
                "countryCode": "GT"
            },
            {
                "name": "Sololá Department",
                "isoCode": "SO",
                "countryCode": "GT"
            },
            {
                "name": "Suchitepéquez Department",
                "isoCode": "SU",
                "countryCode": "GT"
            },
            {
                "name": "Totonicapán Department",
                "isoCode": "TO",
                "countryCode": "GT"
            },
            {
                "name": "Beyla Prefecture",
                "isoCode": "BE",
                "countryCode": "GN"
            },
            {
                "name": "Boffa Prefecture",
                "isoCode": "BF",
                "countryCode": "GN"
            },
            {
                "name": "Boké Prefecture",
                "isoCode": "BK",
                "countryCode": "GN"
            },
            {
                "name": "Boké Region",
                "isoCode": "B",
                "countryCode": "GN"
            },
            {
                "name": "Conakry",
                "isoCode": "C",
                "countryCode": "GN"
            },
            {
                "name": "Coyah Prefecture",
                "isoCode": "CO",
                "countryCode": "GN"
            },
            {
                "name": "Dabola Prefecture",
                "isoCode": "DB",
                "countryCode": "GN"
            },
            {
                "name": "Dalaba Prefecture",
                "isoCode": "DL",
                "countryCode": "GN"
            },
            {
                "name": "Dinguiraye Prefecture",
                "isoCode": "DI",
                "countryCode": "GN"
            },
            {
                "name": "Dubréka Prefecture",
                "isoCode": "DU",
                "countryCode": "GN"
            },
            {
                "name": "Faranah Prefecture",
                "isoCode": "FA",
                "countryCode": "GN"
            },
            {
                "name": "Forécariah Prefecture",
                "isoCode": "FO",
                "countryCode": "GN"
            },
            {
                "name": "Fria Prefecture",
                "isoCode": "FR",
                "countryCode": "GN"
            },
            {
                "name": "Gaoual Prefecture",
                "isoCode": "GA",
                "countryCode": "GN"
            },
            {
                "name": "Guéckédou Prefecture",
                "isoCode": "GU",
                "countryCode": "GN"
            },
            {
                "name": "Kankan Prefecture",
                "isoCode": "KA",
                "countryCode": "GN"
            },
            {
                "name": "Kankan Region",
                "isoCode": "K",
                "countryCode": "GN"
            },
            {
                "name": "Kindia Prefecture",
                "isoCode": "KD",
                "countryCode": "GN"
            },
            {
                "name": "Kindia Region",
                "isoCode": "D",
                "countryCode": "GN"
            },
            {
                "name": "Kissidougou Prefecture",
                "isoCode": "KS",
                "countryCode": "GN"
            },
            {
                "name": "Koubia Prefecture",
                "isoCode": "KB",
                "countryCode": "GN"
            },
            {
                "name": "Koundara Prefecture",
                "isoCode": "KN",
                "countryCode": "GN"
            },
            {
                "name": "Kouroussa Prefecture",
                "isoCode": "KO",
                "countryCode": "GN"
            },
            {
                "name": "Kérouané Prefecture",
                "isoCode": "KE",
                "countryCode": "GN"
            },
            {
                "name": "Labé Prefecture",
                "isoCode": "LA",
                "countryCode": "GN"
            },
            {
                "name": "Labé Region",
                "isoCode": "L",
                "countryCode": "GN"
            },
            {
                "name": "Lola Prefecture",
                "isoCode": "LO",
                "countryCode": "GN"
            },
            {
                "name": "Lélouma Prefecture",
                "isoCode": "LE",
                "countryCode": "GN"
            },
            {
                "name": "Macenta Prefecture",
                "isoCode": "MC",
                "countryCode": "GN"
            },
            {
                "name": "Mali Prefecture",
                "isoCode": "ML",
                "countryCode": "GN"
            },
            {
                "name": "Mamou Prefecture",
                "isoCode": "MM",
                "countryCode": "GN"
            },
            {
                "name": "Mamou Region",
                "isoCode": "M",
                "countryCode": "GN"
            },
            {
                "name": "Mandiana Prefecture",
                "isoCode": "MD",
                "countryCode": "GN"
            },
            {
                "name": "Nzérékoré Prefecture",
                "isoCode": "NZ",
                "countryCode": "GN"
            },
            {
                "name": "Nzérékoré Region",
                "isoCode": "N",
                "countryCode": "GN"
            },
            {
                "name": "Pita Prefecture",
                "isoCode": "PI",
                "countryCode": "GN"
            },
            {
                "name": "Siguiri Prefecture",
                "isoCode": "SI",
                "countryCode": "GN"
            },
            {
                "name": "Tougué Prefecture",
                "isoCode": "TO",
                "countryCode": "GN"
            },
            {
                "name": "Télimélé Prefecture",
                "isoCode": "TE",
                "countryCode": "GN"
            },
            {
                "name": "Yomou Prefecture",
                "isoCode": "YO",
                "countryCode": "GN"
            },
            {
                "name": "Bafatá",
                "isoCode": "BA",
                "countryCode": "GW"
            },
            {
                "name": "Biombo Region",
                "isoCode": "BM",
                "countryCode": "GW"
            },
            {
                "name": "Bolama Region",
                "isoCode": "BL",
                "countryCode": "GW"
            },
            {
                "name": "Cacheu Region",
                "isoCode": "CA",
                "countryCode": "GW"
            },
            {
                "name": "Gabú Region",
                "isoCode": "GA",
                "countryCode": "GW"
            },
            {
                "name": "Leste Province",
                "isoCode": "L",
                "countryCode": "GW"
            },
            {
                "name": "Norte Province",
                "isoCode": "N",
                "countryCode": "GW"
            },
            {
                "name": "Oio Region",
                "isoCode": "OI",
                "countryCode": "GW"
            },
            {
                "name": "Quinara Region",
                "isoCode": "QU",
                "countryCode": "GW"
            },
            {
                "name": "Sul Province",
                "isoCode": "S",
                "countryCode": "GW"
            },
            {
                "name": "Tombali Region",
                "isoCode": "TO",
                "countryCode": "GW"
            },
            {
                "name": "Barima-Waini",
                "isoCode": "BA",
                "countryCode": "GY"
            },
            {
                "name": "Cuyuni-Mazaruni",
                "isoCode": "CU",
                "countryCode": "GY"
            },
            {
                "name": "Demerara-Mahaica",
                "isoCode": "DE",
                "countryCode": "GY"
            },
            {
                "name": "East Berbice-Corentyne",
                "isoCode": "EB",
                "countryCode": "GY"
            },
            {
                "name": "Essequibo Islands-West Demerara",
                "isoCode": "ES",
                "countryCode": "GY"
            },
            {
                "name": "Mahaica-Berbice",
                "isoCode": "MA",
                "countryCode": "GY"
            },
            {
                "name": "Pomeroon-Supenaam",
                "isoCode": "PM",
                "countryCode": "GY"
            },
            {
                "name": "Potaro-Siparuni",
                "isoCode": "PT",
                "countryCode": "GY"
            },
            {
                "name": "Upper Demerara-Berbice",
                "isoCode": "UD",
                "countryCode": "GY"
            },
            {
                "name": "Upper Takutu-Upper Essequibo",
                "isoCode": "UT",
                "countryCode": "GY"
            },
            {
                "name": "Artibonite",
                "isoCode": "AR",
                "countryCode": "HT"
            },
            {
                "name": "Centre",
                "isoCode": "CE",
                "countryCode": "HT"
            },
            {
                "name": "Grand'Anse",
                "isoCode": "GA",
                "countryCode": "HT"
            },
            {
                "name": "Nippes",
                "isoCode": "NI",
                "countryCode": "HT"
            },
            {
                "name": "Nord",
                "isoCode": "ND",
                "countryCode": "HT"
            },
            {
                "name": "Nord-Est",
                "isoCode": "NE",
                "countryCode": "HT"
            },
            {
                "name": "Nord-Ouest",
                "isoCode": "NO",
                "countryCode": "HT"
            },
            {
                "name": "Ouest",
                "isoCode": "OU",
                "countryCode": "HT"
            },
            {
                "name": "Sud",
                "isoCode": "SD",
                "countryCode": "HT"
            },
            {
                "name": "Sud-Est",
                "isoCode": "SE",
                "countryCode": "HT"
            },
            {
                "name": "Atlántida Department",
                "isoCode": "AT",
                "countryCode": "HN"
            },
            {
                "name": "Bay Islands Department",
                "isoCode": "IB",
                "countryCode": "HN"
            },
            {
                "name": "Choluteca Department",
                "isoCode": "CH",
                "countryCode": "HN"
            },
            {
                "name": "Colón Department",
                "isoCode": "CL",
                "countryCode": "HN"
            },
            {
                "name": "Comayagua Department",
                "isoCode": "CM",
                "countryCode": "HN"
            },
            {
                "name": "Copán Department",
                "isoCode": "CP",
                "countryCode": "HN"
            },
            {
                "name": "Cortés Department",
                "isoCode": "CR",
                "countryCode": "HN"
            },
            {
                "name": "El Paraíso Department",
                "isoCode": "EP",
                "countryCode": "HN"
            },
            {
                "name": "Francisco Morazán Department",
                "isoCode": "FM",
                "countryCode": "HN"
            },
            {
                "name": "Gracias a Dios Department",
                "isoCode": "GD",
                "countryCode": "HN"
            },
            {
                "name": "Intibucá Department",
                "isoCode": "IN",
                "countryCode": "HN"
            },
            {
                "name": "La Paz Department",
                "isoCode": "LP",
                "countryCode": "HN"
            },
            {
                "name": "Lempira Department",
                "isoCode": "LE",
                "countryCode": "HN"
            },
            {
                "name": "Ocotepeque Department",
                "isoCode": "OC",
                "countryCode": "HN"
            },
            {
                "name": "Olancho Department",
                "isoCode": "OL",
                "countryCode": "HN"
            },
            {
                "name": "Santa Bárbara Department",
                "isoCode": "SB",
                "countryCode": "HN"
            },
            {
                "name": "Valle Department",
                "isoCode": "VA",
                "countryCode": "HN"
            },
            {
                "name": "Yoro Department",
                "isoCode": "YO",
                "countryCode": "HN"
            },
            {
                "name": "Central and Western District",
                "isoCode": "HCW",
                "countryCode": "HK"
            },
            {
                "name": "Eastern",
                "isoCode": "HEA",
                "countryCode": "HK"
            },
            {
                "name": "Islands District",
                "isoCode": "NIS",
                "countryCode": "HK"
            },
            {
                "name": "Kowloon City",
                "isoCode": "KKC",
                "countryCode": "HK"
            },
            {
                "name": "Kwai Tsing",
                "isoCode": "NKT",
                "countryCode": "HK"
            },
            {
                "name": "Kwun Tong",
                "isoCode": "KKT",
                "countryCode": "HK"
            },
            {
                "name": "North",
                "isoCode": "NNO",
                "countryCode": "HK"
            },
            {
                "name": "Sai Kung District",
                "isoCode": "NSK",
                "countryCode": "HK"
            },
            {
                "name": "Sha Tin",
                "isoCode": "NST",
                "countryCode": "HK"
            },
            {
                "name": "Sham Shui Po",
                "isoCode": "KSS",
                "countryCode": "HK"
            },
            {
                "name": "Southern",
                "isoCode": "HSO",
                "countryCode": "HK"
            },
            {
                "name": "Tsuen Wan District",
                "isoCode": "NTW",
                "countryCode": "HK"
            },
            {
                "name": "Tuen Mun",
                "isoCode": "NTM",
                "countryCode": "HK"
            },
            {
                "name": "Wan Chai",
                "isoCode": "HWC",
                "countryCode": "HK"
            },
            {
                "name": "Wong Tai Sin",
                "isoCode": "KWT",
                "countryCode": "HK"
            },
            {
                "name": "Yau Tsim Mong",
                "isoCode": "KYT",
                "countryCode": "HK"
            },
            {
                "name": "Yuen Long District",
                "isoCode": "NYL",
                "countryCode": "HK"
            },
            {
                "name": "Baranya County",
                "isoCode": "BA",
                "countryCode": "HU"
            },
            {
                "name": "Borsod-Abaúj-Zemplén County",
                "isoCode": "BZ",
                "countryCode": "HU"
            },
            {
                "name": "Budapest",
                "isoCode": "BU",
                "countryCode": "HU"
            },
            {
                "name": "Bács-Kiskun County",
                "isoCode": "BK",
                "countryCode": "HU"
            },
            {
                "name": "Békés County",
                "isoCode": "BE",
                "countryCode": "HU"
            },
            {
                "name": "Békéscsaba",
                "isoCode": "BC",
                "countryCode": "HU"
            },
            {
                "name": "Csongrád County",
                "isoCode": "CS",
                "countryCode": "HU"
            },
            {
                "name": "Debrecen",
                "isoCode": "DE",
                "countryCode": "HU"
            },
            {
                "name": "Dunaújváros",
                "isoCode": "DU",
                "countryCode": "HU"
            },
            {
                "name": "Eger",
                "isoCode": "EG",
                "countryCode": "HU"
            },
            {
                "name": "Fejér County",
                "isoCode": "FE",
                "countryCode": "HU"
            },
            {
                "name": "Győr",
                "isoCode": "GY",
                "countryCode": "HU"
            },
            {
                "name": "Győr-Moson-Sopron County",
                "isoCode": "GS",
                "countryCode": "HU"
            },
            {
                "name": "Hajdú-Bihar County",
                "isoCode": "HB",
                "countryCode": "HU"
            },
            {
                "name": "Heves County",
                "isoCode": "HE",
                "countryCode": "HU"
            },
            {
                "name": "Hódmezővásárhely",
                "isoCode": "HV",
                "countryCode": "HU"
            },
            {
                "name": "Jász-Nagykun-Szolnok County",
                "isoCode": "JN",
                "countryCode": "HU"
            },
            {
                "name": "Kaposvár",
                "isoCode": "KV",
                "countryCode": "HU"
            },
            {
                "name": "Kecskemét",
                "isoCode": "KM",
                "countryCode": "HU"
            },
            {
                "name": "Miskolc",
                "isoCode": "MI",
                "countryCode": "HU"
            },
            {
                "name": "Nagykanizsa",
                "isoCode": "NK",
                "countryCode": "HU"
            },
            {
                "name": "Nyíregyháza",
                "isoCode": "NY",
                "countryCode": "HU"
            },
            {
                "name": "Nógrád County",
                "isoCode": "NO",
                "countryCode": "HU"
            },
            {
                "name": "Pest County",
                "isoCode": "PE",
                "countryCode": "HU"
            },
            {
                "name": "Pécs",
                "isoCode": "PS",
                "countryCode": "HU"
            },
            {
                "name": "Salgótarján",
                "isoCode": "ST",
                "countryCode": "HU"
            },
            {
                "name": "Somogy County",
                "isoCode": "SO",
                "countryCode": "HU"
            },
            {
                "name": "Sopron",
                "isoCode": "SN",
                "countryCode": "HU"
            },
            {
                "name": "Szabolcs-Szatmár-Bereg County",
                "isoCode": "SZ",
                "countryCode": "HU"
            },
            {
                "name": "Szeged",
                "isoCode": "SD",
                "countryCode": "HU"
            },
            {
                "name": "Szekszárd",
                "isoCode": "SS",
                "countryCode": "HU"
            },
            {
                "name": "Szolnok",
                "isoCode": "SK",
                "countryCode": "HU"
            },
            {
                "name": "Szombathely",
                "isoCode": "SH",
                "countryCode": "HU"
            },
            {
                "name": "Székesfehérvár",
                "isoCode": "SF",
                "countryCode": "HU"
            },
            {
                "name": "Tatabánya",
                "isoCode": "TB",
                "countryCode": "HU"
            },
            {
                "name": "Tolna County",
                "isoCode": "TO",
                "countryCode": "HU"
            },
            {
                "name": "Vas County",
                "isoCode": "VA",
                "countryCode": "HU"
            },
            {
                "name": "Veszprém",
                "isoCode": "VM",
                "countryCode": "HU"
            },
            {
                "name": "Veszprém County",
                "isoCode": "VE",
                "countryCode": "HU"
            },
            {
                "name": "Zala County",
                "isoCode": "ZA",
                "countryCode": "HU"
            },
            {
                "name": "Zalaegerszeg",
                "isoCode": "ZE",
                "countryCode": "HU"
            },
            {
                "name": "Érd",
                "isoCode": "ER",
                "countryCode": "HU"
            },
            {
                "name": "Capital Region",
                "isoCode": "1",
                "countryCode": "IS"
            },
            {
                "name": "Eastern Region",
                "isoCode": "7",
                "countryCode": "IS"
            },
            {
                "name": "Northeastern Region",
                "isoCode": "6",
                "countryCode": "IS"
            },
            {
                "name": "Northwestern Region",
                "isoCode": "5",
                "countryCode": "IS"
            },
            {
                "name": "Southern Peninsula Region",
                "isoCode": "2",
                "countryCode": "IS"
            },
            {
                "name": "Southern Region",
                "isoCode": "8",
                "countryCode": "IS"
            },
            {
                "name": "Western Region",
                "isoCode": "3",
                "countryCode": "IS"
            },
            {
                "name": "Westfjords",
                "isoCode": "4",
                "countryCode": "IS"
            },
            {
                "name": "Andaman and Nicobar Islands",
                "isoCode": "AN",
                "countryCode": "IN"
            },
            {
                "name": "Andhra Pradesh",
                "isoCode": "AP",
                "countryCode": "IN"
            },
            {
                "name": "Arunachal Pradesh",
                "isoCode": "AR",
                "countryCode": "IN"
            },
            {
                "name": "Assam",
                "isoCode": "AS",
                "countryCode": "IN"
            },
            {
                "name": "Bihar",
                "isoCode": "BR",
                "countryCode": "IN"
            },
            {
                "name": "Chandigarh",
                "isoCode": "CH",
                "countryCode": "IN"
            },
            {
                "name": "Chhattisgarh",
                "isoCode": "CT",
                "countryCode": "IN"
            },
            {
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "isoCode": "DH",
                "countryCode": "IN"
            },
            {
                "name": "Delhi",
                "isoCode": "DL",
                "countryCode": "IN"
            },
            {
                "name": "Goa",
                "isoCode": "GA",
                "countryCode": "IN"
            },
            {
                "name": "Gujarat",
                "isoCode": "GJ",
                "countryCode": "IN"
            },
            {
                "name": "Haryana",
                "isoCode": "HR",
                "countryCode": "IN"
            },
            {
                "name": "Himachal Pradesh",
                "isoCode": "HP",
                "countryCode": "IN"
            },
            {
                "name": "Jammu and Kashmir",
                "isoCode": "JK",
                "countryCode": "IN"
            },
            {
                "name": "Jharkhand",
                "isoCode": "JH",
                "countryCode": "IN"
            },
            {
                "name": "Karnataka",
                "isoCode": "KA",
                "countryCode": "IN"
            },
            {
                "name": "Kerala",
                "isoCode": "KL",
                "countryCode": "IN"
            },
            {
                "name": "Ladakh",
                "isoCode": "LA",
                "countryCode": "IN"
            },
            {
                "name": "Lakshadweep",
                "isoCode": "LD",
                "countryCode": "IN"
            },
            {
                "name": "Madhya Pradesh",
                "isoCode": "MP",
                "countryCode": "IN"
            },
            {
                "name": "Maharashtra",
                "isoCode": "MH",
                "countryCode": "IN"
            },
            {
                "name": "Manipur",
                "isoCode": "MN",
                "countryCode": "IN"
            },
            {
                "name": "Meghalaya",
                "isoCode": "ML",
                "countryCode": "IN"
            },
            {
                "name": "Mizoram",
                "isoCode": "MZ",
                "countryCode": "IN"
            },
            {
                "name": "Nagaland",
                "isoCode": "NL",
                "countryCode": "IN"
            },
            {
                "name": "Odisha",
                "isoCode": "OR",
                "countryCode": "IN"
            },
            {
                "name": "Puducherry",
                "isoCode": "PY",
                "countryCode": "IN"
            },
            {
                "name": "Punjab",
                "isoCode": "PB",
                "countryCode": "IN"
            },
            {
                "name": "Rajasthan",
                "isoCode": "RJ",
                "countryCode": "IN"
            },
            {
                "name": "Sikkim",
                "isoCode": "SK",
                "countryCode": "IN"
            },
            {
                "name": "Tamil Nadu",
                "isoCode": "TN",
                "countryCode": "IN"
            },
            {
                "name": "Telangana",
                "isoCode": "TG",
                "countryCode": "IN"
            },
            {
                "name": "Tripura",
                "isoCode": "TR",
                "countryCode": "IN"
            },
            {
                "name": "Uttar Pradesh",
                "isoCode": "UP",
                "countryCode": "IN"
            },
            {
                "name": "Uttarakhand",
                "isoCode": "UT",
                "countryCode": "IN"
            },
            {
                "name": "West Bengal",
                "isoCode": "WB",
                "countryCode": "IN"
            },
            {
                "name": "Aceh",
                "isoCode": "AC",
                "countryCode": "ID"
            },
            {
                "name": "Bali",
                "isoCode": "BA",
                "countryCode": "ID"
            },
            {
                "name": "Banten",
                "isoCode": "BT",
                "countryCode": "ID"
            },
            {
                "name": "Bengkulu",
                "isoCode": "BE",
                "countryCode": "ID"
            },
            {
                "name": "DI Yogyakarta",
                "isoCode": "YO",
                "countryCode": "ID"
            },
            {
                "name": "DKI Jakarta",
                "isoCode": "JK",
                "countryCode": "ID"
            },
            {
                "name": "Gorontalo",
                "isoCode": "GO",
                "countryCode": "ID"
            },
            {
                "name": "Jambi",
                "isoCode": "JA",
                "countryCode": "ID"
            },
            {
                "name": "Jawa Barat",
                "isoCode": "JB",
                "countryCode": "ID"
            },
            {
                "name": "Jawa Tengah",
                "isoCode": "JT",
                "countryCode": "ID"
            },
            {
                "name": "Jawa Timur",
                "isoCode": "JI",
                "countryCode": "ID"
            },
            {
                "name": "Kalimantan Barat",
                "isoCode": "KA",
                "countryCode": "ID"
            },
            {
                "name": "Kalimantan Selatan",
                "isoCode": "KS",
                "countryCode": "ID"
            },
            {
                "name": "Kalimantan Tengah",
                "isoCode": "KT",
                "countryCode": "ID"
            },
            {
                "name": "Kalimantan Timur",
                "isoCode": "KI",
                "countryCode": "ID"
            },
            {
                "name": "Kalimantan Utara",
                "isoCode": "KU",
                "countryCode": "ID"
            },
            {
                "name": "Kepulauan Bangka Belitung",
                "isoCode": "BB",
                "countryCode": "ID"
            },
            {
                "name": "Kepulauan Riau",
                "isoCode": "KR",
                "countryCode": "ID"
            },
            {
                "name": "Lampung",
                "isoCode": "LA",
                "countryCode": "ID"
            },
            {
                "name": "Maluku",
                "isoCode": "MA",
                "countryCode": "ID"
            },
            {
                "name": "Maluku Utara",
                "isoCode": "MU",
                "countryCode": "ID"
            },
            {
                "name": "Nusa Tenggara Barat",
                "isoCode": "NB",
                "countryCode": "ID"
            },
            {
                "name": "Nusa Tenggara Timur",
                "isoCode": "NT",
                "countryCode": "ID"
            },
            {
                "name": "Papua",
                "isoCode": "PA",
                "countryCode": "ID"
            },
            {
                "name": "Papua Barat",
                "isoCode": "PB",
                "countryCode": "ID"
            },
            {
                "name": "Riau",
                "isoCode": "RI",
                "countryCode": "ID"
            },
            {
                "name": "Sulawesi Barat",
                "isoCode": "SR",
                "countryCode": "ID"
            },
            {
                "name": "Sulawesi Selatan",
                "isoCode": "SN",
                "countryCode": "ID"
            },
            {
                "name": "Sulawesi Tengah",
                "isoCode": "ST",
                "countryCode": "ID"
            },
            {
                "name": "Sulawesi Tenggara",
                "isoCode": "SG",
                "countryCode": "ID"
            },
            {
                "name": "Sulawesi Utara",
                "isoCode": "SA",
                "countryCode": "ID"
            },
            {
                "name": "Sumatera Barat",
                "isoCode": "SB",
                "countryCode": "ID"
            },
            {
                "name": "Sumatera Selatan",
                "isoCode": "SS",
                "countryCode": "ID"
            },
            {
                "name": "Sumatera Utara",
                "isoCode": "SU",
                "countryCode": "ID"
            },
            {
                "name": "Alborz",
                "isoCode": "30",
                "countryCode": "IR"
            },
            {
                "name": "Ardabil",
                "isoCode": "24",
                "countryCode": "IR"
            },
            {
                "name": "Bushehr",
                "isoCode": "18",
                "countryCode": "IR"
            },
            {
                "name": "Chaharmahal and Bakhtiari",
                "isoCode": "14",
                "countryCode": "IR"
            },
            {
                "name": "East Azerbaijan",
                "isoCode": "03",
                "countryCode": "IR"
            },
            {
                "name": "Fars",
                "isoCode": "07",
                "countryCode": "IR"
            },
            {
                "name": "Gilan",
                "isoCode": "01",
                "countryCode": "IR"
            },
            {
                "name": "Golestan",
                "isoCode": "27",
                "countryCode": "IR"
            },
            {
                "name": "Hamadan",
                "isoCode": "13",
                "countryCode": "IR"
            },
            {
                "name": "Hormozgan",
                "isoCode": "22",
                "countryCode": "IR"
            },
            {
                "name": "Ilam",
                "isoCode": "16",
                "countryCode": "IR"
            },
            {
                "name": "Isfahan",
                "isoCode": "10",
                "countryCode": "IR"
            },
            {
                "name": "Kerman",
                "isoCode": "08",
                "countryCode": "IR"
            },
            {
                "name": "Kermanshah",
                "isoCode": "05",
                "countryCode": "IR"
            },
            {
                "name": "Khuzestan",
                "isoCode": "06",
                "countryCode": "IR"
            },
            {
                "name": "Kohgiluyeh and Boyer-Ahmad",
                "isoCode": "17",
                "countryCode": "IR"
            },
            {
                "name": "Kurdistan",
                "isoCode": "12",
                "countryCode": "IR"
            },
            {
                "name": "Lorestan",
                "isoCode": "15",
                "countryCode": "IR"
            },
            {
                "name": "Markazi",
                "isoCode": "00",
                "countryCode": "IR"
            },
            {
                "name": "Mazandaran",
                "isoCode": "02",
                "countryCode": "IR"
            },
            {
                "name": "North Khorasan",
                "isoCode": "28",
                "countryCode": "IR"
            },
            {
                "name": "Qazvin",
                "isoCode": "26",
                "countryCode": "IR"
            },
            {
                "name": "Qom",
                "isoCode": "25",
                "countryCode": "IR"
            },
            {
                "name": "Razavi Khorasan",
                "isoCode": "09",
                "countryCode": "IR"
            },
            {
                "name": "Semnan",
                "isoCode": "20",
                "countryCode": "IR"
            },
            {
                "name": "Sistan and Baluchestan",
                "isoCode": "11",
                "countryCode": "IR"
            },
            {
                "name": "South Khorasan",
                "isoCode": "29",
                "countryCode": "IR"
            },
            {
                "name": "Tehran",
                "isoCode": "23",
                "countryCode": "IR"
            },
            {
                "name": "West Azarbaijan",
                "isoCode": "04",
                "countryCode": "IR"
            },
            {
                "name": "Yazd",
                "isoCode": "21",
                "countryCode": "IR"
            },
            {
                "name": "Zanjan",
                "isoCode": "19",
                "countryCode": "IR"
            },
            {
                "name": "Al Anbar Governorate",
                "isoCode": "AN",
                "countryCode": "IQ"
            },
            {
                "name": "Al Muthanna Governorate",
                "isoCode": "MU",
                "countryCode": "IQ"
            },
            {
                "name": "Al-Qādisiyyah Governorate",
                "isoCode": "QA",
                "countryCode": "IQ"
            },
            {
                "name": "Babylon Governorate",
                "isoCode": "BB",
                "countryCode": "IQ"
            },
            {
                "name": "Baghdad Governorate",
                "isoCode": "BG",
                "countryCode": "IQ"
            },
            {
                "name": "Basra Governorate",
                "isoCode": "BA",
                "countryCode": "IQ"
            },
            {
                "name": "Dhi Qar Governorate",
                "isoCode": "DQ",
                "countryCode": "IQ"
            },
            {
                "name": "Diyala Governorate",
                "isoCode": "DI",
                "countryCode": "IQ"
            },
            {
                "name": "Dohuk Governorate",
                "isoCode": "DA",
                "countryCode": "IQ"
            },
            {
                "name": "Erbil Governorate",
                "isoCode": "AR",
                "countryCode": "IQ"
            },
            {
                "name": "Karbala Governorate",
                "isoCode": "KA",
                "countryCode": "IQ"
            },
            {
                "name": "Kirkuk Governorate",
                "isoCode": "KI",
                "countryCode": "IQ"
            },
            {
                "name": "Maysan Governorate",
                "isoCode": "MA",
                "countryCode": "IQ"
            },
            {
                "name": "Najaf Governorate",
                "isoCode": "NA",
                "countryCode": "IQ"
            },
            {
                "name": "Nineveh Governorate",
                "isoCode": "NI",
                "countryCode": "IQ"
            },
            {
                "name": "Saladin Governorate",
                "isoCode": "SD",
                "countryCode": "IQ"
            },
            {
                "name": "Sulaymaniyah Governorate",
                "isoCode": "SU",
                "countryCode": "IQ"
            },
            {
                "name": "Wasit Governorate",
                "isoCode": "WA",
                "countryCode": "IQ"
            },
            {
                "name": "Carlow",
                "isoCode": "CW",
                "countryCode": "IE"
            },
            {
                "name": "Cavan",
                "isoCode": "CN",
                "countryCode": "IE"
            },
            {
                "name": "Clare",
                "isoCode": "CE",
                "countryCode": "IE"
            },
            {
                "name": "Connacht",
                "isoCode": "C",
                "countryCode": "IE"
            },
            {
                "name": "Cork",
                "isoCode": "CO",
                "countryCode": "IE"
            },
            {
                "name": "Donegal",
                "isoCode": "DL",
                "countryCode": "IE"
            },
            {
                "name": "Dublin",
                "isoCode": "D",
                "countryCode": "IE"
            },
            {
                "name": "Galway",
                "isoCode": "G",
                "countryCode": "IE"
            },
            {
                "name": "Kerry",
                "isoCode": "KY",
                "countryCode": "IE"
            },
            {
                "name": "Kildare",
                "isoCode": "KE",
                "countryCode": "IE"
            },
            {
                "name": "Kilkenny",
                "isoCode": "KK",
                "countryCode": "IE"
            },
            {
                "name": "Laois",
                "isoCode": "LS",
                "countryCode": "IE"
            },
            {
                "name": "Leinster",
                "isoCode": "L",
                "countryCode": "IE"
            },
            {
                "name": "Limerick",
                "isoCode": "LK",
                "countryCode": "IE"
            },
            {
                "name": "Longford",
                "isoCode": "LD",
                "countryCode": "IE"
            },
            {
                "name": "Louth",
                "isoCode": "LH",
                "countryCode": "IE"
            },
            {
                "name": "Mayo",
                "isoCode": "MO",
                "countryCode": "IE"
            },
            {
                "name": "Meath",
                "isoCode": "MH",
                "countryCode": "IE"
            },
            {
                "name": "Monaghan",
                "isoCode": "MN",
                "countryCode": "IE"
            },
            {
                "name": "Munster",
                "isoCode": "M",
                "countryCode": "IE"
            },
            {
                "name": "Offaly",
                "isoCode": "OY",
                "countryCode": "IE"
            },
            {
                "name": "Roscommon",
                "isoCode": "RN",
                "countryCode": "IE"
            },
            {
                "name": "Sligo",
                "isoCode": "SO",
                "countryCode": "IE"
            },
            {
                "name": "Tipperary",
                "isoCode": "TA",
                "countryCode": "IE"
            },
            {
                "name": "Ulster",
                "isoCode": "U",
                "countryCode": "IE"
            },
            {
                "name": "Waterford",
                "isoCode": "WD",
                "countryCode": "IE"
            },
            {
                "name": "Westmeath",
                "isoCode": "WH",
                "countryCode": "IE"
            },
            {
                "name": "Wexford",
                "isoCode": "WX",
                "countryCode": "IE"
            },
            {
                "name": "Wicklow",
                "isoCode": "WW",
                "countryCode": "IE"
            },
            {
                "name": "Central District",
                "isoCode": "M",
                "countryCode": "IL"
            },
            {
                "name": "Haifa District",
                "isoCode": "HA",
                "countryCode": "IL"
            },
            {
                "name": "Jerusalem District",
                "isoCode": "JM",
                "countryCode": "IL"
            },
            {
                "name": "Northern District",
                "isoCode": "Z",
                "countryCode": "IL"
            },
            {
                "name": "Southern District",
                "isoCode": "D",
                "countryCode": "IL"
            },
            {
                "name": "Tel Aviv District",
                "isoCode": "TA",
                "countryCode": "IL"
            },
            {
                "name": "Abruzzo",
                "isoCode": "65",
                "countryCode": "IT"
            },
            {
                "name": "Aosta Valley",
                "isoCode": "23",
                "countryCode": "IT"
            },
            {
                "name": "Apulia",
                "isoCode": "75",
                "countryCode": "IT"
            },
            {
                "name": "Basilicata",
                "isoCode": "77",
                "countryCode": "IT"
            },
            {
                "name": "Benevento Province",
                "isoCode": "BN",
                "countryCode": "IT"
            },
            {
                "name": "Calabria",
                "isoCode": "78",
                "countryCode": "IT"
            },
            {
                "name": "Campania",
                "isoCode": "72",
                "countryCode": "IT"
            },
            {
                "name": "Emilia-Romagna",
                "isoCode": "45",
                "countryCode": "IT"
            },
            {
                "name": "Friuli–Venezia Giulia",
                "isoCode": "36",
                "countryCode": "IT"
            },
            {
                "name": "Lazio",
                "isoCode": "62",
                "countryCode": "IT"
            },
            {
                "name": "Libero consorzio comunale di Agrigento",
                "isoCode": "AG",
                "countryCode": "IT"
            },
            {
                "name": "Libero consorzio comunale di Caltanissetta",
                "isoCode": "CL",
                "countryCode": "IT"
            },
            {
                "name": "Libero consorzio comunale di Enna",
                "isoCode": "EN",
                "countryCode": "IT"
            },
            {
                "name": "Libero consorzio comunale di Ragusa",
                "isoCode": "RG",
                "countryCode": "IT"
            },
            {
                "name": "Libero consorzio comunale di Siracusa",
                "isoCode": "SR",
                "countryCode": "IT"
            },
            {
                "name": "Libero consorzio comunale di Trapani",
                "isoCode": "TP",
                "countryCode": "IT"
            },
            {
                "name": "Liguria",
                "isoCode": "42",
                "countryCode": "IT"
            },
            {
                "name": "Lombardy",
                "isoCode": "25",
                "countryCode": "IT"
            },
            {
                "name": "Marche",
                "isoCode": "57",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Bari",
                "isoCode": "BA",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Bologna",
                "isoCode": "BO",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Cagliari",
                "isoCode": "CA",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Catania",
                "isoCode": "CT",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Florence",
                "isoCode": "FI",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Genoa",
                "isoCode": "GE",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Messina",
                "isoCode": "ME",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Milan",
                "isoCode": "MI",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Naples",
                "isoCode": "NA",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Palermo",
                "isoCode": "PA",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Reggio Calabria",
                "isoCode": "RC",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Rome",
                "isoCode": "RM",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Turin",
                "isoCode": "TO",
                "countryCode": "IT"
            },
            {
                "name": "Metropolitan City of Venice",
                "isoCode": "VE",
                "countryCode": "IT"
            },
            {
                "name": "Molise",
                "isoCode": "67",
                "countryCode": "IT"
            },
            {
                "name": "Pesaro and Urbino Province",
                "isoCode": "PU",
                "countryCode": "IT"
            },
            {
                "name": "Piedmont",
                "isoCode": "21",
                "countryCode": "IT"
            },
            {
                "name": "Province of Alessandria",
                "isoCode": "AL",
                "countryCode": "IT"
            },
            {
                "name": "Province of Ancona",
                "isoCode": "AN",
                "countryCode": "IT"
            },
            {
                "name": "Province of Ascoli Piceno",
                "isoCode": "AP",
                "countryCode": "IT"
            },
            {
                "name": "Province of Asti",
                "isoCode": "AT",
                "countryCode": "IT"
            },
            {
                "name": "Province of Avellino",
                "isoCode": "AV",
                "countryCode": "IT"
            },
            {
                "name": "Province of Barletta-Andria-Trani",
                "isoCode": "BT",
                "countryCode": "IT"
            },
            {
                "name": "Province of Belluno",
                "isoCode": "BL",
                "countryCode": "IT"
            },
            {
                "name": "Province of Bergamo",
                "isoCode": "BG",
                "countryCode": "IT"
            },
            {
                "name": "Province of Biella",
                "isoCode": "BI",
                "countryCode": "IT"
            },
            {
                "name": "Province of Brescia",
                "isoCode": "BS",
                "countryCode": "IT"
            },
            {
                "name": "Province of Brindisi",
                "isoCode": "BR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Campobasso",
                "isoCode": "CB",
                "countryCode": "IT"
            },
            {
                "name": "Province of Carbonia-Iglesias",
                "isoCode": "CI",
                "countryCode": "IT"
            },
            {
                "name": "Province of Caserta",
                "isoCode": "CE",
                "countryCode": "IT"
            },
            {
                "name": "Province of Catanzaro",
                "isoCode": "CZ",
                "countryCode": "IT"
            },
            {
                "name": "Province of Chieti",
                "isoCode": "CH",
                "countryCode": "IT"
            },
            {
                "name": "Province of Como",
                "isoCode": "CO",
                "countryCode": "IT"
            },
            {
                "name": "Province of Cosenza",
                "isoCode": "CS",
                "countryCode": "IT"
            },
            {
                "name": "Province of Cremona",
                "isoCode": "CR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Crotone",
                "isoCode": "KR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Cuneo",
                "isoCode": "CN",
                "countryCode": "IT"
            },
            {
                "name": "Province of Fermo",
                "isoCode": "FM",
                "countryCode": "IT"
            },
            {
                "name": "Province of Ferrara",
                "isoCode": "FE",
                "countryCode": "IT"
            },
            {
                "name": "Province of Foggia",
                "isoCode": "FG",
                "countryCode": "IT"
            },
            {
                "name": "Province of Forlì-Cesena",
                "isoCode": "FC",
                "countryCode": "IT"
            },
            {
                "name": "Province of Frosinone",
                "isoCode": "FR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Gorizia",
                "isoCode": "GO",
                "countryCode": "IT"
            },
            {
                "name": "Province of Grosseto",
                "isoCode": "GR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Imperia",
                "isoCode": "IM",
                "countryCode": "IT"
            },
            {
                "name": "Province of Isernia",
                "isoCode": "IS",
                "countryCode": "IT"
            },
            {
                "name": "Province of L'Aquila",
                "isoCode": "AQ",
                "countryCode": "IT"
            },
            {
                "name": "Province of La Spezia",
                "isoCode": "SP",
                "countryCode": "IT"
            },
            {
                "name": "Province of Latina",
                "isoCode": "LT",
                "countryCode": "IT"
            },
            {
                "name": "Province of Lecce",
                "isoCode": "LE",
                "countryCode": "IT"
            },
            {
                "name": "Province of Lecco",
                "isoCode": "LC",
                "countryCode": "IT"
            },
            {
                "name": "Province of Livorno",
                "isoCode": "LI",
                "countryCode": "IT"
            },
            {
                "name": "Province of Lodi",
                "isoCode": "LO",
                "countryCode": "IT"
            },
            {
                "name": "Province of Lucca",
                "isoCode": "LU",
                "countryCode": "IT"
            },
            {
                "name": "Province of Macerata",
                "isoCode": "MC",
                "countryCode": "IT"
            },
            {
                "name": "Province of Mantua",
                "isoCode": "MN",
                "countryCode": "IT"
            },
            {
                "name": "Province of Massa and Carrara",
                "isoCode": "MS",
                "countryCode": "IT"
            },
            {
                "name": "Province of Matera",
                "isoCode": "MT",
                "countryCode": "IT"
            },
            {
                "name": "Province of Medio Campidano",
                "isoCode": "VS",
                "countryCode": "IT"
            },
            {
                "name": "Province of Modena",
                "isoCode": "MO",
                "countryCode": "IT"
            },
            {
                "name": "Province of Monza and Brianza",
                "isoCode": "MB",
                "countryCode": "IT"
            },
            {
                "name": "Province of Novara",
                "isoCode": "NO",
                "countryCode": "IT"
            },
            {
                "name": "Province of Nuoro",
                "isoCode": "NU",
                "countryCode": "IT"
            },
            {
                "name": "Province of Ogliastra",
                "isoCode": "OG",
                "countryCode": "IT"
            },
            {
                "name": "Province of Olbia-Tempio",
                "isoCode": "OT",
                "countryCode": "IT"
            },
            {
                "name": "Province of Oristano",
                "isoCode": "OR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Padua",
                "isoCode": "PD",
                "countryCode": "IT"
            },
            {
                "name": "Province of Parma",
                "isoCode": "PR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Pavia",
                "isoCode": "PV",
                "countryCode": "IT"
            },
            {
                "name": "Province of Perugia",
                "isoCode": "PG",
                "countryCode": "IT"
            },
            {
                "name": "Province of Pescara",
                "isoCode": "PE",
                "countryCode": "IT"
            },
            {
                "name": "Province of Piacenza",
                "isoCode": "PC",
                "countryCode": "IT"
            },
            {
                "name": "Province of Pisa",
                "isoCode": "PI",
                "countryCode": "IT"
            },
            {
                "name": "Province of Pistoia",
                "isoCode": "PT",
                "countryCode": "IT"
            },
            {
                "name": "Province of Pordenone",
                "isoCode": "PN",
                "countryCode": "IT"
            },
            {
                "name": "Province of Potenza",
                "isoCode": "PZ",
                "countryCode": "IT"
            },
            {
                "name": "Province of Prato",
                "isoCode": "PO",
                "countryCode": "IT"
            },
            {
                "name": "Province of Ravenna",
                "isoCode": "RA",
                "countryCode": "IT"
            },
            {
                "name": "Province of Reggio Emilia",
                "isoCode": "RE",
                "countryCode": "IT"
            },
            {
                "name": "Province of Rieti",
                "isoCode": "RI",
                "countryCode": "IT"
            },
            {
                "name": "Province of Rimini",
                "isoCode": "RN",
                "countryCode": "IT"
            },
            {
                "name": "Province of Rovigo",
                "isoCode": "RO",
                "countryCode": "IT"
            },
            {
                "name": "Province of Salerno",
                "isoCode": "SA",
                "countryCode": "IT"
            },
            {
                "name": "Province of Sassari",
                "isoCode": "SS",
                "countryCode": "IT"
            },
            {
                "name": "Province of Savona",
                "isoCode": "SV",
                "countryCode": "IT"
            },
            {
                "name": "Province of Siena",
                "isoCode": "SI",
                "countryCode": "IT"
            },
            {
                "name": "Province of Sondrio",
                "isoCode": "SO",
                "countryCode": "IT"
            },
            {
                "name": "Province of Taranto",
                "isoCode": "TA",
                "countryCode": "IT"
            },
            {
                "name": "Province of Teramo",
                "isoCode": "TE",
                "countryCode": "IT"
            },
            {
                "name": "Province of Terni",
                "isoCode": "TR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Treviso",
                "isoCode": "TV",
                "countryCode": "IT"
            },
            {
                "name": "Province of Trieste",
                "isoCode": "TS",
                "countryCode": "IT"
            },
            {
                "name": "Province of Udine",
                "isoCode": "UD",
                "countryCode": "IT"
            },
            {
                "name": "Province of Varese",
                "isoCode": "VA",
                "countryCode": "IT"
            },
            {
                "name": "Province of Verbano-Cusio-Ossola",
                "isoCode": "VB",
                "countryCode": "IT"
            },
            {
                "name": "Province of Vercelli",
                "isoCode": "VC",
                "countryCode": "IT"
            },
            {
                "name": "Province of Verona",
                "isoCode": "VR",
                "countryCode": "IT"
            },
            {
                "name": "Province of Vibo Valentia",
                "isoCode": "VV",
                "countryCode": "IT"
            },
            {
                "name": "Province of Vicenza",
                "isoCode": "VI",
                "countryCode": "IT"
            },
            {
                "name": "Province of Viterbo",
                "isoCode": "VT",
                "countryCode": "IT"
            },
            {
                "name": "Sardinia",
                "isoCode": "88",
                "countryCode": "IT"
            },
            {
                "name": "Sicily",
                "isoCode": "82",
                "countryCode": "IT"
            },
            {
                "name": "South Tyrol",
                "isoCode": "BZ",
                "countryCode": "IT"
            },
            {
                "name": "Trentino",
                "isoCode": "TN",
                "countryCode": "IT"
            },
            {
                "name": "Trentino-South Tyrol",
                "isoCode": "32",
                "countryCode": "IT"
            },
            {
                "name": "Tuscany",
                "isoCode": "52",
                "countryCode": "IT"
            },
            {
                "name": "Umbria",
                "isoCode": "55",
                "countryCode": "IT"
            },
            {
                "name": "Veneto",
                "isoCode": "34",
                "countryCode": "IT"
            },
            {
                "name": "Clarendon Parish",
                "isoCode": "13",
                "countryCode": "JM"
            },
            {
                "name": "Hanover Parish",
                "isoCode": "09",
                "countryCode": "JM"
            },
            {
                "name": "Kingston Parish",
                "isoCode": "01",
                "countryCode": "JM"
            },
            {
                "name": "Manchester Parish",
                "isoCode": "12",
                "countryCode": "JM"
            },
            {
                "name": "Portland Parish",
                "isoCode": "04",
                "countryCode": "JM"
            },
            {
                "name": "Saint Andrew",
                "isoCode": "02",
                "countryCode": "JM"
            },
            {
                "name": "Saint Ann Parish",
                "isoCode": "06",
                "countryCode": "JM"
            },
            {
                "name": "Saint Catherine Parish",
                "isoCode": "14",
                "countryCode": "JM"
            },
            {
                "name": "Saint Elizabeth Parish",
                "isoCode": "11",
                "countryCode": "JM"
            },
            {
                "name": "Saint James Parish",
                "isoCode": "08",
                "countryCode": "JM"
            },
            {
                "name": "Saint Mary Parish",
                "isoCode": "05",
                "countryCode": "JM"
            },
            {
                "name": "Saint Thomas Parish",
                "isoCode": "03",
                "countryCode": "JM"
            },
            {
                "name": "Trelawny Parish",
                "isoCode": "07",
                "countryCode": "JM"
            },
            {
                "name": "Westmoreland Parish",
                "isoCode": "10",
                "countryCode": "JM"
            },
            {
                "name": "Aichi Prefecture",
                "isoCode": "23",
                "countryCode": "JP"
            },
            {
                "name": "Akita Prefecture",
                "isoCode": "05",
                "countryCode": "JP"
            },
            {
                "name": "Aomori Prefecture",
                "isoCode": "02",
                "countryCode": "JP"
            },
            {
                "name": "Chiba Prefecture",
                "isoCode": "12",
                "countryCode": "JP"
            },
            {
                "name": "Ehime Prefecture",
                "isoCode": "38",
                "countryCode": "JP"
            },
            {
                "name": "Fukui Prefecture",
                "isoCode": "18",
                "countryCode": "JP"
            },
            {
                "name": "Fukuoka Prefecture",
                "isoCode": "40",
                "countryCode": "JP"
            },
            {
                "name": "Fukushima Prefecture",
                "isoCode": "07",
                "countryCode": "JP"
            },
            {
                "name": "Gifu Prefecture",
                "isoCode": "21",
                "countryCode": "JP"
            },
            {
                "name": "Gunma Prefecture",
                "isoCode": "10",
                "countryCode": "JP"
            },
            {
                "name": "Hiroshima Prefecture",
                "isoCode": "34",
                "countryCode": "JP"
            },
            {
                "name": "Hokkaidō Prefecture",
                "isoCode": "01",
                "countryCode": "JP"
            },
            {
                "name": "Hyōgo Prefecture",
                "isoCode": "28",
                "countryCode": "JP"
            },
            {
                "name": "Ibaraki Prefecture",
                "isoCode": "08",
                "countryCode": "JP"
            },
            {
                "name": "Ishikawa Prefecture",
                "isoCode": "17",
                "countryCode": "JP"
            },
            {
                "name": "Iwate Prefecture",
                "isoCode": "03",
                "countryCode": "JP"
            },
            {
                "name": "Kagawa Prefecture",
                "isoCode": "37",
                "countryCode": "JP"
            },
            {
                "name": "Kagoshima Prefecture",
                "isoCode": "46",
                "countryCode": "JP"
            },
            {
                "name": "Kanagawa Prefecture",
                "isoCode": "14",
                "countryCode": "JP"
            },
            {
                "name": "Kumamoto Prefecture",
                "isoCode": "43",
                "countryCode": "JP"
            },
            {
                "name": "Kyōto Prefecture",
                "isoCode": "26",
                "countryCode": "JP"
            },
            {
                "name": "Kōchi Prefecture",
                "isoCode": "39",
                "countryCode": "JP"
            },
            {
                "name": "Mie Prefecture",
                "isoCode": "24",
                "countryCode": "JP"
            },
            {
                "name": "Miyagi Prefecture",
                "isoCode": "04",
                "countryCode": "JP"
            },
            {
                "name": "Miyazaki Prefecture",
                "isoCode": "45",
                "countryCode": "JP"
            },
            {
                "name": "Nagano Prefecture",
                "isoCode": "20",
                "countryCode": "JP"
            },
            {
                "name": "Nagasaki Prefecture",
                "isoCode": "42",
                "countryCode": "JP"
            },
            {
                "name": "Nara Prefecture",
                "isoCode": "29",
                "countryCode": "JP"
            },
            {
                "name": "Niigata Prefecture",
                "isoCode": "15",
                "countryCode": "JP"
            },
            {
                "name": "Okayama Prefecture",
                "isoCode": "33",
                "countryCode": "JP"
            },
            {
                "name": "Okinawa Prefecture",
                "isoCode": "47",
                "countryCode": "JP"
            },
            {
                "name": "Saga Prefecture",
                "isoCode": "41",
                "countryCode": "JP"
            },
            {
                "name": "Saitama Prefecture",
                "isoCode": "11",
                "countryCode": "JP"
            },
            {
                "name": "Shiga Prefecture",
                "isoCode": "25",
                "countryCode": "JP"
            },
            {
                "name": "Shimane Prefecture",
                "isoCode": "32",
                "countryCode": "JP"
            },
            {
                "name": "Shizuoka Prefecture",
                "isoCode": "22",
                "countryCode": "JP"
            },
            {
                "name": "Tochigi Prefecture",
                "isoCode": "09",
                "countryCode": "JP"
            },
            {
                "name": "Tokushima Prefecture",
                "isoCode": "36",
                "countryCode": "JP"
            },
            {
                "name": "Tokyo",
                "isoCode": "13",
                "countryCode": "JP"
            },
            {
                "name": "Tottori Prefecture",
                "isoCode": "31",
                "countryCode": "JP"
            },
            {
                "name": "Toyama Prefecture",
                "isoCode": "16",
                "countryCode": "JP"
            },
            {
                "name": "Wakayama Prefecture",
                "isoCode": "30",
                "countryCode": "JP"
            },
            {
                "name": "Yamagata Prefecture",
                "isoCode": "06",
                "countryCode": "JP"
            },
            {
                "name": "Yamaguchi Prefecture",
                "isoCode": "35",
                "countryCode": "JP"
            },
            {
                "name": "Yamanashi Prefecture",
                "isoCode": "19",
                "countryCode": "JP"
            },
            {
                "name": "Ōita Prefecture",
                "isoCode": "44",
                "countryCode": "JP"
            },
            {
                "name": "Ōsaka Prefecture",
                "isoCode": "27",
                "countryCode": "JP"
            },
            {
                "name": "Ajloun Governorate",
                "isoCode": "AJ",
                "countryCode": "JO"
            },
            {
                "name": "Amman Governorate",
                "isoCode": "AM",
                "countryCode": "JO"
            },
            {
                "name": "Aqaba Governorate",
                "isoCode": "AQ",
                "countryCode": "JO"
            },
            {
                "name": "Balqa Governorate",
                "isoCode": "BA",
                "countryCode": "JO"
            },
            {
                "name": "Irbid Governorate",
                "isoCode": "IR",
                "countryCode": "JO"
            },
            {
                "name": "Jerash Governorate",
                "isoCode": "JA",
                "countryCode": "JO"
            },
            {
                "name": "Karak Governorate",
                "isoCode": "KA",
                "countryCode": "JO"
            },
            {
                "name": "Ma'an Governorate",
                "isoCode": "MN",
                "countryCode": "JO"
            },
            {
                "name": "Madaba Governorate",
                "isoCode": "MD",
                "countryCode": "JO"
            },
            {
                "name": "Mafraq Governorate",
                "isoCode": "MA",
                "countryCode": "JO"
            },
            {
                "name": "Tafilah Governorate",
                "isoCode": "AT",
                "countryCode": "JO"
            },
            {
                "name": "Zarqa Governorate",
                "isoCode": "AZ",
                "countryCode": "JO"
            },
            {
                "name": "Akmola Region",
                "isoCode": "AKM",
                "countryCode": "KZ"
            },
            {
                "name": "Aktobe Region",
                "isoCode": "AKT",
                "countryCode": "KZ"
            },
            {
                "name": "Almaty",
                "isoCode": "ALA",
                "countryCode": "KZ"
            },
            {
                "name": "Almaty Region",
                "isoCode": "ALM",
                "countryCode": "KZ"
            },
            {
                "name": "Atyrau Region",
                "isoCode": "ATY",
                "countryCode": "KZ"
            },
            {
                "name": "Baikonur",
                "isoCode": "BAY",
                "countryCode": "KZ"
            },
            {
                "name": "East Kazakhstan Region",
                "isoCode": "VOS",
                "countryCode": "KZ"
            },
            {
                "name": "Jambyl Region",
                "isoCode": "ZHA",
                "countryCode": "KZ"
            },
            {
                "name": "Karaganda Region",
                "isoCode": "KAR",
                "countryCode": "KZ"
            },
            {
                "name": "Kostanay Region",
                "isoCode": "KUS",
                "countryCode": "KZ"
            },
            {
                "name": "Kyzylorda Region",
                "isoCode": "KZY",
                "countryCode": "KZ"
            },
            {
                "name": "Mangystau Region",
                "isoCode": "MAN",
                "countryCode": "KZ"
            },
            {
                "name": "North Kazakhstan Region",
                "isoCode": "SEV",
                "countryCode": "KZ"
            },
            {
                "name": "Nur-Sultan",
                "isoCode": "AST",
                "countryCode": "KZ"
            },
            {
                "name": "Pavlodar Region",
                "isoCode": "PAV",
                "countryCode": "KZ"
            },
            {
                "name": "Turkestan Region",
                "isoCode": "YUZ",
                "countryCode": "KZ"
            },
            {
                "name": "West Kazakhstan Province",
                "isoCode": "ZAP",
                "countryCode": "KZ"
            },
            {
                "name": "Baringo",
                "isoCode": "01",
                "countryCode": "KE"
            },
            {
                "name": "Bomet",
                "isoCode": "02",
                "countryCode": "KE"
            },
            {
                "name": "Bungoma",
                "isoCode": "03",
                "countryCode": "KE"
            },
            {
                "name": "Busia",
                "isoCode": "04",
                "countryCode": "KE"
            },
            {
                "name": "Elgeyo-Marakwet",
                "isoCode": "05",
                "countryCode": "KE"
            },
            {
                "name": "Embu",
                "isoCode": "06",
                "countryCode": "KE"
            },
            {
                "name": "Garissa",
                "isoCode": "07",
                "countryCode": "KE"
            },
            {
                "name": "Homa Bay",
                "isoCode": "08",
                "countryCode": "KE"
            },
            {
                "name": "Isiolo",
                "isoCode": "09",
                "countryCode": "KE"
            },
            {
                "name": "Kajiado",
                "isoCode": "10",
                "countryCode": "KE"
            },
            {
                "name": "Kakamega",
                "isoCode": "11",
                "countryCode": "KE"
            },
            {
                "name": "Kericho",
                "isoCode": "12",
                "countryCode": "KE"
            },
            {
                "name": "Kiambu",
                "isoCode": "13",
                "countryCode": "KE"
            },
            {
                "name": "Kilifi",
                "isoCode": "14",
                "countryCode": "KE"
            },
            {
                "name": "Kirinyaga",
                "isoCode": "15",
                "countryCode": "KE"
            },
            {
                "name": "Kisii",
                "isoCode": "16",
                "countryCode": "KE"
            },
            {
                "name": "Kisumu",
                "isoCode": "17",
                "countryCode": "KE"
            },
            {
                "name": "Kitui",
                "isoCode": "18",
                "countryCode": "KE"
            },
            {
                "name": "Kwale",
                "isoCode": "19",
                "countryCode": "KE"
            },
            {
                "name": "Laikipia",
                "isoCode": "20",
                "countryCode": "KE"
            },
            {
                "name": "Lamu",
                "isoCode": "21",
                "countryCode": "KE"
            },
            {
                "name": "Machakos",
                "isoCode": "22",
                "countryCode": "KE"
            },
            {
                "name": "Makueni",
                "isoCode": "23",
                "countryCode": "KE"
            },
            {
                "name": "Mandera",
                "isoCode": "24",
                "countryCode": "KE"
            },
            {
                "name": "Marsabit",
                "isoCode": "25",
                "countryCode": "KE"
            },
            {
                "name": "Meru",
                "isoCode": "26",
                "countryCode": "KE"
            },
            {
                "name": "Migori",
                "isoCode": "27",
                "countryCode": "KE"
            },
            {
                "name": "Mombasa",
                "isoCode": "28",
                "countryCode": "KE"
            },
            {
                "name": "Murang'a",
                "isoCode": "29",
                "countryCode": "KE"
            },
            {
                "name": "Nairobi City",
                "isoCode": "30",
                "countryCode": "KE"
            },
            {
                "name": "Nakuru",
                "isoCode": "31",
                "countryCode": "KE"
            },
            {
                "name": "Nandi",
                "isoCode": "32",
                "countryCode": "KE"
            },
            {
                "name": "Narok",
                "isoCode": "33",
                "countryCode": "KE"
            },
            {
                "name": "Nyamira",
                "isoCode": "34",
                "countryCode": "KE"
            },
            {
                "name": "Nyandarua",
                "isoCode": "35",
                "countryCode": "KE"
            },
            {
                "name": "Nyeri",
                "isoCode": "36",
                "countryCode": "KE"
            },
            {
                "name": "Samburu",
                "isoCode": "37",
                "countryCode": "KE"
            },
            {
                "name": "Siaya",
                "isoCode": "38",
                "countryCode": "KE"
            },
            {
                "name": "Taita–Taveta",
                "isoCode": "39",
                "countryCode": "KE"
            },
            {
                "name": "Tana River",
                "isoCode": "40",
                "countryCode": "KE"
            },
            {
                "name": "Tharaka-Nithi",
                "isoCode": "41",
                "countryCode": "KE"
            },
            {
                "name": "Trans Nzoia",
                "isoCode": "42",
                "countryCode": "KE"
            },
            {
                "name": "Turkana",
                "isoCode": "43",
                "countryCode": "KE"
            },
            {
                "name": "Uasin Gishu",
                "isoCode": "44",
                "countryCode": "KE"
            },
            {
                "name": "Vihiga",
                "isoCode": "45",
                "countryCode": "KE"
            },
            {
                "name": "Wajir",
                "isoCode": "46",
                "countryCode": "KE"
            },
            {
                "name": "West Pokot",
                "isoCode": "47",
                "countryCode": "KE"
            },
            {
                "name": "Gilbert Islands",
                "isoCode": "G",
                "countryCode": "KI"
            },
            {
                "name": "Line Islands",
                "isoCode": "L",
                "countryCode": "KI"
            },
            {
                "name": "Phoenix Islands",
                "isoCode": "P",
                "countryCode": "KI"
            },
            {
                "name": "Chagang Province",
                "isoCode": "04",
                "countryCode": "KP"
            },
            {
                "name": "Kangwon Province",
                "isoCode": "07",
                "countryCode": "KP"
            },
            {
                "name": "North Hamgyong Province",
                "isoCode": "09",
                "countryCode": "KP"
            },
            {
                "name": "North Hwanghae Province",
                "isoCode": "06",
                "countryCode": "KP"
            },
            {
                "name": "North Pyongan Province",
                "isoCode": "03",
                "countryCode": "KP"
            },
            {
                "name": "Pyongyang",
                "isoCode": "01",
                "countryCode": "KP"
            },
            {
                "name": "Rason",
                "isoCode": "13",
                "countryCode": "KP"
            },
            {
                "name": "Ryanggang Province",
                "isoCode": "10",
                "countryCode": "KP"
            },
            {
                "name": "South Hamgyong Province",
                "isoCode": "08",
                "countryCode": "KP"
            },
            {
                "name": "South Hwanghae Province",
                "isoCode": "05",
                "countryCode": "KP"
            },
            {
                "name": "South Pyongan Province",
                "isoCode": "02",
                "countryCode": "KP"
            },
            {
                "name": "Busan",
                "isoCode": "26",
                "countryCode": "KR"
            },
            {
                "name": "Daegu",
                "isoCode": "27",
                "countryCode": "KR"
            },
            {
                "name": "Daejeon",
                "isoCode": "30",
                "countryCode": "KR"
            },
            {
                "name": "Gangwon Province",
                "isoCode": "42",
                "countryCode": "KR"
            },
            {
                "name": "Gwangju",
                "isoCode": "29",
                "countryCode": "KR"
            },
            {
                "name": "Gyeonggi Province",
                "isoCode": "41",
                "countryCode": "KR"
            },
            {
                "name": "Incheon",
                "isoCode": "28",
                "countryCode": "KR"
            },
            {
                "name": "Jeju",
                "isoCode": "49",
                "countryCode": "KR"
            },
            {
                "name": "North Chungcheong Province",
                "isoCode": "43",
                "countryCode": "KR"
            },
            {
                "name": "North Gyeongsang Province",
                "isoCode": "47",
                "countryCode": "KR"
            },
            {
                "name": "North Jeolla Province",
                "isoCode": "45",
                "countryCode": "KR"
            },
            {
                "name": "Sejong City",
                "isoCode": "50",
                "countryCode": "KR"
            },
            {
                "name": "Seoul",
                "isoCode": "11",
                "countryCode": "KR"
            },
            {
                "name": "South Chungcheong Province",
                "isoCode": "44",
                "countryCode": "KR"
            },
            {
                "name": "South Gyeongsang Province",
                "isoCode": "48",
                "countryCode": "KR"
            },
            {
                "name": "South Jeolla Province",
                "isoCode": "46",
                "countryCode": "KR"
            },
            {
                "name": "Ulsan",
                "isoCode": "31",
                "countryCode": "KR"
            },
            {
                "name": "Al Ahmadi Governorate",
                "isoCode": "AH",
                "countryCode": "KW"
            },
            {
                "name": "Al Farwaniyah Governorate",
                "isoCode": "FA",
                "countryCode": "KW"
            },
            {
                "name": "Al Jahra Governorate",
                "isoCode": "JA",
                "countryCode": "KW"
            },
            {
                "name": "Capital Governorate",
                "isoCode": "KU",
                "countryCode": "KW"
            },
            {
                "name": "Hawalli Governorate",
                "isoCode": "HA",
                "countryCode": "KW"
            },
            {
                "name": "Mubarak Al-Kabeer Governorate",
                "isoCode": "MU",
                "countryCode": "KW"
            },
            {
                "name": "Batken Region",
                "isoCode": "B",
                "countryCode": "KG"
            },
            {
                "name": "Bishkek",
                "isoCode": "GB",
                "countryCode": "KG"
            },
            {
                "name": "Chuy Region",
                "isoCode": "C",
                "countryCode": "KG"
            },
            {
                "name": "Issyk-Kul Region",
                "isoCode": "Y",
                "countryCode": "KG"
            },
            {
                "name": "Jalal-Abad Region",
                "isoCode": "J",
                "countryCode": "KG"
            },
            {
                "name": "Naryn Region",
                "isoCode": "N",
                "countryCode": "KG"
            },
            {
                "name": "Osh",
                "isoCode": "GO",
                "countryCode": "KG"
            },
            {
                "name": "Osh Region",
                "isoCode": "O",
                "countryCode": "KG"
            },
            {
                "name": "Talas Region",
                "isoCode": "T",
                "countryCode": "KG"
            },
            {
                "name": "Attapeu Province",
                "isoCode": "AT",
                "countryCode": "LA"
            },
            {
                "name": "Bokeo Province",
                "isoCode": "BK",
                "countryCode": "LA"
            },
            {
                "name": "Bolikhamsai Province",
                "isoCode": "BL",
                "countryCode": "LA"
            },
            {
                "name": "Champasak Province",
                "isoCode": "CH",
                "countryCode": "LA"
            },
            {
                "name": "Houaphanh Province",
                "isoCode": "HO",
                "countryCode": "LA"
            },
            {
                "name": "Khammouane Province",
                "isoCode": "KH",
                "countryCode": "LA"
            },
            {
                "name": "Luang Namtha Province",
                "isoCode": "LM",
                "countryCode": "LA"
            },
            {
                "name": "Luang Prabang Province",
                "isoCode": "LP",
                "countryCode": "LA"
            },
            {
                "name": "Oudomxay Province",
                "isoCode": "OU",
                "countryCode": "LA"
            },
            {
                "name": "Phongsaly Province",
                "isoCode": "PH",
                "countryCode": "LA"
            },
            {
                "name": "Sainyabuli Province",
                "isoCode": "XA",
                "countryCode": "LA"
            },
            {
                "name": "Salavan Province",
                "isoCode": "SL",
                "countryCode": "LA"
            },
            {
                "name": "Savannakhet Province",
                "isoCode": "SV",
                "countryCode": "LA"
            },
            {
                "name": "Sekong Province",
                "isoCode": "XE",
                "countryCode": "LA"
            },
            {
                "name": "Vientiane Prefecture",
                "isoCode": "VT",
                "countryCode": "LA"
            },
            {
                "name": "Vientiane Province",
                "isoCode": "VI",
                "countryCode": "LA"
            },
            {
                "name": "Xaisomboun",
                "isoCode": "XN",
                "countryCode": "LA"
            },
            {
                "name": "Xaisomboun Province",
                "isoCode": "XS",
                "countryCode": "LA"
            },
            {
                "name": "Xiangkhouang Province",
                "isoCode": "XI",
                "countryCode": "LA"
            },
            {
                "name": "Aglona Municipality",
                "isoCode": "001",
                "countryCode": "LV"
            },
            {
                "name": "Aizkraukle Municipality",
                "isoCode": "002",
                "countryCode": "LV"
            },
            {
                "name": "Aizpute Municipality",
                "isoCode": "003",
                "countryCode": "LV"
            },
            {
                "name": "Aknīste Municipality",
                "isoCode": "004",
                "countryCode": "LV"
            },
            {
                "name": "Aloja Municipality",
                "isoCode": "005",
                "countryCode": "LV"
            },
            {
                "name": "Alsunga Municipality",
                "isoCode": "006",
                "countryCode": "LV"
            },
            {
                "name": "Alūksne Municipality",
                "isoCode": "007",
                "countryCode": "LV"
            },
            {
                "name": "Amata Municipality",
                "isoCode": "008",
                "countryCode": "LV"
            },
            {
                "name": "Ape Municipality",
                "isoCode": "009",
                "countryCode": "LV"
            },
            {
                "name": "Auce Municipality",
                "isoCode": "010",
                "countryCode": "LV"
            },
            {
                "name": "Babīte Municipality",
                "isoCode": "012",
                "countryCode": "LV"
            },
            {
                "name": "Baldone Municipality",
                "isoCode": "013",
                "countryCode": "LV"
            },
            {
                "name": "Baltinava Municipality",
                "isoCode": "014",
                "countryCode": "LV"
            },
            {
                "name": "Balvi Municipality",
                "isoCode": "015",
                "countryCode": "LV"
            },
            {
                "name": "Bauska Municipality",
                "isoCode": "016",
                "countryCode": "LV"
            },
            {
                "name": "Beverīna Municipality",
                "isoCode": "017",
                "countryCode": "LV"
            },
            {
                "name": "Brocēni Municipality",
                "isoCode": "018",
                "countryCode": "LV"
            },
            {
                "name": "Burtnieki Municipality",
                "isoCode": "019",
                "countryCode": "LV"
            },
            {
                "name": "Carnikava Municipality",
                "isoCode": "020",
                "countryCode": "LV"
            },
            {
                "name": "Cesvaine Municipality",
                "isoCode": "021",
                "countryCode": "LV"
            },
            {
                "name": "Cibla Municipality",
                "isoCode": "023",
                "countryCode": "LV"
            },
            {
                "name": "Cēsis Municipality",
                "isoCode": "022",
                "countryCode": "LV"
            },
            {
                "name": "Dagda Municipality",
                "isoCode": "024",
                "countryCode": "LV"
            },
            {
                "name": "Daugavpils",
                "isoCode": "DGV",
                "countryCode": "LV"
            },
            {
                "name": "Daugavpils Municipality",
                "isoCode": "025",
                "countryCode": "LV"
            },
            {
                "name": "Dobele Municipality",
                "isoCode": "026",
                "countryCode": "LV"
            },
            {
                "name": "Dundaga Municipality",
                "isoCode": "027",
                "countryCode": "LV"
            },
            {
                "name": "Durbe Municipality",
                "isoCode": "028",
                "countryCode": "LV"
            },
            {
                "name": "Engure Municipality",
                "isoCode": "029",
                "countryCode": "LV"
            },
            {
                "name": "Garkalne Municipality",
                "isoCode": "031",
                "countryCode": "LV"
            },
            {
                "name": "Grobiņa Municipality",
                "isoCode": "032",
                "countryCode": "LV"
            },
            {
                "name": "Gulbene Municipality",
                "isoCode": "033",
                "countryCode": "LV"
            },
            {
                "name": "Iecava Municipality",
                "isoCode": "034",
                "countryCode": "LV"
            },
            {
                "name": "Ikšķile Municipality",
                "isoCode": "035",
                "countryCode": "LV"
            },
            {
                "name": "Ilūkste Municipality",
                "isoCode": "036",
                "countryCode": "LV"
            },
            {
                "name": "Inčukalns Municipality",
                "isoCode": "037",
                "countryCode": "LV"
            },
            {
                "name": "Jaunjelgava Municipality",
                "isoCode": "038",
                "countryCode": "LV"
            },
            {
                "name": "Jaunpiebalga Municipality",
                "isoCode": "039",
                "countryCode": "LV"
            },
            {
                "name": "Jaunpils Municipality",
                "isoCode": "040",
                "countryCode": "LV"
            },
            {
                "name": "Jelgava",
                "isoCode": "JEL",
                "countryCode": "LV"
            },
            {
                "name": "Jelgava Municipality",
                "isoCode": "041",
                "countryCode": "LV"
            },
            {
                "name": "Jēkabpils",
                "isoCode": "JKB",
                "countryCode": "LV"
            },
            {
                "name": "Jēkabpils Municipality",
                "isoCode": "042",
                "countryCode": "LV"
            },
            {
                "name": "Jūrmala",
                "isoCode": "JUR",
                "countryCode": "LV"
            },
            {
                "name": "Kandava Municipality",
                "isoCode": "043",
                "countryCode": "LV"
            },
            {
                "name": "Kocēni Municipality",
                "isoCode": "045",
                "countryCode": "LV"
            },
            {
                "name": "Koknese Municipality",
                "isoCode": "046",
                "countryCode": "LV"
            },
            {
                "name": "Krimulda Municipality",
                "isoCode": "048",
                "countryCode": "LV"
            },
            {
                "name": "Krustpils Municipality",
                "isoCode": "049",
                "countryCode": "LV"
            },
            {
                "name": "Krāslava Municipality",
                "isoCode": "047",
                "countryCode": "LV"
            },
            {
                "name": "Kuldīga Municipality",
                "isoCode": "050",
                "countryCode": "LV"
            },
            {
                "name": "Kārsava Municipality",
                "isoCode": "044",
                "countryCode": "LV"
            },
            {
                "name": "Lielvārde Municipality",
                "isoCode": "053",
                "countryCode": "LV"
            },
            {
                "name": "Liepāja",
                "isoCode": "LPX",
                "countryCode": "LV"
            },
            {
                "name": "Limbaži Municipality",
                "isoCode": "054",
                "countryCode": "LV"
            },
            {
                "name": "Lubāna Municipality",
                "isoCode": "057",
                "countryCode": "LV"
            },
            {
                "name": "Ludza Municipality",
                "isoCode": "058",
                "countryCode": "LV"
            },
            {
                "name": "Līgatne Municipality",
                "isoCode": "055",
                "countryCode": "LV"
            },
            {
                "name": "Līvāni Municipality",
                "isoCode": "056",
                "countryCode": "LV"
            },
            {
                "name": "Madona Municipality",
                "isoCode": "059",
                "countryCode": "LV"
            },
            {
                "name": "Mazsalaca Municipality",
                "isoCode": "060",
                "countryCode": "LV"
            },
            {
                "name": "Mālpils Municipality",
                "isoCode": "061",
                "countryCode": "LV"
            },
            {
                "name": "Mārupe Municipality",
                "isoCode": "062",
                "countryCode": "LV"
            },
            {
                "name": "Mērsrags Municipality",
                "isoCode": "063",
                "countryCode": "LV"
            },
            {
                "name": "Naukšēni Municipality",
                "isoCode": "064",
                "countryCode": "LV"
            },
            {
                "name": "Nereta Municipality",
                "isoCode": "065",
                "countryCode": "LV"
            },
            {
                "name": "Nīca Municipality",
                "isoCode": "066",
                "countryCode": "LV"
            },
            {
                "name": "Ogre Municipality",
                "isoCode": "067",
                "countryCode": "LV"
            },
            {
                "name": "Olaine Municipality",
                "isoCode": "068",
                "countryCode": "LV"
            },
            {
                "name": "Ozolnieki Municipality",
                "isoCode": "069",
                "countryCode": "LV"
            },
            {
                "name": "Preiļi Municipality",
                "isoCode": "073",
                "countryCode": "LV"
            },
            {
                "name": "Priekule Municipality",
                "isoCode": "074",
                "countryCode": "LV"
            },
            {
                "name": "Priekuļi Municipality",
                "isoCode": "075",
                "countryCode": "LV"
            },
            {
                "name": "Pārgauja Municipality",
                "isoCode": "070",
                "countryCode": "LV"
            },
            {
                "name": "Pāvilosta Municipality",
                "isoCode": "071",
                "countryCode": "LV"
            },
            {
                "name": "Pļaviņas Municipality",
                "isoCode": "072",
                "countryCode": "LV"
            },
            {
                "name": "Rauna Municipality",
                "isoCode": "076",
                "countryCode": "LV"
            },
            {
                "name": "Riebiņi Municipality",
                "isoCode": "078",
                "countryCode": "LV"
            },
            {
                "name": "Riga",
                "isoCode": "RIX",
                "countryCode": "LV"
            },
            {
                "name": "Roja Municipality",
                "isoCode": "079",
                "countryCode": "LV"
            },
            {
                "name": "Ropaži Municipality",
                "isoCode": "080",
                "countryCode": "LV"
            },
            {
                "name": "Rucava Municipality",
                "isoCode": "081",
                "countryCode": "LV"
            },
            {
                "name": "Rugāji Municipality",
                "isoCode": "082",
                "countryCode": "LV"
            },
            {
                "name": "Rundāle Municipality",
                "isoCode": "083",
                "countryCode": "LV"
            },
            {
                "name": "Rēzekne",
                "isoCode": "REZ",
                "countryCode": "LV"
            },
            {
                "name": "Rēzekne Municipality",
                "isoCode": "077",
                "countryCode": "LV"
            },
            {
                "name": "Rūjiena Municipality",
                "isoCode": "084",
                "countryCode": "LV"
            },
            {
                "name": "Sala Municipality",
                "isoCode": "085",
                "countryCode": "LV"
            },
            {
                "name": "Salacgrīva Municipality",
                "isoCode": "086",
                "countryCode": "LV"
            },
            {
                "name": "Salaspils Municipality",
                "isoCode": "087",
                "countryCode": "LV"
            },
            {
                "name": "Saldus Municipality",
                "isoCode": "088",
                "countryCode": "LV"
            },
            {
                "name": "Saulkrasti Municipality",
                "isoCode": "089",
                "countryCode": "LV"
            },
            {
                "name": "Sigulda Municipality",
                "isoCode": "091",
                "countryCode": "LV"
            },
            {
                "name": "Skrunda Municipality",
                "isoCode": "093",
                "countryCode": "LV"
            },
            {
                "name": "Skrīveri Municipality",
                "isoCode": "092",
                "countryCode": "LV"
            },
            {
                "name": "Smiltene Municipality",
                "isoCode": "094",
                "countryCode": "LV"
            },
            {
                "name": "Stopiņi Municipality",
                "isoCode": "095",
                "countryCode": "LV"
            },
            {
                "name": "Strenči Municipality",
                "isoCode": "096",
                "countryCode": "LV"
            },
            {
                "name": "Sēja Municipality",
                "isoCode": "090",
                "countryCode": "LV"
            },
            {
                "name": "Talsi Municipality",
                "isoCode": "097",
                "countryCode": "LV"
            },
            {
                "name": "Tukums Municipality",
                "isoCode": "099",
                "countryCode": "LV"
            },
            {
                "name": "Tērvete Municipality",
                "isoCode": "098",
                "countryCode": "LV"
            },
            {
                "name": "Vaiņode Municipality",
                "isoCode": "100",
                "countryCode": "LV"
            },
            {
                "name": "Valka Municipality",
                "isoCode": "101",
                "countryCode": "LV"
            },
            {
                "name": "Valmiera",
                "isoCode": "VMR",
                "countryCode": "LV"
            },
            {
                "name": "Varakļāni Municipality",
                "isoCode": "102",
                "countryCode": "LV"
            },
            {
                "name": "Vecpiebalga Municipality",
                "isoCode": "104",
                "countryCode": "LV"
            },
            {
                "name": "Vecumnieki Municipality",
                "isoCode": "105",
                "countryCode": "LV"
            },
            {
                "name": "Ventspils",
                "isoCode": "VEN",
                "countryCode": "LV"
            },
            {
                "name": "Ventspils Municipality",
                "isoCode": "106",
                "countryCode": "LV"
            },
            {
                "name": "Viesīte Municipality",
                "isoCode": "107",
                "countryCode": "LV"
            },
            {
                "name": "Viļaka Municipality",
                "isoCode": "108",
                "countryCode": "LV"
            },
            {
                "name": "Viļāni Municipality",
                "isoCode": "109",
                "countryCode": "LV"
            },
            {
                "name": "Vārkava Municipality",
                "isoCode": "103",
                "countryCode": "LV"
            },
            {
                "name": "Zilupe Municipality",
                "isoCode": "110",
                "countryCode": "LV"
            },
            {
                "name": "Ērgļi Municipality",
                "isoCode": "030",
                "countryCode": "LV"
            },
            {
                "name": "Ķegums Municipality",
                "isoCode": "051",
                "countryCode": "LV"
            },
            {
                "name": "Ķekava Municipality",
                "isoCode": "052",
                "countryCode": "LV"
            },
            {
                "name": "Akkar Governorate",
                "isoCode": "AK",
                "countryCode": "LB"
            },
            {
                "name": "Baalbek-Hermel Governorate",
                "isoCode": "BH",
                "countryCode": "LB"
            },
            {
                "name": "Beirut Governorate",
                "isoCode": "BA",
                "countryCode": "LB"
            },
            {
                "name": "Beqaa Governorate",
                "isoCode": "BI",
                "countryCode": "LB"
            },
            {
                "name": "Mount Lebanon Governorate",
                "isoCode": "JL",
                "countryCode": "LB"
            },
            {
                "name": "Nabatieh Governorate",
                "isoCode": "NA",
                "countryCode": "LB"
            },
            {
                "name": "North Governorate",
                "isoCode": "AS",
                "countryCode": "LB"
            },
            {
                "name": "South Governorate",
                "isoCode": "JA",
                "countryCode": "LB"
            },
            {
                "name": "Berea District",
                "isoCode": "D",
                "countryCode": "LS"
            },
            {
                "name": "Butha-Buthe District",
                "isoCode": "B",
                "countryCode": "LS"
            },
            {
                "name": "Leribe District",
                "isoCode": "C",
                "countryCode": "LS"
            },
            {
                "name": "Mafeteng District",
                "isoCode": "E",
                "countryCode": "LS"
            },
            {
                "name": "Maseru District",
                "isoCode": "A",
                "countryCode": "LS"
            },
            {
                "name": "Mohale's Hoek District",
                "isoCode": "F",
                "countryCode": "LS"
            },
            {
                "name": "Mokhotlong District",
                "isoCode": "J",
                "countryCode": "LS"
            },
            {
                "name": "Qacha's Nek District",
                "isoCode": "H",
                "countryCode": "LS"
            },
            {
                "name": "Quthing District",
                "isoCode": "G",
                "countryCode": "LS"
            },
            {
                "name": "Thaba-Tseka District",
                "isoCode": "K",
                "countryCode": "LS"
            },
            {
                "name": "Bomi County",
                "isoCode": "BM",
                "countryCode": "LR"
            },
            {
                "name": "Bong County",
                "isoCode": "BG",
                "countryCode": "LR"
            },
            {
                "name": "Gbarpolu County",
                "isoCode": "GP",
                "countryCode": "LR"
            },
            {
                "name": "Grand Bassa County",
                "isoCode": "GB",
                "countryCode": "LR"
            },
            {
                "name": "Grand Cape Mount County",
                "isoCode": "CM",
                "countryCode": "LR"
            },
            {
                "name": "Grand Gedeh County",
                "isoCode": "GG",
                "countryCode": "LR"
            },
            {
                "name": "Grand Kru County",
                "isoCode": "GK",
                "countryCode": "LR"
            },
            {
                "name": "Lofa County",
                "isoCode": "LO",
                "countryCode": "LR"
            },
            {
                "name": "Margibi County",
                "isoCode": "MG",
                "countryCode": "LR"
            },
            {
                "name": "Maryland County",
                "isoCode": "MY",
                "countryCode": "LR"
            },
            {
                "name": "Montserrado County",
                "isoCode": "MO",
                "countryCode": "LR"
            },
            {
                "name": "Nimba",
                "isoCode": "NI",
                "countryCode": "LR"
            },
            {
                "name": "River Cess County",
                "isoCode": "RI",
                "countryCode": "LR"
            },
            {
                "name": "River Gee County",
                "isoCode": "RG",
                "countryCode": "LR"
            },
            {
                "name": "Sinoe County",
                "isoCode": "SI",
                "countryCode": "LR"
            },
            {
                "name": "Al Wahat District",
                "isoCode": "WA",
                "countryCode": "LY"
            },
            {
                "name": "Benghazi",
                "isoCode": "BA",
                "countryCode": "LY"
            },
            {
                "name": "Derna District",
                "isoCode": "DR",
                "countryCode": "LY"
            },
            {
                "name": "Ghat District",
                "isoCode": "GT",
                "countryCode": "LY"
            },
            {
                "name": "Jabal al Akhdar",
                "isoCode": "JA",
                "countryCode": "LY"
            },
            {
                "name": "Jabal al Gharbi District",
                "isoCode": "JG",
                "countryCode": "LY"
            },
            {
                "name": "Jafara",
                "isoCode": "JI",
                "countryCode": "LY"
            },
            {
                "name": "Jufra",
                "isoCode": "JU",
                "countryCode": "LY"
            },
            {
                "name": "Kufra District",
                "isoCode": "KF",
                "countryCode": "LY"
            },
            {
                "name": "Marj District",
                "isoCode": "MJ",
                "countryCode": "LY"
            },
            {
                "name": "Misrata District",
                "isoCode": "MI",
                "countryCode": "LY"
            },
            {
                "name": "Murqub",
                "isoCode": "MB",
                "countryCode": "LY"
            },
            {
                "name": "Murzuq District",
                "isoCode": "MQ",
                "countryCode": "LY"
            },
            {
                "name": "Nalut District",
                "isoCode": "NL",
                "countryCode": "LY"
            },
            {
                "name": "Nuqat al Khams",
                "isoCode": "NQ",
                "countryCode": "LY"
            },
            {
                "name": "Sabha District",
                "isoCode": "SB",
                "countryCode": "LY"
            },
            {
                "name": "Sirte District",
                "isoCode": "SR",
                "countryCode": "LY"
            },
            {
                "name": "Tripoli District",
                "isoCode": "TB",
                "countryCode": "LY"
            },
            {
                "name": "Wadi al Hayaa District",
                "isoCode": "WD",
                "countryCode": "LY"
            },
            {
                "name": "Wadi al Shatii District",
                "isoCode": "WS",
                "countryCode": "LY"
            },
            {
                "name": "Zawiya District",
                "isoCode": "ZA",
                "countryCode": "LY"
            },
            {
                "name": "Balzers",
                "isoCode": "01",
                "countryCode": "LI"
            },
            {
                "name": "Eschen",
                "isoCode": "02",
                "countryCode": "LI"
            },
            {
                "name": "Gamprin",
                "isoCode": "03",
                "countryCode": "LI"
            },
            {
                "name": "Mauren",
                "isoCode": "04",
                "countryCode": "LI"
            },
            {
                "name": "Planken",
                "isoCode": "05",
                "countryCode": "LI"
            },
            {
                "name": "Ruggell",
                "isoCode": "06",
                "countryCode": "LI"
            },
            {
                "name": "Schaan",
                "isoCode": "07",
                "countryCode": "LI"
            },
            {
                "name": "Schellenberg",
                "isoCode": "08",
                "countryCode": "LI"
            },
            {
                "name": "Triesen",
                "isoCode": "09",
                "countryCode": "LI"
            },
            {
                "name": "Triesenberg",
                "isoCode": "10",
                "countryCode": "LI"
            },
            {
                "name": "Vaduz",
                "isoCode": "11",
                "countryCode": "LI"
            },
            {
                "name": "Akmenė District Municipality",
                "isoCode": "01",
                "countryCode": "LT"
            },
            {
                "name": "Alytus City Municipality",
                "isoCode": "02",
                "countryCode": "LT"
            },
            {
                "name": "Alytus County",
                "isoCode": "AL",
                "countryCode": "LT"
            },
            {
                "name": "Alytus District Municipality",
                "isoCode": "03",
                "countryCode": "LT"
            },
            {
                "name": "Birštonas Municipality",
                "isoCode": "05",
                "countryCode": "LT"
            },
            {
                "name": "Biržai District Municipality",
                "isoCode": "06",
                "countryCode": "LT"
            },
            {
                "name": "Druskininkai municipality",
                "isoCode": "07",
                "countryCode": "LT"
            },
            {
                "name": "Elektrėnai municipality",
                "isoCode": "08",
                "countryCode": "LT"
            },
            {
                "name": "Ignalina District Municipality",
                "isoCode": "09",
                "countryCode": "LT"
            },
            {
                "name": "Jonava District Municipality",
                "isoCode": "10",
                "countryCode": "LT"
            },
            {
                "name": "Joniškis District Municipality",
                "isoCode": "11",
                "countryCode": "LT"
            },
            {
                "name": "Jurbarkas District Municipality",
                "isoCode": "12",
                "countryCode": "LT"
            },
            {
                "name": "Kaišiadorys District Municipality",
                "isoCode": "13",
                "countryCode": "LT"
            },
            {
                "name": "Kalvarija municipality",
                "isoCode": "14",
                "countryCode": "LT"
            },
            {
                "name": "Kaunas City Municipality",
                "isoCode": "15",
                "countryCode": "LT"
            },
            {
                "name": "Kaunas County",
                "isoCode": "KU",
                "countryCode": "LT"
            },
            {
                "name": "Kaunas District Municipality",
                "isoCode": "16",
                "countryCode": "LT"
            },
            {
                "name": "Kazlų Rūda municipality",
                "isoCode": "17",
                "countryCode": "LT"
            },
            {
                "name": "Kelmė District Municipality",
                "isoCode": "19",
                "countryCode": "LT"
            },
            {
                "name": "Klaipeda City Municipality",
                "isoCode": "20",
                "countryCode": "LT"
            },
            {
                "name": "Klaipėda County",
                "isoCode": "KL",
                "countryCode": "LT"
            },
            {
                "name": "Klaipėda District Municipality",
                "isoCode": "21",
                "countryCode": "LT"
            },
            {
                "name": "Kretinga District Municipality",
                "isoCode": "22",
                "countryCode": "LT"
            },
            {
                "name": "Kupiškis District Municipality",
                "isoCode": "23",
                "countryCode": "LT"
            },
            {
                "name": "Kėdainiai District Municipality",
                "isoCode": "18",
                "countryCode": "LT"
            },
            {
                "name": "Lazdijai District Municipality",
                "isoCode": "24",
                "countryCode": "LT"
            },
            {
                "name": "Marijampolė County",
                "isoCode": "MR",
                "countryCode": "LT"
            },
            {
                "name": "Marijampolė Municipality",
                "isoCode": "25",
                "countryCode": "LT"
            },
            {
                "name": "Mažeikiai District Municipality",
                "isoCode": "26",
                "countryCode": "LT"
            },
            {
                "name": "Molėtai District Municipality",
                "isoCode": "27",
                "countryCode": "LT"
            },
            {
                "name": "Neringa Municipality",
                "isoCode": "28",
                "countryCode": "LT"
            },
            {
                "name": "Pagėgiai municipality",
                "isoCode": "29",
                "countryCode": "LT"
            },
            {
                "name": "Pakruojis District Municipality",
                "isoCode": "30",
                "countryCode": "LT"
            },
            {
                "name": "Palanga City Municipality",
                "isoCode": "31",
                "countryCode": "LT"
            },
            {
                "name": "Panevėžys City Municipality",
                "isoCode": "32",
                "countryCode": "LT"
            },
            {
                "name": "Panevėžys County",
                "isoCode": "PN",
                "countryCode": "LT"
            },
            {
                "name": "Panevėžys District Municipality",
                "isoCode": "33",
                "countryCode": "LT"
            },
            {
                "name": "Pasvalys District Municipality",
                "isoCode": "34",
                "countryCode": "LT"
            },
            {
                "name": "Plungė District Municipality",
                "isoCode": "35",
                "countryCode": "LT"
            },
            {
                "name": "Prienai District Municipality",
                "isoCode": "36",
                "countryCode": "LT"
            },
            {
                "name": "Radviliškis District Municipality",
                "isoCode": "37",
                "countryCode": "LT"
            },
            {
                "name": "Raseiniai District Municipality",
                "isoCode": "38",
                "countryCode": "LT"
            },
            {
                "name": "Rietavas municipality",
                "isoCode": "39",
                "countryCode": "LT"
            },
            {
                "name": "Rokiškis District Municipality",
                "isoCode": "40",
                "countryCode": "LT"
            },
            {
                "name": "Skuodas District Municipality",
                "isoCode": "48",
                "countryCode": "LT"
            },
            {
                "name": "Tauragė County",
                "isoCode": "TA",
                "countryCode": "LT"
            },
            {
                "name": "Tauragė District Municipality",
                "isoCode": "50",
                "countryCode": "LT"
            },
            {
                "name": "Telšiai County",
                "isoCode": "TE",
                "countryCode": "LT"
            },
            {
                "name": "Telšiai District Municipality",
                "isoCode": "51",
                "countryCode": "LT"
            },
            {
                "name": "Trakai District Municipality",
                "isoCode": "52",
                "countryCode": "LT"
            },
            {
                "name": "Ukmergė District Municipality",
                "isoCode": "53",
                "countryCode": "LT"
            },
            {
                "name": "Utena County",
                "isoCode": "UT",
                "countryCode": "LT"
            },
            {
                "name": "Utena District Municipality",
                "isoCode": "54",
                "countryCode": "LT"
            },
            {
                "name": "Varėna District Municipality",
                "isoCode": "55",
                "countryCode": "LT"
            },
            {
                "name": "Vilkaviškis District Municipality",
                "isoCode": "56",
                "countryCode": "LT"
            },
            {
                "name": "Vilnius City Municipality",
                "isoCode": "57",
                "countryCode": "LT"
            },
            {
                "name": "Vilnius County",
                "isoCode": "VL",
                "countryCode": "LT"
            },
            {
                "name": "Vilnius District Municipality",
                "isoCode": "58",
                "countryCode": "LT"
            },
            {
                "name": "Visaginas Municipality",
                "isoCode": "59",
                "countryCode": "LT"
            },
            {
                "name": "Zarasai District Municipality",
                "isoCode": "60",
                "countryCode": "LT"
            },
            {
                "name": "Šakiai District Municipality",
                "isoCode": "41",
                "countryCode": "LT"
            },
            {
                "name": "Šalčininkai District Municipality",
                "isoCode": "42",
                "countryCode": "LT"
            },
            {
                "name": "Šiauliai City Municipality",
                "isoCode": "43",
                "countryCode": "LT"
            },
            {
                "name": "Šiauliai County",
                "isoCode": "SA",
                "countryCode": "LT"
            },
            {
                "name": "Šiauliai District Municipality",
                "isoCode": "44",
                "countryCode": "LT"
            },
            {
                "name": "Šilalė District Municipality",
                "isoCode": "45",
                "countryCode": "LT"
            },
            {
                "name": "Šilutė District Municipality",
                "isoCode": "46",
                "countryCode": "LT"
            },
            {
                "name": "Širvintos District Municipality",
                "isoCode": "47",
                "countryCode": "LT"
            },
            {
                "name": "Švenčionys District Municipality",
                "isoCode": "49",
                "countryCode": "LT"
            },
            {
                "name": "Canton of Capellen",
                "isoCode": "CA",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Clervaux",
                "isoCode": "CL",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Diekirch",
                "isoCode": "DI",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Echternach",
                "isoCode": "EC",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Esch-sur-Alzette",
                "isoCode": "ES",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Grevenmacher",
                "isoCode": "GR",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Luxembourg",
                "isoCode": "LU",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Mersch",
                "isoCode": "ME",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Redange",
                "isoCode": "RD",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Remich",
                "isoCode": "RM",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Vianden",
                "isoCode": "VD",
                "countryCode": "LU"
            },
            {
                "name": "Canton of Wiltz",
                "isoCode": "WI",
                "countryCode": "LU"
            },
            {
                "name": "Diekirch District",
                "isoCode": "D",
                "countryCode": "LU"
            },
            {
                "name": "Grevenmacher District",
                "isoCode": "G",
                "countryCode": "LU"
            },
            {
                "name": "Luxembourg District",
                "isoCode": "L",
                "countryCode": "LU"
            },
            {
                "name": "Aerodrom Municipality",
                "isoCode": "01",
                "countryCode": "MK"
            },
            {
                "name": "Aračinovo Municipality",
                "isoCode": "02",
                "countryCode": "MK"
            },
            {
                "name": "Berovo Municipality",
                "isoCode": "03",
                "countryCode": "MK"
            },
            {
                "name": "Bitola Municipality",
                "isoCode": "04",
                "countryCode": "MK"
            },
            {
                "name": "Bogdanci Municipality",
                "isoCode": "05",
                "countryCode": "MK"
            },
            {
                "name": "Bogovinje Municipality",
                "isoCode": "06",
                "countryCode": "MK"
            },
            {
                "name": "Bosilovo Municipality",
                "isoCode": "07",
                "countryCode": "MK"
            },
            {
                "name": "Brvenica Municipality",
                "isoCode": "08",
                "countryCode": "MK"
            },
            {
                "name": "Butel Municipality",
                "isoCode": "09",
                "countryCode": "MK"
            },
            {
                "name": "Centar Municipality",
                "isoCode": "77",
                "countryCode": "MK"
            },
            {
                "name": "Centar Župa Municipality",
                "isoCode": "78",
                "countryCode": "MK"
            },
            {
                "name": "Debarca Municipality",
                "isoCode": "22",
                "countryCode": "MK"
            },
            {
                "name": "Delčevo Municipality",
                "isoCode": "23",
                "countryCode": "MK"
            },
            {
                "name": "Demir Hisar Municipality",
                "isoCode": "25",
                "countryCode": "MK"
            },
            {
                "name": "Demir Kapija Municipality",
                "isoCode": "24",
                "countryCode": "MK"
            },
            {
                "name": "Dojran Municipality",
                "isoCode": "26",
                "countryCode": "MK"
            },
            {
                "name": "Dolneni Municipality",
                "isoCode": "27",
                "countryCode": "MK"
            },
            {
                "name": "Drugovo Municipality",
                "isoCode": "28",
                "countryCode": "MK"
            },
            {
                "name": "Gazi Baba Municipality",
                "isoCode": "17",
                "countryCode": "MK"
            },
            {
                "name": "Gevgelija Municipality",
                "isoCode": "18",
                "countryCode": "MK"
            },
            {
                "name": "Gjorče Petrov Municipality",
                "isoCode": "29",
                "countryCode": "MK"
            },
            {
                "name": "Gostivar Municipality",
                "isoCode": "19",
                "countryCode": "MK"
            },
            {
                "name": "Gradsko Municipality",
                "isoCode": "20",
                "countryCode": "MK"
            },
            {
                "name": "Greater Skopje",
                "isoCode": "85",
                "countryCode": "MK"
            },
            {
                "name": "Ilinden Municipality",
                "isoCode": "34",
                "countryCode": "MK"
            },
            {
                "name": "Jegunovce Municipality",
                "isoCode": "35",
                "countryCode": "MK"
            },
            {
                "name": "Karbinci",
                "isoCode": "37",
                "countryCode": "MK"
            },
            {
                "name": "Karpoš Municipality",
                "isoCode": "38",
                "countryCode": "MK"
            },
            {
                "name": "Kavadarci Municipality",
                "isoCode": "36",
                "countryCode": "MK"
            },
            {
                "name": "Kisela Voda Municipality",
                "isoCode": "39",
                "countryCode": "MK"
            },
            {
                "name": "Kičevo Municipality",
                "isoCode": "40",
                "countryCode": "MK"
            },
            {
                "name": "Konče Municipality",
                "isoCode": "41",
                "countryCode": "MK"
            },
            {
                "name": "Kočani Municipality",
                "isoCode": "42",
                "countryCode": "MK"
            },
            {
                "name": "Kratovo Municipality",
                "isoCode": "43",
                "countryCode": "MK"
            },
            {
                "name": "Kriva Palanka Municipality",
                "isoCode": "44",
                "countryCode": "MK"
            },
            {
                "name": "Krivogaštani Municipality",
                "isoCode": "45",
                "countryCode": "MK"
            },
            {
                "name": "Kruševo Municipality",
                "isoCode": "46",
                "countryCode": "MK"
            },
            {
                "name": "Kumanovo Municipality",
                "isoCode": "47",
                "countryCode": "MK"
            },
            {
                "name": "Lipkovo Municipality",
                "isoCode": "48",
                "countryCode": "MK"
            },
            {
                "name": "Lozovo Municipality",
                "isoCode": "49",
                "countryCode": "MK"
            },
            {
                "name": "Makedonska Kamenica Municipality",
                "isoCode": "51",
                "countryCode": "MK"
            },
            {
                "name": "Makedonski Brod Municipality",
                "isoCode": "52",
                "countryCode": "MK"
            },
            {
                "name": "Mavrovo and Rostuša Municipality",
                "isoCode": "50",
                "countryCode": "MK"
            },
            {
                "name": "Mogila Municipality",
                "isoCode": "53",
                "countryCode": "MK"
            },
            {
                "name": "Negotino Municipality",
                "isoCode": "54",
                "countryCode": "MK"
            },
            {
                "name": "Novaci Municipality",
                "isoCode": "55",
                "countryCode": "MK"
            },
            {
                "name": "Novo Selo Municipality",
                "isoCode": "56",
                "countryCode": "MK"
            },
            {
                "name": "Ohrid Municipality",
                "isoCode": "58",
                "countryCode": "MK"
            },
            {
                "name": "Oslomej Municipality",
                "isoCode": "57",
                "countryCode": "MK"
            },
            {
                "name": "Pehčevo Municipality",
                "isoCode": "60",
                "countryCode": "MK"
            },
            {
                "name": "Petrovec Municipality",
                "isoCode": "59",
                "countryCode": "MK"
            },
            {
                "name": "Plasnica Municipality",
                "isoCode": "61",
                "countryCode": "MK"
            },
            {
                "name": "Prilep Municipality",
                "isoCode": "62",
                "countryCode": "MK"
            },
            {
                "name": "Probištip Municipality",
                "isoCode": "63",
                "countryCode": "MK"
            },
            {
                "name": "Radoviš Municipality",
                "isoCode": "64",
                "countryCode": "MK"
            },
            {
                "name": "Rankovce Municipality",
                "isoCode": "65",
                "countryCode": "MK"
            },
            {
                "name": "Resen Municipality",
                "isoCode": "66",
                "countryCode": "MK"
            },
            {
                "name": "Rosoman Municipality",
                "isoCode": "67",
                "countryCode": "MK"
            },
            {
                "name": "Saraj Municipality",
                "isoCode": "68",
                "countryCode": "MK"
            },
            {
                "name": "Sopište Municipality",
                "isoCode": "70",
                "countryCode": "MK"
            },
            {
                "name": "Staro Nagoričane Municipality",
                "isoCode": "71",
                "countryCode": "MK"
            },
            {
                "name": "Struga Municipality",
                "isoCode": "72",
                "countryCode": "MK"
            },
            {
                "name": "Strumica Municipality",
                "isoCode": "73",
                "countryCode": "MK"
            },
            {
                "name": "Studeničani Municipality",
                "isoCode": "74",
                "countryCode": "MK"
            },
            {
                "name": "Sveti Nikole Municipality",
                "isoCode": "69",
                "countryCode": "MK"
            },
            {
                "name": "Tearce Municipality",
                "isoCode": "75",
                "countryCode": "MK"
            },
            {
                "name": "Tetovo Municipality",
                "isoCode": "76",
                "countryCode": "MK"
            },
            {
                "name": "Valandovo Municipality",
                "isoCode": "10",
                "countryCode": "MK"
            },
            {
                "name": "Vasilevo Municipality",
                "isoCode": "11",
                "countryCode": "MK"
            },
            {
                "name": "Veles Municipality",
                "isoCode": "13",
                "countryCode": "MK"
            },
            {
                "name": "Vevčani Municipality",
                "isoCode": "12",
                "countryCode": "MK"
            },
            {
                "name": "Vinica Municipality",
                "isoCode": "14",
                "countryCode": "MK"
            },
            {
                "name": "Vraneštica Municipality",
                "isoCode": "15",
                "countryCode": "MK"
            },
            {
                "name": "Vrapčište Municipality",
                "isoCode": "16",
                "countryCode": "MK"
            },
            {
                "name": "Zajas Municipality",
                "isoCode": "31",
                "countryCode": "MK"
            },
            {
                "name": "Zelenikovo Municipality",
                "isoCode": "32",
                "countryCode": "MK"
            },
            {
                "name": "Zrnovci Municipality",
                "isoCode": "33",
                "countryCode": "MK"
            },
            {
                "name": "Čair Municipality",
                "isoCode": "79",
                "countryCode": "MK"
            },
            {
                "name": "Čaška Municipality",
                "isoCode": "80",
                "countryCode": "MK"
            },
            {
                "name": "Češinovo-Obleševo Municipality",
                "isoCode": "81",
                "countryCode": "MK"
            },
            {
                "name": "Čučer-Sandevo Municipality",
                "isoCode": "82",
                "countryCode": "MK"
            },
            {
                "name": "Štip Municipality",
                "isoCode": "83",
                "countryCode": "MK"
            },
            {
                "name": "Šuto Orizari Municipality",
                "isoCode": "84",
                "countryCode": "MK"
            },
            {
                "name": "Želino Municipality",
                "isoCode": "30",
                "countryCode": "MK"
            },
            {
                "name": "Antananarivo Province",
                "isoCode": "T",
                "countryCode": "MG"
            },
            {
                "name": "Antsiranana Province",
                "isoCode": "D",
                "countryCode": "MG"
            },
            {
                "name": "Fianarantsoa Province",
                "isoCode": "F",
                "countryCode": "MG"
            },
            {
                "name": "Mahajanga Province",
                "isoCode": "M",
                "countryCode": "MG"
            },
            {
                "name": "Toamasina Province",
                "isoCode": "A",
                "countryCode": "MG"
            },
            {
                "name": "Toliara Province",
                "isoCode": "U",
                "countryCode": "MG"
            },
            {
                "name": "Balaka District",
                "isoCode": "BA",
                "countryCode": "MW"
            },
            {
                "name": "Blantyre District",
                "isoCode": "BL",
                "countryCode": "MW"
            },
            {
                "name": "Central Region",
                "isoCode": "C",
                "countryCode": "MW"
            },
            {
                "name": "Chikwawa District",
                "isoCode": "CK",
                "countryCode": "MW"
            },
            {
                "name": "Chiradzulu District",
                "isoCode": "CR",
                "countryCode": "MW"
            },
            {
                "name": "Chitipa district",
                "isoCode": "CT",
                "countryCode": "MW"
            },
            {
                "name": "Dedza District",
                "isoCode": "DE",
                "countryCode": "MW"
            },
            {
                "name": "Dowa District",
                "isoCode": "DO",
                "countryCode": "MW"
            },
            {
                "name": "Karonga District",
                "isoCode": "KR",
                "countryCode": "MW"
            },
            {
                "name": "Kasungu District",
                "isoCode": "KS",
                "countryCode": "MW"
            },
            {
                "name": "Likoma District",
                "isoCode": "LK",
                "countryCode": "MW"
            },
            {
                "name": "Lilongwe District",
                "isoCode": "LI",
                "countryCode": "MW"
            },
            {
                "name": "Machinga District",
                "isoCode": "MH",
                "countryCode": "MW"
            },
            {
                "name": "Mangochi District",
                "isoCode": "MG",
                "countryCode": "MW"
            },
            {
                "name": "Mchinji District",
                "isoCode": "MC",
                "countryCode": "MW"
            },
            {
                "name": "Mulanje District",
                "isoCode": "MU",
                "countryCode": "MW"
            },
            {
                "name": "Mwanza District",
                "isoCode": "MW",
                "countryCode": "MW"
            },
            {
                "name": "Mzimba District",
                "isoCode": "MZ",
                "countryCode": "MW"
            },
            {
                "name": "Nkhata Bay District",
                "isoCode": "NB",
                "countryCode": "MW"
            },
            {
                "name": "Nkhotakota District",
                "isoCode": "NK",
                "countryCode": "MW"
            },
            {
                "name": "Northern Region",
                "isoCode": "N",
                "countryCode": "MW"
            },
            {
                "name": "Nsanje District",
                "isoCode": "NS",
                "countryCode": "MW"
            },
            {
                "name": "Ntcheu District",
                "isoCode": "NU",
                "countryCode": "MW"
            },
            {
                "name": "Ntchisi District",
                "isoCode": "NI",
                "countryCode": "MW"
            },
            {
                "name": "Phalombe District",
                "isoCode": "PH",
                "countryCode": "MW"
            },
            {
                "name": "Rumphi District",
                "isoCode": "RU",
                "countryCode": "MW"
            },
            {
                "name": "Salima District",
                "isoCode": "SA",
                "countryCode": "MW"
            },
            {
                "name": "Southern Region",
                "isoCode": "S",
                "countryCode": "MW"
            },
            {
                "name": "Thyolo District",
                "isoCode": "TH",
                "countryCode": "MW"
            },
            {
                "name": "Zomba District",
                "isoCode": "ZO",
                "countryCode": "MW"
            },
            {
                "name": "Johor",
                "isoCode": "01",
                "countryCode": "MY"
            },
            {
                "name": "Kedah",
                "isoCode": "02",
                "countryCode": "MY"
            },
            {
                "name": "Kelantan",
                "isoCode": "03",
                "countryCode": "MY"
            },
            {
                "name": "Kuala Lumpur",
                "isoCode": "14",
                "countryCode": "MY"
            },
            {
                "name": "Labuan",
                "isoCode": "15",
                "countryCode": "MY"
            },
            {
                "name": "Malacca",
                "isoCode": "04",
                "countryCode": "MY"
            },
            {
                "name": "Negeri Sembilan",
                "isoCode": "05",
                "countryCode": "MY"
            },
            {
                "name": "Pahang",
                "isoCode": "06",
                "countryCode": "MY"
            },
            {
                "name": "Penang",
                "isoCode": "07",
                "countryCode": "MY"
            },
            {
                "name": "Perak",
                "isoCode": "08",
                "countryCode": "MY"
            },
            {
                "name": "Perlis",
                "isoCode": "09",
                "countryCode": "MY"
            },
            {
                "name": "Putrajaya",
                "isoCode": "16",
                "countryCode": "MY"
            },
            {
                "name": "Sabah",
                "isoCode": "12",
                "countryCode": "MY"
            },
            {
                "name": "Sarawak",
                "isoCode": "13",
                "countryCode": "MY"
            },
            {
                "name": "Selangor",
                "isoCode": "10",
                "countryCode": "MY"
            },
            {
                "name": "Terengganu",
                "isoCode": "11",
                "countryCode": "MY"
            },
            {
                "name": "Addu Atoll",
                "isoCode": "01",
                "countryCode": "MV"
            },
            {
                "name": "Alif Alif Atoll",
                "isoCode": "02",
                "countryCode": "MV"
            },
            {
                "name": "Alif Dhaal Atoll",
                "isoCode": "00",
                "countryCode": "MV"
            },
            {
                "name": "Central Province",
                "isoCode": "CE",
                "countryCode": "MV"
            },
            {
                "name": "Dhaalu Atoll",
                "isoCode": "17",
                "countryCode": "MV"
            },
            {
                "name": "Faafu Atoll",
                "isoCode": "14",
                "countryCode": "MV"
            },
            {
                "name": "Gaafu Alif Atoll",
                "isoCode": "27",
                "countryCode": "MV"
            },
            {
                "name": "Gaafu Dhaalu Atoll",
                "isoCode": "28",
                "countryCode": "MV"
            },
            {
                "name": "Gnaviyani Atoll",
                "isoCode": "29",
                "countryCode": "MV"
            },
            {
                "name": "Haa Alif Atoll",
                "isoCode": "07",
                "countryCode": "MV"
            },
            {
                "name": "Haa Dhaalu Atoll",
                "isoCode": "23",
                "countryCode": "MV"
            },
            {
                "name": "Kaafu Atoll",
                "isoCode": "26",
                "countryCode": "MV"
            },
            {
                "name": "Laamu Atoll",
                "isoCode": "05",
                "countryCode": "MV"
            },
            {
                "name": "Lhaviyani Atoll",
                "isoCode": "03",
                "countryCode": "MV"
            },
            {
                "name": "Malé",
                "isoCode": "MLE",
                "countryCode": "MV"
            },
            {
                "name": "Meemu Atoll",
                "isoCode": "12",
                "countryCode": "MV"
            },
            {
                "name": "Noonu Atoll",
                "isoCode": "25",
                "countryCode": "MV"
            },
            {
                "name": "North Central Province",
                "isoCode": "NC",
                "countryCode": "MV"
            },
            {
                "name": "North Province",
                "isoCode": "NO",
                "countryCode": "MV"
            },
            {
                "name": "Raa Atoll",
                "isoCode": "13",
                "countryCode": "MV"
            },
            {
                "name": "Shaviyani Atoll",
                "isoCode": "24",
                "countryCode": "MV"
            },
            {
                "name": "South Central Province",
                "isoCode": "SC",
                "countryCode": "MV"
            },
            {
                "name": "South Province",
                "isoCode": "SU",
                "countryCode": "MV"
            },
            {
                "name": "Thaa Atoll",
                "isoCode": "08",
                "countryCode": "MV"
            },
            {
                "name": "Upper South Province",
                "isoCode": "US",
                "countryCode": "MV"
            },
            {
                "name": "Vaavu Atoll",
                "isoCode": "04",
                "countryCode": "MV"
            },
            {
                "name": "Bamako",
                "isoCode": "BKO",
                "countryCode": "ML"
            },
            {
                "name": "Gao Region",
                "isoCode": "7",
                "countryCode": "ML"
            },
            {
                "name": "Kayes Region",
                "isoCode": "1",
                "countryCode": "ML"
            },
            {
                "name": "Kidal Region",
                "isoCode": "8",
                "countryCode": "ML"
            },
            {
                "name": "Koulikoro Region",
                "isoCode": "2",
                "countryCode": "ML"
            },
            {
                "name": "Mopti Region",
                "isoCode": "5",
                "countryCode": "ML"
            },
            {
                "name": "Ménaka Region",
                "isoCode": "9",
                "countryCode": "ML"
            },
            {
                "name": "Sikasso Region",
                "isoCode": "3",
                "countryCode": "ML"
            },
            {
                "name": "Ségou Region",
                "isoCode": "4",
                "countryCode": "ML"
            },
            {
                "name": "Taoudénit Region",
                "isoCode": "10",
                "countryCode": "ML"
            },
            {
                "name": "Tombouctou Region",
                "isoCode": "6",
                "countryCode": "ML"
            },
            {
                "name": "Attard",
                "isoCode": "01",
                "countryCode": "MT"
            },
            {
                "name": "Balzan",
                "isoCode": "02",
                "countryCode": "MT"
            },
            {
                "name": "Birgu",
                "isoCode": "03",
                "countryCode": "MT"
            },
            {
                "name": "Birkirkara",
                "isoCode": "04",
                "countryCode": "MT"
            },
            {
                "name": "Birżebbuġa",
                "isoCode": "05",
                "countryCode": "MT"
            },
            {
                "name": "Cospicua",
                "isoCode": "06",
                "countryCode": "MT"
            },
            {
                "name": "Dingli",
                "isoCode": "07",
                "countryCode": "MT"
            },
            {
                "name": "Fgura",
                "isoCode": "08",
                "countryCode": "MT"
            },
            {
                "name": "Floriana",
                "isoCode": "09",
                "countryCode": "MT"
            },
            {
                "name": "Fontana",
                "isoCode": "10",
                "countryCode": "MT"
            },
            {
                "name": "Gudja",
                "isoCode": "11",
                "countryCode": "MT"
            },
            {
                "name": "Għajnsielem",
                "isoCode": "13",
                "countryCode": "MT"
            },
            {
                "name": "Għarb",
                "isoCode": "14",
                "countryCode": "MT"
            },
            {
                "name": "Għargħur",
                "isoCode": "15",
                "countryCode": "MT"
            },
            {
                "name": "Għasri",
                "isoCode": "16",
                "countryCode": "MT"
            },
            {
                "name": "Għaxaq",
                "isoCode": "17",
                "countryCode": "MT"
            },
            {
                "name": "Gżira",
                "isoCode": "12",
                "countryCode": "MT"
            },
            {
                "name": "Iklin",
                "isoCode": "19",
                "countryCode": "MT"
            },
            {
                "name": "Kalkara",
                "isoCode": "21",
                "countryCode": "MT"
            },
            {
                "name": "Kerċem",
                "isoCode": "22",
                "countryCode": "MT"
            },
            {
                "name": "Kirkop",
                "isoCode": "23",
                "countryCode": "MT"
            },
            {
                "name": "Lija",
                "isoCode": "24",
                "countryCode": "MT"
            },
            {
                "name": "Luqa",
                "isoCode": "25",
                "countryCode": "MT"
            },
            {
                "name": "Marsa",
                "isoCode": "26",
                "countryCode": "MT"
            },
            {
                "name": "Marsaskala",
                "isoCode": "27",
                "countryCode": "MT"
            },
            {
                "name": "Marsaxlokk",
                "isoCode": "28",
                "countryCode": "MT"
            },
            {
                "name": "Mdina",
                "isoCode": "29",
                "countryCode": "MT"
            },
            {
                "name": "Mellieħa",
                "isoCode": "30",
                "countryCode": "MT"
            },
            {
                "name": "Mosta",
                "isoCode": "32",
                "countryCode": "MT"
            },
            {
                "name": "Mqabba",
                "isoCode": "33",
                "countryCode": "MT"
            },
            {
                "name": "Msida",
                "isoCode": "34",
                "countryCode": "MT"
            },
            {
                "name": "Mtarfa",
                "isoCode": "35",
                "countryCode": "MT"
            },
            {
                "name": "Munxar",
                "isoCode": "36",
                "countryCode": "MT"
            },
            {
                "name": "Mġarr",
                "isoCode": "31",
                "countryCode": "MT"
            },
            {
                "name": "Nadur",
                "isoCode": "37",
                "countryCode": "MT"
            },
            {
                "name": "Naxxar",
                "isoCode": "38",
                "countryCode": "MT"
            },
            {
                "name": "Paola",
                "isoCode": "39",
                "countryCode": "MT"
            },
            {
                "name": "Pembroke",
                "isoCode": "40",
                "countryCode": "MT"
            },
            {
                "name": "Pietà",
                "isoCode": "41",
                "countryCode": "MT"
            },
            {
                "name": "Qala",
                "isoCode": "42",
                "countryCode": "MT"
            },
            {
                "name": "Qormi",
                "isoCode": "43",
                "countryCode": "MT"
            },
            {
                "name": "Qrendi",
                "isoCode": "44",
                "countryCode": "MT"
            },
            {
                "name": "Rabat",
                "isoCode": "46",
                "countryCode": "MT"
            },
            {
                "name": "Saint Lawrence",
                "isoCode": "50",
                "countryCode": "MT"
            },
            {
                "name": "San Ġwann",
                "isoCode": "49",
                "countryCode": "MT"
            },
            {
                "name": "Sannat",
                "isoCode": "52",
                "countryCode": "MT"
            },
            {
                "name": "Santa Luċija",
                "isoCode": "53",
                "countryCode": "MT"
            },
            {
                "name": "Santa Venera",
                "isoCode": "54",
                "countryCode": "MT"
            },
            {
                "name": "Senglea",
                "isoCode": "20",
                "countryCode": "MT"
            },
            {
                "name": "Siġġiewi",
                "isoCode": "55",
                "countryCode": "MT"
            },
            {
                "name": "Sliema",
                "isoCode": "56",
                "countryCode": "MT"
            },
            {
                "name": "St. Julian's",
                "isoCode": "48",
                "countryCode": "MT"
            },
            {
                "name": "St. Paul's Bay",
                "isoCode": "51",
                "countryCode": "MT"
            },
            {
                "name": "Swieqi",
                "isoCode": "57",
                "countryCode": "MT"
            },
            {
                "name": "Ta' Xbiex",
                "isoCode": "58",
                "countryCode": "MT"
            },
            {
                "name": "Tarxien",
                "isoCode": "59",
                "countryCode": "MT"
            },
            {
                "name": "Valletta",
                "isoCode": "60",
                "countryCode": "MT"
            },
            {
                "name": "Victoria",
                "isoCode": "45",
                "countryCode": "MT"
            },
            {
                "name": "Xagħra",
                "isoCode": "61",
                "countryCode": "MT"
            },
            {
                "name": "Xewkija",
                "isoCode": "62",
                "countryCode": "MT"
            },
            {
                "name": "Xgħajra",
                "isoCode": "63",
                "countryCode": "MT"
            },
            {
                "name": "Ħamrun",
                "isoCode": "18",
                "countryCode": "MT"
            },
            {
                "name": "Żabbar",
                "isoCode": "64",
                "countryCode": "MT"
            },
            {
                "name": "Żebbuġ Gozo",
                "isoCode": "65",
                "countryCode": "MT"
            },
            {
                "name": "Żebbuġ Malta",
                "isoCode": "66",
                "countryCode": "MT"
            },
            {
                "name": "Żejtun",
                "isoCode": "67",
                "countryCode": "MT"
            },
            {
                "name": "Żurrieq",
                "isoCode": "68",
                "countryCode": "MT"
            },
            {
                "name": "Ralik Chain",
                "isoCode": "L",
                "countryCode": "MH"
            },
            {
                "name": "Ratak Chain",
                "isoCode": "T",
                "countryCode": "MH"
            },
            {
                "name": "Adrar Region",
                "isoCode": "07",
                "countryCode": "MR"
            },
            {
                "name": "Assaba Region",
                "isoCode": "03",
                "countryCode": "MR"
            },
            {
                "name": "Brakna Region",
                "isoCode": "05",
                "countryCode": "MR"
            },
            {
                "name": "Dakhlet Nouadhibou",
                "isoCode": "08",
                "countryCode": "MR"
            },
            {
                "name": "Gorgol Region",
                "isoCode": "04",
                "countryCode": "MR"
            },
            {
                "name": "Guidimaka Region",
                "isoCode": "10",
                "countryCode": "MR"
            },
            {
                "name": "Hodh Ech Chargui Region",
                "isoCode": "01",
                "countryCode": "MR"
            },
            {
                "name": "Hodh El Gharbi Region",
                "isoCode": "02",
                "countryCode": "MR"
            },
            {
                "name": "Inchiri Region",
                "isoCode": "12",
                "countryCode": "MR"
            },
            {
                "name": "Nouakchott-Nord Region",
                "isoCode": "14",
                "countryCode": "MR"
            },
            {
                "name": "Nouakchott-Ouest Region",
                "isoCode": "13",
                "countryCode": "MR"
            },
            {
                "name": "Nouakchott-Sud Region",
                "isoCode": "15",
                "countryCode": "MR"
            },
            {
                "name": "Tagant Region",
                "isoCode": "09",
                "countryCode": "MR"
            },
            {
                "name": "Tiris Zemmour Region",
                "isoCode": "11",
                "countryCode": "MR"
            },
            {
                "name": "Trarza Region",
                "isoCode": "06",
                "countryCode": "MR"
            },
            {
                "name": "Agaléga",
                "isoCode": "AG",
                "countryCode": "MU"
            },
            {
                "name": "Beau Bassin-Rose Hill",
                "isoCode": "BR",
                "countryCode": "MU"
            },
            {
                "name": "Cargados Carajos",
                "isoCode": "CC",
                "countryCode": "MU"
            },
            {
                "name": "Curepipe",
                "isoCode": "CU",
                "countryCode": "MU"
            },
            {
                "name": "Flacq District",
                "isoCode": "FL",
                "countryCode": "MU"
            },
            {
                "name": "Grand Port District",
                "isoCode": "GP",
                "countryCode": "MU"
            },
            {
                "name": "Moka District",
                "isoCode": "MO",
                "countryCode": "MU"
            },
            {
                "name": "Pamplemousses District",
                "isoCode": "PA",
                "countryCode": "MU"
            },
            {
                "name": "Plaines Wilhems District",
                "isoCode": "PW",
                "countryCode": "MU"
            },
            {
                "name": "Port Louis",
                "isoCode": "PU",
                "countryCode": "MU"
            },
            {
                "name": "Port Louis District",
                "isoCode": "PL",
                "countryCode": "MU"
            },
            {
                "name": "Quatre Bornes",
                "isoCode": "QB",
                "countryCode": "MU"
            },
            {
                "name": "Rivière Noire District",
                "isoCode": "BL",
                "countryCode": "MU"
            },
            {
                "name": "Rivière du Rempart District",
                "isoCode": "RR",
                "countryCode": "MU"
            },
            {
                "name": "Rodrigues",
                "isoCode": "RO",
                "countryCode": "MU"
            },
            {
                "name": "Savanne District",
                "isoCode": "SA",
                "countryCode": "MU"
            },
            {
                "name": "Vacoas-Phoenix",
                "isoCode": "VP",
                "countryCode": "MU"
            },
            {
                "name": "Aguascalientes",
                "isoCode": "AGU",
                "countryCode": "MX"
            },
            {
                "name": "Baja California",
                "isoCode": "BCN",
                "countryCode": "MX"
            },
            {
                "name": "Baja California Sur",
                "isoCode": "BCS",
                "countryCode": "MX"
            },
            {
                "name": "Campeche",
                "isoCode": "CAM",
                "countryCode": "MX"
            },
            {
                "name": "Chiapas",
                "isoCode": "CHP",
                "countryCode": "MX"
            },
            {
                "name": "Chihuahua",
                "isoCode": "CHH",
                "countryCode": "MX"
            },
            {
                "name": "Ciudad de México",
                "isoCode": "CDMX",
                "countryCode": "MX"
            },
            {
                "name": "Coahuila de Zaragoza",
                "isoCode": "COA",
                "countryCode": "MX"
            },
            {
                "name": "Colima",
                "isoCode": "COL",
                "countryCode": "MX"
            },
            {
                "name": "Durango",
                "isoCode": "DUR",
                "countryCode": "MX"
            },
            {
                "name": "Estado de México",
                "isoCode": "MEX",
                "countryCode": "MX"
            },
            {
                "name": "Guanajuato",
                "isoCode": "GUA",
                "countryCode": "MX"
            },
            {
                "name": "Guerrero",
                "isoCode": "GRO",
                "countryCode": "MX"
            },
            {
                "name": "Hidalgo",
                "isoCode": "HID",
                "countryCode": "MX"
            },
            {
                "name": "Jalisco",
                "isoCode": "JAL",
                "countryCode": "MX"
            },
            {
                "name": "Michoacán de Ocampo",
                "isoCode": "MIC",
                "countryCode": "MX"
            },
            {
                "name": "Morelos",
                "isoCode": "MOR",
                "countryCode": "MX"
            },
            {
                "name": "Nayarit",
                "isoCode": "NAY",
                "countryCode": "MX"
            },
            {
                "name": "Nuevo León",
                "isoCode": "NLE",
                "countryCode": "MX"
            },
            {
                "name": "Oaxaca",
                "isoCode": "OAX",
                "countryCode": "MX"
            },
            {
                "name": "Puebla",
                "isoCode": "PUE",
                "countryCode": "MX"
            },
            {
                "name": "Querétaro",
                "isoCode": "QUE",
                "countryCode": "MX"
            },
            {
                "name": "Quintana Roo",
                "isoCode": "ROO",
                "countryCode": "MX"
            },
            {
                "name": "San Luis Potosí",
                "isoCode": "SLP",
                "countryCode": "MX"
            },
            {
                "name": "Sinaloa",
                "isoCode": "SIN",
                "countryCode": "MX"
            },
            {
                "name": "Sonora",
                "isoCode": "SON",
                "countryCode": "MX"
            },
            {
                "name": "Tabasco",
                "isoCode": "TAB",
                "countryCode": "MX"
            },
            {
                "name": "Tamaulipas",
                "isoCode": "TAM",
                "countryCode": "MX"
            },
            {
                "name": "Tlaxcala",
                "isoCode": "TLA",
                "countryCode": "MX"
            },
            {
                "name": "Veracruz de Ignacio de la Llave",
                "isoCode": "VER",
                "countryCode": "MX"
            },
            {
                "name": "Yucatán",
                "isoCode": "YUC",
                "countryCode": "MX"
            },
            {
                "name": "Zacatecas",
                "isoCode": "ZAC",
                "countryCode": "MX"
            },
            {
                "name": "Chuuk State",
                "isoCode": "TRK",
                "countryCode": "FM"
            },
            {
                "name": "Kosrae State",
                "isoCode": "KSA",
                "countryCode": "FM"
            },
            {
                "name": "Pohnpei State",
                "isoCode": "PNI",
                "countryCode": "FM"
            },
            {
                "name": "Yap State",
                "isoCode": "YAP",
                "countryCode": "FM"
            },
            {
                "name": "Anenii Noi District",
                "isoCode": "AN",
                "countryCode": "MD"
            },
            {
                "name": "Basarabeasca District",
                "isoCode": "BS",
                "countryCode": "MD"
            },
            {
                "name": "Bender Municipality",
                "isoCode": "BD",
                "countryCode": "MD"
            },
            {
                "name": "Briceni District",
                "isoCode": "BR",
                "countryCode": "MD"
            },
            {
                "name": "Bălți Municipality",
                "isoCode": "BA",
                "countryCode": "MD"
            },
            {
                "name": "Cahul District",
                "isoCode": "CA",
                "countryCode": "MD"
            },
            {
                "name": "Cantemir District",
                "isoCode": "CT",
                "countryCode": "MD"
            },
            {
                "name": "Chișinău Municipality",
                "isoCode": "CU",
                "countryCode": "MD"
            },
            {
                "name": "Cimișlia District",
                "isoCode": "CM",
                "countryCode": "MD"
            },
            {
                "name": "Criuleni District",
                "isoCode": "CR",
                "countryCode": "MD"
            },
            {
                "name": "Călărași District",
                "isoCode": "CL",
                "countryCode": "MD"
            },
            {
                "name": "Căușeni District",
                "isoCode": "CS",
                "countryCode": "MD"
            },
            {
                "name": "Dondușeni District",
                "isoCode": "DO",
                "countryCode": "MD"
            },
            {
                "name": "Drochia District",
                "isoCode": "DR",
                "countryCode": "MD"
            },
            {
                "name": "Dubăsari District",
                "isoCode": "DU",
                "countryCode": "MD"
            },
            {
                "name": "Edineț District",
                "isoCode": "ED",
                "countryCode": "MD"
            },
            {
                "name": "Florești District",
                "isoCode": "FL",
                "countryCode": "MD"
            },
            {
                "name": "Fălești District",
                "isoCode": "FA",
                "countryCode": "MD"
            },
            {
                "name": "Gagauzia",
                "isoCode": "GA",
                "countryCode": "MD"
            },
            {
                "name": "Glodeni District",
                "isoCode": "GL",
                "countryCode": "MD"
            },
            {
                "name": "Hîncești District",
                "isoCode": "HI",
                "countryCode": "MD"
            },
            {
                "name": "Ialoveni District",
                "isoCode": "IA",
                "countryCode": "MD"
            },
            {
                "name": "Nisporeni District",
                "isoCode": "NI",
                "countryCode": "MD"
            },
            {
                "name": "Ocnița District",
                "isoCode": "OC",
                "countryCode": "MD"
            },
            {
                "name": "Orhei District",
                "isoCode": "OR",
                "countryCode": "MD"
            },
            {
                "name": "Rezina District",
                "isoCode": "RE",
                "countryCode": "MD"
            },
            {
                "name": "Rîșcani District",
                "isoCode": "RI",
                "countryCode": "MD"
            },
            {
                "name": "Soroca District",
                "isoCode": "SO",
                "countryCode": "MD"
            },
            {
                "name": "Strășeni District",
                "isoCode": "ST",
                "countryCode": "MD"
            },
            {
                "name": "Sîngerei District",
                "isoCode": "SI",
                "countryCode": "MD"
            },
            {
                "name": "Taraclia District",
                "isoCode": "TA",
                "countryCode": "MD"
            },
            {
                "name": "Telenești District",
                "isoCode": "TE",
                "countryCode": "MD"
            },
            {
                "name": "Transnistria autonomous territorial unit",
                "isoCode": "SN",
                "countryCode": "MD"
            },
            {
                "name": "Ungheni District",
                "isoCode": "UN",
                "countryCode": "MD"
            },
            {
                "name": "Șoldănești District",
                "isoCode": "SD",
                "countryCode": "MD"
            },
            {
                "name": "Ștefan Vodă District",
                "isoCode": "SV",
                "countryCode": "MD"
            },
            {
                "name": "La Colle",
                "isoCode": "CL",
                "countryCode": "MC"
            },
            {
                "name": "La Condamine",
                "isoCode": "CO",
                "countryCode": "MC"
            },
            {
                "name": "Moneghetti",
                "isoCode": "MG",
                "countryCode": "MC"
            },
            {
                "name": "Arkhangai Province",
                "isoCode": "073",
                "countryCode": "MN"
            },
            {
                "name": "Bayan-Ölgii Province",
                "isoCode": "071",
                "countryCode": "MN"
            },
            {
                "name": "Bayankhongor Province",
                "isoCode": "069",
                "countryCode": "MN"
            },
            {
                "name": "Bulgan Province",
                "isoCode": "067",
                "countryCode": "MN"
            },
            {
                "name": "Darkhan-Uul Province",
                "isoCode": "037",
                "countryCode": "MN"
            },
            {
                "name": "Dornod Province",
                "isoCode": "061",
                "countryCode": "MN"
            },
            {
                "name": "Dornogovi Province",
                "isoCode": "063",
                "countryCode": "MN"
            },
            {
                "name": "Dundgovi Province",
                "isoCode": "059",
                "countryCode": "MN"
            },
            {
                "name": "Govi-Altai Province",
                "isoCode": "065",
                "countryCode": "MN"
            },
            {
                "name": "Govisümber Province",
                "isoCode": "064",
                "countryCode": "MN"
            },
            {
                "name": "Khentii Province",
                "isoCode": "039",
                "countryCode": "MN"
            },
            {
                "name": "Khovd Province",
                "isoCode": "043",
                "countryCode": "MN"
            },
            {
                "name": "Khövsgöl Province",
                "isoCode": "041",
                "countryCode": "MN"
            },
            {
                "name": "Orkhon Province",
                "isoCode": "035",
                "countryCode": "MN"
            },
            {
                "name": "Selenge Province",
                "isoCode": "049",
                "countryCode": "MN"
            },
            {
                "name": "Sükhbaatar Province",
                "isoCode": "051",
                "countryCode": "MN"
            },
            {
                "name": "Töv Province",
                "isoCode": "047",
                "countryCode": "MN"
            },
            {
                "name": "Uvs Province",
                "isoCode": "046",
                "countryCode": "MN"
            },
            {
                "name": "Zavkhan Province",
                "isoCode": "057",
                "countryCode": "MN"
            },
            {
                "name": "Ömnögovi Province",
                "isoCode": "053",
                "countryCode": "MN"
            },
            {
                "name": "Övörkhangai Province",
                "isoCode": "055",
                "countryCode": "MN"
            },
            {
                "name": "Andrijevica Municipality",
                "isoCode": "01",
                "countryCode": "ME"
            },
            {
                "name": "Bar Municipality",
                "isoCode": "02",
                "countryCode": "ME"
            },
            {
                "name": "Berane Municipality",
                "isoCode": "03",
                "countryCode": "ME"
            },
            {
                "name": "Bijelo Polje Municipality",
                "isoCode": "04",
                "countryCode": "ME"
            },
            {
                "name": "Budva Municipality",
                "isoCode": "05",
                "countryCode": "ME"
            },
            {
                "name": "Danilovgrad Municipality",
                "isoCode": "07",
                "countryCode": "ME"
            },
            {
                "name": "Gusinje Municipality",
                "isoCode": "22",
                "countryCode": "ME"
            },
            {
                "name": "Kolašin Municipality",
                "isoCode": "09",
                "countryCode": "ME"
            },
            {
                "name": "Kotor Municipality",
                "isoCode": "10",
                "countryCode": "ME"
            },
            {
                "name": "Mojkovac Municipality",
                "isoCode": "11",
                "countryCode": "ME"
            },
            {
                "name": "Nikšić Municipality",
                "isoCode": "12",
                "countryCode": "ME"
            },
            {
                "name": "Old Royal Capital Cetinje",
                "isoCode": "06",
                "countryCode": "ME"
            },
            {
                "name": "Petnjica Municipality",
                "isoCode": "23",
                "countryCode": "ME"
            },
            {
                "name": "Plav Municipality",
                "isoCode": "13",
                "countryCode": "ME"
            },
            {
                "name": "Pljevlja Municipality",
                "isoCode": "14",
                "countryCode": "ME"
            },
            {
                "name": "Plužine Municipality",
                "isoCode": "15",
                "countryCode": "ME"
            },
            {
                "name": "Podgorica Municipality",
                "isoCode": "16",
                "countryCode": "ME"
            },
            {
                "name": "Rožaje Municipality",
                "isoCode": "17",
                "countryCode": "ME"
            },
            {
                "name": "Tivat Municipality",
                "isoCode": "19",
                "countryCode": "ME"
            },
            {
                "name": "Ulcinj Municipality",
                "isoCode": "20",
                "countryCode": "ME"
            },
            {
                "name": "Šavnik Municipality",
                "isoCode": "18",
                "countryCode": "ME"
            },
            {
                "name": "Žabljak Municipality",
                "isoCode": "21",
                "countryCode": "ME"
            },
            {
                "name": "Agadir-Ida-Ou-Tanane",
                "isoCode": "AGD",
                "countryCode": "MA"
            },
            {
                "name": "Al Haouz",
                "isoCode": "HAO",
                "countryCode": "MA"
            },
            {
                "name": "Al Hoceïma",
                "isoCode": "HOC",
                "countryCode": "MA"
            },
            {
                "name": "Aousserd (EH)",
                "isoCode": "AOU",
                "countryCode": "MA"
            },
            {
                "name": "Assa-Zag (EH-partial)",
                "isoCode": "ASZ",
                "countryCode": "MA"
            },
            {
                "name": "Azilal",
                "isoCode": "AZI",
                "countryCode": "MA"
            },
            {
                "name": "Benslimane",
                "isoCode": "BES",
                "countryCode": "MA"
            },
            {
                "name": "Berkane",
                "isoCode": "BER",
                "countryCode": "MA"
            },
            {
                "name": "Berrechid",
                "isoCode": "BRR",
                "countryCode": "MA"
            },
            {
                "name": "Boujdour (EH)",
                "isoCode": "BOD",
                "countryCode": "MA"
            },
            {
                "name": "Boulemane",
                "isoCode": "BOM",
                "countryCode": "MA"
            },
            {
                "name": "Béni Mellal",
                "isoCode": "BEM",
                "countryCode": "MA"
            },
            {
                "name": "Béni Mellal-Khénifra",
                "isoCode": "05",
                "countryCode": "MA"
            },
            {
                "name": "Casablanca",
                "isoCode": "CAS",
                "countryCode": "MA"
            },
            {
                "name": "Casablanca-Settat",
                "isoCode": "06",
                "countryCode": "MA"
            },
            {
                "name": "Chefchaouen",
                "isoCode": "CHE",
                "countryCode": "MA"
            },
            {
                "name": "Chichaoua",
                "isoCode": "CHI",
                "countryCode": "MA"
            },
            {
                "name": "Chtouka-Ait Baha",
                "isoCode": "CHT",
                "countryCode": "MA"
            },
            {
                "name": "Dakhla-Oued Ed-Dahab (EH)",
                "isoCode": "12",
                "countryCode": "MA"
            },
            {
                "name": "Driouch",
                "isoCode": "DRI",
                "countryCode": "MA"
            },
            {
                "name": "Drâa-Tafilalet",
                "isoCode": "08",
                "countryCode": "MA"
            },
            {
                "name": "El Hajeb",
                "isoCode": "HAJ",
                "countryCode": "MA"
            },
            {
                "name": "El Jadida",
                "isoCode": "JDI",
                "countryCode": "MA"
            },
            {
                "name": "El Kelâa des Sraghna",
                "isoCode": "KES",
                "countryCode": "MA"
            },
            {
                "name": "Errachidia",
                "isoCode": "ERR",
                "countryCode": "MA"
            },
            {
                "name": "Es-Semara (EH-partial)",
                "isoCode": "ESM",
                "countryCode": "MA"
            },
            {
                "name": "Essaouira",
                "isoCode": "ESI",
                "countryCode": "MA"
            },
            {
                "name": "Fahs-Anjra",
                "isoCode": "FAH",
                "countryCode": "MA"
            },
            {
                "name": "Figuig",
                "isoCode": "FIG",
                "countryCode": "MA"
            },
            {
                "name": "Fquih Ben Salah",
                "isoCode": "FQH",
                "countryCode": "MA"
            },
            {
                "name": "Fès",
                "isoCode": "FES",
                "countryCode": "MA"
            },
            {
                "name": "Fès-Meknès",
                "isoCode": "03",
                "countryCode": "MA"
            },
            {
                "name": "Guelmim",
                "isoCode": "GUE",
                "countryCode": "MA"
            },
            {
                "name": "Guelmim-Oued Noun (EH-partial)",
                "isoCode": "10",
                "countryCode": "MA"
            },
            {
                "name": "Guercif",
                "isoCode": "GUF",
                "countryCode": "MA"
            },
            {
                "name": "Ifrane",
                "isoCode": "IFR",
                "countryCode": "MA"
            },
            {
                "name": "Inezgane-Ait Melloul",
                "isoCode": "INE",
                "countryCode": "MA"
            },
            {
                "name": "Jerada",
                "isoCode": "JRA",
                "countryCode": "MA"
            },
            {
                "name": "Khouribga",
                "isoCode": "KHO",
                "countryCode": "MA"
            },
            {
                "name": "Khémisset",
                "isoCode": "KHE",
                "countryCode": "MA"
            },
            {
                "name": "Khénifra",
                "isoCode": "KHN",
                "countryCode": "MA"
            },
            {
                "name": "Kénitra",
                "isoCode": "KEN",
                "countryCode": "MA"
            },
            {
                "name": "L'Oriental",
                "isoCode": "02",
                "countryCode": "MA"
            },
            {
                "name": "Larache",
                "isoCode": "LAR",
                "countryCode": "MA"
            },
            {
                "name": "Laâyoune (EH)",
                "isoCode": "LAA",
                "countryCode": "MA"
            },
            {
                "name": "Laâyoune-Sakia El Hamra (EH-partial)",
                "isoCode": "11",
                "countryCode": "MA"
            },
            {
                "name": "Marrakech",
                "isoCode": "MAR",
                "countryCode": "MA"
            },
            {
                "name": "Marrakesh-Safi",
                "isoCode": "07",
                "countryCode": "MA"
            },
            {
                "name": "Meknès",
                "isoCode": "MEK",
                "countryCode": "MA"
            },
            {
                "name": "Midelt",
                "isoCode": "MID",
                "countryCode": "MA"
            },
            {
                "name": "Mohammadia",
                "isoCode": "MOH",
                "countryCode": "MA"
            },
            {
                "name": "Moulay Yacoub",
                "isoCode": "MOU",
                "countryCode": "MA"
            },
            {
                "name": "Médiouna",
                "isoCode": "MED",
                "countryCode": "MA"
            },
            {
                "name": "M’diq-Fnideq",
                "isoCode": "MDF",
                "countryCode": "MA"
            },
            {
                "name": "Nador",
                "isoCode": "NAD",
                "countryCode": "MA"
            },
            {
                "name": "Nouaceur",
                "isoCode": "NOU",
                "countryCode": "MA"
            },
            {
                "name": "Ouarzazate",
                "isoCode": "OUA",
                "countryCode": "MA"
            },
            {
                "name": "Oued Ed-Dahab (EH)",
                "isoCode": "OUD",
                "countryCode": "MA"
            },
            {
                "name": "Ouezzane",
                "isoCode": "OUZ",
                "countryCode": "MA"
            },
            {
                "name": "Oujda-Angad",
                "isoCode": "OUJ",
                "countryCode": "MA"
            },
            {
                "name": "Rabat",
                "isoCode": "RAB",
                "countryCode": "MA"
            },
            {
                "name": "Rabat-Salé-Kénitra",
                "isoCode": "04",
                "countryCode": "MA"
            },
            {
                "name": "Rehamna",
                "isoCode": "REH",
                "countryCode": "MA"
            },
            {
                "name": "Safi",
                "isoCode": "SAF",
                "countryCode": "MA"
            },
            {
                "name": "Salé",
                "isoCode": "SAL",
                "countryCode": "MA"
            },
            {
                "name": "Sefrou",
                "isoCode": "SEF",
                "countryCode": "MA"
            },
            {
                "name": "Settat",
                "isoCode": "SET",
                "countryCode": "MA"
            },
            {
                "name": "Sidi Bennour",
                "isoCode": "SIB",
                "countryCode": "MA"
            },
            {
                "name": "Sidi Ifni",
                "isoCode": "SIF",
                "countryCode": "MA"
            },
            {
                "name": "Sidi Kacem",
                "isoCode": "SIK",
                "countryCode": "MA"
            },
            {
                "name": "Sidi Slimane",
                "isoCode": "SIL",
                "countryCode": "MA"
            },
            {
                "name": "Skhirate-Témara",
                "isoCode": "SKH",
                "countryCode": "MA"
            },
            {
                "name": "Souss-Massa",
                "isoCode": "09",
                "countryCode": "MA"
            },
            {
                "name": "Tan-Tan (EH-partial)",
                "isoCode": "TNT",
                "countryCode": "MA"
            },
            {
                "name": "Tanger-Assilah",
                "isoCode": "TNG",
                "countryCode": "MA"
            },
            {
                "name": "Tanger-Tétouan-Al Hoceïma",
                "isoCode": "01",
                "countryCode": "MA"
            },
            {
                "name": "Taounate",
                "isoCode": "TAO",
                "countryCode": "MA"
            },
            {
                "name": "Taourirt",
                "isoCode": "TAI",
                "countryCode": "MA"
            },
            {
                "name": "Tarfaya (EH-partial)",
                "isoCode": "TAF",
                "countryCode": "MA"
            },
            {
                "name": "Taroudannt",
                "isoCode": "TAR",
                "countryCode": "MA"
            },
            {
                "name": "Tata",
                "isoCode": "TAT",
                "countryCode": "MA"
            },
            {
                "name": "Taza",
                "isoCode": "TAZ",
                "countryCode": "MA"
            },
            {
                "name": "Tinghir",
                "isoCode": "TIN",
                "countryCode": "MA"
            },
            {
                "name": "Tiznit",
                "isoCode": "TIZ",
                "countryCode": "MA"
            },
            {
                "name": "Tétouan",
                "isoCode": "TET",
                "countryCode": "MA"
            },
            {
                "name": "Youssoufia",
                "isoCode": "YUS",
                "countryCode": "MA"
            },
            {
                "name": "Zagora",
                "isoCode": "ZAG",
                "countryCode": "MA"
            },
            {
                "name": "Cabo Delgado Province",
                "isoCode": "P",
                "countryCode": "MZ"
            },
            {
                "name": "Gaza Province",
                "isoCode": "G",
                "countryCode": "MZ"
            },
            {
                "name": "Inhambane Province",
                "isoCode": "I",
                "countryCode": "MZ"
            },
            {
                "name": "Manica Province",
                "isoCode": "B",
                "countryCode": "MZ"
            },
            {
                "name": "Maputo",
                "isoCode": "MPM",
                "countryCode": "MZ"
            },
            {
                "name": "Maputo Province",
                "isoCode": "L",
                "countryCode": "MZ"
            },
            {
                "name": "Nampula Province",
                "isoCode": "N",
                "countryCode": "MZ"
            },
            {
                "name": "Niassa Province",
                "isoCode": "A",
                "countryCode": "MZ"
            },
            {
                "name": "Sofala Province",
                "isoCode": "S",
                "countryCode": "MZ"
            },
            {
                "name": "Tete Province",
                "isoCode": "T",
                "countryCode": "MZ"
            },
            {
                "name": "Zambezia Province",
                "isoCode": "Q",
                "countryCode": "MZ"
            },
            {
                "name": "Ayeyarwady Region",
                "isoCode": "07",
                "countryCode": "MM"
            },
            {
                "name": "Bago",
                "isoCode": "02",
                "countryCode": "MM"
            },
            {
                "name": "Chin State",
                "isoCode": "14",
                "countryCode": "MM"
            },
            {
                "name": "Kachin State",
                "isoCode": "11",
                "countryCode": "MM"
            },
            {
                "name": "Kayah State",
                "isoCode": "12",
                "countryCode": "MM"
            },
            {
                "name": "Kayin State",
                "isoCode": "13",
                "countryCode": "MM"
            },
            {
                "name": "Magway Region",
                "isoCode": "03",
                "countryCode": "MM"
            },
            {
                "name": "Mandalay Region",
                "isoCode": "04",
                "countryCode": "MM"
            },
            {
                "name": "Mon State",
                "isoCode": "15",
                "countryCode": "MM"
            },
            {
                "name": "Naypyidaw Union Territory",
                "isoCode": "18",
                "countryCode": "MM"
            },
            {
                "name": "Rakhine State",
                "isoCode": "16",
                "countryCode": "MM"
            },
            {
                "name": "Sagaing Region",
                "isoCode": "01",
                "countryCode": "MM"
            },
            {
                "name": "Shan State",
                "isoCode": "17",
                "countryCode": "MM"
            },
            {
                "name": "Tanintharyi Region",
                "isoCode": "05",
                "countryCode": "MM"
            },
            {
                "name": "Yangon Region",
                "isoCode": "06",
                "countryCode": "MM"
            },
            {
                "name": "Erongo Region",
                "isoCode": "ER",
                "countryCode": "NA"
            },
            {
                "name": "Hardap Region",
                "isoCode": "HA",
                "countryCode": "NA"
            },
            {
                "name": "Karas Region",
                "isoCode": "KA",
                "countryCode": "NA"
            },
            {
                "name": "Kavango East Region",
                "isoCode": "KE",
                "countryCode": "NA"
            },
            {
                "name": "Kavango West Region",
                "isoCode": "KW",
                "countryCode": "NA"
            },
            {
                "name": "Khomas Region",
                "isoCode": "KH",
                "countryCode": "NA"
            },
            {
                "name": "Kunene Region",
                "isoCode": "KU",
                "countryCode": "NA"
            },
            {
                "name": "Ohangwena Region",
                "isoCode": "OW",
                "countryCode": "NA"
            },
            {
                "name": "Omaheke Region",
                "isoCode": "OH",
                "countryCode": "NA"
            },
            {
                "name": "Omusati Region",
                "isoCode": "OS",
                "countryCode": "NA"
            },
            {
                "name": "Oshana Region",
                "isoCode": "ON",
                "countryCode": "NA"
            },
            {
                "name": "Oshikoto Region",
                "isoCode": "OT",
                "countryCode": "NA"
            },
            {
                "name": "Otjozondjupa Region",
                "isoCode": "OD",
                "countryCode": "NA"
            },
            {
                "name": "Zambezi Region",
                "isoCode": "CA",
                "countryCode": "NA"
            },
            {
                "name": "Aiwo District",
                "isoCode": "01",
                "countryCode": "NR"
            },
            {
                "name": "Anabar District",
                "isoCode": "02",
                "countryCode": "NR"
            },
            {
                "name": "Anetan District",
                "isoCode": "03",
                "countryCode": "NR"
            },
            {
                "name": "Anibare District",
                "isoCode": "04",
                "countryCode": "NR"
            },
            {
                "name": "Baiti District",
                "isoCode": "05",
                "countryCode": "NR"
            },
            {
                "name": "Boe District",
                "isoCode": "06",
                "countryCode": "NR"
            },
            {
                "name": "Buada District",
                "isoCode": "07",
                "countryCode": "NR"
            },
            {
                "name": "Denigomodu District",
                "isoCode": "08",
                "countryCode": "NR"
            },
            {
                "name": "Ewa District",
                "isoCode": "09",
                "countryCode": "NR"
            },
            {
                "name": "Ijuw District",
                "isoCode": "10",
                "countryCode": "NR"
            },
            {
                "name": "Meneng District",
                "isoCode": "11",
                "countryCode": "NR"
            },
            {
                "name": "Nibok District",
                "isoCode": "12",
                "countryCode": "NR"
            },
            {
                "name": "Uaboe District",
                "isoCode": "13",
                "countryCode": "NR"
            },
            {
                "name": "Yaren District",
                "isoCode": "14",
                "countryCode": "NR"
            },
            {
                "name": "Bagmati Zone",
                "isoCode": "BA",
                "countryCode": "NP"
            },
            {
                "name": "Bheri Zone",
                "isoCode": "BH",
                "countryCode": "NP"
            },
            {
                "name": "Central Region",
                "isoCode": "1",
                "countryCode": "NP"
            },
            {
                "name": "Dhaulagiri Zone",
                "isoCode": "DH",
                "countryCode": "NP"
            },
            {
                "name": "Eastern Development Region",
                "isoCode": "4",
                "countryCode": "NP"
            },
            {
                "name": "Far-Western Development Region",
                "isoCode": "5",
                "countryCode": "NP"
            },
            {
                "name": "Gandaki Zone",
                "isoCode": "GA",
                "countryCode": "NP"
            },
            {
                "name": "Janakpur Zone",
                "isoCode": "JA",
                "countryCode": "NP"
            },
            {
                "name": "Karnali Zone",
                "isoCode": "KA",
                "countryCode": "NP"
            },
            {
                "name": "Kosi Zone",
                "isoCode": "KO",
                "countryCode": "NP"
            },
            {
                "name": "Lumbini Zone",
                "isoCode": "LU",
                "countryCode": "NP"
            },
            {
                "name": "Mahakali Zone",
                "isoCode": "MA",
                "countryCode": "NP"
            },
            {
                "name": "Mechi Zone",
                "isoCode": "ME",
                "countryCode": "NP"
            },
            {
                "name": "Mid-Western Region",
                "isoCode": "2",
                "countryCode": "NP"
            },
            {
                "name": "Narayani Zone",
                "isoCode": "NA",
                "countryCode": "NP"
            },
            {
                "name": "Rapti Zone",
                "isoCode": "RA",
                "countryCode": "NP"
            },
            {
                "name": "Sagarmatha Zone",
                "isoCode": "SA",
                "countryCode": "NP"
            },
            {
                "name": "Seti Zone",
                "isoCode": "SE",
                "countryCode": "NP"
            },
            {
                "name": "Western Region",
                "isoCode": "3",
                "countryCode": "NP"
            },
            {
                "name": "Bonaire",
                "isoCode": "BQ1",
                "countryCode": "NL"
            },
            {
                "name": "Drenthe",
                "isoCode": "DR",
                "countryCode": "NL"
            },
            {
                "name": "Flevoland",
                "isoCode": "FL",
                "countryCode": "NL"
            },
            {
                "name": "Friesland",
                "isoCode": "FR",
                "countryCode": "NL"
            },
            {
                "name": "Gelderland",
                "isoCode": "GE",
                "countryCode": "NL"
            },
            {
                "name": "Groningen",
                "isoCode": "GR",
                "countryCode": "NL"
            },
            {
                "name": "Limburg",
                "isoCode": "LI",
                "countryCode": "NL"
            },
            {
                "name": "North Brabant",
                "isoCode": "NB",
                "countryCode": "NL"
            },
            {
                "name": "North Holland",
                "isoCode": "NH",
                "countryCode": "NL"
            },
            {
                "name": "Overijssel",
                "isoCode": "OV",
                "countryCode": "NL"
            },
            {
                "name": "Saba",
                "isoCode": "BQ2",
                "countryCode": "NL"
            },
            {
                "name": "Sint Eustatius",
                "isoCode": "BQ3",
                "countryCode": "NL"
            },
            {
                "name": "South Holland",
                "isoCode": "ZH",
                "countryCode": "NL"
            },
            {
                "name": "Utrecht",
                "isoCode": "UT",
                "countryCode": "NL"
            },
            {
                "name": "Zeeland",
                "isoCode": "ZE",
                "countryCode": "NL"
            },
            {
                "name": "Auckland Region",
                "isoCode": "AUK",
                "countryCode": "NZ"
            },
            {
                "name": "Bay of Plenty Region",
                "isoCode": "BOP",
                "countryCode": "NZ"
            },
            {
                "name": "Canterbury Region",
                "isoCode": "CAN",
                "countryCode": "NZ"
            },
            {
                "name": "Chatham Islands",
                "isoCode": "CIT",
                "countryCode": "NZ"
            },
            {
                "name": "Gisborne District",
                "isoCode": "GIS",
                "countryCode": "NZ"
            },
            {
                "name": "Hawke's Bay Region",
                "isoCode": "HKB",
                "countryCode": "NZ"
            },
            {
                "name": "Manawatu-Wanganui Region",
                "isoCode": "MWT",
                "countryCode": "NZ"
            },
            {
                "name": "Marlborough Region",
                "isoCode": "MBH",
                "countryCode": "NZ"
            },
            {
                "name": "Nelson Region",
                "isoCode": "NSN",
                "countryCode": "NZ"
            },
            {
                "name": "Northland Region",
                "isoCode": "NTL",
                "countryCode": "NZ"
            },
            {
                "name": "Otago Region",
                "isoCode": "OTA",
                "countryCode": "NZ"
            },
            {
                "name": "Southland Region",
                "isoCode": "STL",
                "countryCode": "NZ"
            },
            {
                "name": "Taranaki Region",
                "isoCode": "TKI",
                "countryCode": "NZ"
            },
            {
                "name": "Tasman District",
                "isoCode": "TAS",
                "countryCode": "NZ"
            },
            {
                "name": "Waikato Region",
                "isoCode": "WKO",
                "countryCode": "NZ"
            },
            {
                "name": "Wellington Region",
                "isoCode": "WGN",
                "countryCode": "NZ"
            },
            {
                "name": "West Coast Region",
                "isoCode": "WTC",
                "countryCode": "NZ"
            },
            {
                "name": "Boaco",
                "isoCode": "BO",
                "countryCode": "NI"
            },
            {
                "name": "Carazo",
                "isoCode": "CA",
                "countryCode": "NI"
            },
            {
                "name": "Chinandega",
                "isoCode": "CI",
                "countryCode": "NI"
            },
            {
                "name": "Chontales",
                "isoCode": "CO",
                "countryCode": "NI"
            },
            {
                "name": "Estelí",
                "isoCode": "ES",
                "countryCode": "NI"
            },
            {
                "name": "Granada",
                "isoCode": "GR",
                "countryCode": "NI"
            },
            {
                "name": "Jinotega",
                "isoCode": "JI",
                "countryCode": "NI"
            },
            {
                "name": "León",
                "isoCode": "LE",
                "countryCode": "NI"
            },
            {
                "name": "Madriz",
                "isoCode": "MD",
                "countryCode": "NI"
            },
            {
                "name": "Managua",
                "isoCode": "MN",
                "countryCode": "NI"
            },
            {
                "name": "Masaya",
                "isoCode": "MS",
                "countryCode": "NI"
            },
            {
                "name": "Matagalpa",
                "isoCode": "MT",
                "countryCode": "NI"
            },
            {
                "name": "North Caribbean Coast",
                "isoCode": "AN",
                "countryCode": "NI"
            },
            {
                "name": "Nueva Segovia",
                "isoCode": "NS",
                "countryCode": "NI"
            },
            {
                "name": "Rivas",
                "isoCode": "RI",
                "countryCode": "NI"
            },
            {
                "name": "Río San Juan",
                "isoCode": "SJ",
                "countryCode": "NI"
            },
            {
                "name": "South Caribbean Coast",
                "isoCode": "AS",
                "countryCode": "NI"
            },
            {
                "name": "Agadez Region",
                "isoCode": "1",
                "countryCode": "NE"
            },
            {
                "name": "Diffa Region",
                "isoCode": "2",
                "countryCode": "NE"
            },
            {
                "name": "Dosso Region",
                "isoCode": "3",
                "countryCode": "NE"
            },
            {
                "name": "Maradi Region",
                "isoCode": "4",
                "countryCode": "NE"
            },
            {
                "name": "Tahoua Region",
                "isoCode": "5",
                "countryCode": "NE"
            },
            {
                "name": "Tillabéri Region",
                "isoCode": "6",
                "countryCode": "NE"
            },
            {
                "name": "Zinder Region",
                "isoCode": "7",
                "countryCode": "NE"
            },
            {
                "name": "Abia",
                "isoCode": "AB",
                "countryCode": "NG"
            },
            {
                "name": "Abuja Federal Capital Territory",
                "isoCode": "FC",
                "countryCode": "NG"
            },
            {
                "name": "Adamawa",
                "isoCode": "AD",
                "countryCode": "NG"
            },
            {
                "name": "Akwa Ibom",
                "isoCode": "AK",
                "countryCode": "NG"
            },
            {
                "name": "Anambra",
                "isoCode": "AN",
                "countryCode": "NG"
            },
            {
                "name": "Bauchi",
                "isoCode": "BA",
                "countryCode": "NG"
            },
            {
                "name": "Bayelsa",
                "isoCode": "BY",
                "countryCode": "NG"
            },
            {
                "name": "Benue",
                "isoCode": "BE",
                "countryCode": "NG"
            },
            {
                "name": "Borno",
                "isoCode": "BO",
                "countryCode": "NG"
            },
            {
                "name": "Cross River",
                "isoCode": "CR",
                "countryCode": "NG"
            },
            {
                "name": "Delta",
                "isoCode": "DE",
                "countryCode": "NG"
            },
            {
                "name": "Ebonyi",
                "isoCode": "EB",
                "countryCode": "NG"
            },
            {
                "name": "Edo",
                "isoCode": "ED",
                "countryCode": "NG"
            },
            {
                "name": "Ekiti",
                "isoCode": "EK",
                "countryCode": "NG"
            },
            {
                "name": "Enugu",
                "isoCode": "EN",
                "countryCode": "NG"
            },
            {
                "name": "Gombe",
                "isoCode": "GO",
                "countryCode": "NG"
            },
            {
                "name": "Imo",
                "isoCode": "IM",
                "countryCode": "NG"
            },
            {
                "name": "Jigawa",
                "isoCode": "JI",
                "countryCode": "NG"
            },
            {
                "name": "Kaduna",
                "isoCode": "KD",
                "countryCode": "NG"
            },
            {
                "name": "Kano",
                "isoCode": "KN",
                "countryCode": "NG"
            },
            {
                "name": "Katsina",
                "isoCode": "KT",
                "countryCode": "NG"
            },
            {
                "name": "Kebbi",
                "isoCode": "KE",
                "countryCode": "NG"
            },
            {
                "name": "Kogi",
                "isoCode": "KO",
                "countryCode": "NG"
            },
            {
                "name": "Kwara",
                "isoCode": "KW",
                "countryCode": "NG"
            },
            {
                "name": "Lagos",
                "isoCode": "LA",
                "countryCode": "NG"
            },
            {
                "name": "Nasarawa",
                "isoCode": "NA",
                "countryCode": "NG"
            },
            {
                "name": "Niger",
                "isoCode": "NI",
                "countryCode": "NG"
            },
            {
                "name": "Ogun",
                "isoCode": "OG",
                "countryCode": "NG"
            },
            {
                "name": "Ondo",
                "isoCode": "ON",
                "countryCode": "NG"
            },
            {
                "name": "Osun",
                "isoCode": "OS",
                "countryCode": "NG"
            },
            {
                "name": "Oyo",
                "isoCode": "OY",
                "countryCode": "NG"
            },
            {
                "name": "Plateau",
                "isoCode": "PL",
                "countryCode": "NG"
            },
            {
                "name": "Rivers",
                "isoCode": "RI",
                "countryCode": "NG"
            },
            {
                "name": "Sokoto",
                "isoCode": "SO",
                "countryCode": "NG"
            },
            {
                "name": "Taraba",
                "isoCode": "TA",
                "countryCode": "NG"
            },
            {
                "name": "Yobe",
                "isoCode": "YO",
                "countryCode": "NG"
            },
            {
                "name": "Zamfara",
                "isoCode": "ZA",
                "countryCode": "NG"
            },
            {
                "name": "Akershus",
                "isoCode": "02",
                "countryCode": "NO"
            },
            {
                "name": "Buskerud",
                "isoCode": "06",
                "countryCode": "NO"
            },
            {
                "name": "Finnmark",
                "isoCode": "20",
                "countryCode": "NO"
            },
            {
                "name": "Hedmark",
                "isoCode": "04",
                "countryCode": "NO"
            },
            {
                "name": "Hordaland",
                "isoCode": "12",
                "countryCode": "NO"
            },
            {
                "name": "Jan Mayen",
                "isoCode": "22",
                "countryCode": "NO"
            },
            {
                "name": "Møre og Romsdal",
                "isoCode": "15",
                "countryCode": "NO"
            },
            {
                "name": "Nord-Trøndelag",
                "isoCode": "17",
                "countryCode": "NO"
            },
            {
                "name": "Nordland",
                "isoCode": "18",
                "countryCode": "NO"
            },
            {
                "name": "Oppland",
                "isoCode": "05",
                "countryCode": "NO"
            },
            {
                "name": "Oslo",
                "isoCode": "03",
                "countryCode": "NO"
            },
            {
                "name": "Rogaland",
                "isoCode": "11",
                "countryCode": "NO"
            },
            {
                "name": "Sogn og Fjordane",
                "isoCode": "14",
                "countryCode": "NO"
            },
            {
                "name": "Svalbard",
                "isoCode": "21",
                "countryCode": "NO"
            },
            {
                "name": "Sør-Trøndelag",
                "isoCode": "16",
                "countryCode": "NO"
            },
            {
                "name": "Telemark",
                "isoCode": "08",
                "countryCode": "NO"
            },
            {
                "name": "Troms",
                "isoCode": "19",
                "countryCode": "NO"
            },
            {
                "name": "Trøndelag",
                "isoCode": "50",
                "countryCode": "NO"
            },
            {
                "name": "Vest-Agder",
                "isoCode": "10",
                "countryCode": "NO"
            },
            {
                "name": "Vestfold",
                "isoCode": "07",
                "countryCode": "NO"
            },
            {
                "name": "Østfold",
                "isoCode": "01",
                "countryCode": "NO"
            },
            {
                "name": "Ad Dakhiliyah Governorate",
                "isoCode": "DA",
                "countryCode": "OM"
            },
            {
                "name": "Ad Dhahirah Governorate",
                "isoCode": "ZA",
                "countryCode": "OM"
            },
            {
                "name": "Al Batinah North Governorate",
                "isoCode": "BS",
                "countryCode": "OM"
            },
            {
                "name": "Al Batinah Region",
                "isoCode": "BA",
                "countryCode": "OM"
            },
            {
                "name": "Al Batinah South Governorate",
                "isoCode": "BJ",
                "countryCode": "OM"
            },
            {
                "name": "Al Buraimi Governorate",
                "isoCode": "BU",
                "countryCode": "OM"
            },
            {
                "name": "Al Wusta Governorate",
                "isoCode": "WU",
                "countryCode": "OM"
            },
            {
                "name": "Ash Sharqiyah North Governorate",
                "isoCode": "SS",
                "countryCode": "OM"
            },
            {
                "name": "Ash Sharqiyah Region",
                "isoCode": "SH",
                "countryCode": "OM"
            },
            {
                "name": "Ash Sharqiyah South Governorate",
                "isoCode": "SJ",
                "countryCode": "OM"
            },
            {
                "name": "Dhofar Governorate",
                "isoCode": "ZU",
                "countryCode": "OM"
            },
            {
                "name": "Musandam Governorate",
                "isoCode": "MU",
                "countryCode": "OM"
            },
            {
                "name": "Muscat Governorate",
                "isoCode": "MA",
                "countryCode": "OM"
            },
            {
                "name": "Azad Kashmir",
                "isoCode": "JK",
                "countryCode": "PK"
            },
            {
                "name": "Balochistan",
                "isoCode": "BA",
                "countryCode": "PK"
            },
            {
                "name": "Federally Administered Tribal Areas",
                "isoCode": "TA",
                "countryCode": "PK"
            },
            {
                "name": "Gilgit-Baltistan",
                "isoCode": "GB",
                "countryCode": "PK"
            },
            {
                "name": "Islamabad Capital Territory",
                "isoCode": "IS",
                "countryCode": "PK"
            },
            {
                "name": "Khyber Pakhtunkhwa",
                "isoCode": "KP",
                "countryCode": "PK"
            },
            {
                "name": "Punjab",
                "isoCode": "PB",
                "countryCode": "PK"
            },
            {
                "name": "Sindh",
                "isoCode": "SD",
                "countryCode": "PK"
            },
            {
                "name": "Aimeliik",
                "isoCode": "002",
                "countryCode": "PW"
            },
            {
                "name": "Airai",
                "isoCode": "004",
                "countryCode": "PW"
            },
            {
                "name": "Angaur",
                "isoCode": "010",
                "countryCode": "PW"
            },
            {
                "name": "Hatohobei",
                "isoCode": "050",
                "countryCode": "PW"
            },
            {
                "name": "Kayangel",
                "isoCode": "100",
                "countryCode": "PW"
            },
            {
                "name": "Koror",
                "isoCode": "150",
                "countryCode": "PW"
            },
            {
                "name": "Melekeok",
                "isoCode": "212",
                "countryCode": "PW"
            },
            {
                "name": "Ngaraard",
                "isoCode": "214",
                "countryCode": "PW"
            },
            {
                "name": "Ngarchelong",
                "isoCode": "218",
                "countryCode": "PW"
            },
            {
                "name": "Ngardmau",
                "isoCode": "222",
                "countryCode": "PW"
            },
            {
                "name": "Ngatpang",
                "isoCode": "224",
                "countryCode": "PW"
            },
            {
                "name": "Ngchesar",
                "isoCode": "226",
                "countryCode": "PW"
            },
            {
                "name": "Ngeremlengui",
                "isoCode": "227",
                "countryCode": "PW"
            },
            {
                "name": "Ngiwal",
                "isoCode": "228",
                "countryCode": "PW"
            },
            {
                "name": "Peleliu",
                "isoCode": "350",
                "countryCode": "PW"
            },
            {
                "name": "Sonsorol",
                "isoCode": "370",
                "countryCode": "PW"
            },
            {
                "name": "Bocas del Toro Province",
                "isoCode": "1",
                "countryCode": "PA"
            },
            {
                "name": "Chiriquí Province",
                "isoCode": "4",
                "countryCode": "PA"
            },
            {
                "name": "Coclé Province",
                "isoCode": "2",
                "countryCode": "PA"
            },
            {
                "name": "Colón Province",
                "isoCode": "3",
                "countryCode": "PA"
            },
            {
                "name": "Darién Province",
                "isoCode": "5",
                "countryCode": "PA"
            },
            {
                "name": "Emberá-Wounaan Comarca",
                "isoCode": "EM",
                "countryCode": "PA"
            },
            {
                "name": "Guna Yala",
                "isoCode": "KY",
                "countryCode": "PA"
            },
            {
                "name": "Herrera Province",
                "isoCode": "6",
                "countryCode": "PA"
            },
            {
                "name": "Los Santos Province",
                "isoCode": "7",
                "countryCode": "PA"
            },
            {
                "name": "Ngöbe-Buglé Comarca",
                "isoCode": "NB",
                "countryCode": "PA"
            },
            {
                "name": "Panamá Oeste Province",
                "isoCode": "10",
                "countryCode": "PA"
            },
            {
                "name": "Panamá Province",
                "isoCode": "8",
                "countryCode": "PA"
            },
            {
                "name": "Veraguas Province",
                "isoCode": "9",
                "countryCode": "PA"
            },
            {
                "name": "Bougainville",
                "isoCode": "NSB",
                "countryCode": "PG"
            },
            {
                "name": "Central Province",
                "isoCode": "CPM",
                "countryCode": "PG"
            },
            {
                "name": "Chimbu Province",
                "isoCode": "CPK",
                "countryCode": "PG"
            },
            {
                "name": "East New Britain",
                "isoCode": "EBR",
                "countryCode": "PG"
            },
            {
                "name": "Eastern Highlands Province",
                "isoCode": "EHG",
                "countryCode": "PG"
            },
            {
                "name": "Enga Province",
                "isoCode": "EPW",
                "countryCode": "PG"
            },
            {
                "name": "Gulf",
                "isoCode": "GPK",
                "countryCode": "PG"
            },
            {
                "name": "Hela",
                "isoCode": "HLA",
                "countryCode": "PG"
            },
            {
                "name": "Jiwaka Province",
                "isoCode": "JWK",
                "countryCode": "PG"
            },
            {
                "name": "Madang Province",
                "isoCode": "MPM",
                "countryCode": "PG"
            },
            {
                "name": "Manus Province",
                "isoCode": "MRL",
                "countryCode": "PG"
            },
            {
                "name": "Milne Bay Province",
                "isoCode": "MBA",
                "countryCode": "PG"
            },
            {
                "name": "Morobe Province",
                "isoCode": "MPL",
                "countryCode": "PG"
            },
            {
                "name": "New Ireland Province",
                "isoCode": "NIK",
                "countryCode": "PG"
            },
            {
                "name": "Oro Province",
                "isoCode": "NPP",
                "countryCode": "PG"
            },
            {
                "name": "Port Moresby",
                "isoCode": "NCD",
                "countryCode": "PG"
            },
            {
                "name": "Sandaun Province",
                "isoCode": "SAN",
                "countryCode": "PG"
            },
            {
                "name": "Southern Highlands Province",
                "isoCode": "SHM",
                "countryCode": "PG"
            },
            {
                "name": "West New Britain Province",
                "isoCode": "WBK",
                "countryCode": "PG"
            },
            {
                "name": "Western Highlands Province",
                "isoCode": "WHM",
                "countryCode": "PG"
            },
            {
                "name": "Western Province",
                "isoCode": "WPD",
                "countryCode": "PG"
            },
            {
                "name": "Alto Paraguay Department",
                "isoCode": "16",
                "countryCode": "PY"
            },
            {
                "name": "Alto Paraná Department",
                "isoCode": "10",
                "countryCode": "PY"
            },
            {
                "name": "Amambay Department",
                "isoCode": "13",
                "countryCode": "PY"
            },
            {
                "name": "Boquerón Department",
                "isoCode": "19",
                "countryCode": "PY"
            },
            {
                "name": "Caaguazú",
                "isoCode": "5",
                "countryCode": "PY"
            },
            {
                "name": "Caazapá",
                "isoCode": "6",
                "countryCode": "PY"
            },
            {
                "name": "Canindeyú",
                "isoCode": "14",
                "countryCode": "PY"
            },
            {
                "name": "Central Department",
                "isoCode": "11",
                "countryCode": "PY"
            },
            {
                "name": "Concepción Department",
                "isoCode": "1",
                "countryCode": "PY"
            },
            {
                "name": "Cordillera Department",
                "isoCode": "3",
                "countryCode": "PY"
            },
            {
                "name": "Guairá Department",
                "isoCode": "4",
                "countryCode": "PY"
            },
            {
                "name": "Itapúa",
                "isoCode": "7",
                "countryCode": "PY"
            },
            {
                "name": "Misiones Department",
                "isoCode": "8",
                "countryCode": "PY"
            },
            {
                "name": "Paraguarí Department",
                "isoCode": "9",
                "countryCode": "PY"
            },
            {
                "name": "Presidente Hayes Department",
                "isoCode": "15",
                "countryCode": "PY"
            },
            {
                "name": "San Pedro Department",
                "isoCode": "2",
                "countryCode": "PY"
            },
            {
                "name": "Ñeembucú Department",
                "isoCode": "12",
                "countryCode": "PY"
            },
            {
                "name": "Amazonas",
                "isoCode": "AMA",
                "countryCode": "PE"
            },
            {
                "name": "Apurímac",
                "isoCode": "APU",
                "countryCode": "PE"
            },
            {
                "name": "Arequipa",
                "isoCode": "ARE",
                "countryCode": "PE"
            },
            {
                "name": "Ayacucho",
                "isoCode": "AYA",
                "countryCode": "PE"
            },
            {
                "name": "Cajamarca",
                "isoCode": "CAJ",
                "countryCode": "PE"
            },
            {
                "name": "Callao",
                "isoCode": "CAL",
                "countryCode": "PE"
            },
            {
                "name": "Cusco",
                "isoCode": "CUS",
                "countryCode": "PE"
            },
            {
                "name": "Huancavelica",
                "isoCode": "HUV",
                "countryCode": "PE"
            },
            {
                "name": "Huanuco",
                "isoCode": "HUC",
                "countryCode": "PE"
            },
            {
                "name": "Ica",
                "isoCode": "ICA",
                "countryCode": "PE"
            },
            {
                "name": "Junín",
                "isoCode": "JUN",
                "countryCode": "PE"
            },
            {
                "name": "La Libertad",
                "isoCode": "LAL",
                "countryCode": "PE"
            },
            {
                "name": "Lambayeque",
                "isoCode": "LAM",
                "countryCode": "PE"
            },
            {
                "name": "Lima",
                "isoCode": "LIM",
                "countryCode": "PE"
            },
            {
                "name": "Loreto",
                "isoCode": "LOR",
                "countryCode": "PE"
            },
            {
                "name": "Madre de Dios",
                "isoCode": "MDD",
                "countryCode": "PE"
            },
            {
                "name": "Moquegua",
                "isoCode": "MOQ",
                "countryCode": "PE"
            },
            {
                "name": "Pasco",
                "isoCode": "PAS",
                "countryCode": "PE"
            },
            {
                "name": "Piura",
                "isoCode": "PIU",
                "countryCode": "PE"
            },
            {
                "name": "Puno",
                "isoCode": "PUN",
                "countryCode": "PE"
            },
            {
                "name": "San Martín",
                "isoCode": "SAM",
                "countryCode": "PE"
            },
            {
                "name": "Tacna",
                "isoCode": "TAC",
                "countryCode": "PE"
            },
            {
                "name": "Tumbes",
                "isoCode": "TUM",
                "countryCode": "PE"
            },
            {
                "name": "Ucayali",
                "isoCode": "UCA",
                "countryCode": "PE"
            },
            {
                "name": "Áncash",
                "isoCode": "ANC",
                "countryCode": "PE"
            },
            {
                "name": "Abra",
                "isoCode": "ABR",
                "countryCode": "PH"
            },
            {
                "name": "Agusan del Norte",
                "isoCode": "AGN",
                "countryCode": "PH"
            },
            {
                "name": "Agusan del Sur",
                "isoCode": "AGS",
                "countryCode": "PH"
            },
            {
                "name": "Aklan",
                "isoCode": "AKL",
                "countryCode": "PH"
            },
            {
                "name": "Albay",
                "isoCode": "ALB",
                "countryCode": "PH"
            },
            {
                "name": "Antique",
                "isoCode": "ANT",
                "countryCode": "PH"
            },
            {
                "name": "Apayao",
                "isoCode": "APA",
                "countryCode": "PH"
            },
            {
                "name": "Aurora",
                "isoCode": "AUR",
                "countryCode": "PH"
            },
            {
                "name": "Autonomous Region in Muslim Mindanao",
                "isoCode": "14",
                "countryCode": "PH"
            },
            {
                "name": "Basilan",
                "isoCode": "BAS",
                "countryCode": "PH"
            },
            {
                "name": "Bataan",
                "isoCode": "BAN",
                "countryCode": "PH"
            },
            {
                "name": "Batanes",
                "isoCode": "BTN",
                "countryCode": "PH"
            },
            {
                "name": "Batangas",
                "isoCode": "BTG",
                "countryCode": "PH"
            },
            {
                "name": "Benguet",
                "isoCode": "BEN",
                "countryCode": "PH"
            },
            {
                "name": "Bicol Region",
                "isoCode": "05",
                "countryCode": "PH"
            },
            {
                "name": "Biliran",
                "isoCode": "BIL",
                "countryCode": "PH"
            },
            {
                "name": "Bohol",
                "isoCode": "BOH",
                "countryCode": "PH"
            },
            {
                "name": "Bukidnon",
                "isoCode": "BUK",
                "countryCode": "PH"
            },
            {
                "name": "Bulacan",
                "isoCode": "BUL",
                "countryCode": "PH"
            },
            {
                "name": "Cagayan",
                "isoCode": "CAG",
                "countryCode": "PH"
            },
            {
                "name": "Cagayan Valley",
                "isoCode": "02",
                "countryCode": "PH"
            },
            {
                "name": "Calabarzon",
                "isoCode": "40",
                "countryCode": "PH"
            },
            {
                "name": "Camarines Norte",
                "isoCode": "CAN",
                "countryCode": "PH"
            },
            {
                "name": "Camarines Sur",
                "isoCode": "CAS",
                "countryCode": "PH"
            },
            {
                "name": "Camiguin",
                "isoCode": "CAM",
                "countryCode": "PH"
            },
            {
                "name": "Capiz",
                "isoCode": "CAP",
                "countryCode": "PH"
            },
            {
                "name": "Caraga",
                "isoCode": "13",
                "countryCode": "PH"
            },
            {
                "name": "Catanduanes",
                "isoCode": "CAT",
                "countryCode": "PH"
            },
            {
                "name": "Cavite",
                "isoCode": "CAV",
                "countryCode": "PH"
            },
            {
                "name": "Cebu",
                "isoCode": "CEB",
                "countryCode": "PH"
            },
            {
                "name": "Central Luzon",
                "isoCode": "03",
                "countryCode": "PH"
            },
            {
                "name": "Central Visayas",
                "isoCode": "07",
                "countryCode": "PH"
            },
            {
                "name": "Compostela Valley",
                "isoCode": "COM",
                "countryCode": "PH"
            },
            {
                "name": "Cordillera Administrative Region",
                "isoCode": "15",
                "countryCode": "PH"
            },
            {
                "name": "Cotabato",
                "isoCode": "NCO",
                "countryCode": "PH"
            },
            {
                "name": "Davao Occidental",
                "isoCode": "DVO",
                "countryCode": "PH"
            },
            {
                "name": "Davao Oriental",
                "isoCode": "DAO",
                "countryCode": "PH"
            },
            {
                "name": "Davao Region",
                "isoCode": "11",
                "countryCode": "PH"
            },
            {
                "name": "Davao del Norte",
                "isoCode": "DAV",
                "countryCode": "PH"
            },
            {
                "name": "Davao del Sur",
                "isoCode": "DAS",
                "countryCode": "PH"
            },
            {
                "name": "Dinagat Islands",
                "isoCode": "DIN",
                "countryCode": "PH"
            },
            {
                "name": "Eastern Samar",
                "isoCode": "EAS",
                "countryCode": "PH"
            },
            {
                "name": "Eastern Visayas",
                "isoCode": "08",
                "countryCode": "PH"
            },
            {
                "name": "Guimaras",
                "isoCode": "GUI",
                "countryCode": "PH"
            },
            {
                "name": "Ifugao",
                "isoCode": "IFU",
                "countryCode": "PH"
            },
            {
                "name": "Ilocos Norte",
                "isoCode": "ILN",
                "countryCode": "PH"
            },
            {
                "name": "Ilocos Region",
                "isoCode": "01",
                "countryCode": "PH"
            },
            {
                "name": "Ilocos Sur",
                "isoCode": "ILS",
                "countryCode": "PH"
            },
            {
                "name": "Iloilo",
                "isoCode": "ILI",
                "countryCode": "PH"
            },
            {
                "name": "Isabela",
                "isoCode": "ISA",
                "countryCode": "PH"
            },
            {
                "name": "Kalinga",
                "isoCode": "KAL",
                "countryCode": "PH"
            },
            {
                "name": "La Union",
                "isoCode": "LUN",
                "countryCode": "PH"
            },
            {
                "name": "Laguna",
                "isoCode": "LAG",
                "countryCode": "PH"
            },
            {
                "name": "Lanao del Norte",
                "isoCode": "LAN",
                "countryCode": "PH"
            },
            {
                "name": "Lanao del Sur",
                "isoCode": "LAS",
                "countryCode": "PH"
            },
            {
                "name": "Leyte",
                "isoCode": "LEY",
                "countryCode": "PH"
            },
            {
                "name": "Maguindanao",
                "isoCode": "MAG",
                "countryCode": "PH"
            },
            {
                "name": "Marinduque",
                "isoCode": "MAD",
                "countryCode": "PH"
            },
            {
                "name": "Masbate",
                "isoCode": "MAS",
                "countryCode": "PH"
            },
            {
                "name": "Metro Manila",
                "isoCode": "NCR",
                "countryCode": "PH"
            },
            {
                "name": "Mimaropa",
                "isoCode": "41",
                "countryCode": "PH"
            },
            {
                "name": "Misamis Occidental",
                "isoCode": "MSC",
                "countryCode": "PH"
            },
            {
                "name": "Misamis Oriental",
                "isoCode": "MSR",
                "countryCode": "PH"
            },
            {
                "name": "Mountain Province",
                "isoCode": "MOU",
                "countryCode": "PH"
            },
            {
                "name": "Negros Occidental",
                "isoCode": "NEC",
                "countryCode": "PH"
            },
            {
                "name": "Negros Oriental",
                "isoCode": "NER",
                "countryCode": "PH"
            },
            {
                "name": "Northern Mindanao",
                "isoCode": "10",
                "countryCode": "PH"
            },
            {
                "name": "Northern Samar",
                "isoCode": "NSA",
                "countryCode": "PH"
            },
            {
                "name": "Nueva Ecija",
                "isoCode": "NUE",
                "countryCode": "PH"
            },
            {
                "name": "Nueva Vizcaya",
                "isoCode": "NUV",
                "countryCode": "PH"
            },
            {
                "name": "Occidental Mindoro",
                "isoCode": "MDC",
                "countryCode": "PH"
            },
            {
                "name": "Oriental Mindoro",
                "isoCode": "MDR",
                "countryCode": "PH"
            },
            {
                "name": "Palawan",
                "isoCode": "PLW",
                "countryCode": "PH"
            },
            {
                "name": "Pampanga",
                "isoCode": "PAM",
                "countryCode": "PH"
            },
            {
                "name": "Pangasinan",
                "isoCode": "PAN",
                "countryCode": "PH"
            },
            {
                "name": "Quezon",
                "isoCode": "QUE",
                "countryCode": "PH"
            },
            {
                "name": "Quirino",
                "isoCode": "QUI",
                "countryCode": "PH"
            },
            {
                "name": "Rizal",
                "isoCode": "RIZ",
                "countryCode": "PH"
            },
            {
                "name": "Romblon",
                "isoCode": "ROM",
                "countryCode": "PH"
            },
            {
                "name": "Sarangani",
                "isoCode": "SAR",
                "countryCode": "PH"
            },
            {
                "name": "Siquijor",
                "isoCode": "SIG",
                "countryCode": "PH"
            },
            {
                "name": "Soccsksargen",
                "isoCode": "12",
                "countryCode": "PH"
            },
            {
                "name": "Sorsogon",
                "isoCode": "SOR",
                "countryCode": "PH"
            },
            {
                "name": "South Cotabato",
                "isoCode": "SCO",
                "countryCode": "PH"
            },
            {
                "name": "Southern Leyte",
                "isoCode": "SLE",
                "countryCode": "PH"
            },
            {
                "name": "Sultan Kudarat",
                "isoCode": "SUK",
                "countryCode": "PH"
            },
            {
                "name": "Sulu",
                "isoCode": "SLU",
                "countryCode": "PH"
            },
            {
                "name": "Surigao del Norte",
                "isoCode": "SUN",
                "countryCode": "PH"
            },
            {
                "name": "Surigao del Sur",
                "isoCode": "SUR",
                "countryCode": "PH"
            },
            {
                "name": "Tarlac",
                "isoCode": "TAR",
                "countryCode": "PH"
            },
            {
                "name": "Tawi-Tawi",
                "isoCode": "TAW",
                "countryCode": "PH"
            },
            {
                "name": "Western Visayas",
                "isoCode": "06",
                "countryCode": "PH"
            },
            {
                "name": "Zambales",
                "isoCode": "ZMB",
                "countryCode": "PH"
            },
            {
                "name": "Zamboanga Peninsula",
                "isoCode": "09",
                "countryCode": "PH"
            },
            {
                "name": "Zamboanga Sibugay",
                "isoCode": "ZSI",
                "countryCode": "PH"
            },
            {
                "name": "Zamboanga del Norte",
                "isoCode": "ZAN",
                "countryCode": "PH"
            },
            {
                "name": "Zamboanga del Sur",
                "isoCode": "ZAS",
                "countryCode": "PH"
            },
            {
                "name": "Greater Poland Voivodeship",
                "isoCode": "WP",
                "countryCode": "PL"
            },
            {
                "name": "Kuyavian-Pomeranian Voivodeship",
                "isoCode": "KP",
                "countryCode": "PL"
            },
            {
                "name": "Lesser Poland Voivodeship",
                "isoCode": "MA",
                "countryCode": "PL"
            },
            {
                "name": "Lower Silesian Voivodeship",
                "isoCode": "DS",
                "countryCode": "PL"
            },
            {
                "name": "Lublin Voivodeship",
                "isoCode": "LU",
                "countryCode": "PL"
            },
            {
                "name": "Lubusz Voivodeship",
                "isoCode": "LB",
                "countryCode": "PL"
            },
            {
                "name": "Masovian Voivodeship",
                "isoCode": "MZ",
                "countryCode": "PL"
            },
            {
                "name": "Opole Voivodeship",
                "isoCode": "OP",
                "countryCode": "PL"
            },
            {
                "name": "Podkarpackie Voivodeship",
                "isoCode": "PK",
                "countryCode": "PL"
            },
            {
                "name": "Podlaskie Voivodeship",
                "isoCode": "PD",
                "countryCode": "PL"
            },
            {
                "name": "Pomeranian Voivodeship",
                "isoCode": "PM",
                "countryCode": "PL"
            },
            {
                "name": "Silesian Voivodeship",
                "isoCode": "SL",
                "countryCode": "PL"
            },
            {
                "name": "Warmian-Masurian Voivodeship",
                "isoCode": "WN",
                "countryCode": "PL"
            },
            {
                "name": "West Pomeranian Voivodeship",
                "isoCode": "ZP",
                "countryCode": "PL"
            },
            {
                "name": "Łódź Voivodeship",
                "isoCode": "LD",
                "countryCode": "PL"
            },
            {
                "name": "Świętokrzyskie Voivodeship",
                "isoCode": "SK",
                "countryCode": "PL"
            },
            {
                "name": "Aveiro",
                "isoCode": "01",
                "countryCode": "PT"
            },
            {
                "name": "Açores",
                "isoCode": "20",
                "countryCode": "PT"
            },
            {
                "name": "Beja",
                "isoCode": "02",
                "countryCode": "PT"
            },
            {
                "name": "Braga",
                "isoCode": "03",
                "countryCode": "PT"
            },
            {
                "name": "Bragança",
                "isoCode": "04",
                "countryCode": "PT"
            },
            {
                "name": "Castelo Branco",
                "isoCode": "05",
                "countryCode": "PT"
            },
            {
                "name": "Coimbra",
                "isoCode": "06",
                "countryCode": "PT"
            },
            {
                "name": "Faro",
                "isoCode": "08",
                "countryCode": "PT"
            },
            {
                "name": "Guarda",
                "isoCode": "09",
                "countryCode": "PT"
            },
            {
                "name": "Leiria",
                "isoCode": "10",
                "countryCode": "PT"
            },
            {
                "name": "Lisbon",
                "isoCode": "11",
                "countryCode": "PT"
            },
            {
                "name": "Madeira",
                "isoCode": "30",
                "countryCode": "PT"
            },
            {
                "name": "Portalegre",
                "isoCode": "12",
                "countryCode": "PT"
            },
            {
                "name": "Porto",
                "isoCode": "13",
                "countryCode": "PT"
            },
            {
                "name": "Santarém",
                "isoCode": "14",
                "countryCode": "PT"
            },
            {
                "name": "Setúbal",
                "isoCode": "15",
                "countryCode": "PT"
            },
            {
                "name": "Viana do Castelo",
                "isoCode": "16",
                "countryCode": "PT"
            },
            {
                "name": "Vila Real",
                "isoCode": "17",
                "countryCode": "PT"
            },
            {
                "name": "Viseu",
                "isoCode": "18",
                "countryCode": "PT"
            },
            {
                "name": "Évora",
                "isoCode": "07",
                "countryCode": "PT"
            },
            {
                "name": "Al Daayen",
                "isoCode": "ZA",
                "countryCode": "QA"
            },
            {
                "name": "Al Khor",
                "isoCode": "KH",
                "countryCode": "QA"
            },
            {
                "name": "Al Rayyan Municipality",
                "isoCode": "RA",
                "countryCode": "QA"
            },
            {
                "name": "Al Wakrah",
                "isoCode": "WA",
                "countryCode": "QA"
            },
            {
                "name": "Al-Shahaniya",
                "isoCode": "SH",
                "countryCode": "QA"
            },
            {
                "name": "Doha",
                "isoCode": "DA",
                "countryCode": "QA"
            },
            {
                "name": "Madinat ash Shamal",
                "isoCode": "MS",
                "countryCode": "QA"
            },
            {
                "name": "Umm Salal Municipality",
                "isoCode": "US",
                "countryCode": "QA"
            },
            {
                "name": "Alba",
                "isoCode": "AB",
                "countryCode": "RO"
            },
            {
                "name": "Arad County",
                "isoCode": "AR",
                "countryCode": "RO"
            },
            {
                "name": "Arges",
                "isoCode": "AG",
                "countryCode": "RO"
            },
            {
                "name": "Bacău County",
                "isoCode": "BC",
                "countryCode": "RO"
            },
            {
                "name": "Bihor County",
                "isoCode": "BH",
                "countryCode": "RO"
            },
            {
                "name": "Bistrița-Năsăud County",
                "isoCode": "BN",
                "countryCode": "RO"
            },
            {
                "name": "Botoșani County",
                "isoCode": "BT",
                "countryCode": "RO"
            },
            {
                "name": "Braila",
                "isoCode": "BR",
                "countryCode": "RO"
            },
            {
                "name": "Brașov County",
                "isoCode": "BV",
                "countryCode": "RO"
            },
            {
                "name": "Bucharest",
                "isoCode": "B",
                "countryCode": "RO"
            },
            {
                "name": "Buzău County",
                "isoCode": "BZ",
                "countryCode": "RO"
            },
            {
                "name": "Caraș-Severin County",
                "isoCode": "CS",
                "countryCode": "RO"
            },
            {
                "name": "Cluj County",
                "isoCode": "CJ",
                "countryCode": "RO"
            },
            {
                "name": "Constanța County",
                "isoCode": "CT",
                "countryCode": "RO"
            },
            {
                "name": "Covasna County",
                "isoCode": "CV",
                "countryCode": "RO"
            },
            {
                "name": "Călărași County",
                "isoCode": "CL",
                "countryCode": "RO"
            },
            {
                "name": "Dolj County",
                "isoCode": "DJ",
                "countryCode": "RO"
            },
            {
                "name": "Dâmbovița County",
                "isoCode": "DB",
                "countryCode": "RO"
            },
            {
                "name": "Galați County",
                "isoCode": "GL",
                "countryCode": "RO"
            },
            {
                "name": "Giurgiu County",
                "isoCode": "GR",
                "countryCode": "RO"
            },
            {
                "name": "Gorj County",
                "isoCode": "GJ",
                "countryCode": "RO"
            },
            {
                "name": "Harghita County",
                "isoCode": "HR",
                "countryCode": "RO"
            },
            {
                "name": "Hunedoara County",
                "isoCode": "HD",
                "countryCode": "RO"
            },
            {
                "name": "Ialomița County",
                "isoCode": "IL",
                "countryCode": "RO"
            },
            {
                "name": "Iași County",
                "isoCode": "IS",
                "countryCode": "RO"
            },
            {
                "name": "Ilfov County",
                "isoCode": "IF",
                "countryCode": "RO"
            },
            {
                "name": "Maramureș County",
                "isoCode": "MM",
                "countryCode": "RO"
            },
            {
                "name": "Mehedinți County",
                "isoCode": "MH",
                "countryCode": "RO"
            },
            {
                "name": "Mureș County",
                "isoCode": "MS",
                "countryCode": "RO"
            },
            {
                "name": "Neamț County",
                "isoCode": "NT",
                "countryCode": "RO"
            },
            {
                "name": "Olt County",
                "isoCode": "OT",
                "countryCode": "RO"
            },
            {
                "name": "Prahova County",
                "isoCode": "PH",
                "countryCode": "RO"
            },
            {
                "name": "Satu Mare County",
                "isoCode": "SM",
                "countryCode": "RO"
            },
            {
                "name": "Sibiu County",
                "isoCode": "SB",
                "countryCode": "RO"
            },
            {
                "name": "Suceava County",
                "isoCode": "SV",
                "countryCode": "RO"
            },
            {
                "name": "Sălaj County",
                "isoCode": "SJ",
                "countryCode": "RO"
            },
            {
                "name": "Teleorman County",
                "isoCode": "TR",
                "countryCode": "RO"
            },
            {
                "name": "Timiș County",
                "isoCode": "TM",
                "countryCode": "RO"
            },
            {
                "name": "Tulcea County",
                "isoCode": "TL",
                "countryCode": "RO"
            },
            {
                "name": "Vaslui County",
                "isoCode": "VS",
                "countryCode": "RO"
            },
            {
                "name": "Vrancea County",
                "isoCode": "VN",
                "countryCode": "RO"
            },
            {
                "name": "Vâlcea County",
                "isoCode": "VL",
                "countryCode": "RO"
            },
            {
                "name": "Altai Krai",
                "isoCode": "ALT",
                "countryCode": "RU"
            },
            {
                "name": "Altai Republic",
                "isoCode": "AL",
                "countryCode": "RU"
            },
            {
                "name": "Amur Oblast",
                "isoCode": "AMU",
                "countryCode": "RU"
            },
            {
                "name": "Arkhangelsk",
                "isoCode": "ARK",
                "countryCode": "RU"
            },
            {
                "name": "Astrakhan Oblast",
                "isoCode": "AST",
                "countryCode": "RU"
            },
            {
                "name": "Belgorod Oblast",
                "isoCode": "BEL",
                "countryCode": "RU"
            },
            {
                "name": "Bryansk Oblast",
                "isoCode": "BRY",
                "countryCode": "RU"
            },
            {
                "name": "Chechen Republic",
                "isoCode": "CE",
                "countryCode": "RU"
            },
            {
                "name": "Chelyabinsk Oblast",
                "isoCode": "CHE",
                "countryCode": "RU"
            },
            {
                "name": "Chukotka Autonomous Okrug",
                "isoCode": "CHU",
                "countryCode": "RU"
            },
            {
                "name": "Chuvash Republic",
                "isoCode": "CU",
                "countryCode": "RU"
            },
            {
                "name": "Irkutsk",
                "isoCode": "IRK",
                "countryCode": "RU"
            },
            {
                "name": "Ivanovo Oblast",
                "isoCode": "IVA",
                "countryCode": "RU"
            },
            {
                "name": "Jewish Autonomous Oblast",
                "isoCode": "YEV",
                "countryCode": "RU"
            },
            {
                "name": "Kabardino-Balkar Republic",
                "isoCode": "KB",
                "countryCode": "RU"
            },
            {
                "name": "Kaliningrad",
                "isoCode": "KGD",
                "countryCode": "RU"
            },
            {
                "name": "Kaluga Oblast",
                "isoCode": "KLU",
                "countryCode": "RU"
            },
            {
                "name": "Kamchatka Krai",
                "isoCode": "KAM",
                "countryCode": "RU"
            },
            {
                "name": "Karachay-Cherkess Republic",
                "isoCode": "KC",
                "countryCode": "RU"
            },
            {
                "name": "Kemerovo Oblast",
                "isoCode": "KEM",
                "countryCode": "RU"
            },
            {
                "name": "Khabarovsk Krai",
                "isoCode": "KHA",
                "countryCode": "RU"
            },
            {
                "name": "Khanty-Mansi Autonomous Okrug",
                "isoCode": "KHM",
                "countryCode": "RU"
            },
            {
                "name": "Kirov Oblast",
                "isoCode": "KIR",
                "countryCode": "RU"
            },
            {
                "name": "Komi Republic",
                "isoCode": "KO",
                "countryCode": "RU"
            },
            {
                "name": "Kostroma Oblast",
                "isoCode": "KOS",
                "countryCode": "RU"
            },
            {
                "name": "Krasnodar Krai",
                "isoCode": "KDA",
                "countryCode": "RU"
            },
            {
                "name": "Krasnoyarsk Krai",
                "isoCode": "KYA",
                "countryCode": "RU"
            },
            {
                "name": "Kurgan Oblast",
                "isoCode": "KGN",
                "countryCode": "RU"
            },
            {
                "name": "Kursk Oblast",
                "isoCode": "KRS",
                "countryCode": "RU"
            },
            {
                "name": "Leningrad Oblast",
                "isoCode": "LEN",
                "countryCode": "RU"
            },
            {
                "name": "Lipetsk Oblast",
                "isoCode": "LIP",
                "countryCode": "RU"
            },
            {
                "name": "Magadan Oblast",
                "isoCode": "MAG",
                "countryCode": "RU"
            },
            {
                "name": "Mari El Republic",
                "isoCode": "ME",
                "countryCode": "RU"
            },
            {
                "name": "Moscow",
                "isoCode": "MOW",
                "countryCode": "RU"
            },
            {
                "name": "Moscow Oblast",
                "isoCode": "MOS",
                "countryCode": "RU"
            },
            {
                "name": "Murmansk Oblast",
                "isoCode": "MUR",
                "countryCode": "RU"
            },
            {
                "name": "Nenets Autonomous Okrug",
                "isoCode": "NEN",
                "countryCode": "RU"
            },
            {
                "name": "Nizhny Novgorod Oblast",
                "isoCode": "NIZ",
                "countryCode": "RU"
            },
            {
                "name": "Novgorod Oblast",
                "isoCode": "NGR",
                "countryCode": "RU"
            },
            {
                "name": "Novosibirsk",
                "isoCode": "NVS",
                "countryCode": "RU"
            },
            {
                "name": "Omsk Oblast",
                "isoCode": "OMS",
                "countryCode": "RU"
            },
            {
                "name": "Orenburg Oblast",
                "isoCode": "ORE",
                "countryCode": "RU"
            },
            {
                "name": "Oryol Oblast",
                "isoCode": "ORL",
                "countryCode": "RU"
            },
            {
                "name": "Penza Oblast",
                "isoCode": "PNZ",
                "countryCode": "RU"
            },
            {
                "name": "Perm Krai",
                "isoCode": "PER",
                "countryCode": "RU"
            },
            {
                "name": "Primorsky Krai",
                "isoCode": "PRI",
                "countryCode": "RU"
            },
            {
                "name": "Pskov Oblast",
                "isoCode": "PSK",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Adygea",
                "isoCode": "AD",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Bashkortostan",
                "isoCode": "BA",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Buryatia",
                "isoCode": "BU",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Dagestan",
                "isoCode": "DA",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Ingushetia",
                "isoCode": "IN",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Kalmykia",
                "isoCode": "KL",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Karelia",
                "isoCode": "KR",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Khakassia",
                "isoCode": "KK",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Mordovia",
                "isoCode": "MO",
                "countryCode": "RU"
            },
            {
                "name": "Republic of North Ossetia-Alania",
                "isoCode": "SE",
                "countryCode": "RU"
            },
            {
                "name": "Republic of Tatarstan",
                "isoCode": "TA",
                "countryCode": "RU"
            },
            {
                "name": "Rostov Oblast",
                "isoCode": "ROS",
                "countryCode": "RU"
            },
            {
                "name": "Ryazan Oblast",
                "isoCode": "RYA",
                "countryCode": "RU"
            },
            {
                "name": "Saint Petersburg",
                "isoCode": "SPE",
                "countryCode": "RU"
            },
            {
                "name": "Sakha Republic",
                "isoCode": "SA",
                "countryCode": "RU"
            },
            {
                "name": "Sakhalin",
                "isoCode": "SAK",
                "countryCode": "RU"
            },
            {
                "name": "Samara Oblast",
                "isoCode": "SAM",
                "countryCode": "RU"
            },
            {
                "name": "Saratov Oblast",
                "isoCode": "SAR",
                "countryCode": "RU"
            },
            {
                "name": "Sevastopol",
                "isoCode": "UA-40",
                "countryCode": "RU"
            },
            {
                "name": "Smolensk Oblast",
                "isoCode": "SMO",
                "countryCode": "RU"
            },
            {
                "name": "Stavropol Krai",
                "isoCode": "STA",
                "countryCode": "RU"
            },
            {
                "name": "Sverdlovsk",
                "isoCode": "SVE",
                "countryCode": "RU"
            },
            {
                "name": "Tambov Oblast",
                "isoCode": "TAM",
                "countryCode": "RU"
            },
            {
                "name": "Tomsk Oblast",
                "isoCode": "TOM",
                "countryCode": "RU"
            },
            {
                "name": "Tula Oblast",
                "isoCode": "TUL",
                "countryCode": "RU"
            },
            {
                "name": "Tuva Republic",
                "isoCode": "TY",
                "countryCode": "RU"
            },
            {
                "name": "Tver Oblast",
                "isoCode": "TVE",
                "countryCode": "RU"
            },
            {
                "name": "Tyumen Oblast",
                "isoCode": "TYU",
                "countryCode": "RU"
            },
            {
                "name": "Udmurt Republic",
                "isoCode": "UD",
                "countryCode": "RU"
            },
            {
                "name": "Ulyanovsk Oblast",
                "isoCode": "ULY",
                "countryCode": "RU"
            },
            {
                "name": "Vladimir Oblast",
                "isoCode": "VLA",
                "countryCode": "RU"
            },
            {
                "name": "Volgograd Oblast",
                "isoCode": "VGG",
                "countryCode": "RU"
            },
            {
                "name": "Vologda Oblast",
                "isoCode": "VLG",
                "countryCode": "RU"
            },
            {
                "name": "Voronezh Oblast",
                "isoCode": "VOR",
                "countryCode": "RU"
            },
            {
                "name": "Yamalo-Nenets Autonomous Okrug",
                "isoCode": "YAN",
                "countryCode": "RU"
            },
            {
                "name": "Yaroslavl Oblast",
                "isoCode": "YAR",
                "countryCode": "RU"
            },
            {
                "name": "Zabaykalsky Krai",
                "isoCode": "ZAB",
                "countryCode": "RU"
            },
            {
                "name": "Eastern Province",
                "isoCode": "02",
                "countryCode": "RW"
            },
            {
                "name": "Kigali district",
                "isoCode": "01",
                "countryCode": "RW"
            },
            {
                "name": "Northern Province",
                "isoCode": "03",
                "countryCode": "RW"
            },
            {
                "name": "Southern Province",
                "isoCode": "05",
                "countryCode": "RW"
            },
            {
                "name": "Western Province",
                "isoCode": "04",
                "countryCode": "RW"
            },
            {
                "name": "Christ Church Nichola Town Parish",
                "isoCode": "01",
                "countryCode": "KN"
            },
            {
                "name": "Nevis",
                "isoCode": "N",
                "countryCode": "KN"
            },
            {
                "name": "Saint Anne Sandy Point Parish",
                "isoCode": "02",
                "countryCode": "KN"
            },
            {
                "name": "Saint George Gingerland Parish",
                "isoCode": "04",
                "countryCode": "KN"
            },
            {
                "name": "Saint James Windward Parish",
                "isoCode": "05",
                "countryCode": "KN"
            },
            {
                "name": "Saint John Capisterre Parish",
                "isoCode": "06",
                "countryCode": "KN"
            },
            {
                "name": "Saint John Figtree Parish",
                "isoCode": "07",
                "countryCode": "KN"
            },
            {
                "name": "Saint Kitts",
                "isoCode": "K",
                "countryCode": "KN"
            },
            {
                "name": "Saint Mary Cayon Parish",
                "isoCode": "08",
                "countryCode": "KN"
            },
            {
                "name": "Saint Paul Capisterre Parish",
                "isoCode": "09",
                "countryCode": "KN"
            },
            {
                "name": "Saint Paul Charlestown Parish",
                "isoCode": "10",
                "countryCode": "KN"
            },
            {
                "name": "Saint Peter Basseterre Parish",
                "isoCode": "11",
                "countryCode": "KN"
            },
            {
                "name": "Saint Thomas Lowland Parish",
                "isoCode": "12",
                "countryCode": "KN"
            },
            {
                "name": "Saint Thomas Middle Island Parish",
                "isoCode": "13",
                "countryCode": "KN"
            },
            {
                "name": "Trinity Palmetto Point Parish",
                "isoCode": "15",
                "countryCode": "KN"
            },
            {
                "name": "Anse la Raye Quarter",
                "isoCode": "01",
                "countryCode": "LC"
            },
            {
                "name": "Canaries",
                "isoCode": "12",
                "countryCode": "LC"
            },
            {
                "name": "Castries Quarter",
                "isoCode": "02",
                "countryCode": "LC"
            },
            {
                "name": "Choiseul Quarter",
                "isoCode": "03",
                "countryCode": "LC"
            },
            {
                "name": "Dauphin Quarter",
                "isoCode": "04",
                "countryCode": "LC"
            },
            {
                "name": "Dennery Quarter",
                "isoCode": "05",
                "countryCode": "LC"
            },
            {
                "name": "Gros Islet Quarter",
                "isoCode": "06",
                "countryCode": "LC"
            },
            {
                "name": "Laborie Quarter",
                "isoCode": "07",
                "countryCode": "LC"
            },
            {
                "name": "Micoud Quarter",
                "isoCode": "08",
                "countryCode": "LC"
            },
            {
                "name": "Praslin Quarter",
                "isoCode": "09",
                "countryCode": "LC"
            },
            {
                "name": "Soufrière Quarter",
                "isoCode": "10",
                "countryCode": "LC"
            },
            {
                "name": "Vieux Fort Quarter",
                "isoCode": "11",
                "countryCode": "LC"
            },
            {
                "name": "Charlotte Parish",
                "isoCode": "01",
                "countryCode": "VC"
            },
            {
                "name": "Grenadines Parish",
                "isoCode": "06",
                "countryCode": "VC"
            },
            {
                "name": "Saint Andrew Parish",
                "isoCode": "02",
                "countryCode": "VC"
            },
            {
                "name": "Saint David Parish",
                "isoCode": "03",
                "countryCode": "VC"
            },
            {
                "name": "Saint George Parish",
                "isoCode": "04",
                "countryCode": "VC"
            },
            {
                "name": "Saint Patrick Parish",
                "isoCode": "05",
                "countryCode": "VC"
            },
            {
                "name": "A'ana",
                "isoCode": "AA",
                "countryCode": "WS"
            },
            {
                "name": "Aiga-i-le-Tai",
                "isoCode": "AL",
                "countryCode": "WS"
            },
            {
                "name": "Atua",
                "isoCode": "AT",
                "countryCode": "WS"
            },
            {
                "name": "Fa'asaleleaga",
                "isoCode": "FA",
                "countryCode": "WS"
            },
            {
                "name": "Gaga'emauga",
                "isoCode": "GE",
                "countryCode": "WS"
            },
            {
                "name": "Gaga'ifomauga",
                "isoCode": "GI",
                "countryCode": "WS"
            },
            {
                "name": "Palauli",
                "isoCode": "PA",
                "countryCode": "WS"
            },
            {
                "name": "Satupa'itea",
                "isoCode": "SA",
                "countryCode": "WS"
            },
            {
                "name": "Tuamasaga",
                "isoCode": "TU",
                "countryCode": "WS"
            },
            {
                "name": "Va'a-o-Fonoti",
                "isoCode": "VF",
                "countryCode": "WS"
            },
            {
                "name": "Vaisigano",
                "isoCode": "VS",
                "countryCode": "WS"
            },
            {
                "name": "Acquaviva",
                "isoCode": "01",
                "countryCode": "SM"
            },
            {
                "name": "Borgo Maggiore",
                "isoCode": "06",
                "countryCode": "SM"
            },
            {
                "name": "Chiesanuova",
                "isoCode": "02",
                "countryCode": "SM"
            },
            {
                "name": "Domagnano",
                "isoCode": "03",
                "countryCode": "SM"
            },
            {
                "name": "Faetano",
                "isoCode": "04",
                "countryCode": "SM"
            },
            {
                "name": "Fiorentino",
                "isoCode": "05",
                "countryCode": "SM"
            },
            {
                "name": "Montegiardino",
                "isoCode": "08",
                "countryCode": "SM"
            },
            {
                "name": "San Marino",
                "isoCode": "07",
                "countryCode": "SM"
            },
            {
                "name": "Serravalle",
                "isoCode": "09",
                "countryCode": "SM"
            },
            {
                "name": "Príncipe Province",
                "isoCode": "P",
                "countryCode": "ST"
            },
            {
                "name": "São Tomé Province",
                "isoCode": "S",
                "countryCode": "ST"
            },
            {
                "name": "'Asir",
                "isoCode": "14",
                "countryCode": "SA"
            },
            {
                "name": "Al Bahah",
                "isoCode": "11",
                "countryCode": "SA"
            },
            {
                "name": "Al Jawf",
                "isoCode": "12",
                "countryCode": "SA"
            },
            {
                "name": "Al Madinah",
                "isoCode": "03",
                "countryCode": "SA"
            },
            {
                "name": "Al-Qassim",
                "isoCode": "05",
                "countryCode": "SA"
            },
            {
                "name": "Eastern Province",
                "isoCode": "04",
                "countryCode": "SA"
            },
            {
                "name": "Ha'il",
                "isoCode": "06",
                "countryCode": "SA"
            },
            {
                "name": "Jizan",
                "isoCode": "09",
                "countryCode": "SA"
            },
            {
                "name": "Makkah",
                "isoCode": "02",
                "countryCode": "SA"
            },
            {
                "name": "Najran",
                "isoCode": "10",
                "countryCode": "SA"
            },
            {
                "name": "Northern Borders",
                "isoCode": "08",
                "countryCode": "SA"
            },
            {
                "name": "Riyadh",
                "isoCode": "01",
                "countryCode": "SA"
            },
            {
                "name": "Tabuk",
                "isoCode": "07",
                "countryCode": "SA"
            },
            {
                "name": "Dakar",
                "isoCode": "DK",
                "countryCode": "SN"
            },
            {
                "name": "Diourbel Region",
                "isoCode": "DB",
                "countryCode": "SN"
            },
            {
                "name": "Fatick",
                "isoCode": "FK",
                "countryCode": "SN"
            },
            {
                "name": "Kaffrine",
                "isoCode": "KA",
                "countryCode": "SN"
            },
            {
                "name": "Kaolack",
                "isoCode": "KL",
                "countryCode": "SN"
            },
            {
                "name": "Kolda",
                "isoCode": "KD",
                "countryCode": "SN"
            },
            {
                "name": "Kédougou",
                "isoCode": "KE",
                "countryCode": "SN"
            },
            {
                "name": "Louga",
                "isoCode": "LG",
                "countryCode": "SN"
            },
            {
                "name": "Matam",
                "isoCode": "MT",
                "countryCode": "SN"
            },
            {
                "name": "Saint-Louis",
                "isoCode": "SL",
                "countryCode": "SN"
            },
            {
                "name": "Sédhiou",
                "isoCode": "SE",
                "countryCode": "SN"
            },
            {
                "name": "Tambacounda Region",
                "isoCode": "TC",
                "countryCode": "SN"
            },
            {
                "name": "Thiès Region",
                "isoCode": "TH",
                "countryCode": "SN"
            },
            {
                "name": "Ziguinchor",
                "isoCode": "ZG",
                "countryCode": "SN"
            },
            {
                "name": "Belgrade",
                "isoCode": "00",
                "countryCode": "RS"
            },
            {
                "name": "Bor District",
                "isoCode": "14",
                "countryCode": "RS"
            },
            {
                "name": "Braničevo District",
                "isoCode": "11",
                "countryCode": "RS"
            },
            {
                "name": "Central Banat District",
                "isoCode": "02",
                "countryCode": "RS"
            },
            {
                "name": "Jablanica District",
                "isoCode": "23",
                "countryCode": "RS"
            },
            {
                "name": "Kolubara District",
                "isoCode": "09",
                "countryCode": "RS"
            },
            {
                "name": "Mačva District",
                "isoCode": "08",
                "countryCode": "RS"
            },
            {
                "name": "Moravica District",
                "isoCode": "17",
                "countryCode": "RS"
            },
            {
                "name": "Nišava District",
                "isoCode": "20",
                "countryCode": "RS"
            },
            {
                "name": "North Banat District",
                "isoCode": "03",
                "countryCode": "RS"
            },
            {
                "name": "North Bačka District",
                "isoCode": "01",
                "countryCode": "RS"
            },
            {
                "name": "Pirot District",
                "isoCode": "22",
                "countryCode": "RS"
            },
            {
                "name": "Podunavlje District",
                "isoCode": "10",
                "countryCode": "RS"
            },
            {
                "name": "Pomoravlje District",
                "isoCode": "13",
                "countryCode": "RS"
            },
            {
                "name": "Pčinja District",
                "isoCode": "24",
                "countryCode": "RS"
            },
            {
                "name": "Rasina District",
                "isoCode": "19",
                "countryCode": "RS"
            },
            {
                "name": "Raška District",
                "isoCode": "18",
                "countryCode": "RS"
            },
            {
                "name": "South Banat District",
                "isoCode": "04",
                "countryCode": "RS"
            },
            {
                "name": "South Bačka District",
                "isoCode": "06",
                "countryCode": "RS"
            },
            {
                "name": "Srem District",
                "isoCode": "07",
                "countryCode": "RS"
            },
            {
                "name": "Toplica District",
                "isoCode": "21",
                "countryCode": "RS"
            },
            {
                "name": "Vojvodina",
                "isoCode": "VO",
                "countryCode": "RS"
            },
            {
                "name": "West Bačka District",
                "isoCode": "05",
                "countryCode": "RS"
            },
            {
                "name": "Zaječar District",
                "isoCode": "15",
                "countryCode": "RS"
            },
            {
                "name": "Zlatibor District",
                "isoCode": "16",
                "countryCode": "RS"
            },
            {
                "name": "Šumadija District",
                "isoCode": "12",
                "countryCode": "RS"
            },
            {
                "name": "Anse Boileau",
                "isoCode": "02",
                "countryCode": "SC"
            },
            {
                "name": "Anse Royale",
                "isoCode": "05",
                "countryCode": "SC"
            },
            {
                "name": "Anse-aux-Pins",
                "isoCode": "01",
                "countryCode": "SC"
            },
            {
                "name": "Au Cap",
                "isoCode": "04",
                "countryCode": "SC"
            },
            {
                "name": "Baie Lazare",
                "isoCode": "06",
                "countryCode": "SC"
            },
            {
                "name": "Baie Sainte Anne",
                "isoCode": "07",
                "countryCode": "SC"
            },
            {
                "name": "Beau Vallon",
                "isoCode": "08",
                "countryCode": "SC"
            },
            {
                "name": "Bel Air",
                "isoCode": "09",
                "countryCode": "SC"
            },
            {
                "name": "Bel Ombre",
                "isoCode": "10",
                "countryCode": "SC"
            },
            {
                "name": "Cascade",
                "isoCode": "11",
                "countryCode": "SC"
            },
            {
                "name": "Glacis",
                "isoCode": "12",
                "countryCode": "SC"
            },
            {
                "name": "Grand'Anse Mahé",
                "isoCode": "13",
                "countryCode": "SC"
            },
            {
                "name": "Grand'Anse Praslin",
                "isoCode": "14",
                "countryCode": "SC"
            },
            {
                "name": "La Digue",
                "isoCode": "15",
                "countryCode": "SC"
            },
            {
                "name": "La Rivière Anglaise",
                "isoCode": "16",
                "countryCode": "SC"
            },
            {
                "name": "Les Mamelles",
                "isoCode": "24",
                "countryCode": "SC"
            },
            {
                "name": "Mont Buxton",
                "isoCode": "17",
                "countryCode": "SC"
            },
            {
                "name": "Mont Fleuri",
                "isoCode": "18",
                "countryCode": "SC"
            },
            {
                "name": "Plaisance",
                "isoCode": "19",
                "countryCode": "SC"
            },
            {
                "name": "Pointe La Rue",
                "isoCode": "20",
                "countryCode": "SC"
            },
            {
                "name": "Port Glaud",
                "isoCode": "21",
                "countryCode": "SC"
            },
            {
                "name": "Roche Caiman",
                "isoCode": "25",
                "countryCode": "SC"
            },
            {
                "name": "Saint Louis",
                "isoCode": "22",
                "countryCode": "SC"
            },
            {
                "name": "Takamaka",
                "isoCode": "23",
                "countryCode": "SC"
            },
            {
                "name": "Eastern Province",
                "isoCode": "E",
                "countryCode": "SL"
            },
            {
                "name": "Northern Province",
                "isoCode": "N",
                "countryCode": "SL"
            },
            {
                "name": "Southern Province",
                "isoCode": "S",
                "countryCode": "SL"
            },
            {
                "name": "Western Area",
                "isoCode": "W",
                "countryCode": "SL"
            },
            {
                "name": "Central Singapore Community Development Council",
                "isoCode": "01",
                "countryCode": "SG"
            },
            {
                "name": "North East Community Development Council",
                "isoCode": "02",
                "countryCode": "SG"
            },
            {
                "name": "North West Community Development Council",
                "isoCode": "03",
                "countryCode": "SG"
            },
            {
                "name": "South East Community Development Council",
                "isoCode": "04",
                "countryCode": "SG"
            },
            {
                "name": "South West Community Development Council",
                "isoCode": "05",
                "countryCode": "SG"
            },
            {
                "name": "Banská Bystrica Region",
                "isoCode": "BC",
                "countryCode": "SK"
            },
            {
                "name": "Bratislava Region",
                "isoCode": "BL",
                "countryCode": "SK"
            },
            {
                "name": "Košice Region",
                "isoCode": "KI",
                "countryCode": "SK"
            },
            {
                "name": "Nitra Region",
                "isoCode": "NI",
                "countryCode": "SK"
            },
            {
                "name": "Prešov Region",
                "isoCode": "PV",
                "countryCode": "SK"
            },
            {
                "name": "Trenčín Region",
                "isoCode": "TC",
                "countryCode": "SK"
            },
            {
                "name": "Trnava Region",
                "isoCode": "TA",
                "countryCode": "SK"
            },
            {
                "name": "Žilina Region",
                "isoCode": "ZI",
                "countryCode": "SK"
            },
            {
                "name": "Ajdovščina Municipality",
                "isoCode": "001",
                "countryCode": "SI"
            },
            {
                "name": "Ankaran Municipality",
                "isoCode": "213",
                "countryCode": "SI"
            },
            {
                "name": "Beltinci Municipality",
                "isoCode": "002",
                "countryCode": "SI"
            },
            {
                "name": "Benedikt Municipality",
                "isoCode": "148",
                "countryCode": "SI"
            },
            {
                "name": "Bistrica ob Sotli Municipality",
                "isoCode": "149",
                "countryCode": "SI"
            },
            {
                "name": "Bled Municipality",
                "isoCode": "003",
                "countryCode": "SI"
            },
            {
                "name": "Bloke Municipality",
                "isoCode": "150",
                "countryCode": "SI"
            },
            {
                "name": "Bohinj Municipality",
                "isoCode": "004",
                "countryCode": "SI"
            },
            {
                "name": "Borovnica Municipality",
                "isoCode": "005",
                "countryCode": "SI"
            },
            {
                "name": "Bovec Municipality",
                "isoCode": "006",
                "countryCode": "SI"
            },
            {
                "name": "Braslovče Municipality",
                "isoCode": "151",
                "countryCode": "SI"
            },
            {
                "name": "Brda Municipality",
                "isoCode": "007",
                "countryCode": "SI"
            },
            {
                "name": "Brezovica Municipality",
                "isoCode": "008",
                "countryCode": "SI"
            },
            {
                "name": "Brežice Municipality",
                "isoCode": "009",
                "countryCode": "SI"
            },
            {
                "name": "Cankova Municipality",
                "isoCode": "152",
                "countryCode": "SI"
            },
            {
                "name": "Cerklje na Gorenjskem Municipality",
                "isoCode": "012",
                "countryCode": "SI"
            },
            {
                "name": "Cerknica Municipality",
                "isoCode": "013",
                "countryCode": "SI"
            },
            {
                "name": "Cerkno Municipality",
                "isoCode": "014",
                "countryCode": "SI"
            },
            {
                "name": "Cerkvenjak Municipality",
                "isoCode": "153",
                "countryCode": "SI"
            },
            {
                "name": "City Municipality of Celje",
                "isoCode": "011",
                "countryCode": "SI"
            },
            {
                "name": "City Municipality of Novo Mesto",
                "isoCode": "085",
                "countryCode": "SI"
            },
            {
                "name": "Destrnik Municipality",
                "isoCode": "018",
                "countryCode": "SI"
            },
            {
                "name": "Divača Municipality",
                "isoCode": "019",
                "countryCode": "SI"
            },
            {
                "name": "Dobje Municipality",
                "isoCode": "154",
                "countryCode": "SI"
            },
            {
                "name": "Dobrepolje Municipality",
                "isoCode": "020",
                "countryCode": "SI"
            },
            {
                "name": "Dobrna Municipality",
                "isoCode": "155",
                "countryCode": "SI"
            },
            {
                "name": "Dobrova–Polhov Gradec Municipality",
                "isoCode": "021",
                "countryCode": "SI"
            },
            {
                "name": "Dobrovnik Municipality",
                "isoCode": "156",
                "countryCode": "SI"
            },
            {
                "name": "Dol pri Ljubljani Municipality",
                "isoCode": "022",
                "countryCode": "SI"
            },
            {
                "name": "Dolenjske Toplice Municipality",
                "isoCode": "157",
                "countryCode": "SI"
            },
            {
                "name": "Domžale Municipality",
                "isoCode": "023",
                "countryCode": "SI"
            },
            {
                "name": "Dornava Municipality",
                "isoCode": "024",
                "countryCode": "SI"
            },
            {
                "name": "Dravograd Municipality",
                "isoCode": "025",
                "countryCode": "SI"
            },
            {
                "name": "Duplek Municipality",
                "isoCode": "026",
                "countryCode": "SI"
            },
            {
                "name": "Gorenja Vas–Poljane Municipality",
                "isoCode": "027",
                "countryCode": "SI"
            },
            {
                "name": "Gorišnica Municipality",
                "isoCode": "028",
                "countryCode": "SI"
            },
            {
                "name": "Gorje Municipality",
                "isoCode": "207",
                "countryCode": "SI"
            },
            {
                "name": "Gornja Radgona Municipality",
                "isoCode": "029",
                "countryCode": "SI"
            },
            {
                "name": "Gornji Grad Municipality",
                "isoCode": "030",
                "countryCode": "SI"
            },
            {
                "name": "Gornji Petrovci Municipality",
                "isoCode": "031",
                "countryCode": "SI"
            },
            {
                "name": "Grad Municipality",
                "isoCode": "158",
                "countryCode": "SI"
            },
            {
                "name": "Grosuplje Municipality",
                "isoCode": "032",
                "countryCode": "SI"
            },
            {
                "name": "Hajdina Municipality",
                "isoCode": "159",
                "countryCode": "SI"
            },
            {
                "name": "Hodoš Municipality",
                "isoCode": "161",
                "countryCode": "SI"
            },
            {
                "name": "Horjul Municipality",
                "isoCode": "162",
                "countryCode": "SI"
            },
            {
                "name": "Hoče–Slivnica Municipality",
                "isoCode": "160",
                "countryCode": "SI"
            },
            {
                "name": "Hrastnik Municipality",
                "isoCode": "034",
                "countryCode": "SI"
            },
            {
                "name": "Hrpelje–Kozina Municipality",
                "isoCode": "035",
                "countryCode": "SI"
            },
            {
                "name": "Idrija Municipality",
                "isoCode": "036",
                "countryCode": "SI"
            },
            {
                "name": "Ig Municipality",
                "isoCode": "037",
                "countryCode": "SI"
            },
            {
                "name": "Ivančna Gorica Municipality",
                "isoCode": "039",
                "countryCode": "SI"
            },
            {
                "name": "Izola Municipality",
                "isoCode": "040",
                "countryCode": "SI"
            },
            {
                "name": "Jesenice Municipality",
                "isoCode": "041",
                "countryCode": "SI"
            },
            {
                "name": "Jezersko Municipality",
                "isoCode": "163",
                "countryCode": "SI"
            },
            {
                "name": "Juršinci Municipality",
                "isoCode": "042",
                "countryCode": "SI"
            },
            {
                "name": "Kamnik Municipality",
                "isoCode": "043",
                "countryCode": "SI"
            },
            {
                "name": "Kanal ob Soči Municipality",
                "isoCode": "044",
                "countryCode": "SI"
            },
            {
                "name": "Kidričevo Municipality",
                "isoCode": "045",
                "countryCode": "SI"
            },
            {
                "name": "Kobarid Municipality",
                "isoCode": "046",
                "countryCode": "SI"
            },
            {
                "name": "Kobilje Municipality",
                "isoCode": "047",
                "countryCode": "SI"
            },
            {
                "name": "Komen Municipality",
                "isoCode": "049",
                "countryCode": "SI"
            },
            {
                "name": "Komenda Municipality",
                "isoCode": "164",
                "countryCode": "SI"
            },
            {
                "name": "Koper City Municipality",
                "isoCode": "050",
                "countryCode": "SI"
            },
            {
                "name": "Kostanjevica na Krki Municipality",
                "isoCode": "197",
                "countryCode": "SI"
            },
            {
                "name": "Kostel Municipality",
                "isoCode": "165",
                "countryCode": "SI"
            },
            {
                "name": "Kozje Municipality",
                "isoCode": "051",
                "countryCode": "SI"
            },
            {
                "name": "Kočevje Municipality",
                "isoCode": "048",
                "countryCode": "SI"
            },
            {
                "name": "Kranj City Municipality",
                "isoCode": "052",
                "countryCode": "SI"
            },
            {
                "name": "Kranjska Gora Municipality",
                "isoCode": "053",
                "countryCode": "SI"
            },
            {
                "name": "Križevci Municipality",
                "isoCode": "166",
                "countryCode": "SI"
            },
            {
                "name": "Kungota",
                "isoCode": "055",
                "countryCode": "SI"
            },
            {
                "name": "Kuzma Municipality",
                "isoCode": "056",
                "countryCode": "SI"
            },
            {
                "name": "Laško Municipality",
                "isoCode": "057",
                "countryCode": "SI"
            },
            {
                "name": "Lenart Municipality",
                "isoCode": "058",
                "countryCode": "SI"
            },
            {
                "name": "Lendava Municipality",
                "isoCode": "059",
                "countryCode": "SI"
            },
            {
                "name": "Litija Municipality",
                "isoCode": "060",
                "countryCode": "SI"
            },
            {
                "name": "Ljubljana City Municipality",
                "isoCode": "061",
                "countryCode": "SI"
            },
            {
                "name": "Ljubno Municipality",
                "isoCode": "062",
                "countryCode": "SI"
            },
            {
                "name": "Ljutomer Municipality",
                "isoCode": "063",
                "countryCode": "SI"
            },
            {
                "name": "Logatec Municipality",
                "isoCode": "064",
                "countryCode": "SI"
            },
            {
                "name": "Log–Dragomer Municipality",
                "isoCode": "208",
                "countryCode": "SI"
            },
            {
                "name": "Lovrenc na Pohorju Municipality",
                "isoCode": "167",
                "countryCode": "SI"
            },
            {
                "name": "Loška Dolina Municipality",
                "isoCode": "065",
                "countryCode": "SI"
            },
            {
                "name": "Loški Potok Municipality",
                "isoCode": "066",
                "countryCode": "SI"
            },
            {
                "name": "Lukovica Municipality",
                "isoCode": "068",
                "countryCode": "SI"
            },
            {
                "name": "Luče Municipality",
                "isoCode": "067",
                "countryCode": "SI"
            },
            {
                "name": "Majšperk Municipality",
                "isoCode": "069",
                "countryCode": "SI"
            },
            {
                "name": "Makole Municipality",
                "isoCode": "198",
                "countryCode": "SI"
            },
            {
                "name": "Maribor City Municipality",
                "isoCode": "070",
                "countryCode": "SI"
            },
            {
                "name": "Markovci Municipality",
                "isoCode": "168",
                "countryCode": "SI"
            },
            {
                "name": "Medvode Municipality",
                "isoCode": "071",
                "countryCode": "SI"
            },
            {
                "name": "Mengeš Municipality",
                "isoCode": "072",
                "countryCode": "SI"
            },
            {
                "name": "Metlika Municipality",
                "isoCode": "073",
                "countryCode": "SI"
            },
            {
                "name": "Mežica Municipality",
                "isoCode": "074",
                "countryCode": "SI"
            },
            {
                "name": "Miklavž na Dravskem Polju Municipality",
                "isoCode": "169",
                "countryCode": "SI"
            },
            {
                "name": "Miren–Kostanjevica Municipality",
                "isoCode": "075",
                "countryCode": "SI"
            },
            {
                "name": "Mirna Municipality",
                "isoCode": "212",
                "countryCode": "SI"
            },
            {
                "name": "Mirna Peč Municipality",
                "isoCode": "170",
                "countryCode": "SI"
            },
            {
                "name": "Mislinja Municipality",
                "isoCode": "076",
                "countryCode": "SI"
            },
            {
                "name": "Mokronog–Trebelno Municipality",
                "isoCode": "199",
                "countryCode": "SI"
            },
            {
                "name": "Moravske Toplice Municipality",
                "isoCode": "078",
                "countryCode": "SI"
            },
            {
                "name": "Moravče Municipality",
                "isoCode": "077",
                "countryCode": "SI"
            },
            {
                "name": "Mozirje Municipality",
                "isoCode": "079",
                "countryCode": "SI"
            },
            {
                "name": "Municipality of Apače",
                "isoCode": "195",
                "countryCode": "SI"
            },
            {
                "name": "Municipality of Cirkulane",
                "isoCode": "196",
                "countryCode": "SI"
            },
            {
                "name": "Municipality of Ilirska Bistrica",
                "isoCode": "038",
                "countryCode": "SI"
            },
            {
                "name": "Municipality of Krško",
                "isoCode": "054",
                "countryCode": "SI"
            },
            {
                "name": "Municipality of Škofljica",
                "isoCode": "123",
                "countryCode": "SI"
            },
            {
                "name": "Murska Sobota City Municipality",
                "isoCode": "080",
                "countryCode": "SI"
            },
            {
                "name": "Muta Municipality",
                "isoCode": "081",
                "countryCode": "SI"
            },
            {
                "name": "Naklo Municipality",
                "isoCode": "082",
                "countryCode": "SI"
            },
            {
                "name": "Nazarje Municipality",
                "isoCode": "083",
                "countryCode": "SI"
            },
            {
                "name": "Nova Gorica City Municipality",
                "isoCode": "084",
                "countryCode": "SI"
            },
            {
                "name": "Odranci Municipality",
                "isoCode": "086",
                "countryCode": "SI"
            },
            {
                "name": "Oplotnica",
                "isoCode": "171",
                "countryCode": "SI"
            },
            {
                "name": "Ormož Municipality",
                "isoCode": "087",
                "countryCode": "SI"
            },
            {
                "name": "Osilnica Municipality",
                "isoCode": "088",
                "countryCode": "SI"
            },
            {
                "name": "Pesnica Municipality",
                "isoCode": "089",
                "countryCode": "SI"
            },
            {
                "name": "Piran Municipality",
                "isoCode": "090",
                "countryCode": "SI"
            },
            {
                "name": "Pivka Municipality",
                "isoCode": "091",
                "countryCode": "SI"
            },
            {
                "name": "Podlehnik Municipality",
                "isoCode": "172",
                "countryCode": "SI"
            },
            {
                "name": "Podvelka Municipality",
                "isoCode": "093",
                "countryCode": "SI"
            },
            {
                "name": "Podčetrtek Municipality",
                "isoCode": "092",
                "countryCode": "SI"
            },
            {
                "name": "Poljčane Municipality",
                "isoCode": "200",
                "countryCode": "SI"
            },
            {
                "name": "Polzela Municipality",
                "isoCode": "173",
                "countryCode": "SI"
            },
            {
                "name": "Postojna Municipality",
                "isoCode": "094",
                "countryCode": "SI"
            },
            {
                "name": "Prebold Municipality",
                "isoCode": "174",
                "countryCode": "SI"
            },
            {
                "name": "Preddvor Municipality",
                "isoCode": "095",
                "countryCode": "SI"
            },
            {
                "name": "Prevalje Municipality",
                "isoCode": "175",
                "countryCode": "SI"
            },
            {
                "name": "Ptuj City Municipality",
                "isoCode": "096",
                "countryCode": "SI"
            },
            {
                "name": "Puconci Municipality",
                "isoCode": "097",
                "countryCode": "SI"
            },
            {
                "name": "Radenci Municipality",
                "isoCode": "100",
                "countryCode": "SI"
            },
            {
                "name": "Radeče Municipality",
                "isoCode": "099",
                "countryCode": "SI"
            },
            {
                "name": "Radlje ob Dravi Municipality",
                "isoCode": "101",
                "countryCode": "SI"
            },
            {
                "name": "Radovljica Municipality",
                "isoCode": "102",
                "countryCode": "SI"
            },
            {
                "name": "Ravne na Koroškem Municipality",
                "isoCode": "103",
                "countryCode": "SI"
            },
            {
                "name": "Razkrižje Municipality",
                "isoCode": "176",
                "countryCode": "SI"
            },
            {
                "name": "Rače–Fram Municipality",
                "isoCode": "098",
                "countryCode": "SI"
            },
            {
                "name": "Renče–Vogrsko Municipality",
                "isoCode": "201",
                "countryCode": "SI"
            },
            {
                "name": "Rečica ob Savinji Municipality",
                "isoCode": "209",
                "countryCode": "SI"
            },
            {
                "name": "Ribnica Municipality",
                "isoCode": "104",
                "countryCode": "SI"
            },
            {
                "name": "Ribnica na Pohorju Municipality",
                "isoCode": "177",
                "countryCode": "SI"
            },
            {
                "name": "Rogatec Municipality",
                "isoCode": "107",
                "countryCode": "SI"
            },
            {
                "name": "Rogaška Slatina Municipality",
                "isoCode": "106",
                "countryCode": "SI"
            },
            {
                "name": "Rogašovci Municipality",
                "isoCode": "105",
                "countryCode": "SI"
            },
            {
                "name": "Ruše Municipality",
                "isoCode": "108",
                "countryCode": "SI"
            },
            {
                "name": "Selnica ob Dravi Municipality",
                "isoCode": "178",
                "countryCode": "SI"
            },
            {
                "name": "Semič Municipality",
                "isoCode": "109",
                "countryCode": "SI"
            },
            {
                "name": "Sevnica Municipality",
                "isoCode": "110",
                "countryCode": "SI"
            },
            {
                "name": "Sežana Municipality",
                "isoCode": "111",
                "countryCode": "SI"
            },
            {
                "name": "Slovenj Gradec City Municipality",
                "isoCode": "112",
                "countryCode": "SI"
            },
            {
                "name": "Slovenska Bistrica Municipality",
                "isoCode": "113",
                "countryCode": "SI"
            },
            {
                "name": "Slovenske Konjice Municipality",
                "isoCode": "114",
                "countryCode": "SI"
            },
            {
                "name": "Sodražica Municipality",
                "isoCode": "179",
                "countryCode": "SI"
            },
            {
                "name": "Solčava Municipality",
                "isoCode": "180",
                "countryCode": "SI"
            },
            {
                "name": "Središče ob Dravi",
                "isoCode": "202",
                "countryCode": "SI"
            },
            {
                "name": "Starše Municipality",
                "isoCode": "115",
                "countryCode": "SI"
            },
            {
                "name": "Straža Municipality",
                "isoCode": "203",
                "countryCode": "SI"
            },
            {
                "name": "Sveta Ana Municipality",
                "isoCode": "181",
                "countryCode": "SI"
            },
            {
                "name": "Sveta Trojica v Slovenskih Goricah Municipality",
                "isoCode": "204",
                "countryCode": "SI"
            },
            {
                "name": "Sveti Andraž v Slovenskih Goricah Municipality",
                "isoCode": "182",
                "countryCode": "SI"
            },
            {
                "name": "Sveti Jurij ob Ščavnici Municipality",
                "isoCode": "116",
                "countryCode": "SI"
            },
            {
                "name": "Sveti Jurij v Slovenskih Goricah Municipality",
                "isoCode": "210",
                "countryCode": "SI"
            },
            {
                "name": "Sveti Tomaž Municipality",
                "isoCode": "205",
                "countryCode": "SI"
            },
            {
                "name": "Tabor Municipality",
                "isoCode": "184",
                "countryCode": "SI"
            },
            {
                "name": "Tišina Municipality",
                "isoCode": "010",
                "countryCode": "SI"
            },
            {
                "name": "Tolmin Municipality",
                "isoCode": "128",
                "countryCode": "SI"
            },
            {
                "name": "Trbovlje Municipality",
                "isoCode": "129",
                "countryCode": "SI"
            },
            {
                "name": "Trebnje Municipality",
                "isoCode": "130",
                "countryCode": "SI"
            },
            {
                "name": "Trnovska Vas Municipality",
                "isoCode": "185",
                "countryCode": "SI"
            },
            {
                "name": "Trzin Municipality",
                "isoCode": "186",
                "countryCode": "SI"
            },
            {
                "name": "Tržič Municipality",
                "isoCode": "131",
                "countryCode": "SI"
            },
            {
                "name": "Turnišče Municipality",
                "isoCode": "132",
                "countryCode": "SI"
            },
            {
                "name": "Velika Polana Municipality",
                "isoCode": "187",
                "countryCode": "SI"
            },
            {
                "name": "Velike Lašče Municipality",
                "isoCode": "134",
                "countryCode": "SI"
            },
            {
                "name": "Veržej Municipality",
                "isoCode": "188",
                "countryCode": "SI"
            },
            {
                "name": "Videm Municipality",
                "isoCode": "135",
                "countryCode": "SI"
            },
            {
                "name": "Vipava Municipality",
                "isoCode": "136",
                "countryCode": "SI"
            },
            {
                "name": "Vitanje Municipality",
                "isoCode": "137",
                "countryCode": "SI"
            },
            {
                "name": "Vodice Municipality",
                "isoCode": "138",
                "countryCode": "SI"
            },
            {
                "name": "Vojnik Municipality",
                "isoCode": "139",
                "countryCode": "SI"
            },
            {
                "name": "Vransko Municipality",
                "isoCode": "189",
                "countryCode": "SI"
            },
            {
                "name": "Vrhnika Municipality",
                "isoCode": "140",
                "countryCode": "SI"
            },
            {
                "name": "Vuzenica Municipality",
                "isoCode": "141",
                "countryCode": "SI"
            },
            {
                "name": "Zagorje ob Savi Municipality",
                "isoCode": "142",
                "countryCode": "SI"
            },
            {
                "name": "Zavrč Municipality",
                "isoCode": "143",
                "countryCode": "SI"
            },
            {
                "name": "Zreče Municipality",
                "isoCode": "144",
                "countryCode": "SI"
            },
            {
                "name": "Črenšovci Municipality",
                "isoCode": "015",
                "countryCode": "SI"
            },
            {
                "name": "Črna na Koroškem Municipality",
                "isoCode": "016",
                "countryCode": "SI"
            },
            {
                "name": "Črnomelj Municipality",
                "isoCode": "017",
                "countryCode": "SI"
            },
            {
                "name": "Šalovci Municipality",
                "isoCode": "033",
                "countryCode": "SI"
            },
            {
                "name": "Šempeter–Vrtojba Municipality",
                "isoCode": "183",
                "countryCode": "SI"
            },
            {
                "name": "Šentilj Municipality",
                "isoCode": "118",
                "countryCode": "SI"
            },
            {
                "name": "Šentjernej Municipality",
                "isoCode": "119",
                "countryCode": "SI"
            },
            {
                "name": "Šentjur Municipality",
                "isoCode": "120",
                "countryCode": "SI"
            },
            {
                "name": "Šentrupert Municipality",
                "isoCode": "211",
                "countryCode": "SI"
            },
            {
                "name": "Šenčur Municipality",
                "isoCode": "117",
                "countryCode": "SI"
            },
            {
                "name": "Škocjan Municipality",
                "isoCode": "121",
                "countryCode": "SI"
            },
            {
                "name": "Škofja Loka Municipality",
                "isoCode": "122",
                "countryCode": "SI"
            },
            {
                "name": "Šmarje pri Jelšah Municipality",
                "isoCode": "124",
                "countryCode": "SI"
            },
            {
                "name": "Šmarješke Toplice Municipality",
                "isoCode": "206",
                "countryCode": "SI"
            },
            {
                "name": "Šmartno ob Paki Municipality",
                "isoCode": "125",
                "countryCode": "SI"
            },
            {
                "name": "Šmartno pri Litiji Municipality",
                "isoCode": "194",
                "countryCode": "SI"
            },
            {
                "name": "Šoštanj Municipality",
                "isoCode": "126",
                "countryCode": "SI"
            },
            {
                "name": "Štore Municipality",
                "isoCode": "127",
                "countryCode": "SI"
            },
            {
                "name": "Žalec Municipality",
                "isoCode": "190",
                "countryCode": "SI"
            },
            {
                "name": "Železniki Municipality",
                "isoCode": "146",
                "countryCode": "SI"
            },
            {
                "name": "Žetale Municipality",
                "isoCode": "191",
                "countryCode": "SI"
            },
            {
                "name": "Žiri Municipality",
                "isoCode": "147",
                "countryCode": "SI"
            },
            {
                "name": "Žirovnica Municipality",
                "isoCode": "192",
                "countryCode": "SI"
            },
            {
                "name": "Žužemberk Municipality",
                "isoCode": "193",
                "countryCode": "SI"
            },
            {
                "name": "Central Province",
                "isoCode": "CE",
                "countryCode": "SB"
            },
            {
                "name": "Choiseul Province",
                "isoCode": "CH",
                "countryCode": "SB"
            },
            {
                "name": "Guadalcanal Province",
                "isoCode": "GU",
                "countryCode": "SB"
            },
            {
                "name": "Honiara",
                "isoCode": "CT",
                "countryCode": "SB"
            },
            {
                "name": "Isabel Province",
                "isoCode": "IS",
                "countryCode": "SB"
            },
            {
                "name": "Makira-Ulawa Province",
                "isoCode": "MK",
                "countryCode": "SB"
            },
            {
                "name": "Malaita Province",
                "isoCode": "ML",
                "countryCode": "SB"
            },
            {
                "name": "Rennell and Bellona Province",
                "isoCode": "RB",
                "countryCode": "SB"
            },
            {
                "name": "Temotu Province",
                "isoCode": "TE",
                "countryCode": "SB"
            },
            {
                "name": "Western Province",
                "isoCode": "WE",
                "countryCode": "SB"
            },
            {
                "name": "Awdal Region",
                "isoCode": "AW",
                "countryCode": "SO"
            },
            {
                "name": "Bakool",
                "isoCode": "BK",
                "countryCode": "SO"
            },
            {
                "name": "Banaadir",
                "isoCode": "BN",
                "countryCode": "SO"
            },
            {
                "name": "Bari",
                "isoCode": "BR",
                "countryCode": "SO"
            },
            {
                "name": "Bay",
                "isoCode": "BY",
                "countryCode": "SO"
            },
            {
                "name": "Galguduud",
                "isoCode": "GA",
                "countryCode": "SO"
            },
            {
                "name": "Gedo",
                "isoCode": "GE",
                "countryCode": "SO"
            },
            {
                "name": "Hiran",
                "isoCode": "HI",
                "countryCode": "SO"
            },
            {
                "name": "Lower Juba",
                "isoCode": "JH",
                "countryCode": "SO"
            },
            {
                "name": "Lower Shebelle",
                "isoCode": "SH",
                "countryCode": "SO"
            },
            {
                "name": "Middle Juba",
                "isoCode": "JD",
                "countryCode": "SO"
            },
            {
                "name": "Middle Shebelle",
                "isoCode": "SD",
                "countryCode": "SO"
            },
            {
                "name": "Mudug",
                "isoCode": "MU",
                "countryCode": "SO"
            },
            {
                "name": "Nugal",
                "isoCode": "NU",
                "countryCode": "SO"
            },
            {
                "name": "Sanaag Region",
                "isoCode": "SA",
                "countryCode": "SO"
            },
            {
                "name": "Togdheer Region",
                "isoCode": "TO",
                "countryCode": "SO"
            },
            {
                "name": "Eastern Cape",
                "isoCode": "EC",
                "countryCode": "ZA"
            },
            {
                "name": "Free State",
                "isoCode": "FS",
                "countryCode": "ZA"
            },
            {
                "name": "Gauteng",
                "isoCode": "GP",
                "countryCode": "ZA"
            },
            {
                "name": "KwaZulu-Natal",
                "isoCode": "KZN",
                "countryCode": "ZA"
            },
            {
                "name": "Limpopo",
                "isoCode": "LP",
                "countryCode": "ZA"
            },
            {
                "name": "Mpumalanga",
                "isoCode": "MP",
                "countryCode": "ZA"
            },
            {
                "name": "North West",
                "isoCode": "NW",
                "countryCode": "ZA"
            },
            {
                "name": "Northern Cape",
                "isoCode": "NC",
                "countryCode": "ZA"
            },
            {
                "name": "Western Cape",
                "isoCode": "WC",
                "countryCode": "ZA"
            },
            {
                "name": "Central Equatoria",
                "isoCode": "EC",
                "countryCode": "SS"
            },
            {
                "name": "Eastern Equatoria",
                "isoCode": "EE",
                "countryCode": "SS"
            },
            {
                "name": "Jonglei State",
                "isoCode": "JG",
                "countryCode": "SS"
            },
            {
                "name": "Lakes",
                "isoCode": "LK",
                "countryCode": "SS"
            },
            {
                "name": "Northern Bahr el Ghazal",
                "isoCode": "BN",
                "countryCode": "SS"
            },
            {
                "name": "Unity",
                "isoCode": "UY",
                "countryCode": "SS"
            },
            {
                "name": "Upper Nile",
                "isoCode": "NU",
                "countryCode": "SS"
            },
            {
                "name": "Warrap",
                "isoCode": "WR",
                "countryCode": "SS"
            },
            {
                "name": "Western Bahr el Ghazal",
                "isoCode": "BW",
                "countryCode": "SS"
            },
            {
                "name": "Western Equatoria",
                "isoCode": "EW",
                "countryCode": "SS"
            },
            {
                "name": "Andalusia",
                "isoCode": "AN",
                "countryCode": "ES"
            },
            {
                "name": "Aragon",
                "isoCode": "AR",
                "countryCode": "ES"
            },
            {
                "name": "Asturias",
                "isoCode": "AS",
                "countryCode": "ES"
            },
            {
                "name": "Balearic Islands",
                "isoCode": "PM",
                "countryCode": "ES"
            },
            {
                "name": "Basque Country",
                "isoCode": "PV",
                "countryCode": "ES"
            },
            {
                "name": "Burgos Province",
                "isoCode": "BU",
                "countryCode": "ES"
            },
            {
                "name": "Canary Islands",
                "isoCode": "CN",
                "countryCode": "ES"
            },
            {
                "name": "Cantabria",
                "isoCode": "CB",
                "countryCode": "ES"
            },
            {
                "name": "Castile and León",
                "isoCode": "CL",
                "countryCode": "ES"
            },
            {
                "name": "Castilla La Mancha",
                "isoCode": "CM",
                "countryCode": "ES"
            },
            {
                "name": "Catalonia",
                "isoCode": "CT",
                "countryCode": "ES"
            },
            {
                "name": "Ceuta",
                "isoCode": "CE",
                "countryCode": "ES"
            },
            {
                "name": "Extremadura",
                "isoCode": "EX",
                "countryCode": "ES"
            },
            {
                "name": "Galicia",
                "isoCode": "GA",
                "countryCode": "ES"
            },
            {
                "name": "La Rioja",
                "isoCode": "RI",
                "countryCode": "ES"
            },
            {
                "name": "Léon",
                "isoCode": "LE",
                "countryCode": "ES"
            },
            {
                "name": "Madrid",
                "isoCode": "MD",
                "countryCode": "ES"
            },
            {
                "name": "Melilla",
                "isoCode": "ML",
                "countryCode": "ES"
            },
            {
                "name": "Murcia",
                "isoCode": "MC",
                "countryCode": "ES"
            },
            {
                "name": "Navarra",
                "isoCode": "NC",
                "countryCode": "ES"
            },
            {
                "name": "Palencia Province",
                "isoCode": "P",
                "countryCode": "ES"
            },
            {
                "name": "Salamanca Province",
                "isoCode": "SA",
                "countryCode": "ES"
            },
            {
                "name": "Segovia Province",
                "isoCode": "SG",
                "countryCode": "ES"
            },
            {
                "name": "Soria Province",
                "isoCode": "SO",
                "countryCode": "ES"
            },
            {
                "name": "Valencia",
                "isoCode": "VC",
                "countryCode": "ES"
            },
            {
                "name": "Valladolid Province",
                "isoCode": "VA",
                "countryCode": "ES"
            },
            {
                "name": "Zamora Province",
                "isoCode": "ZA",
                "countryCode": "ES"
            },
            {
                "name": "Ávila",
                "isoCode": "AV",
                "countryCode": "ES"
            },
            {
                "name": "Ampara District",
                "isoCode": "52",
                "countryCode": "LK"
            },
            {
                "name": "Anuradhapura District",
                "isoCode": "71",
                "countryCode": "LK"
            },
            {
                "name": "Badulla District",
                "isoCode": "81",
                "countryCode": "LK"
            },
            {
                "name": "Batticaloa District",
                "isoCode": "51",
                "countryCode": "LK"
            },
            {
                "name": "Central Province",
                "isoCode": "2",
                "countryCode": "LK"
            },
            {
                "name": "Colombo District",
                "isoCode": "11",
                "countryCode": "LK"
            },
            {
                "name": "Eastern Province",
                "isoCode": "5",
                "countryCode": "LK"
            },
            {
                "name": "Galle District",
                "isoCode": "31",
                "countryCode": "LK"
            },
            {
                "name": "Gampaha District",
                "isoCode": "12",
                "countryCode": "LK"
            },
            {
                "name": "Hambantota District",
                "isoCode": "33",
                "countryCode": "LK"
            },
            {
                "name": "Jaffna District",
                "isoCode": "41",
                "countryCode": "LK"
            },
            {
                "name": "Kalutara District",
                "isoCode": "13",
                "countryCode": "LK"
            },
            {
                "name": "Kandy District",
                "isoCode": "21",
                "countryCode": "LK"
            },
            {
                "name": "Kegalle District",
                "isoCode": "92",
                "countryCode": "LK"
            },
            {
                "name": "Kilinochchi District",
                "isoCode": "42",
                "countryCode": "LK"
            },
            {
                "name": "Mannar District",
                "isoCode": "43",
                "countryCode": "LK"
            },
            {
                "name": "Matale District",
                "isoCode": "22",
                "countryCode": "LK"
            },
            {
                "name": "Matara District",
                "isoCode": "32",
                "countryCode": "LK"
            },
            {
                "name": "Monaragala District",
                "isoCode": "82",
                "countryCode": "LK"
            },
            {
                "name": "Mullaitivu District",
                "isoCode": "45",
                "countryCode": "LK"
            },
            {
                "name": "North Central Province",
                "isoCode": "7",
                "countryCode": "LK"
            },
            {
                "name": "North Western Province",
                "isoCode": "6",
                "countryCode": "LK"
            },
            {
                "name": "Northern Province",
                "isoCode": "4",
                "countryCode": "LK"
            },
            {
                "name": "Nuwara Eliya District",
                "isoCode": "23",
                "countryCode": "LK"
            },
            {
                "name": "Polonnaruwa District",
                "isoCode": "72",
                "countryCode": "LK"
            },
            {
                "name": "Puttalam District",
                "isoCode": "62",
                "countryCode": "LK"
            },
            {
                "name": "Ratnapura district",
                "isoCode": "91",
                "countryCode": "LK"
            },
            {
                "name": "Sabaragamuwa Province",
                "isoCode": "9",
                "countryCode": "LK"
            },
            {
                "name": "Southern Province",
                "isoCode": "3",
                "countryCode": "LK"
            },
            {
                "name": "Trincomalee District",
                "isoCode": "53",
                "countryCode": "LK"
            },
            {
                "name": "Uva Province",
                "isoCode": "8",
                "countryCode": "LK"
            },
            {
                "name": "Vavuniya District",
                "isoCode": "44",
                "countryCode": "LK"
            },
            {
                "name": "Western Province",
                "isoCode": "1",
                "countryCode": "LK"
            },
            {
                "name": "Al Jazirah",
                "isoCode": "GZ",
                "countryCode": "SD"
            },
            {
                "name": "Al Qadarif",
                "isoCode": "GD",
                "countryCode": "SD"
            },
            {
                "name": "Blue Nile",
                "isoCode": "NB",
                "countryCode": "SD"
            },
            {
                "name": "Central Darfur",
                "isoCode": "DC",
                "countryCode": "SD"
            },
            {
                "name": "East Darfur",
                "isoCode": "DE",
                "countryCode": "SD"
            },
            {
                "name": "Kassala",
                "isoCode": "KA",
                "countryCode": "SD"
            },
            {
                "name": "Khartoum",
                "isoCode": "KH",
                "countryCode": "SD"
            },
            {
                "name": "North Darfur",
                "isoCode": "DN",
                "countryCode": "SD"
            },
            {
                "name": "North Kordofan",
                "isoCode": "KN",
                "countryCode": "SD"
            },
            {
                "name": "Northern",
                "isoCode": "NO",
                "countryCode": "SD"
            },
            {
                "name": "Red Sea",
                "isoCode": "RS",
                "countryCode": "SD"
            },
            {
                "name": "River Nile",
                "isoCode": "NR",
                "countryCode": "SD"
            },
            {
                "name": "Sennar",
                "isoCode": "SI",
                "countryCode": "SD"
            },
            {
                "name": "South Darfur",
                "isoCode": "DS",
                "countryCode": "SD"
            },
            {
                "name": "South Kordofan",
                "isoCode": "KS",
                "countryCode": "SD"
            },
            {
                "name": "West Darfur",
                "isoCode": "DW",
                "countryCode": "SD"
            },
            {
                "name": "West Kordofan",
                "isoCode": "GK",
                "countryCode": "SD"
            },
            {
                "name": "White Nile",
                "isoCode": "NW",
                "countryCode": "SD"
            },
            {
                "name": "Brokopondo District",
                "isoCode": "BR",
                "countryCode": "SR"
            },
            {
                "name": "Commewijne District",
                "isoCode": "CM",
                "countryCode": "SR"
            },
            {
                "name": "Coronie District",
                "isoCode": "CR",
                "countryCode": "SR"
            },
            {
                "name": "Marowijne District",
                "isoCode": "MA",
                "countryCode": "SR"
            },
            {
                "name": "Nickerie District",
                "isoCode": "NI",
                "countryCode": "SR"
            },
            {
                "name": "Para District",
                "isoCode": "PR",
                "countryCode": "SR"
            },
            {
                "name": "Paramaribo District",
                "isoCode": "PM",
                "countryCode": "SR"
            },
            {
                "name": "Saramacca District",
                "isoCode": "SA",
                "countryCode": "SR"
            },
            {
                "name": "Sipaliwini District",
                "isoCode": "SI",
                "countryCode": "SR"
            },
            {
                "name": "Wanica District",
                "isoCode": "WA",
                "countryCode": "SR"
            },
            {
                "name": "Hhohho District",
                "isoCode": "HH",
                "countryCode": "SZ"
            },
            {
                "name": "Lubombo District",
                "isoCode": "LU",
                "countryCode": "SZ"
            },
            {
                "name": "Manzini District",
                "isoCode": "MA",
                "countryCode": "SZ"
            },
            {
                "name": "Shiselweni District",
                "isoCode": "SH",
                "countryCode": "SZ"
            },
            {
                "name": "Blekinge",
                "isoCode": "K",
                "countryCode": "SE"
            },
            {
                "name": "Dalarna County",
                "isoCode": "W",
                "countryCode": "SE"
            },
            {
                "name": "Gotland County",
                "isoCode": "I",
                "countryCode": "SE"
            },
            {
                "name": "Gävleborg County",
                "isoCode": "X",
                "countryCode": "SE"
            },
            {
                "name": "Halland County",
                "isoCode": "N",
                "countryCode": "SE"
            },
            {
                "name": "Jönköping County",
                "isoCode": "F",
                "countryCode": "SE"
            },
            {
                "name": "Kalmar County",
                "isoCode": "H",
                "countryCode": "SE"
            },
            {
                "name": "Kronoberg County",
                "isoCode": "G",
                "countryCode": "SE"
            },
            {
                "name": "Norrbotten County",
                "isoCode": "BD",
                "countryCode": "SE"
            },
            {
                "name": "Skåne County",
                "isoCode": "M",
                "countryCode": "SE"
            },
            {
                "name": "Stockholm County",
                "isoCode": "AB",
                "countryCode": "SE"
            },
            {
                "name": "Södermanland County",
                "isoCode": "D",
                "countryCode": "SE"
            },
            {
                "name": "Uppsala County",
                "isoCode": "C",
                "countryCode": "SE"
            },
            {
                "name": "Värmland County",
                "isoCode": "S",
                "countryCode": "SE"
            },
            {
                "name": "Västerbotten County",
                "isoCode": "AC",
                "countryCode": "SE"
            },
            {
                "name": "Västernorrland County",
                "isoCode": "Y",
                "countryCode": "SE"
            },
            {
                "name": "Västmanland County",
                "isoCode": "U",
                "countryCode": "SE"
            },
            {
                "name": "Västra Götaland County",
                "isoCode": "O",
                "countryCode": "SE"
            },
            {
                "name": "Örebro County",
                "isoCode": "T",
                "countryCode": "SE"
            },
            {
                "name": "Östergötland County",
                "isoCode": "E",
                "countryCode": "SE"
            },
            {
                "name": "Aargau",
                "isoCode": "AG",
                "countryCode": "CH"
            },
            {
                "name": "Appenzell Ausserrhoden",
                "isoCode": "AR",
                "countryCode": "CH"
            },
            {
                "name": "Appenzell Innerrhoden",
                "isoCode": "AI",
                "countryCode": "CH"
            },
            {
                "name": "Basel-Land",
                "isoCode": "BL",
                "countryCode": "CH"
            },
            {
                "name": "Basel-Stadt",
                "isoCode": "BS",
                "countryCode": "CH"
            },
            {
                "name": "Bern",
                "isoCode": "BE",
                "countryCode": "CH"
            },
            {
                "name": "Fribourg",
                "isoCode": "FR",
                "countryCode": "CH"
            },
            {
                "name": "Geneva",
                "isoCode": "GE",
                "countryCode": "CH"
            },
            {
                "name": "Glarus",
                "isoCode": "GL",
                "countryCode": "CH"
            },
            {
                "name": "Graubünden",
                "isoCode": "GR",
                "countryCode": "CH"
            },
            {
                "name": "Jura",
                "isoCode": "JU",
                "countryCode": "CH"
            },
            {
                "name": "Lucerne",
                "isoCode": "LU",
                "countryCode": "CH"
            },
            {
                "name": "Neuchâtel",
                "isoCode": "NE",
                "countryCode": "CH"
            },
            {
                "name": "Nidwalden",
                "isoCode": "NW",
                "countryCode": "CH"
            },
            {
                "name": "Obwalden",
                "isoCode": "OW",
                "countryCode": "CH"
            },
            {
                "name": "Schaffhausen",
                "isoCode": "SH",
                "countryCode": "CH"
            },
            {
                "name": "Schwyz",
                "isoCode": "SZ",
                "countryCode": "CH"
            },
            {
                "name": "Solothurn",
                "isoCode": "SO",
                "countryCode": "CH"
            },
            {
                "name": "St. Gallen",
                "isoCode": "SG",
                "countryCode": "CH"
            },
            {
                "name": "Thurgau",
                "isoCode": "TG",
                "countryCode": "CH"
            },
            {
                "name": "Ticino",
                "isoCode": "TI",
                "countryCode": "CH"
            },
            {
                "name": "Uri",
                "isoCode": "UR",
                "countryCode": "CH"
            },
            {
                "name": "Valais",
                "isoCode": "VS",
                "countryCode": "CH"
            },
            {
                "name": "Vaud",
                "isoCode": "VD",
                "countryCode": "CH"
            },
            {
                "name": "Zug",
                "isoCode": "ZG",
                "countryCode": "CH"
            },
            {
                "name": "Zürich",
                "isoCode": "ZH",
                "countryCode": "CH"
            },
            {
                "name": "Al-Hasakah Governorate",
                "isoCode": "HA",
                "countryCode": "SY"
            },
            {
                "name": "Al-Raqqah Governorate",
                "isoCode": "RA",
                "countryCode": "SY"
            },
            {
                "name": "Aleppo Governorate",
                "isoCode": "HL",
                "countryCode": "SY"
            },
            {
                "name": "As-Suwayda Governorate",
                "isoCode": "SU",
                "countryCode": "SY"
            },
            {
                "name": "Damascus Governorate",
                "isoCode": "DI",
                "countryCode": "SY"
            },
            {
                "name": "Daraa Governorate",
                "isoCode": "DR",
                "countryCode": "SY"
            },
            {
                "name": "Deir ez-Zor Governorate",
                "isoCode": "DY",
                "countryCode": "SY"
            },
            {
                "name": "Hama Governorate",
                "isoCode": "HM",
                "countryCode": "SY"
            },
            {
                "name": "Homs Governorate",
                "isoCode": "HI",
                "countryCode": "SY"
            },
            {
                "name": "Idlib Governorate",
                "isoCode": "ID",
                "countryCode": "SY"
            },
            {
                "name": "Latakia Governorate",
                "isoCode": "LA",
                "countryCode": "SY"
            },
            {
                "name": "Quneitra Governorate",
                "isoCode": "QU",
                "countryCode": "SY"
            },
            {
                "name": "Rif Dimashq Governorate",
                "isoCode": "RD",
                "countryCode": "SY"
            },
            {
                "name": "Tartus Governorate",
                "isoCode": "TA",
                "countryCode": "SY"
            },
            {
                "name": "Changhua",
                "isoCode": "CHA",
                "countryCode": "TW"
            },
            {
                "name": "Chiayi",
                "isoCode": "CYI",
                "countryCode": "TW"
            },
            {
                "name": "Chiayi",
                "isoCode": "CYQ",
                "countryCode": "TW"
            },
            {
                "name": "Hsinchu",
                "isoCode": "HSQ",
                "countryCode": "TW"
            },
            {
                "name": "Hsinchu",
                "isoCode": "HSZ",
                "countryCode": "TW"
            },
            {
                "name": "Hualien",
                "isoCode": "HUA",
                "countryCode": "TW"
            },
            {
                "name": "Kaohsiung",
                "isoCode": "KHH",
                "countryCode": "TW"
            },
            {
                "name": "Keelung",
                "isoCode": "KEE",
                "countryCode": "TW"
            },
            {
                "name": "Kinmen",
                "isoCode": "KIN",
                "countryCode": "TW"
            },
            {
                "name": "Lienchiang",
                "isoCode": "LIE",
                "countryCode": "TW"
            },
            {
                "name": "Miaoli",
                "isoCode": "MIA",
                "countryCode": "TW"
            },
            {
                "name": "Nantou",
                "isoCode": "NAN",
                "countryCode": "TW"
            },
            {
                "name": "New Taipei",
                "isoCode": "NWT",
                "countryCode": "TW"
            },
            {
                "name": "Penghu",
                "isoCode": "PEN",
                "countryCode": "TW"
            },
            {
                "name": "Pingtung",
                "isoCode": "PIF",
                "countryCode": "TW"
            },
            {
                "name": "Taichung",
                "isoCode": "TXG",
                "countryCode": "TW"
            },
            {
                "name": "Tainan",
                "isoCode": "TNN",
                "countryCode": "TW"
            },
            {
                "name": "Taipei",
                "isoCode": "TPE",
                "countryCode": "TW"
            },
            {
                "name": "Taitung",
                "isoCode": "TTT",
                "countryCode": "TW"
            },
            {
                "name": "Taoyuan",
                "isoCode": "TAO",
                "countryCode": "TW"
            },
            {
                "name": "Yilan",
                "isoCode": "ILA",
                "countryCode": "TW"
            },
            {
                "name": "Yunlin",
                "isoCode": "YUN",
                "countryCode": "TW"
            },
            {
                "name": "Gorno-Badakhshan Autonomous Province",
                "isoCode": "GB",
                "countryCode": "TJ"
            },
            {
                "name": "Khatlon Province",
                "isoCode": "KT",
                "countryCode": "TJ"
            },
            {
                "name": "Sughd Province",
                "isoCode": "SU",
                "countryCode": "TJ"
            },
            {
                "name": "districts of Republican Subordination",
                "isoCode": "RA",
                "countryCode": "TJ"
            },
            {
                "name": "Arusha",
                "isoCode": "01",
                "countryCode": "TZ"
            },
            {
                "name": "Dar es Salaam",
                "isoCode": "02",
                "countryCode": "TZ"
            },
            {
                "name": "Dodoma",
                "isoCode": "03",
                "countryCode": "TZ"
            },
            {
                "name": "Geita",
                "isoCode": "27",
                "countryCode": "TZ"
            },
            {
                "name": "Iringa",
                "isoCode": "04",
                "countryCode": "TZ"
            },
            {
                "name": "Kagera",
                "isoCode": "05",
                "countryCode": "TZ"
            },
            {
                "name": "Katavi",
                "isoCode": "28",
                "countryCode": "TZ"
            },
            {
                "name": "Kigoma",
                "isoCode": "08",
                "countryCode": "TZ"
            },
            {
                "name": "Kilimanjaro",
                "isoCode": "09",
                "countryCode": "TZ"
            },
            {
                "name": "Lindi",
                "isoCode": "12",
                "countryCode": "TZ"
            },
            {
                "name": "Manyara",
                "isoCode": "26",
                "countryCode": "TZ"
            },
            {
                "name": "Mara",
                "isoCode": "13",
                "countryCode": "TZ"
            },
            {
                "name": "Mbeya",
                "isoCode": "14",
                "countryCode": "TZ"
            },
            {
                "name": "Morogoro",
                "isoCode": "16",
                "countryCode": "TZ"
            },
            {
                "name": "Mtwara",
                "isoCode": "17",
                "countryCode": "TZ"
            },
            {
                "name": "Mwanza",
                "isoCode": "18",
                "countryCode": "TZ"
            },
            {
                "name": "Njombe",
                "isoCode": "29",
                "countryCode": "TZ"
            },
            {
                "name": "Pemba North",
                "isoCode": "06",
                "countryCode": "TZ"
            },
            {
                "name": "Pemba South",
                "isoCode": "10",
                "countryCode": "TZ"
            },
            {
                "name": "Pwani",
                "isoCode": "19",
                "countryCode": "TZ"
            },
            {
                "name": "Rukwa",
                "isoCode": "20",
                "countryCode": "TZ"
            },
            {
                "name": "Ruvuma",
                "isoCode": "21",
                "countryCode": "TZ"
            },
            {
                "name": "Shinyanga",
                "isoCode": "22",
                "countryCode": "TZ"
            },
            {
                "name": "Simiyu",
                "isoCode": "30",
                "countryCode": "TZ"
            },
            {
                "name": "Singida",
                "isoCode": "23",
                "countryCode": "TZ"
            },
            {
                "name": "Songwe",
                "isoCode": "31",
                "countryCode": "TZ"
            },
            {
                "name": "Tabora",
                "isoCode": "24",
                "countryCode": "TZ"
            },
            {
                "name": "Tanga",
                "isoCode": "25",
                "countryCode": "TZ"
            },
            {
                "name": "Zanzibar North",
                "isoCode": "07",
                "countryCode": "TZ"
            },
            {
                "name": "Zanzibar South",
                "isoCode": "11",
                "countryCode": "TZ"
            },
            {
                "name": "Zanzibar West",
                "isoCode": "15",
                "countryCode": "TZ"
            },
            {
                "name": "Amnat Charoen",
                "isoCode": "37",
                "countryCode": "TH"
            },
            {
                "name": "Ang Thong",
                "isoCode": "15",
                "countryCode": "TH"
            },
            {
                "name": "Bangkok",
                "isoCode": "10",
                "countryCode": "TH"
            },
            {
                "name": "Bueng Kan",
                "isoCode": "38",
                "countryCode": "TH"
            },
            {
                "name": "Buri Ram",
                "isoCode": "31",
                "countryCode": "TH"
            },
            {
                "name": "Chachoengsao",
                "isoCode": "24",
                "countryCode": "TH"
            },
            {
                "name": "Chai Nat",
                "isoCode": "18",
                "countryCode": "TH"
            },
            {
                "name": "Chaiyaphum",
                "isoCode": "36",
                "countryCode": "TH"
            },
            {
                "name": "Chanthaburi",
                "isoCode": "22",
                "countryCode": "TH"
            },
            {
                "name": "Chiang Mai",
                "isoCode": "50",
                "countryCode": "TH"
            },
            {
                "name": "Chiang Rai",
                "isoCode": "57",
                "countryCode": "TH"
            },
            {
                "name": "Chon Buri",
                "isoCode": "20",
                "countryCode": "TH"
            },
            {
                "name": "Chumphon",
                "isoCode": "86",
                "countryCode": "TH"
            },
            {
                "name": "Kalasin",
                "isoCode": "46",
                "countryCode": "TH"
            },
            {
                "name": "Kamphaeng Phet",
                "isoCode": "62",
                "countryCode": "TH"
            },
            {
                "name": "Kanchanaburi",
                "isoCode": "71",
                "countryCode": "TH"
            },
            {
                "name": "Khon Kaen",
                "isoCode": "40",
                "countryCode": "TH"
            },
            {
                "name": "Krabi",
                "isoCode": "81",
                "countryCode": "TH"
            },
            {
                "name": "Lampang",
                "isoCode": "52",
                "countryCode": "TH"
            },
            {
                "name": "Lamphun",
                "isoCode": "51",
                "countryCode": "TH"
            },
            {
                "name": "Loei",
                "isoCode": "42",
                "countryCode": "TH"
            },
            {
                "name": "Lop Buri",
                "isoCode": "16",
                "countryCode": "TH"
            },
            {
                "name": "Mae Hong Son",
                "isoCode": "58",
                "countryCode": "TH"
            },
            {
                "name": "Maha Sarakham",
                "isoCode": "44",
                "countryCode": "TH"
            },
            {
                "name": "Mukdahan",
                "isoCode": "49",
                "countryCode": "TH"
            },
            {
                "name": "Nakhon Nayok",
                "isoCode": "26",
                "countryCode": "TH"
            },
            {
                "name": "Nakhon Pathom",
                "isoCode": "73",
                "countryCode": "TH"
            },
            {
                "name": "Nakhon Phanom",
                "isoCode": "48",
                "countryCode": "TH"
            },
            {
                "name": "Nakhon Ratchasima",
                "isoCode": "30",
                "countryCode": "TH"
            },
            {
                "name": "Nakhon Sawan",
                "isoCode": "60",
                "countryCode": "TH"
            },
            {
                "name": "Nakhon Si Thammarat",
                "isoCode": "80",
                "countryCode": "TH"
            },
            {
                "name": "Nan",
                "isoCode": "55",
                "countryCode": "TH"
            },
            {
                "name": "Narathiwat",
                "isoCode": "96",
                "countryCode": "TH"
            },
            {
                "name": "Nong Bua Lam Phu",
                "isoCode": "39",
                "countryCode": "TH"
            },
            {
                "name": "Nong Khai",
                "isoCode": "43",
                "countryCode": "TH"
            },
            {
                "name": "Nonthaburi",
                "isoCode": "12",
                "countryCode": "TH"
            },
            {
                "name": "Pathum Thani",
                "isoCode": "13",
                "countryCode": "TH"
            },
            {
                "name": "Pattani",
                "isoCode": "94",
                "countryCode": "TH"
            },
            {
                "name": "Pattaya",
                "isoCode": "S",
                "countryCode": "TH"
            },
            {
                "name": "Phangnga",
                "isoCode": "82",
                "countryCode": "TH"
            },
            {
                "name": "Phatthalung",
                "isoCode": "93",
                "countryCode": "TH"
            },
            {
                "name": "Phayao",
                "isoCode": "56",
                "countryCode": "TH"
            },
            {
                "name": "Phetchabun",
                "isoCode": "67",
                "countryCode": "TH"
            },
            {
                "name": "Phetchaburi",
                "isoCode": "76",
                "countryCode": "TH"
            },
            {
                "name": "Phichit",
                "isoCode": "66",
                "countryCode": "TH"
            },
            {
                "name": "Phitsanulok",
                "isoCode": "65",
                "countryCode": "TH"
            },
            {
                "name": "Phra Nakhon Si Ayutthaya",
                "isoCode": "14",
                "countryCode": "TH"
            },
            {
                "name": "Phrae",
                "isoCode": "54",
                "countryCode": "TH"
            },
            {
                "name": "Phuket",
                "isoCode": "83",
                "countryCode": "TH"
            },
            {
                "name": "Prachin Buri",
                "isoCode": "25",
                "countryCode": "TH"
            },
            {
                "name": "Prachuap Khiri Khan",
                "isoCode": "77",
                "countryCode": "TH"
            },
            {
                "name": "Ranong",
                "isoCode": "85",
                "countryCode": "TH"
            },
            {
                "name": "Ratchaburi",
                "isoCode": "70",
                "countryCode": "TH"
            },
            {
                "name": "Rayong",
                "isoCode": "21",
                "countryCode": "TH"
            },
            {
                "name": "Roi Et",
                "isoCode": "45",
                "countryCode": "TH"
            },
            {
                "name": "Sa Kaeo",
                "isoCode": "27",
                "countryCode": "TH"
            },
            {
                "name": "Sakon Nakhon",
                "isoCode": "47",
                "countryCode": "TH"
            },
            {
                "name": "Samut Prakan",
                "isoCode": "11",
                "countryCode": "TH"
            },
            {
                "name": "Samut Sakhon",
                "isoCode": "74",
                "countryCode": "TH"
            },
            {
                "name": "Samut Songkhram",
                "isoCode": "75",
                "countryCode": "TH"
            },
            {
                "name": "Saraburi",
                "isoCode": "19",
                "countryCode": "TH"
            },
            {
                "name": "Satun",
                "isoCode": "91",
                "countryCode": "TH"
            },
            {
                "name": "Si Sa Ket",
                "isoCode": "33",
                "countryCode": "TH"
            },
            {
                "name": "Sing Buri",
                "isoCode": "17",
                "countryCode": "TH"
            },
            {
                "name": "Songkhla",
                "isoCode": "90",
                "countryCode": "TH"
            },
            {
                "name": "Sukhothai",
                "isoCode": "64",
                "countryCode": "TH"
            },
            {
                "name": "Suphan Buri",
                "isoCode": "72",
                "countryCode": "TH"
            },
            {
                "name": "Surat Thani",
                "isoCode": "84",
                "countryCode": "TH"
            },
            {
                "name": "Surin",
                "isoCode": "32",
                "countryCode": "TH"
            },
            {
                "name": "Tak",
                "isoCode": "63",
                "countryCode": "TH"
            },
            {
                "name": "Trang",
                "isoCode": "92",
                "countryCode": "TH"
            },
            {
                "name": "Trat",
                "isoCode": "23",
                "countryCode": "TH"
            },
            {
                "name": "Ubon Ratchathani",
                "isoCode": "34",
                "countryCode": "TH"
            },
            {
                "name": "Udon Thani",
                "isoCode": "41",
                "countryCode": "TH"
            },
            {
                "name": "Uthai Thani",
                "isoCode": "61",
                "countryCode": "TH"
            },
            {
                "name": "Uttaradit",
                "isoCode": "53",
                "countryCode": "TH"
            },
            {
                "name": "Yala",
                "isoCode": "95",
                "countryCode": "TH"
            },
            {
                "name": "Yasothon",
                "isoCode": "35",
                "countryCode": "TH"
            },
            {
                "name": "Centrale Region",
                "isoCode": "C",
                "countryCode": "TG"
            },
            {
                "name": "Kara Region",
                "isoCode": "K",
                "countryCode": "TG"
            },
            {
                "name": "Maritime",
                "isoCode": "M",
                "countryCode": "TG"
            },
            {
                "name": "Plateaux Region",
                "isoCode": "P",
                "countryCode": "TG"
            },
            {
                "name": "Savanes Region",
                "isoCode": "S",
                "countryCode": "TG"
            },
            {
                "name": "Haʻapai",
                "isoCode": "02",
                "countryCode": "TO"
            },
            {
                "name": "Niuas",
                "isoCode": "03",
                "countryCode": "TO"
            },
            {
                "name": "Tongatapu",
                "isoCode": "04",
                "countryCode": "TO"
            },
            {
                "name": "Vavaʻu",
                "isoCode": "05",
                "countryCode": "TO"
            },
            {
                "name": "ʻEua",
                "isoCode": "01",
                "countryCode": "TO"
            },
            {
                "name": "Arima",
                "isoCode": "ARI",
                "countryCode": "TT"
            },
            {
                "name": "Chaguanas",
                "isoCode": "CHA",
                "countryCode": "TT"
            },
            {
                "name": "Couva-Tabaquite-Talparo Regional Corporation",
                "isoCode": "CTT",
                "countryCode": "TT"
            },
            {
                "name": "Diego Martin Regional Corporation",
                "isoCode": "DMN",
                "countryCode": "TT"
            },
            {
                "name": "Eastern Tobago",
                "isoCode": "ETO",
                "countryCode": "TT"
            },
            {
                "name": "Penal-Debe Regional Corporation",
                "isoCode": "PED",
                "countryCode": "TT"
            },
            {
                "name": "Point Fortin",
                "isoCode": "PTF",
                "countryCode": "TT"
            },
            {
                "name": "Port of Spain",
                "isoCode": "POS",
                "countryCode": "TT"
            },
            {
                "name": "Princes Town Regional Corporation",
                "isoCode": "PRT",
                "countryCode": "TT"
            },
            {
                "name": "Rio Claro-Mayaro Regional Corporation",
                "isoCode": "MRC",
                "countryCode": "TT"
            },
            {
                "name": "San Fernando",
                "isoCode": "SFO",
                "countryCode": "TT"
            },
            {
                "name": "San Juan-Laventille Regional Corporation",
                "isoCode": "SJL",
                "countryCode": "TT"
            },
            {
                "name": "Sangre Grande Regional Corporation",
                "isoCode": "SGE",
                "countryCode": "TT"
            },
            {
                "name": "Siparia Regional Corporation",
                "isoCode": "SIP",
                "countryCode": "TT"
            },
            {
                "name": "Tunapuna-Piarco Regional Corporation",
                "isoCode": "TUP",
                "countryCode": "TT"
            },
            {
                "name": "Western Tobago",
                "isoCode": "WTO",
                "countryCode": "TT"
            },
            {
                "name": "Ariana Governorate",
                "isoCode": "12",
                "countryCode": "TN"
            },
            {
                "name": "Ben Arous Governorate",
                "isoCode": "13",
                "countryCode": "TN"
            },
            {
                "name": "Bizerte Governorate",
                "isoCode": "23",
                "countryCode": "TN"
            },
            {
                "name": "Gabès Governorate",
                "isoCode": "81",
                "countryCode": "TN"
            },
            {
                "name": "Gafsa Governorate",
                "isoCode": "71",
                "countryCode": "TN"
            },
            {
                "name": "Jendouba Governorate",
                "isoCode": "32",
                "countryCode": "TN"
            },
            {
                "name": "Kairouan Governorate",
                "isoCode": "41",
                "countryCode": "TN"
            },
            {
                "name": "Kasserine Governorate",
                "isoCode": "42",
                "countryCode": "TN"
            },
            {
                "name": "Kassrine",
                "isoCode": "31",
                "countryCode": "TN"
            },
            {
                "name": "Kebili Governorate",
                "isoCode": "73",
                "countryCode": "TN"
            },
            {
                "name": "Kef Governorate",
                "isoCode": "33",
                "countryCode": "TN"
            },
            {
                "name": "Mahdia Governorate",
                "isoCode": "53",
                "countryCode": "TN"
            },
            {
                "name": "Manouba Governorate",
                "isoCode": "14",
                "countryCode": "TN"
            },
            {
                "name": "Medenine Governorate",
                "isoCode": "82",
                "countryCode": "TN"
            },
            {
                "name": "Monastir Governorate",
                "isoCode": "52",
                "countryCode": "TN"
            },
            {
                "name": "Sfax Governorate",
                "isoCode": "61",
                "countryCode": "TN"
            },
            {
                "name": "Sidi Bouzid Governorate",
                "isoCode": "43",
                "countryCode": "TN"
            },
            {
                "name": "Siliana Governorate",
                "isoCode": "34",
                "countryCode": "TN"
            },
            {
                "name": "Sousse Governorate",
                "isoCode": "51",
                "countryCode": "TN"
            },
            {
                "name": "Tataouine Governorate",
                "isoCode": "83",
                "countryCode": "TN"
            },
            {
                "name": "Tozeur Governorate",
                "isoCode": "72",
                "countryCode": "TN"
            },
            {
                "name": "Tunis Governorate",
                "isoCode": "11",
                "countryCode": "TN"
            },
            {
                "name": "Zaghouan Governorate",
                "isoCode": "22",
                "countryCode": "TN"
            },
            {
                "name": "Adana",
                "isoCode": "01",
                "countryCode": "TR"
            },
            {
                "name": "Adıyaman",
                "isoCode": "02",
                "countryCode": "TR"
            },
            {
                "name": "Afyonkarahisar",
                "isoCode": "03",
                "countryCode": "TR"
            },
            {
                "name": "Aksaray",
                "isoCode": "68",
                "countryCode": "TR"
            },
            {
                "name": "Amasya",
                "isoCode": "05",
                "countryCode": "TR"
            },
            {
                "name": "Ankara",
                "isoCode": "06",
                "countryCode": "TR"
            },
            {
                "name": "Antalya",
                "isoCode": "07",
                "countryCode": "TR"
            },
            {
                "name": "Ardahan",
                "isoCode": "75",
                "countryCode": "TR"
            },
            {
                "name": "Artvin",
                "isoCode": "08",
                "countryCode": "TR"
            },
            {
                "name": "Aydın",
                "isoCode": "09",
                "countryCode": "TR"
            },
            {
                "name": "Ağrı",
                "isoCode": "04",
                "countryCode": "TR"
            },
            {
                "name": "Balıkesir",
                "isoCode": "10",
                "countryCode": "TR"
            },
            {
                "name": "Bartın",
                "isoCode": "74",
                "countryCode": "TR"
            },
            {
                "name": "Batman",
                "isoCode": "72",
                "countryCode": "TR"
            },
            {
                "name": "Bayburt",
                "isoCode": "69",
                "countryCode": "TR"
            },
            {
                "name": "Bilecik",
                "isoCode": "11",
                "countryCode": "TR"
            },
            {
                "name": "Bingöl",
                "isoCode": "12",
                "countryCode": "TR"
            },
            {
                "name": "Bitlis",
                "isoCode": "13",
                "countryCode": "TR"
            },
            {
                "name": "Bolu",
                "isoCode": "14",
                "countryCode": "TR"
            },
            {
                "name": "Burdur",
                "isoCode": "15",
                "countryCode": "TR"
            },
            {
                "name": "Bursa",
                "isoCode": "16",
                "countryCode": "TR"
            },
            {
                "name": "Denizli",
                "isoCode": "20",
                "countryCode": "TR"
            },
            {
                "name": "Diyarbakır",
                "isoCode": "21",
                "countryCode": "TR"
            },
            {
                "name": "Düzce",
                "isoCode": "81",
                "countryCode": "TR"
            },
            {
                "name": "Edirne",
                "isoCode": "22",
                "countryCode": "TR"
            },
            {
                "name": "Elazığ",
                "isoCode": "23",
                "countryCode": "TR"
            },
            {
                "name": "Erzincan",
                "isoCode": "24",
                "countryCode": "TR"
            },
            {
                "name": "Erzurum",
                "isoCode": "25",
                "countryCode": "TR"
            },
            {
                "name": "Eskişehir",
                "isoCode": "26",
                "countryCode": "TR"
            },
            {
                "name": "Gaziantep",
                "isoCode": "27",
                "countryCode": "TR"
            },
            {
                "name": "Giresun",
                "isoCode": "28",
                "countryCode": "TR"
            },
            {
                "name": "Gümüşhane",
                "isoCode": "29",
                "countryCode": "TR"
            },
            {
                "name": "Hakkâri",
                "isoCode": "30",
                "countryCode": "TR"
            },
            {
                "name": "Hatay",
                "isoCode": "31",
                "countryCode": "TR"
            },
            {
                "name": "Isparta",
                "isoCode": "32",
                "countryCode": "TR"
            },
            {
                "name": "Istanbul",
                "isoCode": "34",
                "countryCode": "TR"
            },
            {
                "name": "Iğdır",
                "isoCode": "76",
                "countryCode": "TR"
            },
            {
                "name": "Kahramanmaraş",
                "isoCode": "46",
                "countryCode": "TR"
            },
            {
                "name": "Karabük",
                "isoCode": "78",
                "countryCode": "TR"
            },
            {
                "name": "Karaman",
                "isoCode": "70",
                "countryCode": "TR"
            },
            {
                "name": "Kars",
                "isoCode": "36",
                "countryCode": "TR"
            },
            {
                "name": "Kastamonu",
                "isoCode": "37",
                "countryCode": "TR"
            },
            {
                "name": "Kayseri",
                "isoCode": "38",
                "countryCode": "TR"
            },
            {
                "name": "Kilis",
                "isoCode": "79",
                "countryCode": "TR"
            },
            {
                "name": "Kocaeli",
                "isoCode": "41",
                "countryCode": "TR"
            },
            {
                "name": "Konya",
                "isoCode": "42",
                "countryCode": "TR"
            },
            {
                "name": "Kütahya",
                "isoCode": "43",
                "countryCode": "TR"
            },
            {
                "name": "Kırklareli",
                "isoCode": "39",
                "countryCode": "TR"
            },
            {
                "name": "Kırıkkale",
                "isoCode": "71",
                "countryCode": "TR"
            },
            {
                "name": "Kırşehir",
                "isoCode": "40",
                "countryCode": "TR"
            },
            {
                "name": "Malatya",
                "isoCode": "44",
                "countryCode": "TR"
            },
            {
                "name": "Manisa",
                "isoCode": "45",
                "countryCode": "TR"
            },
            {
                "name": "Mardin",
                "isoCode": "47",
                "countryCode": "TR"
            },
            {
                "name": "Mersin",
                "isoCode": "33",
                "countryCode": "TR"
            },
            {
                "name": "Muğla",
                "isoCode": "48",
                "countryCode": "TR"
            },
            {
                "name": "Muş",
                "isoCode": "49",
                "countryCode": "TR"
            },
            {
                "name": "Nevşehir",
                "isoCode": "50",
                "countryCode": "TR"
            },
            {
                "name": "Niğde",
                "isoCode": "51",
                "countryCode": "TR"
            },
            {
                "name": "Ordu",
                "isoCode": "52",
                "countryCode": "TR"
            },
            {
                "name": "Osmaniye",
                "isoCode": "80",
                "countryCode": "TR"
            },
            {
                "name": "Rize",
                "isoCode": "53",
                "countryCode": "TR"
            },
            {
                "name": "Sakarya",
                "isoCode": "54",
                "countryCode": "TR"
            },
            {
                "name": "Samsun",
                "isoCode": "55",
                "countryCode": "TR"
            },
            {
                "name": "Siirt",
                "isoCode": "56",
                "countryCode": "TR"
            },
            {
                "name": "Sinop",
                "isoCode": "57",
                "countryCode": "TR"
            },
            {
                "name": "Sivas",
                "isoCode": "58",
                "countryCode": "TR"
            },
            {
                "name": "Tekirdağ",
                "isoCode": "59",
                "countryCode": "TR"
            },
            {
                "name": "Tokat",
                "isoCode": "60",
                "countryCode": "TR"
            },
            {
                "name": "Trabzon",
                "isoCode": "61",
                "countryCode": "TR"
            },
            {
                "name": "Tunceli",
                "isoCode": "62",
                "countryCode": "TR"
            },
            {
                "name": "Uşak",
                "isoCode": "64",
                "countryCode": "TR"
            },
            {
                "name": "Van",
                "isoCode": "65",
                "countryCode": "TR"
            },
            {
                "name": "Yalova",
                "isoCode": "77",
                "countryCode": "TR"
            },
            {
                "name": "Yozgat",
                "isoCode": "66",
                "countryCode": "TR"
            },
            {
                "name": "Zonguldak",
                "isoCode": "67",
                "countryCode": "TR"
            },
            {
                "name": "Çanakkale",
                "isoCode": "17",
                "countryCode": "TR"
            },
            {
                "name": "Çankırı",
                "isoCode": "18",
                "countryCode": "TR"
            },
            {
                "name": "Çorum",
                "isoCode": "19",
                "countryCode": "TR"
            },
            {
                "name": "İzmir",
                "isoCode": "35",
                "countryCode": "TR"
            },
            {
                "name": "Şanlıurfa",
                "isoCode": "63",
                "countryCode": "TR"
            },
            {
                "name": "Şırnak",
                "isoCode": "73",
                "countryCode": "TR"
            },
            {
                "name": "Ahal Region",
                "isoCode": "A",
                "countryCode": "TM"
            },
            {
                "name": "Ashgabat",
                "isoCode": "S",
                "countryCode": "TM"
            },
            {
                "name": "Balkan Region",
                "isoCode": "B",
                "countryCode": "TM"
            },
            {
                "name": "Daşoguz Region",
                "isoCode": "D",
                "countryCode": "TM"
            },
            {
                "name": "Lebap Region",
                "isoCode": "L",
                "countryCode": "TM"
            },
            {
                "name": "Mary Region",
                "isoCode": "M",
                "countryCode": "TM"
            },
            {
                "name": "Funafuti",
                "isoCode": "FUN",
                "countryCode": "TV"
            },
            {
                "name": "Nanumanga",
                "isoCode": "NMG",
                "countryCode": "TV"
            },
            {
                "name": "Nanumea",
                "isoCode": "NMA",
                "countryCode": "TV"
            },
            {
                "name": "Niutao Island Council",
                "isoCode": "NIT",
                "countryCode": "TV"
            },
            {
                "name": "Nui",
                "isoCode": "NUI",
                "countryCode": "TV"
            },
            {
                "name": "Nukufetau",
                "isoCode": "NKF",
                "countryCode": "TV"
            },
            {
                "name": "Nukulaelae",
                "isoCode": "NKL",
                "countryCode": "TV"
            },
            {
                "name": "Vaitupu",
                "isoCode": "VAI",
                "countryCode": "TV"
            },
            {
                "name": "Abim District",
                "isoCode": "314",
                "countryCode": "UG"
            },
            {
                "name": "Adjumani District",
                "isoCode": "301",
                "countryCode": "UG"
            },
            {
                "name": "Agago District",
                "isoCode": "322",
                "countryCode": "UG"
            },
            {
                "name": "Alebtong District",
                "isoCode": "323",
                "countryCode": "UG"
            },
            {
                "name": "Amolatar District",
                "isoCode": "315",
                "countryCode": "UG"
            },
            {
                "name": "Amudat District",
                "isoCode": "324",
                "countryCode": "UG"
            },
            {
                "name": "Amuria District",
                "isoCode": "216",
                "countryCode": "UG"
            },
            {
                "name": "Amuru District",
                "isoCode": "316",
                "countryCode": "UG"
            },
            {
                "name": "Apac District",
                "isoCode": "302",
                "countryCode": "UG"
            },
            {
                "name": "Arua District",
                "isoCode": "303",
                "countryCode": "UG"
            },
            {
                "name": "Budaka District",
                "isoCode": "217",
                "countryCode": "UG"
            },
            {
                "name": "Bududa District",
                "isoCode": "218",
                "countryCode": "UG"
            },
            {
                "name": "Bugiri District",
                "isoCode": "201",
                "countryCode": "UG"
            },
            {
                "name": "Buhweju District",
                "isoCode": "420",
                "countryCode": "UG"
            },
            {
                "name": "Buikwe District",
                "isoCode": "117",
                "countryCode": "UG"
            },
            {
                "name": "Bukedea District",
                "isoCode": "219",
                "countryCode": "UG"
            },
            {
                "name": "Bukomansimbi District",
                "isoCode": "118",
                "countryCode": "UG"
            },
            {
                "name": "Bukwo District",
                "isoCode": "220",
                "countryCode": "UG"
            },
            {
                "name": "Bulambuli District",
                "isoCode": "225",
                "countryCode": "UG"
            },
            {
                "name": "Buliisa District",
                "isoCode": "416",
                "countryCode": "UG"
            },
            {
                "name": "Bundibugyo District",
                "isoCode": "401",
                "countryCode": "UG"
            },
            {
                "name": "Bunyangabu District",
                "isoCode": "430",
                "countryCode": "UG"
            },
            {
                "name": "Bushenyi District",
                "isoCode": "402",
                "countryCode": "UG"
            },
            {
                "name": "Busia District",
                "isoCode": "202",
                "countryCode": "UG"
            },
            {
                "name": "Butaleja District",
                "isoCode": "221",
                "countryCode": "UG"
            },
            {
                "name": "Butambala District",
                "isoCode": "119",
                "countryCode": "UG"
            },
            {
                "name": "Butebo District",
                "isoCode": "233",
                "countryCode": "UG"
            },
            {
                "name": "Buvuma District",
                "isoCode": "120",
                "countryCode": "UG"
            },
            {
                "name": "Buyende District",
                "isoCode": "226",
                "countryCode": "UG"
            },
            {
                "name": "Central Region",
                "isoCode": "C",
                "countryCode": "UG"
            },
            {
                "name": "Dokolo District",
                "isoCode": "317",
                "countryCode": "UG"
            },
            {
                "name": "Eastern Region",
                "isoCode": "E",
                "countryCode": "UG"
            },
            {
                "name": "Gomba District",
                "isoCode": "121",
                "countryCode": "UG"
            },
            {
                "name": "Gulu District",
                "isoCode": "304",
                "countryCode": "UG"
            },
            {
                "name": "Ibanda District",
                "isoCode": "417",
                "countryCode": "UG"
            },
            {
                "name": "Iganga District",
                "isoCode": "203",
                "countryCode": "UG"
            },
            {
                "name": "Isingiro District",
                "isoCode": "418",
                "countryCode": "UG"
            },
            {
                "name": "Jinja District",
                "isoCode": "204",
                "countryCode": "UG"
            },
            {
                "name": "Kaabong District",
                "isoCode": "318",
                "countryCode": "UG"
            },
            {
                "name": "Kabale District",
                "isoCode": "404",
                "countryCode": "UG"
            },
            {
                "name": "Kabarole District",
                "isoCode": "405",
                "countryCode": "UG"
            },
            {
                "name": "Kaberamaido District",
                "isoCode": "213",
                "countryCode": "UG"
            },
            {
                "name": "Kagadi District",
                "isoCode": "427",
                "countryCode": "UG"
            },
            {
                "name": "Kakumiro District",
                "isoCode": "428",
                "countryCode": "UG"
            },
            {
                "name": "Kalangala District",
                "isoCode": "101",
                "countryCode": "UG"
            },
            {
                "name": "Kaliro District",
                "isoCode": "222",
                "countryCode": "UG"
            },
            {
                "name": "Kalungu District",
                "isoCode": "122",
                "countryCode": "UG"
            },
            {
                "name": "Kampala District",
                "isoCode": "102",
                "countryCode": "UG"
            },
            {
                "name": "Kamuli District",
                "isoCode": "205",
                "countryCode": "UG"
            },
            {
                "name": "Kamwenge District",
                "isoCode": "413",
                "countryCode": "UG"
            },
            {
                "name": "Kanungu District",
                "isoCode": "414",
                "countryCode": "UG"
            },
            {
                "name": "Kapchorwa District",
                "isoCode": "206",
                "countryCode": "UG"
            },
            {
                "name": "Kasese District",
                "isoCode": "406",
                "countryCode": "UG"
            },
            {
                "name": "Katakwi District",
                "isoCode": "207",
                "countryCode": "UG"
            },
            {
                "name": "Kayunga District",
                "isoCode": "112",
                "countryCode": "UG"
            },
            {
                "name": "Kibaale District",
                "isoCode": "407",
                "countryCode": "UG"
            },
            {
                "name": "Kiboga District",
                "isoCode": "103",
                "countryCode": "UG"
            },
            {
                "name": "Kibuku District",
                "isoCode": "227",
                "countryCode": "UG"
            },
            {
                "name": "Kiruhura District",
                "isoCode": "419",
                "countryCode": "UG"
            },
            {
                "name": "Kiryandongo District",
                "isoCode": "421",
                "countryCode": "UG"
            },
            {
                "name": "Kisoro District",
                "isoCode": "408",
                "countryCode": "UG"
            },
            {
                "name": "Kitgum District",
                "isoCode": "305",
                "countryCode": "UG"
            },
            {
                "name": "Koboko District",
                "isoCode": "319",
                "countryCode": "UG"
            },
            {
                "name": "Kole District",
                "isoCode": "325",
                "countryCode": "UG"
            },
            {
                "name": "Kotido District",
                "isoCode": "306",
                "countryCode": "UG"
            },
            {
                "name": "Kumi District",
                "isoCode": "208",
                "countryCode": "UG"
            },
            {
                "name": "Kween District",
                "isoCode": "228",
                "countryCode": "UG"
            },
            {
                "name": "Kyankwanzi District",
                "isoCode": "123",
                "countryCode": "UG"
            },
            {
                "name": "Kyegegwa District",
                "isoCode": "422",
                "countryCode": "UG"
            },
            {
                "name": "Kyenjojo District",
                "isoCode": "415",
                "countryCode": "UG"
            },
            {
                "name": "Kyotera District",
                "isoCode": "125",
                "countryCode": "UG"
            },
            {
                "name": "Lamwo District",
                "isoCode": "326",
                "countryCode": "UG"
            },
            {
                "name": "Lira District",
                "isoCode": "307",
                "countryCode": "UG"
            },
            {
                "name": "Luuka District",
                "isoCode": "229",
                "countryCode": "UG"
            },
            {
                "name": "Luwero District",
                "isoCode": "104",
                "countryCode": "UG"
            },
            {
                "name": "Lwengo District",
                "isoCode": "124",
                "countryCode": "UG"
            },
            {
                "name": "Lyantonde District",
                "isoCode": "114",
                "countryCode": "UG"
            },
            {
                "name": "Manafwa District",
                "isoCode": "223",
                "countryCode": "UG"
            },
            {
                "name": "Maracha District",
                "isoCode": "320",
                "countryCode": "UG"
            },
            {
                "name": "Masaka District",
                "isoCode": "105",
                "countryCode": "UG"
            },
            {
                "name": "Masindi District",
                "isoCode": "409",
                "countryCode": "UG"
            },
            {
                "name": "Mayuge District",
                "isoCode": "214",
                "countryCode": "UG"
            },
            {
                "name": "Mbale District",
                "isoCode": "209",
                "countryCode": "UG"
            },
            {
                "name": "Mbarara District",
                "isoCode": "410",
                "countryCode": "UG"
            },
            {
                "name": "Mitooma District",
                "isoCode": "423",
                "countryCode": "UG"
            },
            {
                "name": "Mityana District",
                "isoCode": "115",
                "countryCode": "UG"
            },
            {
                "name": "Moroto District",
                "isoCode": "308",
                "countryCode": "UG"
            },
            {
                "name": "Moyo District",
                "isoCode": "309",
                "countryCode": "UG"
            },
            {
                "name": "Mpigi District",
                "isoCode": "106",
                "countryCode": "UG"
            },
            {
                "name": "Mubende District",
                "isoCode": "107",
                "countryCode": "UG"
            },
            {
                "name": "Mukono District",
                "isoCode": "108",
                "countryCode": "UG"
            },
            {
                "name": "Nakapiripirit District",
                "isoCode": "311",
                "countryCode": "UG"
            },
            {
                "name": "Nakaseke District",
                "isoCode": "116",
                "countryCode": "UG"
            },
            {
                "name": "Nakasongola District",
                "isoCode": "109",
                "countryCode": "UG"
            },
            {
                "name": "Namayingo District",
                "isoCode": "230",
                "countryCode": "UG"
            },
            {
                "name": "Namisindwa District",
                "isoCode": "234",
                "countryCode": "UG"
            },
            {
                "name": "Namutumba District",
                "isoCode": "224",
                "countryCode": "UG"
            },
            {
                "name": "Napak District",
                "isoCode": "327",
                "countryCode": "UG"
            },
            {
                "name": "Nebbi District",
                "isoCode": "310",
                "countryCode": "UG"
            },
            {
                "name": "Ngora District",
                "isoCode": "231",
                "countryCode": "UG"
            },
            {
                "name": "Northern Region",
                "isoCode": "N",
                "countryCode": "UG"
            },
            {
                "name": "Ntoroko District",
                "isoCode": "424",
                "countryCode": "UG"
            },
            {
                "name": "Ntungamo District",
                "isoCode": "411",
                "countryCode": "UG"
            },
            {
                "name": "Nwoya District",
                "isoCode": "328",
                "countryCode": "UG"
            },
            {
                "name": "Omoro District",
                "isoCode": "331",
                "countryCode": "UG"
            },
            {
                "name": "Otuke District",
                "isoCode": "329",
                "countryCode": "UG"
            },
            {
                "name": "Oyam District",
                "isoCode": "321",
                "countryCode": "UG"
            },
            {
                "name": "Pader District",
                "isoCode": "312",
                "countryCode": "UG"
            },
            {
                "name": "Pakwach District",
                "isoCode": "332",
                "countryCode": "UG"
            },
            {
                "name": "Pallisa District",
                "isoCode": "210",
                "countryCode": "UG"
            },
            {
                "name": "Rakai District",
                "isoCode": "110",
                "countryCode": "UG"
            },
            {
                "name": "Rubanda District",
                "isoCode": "429",
                "countryCode": "UG"
            },
            {
                "name": "Rubirizi District",
                "isoCode": "425",
                "countryCode": "UG"
            },
            {
                "name": "Rukiga District",
                "isoCode": "431",
                "countryCode": "UG"
            },
            {
                "name": "Rukungiri District",
                "isoCode": "412",
                "countryCode": "UG"
            },
            {
                "name": "Sembabule District",
                "isoCode": "111",
                "countryCode": "UG"
            },
            {
                "name": "Serere District",
                "isoCode": "232",
                "countryCode": "UG"
            },
            {
                "name": "Sheema District",
                "isoCode": "426",
                "countryCode": "UG"
            },
            {
                "name": "Sironko District",
                "isoCode": "215",
                "countryCode": "UG"
            },
            {
                "name": "Soroti District",
                "isoCode": "211",
                "countryCode": "UG"
            },
            {
                "name": "Tororo District",
                "isoCode": "212",
                "countryCode": "UG"
            },
            {
                "name": "Wakiso District",
                "isoCode": "113",
                "countryCode": "UG"
            },
            {
                "name": "Western Region",
                "isoCode": "W",
                "countryCode": "UG"
            },
            {
                "name": "Yumbe District",
                "isoCode": "313",
                "countryCode": "UG"
            },
            {
                "name": "Zombo District",
                "isoCode": "330",
                "countryCode": "UG"
            },
            {
                "name": "Autonomous Republic of Crimea",
                "isoCode": "43",
                "countryCode": "UA"
            },
            {
                "name": "Cherkaska oblast",
                "isoCode": "71",
                "countryCode": "UA"
            },
            {
                "name": "Chernihivska oblast",
                "isoCode": "74",
                "countryCode": "UA"
            },
            {
                "name": "Chernivetska oblast",
                "isoCode": "77",
                "countryCode": "UA"
            },
            {
                "name": "Dnipropetrovska oblast",
                "isoCode": "12",
                "countryCode": "UA"
            },
            {
                "name": "Donetska oblast",
                "isoCode": "14",
                "countryCode": "UA"
            },
            {
                "name": "Ivano-Frankivska oblast",
                "isoCode": "26",
                "countryCode": "UA"
            },
            {
                "name": "Kharkivska oblast",
                "isoCode": "63",
                "countryCode": "UA"
            },
            {
                "name": "Khersonska oblast",
                "isoCode": "65",
                "countryCode": "UA"
            },
            {
                "name": "Khmelnytska oblast",
                "isoCode": "68",
                "countryCode": "UA"
            },
            {
                "name": "Kirovohradska oblast",
                "isoCode": "35",
                "countryCode": "UA"
            },
            {
                "name": "Kyiv",
                "isoCode": "30",
                "countryCode": "UA"
            },
            {
                "name": "Kyivska oblast",
                "isoCode": "32",
                "countryCode": "UA"
            },
            {
                "name": "Luhanska oblast",
                "isoCode": "09",
                "countryCode": "UA"
            },
            {
                "name": "Lvivska oblast",
                "isoCode": "46",
                "countryCode": "UA"
            },
            {
                "name": "Mykolaivska oblast",
                "isoCode": "48",
                "countryCode": "UA"
            },
            {
                "name": "Odeska oblast",
                "isoCode": "51",
                "countryCode": "UA"
            },
            {
                "name": "Poltavska oblast",
                "isoCode": "53",
                "countryCode": "UA"
            },
            {
                "name": "Rivnenska oblast",
                "isoCode": "56",
                "countryCode": "UA"
            },
            {
                "name": "Sumska oblast",
                "isoCode": "59",
                "countryCode": "UA"
            },
            {
                "name": "Ternopilska oblast",
                "isoCode": "61",
                "countryCode": "UA"
            },
            {
                "name": "Vinnytska oblast",
                "isoCode": "05",
                "countryCode": "UA"
            },
            {
                "name": "Volynska oblast",
                "isoCode": "07",
                "countryCode": "UA"
            },
            {
                "name": "Zakarpatska Oblast",
                "isoCode": "21",
                "countryCode": "UA"
            },
            {
                "name": "Zaporizka oblast",
                "isoCode": "23",
                "countryCode": "UA"
            },
            {
                "name": "Zhytomyrska oblast",
                "isoCode": "18",
                "countryCode": "UA"
            },
            {
                "name": "Abu Dhabi Emirate",
                "isoCode": "AZ",
                "countryCode": "AE"
            },
            {
                "name": "Ajman Emirate",
                "isoCode": "AJ",
                "countryCode": "AE"
            },
            {
                "name": "Dubai",
                "isoCode": "DU",
                "countryCode": "AE"
            },
            {
                "name": "Fujairah",
                "isoCode": "FU",
                "countryCode": "AE"
            },
            {
                "name": "Ras al-Khaimah",
                "isoCode": "RK",
                "countryCode": "AE"
            },
            {
                "name": "Sharjah Emirate",
                "isoCode": "SH",
                "countryCode": "AE"
            },
            {
                "name": "Umm al-Quwain",
                "isoCode": "UQ",
                "countryCode": "AE"
            },
            {
                "name": "Aberdeen",
                "isoCode": "ABE",
                "countryCode": "GB"
            },
            {
                "name": "Aberdeenshire",
                "isoCode": "ABD",
                "countryCode": "GB"
            },
            {
                "name": "Angus",
                "isoCode": "ANS",
                "countryCode": "GB"
            },
            {
                "name": "Antrim",
                "isoCode": "ANT",
                "countryCode": "GB"
            },
            {
                "name": "Antrim and Newtownabbey",
                "isoCode": "ANN",
                "countryCode": "GB"
            },
            {
                "name": "Ards",
                "isoCode": "ARD",
                "countryCode": "GB"
            },
            {
                "name": "Ards and North Down",
                "isoCode": "AND",
                "countryCode": "GB"
            },
            {
                "name": "Argyll and Bute",
                "isoCode": "AGB",
                "countryCode": "GB"
            },
            {
                "name": "Armagh City and District Council",
                "isoCode": "ARM",
                "countryCode": "GB"
            },
            {
                "name": "Armagh, Banbridge and Craigavon",
                "isoCode": "ABC",
                "countryCode": "GB"
            },
            {
                "name": "Ascension Island",
                "isoCode": "SH-AC",
                "countryCode": "GB"
            },
            {
                "name": "Ballymena Borough",
                "isoCode": "BLA",
                "countryCode": "GB"
            },
            {
                "name": "Ballymoney",
                "isoCode": "BLY",
                "countryCode": "GB"
            },
            {
                "name": "Banbridge",
                "isoCode": "BNB",
                "countryCode": "GB"
            },
            {
                "name": "Barnsley",
                "isoCode": "BNS",
                "countryCode": "GB"
            },
            {
                "name": "Bath and North East Somerset",
                "isoCode": "BAS",
                "countryCode": "GB"
            },
            {
                "name": "Bedford",
                "isoCode": "BDF",
                "countryCode": "GB"
            },
            {
                "name": "Belfast district",
                "isoCode": "BFS",
                "countryCode": "GB"
            },
            {
                "name": "Birmingham",
                "isoCode": "BIR",
                "countryCode": "GB"
            },
            {
                "name": "Blackburn with Darwen",
                "isoCode": "BBD",
                "countryCode": "GB"
            },
            {
                "name": "Blackpool",
                "isoCode": "BPL",
                "countryCode": "GB"
            },
            {
                "name": "Blaenau Gwent County Borough",
                "isoCode": "BGW",
                "countryCode": "GB"
            },
            {
                "name": "Bolton",
                "isoCode": "BOL",
                "countryCode": "GB"
            },
            {
                "name": "Bournemouth",
                "isoCode": "BMH",
                "countryCode": "GB"
            },
            {
                "name": "Bracknell Forest",
                "isoCode": "BRC",
                "countryCode": "GB"
            },
            {
                "name": "Bradford",
                "isoCode": "BRD",
                "countryCode": "GB"
            },
            {
                "name": "Bridgend County Borough",
                "isoCode": "BGE",
                "countryCode": "GB"
            },
            {
                "name": "Brighton and Hove",
                "isoCode": "BNH",
                "countryCode": "GB"
            },
            {
                "name": "Buckinghamshire",
                "isoCode": "BKM",
                "countryCode": "GB"
            },
            {
                "name": "Bury",
                "isoCode": "BUR",
                "countryCode": "GB"
            },
            {
                "name": "Caerphilly County Borough",
                "isoCode": "CAY",
                "countryCode": "GB"
            },
            {
                "name": "Calderdale",
                "isoCode": "CLD",
                "countryCode": "GB"
            },
            {
                "name": "Cambridgeshire",
                "isoCode": "CAM",
                "countryCode": "GB"
            },
            {
                "name": "Carmarthenshire",
                "isoCode": "CMN",
                "countryCode": "GB"
            },
            {
                "name": "Carrickfergus Borough Council",
                "isoCode": "CKF",
                "countryCode": "GB"
            },
            {
                "name": "Castlereagh",
                "isoCode": "CSR",
                "countryCode": "GB"
            },
            {
                "name": "Causeway Coast and Glens",
                "isoCode": "CCG",
                "countryCode": "GB"
            },
            {
                "name": "Central Bedfordshire",
                "isoCode": "CBF",
                "countryCode": "GB"
            },
            {
                "name": "Ceredigion",
                "isoCode": "CGN",
                "countryCode": "GB"
            },
            {
                "name": "Cheshire East",
                "isoCode": "CHE",
                "countryCode": "GB"
            },
            {
                "name": "Cheshire West and Chester",
                "isoCode": "CHW",
                "countryCode": "GB"
            },
            {
                "name": "City and County of Cardiff",
                "isoCode": "CRF",
                "countryCode": "GB"
            },
            {
                "name": "City and County of Swansea",
                "isoCode": "SWA",
                "countryCode": "GB"
            },
            {
                "name": "City of Bristol",
                "isoCode": "BST",
                "countryCode": "GB"
            },
            {
                "name": "City of Derby",
                "isoCode": "DER",
                "countryCode": "GB"
            },
            {
                "name": "City of Kingston upon Hull",
                "isoCode": "KHL",
                "countryCode": "GB"
            },
            {
                "name": "City of Leicester",
                "isoCode": "LCE",
                "countryCode": "GB"
            },
            {
                "name": "City of London",
                "isoCode": "LND",
                "countryCode": "GB"
            },
            {
                "name": "City of Nottingham",
                "isoCode": "NGM",
                "countryCode": "GB"
            },
            {
                "name": "City of Peterborough",
                "isoCode": "PTE",
                "countryCode": "GB"
            },
            {
                "name": "City of Plymouth",
                "isoCode": "PLY",
                "countryCode": "GB"
            },
            {
                "name": "City of Portsmouth",
                "isoCode": "POR",
                "countryCode": "GB"
            },
            {
                "name": "City of Southampton",
                "isoCode": "STH",
                "countryCode": "GB"
            },
            {
                "name": "City of Stoke-on-Trent",
                "isoCode": "STE",
                "countryCode": "GB"
            },
            {
                "name": "City of Sunderland",
                "isoCode": "SND",
                "countryCode": "GB"
            },
            {
                "name": "City of Westminster",
                "isoCode": "WSM",
                "countryCode": "GB"
            },
            {
                "name": "City of Wolverhampton",
                "isoCode": "WLV",
                "countryCode": "GB"
            },
            {
                "name": "City of York",
                "isoCode": "YOR",
                "countryCode": "GB"
            },
            {
                "name": "Clackmannanshire",
                "isoCode": "CLK",
                "countryCode": "GB"
            },
            {
                "name": "Coleraine Borough Council",
                "isoCode": "CLR",
                "countryCode": "GB"
            },
            {
                "name": "Conwy County Borough",
                "isoCode": "CWY",
                "countryCode": "GB"
            },
            {
                "name": "Cookstown District Council",
                "isoCode": "CKT",
                "countryCode": "GB"
            },
            {
                "name": "Cornwall",
                "isoCode": "CON",
                "countryCode": "GB"
            },
            {
                "name": "County Durham",
                "isoCode": "DUR",
                "countryCode": "GB"
            },
            {
                "name": "Coventry",
                "isoCode": "COV",
                "countryCode": "GB"
            },
            {
                "name": "Craigavon Borough Council",
                "isoCode": "CGV",
                "countryCode": "GB"
            },
            {
                "name": "Cumbria",
                "isoCode": "CMA",
                "countryCode": "GB"
            },
            {
                "name": "Darlington",
                "isoCode": "DAL",
                "countryCode": "GB"
            },
            {
                "name": "Denbighshire",
                "isoCode": "DEN",
                "countryCode": "GB"
            },
            {
                "name": "Derbyshire",
                "isoCode": "DBY",
                "countryCode": "GB"
            },
            {
                "name": "Derry City Council",
                "isoCode": "DRY",
                "countryCode": "GB"
            },
            {
                "name": "Derry City and Strabane",
                "isoCode": "DRS",
                "countryCode": "GB"
            },
            {
                "name": "Devon",
                "isoCode": "DEV",
                "countryCode": "GB"
            },
            {
                "name": "Doncaster",
                "isoCode": "DNC",
                "countryCode": "GB"
            },
            {
                "name": "Dorset",
                "isoCode": "DOR",
                "countryCode": "GB"
            },
            {
                "name": "Down District Council",
                "isoCode": "DOW",
                "countryCode": "GB"
            },
            {
                "name": "Dudley",
                "isoCode": "DUD",
                "countryCode": "GB"
            },
            {
                "name": "Dumfries and Galloway",
                "isoCode": "DGY",
                "countryCode": "GB"
            },
            {
                "name": "Dundee",
                "isoCode": "DND",
                "countryCode": "GB"
            },
            {
                "name": "Dungannon and South Tyrone Borough Council",
                "isoCode": "DGN",
                "countryCode": "GB"
            },
            {
                "name": "East Ayrshire",
                "isoCode": "EAY",
                "countryCode": "GB"
            },
            {
                "name": "East Dunbartonshire",
                "isoCode": "EDU",
                "countryCode": "GB"
            },
            {
                "name": "East Lothian",
                "isoCode": "ELN",
                "countryCode": "GB"
            },
            {
                "name": "East Renfrewshire",
                "isoCode": "ERW",
                "countryCode": "GB"
            },
            {
                "name": "East Riding of Yorkshire",
                "isoCode": "ERY",
                "countryCode": "GB"
            },
            {
                "name": "East Sussex",
                "isoCode": "ESX",
                "countryCode": "GB"
            },
            {
                "name": "Edinburgh",
                "isoCode": "EDH",
                "countryCode": "GB"
            },
            {
                "name": "England",
                "isoCode": "ENG",
                "countryCode": "GB"
            },
            {
                "name": "Essex",
                "isoCode": "ESS",
                "countryCode": "GB"
            },
            {
                "name": "Falkirk",
                "isoCode": "FAL",
                "countryCode": "GB"
            },
            {
                "name": "Fermanagh District Council",
                "isoCode": "FER",
                "countryCode": "GB"
            },
            {
                "name": "Fermanagh and Omagh",
                "isoCode": "FMO",
                "countryCode": "GB"
            },
            {
                "name": "Fife",
                "isoCode": "FIF",
                "countryCode": "GB"
            },
            {
                "name": "Flintshire",
                "isoCode": "FLN",
                "countryCode": "GB"
            },
            {
                "name": "Gateshead",
                "isoCode": "GAT",
                "countryCode": "GB"
            },
            {
                "name": "Glasgow",
                "isoCode": "GLG",
                "countryCode": "GB"
            },
            {
                "name": "Gloucestershire",
                "isoCode": "GLS",
                "countryCode": "GB"
            },
            {
                "name": "Gwynedd",
                "isoCode": "GWN",
                "countryCode": "GB"
            },
            {
                "name": "Halton",
                "isoCode": "HAL",
                "countryCode": "GB"
            },
            {
                "name": "Hampshire",
                "isoCode": "HAM",
                "countryCode": "GB"
            },
            {
                "name": "Hartlepool",
                "isoCode": "HPL",
                "countryCode": "GB"
            },
            {
                "name": "Herefordshire",
                "isoCode": "HEF",
                "countryCode": "GB"
            },
            {
                "name": "Hertfordshire",
                "isoCode": "HRT",
                "countryCode": "GB"
            },
            {
                "name": "Highland",
                "isoCode": "HLD",
                "countryCode": "GB"
            },
            {
                "name": "Inverclyde",
                "isoCode": "IVC",
                "countryCode": "GB"
            },
            {
                "name": "Isle of Wight",
                "isoCode": "IOW",
                "countryCode": "GB"
            },
            {
                "name": "Isles of Scilly",
                "isoCode": "IOS",
                "countryCode": "GB"
            },
            {
                "name": "Kent",
                "isoCode": "KEN",
                "countryCode": "GB"
            },
            {
                "name": "Kirklees",
                "isoCode": "KIR",
                "countryCode": "GB"
            },
            {
                "name": "Knowsley",
                "isoCode": "KWL",
                "countryCode": "GB"
            },
            {
                "name": "Lancashire",
                "isoCode": "LAN",
                "countryCode": "GB"
            },
            {
                "name": "Larne Borough Council",
                "isoCode": "LRN",
                "countryCode": "GB"
            },
            {
                "name": "Leeds",
                "isoCode": "LDS",
                "countryCode": "GB"
            },
            {
                "name": "Leicestershire",
                "isoCode": "LEC",
                "countryCode": "GB"
            },
            {
                "name": "Limavady Borough Council",
                "isoCode": "LMV",
                "countryCode": "GB"
            },
            {
                "name": "Lincolnshire",
                "isoCode": "LIN",
                "countryCode": "GB"
            },
            {
                "name": "Lisburn City Council",
                "isoCode": "LSB",
                "countryCode": "GB"
            },
            {
                "name": "Lisburn and Castlereagh",
                "isoCode": "LBC",
                "countryCode": "GB"
            },
            {
                "name": "Liverpool",
                "isoCode": "LIV",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Barking and Dagenham",
                "isoCode": "BDG",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Barnet",
                "isoCode": "BNE",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Bexley",
                "isoCode": "BEX",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Brent",
                "isoCode": "BEN",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Bromley",
                "isoCode": "BRY",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Camden",
                "isoCode": "CMD",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Croydon",
                "isoCode": "CRY",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Ealing",
                "isoCode": "EAL",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Enfield",
                "isoCode": "ENF",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Hackney",
                "isoCode": "HCK",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Hammersmith and Fulham",
                "isoCode": "HMF",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Haringey",
                "isoCode": "HRY",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Harrow",
                "isoCode": "HRW",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Havering",
                "isoCode": "HAV",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Hillingdon",
                "isoCode": "HIL",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Hounslow",
                "isoCode": "HNS",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Islington",
                "isoCode": "ISL",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Lambeth",
                "isoCode": "LBH",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Lewisham",
                "isoCode": "LEW",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Merton",
                "isoCode": "MRT",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Newham",
                "isoCode": "NWM",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Redbridge",
                "isoCode": "RDB",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Richmond upon Thames",
                "isoCode": "RIC",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Southwark",
                "isoCode": "SWK",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Sutton",
                "isoCode": "STN",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Tower Hamlets",
                "isoCode": "TWH",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Waltham Forest",
                "isoCode": "WFT",
                "countryCode": "GB"
            },
            {
                "name": "London Borough of Wandsworth",
                "isoCode": "WND",
                "countryCode": "GB"
            },
            {
                "name": "Magherafelt District Council",
                "isoCode": "MFT",
                "countryCode": "GB"
            },
            {
                "name": "Manchester",
                "isoCode": "MAN",
                "countryCode": "GB"
            },
            {
                "name": "Medway",
                "isoCode": "MDW",
                "countryCode": "GB"
            },
            {
                "name": "Merthyr Tydfil County Borough",
                "isoCode": "MTY",
                "countryCode": "GB"
            },
            {
                "name": "Metropolitan Borough of Wigan",
                "isoCode": "WGN",
                "countryCode": "GB"
            },
            {
                "name": "Mid Ulster",
                "isoCode": "MUL",
                "countryCode": "GB"
            },
            {
                "name": "Mid and East Antrim",
                "isoCode": "MEA",
                "countryCode": "GB"
            },
            {
                "name": "Middlesbrough",
                "isoCode": "MDB",
                "countryCode": "GB"
            },
            {
                "name": "Midlothian",
                "isoCode": "MLN",
                "countryCode": "GB"
            },
            {
                "name": "Milton Keynes",
                "isoCode": "MIK",
                "countryCode": "GB"
            },
            {
                "name": "Monmouthshire",
                "isoCode": "MON",
                "countryCode": "GB"
            },
            {
                "name": "Moray",
                "isoCode": "MRY",
                "countryCode": "GB"
            },
            {
                "name": "Moyle District Council",
                "isoCode": "MYL",
                "countryCode": "GB"
            },
            {
                "name": "Neath Port Talbot County Borough",
                "isoCode": "NTL",
                "countryCode": "GB"
            },
            {
                "name": "Newcastle upon Tyne",
                "isoCode": "NET",
                "countryCode": "GB"
            },
            {
                "name": "Newport",
                "isoCode": "NWP",
                "countryCode": "GB"
            },
            {
                "name": "Newry and Mourne District Council",
                "isoCode": "NYM",
                "countryCode": "GB"
            },
            {
                "name": "Newry, Mourne and Down",
                "isoCode": "NMD",
                "countryCode": "GB"
            },
            {
                "name": "Newtownabbey Borough Council",
                "isoCode": "NTA",
                "countryCode": "GB"
            },
            {
                "name": "Norfolk",
                "isoCode": "NFK",
                "countryCode": "GB"
            },
            {
                "name": "North Ayrshire",
                "isoCode": "NAY",
                "countryCode": "GB"
            },
            {
                "name": "North Down Borough Council",
                "isoCode": "NDN",
                "countryCode": "GB"
            },
            {
                "name": "North East Lincolnshire",
                "isoCode": "NEL",
                "countryCode": "GB"
            },
            {
                "name": "North Lanarkshire",
                "isoCode": "NLK",
                "countryCode": "GB"
            },
            {
                "name": "North Lincolnshire",
                "isoCode": "NLN",
                "countryCode": "GB"
            },
            {
                "name": "North Somerset",
                "isoCode": "NSM",
                "countryCode": "GB"
            },
            {
                "name": "North Tyneside",
                "isoCode": "NTY",
                "countryCode": "GB"
            },
            {
                "name": "North Yorkshire",
                "isoCode": "NYK",
                "countryCode": "GB"
            },
            {
                "name": "Northamptonshire",
                "isoCode": "NTH",
                "countryCode": "GB"
            },
            {
                "name": "Northern Ireland",
                "isoCode": "NIR",
                "countryCode": "GB"
            },
            {
                "name": "Northumberland",
                "isoCode": "NBL",
                "countryCode": "GB"
            },
            {
                "name": "Nottinghamshire",
                "isoCode": "NTT",
                "countryCode": "GB"
            },
            {
                "name": "Oldham",
                "isoCode": "OLD",
                "countryCode": "GB"
            },
            {
                "name": "Omagh District Council",
                "isoCode": "OMH",
                "countryCode": "GB"
            },
            {
                "name": "Orkney Islands",
                "isoCode": "ORK",
                "countryCode": "GB"
            },
            {
                "name": "Outer Hebrides",
                "isoCode": "ELS",
                "countryCode": "GB"
            },
            {
                "name": "Oxfordshire",
                "isoCode": "OXF",
                "countryCode": "GB"
            },
            {
                "name": "Pembrokeshire",
                "isoCode": "PEM",
                "countryCode": "GB"
            },
            {
                "name": "Perth and Kinross",
                "isoCode": "PKN",
                "countryCode": "GB"
            },
            {
                "name": "Poole",
                "isoCode": "POL",
                "countryCode": "GB"
            },
            {
                "name": "Powys",
                "isoCode": "POW",
                "countryCode": "GB"
            },
            {
                "name": "Reading",
                "isoCode": "RDG",
                "countryCode": "GB"
            },
            {
                "name": "Redcar and Cleveland",
                "isoCode": "RCC",
                "countryCode": "GB"
            },
            {
                "name": "Renfrewshire",
                "isoCode": "RFW",
                "countryCode": "GB"
            },
            {
                "name": "Rhondda Cynon Taf",
                "isoCode": "RCT",
                "countryCode": "GB"
            },
            {
                "name": "Rochdale",
                "isoCode": "RCH",
                "countryCode": "GB"
            },
            {
                "name": "Rotherham",
                "isoCode": "ROT",
                "countryCode": "GB"
            },
            {
                "name": "Royal Borough of Greenwich",
                "isoCode": "GRE",
                "countryCode": "GB"
            },
            {
                "name": "Royal Borough of Kensington and Chelsea",
                "isoCode": "KEC",
                "countryCode": "GB"
            },
            {
                "name": "Royal Borough of Kingston upon Thames",
                "isoCode": "KTT",
                "countryCode": "GB"
            },
            {
                "name": "Rutland",
                "isoCode": "RUT",
                "countryCode": "GB"
            },
            {
                "name": "Saint Helena",
                "isoCode": "SH-HL",
                "countryCode": "GB"
            },
            {
                "name": "Salford",
                "isoCode": "SLF",
                "countryCode": "GB"
            },
            {
                "name": "Sandwell",
                "isoCode": "SAW",
                "countryCode": "GB"
            },
            {
                "name": "Scotland",
                "isoCode": "SCT",
                "countryCode": "GB"
            },
            {
                "name": "Scottish Borders",
                "isoCode": "SCB",
                "countryCode": "GB"
            },
            {
                "name": "Sefton",
                "isoCode": "SFT",
                "countryCode": "GB"
            },
            {
                "name": "Sheffield",
                "isoCode": "SHF",
                "countryCode": "GB"
            },
            {
                "name": "Shetland Islands",
                "isoCode": "ZET",
                "countryCode": "GB"
            },
            {
                "name": "Shropshire",
                "isoCode": "SHR",
                "countryCode": "GB"
            },
            {
                "name": "Slough",
                "isoCode": "SLG",
                "countryCode": "GB"
            },
            {
                "name": "Solihull",
                "isoCode": "SOL",
                "countryCode": "GB"
            },
            {
                "name": "Somerset",
                "isoCode": "SOM",
                "countryCode": "GB"
            },
            {
                "name": "South Ayrshire",
                "isoCode": "SAY",
                "countryCode": "GB"
            },
            {
                "name": "South Gloucestershire",
                "isoCode": "SGC",
                "countryCode": "GB"
            },
            {
                "name": "South Lanarkshire",
                "isoCode": "SLK",
                "countryCode": "GB"
            },
            {
                "name": "South Tyneside",
                "isoCode": "STY",
                "countryCode": "GB"
            },
            {
                "name": "Southend-on-Sea",
                "isoCode": "SOS",
                "countryCode": "GB"
            },
            {
                "name": "St Helens",
                "isoCode": "SHN",
                "countryCode": "GB"
            },
            {
                "name": "Staffordshire",
                "isoCode": "STS",
                "countryCode": "GB"
            },
            {
                "name": "Stirling",
                "isoCode": "STG",
                "countryCode": "GB"
            },
            {
                "name": "Stockport",
                "isoCode": "SKP",
                "countryCode": "GB"
            },
            {
                "name": "Stockton-on-Tees",
                "isoCode": "STT",
                "countryCode": "GB"
            },
            {
                "name": "Strabane District Council",
                "isoCode": "STB",
                "countryCode": "GB"
            },
            {
                "name": "Suffolk",
                "isoCode": "SFK",
                "countryCode": "GB"
            },
            {
                "name": "Surrey",
                "isoCode": "SRY",
                "countryCode": "GB"
            },
            {
                "name": "Swindon",
                "isoCode": "SWD",
                "countryCode": "GB"
            },
            {
                "name": "Tameside",
                "isoCode": "TAM",
                "countryCode": "GB"
            },
            {
                "name": "Telford and Wrekin",
                "isoCode": "TFW",
                "countryCode": "GB"
            },
            {
                "name": "Thurrock",
                "isoCode": "THR",
                "countryCode": "GB"
            },
            {
                "name": "Torbay",
                "isoCode": "TOB",
                "countryCode": "GB"
            },
            {
                "name": "Torfaen",
                "isoCode": "TOF",
                "countryCode": "GB"
            },
            {
                "name": "Trafford",
                "isoCode": "TRF",
                "countryCode": "GB"
            },
            {
                "name": "United Kingdom",
                "isoCode": "UKM",
                "countryCode": "GB"
            },
            {
                "name": "Vale of Glamorgan",
                "isoCode": "VGL",
                "countryCode": "GB"
            },
            {
                "name": "Wakefield",
                "isoCode": "WKF",
                "countryCode": "GB"
            },
            {
                "name": "Wales",
                "isoCode": "WLS",
                "countryCode": "GB"
            },
            {
                "name": "Walsall",
                "isoCode": "WLL",
                "countryCode": "GB"
            },
            {
                "name": "Warrington",
                "isoCode": "WRT",
                "countryCode": "GB"
            },
            {
                "name": "Warwickshire",
                "isoCode": "WAR",
                "countryCode": "GB"
            },
            {
                "name": "West Berkshire",
                "isoCode": "WBK",
                "countryCode": "GB"
            },
            {
                "name": "West Dunbartonshire",
                "isoCode": "WDU",
                "countryCode": "GB"
            },
            {
                "name": "West Lothian",
                "isoCode": "WLN",
                "countryCode": "GB"
            },
            {
                "name": "West Sussex",
                "isoCode": "WSX",
                "countryCode": "GB"
            },
            {
                "name": "Wiltshire",
                "isoCode": "WIL",
                "countryCode": "GB"
            },
            {
                "name": "Windsor and Maidenhead",
                "isoCode": "WNM",
                "countryCode": "GB"
            },
            {
                "name": "Wirral",
                "isoCode": "WRL",
                "countryCode": "GB"
            },
            {
                "name": "Wokingham",
                "isoCode": "WOK",
                "countryCode": "GB"
            },
            {
                "name": "Worcestershire",
                "isoCode": "WOR",
                "countryCode": "GB"
            },
            {
                "name": "Wrexham County Borough",
                "isoCode": "WRX",
                "countryCode": "GB"
            },
            {
                "name": "Alabama",
                "isoCode": "AL",
                "countryCode": "US"
            },
            {
                "name": "Alaska",
                "isoCode": "AK",
                "countryCode": "US"
            },
            {
                "name": "American Samoa",
                "isoCode": "AS",
                "countryCode": "US"
            },
            {
                "name": "Arizona",
                "isoCode": "AZ",
                "countryCode": "US"
            },
            {
                "name": "Arkansas",
                "isoCode": "AR",
                "countryCode": "US"
            },
            {
                "name": "Baker Island",
                "isoCode": "UM-81",
                "countryCode": "US"
            },
            {
                "name": "California",
                "isoCode": "CA",
                "countryCode": "US"
            },
            {
                "name": "Colorado",
                "isoCode": "CO",
                "countryCode": "US"
            },
            {
                "name": "Connecticut",
                "isoCode": "CT",
                "countryCode": "US"
            },
            {
                "name": "Delaware",
                "isoCode": "DE",
                "countryCode": "US"
            },
            {
                "name": "District of Columbia",
                "isoCode": "DC",
                "countryCode": "US"
            },
            {
                "name": "Florida",
                "isoCode": "FL",
                "countryCode": "US"
            },
            {
                "name": "Georgia",
                "isoCode": "GA",
                "countryCode": "US"
            },
            {
                "name": "Guam",
                "isoCode": "GU",
                "countryCode": "US"
            },
            {
                "name": "Hawaii",
                "isoCode": "HI",
                "countryCode": "US"
            },
            {
                "name": "Howland Island",
                "isoCode": "UM-84",
                "countryCode": "US"
            },
            {
                "name": "Idaho",
                "isoCode": "ID",
                "countryCode": "US"
            },
            {
                "name": "Illinois",
                "isoCode": "IL",
                "countryCode": "US"
            },
            {
                "name": "Indiana",
                "isoCode": "IN",
                "countryCode": "US"
            },
            {
                "name": "Iowa",
                "isoCode": "IA",
                "countryCode": "US"
            },
            {
                "name": "Jarvis Island",
                "isoCode": "UM-86",
                "countryCode": "US"
            },
            {
                "name": "Johnston Atoll",
                "isoCode": "UM-67",
                "countryCode": "US"
            },
            {
                "name": "Kansas",
                "isoCode": "KS",
                "countryCode": "US"
            },
            {
                "name": "Kentucky",
                "isoCode": "KY",
                "countryCode": "US"
            },
            {
                "name": "Kingman Reef",
                "isoCode": "UM-89",
                "countryCode": "US"
            },
            {
                "name": "Louisiana",
                "isoCode": "LA",
                "countryCode": "US"
            },
            {
                "name": "Maine",
                "isoCode": "ME",
                "countryCode": "US"
            },
            {
                "name": "Maryland",
                "isoCode": "MD",
                "countryCode": "US"
            },
            {
                "name": "Massachusetts",
                "isoCode": "MA",
                "countryCode": "US"
            },
            {
                "name": "Michigan",
                "isoCode": "MI",
                "countryCode": "US"
            },
            {
                "name": "Midway Atoll",
                "isoCode": "UM-71",
                "countryCode": "US"
            },
            {
                "name": "Minnesota",
                "isoCode": "MN",
                "countryCode": "US"
            },
            {
                "name": "Mississippi",
                "isoCode": "MS",
                "countryCode": "US"
            },
            {
                "name": "Missouri",
                "isoCode": "MO",
                "countryCode": "US"
            },
            {
                "name": "Montana",
                "isoCode": "MT",
                "countryCode": "US"
            },
            {
                "name": "Navassa Island",
                "isoCode": "UM-76",
                "countryCode": "US"
            },
            {
                "name": "Nebraska",
                "isoCode": "NE",
                "countryCode": "US"
            },
            {
                "name": "Nevada",
                "isoCode": "NV",
                "countryCode": "US"
            },
            {
                "name": "New Hampshire",
                "isoCode": "NH",
                "countryCode": "US"
            },
            {
                "name": "New Jersey",
                "isoCode": "NJ",
                "countryCode": "US"
            },
            {
                "name": "New Mexico",
                "isoCode": "NM",
                "countryCode": "US"
            },
            {
                "name": "New York",
                "isoCode": "NY",
                "countryCode": "US"
            },
            {
                "name": "North Carolina",
                "isoCode": "NC",
                "countryCode": "US"
            },
            {
                "name": "North Dakota",
                "isoCode": "ND",
                "countryCode": "US"
            },
            {
                "name": "Northern Mariana Islands",
                "isoCode": "MP",
                "countryCode": "US"
            },
            {
                "name": "Ohio",
                "isoCode": "OH",
                "countryCode": "US"
            },
            {
                "name": "Oklahoma",
                "isoCode": "OK",
                "countryCode": "US"
            },
            {
                "name": "Oregon",
                "isoCode": "OR",
                "countryCode": "US"
            },
            {
                "name": "Palmyra Atoll",
                "isoCode": "UM-95",
                "countryCode": "US"
            },
            {
                "name": "Pennsylvania",
                "isoCode": "PA",
                "countryCode": "US"
            },
            {
                "name": "Puerto Rico",
                "isoCode": "PR",
                "countryCode": "US"
            },
            {
                "name": "Rhode Island",
                "isoCode": "RI",
                "countryCode": "US"
            },
            {
                "name": "South Carolina",
                "isoCode": "SC",
                "countryCode": "US"
            },
            {
                "name": "South Dakota",
                "isoCode": "SD",
                "countryCode": "US"
            },
            {
                "name": "Tennessee",
                "isoCode": "TN",
                "countryCode": "US"
            },
            {
                "name": "Texas",
                "isoCode": "TX",
                "countryCode": "US"
            },
            {
                "name": "United States Minor Outlying Islands",
                "isoCode": "UM",
                "countryCode": "US"
            },
            {
                "name": "United States Virgin Islands",
                "isoCode": "VI",
                "countryCode": "US"
            },
            {
                "name": "Utah",
                "isoCode": "UT",
                "countryCode": "US"
            },
            {
                "name": "Vermont",
                "isoCode": "VT",
                "countryCode": "US"
            },
            {
                "name": "Virginia",
                "isoCode": "VA",
                "countryCode": "US"
            },
            {
                "name": "Wake Island",
                "isoCode": "UM-79",
                "countryCode": "US"
            },
            {
                "name": "Washington",
                "isoCode": "WA",
                "countryCode": "US"
            },
            {
                "name": "West Virginia",
                "isoCode": "WV",
                "countryCode": "US"
            },
            {
                "name": "Wisconsin",
                "isoCode": "WI",
                "countryCode": "US"
            },
            {
                "name": "Wyoming",
                "isoCode": "WY",
                "countryCode": "US"
            },
            {
                "name": "Artigas Department",
                "isoCode": "AR",
                "countryCode": "UY"
            },
            {
                "name": "Canelones Department",
                "isoCode": "CA",
                "countryCode": "UY"
            },
            {
                "name": "Cerro Largo Department",
                "isoCode": "CL",
                "countryCode": "UY"
            },
            {
                "name": "Colonia Department",
                "isoCode": "CO",
                "countryCode": "UY"
            },
            {
                "name": "Durazno Department",
                "isoCode": "DU",
                "countryCode": "UY"
            },
            {
                "name": "Flores Department",
                "isoCode": "FS",
                "countryCode": "UY"
            },
            {
                "name": "Florida Department",
                "isoCode": "FD",
                "countryCode": "UY"
            },
            {
                "name": "Lavalleja Department",
                "isoCode": "LA",
                "countryCode": "UY"
            },
            {
                "name": "Maldonado Department",
                "isoCode": "MA",
                "countryCode": "UY"
            },
            {
                "name": "Montevideo Department",
                "isoCode": "MO",
                "countryCode": "UY"
            },
            {
                "name": "Paysandú Department",
                "isoCode": "PA",
                "countryCode": "UY"
            },
            {
                "name": "Rivera Department",
                "isoCode": "RV",
                "countryCode": "UY"
            },
            {
                "name": "Rocha Department",
                "isoCode": "RO",
                "countryCode": "UY"
            },
            {
                "name": "Río Negro Department",
                "isoCode": "RN",
                "countryCode": "UY"
            },
            {
                "name": "Salto Department",
                "isoCode": "SA",
                "countryCode": "UY"
            },
            {
                "name": "San José Department",
                "isoCode": "SJ",
                "countryCode": "UY"
            },
            {
                "name": "Soriano Department",
                "isoCode": "SO",
                "countryCode": "UY"
            },
            {
                "name": "Tacuarembó Department",
                "isoCode": "TA",
                "countryCode": "UY"
            },
            {
                "name": "Treinta y Tres Department",
                "isoCode": "TT",
                "countryCode": "UY"
            },
            {
                "name": "Andijan Region",
                "isoCode": "AN",
                "countryCode": "UZ"
            },
            {
                "name": "Bukhara Region",
                "isoCode": "BU",
                "countryCode": "UZ"
            },
            {
                "name": "Fergana Region",
                "isoCode": "FA",
                "countryCode": "UZ"
            },
            {
                "name": "Jizzakh Region",
                "isoCode": "JI",
                "countryCode": "UZ"
            },
            {
                "name": "Karakalpakstan",
                "isoCode": "QR",
                "countryCode": "UZ"
            },
            {
                "name": "Namangan Region",
                "isoCode": "NG",
                "countryCode": "UZ"
            },
            {
                "name": "Navoiy Region",
                "isoCode": "NW",
                "countryCode": "UZ"
            },
            {
                "name": "Qashqadaryo Region",
                "isoCode": "QA",
                "countryCode": "UZ"
            },
            {
                "name": "Samarqand Region",
                "isoCode": "SA",
                "countryCode": "UZ"
            },
            {
                "name": "Sirdaryo Region",
                "isoCode": "SI",
                "countryCode": "UZ"
            },
            {
                "name": "Surxondaryo Region",
                "isoCode": "SU",
                "countryCode": "UZ"
            },
            {
                "name": "Tashkent",
                "isoCode": "TK",
                "countryCode": "UZ"
            },
            {
                "name": "Tashkent Region",
                "isoCode": "TO",
                "countryCode": "UZ"
            },
            {
                "name": "Xorazm Region",
                "isoCode": "XO",
                "countryCode": "UZ"
            },
            {
                "name": "Malampa",
                "isoCode": "MAP",
                "countryCode": "VU"
            },
            {
                "name": "Penama",
                "isoCode": "PAM",
                "countryCode": "VU"
            },
            {
                "name": "Sanma",
                "isoCode": "SAM",
                "countryCode": "VU"
            },
            {
                "name": "Shefa",
                "isoCode": "SEE",
                "countryCode": "VU"
            },
            {
                "name": "Tafea",
                "isoCode": "TAE",
                "countryCode": "VU"
            },
            {
                "name": "Torba",
                "isoCode": "TOB",
                "countryCode": "VU"
            },
            {
                "name": "Amazonas",
                "isoCode": "Z",
                "countryCode": "VE"
            },
            {
                "name": "Anzoátegui",
                "isoCode": "B",
                "countryCode": "VE"
            },
            {
                "name": "Apure",
                "isoCode": "C",
                "countryCode": "VE"
            },
            {
                "name": "Aragua",
                "isoCode": "D",
                "countryCode": "VE"
            },
            {
                "name": "Barinas",
                "isoCode": "E",
                "countryCode": "VE"
            },
            {
                "name": "Bolívar",
                "isoCode": "F",
                "countryCode": "VE"
            },
            {
                "name": "Carabobo",
                "isoCode": "G",
                "countryCode": "VE"
            },
            {
                "name": "Cojedes",
                "isoCode": "H",
                "countryCode": "VE"
            },
            {
                "name": "Delta Amacuro",
                "isoCode": "Y",
                "countryCode": "VE"
            },
            {
                "name": "Distrito Capital",
                "isoCode": "A",
                "countryCode": "VE"
            },
            {
                "name": "Falcón",
                "isoCode": "I",
                "countryCode": "VE"
            },
            {
                "name": "Federal Dependencies of Venezuela",
                "isoCode": "W",
                "countryCode": "VE"
            },
            {
                "name": "Guárico",
                "isoCode": "J",
                "countryCode": "VE"
            },
            {
                "name": "La Guaira",
                "isoCode": "X",
                "countryCode": "VE"
            },
            {
                "name": "Lara",
                "isoCode": "K",
                "countryCode": "VE"
            },
            {
                "name": "Miranda",
                "isoCode": "M",
                "countryCode": "VE"
            },
            {
                "name": "Monagas",
                "isoCode": "N",
                "countryCode": "VE"
            },
            {
                "name": "Mérida",
                "isoCode": "L",
                "countryCode": "VE"
            },
            {
                "name": "Nueva Esparta",
                "isoCode": "O",
                "countryCode": "VE"
            },
            {
                "name": "Portuguesa",
                "isoCode": "P",
                "countryCode": "VE"
            },
            {
                "name": "Sucre",
                "isoCode": "R",
                "countryCode": "VE"
            },
            {
                "name": "Trujillo",
                "isoCode": "T",
                "countryCode": "VE"
            },
            {
                "name": "Táchira",
                "isoCode": "S",
                "countryCode": "VE"
            },
            {
                "name": "Yaracuy",
                "isoCode": "U",
                "countryCode": "VE"
            },
            {
                "name": "Zulia",
                "isoCode": "V",
                "countryCode": "VE"
            },
            {
                "name": "An Giang",
                "isoCode": "44",
                "countryCode": "VN"
            },
            {
                "name": "Bà Rịa-Vũng Tàu",
                "isoCode": "43",
                "countryCode": "VN"
            },
            {
                "name": "Bình Dương",
                "isoCode": "57",
                "countryCode": "VN"
            },
            {
                "name": "Bình Phước",
                "isoCode": "58",
                "countryCode": "VN"
            },
            {
                "name": "Bình Thuận",
                "isoCode": "40",
                "countryCode": "VN"
            },
            {
                "name": "Bình Định",
                "isoCode": "31",
                "countryCode": "VN"
            },
            {
                "name": "Bạc Liêu",
                "isoCode": "55",
                "countryCode": "VN"
            },
            {
                "name": "Bắc Giang",
                "isoCode": "54",
                "countryCode": "VN"
            },
            {
                "name": "Bắc Kạn",
                "isoCode": "53",
                "countryCode": "VN"
            },
            {
                "name": "Bắc Ninh",
                "isoCode": "56",
                "countryCode": "VN"
            },
            {
                "name": "Bến Tre",
                "isoCode": "50",
                "countryCode": "VN"
            },
            {
                "name": "Cao Bằng",
                "isoCode": "04",
                "countryCode": "VN"
            },
            {
                "name": "Cà Mau",
                "isoCode": "59",
                "countryCode": "VN"
            },
            {
                "name": "Cần Thơ",
                "isoCode": "CT",
                "countryCode": "VN"
            },
            {
                "name": "Gia Lai",
                "isoCode": "30",
                "countryCode": "VN"
            },
            {
                "name": "Hà Giang",
                "isoCode": "03",
                "countryCode": "VN"
            },
            {
                "name": "Hà Nam",
                "isoCode": "63",
                "countryCode": "VN"
            },
            {
                "name": "Hà Nội",
                "isoCode": "HN",
                "countryCode": "VN"
            },
            {
                "name": "Hà Tĩnh",
                "isoCode": "23",
                "countryCode": "VN"
            },
            {
                "name": "Hòa Bình",
                "isoCode": "14",
                "countryCode": "VN"
            },
            {
                "name": "Hưng Yên",
                "isoCode": "66",
                "countryCode": "VN"
            },
            {
                "name": "Hải Dương",
                "isoCode": "61",
                "countryCode": "VN"
            },
            {
                "name": "Hải Phòng",
                "isoCode": "HP",
                "countryCode": "VN"
            },
            {
                "name": "Hậu Giang",
                "isoCode": "73",
                "countryCode": "VN"
            },
            {
                "name": "Hồ Chí Minh",
                "isoCode": "SG",
                "countryCode": "VN"
            },
            {
                "name": "Khánh Hòa",
                "isoCode": "34",
                "countryCode": "VN"
            },
            {
                "name": "Kiên Giang",
                "isoCode": "47",
                "countryCode": "VN"
            },
            {
                "name": "Kon Tum",
                "isoCode": "28",
                "countryCode": "VN"
            },
            {
                "name": "Lai Châu",
                "isoCode": "01",
                "countryCode": "VN"
            },
            {
                "name": "Long An",
                "isoCode": "41",
                "countryCode": "VN"
            },
            {
                "name": "Lào Cai",
                "isoCode": "02",
                "countryCode": "VN"
            },
            {
                "name": "Lâm Đồng",
                "isoCode": "35",
                "countryCode": "VN"
            },
            {
                "name": "Lạng Sơn",
                "isoCode": "09",
                "countryCode": "VN"
            },
            {
                "name": "Nam Định",
                "isoCode": "67",
                "countryCode": "VN"
            },
            {
                "name": "Nghệ An",
                "isoCode": "22",
                "countryCode": "VN"
            },
            {
                "name": "Ninh Bình",
                "isoCode": "18",
                "countryCode": "VN"
            },
            {
                "name": "Ninh Thuận",
                "isoCode": "36",
                "countryCode": "VN"
            },
            {
                "name": "Phú Thọ",
                "isoCode": "68",
                "countryCode": "VN"
            },
            {
                "name": "Phú Yên",
                "isoCode": "32",
                "countryCode": "VN"
            },
            {
                "name": "Quảng Bình",
                "isoCode": "24",
                "countryCode": "VN"
            },
            {
                "name": "Quảng Nam",
                "isoCode": "27",
                "countryCode": "VN"
            },
            {
                "name": "Quảng Ngãi",
                "isoCode": "29",
                "countryCode": "VN"
            },
            {
                "name": "Quảng Ninh",
                "isoCode": "13",
                "countryCode": "VN"
            },
            {
                "name": "Quảng Trị",
                "isoCode": "25",
                "countryCode": "VN"
            },
            {
                "name": "Sóc Trăng",
                "isoCode": "52",
                "countryCode": "VN"
            },
            {
                "name": "Sơn La",
                "isoCode": "05",
                "countryCode": "VN"
            },
            {
                "name": "Thanh Hóa",
                "isoCode": "21",
                "countryCode": "VN"
            },
            {
                "name": "Thái Bình",
                "isoCode": "20",
                "countryCode": "VN"
            },
            {
                "name": "Thái Nguyên",
                "isoCode": "69",
                "countryCode": "VN"
            },
            {
                "name": "Thừa Thiên-Huế",
                "isoCode": "26",
                "countryCode": "VN"
            },
            {
                "name": "Tiền Giang",
                "isoCode": "46",
                "countryCode": "VN"
            },
            {
                "name": "Trà Vinh",
                "isoCode": "51",
                "countryCode": "VN"
            },
            {
                "name": "Tuyên Quang",
                "isoCode": "07",
                "countryCode": "VN"
            },
            {
                "name": "Tây Ninh",
                "isoCode": "37",
                "countryCode": "VN"
            },
            {
                "name": "Vĩnh Long",
                "isoCode": "49",
                "countryCode": "VN"
            },
            {
                "name": "Vĩnh Phúc",
                "isoCode": "70",
                "countryCode": "VN"
            },
            {
                "name": "Yên Bái",
                "isoCode": "06",
                "countryCode": "VN"
            },
            {
                "name": "Điện Biên",
                "isoCode": "71",
                "countryCode": "VN"
            },
            {
                "name": "Đà Nẵng",
                "isoCode": "DN",
                "countryCode": "VN"
            },
            {
                "name": "Đắk Lắk",
                "isoCode": "33",
                "countryCode": "VN"
            },
            {
                "name": "Đắk Nông",
                "isoCode": "72",
                "countryCode": "VN"
            },
            {
                "name": "Đồng Nai",
                "isoCode": "39",
                "countryCode": "VN"
            },
            {
                "name": "Đồng Tháp",
                "isoCode": "45",
                "countryCode": "VN"
            },
            {
                "name": "'Adan Governorate",
                "isoCode": "AD",
                "countryCode": "YE"
            },
            {
                "name": "'Amran Governorate",
                "isoCode": "AM",
                "countryCode": "YE"
            },
            {
                "name": "Abyan Governorate",
                "isoCode": "AB",
                "countryCode": "YE"
            },
            {
                "name": "Al Bayda' Governorate",
                "isoCode": "BA",
                "countryCode": "YE"
            },
            {
                "name": "Al Hudaydah Governorate",
                "isoCode": "HU",
                "countryCode": "YE"
            },
            {
                "name": "Al Jawf Governorate",
                "isoCode": "JA",
                "countryCode": "YE"
            },
            {
                "name": "Al Mahrah Governorate",
                "isoCode": "MR",
                "countryCode": "YE"
            },
            {
                "name": "Al Mahwit Governorate",
                "isoCode": "MW",
                "countryCode": "YE"
            },
            {
                "name": "Dhamar Governorate",
                "isoCode": "DH",
                "countryCode": "YE"
            },
            {
                "name": "Hadhramaut Governorate",
                "isoCode": "HD",
                "countryCode": "YE"
            },
            {
                "name": "Hajjah Governorate",
                "isoCode": "HJ",
                "countryCode": "YE"
            },
            {
                "name": "Ibb Governorate",
                "isoCode": "IB",
                "countryCode": "YE"
            },
            {
                "name": "Lahij Governorate",
                "isoCode": "LA",
                "countryCode": "YE"
            },
            {
                "name": "Ma'rib Governorate",
                "isoCode": "MA",
                "countryCode": "YE"
            },
            {
                "name": "Raymah Governorate",
                "isoCode": "RA",
                "countryCode": "YE"
            },
            {
                "name": "Saada Governorate",
                "isoCode": "SD",
                "countryCode": "YE"
            },
            {
                "name": "Sana'a",
                "isoCode": "SA",
                "countryCode": "YE"
            },
            {
                "name": "Sana'a Governorate",
                "isoCode": "SN",
                "countryCode": "YE"
            },
            {
                "name": "Shabwah Governorate",
                "isoCode": "SH",
                "countryCode": "YE"
            },
            {
                "name": "Socotra Governorate",
                "isoCode": "SU",
                "countryCode": "YE"
            },
            {
                "name": "Ta'izz Governorate",
                "isoCode": "TA",
                "countryCode": "YE"
            },
            {
                "name": "Central Province",
                "isoCode": "02",
                "countryCode": "ZM"
            },
            {
                "name": "Copperbelt Province",
                "isoCode": "08",
                "countryCode": "ZM"
            },
            {
                "name": "Eastern Province",
                "isoCode": "03",
                "countryCode": "ZM"
            },
            {
                "name": "Luapula Province",
                "isoCode": "04",
                "countryCode": "ZM"
            },
            {
                "name": "Lusaka Province",
                "isoCode": "09",
                "countryCode": "ZM"
            },
            {
                "name": "Muchinga Province",
                "isoCode": "10",
                "countryCode": "ZM"
            },
            {
                "name": "Northern Province",
                "isoCode": "05",
                "countryCode": "ZM"
            },
            {
                "name": "Northwestern Province",
                "isoCode": "06",
                "countryCode": "ZM"
            },
            {
                "name": "Southern Province",
                "isoCode": "07",
                "countryCode": "ZM"
            },
            {
                "name": "Western Province",
                "isoCode": "01",
                "countryCode": "ZM"
            },
            {
                "name": "Bulawayo Province",
                "isoCode": "BU",
                "countryCode": "ZW"
            },
            {
                "name": "Harare Province",
                "isoCode": "HA",
                "countryCode": "ZW"
            },
            {
                "name": "Manicaland",
                "isoCode": "MA",
                "countryCode": "ZW"
            },
            {
                "name": "Mashonaland Central Province",
                "isoCode": "MC",
                "countryCode": "ZW"
            },
            {
                "name": "Mashonaland East Province",
                "isoCode": "ME",
                "countryCode": "ZW"
            },
            {
                "name": "Mashonaland West Province",
                "isoCode": "MW",
                "countryCode": "ZW"
            },
            {
                "name": "Masvingo Province",
                "isoCode": "MV",
                "countryCode": "ZW"
            },
            {
                "name": "Matabeleland North Province",
                "isoCode": "MN",
                "countryCode": "ZW"
            },
            {
                "name": "Matabeleland South Province",
                "isoCode": "MS",
                "countryCode": "ZW"
            },
            {
                "name": "Midlands Province",
                "isoCode": "MI",
                "countryCode": "ZW"
            },
            {
                "name": "Gjilan District",
                "isoCode": "XGJ",
                "countryCode": "XK"
            },
            {
                "name": "Kosovska Mitrovica District",
                "isoCode": "XKM",
                "countryCode": "XK"
            },
            {
                "name": "Peć District",
                "isoCode": "XPE",
                "countryCode": "XK"
            },
            {
                "name": "Pristina (Priştine)",
                "isoCode": "XPI",
                "countryCode": "XK"
            },
            {
                "name": "Prizren District",
                "isoCode": "XPR",
                "countryCode": "XK"
            },
            {
                "name": "Uroševac District (Ferizaj)",
                "isoCode": "XUF",
                "countryCode": "XK"
            },
            {
                "name": "Đakovica District (Gjakove)",
                "isoCode": "XDG",
                "countryCode": "XK"
            }
        ]

      const stateData = states.map((val, index) => ({
        id: index + 1,
        name: val.name,
        iso_code: val.isoCode,
        country_code: val.countryCode,
        created_at: new Date(),
        updated_at: new Date()
      }));
      return queryInterface.bulkInsert("states", stateData, { truncate: true });
  },

  down: (queryInterface) =>
    queryInterface.bulkDelete("states", null, { truncate: true }),
};
