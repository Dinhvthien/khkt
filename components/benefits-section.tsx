import { 
  Banknote, 
  GraduationCap, 
  Bus, 
  Globe2, 
  Briefcase, 
  HeartHandshake,
  Music,
  Trophy
} from "lucide-react"

const benefits = [
  {
    icon: Banknote,
    title: "Trợ cấp hàng tháng",
    description: "Nhận thu nhập từ 2-8 triệu đồng/tháng khi học tập và thực hành tại nhà máy, tùy theo chương trình A1/A2/A3 và kỹ năng nghề",
  },
  {
    icon: Bus,
    title: "Xe đưa đón miễn phí",
    description: "Hỗ trợ xe ô tô đưa đón đi thực hành, thực tập nếu ở xa nhà máy (khoảng cách > 1km)",
  },
  {
    icon: Music,
    title: "Hoạt động ngoại khóa",
    description: "Tham gia các hoạt động văn nghệ, thể thao, du lịch và đào tạo kỹ năng mềm, kỹ năng sống",
  },
  {
    icon: Globe2,
    title: "Giao lưu quốc tế",
    description: "Cơ hội tham gia giao lưu quốc tế với các nước Hàn Quốc, Nhật Bản, Trung Quốc và nhiều nước khác",
  },
  {
    icon: Briefcase,
    title: "Cam kết việc làm",
    description: "Sau tốt nghiệp, cam kết làm việc tại doanh nghiệp FDI 1 năm, hưởng lương và chế độ theo bằng cấp",
  },
  {
    icon: HeartHandshake,
    title: "Bảo hiểm đầy đủ",
    description: "Được đóng BHYT và BHXH theo quy định và theo thỏa thuận của công ty trong suốt quá trình học và làm việc",
  },
  {
    icon: GraduationCap,
    title: "Bằng cấp chính quy",
    description: "Nhận bằng Cao đẳng chính quy, hoặc bằng THPT + Trung cấp + Cao đẳng với hệ 9+ liên thông",
  },
  {
    icon: Trophy,
    title: "Cơ hội phát triển",
    description: "Sinh viên xuất sắc được tài trợ học lên Đại học hoặc sang Nhật Bản, Hàn Quốc học tập và làm việc",
  },
]

const incomeTable = [
  {
    program: "A1",
    scholarship: "Học phí + Ăn + Ở",
    value: "180 triệu (3 năm) / 250 triệu (4.5 năm)",
    income: "2 - 6 triệu/tháng",
  },
  {
    program: "A2",
    scholarship: "Học phí + Ở",
    value: "100 triệu (3 năm) / 150 triệu (4.5 năm)",
    income: "4 - 6 triệu/tháng",
  },
  {
    program: "A3",
    scholarship: "Học phí",
    value: "60 triệu (3 năm)",
    income: "5 - 8 triệu/tháng",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Quyền lợi sinh viên
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Phúc lợi và ưu đãi hấp dẫn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tất cả sinh viên tham gia chương trình A1, A2, A3 đều được hưởng các quyền lợi chung
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Income Table */}
        <div className="bg-card rounded-3xl border border-border overflow-hidden">
          <div className="bg-primary/5 px-8 py-6 border-b border-border">
            <h3 className="text-xl font-semibold text-foreground">
              Thu nhập theo từng chương trình
            </h3>
            <p className="text-muted-foreground mt-1">
              Mức trợ cấp/thu nhập hàng tháng tùy theo kỹ năng nghề và thời lượng thực hành
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Chương trình</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Hỗ trợ học bổng</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Tổng giá trị</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Thu nhập/tháng</th>
                </tr>
              </thead>
              <tbody>
                {incomeTable.map((row, index) => (
                  <tr 
                    key={row.program} 
                    className={index !== incomeTable.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        {row.program}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-foreground">{row.scholarship}</td>
                    <td className="px-6 py-4 text-foreground">{row.value}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                        {row.income}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Career Path */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Sau khi tốt nghiệp + 1 năm làm việc
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <span className="text-foreground">Được bố trí làm việc tại doanh nghiệp FDI ở Việt Nam với vị trí công việc theo nguyện vọng</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <span className="text-foreground">Hưởng lương chính thức theo bằng cấp và trình độ được đào tạo</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <span className="text-foreground">Cơ hội thăng tiến và phát triển sự nghiệp lâu dài</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-3xl p-8 border border-amber-500/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Cơ hội du học & XKLĐ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-amber-500 mt-2" />
                <span className="text-foreground">Sinh viên có thành tích học tập tốt được tiếp tục tài trợ lên Đại học</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-amber-500 mt-2" />
                <span className="text-foreground">Lựa chọn sang Nhật Bản, Hàn Quốc học tập và làm việc</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-amber-500 mt-2" />
                <span className="text-foreground">Chi phí tiếp tục được tài trợ xuất cảnh tùy theo kết quả học tập</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
