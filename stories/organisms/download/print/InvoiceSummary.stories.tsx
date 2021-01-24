import * as React from "react";

import { storiesOf } from "@storybook/react";

import InvoiceSummaryTotal from "@components/organisms/download/print/InvoiceSummaryTotal";
import InvoiceSummaryCity from "@components/organisms/download/print/InvoiceSummaryCity";

const stories = storiesOf("印刷プレビュー", module);

const data = {
  summaryByMonth: {
    totalInvoiceAmount: "44,160",
    date: {
      year: "2018",
      month: "05"
    },
    facility: {
      c01: "0000000011",
      c02: "株式会社ノウビー"
    },
    detail: [
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "にかほ市",
        count: "1",
        amount: "16,725",
        benefitCostsClaim: "16,725",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "常陸太田市",
        count: "1",
        amount: "21,879",
        benefitCostsClaim: "21,879",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      },
      {
        municipalityName: "横浜市青葉区",
        count: "1",
        amount: "5,556",
        benefitCostsClaim: "5,556",
        userBurden: "0",
        municipalitySubsidy: "0"
      }
    ],
    total: {
      municipalityCount: "3",
      count: "3",
      amount: "44,160",
      benefitCostsClaim: "44,160",
      userBurden: "0",
      municipalitySubsidy: "0"
    }
  },
  summaryByCity: [
    {
      demand: "にかほ市",
      date: {
        createdAt: {
          h01: "2019",
          h02: "01",
          h03: "20"
        },
        bill: {
          r01: "2018",
          r02: "05"
        }
      },
      facility: {
        c01: "0000000011",
        c02: "104-8227",
        c03: "東京都中央区東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル",
        c04: "00000000",
        c05: "株式会社ノウビー",
        c06: "アエーカ"
      },
      bill: {
        r03: "16,725",
        typeServices: [
          {
            t01: "就労移行支援",
            t02: "1",
            t03: "1,496",
            t04: "16,725",
            t05: "16,725",
            t06: "0",
            t07: "0"
          }
        ],
        subTotal: {
          s02: "1",
          s03: "1,496",
          s04: "16,725",
          s05: "16,725",
          s06: "0",
          s07: "0"
        },
        specialHandicapped: {
          h02: null,
          h04: null,
          h05: null,
          h07: null
        },
        total: {
          w02: "1",
          w03: "1,496",
          w04: "16,725",
          w05: "16,725",
          w06: "0",
          w07: "0"
        }
      },
      detail: {
        date: {
          m03: "2018",
          m04: "05"
        },
        facility: {
          m08: "0000000011",
          m09: "株式会社ノウビー",
          m10: "一級地",
          m11: "無し"
        },
        users: [
          {
            m01: "052141",
            m02: "",
            m05: "1000000100",
            m06: "壽德 萌花a",
            m07: "",
            m12: "0",
            m13: "無し",
            m14: "1234567890",
            m15: "2",
            m16: "0",
            m17: "AAAAA",
            serviceTypes: [
              {
                s01: "43",
                s02: "2017",
                s03: "05",
                s04: "08",
                s05: "",
                s06: "",
                s07: "",
                s08: 2,
                s09: ""
              }
            ],
            serviceContents: [
              {
                c01: "就移１７・人欠２・期間超",
                c02: "43D157",
                c03: "238",
                c04: "2",
                c05: "476",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算３",
                c02: "435262",
                c03: "36",
                c04: "2",
                c05: "72",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算７",
                c02: "435271",
                c03: "21",
                c04: "2",
                c05: "42",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算１３",
                c02: "435282",
                c03: "26",
                c04: "2",
                c05: "52",
                c06: ""
              },
              {
                c01: "就移医療連携体制加算Ⅰ",
                c02: "436065",
                c03: "500",
                c04: "1",
                c05: "500",
                c06: ""
              },
              {
                c01: "就移精障退院支援施設加算Ⅱ",
                c02: "435231",
                c03: "115",
                c04: "2",
                c05: "230",
                c06: ""
              },
              {
                c01: "就移食事提供体制加算",
                c02: "435070",
                c03: "30",
                c04: "1",
                c05: "30",
                c06: ""
              },
              {
                c01: "就移処遇改善加算Ⅰ",
                c02: "436715",
                c03: "94",
                c04: "1",
                c05: "94",
                c06: ""
              }
            ],
            summaries: [
              {
                d01: "43",
                d02: "就労移行支援",
                d03: 2,
                d04: "1,496",
                d05: 11.18,
                d06: "16,725",
                d07: "1,672",
                d08: "1,672",
                d09: "0",
                d10: "",
                d11: "",
                d12: "",
                d13: "0",
                d14: "0",
                d15: "16,725",
                d16: ""
              }
            ],
            t01: "1,496",
            t02: "16,725",
            t03: "0",
            t04: "",
            t05: "",
            t06: "",
            t07: "0",
            t08: "0",
            t09: "16,725",
            t10: "",
            h01: "",
            h02: "",
            h03: "",
            h04: ""
          }
        ]
      }
    },
    {
      demand: "常陸太田市",
      date: {
        createdAt: {
          h01: "2019",
          h02: "01",
          h03: "20"
        },
        bill: {
          r01: "2018",
          r02: "05"
        }
      },
      facility: {
        c01: "0000000011",
        c02: "104-8227",
        c03:
          "東京都中央区東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル",
        c04: "00000000",
        c05: "株式会社ノウビー",
        c06: "アエーカ"
      },
      bill: {
        r03: "21,879",
        typeServices: [
          {
            t01: "就労移行支援",
            t02: "1",
            t03: "1,957",
            t04: "21,879",
            t05: "21,879",
            t06: "0",
            t07: "0"
          }
        ],
        subTotal: {
          s02: "1",
          s03: "1,957",
          s04: "21,879",
          s05: "21,879",
          s06: "0",
          s07: "0"
        },
        specialHandicapped: {
          h02: null,
          h04: null,
          h05: null,
          h07: null
        },
        total: {
          w02: "1",
          w03: "1,957",
          w04: "21,879",
          w05: "21,879",
          w06: "0",
          w07: "0"
        }
      },
      detail: {
        date: {
          m03: "2018",
          m04: "05"
        },
        facility: {
          m08: "0000000011",
          m09: "株式会社ノウビー",
          m10: "一級地",
          m11: "無し"
        },
        users: [
          {
            m01: "082123",
            m02: "",
            m05: "1000000101",
            m06: "大沼 孝三",
            m07: "",
            m12: "0",
            m13: "無し",
            m14: "",
            m15: "",
            m16: "",
            m17: "",
            serviceTypes: [
              {
                s01: "43",
                s02: "2017",
                s03: "11",
                s04: "01",
                s05: "",
                s06: "",
                s07: "",
                s08: 4,
                s09: ""
              }
            ],
            serviceContents: [
              {
                c01: "就移１７・人欠２・期間超",
                c02: "43D157",
                c03: "238",
                c04: "4",
                c05: "952",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算３",
                c02: "435262",
                c03: "36",
                c04: "4",
                c05: "144",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算７",
                c02: "435271",
                c03: "21",
                c04: "4",
                c05: "84",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算１３",
                c02: "435282",
                c03: "26",
                c04: "4",
                c05: "104",
                c06: ""
              },
              {
                c01: "就移精障退院支援施設加算Ⅱ",
                c02: "435231",
                c03: "115",
                c04: "4",
                c05: "460",
                c06: ""
              },
              {
                c01: "就移食事提供体制加算",
                c02: "435070",
                c03: "30",
                c04: "3",
                c05: "90",
                c06: ""
              },
              {
                c01: "就移処遇改善加算Ⅰ",
                c02: "436715",
                c03: "123",
                c04: "1",
                c05: "123",
                c06: ""
              }
            ],
            summaries: [
              {
                d01: "43",
                d02: "就労移行支援",
                d03: 4,
                d04: "1,957",
                d05: 11.18,
                d06: "21,879",
                d07: "2,187",
                d08: "2,187",
                d09: "0",
                d10: "",
                d11: "",
                d12: "",
                d13: "",
                d14: "0",
                d15: "21,879",
                d16: ""
              }
            ],
            t01: "1,957",
            t02: "21,879",
            t03: "0",
            t04: "",
            t05: "",
            t06: "",
            t07: "",
            t08: "0",
            t09: "21,879",
            t10: "",
            h01: "",
            h02: "",
            h03: "",
            h04: ""
          }
        ]
      }
    },
    {
      demand: "横浜市青葉区",
      date: {
        createdAt: {
          h01: "2019",
          h02: "01",
          h03: "20"
        },
        bill: {
          r01: "2018",
          r02: "05"
        }
      },
      facility: {
        c01: "0000000011",
        c02: "104-8227",
        c03:
          "東京都中央区東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル東京都中央区銀座7-3-5ヒューリック銀座7丁目ビル",
        c04: "00000000",
        c05: "株式会社ノウビー",
        c06: "アエーカ"
      },
      bill: {
        r03: "5,556",
        typeServices: [
          {
            t01: "就労移行支援",
            t02: "1",
            t03: "497",
            t04: "5,556",
            t05: "5,556",
            t06: "0",
            t07: "0"
          }
        ],
        subTotal: {
          s02: "1",
          s03: "497",
          s04: "5,556",
          s05: "5,556",
          s06: "0",
          s07: "0"
        },
        specialHandicapped: {
          h02: null,
          h04: null,
          h05: null,
          h07: null
        },
        total: {
          w02: "1",
          w03: "497",
          w04: "5,556",
          w05: "5,556",
          w06: "0",
          w07: "0"
        }
      },
      detail: {
        date: {
          m03: "2018",
          m04: "05"
        },
        facility: {
          m08: "0000000011",
          m09: "株式会社ノウビー",
          m10: "一級地",
          m11: "無し"
        },
        users: [
          {
            m01: "141176",
            m02: "",
            m05: "1000000115",
            m06: "工藤 宏彦",
            m07: "",
            m12: "0",
            m13: "無し",
            m14: "",
            m15: "",
            m16: "",
            m17: "",
            serviceTypes: [
              {
                s01: "43",
                s02: "2018",
                s03: "05",
                s04: "10",
                s05: "",
                s06: "",
                s07: "",
                s08: 1,
                s09: ""
              }
            ],
            serviceContents: [
              {
                c01: "就移１７・人欠２・期間超",
                c02: "43D157",
                c03: "238",
                c04: "1",
                c05: "238",
                c06: ""
              },
              {
                c01: "就移初期加算",
                c02: "435050",
                c03: "30",
                c04: "1",
                c05: "30",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算３",
                c02: "435262",
                c03: "36",
                c04: "1",
                c05: "36",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算７",
                c02: "435271",
                c03: "21",
                c04: "1",
                c05: "21",
                c06: ""
              },
              {
                c01: "就移就労定着支援体制加算１３",
                c02: "435282",
                c03: "26",
                c04: "1",
                c05: "26",
                c06: ""
              },
              {
                c01: "就移精障退院支援施設加算Ⅱ",
                c02: "435231",
                c03: "115",
                c04: "1",
                c05: "115",
                c06: ""
              },
              {
                c01: "就移処遇改善加算Ⅰ",
                c02: "436715",
                c03: "31",
                c04: "1",
                c05: "31",
                c06: ""
              }
            ],
            summaries: [
              {
                d01: "43",
                d02: "就労移行支援",
                d03: 1,
                d04: "497",
                d05: 11.18,
                d06: "5,556",
                d07: "555",
                d08: "555",
                d09: "0",
                d10: "",
                d11: "",
                d12: "",
                d13: "",
                d14: "0",
                d15: "5,556",
                d16: ""
              }
            ],
            t01: "497",
            t02: "5,556",
            t03: "0",
            t04: "",
            t05: "",
            t06: "",
            t07: "",
            t08: "0",
            t09: "5,556",
            t10: "",
            h01: "",
            h02: "",
            h03: "",
            h04: ""
          }
        ]
      }
    }
  ]
};

stories.add(
  // InvoiceSummaryTotal
  "給付費請求サマリ",
  () => (
    <InvoiceSummaryTotal data={data.summaryByMonth} />
  )
);

stories.add(
  // InvoiceSummaryCity
  "介護給付費・訓練等給付費等請求書",
  () => (
    <InvoiceSummaryCity data={data.summaryByCity[0]} />
  )
);

// stories.add(
//   // InvoiceSummaryDetail
// "介護給付費・訓練等給付費等明細書",
//   () => (
//     <InvoiceSummaryDetail data={data.summaryByCity[0].detail} />
//   )
// );

// stories.add(
//   // InvoiceSummaryDetailGroupHome
//   "訓練等給付費等明細書(共同生活援助)",
//   () => (
//     <InvoiceSummaryDetailGroupHome data={data.summaryByCity[0].detail} />
//   )
// );
