import { ultramanclub, avatar } from "../../utils/data";

export default {
  "GET /dashboard/workspace/data/list": {
    success: true,
    data: {
      statistic: {
        "projectNum|4-32": 0,
        "teamRank|1-24": 0,
        "visitNum|232-563": 0
      },
      currentUser: {
        avatar:
          "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
        "name|1": ultramanclub
      },
      projects: [
        {
          id: 1,
          title: `Alipay`,
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
          description: "那是一种内在的东西， 他们到达不了，也无法触及的"
        },
        {
          id: 2,
          title: `Angular`,
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
          description: "那是一种内在的东西， 他们到达不了，也无法触及的"
        },
        {
          id: 3,
          title: `Ant Design`,
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
          description: "那是一种内在的东西， 他们到达不了，也无法触及的"
        },
        {
          id: 4,
          title: `Ant Design Pro`,
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
          description: "那是一种内在的东西， 他们到达不了，也无法触及的"
        },
        {
          id: 5,
          title: `Bootstrap`,
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
          description: "那是一种内在的东西， 他们到达不了，也无法触及的"
        },
        {
          id: 6,
          title: `Vue`,
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png",
          description: "那是一种内在的东西， 他们到达不了，也无法触及的"
        }
      ],
      "activities|5-12": [
        {
          "id|+1": 0,
          "avatar|1": avatar,
          "nickname|1": ultramanclub,
          "project|1": ["运维后台", "门户网站", "移动端", "Docker", "Linux"],
          "action|1": ["新增", "删除", "修改", "查询", "提交"],
          "event|1": ["服务", "页面", "配置", "代码", "审批"],
          "time|1": '@datetime("yyyy-MM-dd HH:mm:ss")'
        }
      ],
      "teams|5": [
        {
          "id|+1": 1,
          "avatar|1": avatar,
          "name|+1": [
            "程序员",
            "搬砖大队",
            "福报企业",
            "技术解决方案",
            "架构团队"
          ]
        }
      ]
    }
  },
  "GET /dashboard/workspace/radar/list": {
    success: true,
    data: [
      { item: "Design", user: "a", "score|20-80": 70 },
      { item: "Design", user: "b", "score|20-80": 30 },
      { item: "Design", user: "c", "score|20-80": 40 },
      { item: "Development", user: "a", "score|20-80": 60 },
      { item: "Development", user: "b", "score|20-80": 70 },
      { item: "Development", user: "c", "score|20-80": 10 },
      { item: "Marketing", user: "a", "score|20-80": 50 },
      { item: "Marketing", user: "b", "score|20-80": 60 },
      { item: "Marketing", user: "c", "score|20-80": 30 },
      { item: "Users", user: "a", "score|20-80": 40 },
      { item: "Users", user: "b", "score|20-80": 50 },
      { item: "Users", user: "c", "score|20-80": 80 },
      { item: "Test", user: "a", "score|20-80": 60 },
      { item: "Test", user: "b", "score|20-80": 70 },
      { item: "Test", user: "c", "score|20-80": 50 }
    ]
  }
};
