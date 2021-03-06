import { ultramanclub } from "../../utils/data";

export default {
  "POST /profile/basic": {
    success: true,
    data: {
      refund: {
        "pickUpNo|1000000-2000000": 0,
        "state|1": ["新建", "待发货", "已发货", "运输中", "已取货", "完成"],
        "saleNo|65761231-75761231": 0,
        "childNo|3000000-4000000": 0
      },
      userInfo: {
        "name|1": ultramanclub,
        "tel|13128390195-18112957321": 0,
        "express|1": ["m78星云", "怪兽监狱", "地球", "百兽墓地"],
        address: "四川成都天府四街ocg",
        "mark|1": ["无", "小怪兽", "黑暗暴君"]
      }
    }
  },
  "POST /profile/basic/return-gogds": {
    success: true,
    data: {
      "list|5": [
        {
          "id|+1": 1,
          "no|+1": 87321,
          "name|+1": [
            "矿泉水550ml",
            "凉茶300ml",
            "薯片",
            "肥宅快乐水",
            "口味王"
          ],
          "barCode|867898672-967898672": 0,
          "price|3-10": 0,
          "number|1-4": 0,
          "amount|50-3021": 1
        }
      ]
    }
  },
  "POST /profile/basic/return-process": {
    success: true,
    data: {
      "list|5": [
        {
          "id|+1": 1,
          time: () =>
            new Date().getTime() - Math.round(Math.random() * 999999999999),
          "process|+1": [
            "联系客户",
            "取货源出发",
            "取货员接单",
            "申请审批通过",
            "发起退货申请"
          ],
          "state|+1": ["进行中", "完成"],
          "userId|3-10": 0,
          "timeConsuming|1-3600": 0
        }
      ]
    }
  }
};
