import { CheckCircle2, Award, TrendingUp, Users, Globe, Building2 } from "lucide-react"

const highlights = [
  { icon: Award, text: "Học bổng 100% học phí" },
  { icon: TrendingUp, text: "Thu nhập 2-8 triệu/tháng" },
  { icon: Users, text: "Hỗ trợ sinh viên khó khăn" },
  { icon: Building2, text: "Doanh nghiệp FDI" },
  { icon: Globe, text: "Đối tác Nhật Bản - Hàn Quốc" },
]

const goals = [
  {
    title: "Thực hiện hóa Nghị quyết 71-NQ/TW",
    description: "Ngày 22/8/2025 của Bộ Chính trị về đột phá phát triển giáo dục và đào tạo.",
  },
  {
    title: "Kết nối Nhà trường - Doanh nghiệp",
    description: "Giúp sinh viên trải nghiệm công việc thực tế và rèn luyện kỹ năng nghề đáp ứng nhu cầu doanh nghiệp.",
  },
  {
    title: "Giải quyết điểm nghẽn",
    description: "Tháo gỡ các vấn đề về đào tạo nghề và việc làm cho sinh viên.",
  },
  {
    title: "Hỗ trợ sinh viên quốc tế",
    description: "Giúp các bạn sinh viên có hoàn cảnh khó khăn được làm việc trong môi trường quốc tế sớm.",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Đang tuyển sinh khóa mới 2026
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Chương trình tài trợ: <span className="text-primary">Khuyến học khuyến tài - Xây dựng tương lai</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Dự án do Doanh nghiệp FDI (Vốn nước ngoài), các đối tác tại Nhật Bản, Hàn Quốc cùng Công ty CP Tập đoàn IFN tổ chức.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {goals.map((goal, index) => (
              <div key={index} className="flex gap-3 p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{goal.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-border/50">
            <p className="text-sm font-medium text-muted-foreground mb-4">Điểm nổi bật:</p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
