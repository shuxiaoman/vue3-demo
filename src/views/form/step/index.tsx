import { PageHeader, PageContent } from "@/components/Page";
import { defineComponent, reactive, ref } from "vue";
import { PageHeader as AntPageHeader, Card, Steps } from "ant-design-vue";
import Write from "./write";
import Confirm from "./confirm";
import Success from "./success";

const { Step } = Steps;

export interface FormType {
  payAccount?: string;
  receptOrg: string;
  receptAccount: string;
  receptName: string;
  amount: string;
}

export default defineComponent({
  name: "step",
  setup() {
    const form: FormType = reactive({
      payAccount: undefined,
      receptOrg: "bank",
      receptAccount: "M78星云公司",
      receptName: "戴拿奥特曼",
      amount: "100"
    });
    const step = ref(0);
    return () => (
      <>
        <PageHeader>
          <AntPageHeader title="高级表单">
            将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
          </AntPageHeader>
        </PageHeader>
        <PageContent>
          <Card>
            <Steps
              current={step.value}
              style={{ "max-width": "750px", margin: "16px auto" }}
            >
              <Step>
                {{
                  title: () => "填写转账信息"
                }}
              </Step>
              <Step title="确认转账信息" />
              <Step title="完成" />
            </Steps>
            <div v-show={step.value === 0}>
              <Write
                form={form}
                onSubmit={() => {
                  step.value = 1;
                }}
              />
            </div>
            <div v-show={step.value === 1}>
              <Confirm
                form={form}
                onSubmit={() => (step.value = 2)}
                onPrevious={() => {
                  step.value -= 1;
                }}
              />
            </div>
            <div v-show={step.value === 2}>
              <Success
                form={form}
                onAgain={() => {
                  step.value = 0;
                }}
              />
            </div>
          </Card>
        </PageContent>
      </>
    );
  }
});
