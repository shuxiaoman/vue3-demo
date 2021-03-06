import { PageContent, PageHeader } from "@/components/Page";
import {
  PageHeader as AntPageHeader,
  Descriptions,
  Table
} from "ant-design-vue";
import { Card, Divider, Badge } from "ant-design-vue";
import { defineComponent, onMounted, reactive } from "vue";
import {
  getInfo,
  getReturnGoods,
  getReturnProcess
} from "@/services/profile/basic";
import {
  RefundType,
  ReturnGoodsType,
  ReturnProcessType,
  UserInfoType
} from "./data";
import { ColumnProps } from "ant-design-vue/es/table/interface";
import { formatTime } from "@/utils";

export interface DescPropType<T> {
  id: keyof T;
  label: string;
  value: string;
}

export interface ProColumnProps<T = {}> extends Omit<ColumnProps, "dataIndex"> {
  dataIndex: keyof T;
}

export default defineComponent({
  setup() {
    const refund = reactive<DescPropType<RefundType>[]>([
      { id: "pickUpNo", label: "取货单号", value: "" },
      { id: "state", label: "状态", value: "" },
      { id: "saleNo", label: "销售单号", value: "" },
      { id: "childNo", label: "子订单", value: "" }
    ]);

    const userInfo = reactive<DescPropType<UserInfoType>[]>([
      { id: "name", label: "用户姓名", value: "" },
      { id: "tel", label: "联系电话", value: "" },
      { id: "express", label: "常用快递", value: "" },
      { id: "address", label: "取货地址", value: "" },
      { id: "mark", label: "备注", value: "" }
    ]);

    const countRender = ({
      text,
      record
    }: {
      text: string;
      record: ReturnGoodsType;
    }) => (record.no !== "总计" ? text : undefined);

    const returnGoodsColumns = reactive<ProColumnProps<ReturnGoodsType>[]>([
      {
        title: "商品编号",
        dataIndex: "no",
        width: 100,
        customRender: ({ text }) => <a>{text}</a>
      },
      {
        title: "商品名称",
        dataIndex: "name",
        width: 120,
        customRender: countRender
      },
      {
        title: "商品条码",
        dataIndex: "barCode",
        width: 150,
        customRender: countRender
      },
      {
        title: "单价",
        dataIndex: "price",
        width: 100,
        customRender: countRender
      },
      {
        title: "数量",
        dataIndex: "number",
        width: 100,
        customRender: ({
          text,
          record
        }: {
          text: string;
          record: ReturnGoodsType;
        }) =>
          record.no !== "总计" ? text : <span style="color:red">{text}</span>
      },
      {
        title: "金额",
        dataIndex: "amount",
        width: 100
      }
    ]);

    const returnProcessColumns = reactive<ProColumnProps<ReturnProcessType>[]>([
      {
        title: "时间",
        dataIndex: "time",
        width: 200,
        customRender: ({ text }) => {
          return formatTime(Number(text));
        }
      },
      {
        title: "当前进度",
        dataIndex: "process",
        width: 150
      },
      {
        title: "状态",
        dataIndex: "state",
        width: 100,
        customRender: ({ text }) => (
          <Badge
            status={text === "完成" ? "success" : "processing"}
            text={text}
          />
        )
      },
      {
        title: "操作员ID",
        dataIndex: "userId",
        width: 100
      },
      {
        title: "耗时",
        dataIndex: "timeConsuming",
        width: 100
      }
    ]);

    const returnGoods = reactive<ReturnGoodsType[]>([]);
    const returnProcess = reactive<ReturnProcessType[]>([]);

    onMounted(async () => {
      const { refund: r, userInfo: u } = await getInfo();
      const { list: goodsList } = await getReturnGoods();
      const { list: processList } = await getReturnProcess();

      refund.splice(
        0,
        refund.length,
        ...refund.map(i => {
          const ret = i;
          ret.value = r[i.id] as string;
          return ret;
        })
      );
      userInfo.splice(
        0,
        userInfo.length,
        ...userInfo.map(i => {
          const ret = i;
          ret.value = u[i.id] as string;
          return ret;
        })
      );
      returnGoods.splice(0, returnGoods.length, ...goodsList, {
        id: 0,
        no: "总计",
        name: "",
        barCode: 0,
        price: 0,
        number: goodsList.map(i => i.number).reduce((p, n) => p + n),
        amount: goodsList.map(i => i.amount).reduce((p, n) => p + n)
      });
      returnProcess.splice(0, returnProcess.length, ...processList);
    });

    return () => (
      <>
        <PageHeader>
          <AntPageHeader>基础详情页</AntPageHeader>
        </PageHeader>
        <PageContent>
          <Card>
            <Descriptions title="退款申请">
              {refund.map(i => (
                <Descriptions.Item label={i.label}>{i.value}</Descriptions.Item>
              ))}
            </Descriptions>
            <Divider />
            <Descriptions title="用户信息">
              {userInfo.map(i => (
                <Descriptions.Item label={i.label}>{i.value}</Descriptions.Item>
              ))}
            </Descriptions>
            <Divider />
            <Table
              rowKey="id"
              style={{
                "margin-bottom": "24px"
              }}
              scroll={{ x: "100%" }}
              title={() => "退货商品"}
              columns={returnGoodsColumns}
              dataSource={returnGoods}
              pagination={false}
            />
            <Table
              rowKey="id"
              style={{
                "margin-bottom": "24px"
              }}
              scroll={{ x: "100%" }}
              title={() => "退货进度"}
              columns={returnProcessColumns}
              dataSource={returnProcess}
              pagination={false}
            />
          </Card>
        </PageContent>
      </>
    );
  }
});
