import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Users, Building2, TrendingUp, Briefcase, Award, ClipboardCheck, Calendar, ArrowLeft } from "lucide-react"

const sections = [
  {
    id: "xu-huong",
    title: "Xu hướng hiện nay sau khi tốt nghiệp THPT",
    icon: GraduationCap,
    content: [
      {
        type: "stats",
        items: [
          { label: "Đại học", value: "55-60%", color: "bg-blue-500" },
          { label: "Học nghề", value: "20-25%", color: "bg-green-500" },
          { label: "Đi làm công nhân", value: "10-15%", color: "bg-orange-500" },
          { label: "Xuất khẩu lao động", value: "5-10%", color: "bg-purple-500" },
        ]
      },
      {
        type: "insight",
        text: "Nhu cầu thực tế: \"Vừa học – vừa làm – có thu nhập – không cần vốn\". Đây chính là khoảng trống thị trường mà chương trình IFN đang giải quyết."
      }
    ]
  },
  {
    id: "van-de",
    title: "Các vấn đề thực tế của học sinh hiện nay",
    icon: Users,
    content: [
      {
        type: "problems",
        items: [
          "Không có tài chính để học tiếp",
          "Muốn học nhưng sợ chi phí cao",
          "Muốn đi làm để phụ giúp gia đình",
          "Học đại học nhưng không chắc có việc làm",
          "Thiếu định hướng nghề nghiệp",
          "Áp lực \"học xong vẫn thất nghiệp\"",
        ]
      },
      {
        type: "insight",
        text: "Học sinh cần: \"Học có định hướng – không tốn tiền – có thu nhập ngay – ra trường có việc làm\". Vì vậy chương trình \"Khuyến học khuyến tài – xây dựng tương lai\" ra đời để giải quyết 3 bài toán cùng lúc: Tài chính – Việc làm – Định hướng."
      }
    ]
  },
  {
    id: "chuoi-gia-tri",
    title: "Vai trò trong chuỗi giá trị",
    icon: Building2,
    content: [
      {
        type: "chain",
        items: [
          { role: "IFN (Đơn vị trung tâm)", description: "Tổ chức chương trình học bổng. Kết nối nhà trường & doanh nghiệp. Chi trả chi phí học (100% học phí, ăn, ở theo gói). Quản lý sinh viên xuyên suốt quá trình học và làm." },
          { role: "Nhà trường", description: "Đào tạo chuyên môn (Cao đẳng chính quy). Cấp bằng. Phối hợp đào tạo lý thuyết + thực hành." },
          { role: "Doanh nghiệp", description: "Tiếp nhận sinh viên thực hành. Trả lương/trợ cấp hàng tháng. Tuyển dụng sau tốt nghiệp (cam kết 1 năm)." },
        ]
      },
      {
        type: "flow",
        text: "Chuỗi giá trị hoàn chỉnh: Tuyển sinh → Đào tạo → Thực hành → Có thu nhập → Tuyển dụng"
      }
    ]
  },
  {
    id: "chinh-sach",
    title: "Định hướng của Đảng & Chính phủ",
    icon: TrendingUp,
    content: [
      {
        type: "policy",
        items: [
          "Gắn đào tạo với thực tiễn doanh nghiệp",
          "Đẩy mạnh giáo dục nghề nghiệp",
          "Phân luồng sau THPT",
          "Giảm tỷ lệ thất nghiệp ở thanh niên",
          "Xã hội hóa giáo dục (doanh nghiệp tham gia đào tạo)",
        ]
      },
      {
        type: "insight",
        text: "Đây là mô hình \"3 nhà: Nhà nước – Nhà trường – Doanh nghiệp\" hoàn toàn phù hợp với chủ trương của Đảng và Chính phủ."
      }
    ]
  },
  {
    id: "nganh-hoc",
    title: "Ngành học xu hướng xã hội cần",
    icon: Briefcase,
    content: [
      {
        type: "majors",
        items: [
          "Điện công nghiệp",
          "Điện – điện tử",
          "Công nghệ thông tin (sửa chữa, lắp ráp)",
          "Công nghệ ô tô",
          "Nhà hàng – khách sạn – nấu ăn",
        ]
      },
      {
        type: "insight",
        text: "Đặc điểm: Nhu cầu tuyển dụng cao – Dễ xin việc – Có thể đi nước ngoài – Không bị thay thế nhanh."
      }
    ]
  },
  {
    id: "goi-hoc-bong",
    title: "Các gói học bổng",
    icon: Award,
    content: [
      {
        type: "packages",
        items: [
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
      },
      {
        type: "notes",
        items: [
          { label: "Hệ THPT", value: "A1: hơn 210 triệu | A2: hơn 140 triệu | A3: hơn 90 triệu" },
          { label: "Hệ Trung cấp liên thông", value: "A1: hơn 140 triệu | A2: hơn 90 triệu | A3: hơn 65 triệu" },
        ]
      },
      {
        type: "benefits",
        items: [
          "Vừa học vừa làm tại doanh nghiệp FDI",
          "Có lương/thu nhập hàng tháng",
          "Xe đưa đón khi ở xa nhà máy",
          "Đào tạo kỹ năng mềm, kỹ năng sống, tham gia hoạt động ngoại khoá: Văn nghệ, thể thao, du lịch",
          "Tham gia giao lưu quốc tế (Hàn Quốc, Nhật Bản, Trung Quốc)",
          "Cam kết việc làm sau tốt nghiệp 01 năm tại doanh nghiệp FDI",
          "Được bố trí công việc sau khi hoàn thành chương trình đào tạo",
          "Được cấp bằng Cao đẳng chính quy (hoặc bằng THPT, Trung cấp đối hệ 9+ liên thông)",
          "Sinh viên có thành tích tốt được tiếp tục tài trợ lên Đại học",
          "Cơ hội du học Nhật Bản, Hàn Quốc học tập và làm việc (được hỗ trợ phí xuất cảnh)",
          "Đóng BHYT, BHXH theo quy định",
        ]
      },
      {
        type: "reminders",
        items: [
          "Sinh viên cần thực hành/thực tập theo đúng quy định mới đủ điều kiện nhận hỗ trợ",
          "Chi phí điện nước vượt quá 100.000đ/người/tháng, sinh viên tự thanh toán phần vượt",
          "Sinh viên đi bộ khi khoảng cách ≤ 1km",
        ]
      }
    ]
  },
  {
    id: "yeu-cau",
    title: "Yêu cầu bắt buộc khi tham gia",
    icon: ClipboardCheck,
    content: [
      {
        type: "requirements",
        items: [
          { label: "Độ tuổi", value: "18-21 (có thể đến 30 nếu xét duyệt)" },
          { label: "Học vấn", value: "Tốt nghiệp THPT (hoặc THCS hệ 9+)" },
          { label: "Yêu cầu", value: "Có ý thức học tập và làm việc" },
        ]
      },
      {
        type: "commitments",
        items: [
          "Học + thực hành tại doanh nghiệp",
          "Làm việc tối thiểu 1 năm sau tốt nghiệp",
          "Tuân thủ nội quy đào tạo và doanh nghiệp",
        ]
      }
    ]
  },
  {
    id: "quy-trinh",
    title: "Quy trình đăng ký nhập học",
    icon: Calendar,
    content: [
      {
        type: "steps",
        items: [
          { step: 1, title: "Đăng ký tư vấn", description: "Qua CTV / văn phòng / online" },
          { step: 2, title: "Phỏng vấn – xét duyệt", description: "Đánh giá: Ý thức, Định hướng, Hoàn cảnh" },
          { step: 3, title: "Chọn ngành + gói học bổng", description: "A1 / A2 / A3 – Ngành phù hợp" },
          { step: 4, title: "Ký hồ sơ – hợp đồng", description: "Cam kết đào tạo + việc làm – Xác nhận quyền lợi" },
          { step: 5, title: "Nhập học", description: "Vào trường liên kết – Bắt đầu học + thực hành" },
          { step: 6, title: "Thực hành tại doanh nghiệp", description: "Có lương hàng tháng – Tích lũy kinh nghiệm" },
          { step: 7, title: "Tốt nghiệp – đi làm", description: "Bố trí việc làm – Làm tối thiểu 1 năm" },
        ]
      }
    ]
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-background pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-4 mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              ← Trang chủ
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Câu hỏi thường gặp
            </h1>
            <p className="mt-4 text-muted-foreground">
              Tìm hiểu về chương trình Khuyến học khuyến tài
            </p>
          </div>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((block, blockIndex) => {
                    if (block.type === "stats") {
                      return (
                        <div key={blockIndex} className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {block.items?.map((item, i) => (
                            <div key={i} className={`${item.color} rounded-xl p-4 text-center text-white`}>
                              <div className="text-2xl font-bold">{item.value}</div>
                              <div className="text-sm opacity-90">{item.label}</div>
                            </div>
                          ))}
                        </div>
                      )
                    }

                    if (block.type === "insight") {
                      return (
                        <div key={blockIndex} className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                          <p className="text-foreground leading-relaxed">{block.text}</p>
                        </div>
                      )
                    }

                    if (block.type === "problems") {
                      return (
                        <div key={blockIndex} className="bg-card border border-border rounded-xl p-5">
                          <ul className="grid gap-3">
                            {block.items?.map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-medium">✕</span>
                                <span className="text-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    }

                    if (block.type === "chain") {
                      return (
                        <div key={blockIndex} className="space-y-4">
                          {block.items?.map((item, i) => (
                            <div key={i} className="bg-card border border-border rounded-xl p-5">
                              <h3 className="font-semibold text-foreground mb-2">{item.role}</h3>
                              <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      )
                    }

                    if (block.type === "flow") {
                      return (
                        <div key={blockIndex} className="bg-green-50 border border-green-200 rounded-xl p-5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-green-700">✓</span>
                            <span className="text-green-700">{block.text}</span>
                          </div>
                        </div>
                      )
                    }

                    if (block.type === "policy") {
                      return (
                        <div key={blockIndex} className="bg-card border border-border rounded-xl p-5">
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {block.items?.map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium">✓</span>
                                <span className="text-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    }

                    if (block.type === "majors") {
                      return (
                        <div key={blockIndex} className="grid sm:grid-cols-2 gap-3">
                          {block.items?.map((item, i) => (
                            <div key={i} className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
                              <span className="font-medium text-primary">{item}</span>
                            </div>
                          ))}
                        </div>
                      )
                    }

                    if (block.type === "packages") {
                      return (
                        <div key={blockIndex} className="space-y-4">
                          {block.items?.map((item, i) => (
                            <div key={i} className="bg-card border border-border rounded-xl p-5">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                <div>
                                  <h3 className="font-bold text-foreground">{item.name}</h3>
                                  <p className="text-sm text-muted-foreground">{item.benefit}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-bold text-primary">{item.value}</div>
                                  <div className="text-sm text-green-600">{item.income}</div>
                                </div>
                              </div>
                              {item.details && (
                                <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                                  {item.details?.map((detail, di) => (
                                    <div key={di} className="flex items-center gap-2">
                                      <span className="text-primary">•</span>
                                      <span>{detail}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )
                    }

                    if (block.type === "notes") {
                      return (
                        <div key={blockIndex} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                          <div className="text-sm text-amber-800">
                            {block.items?.map((item, i) => (
                              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                                <span className="font-medium min-w-[180px]">{item.label}:</span>
                                <span>{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    }

                    if (block.type === "reminders") {
                      return (
                        <div key={blockIndex} className="bg-red-50 border border-red-200 rounded-xl p-4">
                          <h3 className="font-medium text-red-800 mb-2">Lưu ý:</h3>
                          <ul className="text-sm text-red-700 space-y-1">
                            {block.items?.map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    }

                    if (block.type === "benefits") {
                      return (
                        <div key={blockIndex} className="bg-green-50 border border-green-200 rounded-xl p-5">
                          <h3 className="font-medium text-green-800 mb-3">Quyền lợi chung:</h3>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {block.items?.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-green-700">
                                <span>✓</span>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    }

                    if (block.type === "requirements") {
                      return (
                        <div key={blockIndex}>
                          <div className="bg-card border border-border rounded-xl p-5 mb-4">
                            <ul className="space-y-3">
                              {block.items?.map((item, i) => (
                                <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-2">
                                  <span className="font-medium text-foreground min-w-[100px]">{item.label}:</span>
                                  <span className="text-primary">{item.value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {section.content[blockIndex + 1]?.type === "commitments" && (
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                              <h3 className="font-medium text-orange-800 mb-3">Cam kết:</h3>
                              <ul className="space-y-2">
                                {section.content[blockIndex + 1].items?.map((item, i) => (
                                  <li key={i} className="flex items-center gap-2 text-orange-700">
                                    <span className="w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center text-xs">→</span>
                                    <span className="text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )
                    }

                    if (block.type === "steps") {
                      return (
                        <div key={blockIndex} className="space-y-3">
                          {block.items?.map((item, i) => (
                            <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-4">
                              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                                {item.step}
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )
                    }

                    return null
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}