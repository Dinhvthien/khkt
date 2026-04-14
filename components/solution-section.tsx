import { CheckCircle2, GraduationCap, Building2, Briefcase } from "lucide-react"

const benefits = [
  "Không cần tiền vẫn học được",
  "Có thu nhập ngay từ khi học",
  "Có bằng cấp + tay nghề",
  "Có việc làm sau tốt nghiệp",
]

const valueChain = [
  {
    icon: GraduationCap,
    title: "IFN GROUP",
    description: "Tổ chức chương trình, chi trả 100% học phí, kết nối nhà trường & doanh nghiệp",
  },
  {
    icon: Building2,
    title: "Nhà trường",
    description: "Đào tạo chuyên môn cao đẳng chính quy, cấp bằng được công nhận toàn quốc",
  },
  {
    icon: Briefcase,
    title: "Doanh nghiệp",
    description: "Tiếp nhận thực hành, trả lương hàng tháng, tuyển dụng sau tốt nghiệp",
  },
]

export function SolutionSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              Giải pháp toàn diện
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Chương trình IFN giải quyết 3 bài toán cùng lúc
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tài chính - Việc làm - Định hướng nghề nghiệp. Phù hợp 100% với học sinh có hoàn cảnh khó khăn, muốn tự lập sớm, hoặc muốn vừa học vừa làm.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Chuỗi giá trị hoàn chỉnh
            </h3>
            <div className="space-y-6">
              {valueChain.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
