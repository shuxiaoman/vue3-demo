import { ultramanclub } from "../../utils/data";

export default {
  "GET /list/basic": {
    success: true,
    data: {
      "list|5": [
        {
          "avatar|+1": [
            "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
            "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
            "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
            "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
            "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"
          ],
          "metaTitle|+1": [
            "Alipay",
            "Angular",
            "Ant Design",
            "Ant Design Pro",
            "Bootstrap"
          ],
          "metaDesc|1": [
            "全部新生代英雄（银河、维克特利、艾克斯、欧布、捷德、罗索、布鲁、格丽乔、泰迦、泰塔斯、风马）的力量与工藤优幸一起诞生的新奥特曼。",
            "曾经守护地球过的泰罗奥特曼（初登场作品『泰罗奥特曼』(1973)）的儿子。真心想得到父亲泰罗的认可却不能坦率表达。",
            "在优幸体内寄宿着的第二位奥特曼。乔尼亚斯奥特曼（初登场作品『乔尼亚斯奥特曼』(1979)）的后辈，身为与光之国不同的奥特之星·U40战士的贤者。",
            "优幸体内寄宿着的第三位奥特曼。在欧布奥特曼（初登场作品『欧布奥特曼』(2016)），和罗索、布鲁（初登场作品『奥特曼Ｒ／Ｂ』(2018)）授予光之战士力量的行星O-50出身。",
            "凑家兄妹的感情以及真谛水晶的力量，罗索奥特曼、布鲁、以及格丽乔奥特嫚融合·变身呈现出超进化战斗形态。"
          ],
          "owner|1": ultramanclub,
          startTime: () =>
            new Date().getTime() - Math.round(Math.random() * 999999999999),
          "process|0-100": 0,
          "status|1": ["success", "exception", "normal", "active"]
        }
      ]
    }
  }
};
