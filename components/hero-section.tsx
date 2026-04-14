import { CheckCircle2, Award, TrendingUp, Users, Globe, Building2, GraduationCap, Target, Handshake, Sparkles } from "lucide-react"

const highlights = [
  { icon: Award, text: "Học bổng 100% học phí", color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  { icon: TrendingUp, text: "Thu nhập 2-8 triệu/tháng", color: "bg-green-500/10 text-green-600 border-green-500/20" },
  { icon: Users, text: "Hỗ trợ sinh viên khó khăn", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
  { icon: Building2, text: "Doanh nghiệp FDI", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
  { icon: Globe, text: "Đối tác Nhật Bản - Hàn Quốc", color: "bg-rose-500/10 text-rose-600 border-rose-500/20" },
]

const goals = [
  {
    icon: Target,
    title: "Thực hiện hóa Nghị quyết 71-NQ/TW",
    description: "Ngày 22/8/2025 của Bộ Chính trị về đột phá phát triển giáo dục và đào tạo.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Handshake,
    title: "Kết nối Nhà trường - Doanh nghiệp",
    description: "Giúp sinh viên trải nghiệm công việc thực tế và rèn luyện kỹ năng nghề đáp ứng nhu cầu doanh nghiệp.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Giải quyết điểm nghẽn",
    description: "Tháo gỡ các vấn đề về đào tạo nghề và việc làm cho sinh viên.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Hỗ trợ sinh viên quốc tế",
    description: "Giúp các bạn sinh viên có hoàn cảnh khó khăn được làm việc trong môi trường quốc tế sớm.",
    gradient: "from-green-500 to-emerald-500",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Đang tuyển sinh khóa mới 2026
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
                Chương trình tài trợ: <span className="text-primary">Khuyến học khuyến tài</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 text-balance">
                Xây dựng tương lai
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Dự án do Doanh nghiệp FDI (Vốn nước ngoài), các đối tác tại Nhật Bản, Hàn Quốc cùng <span className="font-semibold text-foreground">Công ty CP Tập đoàn IFN</span> tổ chức.
            </p>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <div key={index} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all hover:scale-105 ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {goals.slice(0, 2).map((goal, index) => (
                <div key={index} className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <goal.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-2 line-clamp-2">{goal.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{goal.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {goals.slice(2, 4).map((goal, index) => (
                <div key={index} className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <goal.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-2 line-clamp-2">{goal.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}