import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const packages = [
  {
    name: "Gói A3",
    subtitle: "Miễn phí học phí",
    value: "Hơn 90 triệu (hệ THPT)",
    description: "100% học phí",
    income: "5 - 8 triệu/tháng",
    features: [
      "Miễn 100% học phí (28 triệuđ/năm)",
      "Xe đưa đón (10 triệuđ/toàn khóa)",
      "Vừa học vừa làm tại doanh nghiệp",
      "Thu nhập 5-8 triệuđ/tháng (theo tăng ca)",
      "Đào tạo kỹ năng mềm",
      "Cam kết việc làm sau tốt nghiệp",
    ],
    note: "Hệ Trung cấp liên thông: hơn 65 triệuđ",
    popular: false,
  },
  {
    name: "Gói A2",
    subtitle: "Hỗ trợ cơ bản",
    value: "Hơn 140 triệu (hệ THPT)",
    description: "100% học phí + Tiền ở",
    income: "4 - 6 triệu/tháng",
    features: [
      "Miễn 100% học phí (28 triệuđ/năm)",
      "Hỗ trợ tiền ở (500.000-1.000.000đ/tháng)",
      "Xe đưa đón (10 triệuđ/toàn khóa)",
      "Vừa học vừa làm tại doanh nghiệp",
      "Thu nhập 4-6 triệuđ/tháng",
      "Đào tạo kỹ năng mềm",
      "Cam kết việc làm sau tốt nghiệp",
    ],
    note: "Hệ Trung cấp liên thông: hơn 90 triệuđ",
    popular: true,
  },
  {
    name: "Gói A1",
    subtitle: "Hỗ trợ toàn phần",
    value: "Hơn 210 triệu (hệ THPT)",
    description: "100% học phí + Tiền ăn + Tiền ở",
    income: "Trợ cấp 2 - 6 triệu/tháng",
    features: [
      "Miễn 100% học phí (28 triệuđ/năm)",
      "Hỗ trợ tiền ở (500.000-1.000.000đ/tháng)",
      "Hỗ trợ tiền ăn (75.000đ/ngày)",
      "Xe đưa đón (10 triệuđ/toàn khóa)",
      "Vừa học vừa làm tại doanh nghiệp",
      "Trợ cấp thực hành 2-6 triệuđ/tháng",
      "Đào tạo kỹ năng mềm",
      "Cơ hội đi Nhật, Hàn",
      "Cam kết việc làm sau tốt nghiệp",
    ],
    note: "Hệ Trung cấp liên thông: hơn 140 triệuđ",
    popular: false,
  },
]

export function ScholarshipPackages() {
  return (
    <section id="scholarships" className="py-20 md:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Các gói học bổng
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Chọn gói học bổng phù hợp với bạn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
             Tất cả các gói đều miễn 100% học phí và cam kết việc làm sau tốt nghiệp. <br />
             <span className="text-sm">(Hệ 9+ dành cho học sinh THCS muốn học liên thông lên Cao đẳng)</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative bg-card rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl",
                pkg.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary/50"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                    <Star className="h-4 w-4 fill-current" />
                    Phổ biến nhất
                  </div>
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pkg.subtitle}</p>
              </div>

              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-primary">{pkg.value}</div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 mb-4">
                <p className="text-sm text-muted-foreground text-center">Thu nhập hàng tháng</p>
                <p className="text-xl font-bold text-primary text-center">{pkg.income}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs text-muted-foreground italic border-t pt-3">
                {pkg.note}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5 max-w-3xl mx-auto">
          <h3 className="font-medium text-green-800 mb-3">Quyền lợi chung của cả 3 gói:</h3>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-green-700">
            <div className="flex items-center gap-2"><span>✓</span><span>Vừa học vừa làm tại doanh nghiệp FDI</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>Có lương/thu nhập hàng tháng</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>Xe đưa đón khi ở xa nhà máy</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>Đào tạo kỹ năng mềm, giao lưu quốc tế</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>Cam kết việc làm sau tốt nghiệp 01 năm</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>Đóng BHYT, BHXH theo quy định</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>Có cơ hội du học Nhật Bản, Hàn Quốc</span></div>
            <div className="flex items-center gap-2"><span>✓</span><span>Được cấp bằng Cao đẳng chính quy</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}