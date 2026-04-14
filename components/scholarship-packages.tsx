import { Award, Car, GraduationCap, Users, Briefcase, Shield } from "lucide-react"

const packages = [
  { 
    name: "A1 - Hỗ trợ toàn phần", 
    value: "Hơn 210 triệu (hệ THPT)", 
    benefit: "100% học phí + Tiền ăn + Tiền ở", 
    income: "Trợ cấp 2-6 triệu/tháng",
    details: [
      "Học phí: 28 triệuđ/năm",
      "Tiền ăn: 75.000đ/ngày (~27 triệu/năm)",
      "Tiền ở: 500.000-1.000.000đ/tháng (~15 triệu/năm)",
      "Xe đưa đón: 10 triệuđ/toàn khóa",
      "Trợ cấp thực hành: 2-6 triệuđ/tháng",
    ]
  },
  { 
    name: "A2 - Hỗ trợ cơ bản", 
    value: "Hơn 140 triệu (hệ THPT)", 
    benefit: "100% học phí + Tiền ở", 
    income: "Thu nhập 4-6 triệu/tháng",
    details: [
      "Học phí: 28 triệuđ/năm",
      "Tiền ở: 500.000-1.000.000đ/tháng (~15 triệu/năm)",
      "Xe đưa đón: 10 triệuđ/toàn khóa",
      "Thu nhập thực hành: 4-6 triệuđ/tháng",
    ]
  },
  { 
    name: "A3 - Miễn phí học phí", 
    value: "Hơn 90 triệu (hệ THPT)", 
    benefit: "100% học phí", 
    income: "Thu nhập 5-8 triệu/tháng",
    details: [
      "Học phí: 28 triệuđ/năm",
      "Xe đưa đón: 10 triệuđ/toàn khóa",
      "Thu nhập thực hành: 5-8 triệuđ/tháng (theo tăng ca)",
    ]
  },
]

const benefits = [
  "Vừa học vừa làm tại doanh nghiệp FDI",
  "Có lương/thu nhập hàng tháng",
  "Xe đưa đón khi ở xa nhà máy",
  "Đào tạo kỹ năng mềm, kỹ năng sống, tham gia hoạt động ngoại khoá: Văn nghệ, thể thao, du lịch",
  "Tham gia giao lưu quốc tế (Hàn Quốc, Nhật Bản, Trung Quốc)",
  "Cam kết việc làm sau tốt nghiệp 01 năm tại doanh nghiệp FDI",
  "Được bố trí công việc sau khi hoàn thành chương trình đào tạo",
  "Được cấp bằng Cao đẳng (hoặc bằng THPT, Trung cấp đối hệ 9+ liên thông)",
  "Sinh viên có thành tích tốt được tiếp tục tài trợ lên Đại học",
  "Cơ hội du học Nhật Bản, Hàn Quốc học tập và làm việc (được hỗ trợ phí xuất cảnh)",
  "Đóng BHYT, BHXH theo quy định",
]

const reminders = [
  "Sinh viên cần thực hành/thực tập theo đúng quy định mới đủ điều kiện nhận hỗ trợ",
  "Chi phí điện nước vượt quá 100.000đ/người/tháng, sinh viên tự thanh toán phần vượt",
  "Sinh viên đi bộ khi khoảng cách ≤ 1km",
]

const requirements = [
  { label: "Độ tuổi", value: "18-21 (có thể đến 30 nếu xét duyệt)" },
  { label: "Học vấn", value: "Tốt nghiệp THPT (hoặc THCS hệ 9+)" },
  { label: "Yêu cầu", value: "Có ý thức học tập và làm việc" },
]

const commitments = [
  "Học + thực hành tại doanh nghiệp",
  "Làm việc tối thiểu 1 năm sau tốt nghiệp",
  "Tuân thủ nội quy đào tạo và doanh nghiệp",
]

export function ScholarshipPackages() {
  return (
    <section id="scholarships" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Award className="h-4 w-4" />
            Học bổng
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Các gói học bổng
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lựa chọn gói học bổng phù hợp với hoàn cảnh của bạn
          </p>
        </div>

        <div className="space-y-8">
          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-card rounded-3xl border border-border p-6 hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="mb-4">
                  <h3 className="font-bold text-foreground text-lg">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.benefit}</p>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary">{pkg.value}</div>
                  <div className="text-sm text-green-600 font-medium">{pkg.income}</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pkg.details.map((detail, di) => (
                    <li key={di} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium text-amber-800">Hệ THPT:</span>
                <span className="text-amber-700">A1: hơn 210 triệu | A2: hơn 140 triệu | A3: hơn 90 triệu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-amber-800">Hệ Trung cấp liên thông:</span>
                <span className="text-amber-700">A1: hơn 140 triệu | A2: hơn 90 triệu | A3: hơn 65 triệu</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Quyền lợi chung
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-green-700 text-sm">
                  <span className="text-green-600">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reminders */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="font-semibold text-red-800 mb-3">Lưu ý:</h3>
            <ul className="grid md:grid-cols-3 gap-3 text-sm text-red-700">
              {reminders.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements & Commitments */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Yêu cầu bắt buộc khi tham gia
              </h3>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-medium text-foreground min-w-[100px]">{req.label}:</span>
                    <span className="text-primary">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Cam kết
              </h3>
              <ul className="space-y-2">
                {commitments.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}