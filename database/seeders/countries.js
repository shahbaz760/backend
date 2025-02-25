"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
        let countries = [
          {
            "name": "Afghanistan",
            "isoCode": "AF",
            "flag": "🇦🇫",
            "phonecode": "93",
            "currency": "AFN"
        },
        {
            "name": "Aland Islands",
            "isoCode": "AX",
            "flag": "🇦🇽",
            "phonecode": "+358-18",
            "currency": "EUR"
        },
        {
            "name": "Albania",
            "isoCode": "AL",
            "flag": "🇦🇱",
            "phonecode": "355",
            "currency": "ALL"
        },
        {
            "name": "Algeria",
            "isoCode": "DZ",
            "flag": "🇩🇿",
            "phonecode": "213",
            "currency": "DZD"
        },
        {
            "name": "American Samoa",
            "isoCode": "AS",
            "flag": "🇦🇸",
            "phonecode": "+1-684",
            "currency": "USD"
        },
        {
            "name": "Andorra",
            "isoCode": "AD",
            "flag": "🇦🇩",
            "phonecode": "376",
            "currency": "EUR"
        },
        {
            "name": "Angola",
            "isoCode": "AO",
            "flag": "🇦🇴",
            "phonecode": "244",
            "currency": "AOA"
        },
        {
            "name": "Anguilla",
            "isoCode": "AI",
            "flag": "🇦🇮",
            "phonecode": "+1-264",
            "currency": "XCD"
        },
        {
            "name": "Antarctica",
            "isoCode": "AQ",
            "flag": "🇦🇶",
            "phonecode": "672",
            "currency": "AAD"
        },
        {
            "name": "Antigua And Barbuda",
            "isoCode": "AG",
            "flag": "🇦🇬",
            "phonecode": "+1-268",
            "currency": "XCD"
        },
        {
            "name": "Argentina",
            "isoCode": "AR",
            "flag": "🇦🇷",
            "phonecode": "54",
            "currency": "ARS"
        },
        {
            "name": "Armenia",
            "isoCode": "AM",
            "flag": "🇦🇲",
            "phonecode": "374",
            "currency": "AMD"
        },
        {
            "name": "Aruba",
            "isoCode": "AW",
            "flag": "🇦🇼",
            "phonecode": "297",
            "currency": "AWG"
        },
        {
            "name": "Australia",
            "isoCode": "AU",
            "flag": "🇦🇺",
            "phonecode": "61",
            "currency": "AUD"
        },
        {
            "name": "Austria",
            "isoCode": "AT",
            "flag": "🇦🇹",
            "phonecode": "43",
            "currency": "EUR"
        },
        {
            "name": "Azerbaijan",
            "isoCode": "AZ",
            "flag": "🇦🇿",
            "phonecode": "994",
            "currency": "AZN"
        },
        {
            "name": "The Bahamas",
            "isoCode": "BS",
            "flag": "🇧🇸",
            "phonecode": "+1-242",
            "currency": "BSD"
        },
        {
            "name": "Bahrain",
            "isoCode": "BH",
            "flag": "🇧🇭",
            "phonecode": "973",
            "currency": "BHD"
        },
        {
            "name": "Bangladesh",
            "isoCode": "BD",
            "flag": "🇧🇩",
            "phonecode": "880",
            "currency": "BDT"
        },
        {
            "name": "Barbados",
            "isoCode": "BB",
            "flag": "🇧🇧",
            "phonecode": "+1-246",
            "currency": "BBD"
        },
        {
            "name": "Belarus",
            "isoCode": "BY",
            "flag": "🇧🇾",
            "phonecode": "375",
            "currency": "BYN"
        },
        {
            "name": "Belgium",
            "isoCode": "BE",
            "flag": "🇧🇪",
            "phonecode": "32",
            "currency": "EUR"
        },
        {
            "name": "Belize",
            "isoCode": "BZ",
            "flag": "🇧🇿",
            "phonecode": "501",
            "currency": "BZD"
        },
        {
            "name": "Benin",
            "isoCode": "BJ",
            "flag": "🇧🇯",
            "phonecode": "229",
            "currency": "XOF"
        },
        {
            "name": "Bermuda",
            "isoCode": "BM",
            "flag": "🇧🇲",
            "phonecode": "+1-441",
            "currency": "BMD"
        },
        {
            "name": "Bhutan",
            "isoCode": "BT",
            "flag": "🇧🇹",
            "phonecode": "975",
            "currency": "BTN"
        },
        {
            "name": "Bolivia",
            "isoCode": "BO",
            "flag": "🇧🇴",
            "phonecode": "591",
            "currency": "BOB"
        },
        {
            "name": "Bosnia and Herzegovina",
            "isoCode": "BA",
            "flag": "🇧🇦",
            "phonecode": "387",
            "currency": "BAM"
        },
        {
            "name": "Botswana",
            "isoCode": "BW",
            "flag": "🇧🇼",
            "phonecode": "267",
            "currency": "BWP"
        },
        {
            "name": "Bouvet Island",
            "isoCode": "BV",
            "flag": "🇧🇻",
            "phonecode": "0055",
            "currency": "NOK"
        },
        {
            "name": "Brazil",
            "isoCode": "BR",
            "flag": "🇧🇷",
            "phonecode": "55",
            "currency": "BRL"
        },
        {
            "name": "British Indian Ocean Territory",
            "isoCode": "IO",
            "flag": "🇮🇴",
            "phonecode": "246",
            "currency": "USD"
        },
        {
            "name": "Brunei",
            "isoCode": "BN",
            "flag": "🇧🇳",
            "phonecode": "673",
            "currency": "BND"
        },
        {
            "name": "Bulgaria",
            "isoCode": "BG",
            "flag": "🇧🇬",
            "phonecode": "359",
            "currency": "BGN"
        },
        {
            "name": "Burkina Faso",
            "isoCode": "BF",
            "flag": "🇧🇫",
            "phonecode": "226",
            "currency": "XOF"
        },
        {
            "name": "Burundi",
            "isoCode": "BI",
            "flag": "🇧🇮",
            "phonecode": "257",
            "currency": "BIF"
        },
        {
            "name": "Cambodia",
            "isoCode": "KH",
            "flag": "🇰🇭",
            "phonecode": "855",
            "currency": "KHR"
        },
        {
            "name": "Cameroon",
            "isoCode": "CM",
            "flag": "🇨🇲",
            "phonecode": "237",
            "currency": "XAF"
        },
        {
            "name": "Canada",
            "isoCode": "CA",
            "flag": "🇨🇦",
            "phonecode": "1",
            "currency": "CAD"
        },
        {
            "name": "Cape Verde",
            "isoCode": "CV",
            "flag": "🇨🇻",
            "phonecode": "238",
            "currency": "CVE"
        },
        {
            "name": "Cayman Islands",
            "isoCode": "KY",
            "flag": "🇰🇾",
            "phonecode": "+1-345",
            "currency": "KYD"
        },
        {
            "name": "Central African Republic",
            "isoCode": "CF",
            "flag": "🇨🇫",
            "phonecode": "236",
            "currency": "XAF"
        },
        {
            "name": "Chad",
            "isoCode": "TD",
            "flag": "🇹🇩",
            "phonecode": "235",
            "currency": "XAF"
        },
        {
            "name": "Chile",
            "isoCode": "CL",
            "flag": "🇨🇱",
            "phonecode": "56",
            "currency": "CLP"
        },
        {
            "name": "China",
            "isoCode": "CN",
            "flag": "🇨🇳",
            "phonecode": "86",
            "currency": "CNY"
        },
        {
            "name": "Christmas Island",
            "isoCode": "CX",
            "flag": "🇨🇽",
            "phonecode": "61",
            "currency": "AUD"
        },
        {
            "name": "Cocos (Keeling) Islands",
            "isoCode": "CC",
            "flag": "🇨🇨",
            "phonecode": "61",
            "currency": "AUD"
        },
        {
            "name": "Colombia",
            "isoCode": "CO",
            "flag": "🇨🇴",
            "phonecode": "57",
            "currency": "COP"
        },
        {
            "name": "Comoros",
            "isoCode": "KM",
            "flag": "🇰🇲",
            "phonecode": "269",
            "currency": "KMF"
        },
        {
            "name": "Congo",
            "isoCode": "CG",
            "flag": "🇨🇬",
            "phonecode": "242",
            "currency": "XAF"
        },
        {
            "name": "Democratic Republic of the Congo",
            "isoCode": "CD",
            "flag": "🇨🇩",
            "phonecode": "243",
            "currency": "CDF"
        },
        {
            "name": "Cook Islands",
            "isoCode": "CK",
            "flag": "🇨🇰",
            "phonecode": "682",
            "currency": "NZD"
        },
        {
            "name": "Costa Rica",
            "isoCode": "CR",
            "flag": "🇨🇷",
            "phonecode": "506",
            "currency": "CRC"
        },
        {
            "name": "Cote D'Ivoire (Ivory Coast)",
            "isoCode": "CI",
            "flag": "🇨🇮",
            "phonecode": "225",
            "currency": "XOF"
        },
        {
            "name": "Croatia",
            "isoCode": "HR",
            "flag": "🇭🇷",
            "phonecode": "385",
            "currency": "HRK"
        },
        {
            "name": "Cuba",
            "isoCode": "CU",
            "flag": "🇨🇺",
            "phonecode": "53",
            "currency": "CUP"
        },
        {
            "name": "Cyprus",
            "isoCode": "CY",
            "flag": "🇨🇾",
            "phonecode": "357",
            "currency": "EUR"
        },
        {
            "name": "Czech Republic",
            "isoCode": "CZ",
            "flag": "🇨🇿",
            "phonecode": "420",
            "currency": "CZK"
        },
        {
            "name": "Denmark",
            "isoCode": "DK",
            "flag": "🇩🇰",
            "phonecode": "45",
            "currency": "DKK"
        },
        {
            "name": "Djibouti",
            "isoCode": "DJ",
            "flag": "🇩🇯",
            "phonecode": "253",
            "currency": "DJF"
        },
        {
            "name": "Dominica",
            "isoCode": "DM",
            "flag": "🇩🇲",
            "phonecode": "+1-767",
            "currency": "XCD"
        },
        {
            "name": "Dominican Republic",
            "isoCode": "DO",
            "flag": "🇩🇴",
            "phonecode": "+1-809 and 1-829",
            "currency": "DOP"
        },
        {
            "name": "East Timor",
            "isoCode": "TL",
            "flag": "🇹🇱",
            "phonecode": "670",
            "currency": "USD"
        },
        {
            "name": "Ecuador",
            "isoCode": "EC",
            "flag": "🇪🇨",
            "phonecode": "593",
            "currency": "USD"
        },
        {
            "name": "Egypt",
            "isoCode": "EG",
            "flag": "🇪🇬",
            "phonecode": "20",
            "currency": "EGP"
        },
        {
            "name": "El Salvador",
            "isoCode": "SV",
            "flag": "🇸🇻",
            "phonecode": "503",
            "currency": "USD"
        },
        {
            "name": "Equatorial Guinea",
            "isoCode": "GQ",
            "flag": "🇬🇶",
            "phonecode": "240",
            "currency": "XAF"
        },
        {
            "name": "Eritrea",
            "isoCode": "ER",
            "flag": "🇪🇷",
            "phonecode": "291",
            "currency": "ERN"
        },
        {
            "name": "Estonia",
            "isoCode": "EE",
            "flag": "🇪🇪",
            "phonecode": "372",
            "currency": "EUR"
        },
        {
            "name": "Ethiopia",
            "isoCode": "ET",
            "flag": "🇪🇹",
            "phonecode": "251",
            "currency": "ETB"
        },
        {
            "name": "Falkland Islands",
            "isoCode": "FK",
            "flag": "🇫🇰",
            "phonecode": "500",
            "currency": "FKP"
        },
        {
            "name": "Faroe Islands",
            "isoCode": "FO",
            "flag": "🇫🇴",
            "phonecode": "298",
            "currency": "DKK"
        },
        {
            "name": "Fiji Islands",
            "isoCode": "FJ",
            "flag": "🇫🇯",
            "phonecode": "679",
            "currency": "FJD"
        },
        {
            "name": "Finland",
            "isoCode": "FI",
            "flag": "🇫🇮",
            "phonecode": "358",
            "currency": "EUR"
        },
        {
            "name": "France",
            "isoCode": "FR",
            "flag": "🇫🇷",
            "phonecode": "33",
            "currency": "EUR"
        },
        {
            "name": "French Guiana",
            "isoCode": "GF",
            "flag": "🇬🇫",
            "phonecode": "594",
            "currency": "EUR"
        },
        {
            "name": "French Polynesia",
            "isoCode": "PF",
            "flag": "🇵🇫",
            "phonecode": "689",
            "currency": "XPF"
        },
        {
            "name": "French Southern Territories",
            "isoCode": "TF",
            "flag": "🇹🇫",
            "phonecode": "262",
            "currency": "EUR"
        },
        {
            "name": "Gabon",
            "isoCode": "GA",
            "flag": "🇬🇦",
            "phonecode": "241",
            "currency": "XAF"
        },
        {
            "name": "The Gambia",
            "isoCode": "GM",
            "flag": "🇬🇲",
            "phonecode": "220",
            "currency": "GMD"
        },
        {
            "name": "Georgia",
            "isoCode": "GE",
            "flag": "🇬🇪",
            "phonecode": "995",
            "currency": "GEL"
        },
        {
            "name": "Germany",
            "isoCode": "DE",
            "flag": "🇩🇪",
            "phonecode": "49",
            "currency": "EUR"
        },
        {
            "name": "Ghana",
            "isoCode": "GH",
            "flag": "🇬🇭",
            "phonecode": "233",
            "currency": "GHS"
        },
        {
            "name": "Gibraltar",
            "isoCode": "GI",
            "flag": "🇬🇮",
            "phonecode": "350",
            "currency": "GIP"
        },
        {
            "name": "Greece",
            "isoCode": "GR",
            "flag": "🇬🇷",
            "phonecode": "30",
            "currency": "EUR"
        },
        {
            "name": "Greenland",
            "isoCode": "GL",
            "flag": "🇬🇱",
            "phonecode": "299",
            "currency": "DKK"
        },
        {
            "name": "Grenada",
            "isoCode": "GD",
            "flag": "🇬🇩",
            "phonecode": "+1-473",
            "currency": "XCD"
        },
        {
            "name": "Guadeloupe",
            "isoCode": "GP",
            "flag": "🇬🇵",
            "phonecode": "590",
            "currency": "EUR"
        },
        {
            "name": "Guam",
            "isoCode": "GU",
            "flag": "🇬🇺",
            "phonecode": "+1-671",
            "currency": "USD"
        },
        {
            "name": "Guatemala",
            "isoCode": "GT",
            "flag": "🇬🇹",
            "phonecode": "502",
            "currency": "GTQ"
        },
        {
            "name": "Guernsey and Alderney",
            "isoCode": "GG",
            "flag": "🇬🇬",
            "phonecode": "+44-1481",
            "currency": "GBP"
        },
        {
            "name": "Guinea",
            "isoCode": "GN",
            "flag": "🇬🇳",
            "phonecode": "224",
            "currency": "GNF"
        },
        {
            "name": "Guinea-Bissau",
            "isoCode": "GW",
            "flag": "🇬🇼",
            "phonecode": "245",
            "currency": "XOF"
        },
        {
            "name": "Guyana",
            "isoCode": "GY",
            "flag": "🇬🇾",
            "phonecode": "592",
            "currency": "GYD"
        },
        {
            "name": "Haiti",
            "isoCode": "HT",
            "flag": "🇭🇹",
            "phonecode": "509",
            "currency": "HTG"
        },
        {
            "name": "Heard Island and McDonald Islands",
            "isoCode": "HM",
            "flag": "🇭🇲",
            "phonecode": "672",
            "currency": "AUD"
        },
        {
            "name": "Honduras",
            "isoCode": "HN",
            "flag": "🇭🇳",
            "phonecode": "504",
            "currency": "HNL"
        },
        {
            "name": "Hong Kong S.A.R.",
            "isoCode": "HK",
            "flag": "🇭🇰",
            "phonecode": "852",
            "currency": "HKD"
        },
        {
            "name": "Hungary",
            "isoCode": "HU",
            "flag": "🇭🇺",
            "phonecode": "36",
            "currency": "HUF"
        },
        {
            "name": "Iceland",
            "isoCode": "IS",
            "flag": "🇮🇸",
            "phonecode": "354",
            "currency": "ISK"
        },
        {
            "name": "India",
            "isoCode": "IN",
            "flag": "🇮🇳",
            "phonecode": "91",
            "currency": "INR"
        },
        {
            "name": "Indonesia",
            "isoCode": "ID",
            "flag": "🇮🇩",
            "phonecode": "62",
            "currency": "IDR"
        },
        {
            "name": "Iran",
            "isoCode": "IR",
            "flag": "🇮🇷",
            "phonecode": "98",
            "currency": "IRR"
        },
        {
            "name": "Iraq",
            "isoCode": "IQ",
            "flag": "🇮🇶",
            "phonecode": "964",
            "currency": "IQD"
        },
        {
            "name": "Ireland",
            "isoCode": "IE",
            "flag": "🇮🇪",
            "phonecode": "353",
            "currency": "EUR"
        },
        {
            "name": "Israel",
            "isoCode": "IL",
            "flag": "🇮🇱",
            "phonecode": "972",
            "currency": "ILS"
        },
        {
            "name": "Italy",
            "isoCode": "IT",
            "flag": "🇮🇹",
            "phonecode": "39",
            "currency": "EUR"
        },
        {
            "name": "Jamaica",
            "isoCode": "JM",
            "flag": "🇯🇲",
            "phonecode": "+1-876",
            "currency": "JMD"
        },
        {
            "name": "Japan",
            "isoCode": "JP",
            "flag": "🇯🇵",
            "phonecode": "81",
            "currency": "JPY"
        },
        {
            "name": "Jersey",
            "isoCode": "JE",
            "flag": "🇯🇪",
            "phonecode": "+44-1534",
            "currency": "GBP"
        },
        {
            "name": "Jordan",
            "isoCode": "JO",
            "flag": "🇯🇴",
            "phonecode": "962",
            "currency": "JOD"
        },
        {
            "name": "Kazakhstan",
            "isoCode": "KZ",
            "flag": "🇰🇿",
            "phonecode": "7",
            "currency": "KZT"
        },
        {
            "name": "Kenya",
            "isoCode": "KE",
            "flag": "🇰🇪",
            "phonecode": "254",
            "currency": "KES"
        },
        {
            "name": "Kiribati",
            "isoCode": "KI",
            "flag": "🇰🇮",
            "phonecode": "686",
            "currency": "AUD"
        },
        {
            "name": "North Korea",
            "isoCode": "KP",
            "flag": "🇰🇵",
            "phonecode": "850",
            "currency": "KPW"
        },
        {
            "name": "South Korea",
            "isoCode": "KR",
            "flag": "🇰🇷",
            "phonecode": "82",
            "currency": "KRW"
        },
        {
            "name": "Kuwait",
            "isoCode": "KW",
            "flag": "🇰🇼",
            "phonecode": "965",
            "currency": "KWD"
        },
        {
            "name": "Kyrgyzstan",
            "isoCode": "KG",
            "flag": "🇰🇬",
            "phonecode": "996",
            "currency": "KGS"
        },
        {
            "name": "Laos",
            "isoCode": "LA",
            "flag": "🇱🇦",
            "phonecode": "856",
            "currency": "LAK"
        },
        {
            "name": "Latvia",
            "isoCode": "LV",
            "flag": "🇱🇻",
            "phonecode": "371",
            "currency": "EUR"
        },
        {
            "name": "Lebanon",
            "isoCode": "LB",
            "flag": "🇱🇧",
            "phonecode": "961",
            "currency": "LBP"
        },
        {
            "name": "Lesotho",
            "isoCode": "LS",
            "flag": "🇱🇸",
            "phonecode": "266",
            "currency": "LSL"
        },
        {
            "name": "Liberia",
            "isoCode": "LR",
            "flag": "🇱🇷",
            "phonecode": "231",
            "currency": "LRD"
        },
        {
            "name": "Libya",
            "isoCode": "LY",
            "flag": "🇱🇾",
            "phonecode": "218",
            "currency": "LYD"
        },
        {
            "name": "Liechtenstein",
            "isoCode": "LI",
            "flag": "🇱🇮",
            "phonecode": "423",
            "currency": "CHF"
        },
        {
            "name": "Lithuania",
            "isoCode": "LT",
            "flag": "🇱🇹",
            "phonecode": "370",
            "currency": "EUR"
        },
        {
            "name": "Luxembourg",
            "isoCode": "LU",
            "flag": "🇱🇺",
            "phonecode": "352",
            "currency": "EUR"
        },
        {
            "name": "Macau S.A.R.",
            "isoCode": "MO",
            "flag": "🇲🇴",
            "phonecode": "853",
            "currency": "MOP"
        },
        {
            "name": "Macedonia",
            "isoCode": "MK",
            "flag": "🇲🇰",
            "phonecode": "389",
            "currency": "MKD"
        },
        {
            "name": "Madagascar",
            "isoCode": "MG",
            "flag": "🇲🇬",
            "phonecode": "261",
            "currency": "MGA"
        },
        {
            "name": "Malawi",
            "isoCode": "MW",
            "flag": "🇲🇼",
            "phonecode": "265",
            "currency": "MWK"
        },
        {
            "name": "Malaysia",
            "isoCode": "MY",
            "flag": "🇲🇾",
            "phonecode": "60",
            "currency": "MYR"
        },
        {
            "name": "Maldives",
            "isoCode": "MV",
            "flag": "🇲🇻",
            "phonecode": "960",
            "currency": "MVR"
        },
        {
            "name": "Mali",
            "isoCode": "ML",
            "flag": "🇲🇱",
            "phonecode": "223",
            "currency": "XOF"
        },
        {
            "name": "Malta",
            "isoCode": "MT",
            "flag": "🇲🇹",
            "phonecode": "356",
            "currency": "EUR"
        },
        {
            "name": "Man (Isle of)",
            "isoCode": "IM",
            "flag": "🇮🇲",
            "phonecode": "+44-1624",
            "currency": "GBP"
        },
        {
            "name": "Marshall Islands",
            "isoCode": "MH",
            "flag": "🇲🇭",
            "phonecode": "692",
            "currency": "USD"
        },
        {
            "name": "Martinique",
            "isoCode": "MQ",
            "flag": "🇲🇶",
            "phonecode": "596",
            "currency": "EUR"
        },
        {
            "name": "Mauritania",
            "isoCode": "MR",
            "flag": "🇲🇷",
            "phonecode": "222",
            "currency": "MRO"
        },
        {
            "name": "Mauritius",
            "isoCode": "MU",
            "flag": "🇲🇺",
            "phonecode": "230",
            "currency": "MUR"
        },
        {
            "name": "Mayotte",
            "isoCode": "YT",
            "flag": "🇾🇹",
            "phonecode": "262",
            "currency": "EUR"
        },
        {
            "name": "Mexico",
            "isoCode": "MX",
            "flag": "🇲🇽",
            "phonecode": "52",
            "currency": "MXN"
        },
        {
            "name": "Micronesia",
            "isoCode": "FM",
            "flag": "🇫🇲",
            "phonecode": "691",
            "currency": "USD"
        },
        {
            "name": "Moldova",
            "isoCode": "MD",
            "flag": "🇲🇩",
            "phonecode": "373",
            "currency": "MDL"
        },
        {
            "name": "Monaco",
            "isoCode": "MC",
            "flag": "🇲🇨",
            "phonecode": "377",
            "currency": "EUR"
        },
        {
            "name": "Mongolia",
            "isoCode": "MN",
            "flag": "🇲🇳",
            "phonecode": "976",
            "currency": "MNT"
        },
        {
            "name": "Montenegro",
            "isoCode": "ME",
            "flag": "🇲🇪",
            "phonecode": "382",
            "currency": "EUR"
        },
        {
            "name": "Montserrat",
            "isoCode": "MS",
            "flag": "🇲🇸",
            "phonecode": "+1-664",
            "currency": "XCD"
        },
        {
            "name": "Morocco",
            "isoCode": "MA",
            "flag": "🇲🇦",
            "phonecode": "212",
            "currency": "MAD"
        },
        {
            "name": "Mozambique",
            "isoCode": "MZ",
            "flag": "🇲🇿",
            "phonecode": "258",
            "currency": "MZN"
        },
        {
            "name": "Myanmar",
            "isoCode": "MM",
            "flag": "🇲🇲",
            "phonecode": "95",
            "currency": "MMK"
        },
        {
            "name": "Namibia",
            "isoCode": "NA",
            "flag": "🇳🇦",
            "phonecode": "264",
            "currency": "NAD"
        },
        {
            "name": "Nauru",
            "isoCode": "NR",
            "flag": "🇳🇷",
            "phonecode": "674",
            "currency": "AUD"
        },
        {
            "name": "Nepal",
            "isoCode": "NP",
            "flag": "🇳🇵",
            "phonecode": "977",
            "currency": "NPR"
        },
        {
            "name": "Bonaire, Sint Eustatius and Saba",
            "isoCode": "BQ",
            "flag": "🇧🇶",
            "phonecode": "599",
            "currency": "USD"
        },
        {
            "name": "Netherlands",
            "isoCode": "NL",
            "flag": "🇳🇱",
            "phonecode": "31",
            "currency": "EUR"
        },
        {
            "name": "New Caledonia",
            "isoCode": "NC",
            "flag": "🇳🇨",
            "phonecode": "687",
            "currency": "XPF"
        },
        {
            "name": "New Zealand",
            "isoCode": "NZ",
            "flag": "🇳🇿",
            "phonecode": "64",
            "currency": "NZD"
        },
        {
            "name": "Nicaragua",
            "isoCode": "NI",
            "flag": "🇳🇮",
            "phonecode": "505",
            "currency": "NIO"
        },
        {
            "name": "Niger",
            "isoCode": "NE",
            "flag": "🇳🇪",
            "phonecode": "227",
            "currency": "XOF"
        },
        {
            "name": "Nigeria",
            "isoCode": "NG",
            "flag": "🇳🇬",
            "phonecode": "234",
            "currency": "NGN"
        },
        {
            "name": "Niue",
            "isoCode": "NU",
            "flag": "🇳🇺",
            "phonecode": "683",
            "currency": "NZD"
        },
        {
            "name": "Norfolk Island",
            "isoCode": "NF",
            "flag": "🇳🇫",
            "phonecode": "672",
            "currency": "AUD"
        },
        {
            "name": "Northern Mariana Islands",
            "isoCode": "MP",
            "flag": "🇲🇵",
            "phonecode": "+1-670",
            "currency": "USD"
        },
        {
            "name": "Norway",
            "isoCode": "NO",
            "flag": "🇳🇴",
            "phonecode": "47",
            "currency": "NOK"
        },
        {
            "name": "Oman",
            "isoCode": "OM",
            "flag": "🇴🇲",
            "phonecode": "968",
            "currency": "OMR"
        },
        {
            "name": "Pakistan",
            "isoCode": "PK",
            "flag": "🇵🇰",
            "phonecode": "92",
            "currency": "PKR"
        },
        {
            "name": "Palau",
            "isoCode": "PW",
            "flag": "🇵🇼",
            "phonecode": "680",
            "currency": "USD"
        },
        {
            "name": "Palestinian Territory Occupied",
            "isoCode": "PS",
            "flag": "🇵🇸",
            "phonecode": "970",
            "currency": "ILS"
        },
        {
            "name": "Panama",
            "isoCode": "PA",
            "flag": "🇵🇦",
            "phonecode": "507",
            "currency": "PAB"
        },
        {
            "name": "Papua new Guinea",
            "isoCode": "PG",
            "flag": "🇵🇬",
            "phonecode": "675",
            "currency": "PGK"
        },
        {
            "name": "Paraguay",
            "isoCode": "PY",
            "flag": "🇵🇾",
            "phonecode": "595",
            "currency": "PYG"
        },
        {
            "name": "Peru",
            "isoCode": "PE",
            "flag": "🇵🇪",
            "phonecode": "51",
            "currency": "PEN"
        },
        {
            "name": "Philippines",
            "isoCode": "PH",
            "flag": "🇵🇭",
            "phonecode": "63",
            "currency": "PHP"
        },
        {
            "name": "Pitcairn Island",
            "isoCode": "PN",
            "flag": "🇵🇳",
            "phonecode": "870",
            "currency": "NZD"
        },
        {
            "name": "Poland",
            "isoCode": "PL",
            "flag": "🇵🇱",
            "phonecode": "48",
            "currency": "PLN"
        },
        {
            "name": "Portugal",
            "isoCode": "PT",
            "flag": "🇵🇹",
            "phonecode": "351",
            "currency": "EUR"
        },
        {
            "name": "Puerto Rico",
            "isoCode": "PR",
            "flag": "🇵🇷",
            "phonecode": "+1-787 and 1-939",
            "currency": "USD"
        },
        {
            "name": "Qatar",
            "isoCode": "QA",
            "flag": "🇶🇦",
            "phonecode": "974",
            "currency": "QAR"
        },
        {
            "name": "Reunion",
            "isoCode": "RE",
            "flag": "🇷🇪",
            "phonecode": "262",
            "currency": "EUR"
        },
        {
            "name": "Romania",
            "isoCode": "RO",
            "flag": "🇷🇴",
            "phonecode": "40",
            "currency": "RON"
        },
        {
            "name": "Russia",
            "isoCode": "RU",
            "flag": "🇷🇺",
            "phonecode": "7",
            "currency": "RUB"
        },
        {
            "name": "Rwanda",
            "isoCode": "RW",
            "flag": "🇷🇼",
            "phonecode": "250",
            "currency": "RWF"
        },
        {
            "name": "Saint Helena",
            "isoCode": "SH",
            "flag": "🇸🇭",
            "phonecode": "290",
            "currency": "SHP"
        },
        {
            "name": "Saint Kitts And Nevis",
            "isoCode": "KN",
            "flag": "🇰🇳",
            "phonecode": "+1-869",
            "currency": "XCD"
        },
        {
            "name": "Saint Lucia",
            "isoCode": "LC",
            "flag": "🇱🇨",
            "phonecode": "+1-758",
            "currency": "XCD"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "isoCode": "PM",
            "flag": "🇵🇲",
            "phonecode": "508",
            "currency": "EUR"
        },
        {
            "name": "Saint Vincent And The Grenadines",
            "isoCode": "VC",
            "flag": "🇻🇨",
            "phonecode": "+1-784",
            "currency": "XCD"
        },
        {
            "name": "Saint-Barthelemy",
            "isoCode": "BL",
            "flag": "🇧🇱",
            "phonecode": "590",
            "currency": "EUR"
        },
        {
            "name": "Saint-Martin (French part)",
            "isoCode": "MF",
            "flag": "🇲🇫",
            "phonecode": "590",
            "currency": "EUR"
        },
        {
            "name": "Samoa",
            "isoCode": "WS",
            "flag": "🇼🇸",
            "phonecode": "685",
            "currency": "WST"
        },
        {
            "name": "San Marino",
            "isoCode": "SM",
            "flag": "🇸🇲",
            "phonecode": "378",
            "currency": "EUR"
        },
        {
            "name": "Sao Tome and Principe",
            "isoCode": "ST",
            "flag": "🇸🇹",
            "phonecode": "239",
            "currency": "STD"
        },
        {
            "name": "Saudi Arabia",
            "isoCode": "SA",
            "flag": "🇸🇦",
            "phonecode": "966",
            "currency": "SAR"
        },
        {
            "name": "Senegal",
            "isoCode": "SN",
            "flag": "🇸🇳",
            "phonecode": "221",
            "currency": "XOF"
        },
        {
            "name": "Serbia",
            "isoCode": "RS",
            "flag": "🇷🇸",
            "phonecode": "381",
            "currency": "RSD"
        },
        {
            "name": "Seychelles",
            "isoCode": "SC",
            "flag": "🇸🇨",
            "phonecode": "248",
            "currency": "SCR"
        },
        {
            "name": "Sierra Leone",
            "isoCode": "SL",
            "flag": "🇸🇱",
            "phonecode": "232",
            "currency": "SLL"
        },
        {
            "name": "Singapore",
            "isoCode": "SG",
            "flag": "🇸🇬",
            "phonecode": "65",
            "currency": "SGD"
        },
        {
            "name": "Slovakia",
            "isoCode": "SK",
            "flag": "🇸🇰",
            "phonecode": "421",
            "currency": "EUR"
        },
        {
            "name": "Slovenia",
            "isoCode": "SI",
            "flag": "🇸🇮",
            "phonecode": "386",
            "currency": "EUR"
        },
        {
            "name": "Solomon Islands",
            "isoCode": "SB",
            "flag": "🇸🇧",
            "phonecode": "677",
            "currency": "SBD"
        },
        {
            "name": "Somalia",
            "isoCode": "SO",
            "flag": "🇸🇴",
            "phonecode": "252",
            "currency": "SOS"
        },
        {
            "name": "South Africa",
            "isoCode": "ZA",
            "flag": "🇿🇦",
            "phonecode": "27",
            "currency": "ZAR"
        },
        {
            "name": "South Georgia",
            "isoCode": "GS",
            "flag": "🇬🇸",
            "phonecode": "500",
            "currency": "GBP"
        },
        {
            "name": "South Sudan",
            "isoCode": "SS",
            "flag": "🇸🇸",
            "phonecode": "211",
            "currency": "SSP"
        },
        {
            "name": "Spain",
            "isoCode": "ES",
            "flag": "🇪🇸",
            "phonecode": "34",
            "currency": "EUR"
        },
        {
            "name": "Sri Lanka",
            "isoCode": "LK",
            "flag": "🇱🇰",
            "phonecode": "94",
            "currency": "LKR"
        },
        {
            "name": "Sudan",
            "isoCode": "SD",
            "flag": "🇸🇩",
            "phonecode": "249",
            "currency": "SDG"
        },
        {
            "name": "Suriname",
            "isoCode": "SR",
            "flag": "🇸🇷",
            "phonecode": "597",
            "currency": "SRD"
        },
        {
            "name": "Svalbard And Jan Mayen Islands",
            "isoCode": "SJ",
            "flag": "🇸🇯",
            "phonecode": "47",
            "currency": "NOK"
        },
        {
            "name": "Swaziland",
            "isoCode": "SZ",
            "flag": "🇸🇿",
            "phonecode": "268",
            "currency": "SZL"
        },
        {
            "name": "Sweden",
            "isoCode": "SE",
            "flag": "🇸🇪",
            "phonecode": "46",
            "currency": "SEK"
        },
        {
            "name": "Switzerland",
            "isoCode": "CH",
            "flag": "🇨🇭",
            "phonecode": "41",
            "currency": "CHF"
        },
        {
            "name": "Syria",
            "isoCode": "SY",
            "flag": "🇸🇾",
            "phonecode": "963",
            "currency": "SYP"
        },
        {
            "name": "Taiwan",
            "isoCode": "TW",
            "flag": "🇹🇼",
            "phonecode": "886",
            "currency": "TWD"
        },
        {
            "name": "Tajikistan",
            "isoCode": "TJ",
            "flag": "🇹🇯",
            "phonecode": "992",
            "currency": "TJS"
        },
        {
            "name": "Tanzania",
            "isoCode": "TZ",
            "flag": "🇹🇿",
            "phonecode": "255",
            "currency": "TZS"
        },
        {
            "name": "Thailand",
            "isoCode": "TH",
            "flag": "🇹🇭",
            "phonecode": "66",
            "currency": "THB"
        },
        {
            "name": "Togo",
            "isoCode": "TG",
            "flag": "🇹🇬",
            "phonecode": "228",
            "currency": "XOF"
        },
        {
            "name": "Tokelau",
            "isoCode": "TK",
            "flag": "🇹🇰",
            "phonecode": "690",
            "currency": "NZD"
        },
        {
            "name": "Tonga",
            "isoCode": "TO",
            "flag": "🇹🇴",
            "phonecode": "676",
            "currency": "TOP"
        },
        {
            "name": "Trinidad And Tobago",
            "isoCode": "TT",
            "flag": "🇹🇹",
            "phonecode": "+1-868",
            "currency": "TTD"
        },
        {
            "name": "Tunisia",
            "isoCode": "TN",
            "flag": "🇹🇳",
            "phonecode": "216",
            "currency": "TND"
        },
        {
            "name": "Turkey",
            "isoCode": "TR",
            "flag": "🇹🇷",
            "phonecode": "90",
            "currency": "TRY"
        },
        {
            "name": "Turkmenistan",
            "isoCode": "TM",
            "flag": "🇹🇲",
            "phonecode": "993",
            "currency": "TMT"
        },
        {
            "name": "Turks And Caicos Islands",
            "isoCode": "TC",
            "flag": "🇹🇨",
            "phonecode": "+1-649",
            "currency": "USD"
        },
        {
            "name": "Tuvalu",
            "isoCode": "TV",
            "flag": "🇹🇻",
            "phonecode": "688",
            "currency": "AUD"
        },
        {
            "name": "Uganda",
            "isoCode": "UG",
            "flag": "🇺🇬",
            "phonecode": "256",
            "currency": "UGX"
        },
        {
            "name": "Ukraine",
            "isoCode": "UA",
            "flag": "🇺🇦",
            "phonecode": "380",
            "currency": "UAH"
        },
        {
            "name": "United Arab Emirates",
            "isoCode": "AE",
            "flag": "🇦🇪",
            "phonecode": "971",
            "currency": "AED"
        },
        {
            "name": "United Kingdom",
            "isoCode": "GB",
            "flag": "🇬🇧",
            "phonecode": "44",
            "currency": "GBP"
        },
        {
            "name": "United States",
            "isoCode": "US",
            "flag": "🇺🇸",
            "phonecode": "1",
            "currency": "USD"
        },
        {
            "name": "United States Minor Outlying Islands",
            "isoCode": "UM",
            "flag": "🇺🇲",
            "phonecode": "1",
            "currency": "USD"
        },
        {
            "name": "Uruguay",
            "isoCode": "UY",
            "flag": "🇺🇾",
            "phonecode": "598",
            "currency": "UYU"
        },
        {
            "name": "Uzbekistan",
            "isoCode": "UZ",
            "flag": "🇺🇿",
            "phonecode": "998",
            "currency": "UZS"
        },
        {
            "name": "Vanuatu",
            "isoCode": "VU",
            "flag": "🇻🇺",
            "phonecode": "678",
            "currency": "VUV"
        },
        {
            "name": "Vatican City State (Holy See)",
            "isoCode": "VA",
            "flag": "🇻🇦",
            "phonecode": "379",
            "currency": "EUR"
        },
        {
            "name": "Venezuela",
            "isoCode": "VE",
            "flag": "🇻🇪",
            "phonecode": "58",
            "currency": "VEF"
        },
        {
            "name": "Vietnam",
            "isoCode": "VN",
            "flag": "🇻🇳",
            "phonecode": "84",
            "currency": "VND"
        },
        {
            "name": "Virgin Islands (British)",
            "isoCode": "VG",
            "flag": "🇻🇬",
            "phonecode": "+1-284",
            "currency": "USD"
        },
        {
            "name": "Virgin Islands (US)",
            "isoCode": "VI",
            "flag": "🇻🇮",
            "phonecode": "+1-340",
            "currency": "USD"
        },
        {
            "name": "Wallis And Futuna Islands",
            "isoCode": "WF",
            "flag": "🇼🇫",
            "phonecode": "681",
            "currency": "XPF"
        },
        {
            "name": "Western Sahara",
            "isoCode": "EH",
            "flag": "🇪🇭",
            "phonecode": "212",
            "currency": "MAD"
        },
        {
            "name": "Yemen",
            "isoCode": "YE",
            "flag": "🇾🇪",
            "phonecode": "967",
            "currency": "YER"
        },
        {
            "name": "Zambia",
            "isoCode": "ZM",
            "flag": "🇿🇲",
            "phonecode": "260",
            "currency": "ZMW"
        },
        {
            "name": "Zimbabwe",
            "isoCode": "ZW",
            "flag": "🇿🇼",
            "phonecode": "263",
            "currency": "ZWL"
        },
        {
            "name": "Kosovo",
            "isoCode": "XK",
            "flag": "🇽🇰",
            "phonecode": "383",
            "currency": "EUR"
        },
        {
            "name": "Curaçao",
            "isoCode": "CW",
            "flag": "🇨🇼",
            "phonecode": "599",
            "currency": "ANG"
        },
        {
            "name": "Sint Maarten (Dutch part)",
            "isoCode": "SX",
            "flag": "🇸🇽",
            "phonecode": "1721",
            "currency": "ANG"
        }
      ]

      const countriesData = countries.map((val, index) => ({
        id: index + 1,
        name: val.name,
        iso_code: val.isoCode,
        flag: val.flag,
        phonecode: val.phonecode,
        currency: val.currency,
        created_at: new Date(),
        updated_at: new Date()
      }));
      return queryInterface.bulkInsert("countries", countriesData, { truncate: true });
  },

  down: (queryInterface) =>
    queryInterface.bulkDelete("countries", null, { truncate: true }),
};
