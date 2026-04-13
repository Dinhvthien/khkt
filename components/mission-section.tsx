"use client"

import { FileText, Users, Briefcase, Globe, Target, Shield } from "lucide-react"

const objectives = [
  {
    icon: Users,
    title: "Kết nối 3 nhà",
    description: "Tăng cường kết hợp hiệu quả giữa Nhà trường - Doanh nghiệp - Cơ sở thực hành",
  },
  {
    icon: Briefcase,
    title: "Nâng cao chất lượng",
    description: "Giúp sinh viên trải nghiệm công việc thực tế, rèn luyện kỹ năng đáp ứng nhu cầu doanh nghiệp",
  },
  {
    icon: Target,
    title: "Tháo gỡ điểm nghẽn",
    description: "Giải quyết các vấn đề trong đào tạo nghề và việc làm cho thanh niên",
  },
  {
    icon: Shield,
    title: "Hỗ trợ hoàn cảnh khó khăn",
    description: "Tạo cơ hội cho học sinh, sinh viên mong muốn làm việc trong môi trường quốc tế",
  },
]

const partners = [
  {
    label: "Doanh nghiệp FDI",
    description: "Vốn đầu tư nước ngoài",
  },
  {
    label: "Đối tác Nhật Bản",
    description: "Hợp tác quốc tế",
  },
  {
    label: "Đối tác Hàn Quốc",
    description: "Hợp tác quốc tế",
  },
  {
    label: "IFN Group",
    description: "Tổ chức & điều phối",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6">
            <FileText className="h-4 w-4" />
            Nghị quyết 71-NQ/TW ngày 22/8/2025
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Chương trình thực hiện hóa Nghị quyết của Bộ Chính trị
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Về đột phá phát triển giáo dục và đào tạo, đảm bảo đầu ra cho sinh viên sau tốt nghiệp
          </p>
        </div>

        {/* Main content card */}
        <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
          {/* Top section - Objectives */}
          <div className="p-8 md:p-12">
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Target className="h-5 w-5" />
              </span>
              Mục tiêu chương trình
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {objectives.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-5 rounded-2xl bg-muted/50 hover:bg-muted/80 transition-colors"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Bottom section - Partners */}
          <div className="p-8 md:p-12 bg-muted/30">
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Globe className="h-5 w-5" />
              </span>
              Đơn vị tổ chức
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    {index === 3 ? (
                      <span className="text-primary font-bold text-lg">IFN</span>
                    ) : (
                      <Globe className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{partner.label}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{partner.description}</p>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-center text-foreground leading-relaxed">
                <span className="font-semibold">Dự án được tổ chức bởi</span>{" "}
                Doanh nghiệp FDI (vốn nước ngoài), các đối tác tại Nhật Bản, Hàn Quốc cùng{" "}
                <span className="font-semibold text-primary">Công ty Cổ phần Tập đoàn IFN (IFN Group)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
