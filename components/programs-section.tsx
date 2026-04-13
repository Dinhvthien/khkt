import { Zap, Cpu, Monitor, Car, ChefHat, TrendingUp } from "lucide-react"

const programs = [
  {
    icon: Zap,
    name: "Điện công nghiệp",
    description: "Vận hành, bảo trì hệ thống điện trong nhà máy, xí nghiệp",
    demand: "Cao",
  },
  {
    icon: Cpu,
    name: "Điện - Điện tử",
    description: "Công nghệ kỹ thuật điện, điện tử",
    demand: "Rất cao",
  },
  {
    icon: Monitor,
    name: "Công nghệ thông tin",
    description: "Lắp ráp và sửa chữa máy tính",
    demand: "Rất cao",
  },
  {
    icon: Car,
    name: "Công nghệ ô tô",
    description: "Lắp ráp và sửa chữa ô tô",
    demand: "Cao",
  },
  {
    icon: ChefHat,
    name: "Nhà hàng - Khách sạn - Nấu ăn",
    description: "Nghiệp vụ nhà hàng, khách sạn, nấu ăn chuyên nghiệp",
    demand: "Cao",
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Ngành học xu hướng
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ngành học xã hội đang cần
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Các ngành có nhu cầu tuyển dụng cao, dễ xin việc, có cơ hội đi nước ngoài
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <program.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {program.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Nhu cầu: {program.demand}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Tất cả các ngành đều có cơ hội làm việc tại Nhật Bản, Hàn Quốc sau khi tốt nghiệp
          </p>
        </div>
      </div>
    </section>
  )
}
