// Data for Helium Leak Detectors
const heliumLeakDetectors = [
  {
    id: "HLD-ASM-310",
    seriesId: "PFEIFFER-ADIXEN-ASM",
    title: "PFEIFFER ADIXEN ASM 310",
    description: "The compact, lightweight and portable helium leak detector solution. Ideal for maintenance applications, it offers high performance in a small footprint.",
    code: "ASM 310",
    images: ["./assests/img/products/heliumLeakDetectors/pfeiffer/ASM310.webp"],
    highlights: [
      "Ideal for maintenance applications",
      "Small and portable",
      "No compromise on performance"
    ],
    benefitsTitle: "Benefits of the ASM 310 series",
    benefits: [
      "For maintenance tasks where mobility is a major factor, the ASM 310 portable leak detector is ideal. It weighs over 50% less than a standard leak detection unit and can be operated in any position. A universal mains connection makes the ASM 310 ready for use anywhere in the world. Optional accessories include a wheeled trolley for even better mobility, a retractable handle, and a carrying case that allows the unit to be taken on an airplane for worldwide service calls.",
      "Despite its light weight and compact dimensions, the ASM 310 is a complete tracer gas leak detection unit equipped with the same detector technology and the same sensitivity as larger models. As a result, it is ideal for applications where a smaller size is more important than high pumping speeds.",
      "Its clean, oil-free pumping system makes the ASM 310 the right choice for leak detection on systems that cannot tolerate any contamination.",
      "The ASM 310 is equipped with a high-resolution color display and can be easily operated via a detachable control panel or with a remote control. The user-friendly menu navigation can be customized as well as password protected.",
      "Thanks to its internal memory, the ASM 310 offers the option of documenting leak detection results in the form of image or text files. Data, test configurations and operating parameters can be downloaded or transferred to other devices via a dedicated USB port."
    ],
    technicalSpecifications: [
      { parameter: "Test method", value: "Spraying and sniffing tests" },
      { parameter: "Detectable gases", value: "⁴He; ³He; H₂" },
      { parameter: "Min. detectable leak rate for Helium (spraying test) (Pa m³/s)", value: "1 · 10⁻¹³ Pa m³/s" },
      { parameter: "Min. detectable leak rate for Helium (spraying test) (mbar l/s)", value: "1 · 10⁻¹² mbar l/s" },
      { parameter: "Min. detectable leak rate for Helium (sniffing test) (Pa m³/s)", value: "1 · 10⁻⁸ Pa m³/s" },
      { parameter: "Min. detectable leak rate for Helium (sniffing test) (mbar l/s)", value: "1 · 10⁻⁷ mbar l/s" },
      { parameter: "Pumping speed for Helium", value: "1.1 l/s" },
      { parameter: "Power supply", value: "90-240 V" },
      { parameter: "Max. power consumption", value: "300 W" },
      { parameter: "Max. test inlet pressure", value: "15 mbar" },
      { parameter: "Start-up time (20 °C)", value: "<2 min" },
      { parameter: "Response time", value: "<1 s" },
      { parameter: "Backing pump", value: "Diaphragm pump" },
      { parameter: "Roughing capacity", value: "1.7 m³/h" },
      { parameter: "Operating temperature", value: "10-40 °C" },
      { parameter: "Communication interfaces", value: "Standard 15 pins I/O, RS-232" },
      { parameter: "Sound pressure level", value: "<45 dB(A)" },
      { parameter: "Weight approx.", value: "21 kg" },
      { parameter: "Dimensions (L x W x H)", value: "350 x 254 x 414 mm" },
      { parameter: "Inlet port", value: "DN 25 ISO-KF" }
    ]
  },
  {
    id: "HLD-ASM-340",
    seriesId: "PFEIFFER-ADIXEN-ASM",
    title: "PFEIFFER ADIXEN ASM 340",
    description: "Reliable and high-performance leak detector designed for vacuum or sniffing leak detection under severe test conditions. Highly customizable to meet your specific individual needs.",
    code: "ASM 340",
    images: ["./assests/img/products/heliumLeakDetectors/pfeiffer/ASM340.webp"],
    highlights: [
      "Reliable and high-performance leak detection",
      "Easy operation and smart functions",
      "Accurate measurement and short test time",
      "Customizable for individual needs"
    ],
    benefitsTitle: "Benefits of the ASM 340 series",
    benefits: [
      "The leak detectors in our ASM 340 series guarantee high performance in vacuum or sniffing leak detection, even under severe test conditions: Their robust design can handle heavy cycling – repeated cycles of pressurization and depressurization to simulate real-world conditions in a test setting – under a wide range of operating temperatures.",
      "The ASM 340 leak detectors are characterized by their powerful pumping system and are available with an oil-lubricated or dry backing pump. Easy operation, an ultra-fast response time and short sensor recovery are among the top features of these compact multipurpose units.",
      "The dependable leak detectors can be used for both qualitative localization of leaks as well as quantitative global testing (assessing the leakage rate over entire objects) or local testing (targeting individual leak points). The ASM 340 are the only leak detectors in their class offering qualitative leak detection from a pressure of 100 hPa (mbar). This means that even if the leak detector cannot reach the test pressure because of a leak in the system, this leak can still be determined and located.",
      "No training is required to operate the ASM 340 units. Simply use the large, high-resolution touch screen on the control panel to configure the leak test. The resulting data can be recorded and stored in the internal memory as a bitmap or text file, ready to be transferred on a USB stick via a dedicated USB port. In addition, ASM 340 leak detectors can be equipped with a comprehensive selection of communication options, from I/O to fieldbus.",
      `<div class="variantBox" style="margin-top: 25px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #0da574;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">ASM 340 with oil-lubricated rotary vane vacuum pumps</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">These compact leak detectors are equipped with the largest rotary vane backing pumps in the appropriate size class, allowing extremely fast cycle times.</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>Ability to detect large leaks between 100 hPa (mbar) and the inlet test pressure</li>
          <li>Easy operation, intuitive menu navigation in a variety of languages, and large color touch screen</li>
          <li>Various operating voltages for global use</li>
          <li>Available with interface board for automation through an external system (PC or PLC)</li>
          <li>Complete range of accessories such as a remote control for even more convenient leak detection</li>
        </ul>
      </div>`,
      `<div class="variantBox" style="margin-top: 20px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #0da574;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">ASM 340 D with dry diaphragm vacuum pumps</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">The dry ASM 340 D units are equipped with diaphragm backing pumps. They are used in applications where very clean test conditions are required, such as in the semiconductor industry.</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>Completely oil-free leak detection</li>
          <li>Ability to detect large leaks between 100 hPa (mbar) and the inlet test pressure</li>
          <li>Easy operation, intuitive menu navigation in a variety of languages, and large color touch screen</li>
          <li>Various operating voltages for global use</li>
          <li>Available with interface board for automation through an external system (PC or PLC)</li>
          <li>Complete range of accessories such as a remote control for even more convenient leak detection</li>
        </ul>
      </div>`,
      `<div class="variantBox" style="margin-top: 20px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #0da574;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">ASM 340 I without backing pump</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">This specific unit offers maximum flexibility and is typically used for integration into leak detection systems.</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>Maximum flexibility, as the customer can select the appropriate backing pump solution to match the application</li>
          <li>Easy operation, intuitive menu navigation in a variety of languages, and large color touch screen</li>
          <li>Various operating voltages for global use</li>
          <li>Available with interface board for automation through an external system (PC or PLC)</li>
          <li>Complete range of accessories such as a remote control for even more convenient leak detection</li>
        </ul>
      </div>`,
      `<div class="variantBox" style="margin-top: 20px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc642;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">ASM Flex packages</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">ASM Flex packages provide mobility for ASM 340 leak detectors. Mounted on dedicated transport carts, all ASM 340 versions, combined with a backing pump, can be moved freely. This combination delivers excellent pumping performance with full flexibility. To ensure the best customer experience, several ASM Flex packages are available, some with a bypass accessory option.</p>
        <p style="font-weight: 600; margin-bottom: 5px; color: #001f3f; font-size: 15px;">All ASM Flex packages include:</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>A four-wheel cart equipped with a bottle holder and a drawer for small accessories</li>
          <li>An ASM 340 leak detector</li>
          <li>An external backing pump</li>
          <li>All connecting and fixing elements</li>
        </ul>
      </div>`
    ],
    columns: ["ASM 340", "ASM 340D"],
    technicalSpecifications: [
      { parameter: "Test method", values: ["Spraying & sniffing tests", "Spraying & sniffing tests"] },
      { parameter: "Detectable gases", values: ["⁴He; ³He; H₂", "⁴He; ³He; H₂"] },
      { parameter: "Min. detectable leak rate for Helium (spraying test) (Pa m³/s)", values: ["1 · 10⁻¹³ Pa m³/s", "1 · 10⁻¹³ Pa m³/s"] },
      { parameter: "Min. detectable leak rate for Helium (spraying test) (mbar l/s)", values: ["1 · 10⁻¹² mbar l/s", "1 · 10⁻¹² mbar l/s"] },
      { parameter: "Min. detectable leak rate for Helium (sniffing test) (Pa m³/s)", values: ["5 · 10⁻¹⁰ Pa m³/s", "5 · 10⁻¹⁰ Pa m³/s"] },
      { parameter: "Min. detectable leak rate for Helium (sniffing test) (mbar l/s)", values: ["5 · 10⁻⁹ mbar l/s", "5 · 10⁻⁹ mbar l/s"] },
      { parameter: "Pumping speed for Helium", values: ["2.5 l/s", "2.5 l/s"] },
      { parameter: "Power supply", values: ["100-110; 200-240 V", "Universal 100-240 V"] },
      { parameter: "Max. power consumption", values: ["850 W", "600 W"] },
      { parameter: "Max. test inlet pressure", values: ["25 mbar", "25 mbar"] },
      { parameter: "Start-up time (20 °C)", values: ["3 min", "3 min"] },
      { parameter: "Response time", values: ["<1 s", "<1 s"] },
      { parameter: "Backing pump", values: ["Rotary vane pump", "Diaphragm pump"] },
      { parameter: "Roughing capacity", values: ["15 m³/h", "3.4 m³/h"] },
      { parameter: "Operating temperature", values: ["-", "0-35 °C"] },
      { parameter: "Operating temperature (Sniffing test)", values: ["0-35 °C", "-"] },
      { parameter: "Operating temperature (Spraying test)", values: ["0-45 °C", "-"] },
      { parameter: "Communication interfaces", values: ["I/O, RS-232, Ethernet (PC), Profibus, Ethernet-IP (Industrial Protocol)*", "I/O, RS-232, Ethernet (PC), Profibus, Ethernet-IP (Industrial Protocol)*"] },
      { parameter: "Sound pressure level", values: ["54 dB(A)", "52 dB(A)"] },
      { parameter: "Weight approx.", values: ["56 kg", "45 kg"] },
      { parameter: "Dimensions (L x W x H)", values: ["594 x 375 x 389 mm", "594 x 375 x 389 mm"] },
      { parameter: "Inlet port", values: ["DN 25 ISO-KF", "DN 25 ISO-KF"] }
    ]
  },
  {
    id: "HLD-ASM-390-392",
    seriesId: "PFEIFFER-ADIXEN-ASM",
    title: "PFEIFFER ADIXEN ASM 390 / 392",
    description: "Rapid pump-down and short response times for large test objects. Fitted with a powerful high vacuum pump and a dry backing pump, they are the ideal tools for leak testing in clean environments.",
    code: "ASM 390 / 392",
    images: ["./assests/img/products/heliumLeakDetectors/pfeiffer/ASM390_393.webp"],
    highlights: [
      "Smart and user-friendly",
      "Superior performance and rapid testing",
      "Ergonomic and highly maneuverable"
    ],
    benefitsTitle: "Benefits of the ASM 390/392 series",
    benefits: [
      "The ASM 390 and ASM 392 are the perfect leak detection solutions for the semiconductor and flat panel industries as well as other demanding applications where short pump-down times and high sensitivity is key. Both units are fully Semi S2 compliant.",
      "These leak detectors are fitted with a powerful high vacuum pump and a dry backing pump, making them the ideal tools for leak testing in clean environments where oil-free operation is essential. The ASM 392 is equipped with an additional turbomolecular vacuum pump, speeding up your leak detection process and reducing production downtime.",
      "The ASM 390 and ASM 392 share the same platform and are uniquely ergonomic with a size that creates a comfortable working height, a secondary handle in the front, a fully rotatable, removable color display, and an inlet in the front for easy connection to test ports. This allows easy access to all testing areas, even in tight spaces.",
      "An integrated toolbox and storage space for vacuum bellows ensure that the equipment you need for quick and trouble-free leak detection is always to hand. The intuitive user menu can be password protected to prevent unintended use. Furthermore, ASM units are available with an interface board for automation through an external system (PC or PLC).",
      `<div class="variantBox" style="margin-top: 25px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #0da574;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">ASM 390</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">The ASM 390 series is optimized for fast and accurate leak testing in all measurement ranges. It is the perfect combination of high pumping speed, sensitivity and mobility with the smallest possible footprint.</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>10 l/s helium pumping speed for a fast response time</li>
          <li>35 m3/h pumping speed of the backing pump using an oil-free ACP</li>
          <li>Maximum test pressure at 20 hPa (mbar) for a rapid entry into measurement mode and additional massive mode for large leaks</li>
        </ul>
      </div>`,
      `<div class="variantBox" style="margin-top: 20px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #0da574;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">ASM 392</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">The ASM 392 series provides unrivalled performance with high sensitivity and accuracy. Sharing the same platform as the ASM 390 and equipped with an additional turbomolecular vacuum pump, the ASM 392 will speed up your leak detection process without any compromise on footprint and mobility.</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>25 l/s helium pumping speed for a faster response time</li>
          <li>35 m3/h pumping speed of the backing pump using an oil-free ACP</li>
          <li>Maximum test pressure at 20 hPa (mbar) for a rapid entry into measurement mode and additional massive mode for large leaks</li>
        </ul>
      </div>`
    ],
    columns: ["ASM 390", "ASM 392"],
    technicalSpecifications: [
      { parameter: "Test method", values: ["Spraying & sniffing tests", "Spraying & sniffing tests"] },
      { parameter: "Detectable gases", values: ["⁴He; ³He; H₂", "⁴He; ³He; H₂"] },
      { parameter: "Min. detectable leak rate for Helium (spraying test) (Pa m³/s)", values: ["1 · 10⁻¹³ Pa m³/s", "1 · 10⁻¹³ Pa m³/s"] },
      { parameter: "Min. detectable leak rate for Helium (spraying test) (mbar l/s)", values: ["1 · 10⁻¹² mbar l/s", "1 · 10⁻¹² mbar l/s"] },
      { parameter: "Min. detectable leak rate for Helium (sniffing test) (Pa m³/s)", values: ["1 · 10⁻⁹ Pa m³/s", "1 · 10⁻⁹ Pa m³/s"] },
      { parameter: "Min. detectable leak rate for Helium (sniffing test) (mbar l/s)", values: ["1 · 10⁻⁸ mbar l/s", "1 · 10⁻⁸ mbar l/s"] },
      { parameter: "Pumping speed for Helium", values: ["10 l/s", "25 l/s"] },
      { parameter: "Power supply", values: ["100-240 V", "100-240 V"] },
      { parameter: "Power consumption", values: ["800 W", "800 W"] },
      { parameter: "Max. power consumption", values: ["1600 W", "1600 W"] },
      { parameter: "Max. test inlet pressure", values: ["20 mbar", "20 mbar"] },
      { parameter: "Start-up time (20 °C)", values: ["<2 min", "<2 min"] },
      { parameter: "Response time", values: ["<1 s", "<1 s"] },
      { parameter: "Backing pump", values: ["Multi-stage Roots vacuum pump", "Multi-stage Roots vacuum pump"] },
      { parameter: "Roughing capacity", values: ["35 m³/h", "35 m³/h"] },
      { parameter: "Operating temperature", values: ["10-35 °C", "10-35 °C"] },
      { parameter: "Communication interfaces", values: ["I/O, RS-232, Ethernet (PC, not industrial)", "I/O, RS-232, Ethernet (PC, not industrial)"] },
      { parameter: "Sound pressure level", values: ["≤ 55 dB(A)", "≤ 55 dB(A)"] },
      { parameter: "Weight approx.", values: ["125 kg", "130 kg"] },
      { parameter: "Dimensions (L x W x H)", values: ["1072 x 455 x 1025 mm", "1072 x 455 x 1025 mm"] }
    ]
  },
  {
    id: "HLD-ASM-306S",
    seriesId: "PFEIFFER-ADIXEN-ASM",
    title: "PFEIFFER ADIXEN ASM 306 S",
    description: "The compact but powerful leak detector designed specifically for high-reliability sniffing leak detection in continuous operations.",
    code: "ASM 306 S",
    images: ["./assests/img/products/heliumLeakDetectors/pfeiffer/ASM306s.webp"],
    highlights: [
      "Compact and rugged design",
      "Smart and user-friendly",
      "Ergonomic high-flow sniffing probe"
    ],
    benefitsTitle: "Benefits of the ASM 306 S series",
    benefits: [
      "The ASM 306 S leak detectors are sniffing units that can be used in continuous operation. These robust yet compact and ergonomic units will help you to detect leaks using sniffing measurements. Their small size makes them ideal for use in production lines in emerging technologies such as e-mobility and hydrogen fuel cells, as well as in well-established applications such as refrigeration and air conditioning.",
      "With a response time of less than one second, the leak detectors in the ASM 306 S series offer fast, repeatable measurements and high testing reliability to increase productivity and quality. Quick recovery in the case of big leaks help maximize the leak detectors' uptime. Fast start-up and recovery in case of contamination with other substances than the tracer gas ensure that the leak detector is ready when you need it. The robustness of the entire set-up, including the probe and its cable, ensures a long service life and therefore a low cost of ownership.",
      "The ergonomic high-flow probe has been designed with the user in mind and is comfortable to hold, even for long periods. It can be equipped with various hose lengths to best fit the application. A large, high-resolution display and intuitive menu navigation allow the operator to read data and configure the leak test. Test information is also visible directly on the probe."
    ],
    technicalSpecifications: [
      { parameter: "Test method", value: "Sniffing test" },
      { parameter: "Detectable gases", value: "⁴He; H₂" },
      { parameter: "Min. detectable leak rate for Helium (sniffing test) (Pa m³/s)", value: "1 · 10⁻⁸ Pa m³/s" },
      { parameter: "Min. detectable leak rate for Helium (sniffing test) (mbar l/s)", value: "1 · 10⁻⁷ mbar l/s" },
      { parameter: "Min. detectable leak rate for Hydrogen (Pa m³/s)", value: "5 · 10⁻⁸ Pa m³/s" },
      { parameter: "Min. detectable leak rate for Hydrogen (mbar l/s)", value: "5 · 10⁻⁷ mbar l/s" },
      { parameter: "Power supply", value: "100-240 V" },
      { parameter: "Max. power consumption", value: "300 W" },
      { parameter: "Start-up time (20 °C)", value: "2 min" },
      { parameter: "Response time", value: "<1 s" },
      { parameter: "Operating temperature", value: "10-40 °C" },
      { parameter: "Communication interfaces", value: "I/O, RS-232, Ethernet (PC), Profibus, Profinet" },
      { parameter: "Sound pressure level", value: "55 dB(A)" },
      { parameter: "Weight approx.", value: "22 kg" },
      { parameter: "Dimensions (L x W x H)", value: "350 x 305 x 421 mm" }
    ]
  },
  {
    id: "HLD-LEYBOLD-PHOENIX-QUADRO",
    seriesId: "LEYBOLD-PHOENIX",
    title: "LEYBOLD PHOENIX QUADRO SERIES",
    description: "The PHOENIX Quadro is a state-of-the-art leak detector designed for absolute accuracy, speed, and ease of use. Available in oil-sealed backing pump, dry scroll backing pump (Dry Plus), or modular console (Vario) options.",
    code: "PHOENIX QUADRO",
    images: [
      "./assests/img/products/heliumLeakDetectors/leybold/phoenix_quadro.webp",
      "./assests/img/products/heliumLeakDetectors/leybold/phoenix_quadro_dry_plus.webp",
      "./assests/img/products/heliumLeakDetectors/leybold/phoenix_vario.webp"
    ],
    highlights: [
      "Detects very small leaks quickly and reliably",
      "Very fast operational readiness and short response times",
      "Convenient remote control via LEYASSIST",
      "Innovative color touch display"
    ],
    benefitsTitle: "Benefits of the PHOENIX Quadro Series",
    benefits: [
      "The PHOENIX Quadro series consists of state-of-the-art leak detectors designed for absolute accuracy, speed, and ease of use in a wide variety of industrial and research applications.",
      `<div class="variantBox" style="margin-top: 25px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #0da574;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">PHOENIX Quadro</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">A portable helium leak detector with an oil-sealed backing pump, suitable for a large range of standard applications.</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>Highly reliable leak detection with oil-sealed backing pump</li>
          <li>Rapid decontamination time and very fast operational readiness</li>
          <li>Innovative color touch screen with simple, intuitive menu navigation</li>
          <li>Flexible interfaces and easy data export via USB</li>
        </ul>
      </div>`,
      `<div class="variantBox" style="margin-top: 20px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #0da574;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">PHOENIX Quadro Dry Plus</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">High-performance dry helium leak detector delivering clean, oil-free test conditions, backed by Leybold's SCROLLVAC 3 Plus pump.</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>Completely oil-free backing pump system (SCROLLVAC 3 Plus)</li>
          <li>Eliminates helium accumulation for zero background interference</li>
          <li>Faster recovery after helium exposure and high test throughput</li>
          <li>Excellent choice for cleanrooms and semiconductor applications</li>
        </ul>
      </div>`,
      `<div class="variantBox" style="margin-top: 20px; background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc642;">
        <h4 style="color: #001f3f; font-weight: 700; margin-bottom: 10px;">PHOENIX Vario</h4>
        <p style="color: #4d5765; margin-bottom: 10px; font-size: 15px;">The smallest and most flexible variant of the PHOENIX 4 range. Designed without an integrated backing pump to allow custom configurations.</p>
        <ul style="margin: 0; padding-left: 20px; color: #4d5765; font-size: 14px; line-height: 22px;">
          <li>Extremely small footprint and very lightweight housing</li>
          <li>Choose your backing pump freely based on process requirements (e.g. ECODRY plus, TRIVAC, SOGEVAC, SCROLLVAC plus)</li>
          <li>Direct electronic control for SCROLLVAC plus, TRIVAC, or SOGEVAC SV series</li>
          <li>Perfect for system integration and customized test benches</li>
        </ul>
      </div>`
    ],
    columns: ["PHOENIX Quadro", "PHOENIX Quadro Dry Plus", "PHOENIX Vario"],
    technicalSpecifications: [
      { parameter: "Test method", value: "Vacuum and sniffing leak detection" },
      { parameter: "Smallest detectable helium leak rate (Vacuum operation)", value: "≤ 5 · 10⁻¹² mbar l/s" },
      { parameter: "Smallest detectable helium leak rate (Sniffer mode)", value: "< 1 · 10⁻⁹ mbar l/s (*)" },
      { parameter: "Smallest detectable hydrogen leak rate (Vacuum operation)", value: "≤ 1 · 10⁻⁸ mbar l/s" },
      { parameter: "Smallest detectable hydrogen leak rate (Sniffer mode)", value: "< 1 · 10⁻⁷ mbar l/s" },
      { parameter: "Units of measurement (selectable)", value: "Pressure: mbar, Pa, atm, Torr<br>Leak rate: mbar · l/s, Pa · m³/s, Torr · l/s, atm · cc/sec, sft³/yr<br>Sniffer mode: ppm, g/a eq, oz/yr eq" },
      { parameter: "Leak rate display area", value: "1 · 10⁻¹² to 1 · 10⁻¹ mbar l/s" },
      { parameter: "Max. inlet pressure (standard / partial flow pump)", value: "15 mbar / 1000 mbar" },
      { parameter: "Pumping speed during evacuation process (50 Hz)", values: ["2.5 m³/h", "3.0 m³/h", "Depending on backing pump"] },
      { parameter: "Pumping speed during evacuation process (60 Hz)", values: ["3.0 m³/h", "3.0 m³/h", "Depending on backing pump"] },
      { parameter: "Helium pumping speed (vacuum mode, FINE Modus)", value: "1.2 l/s" },
      { parameter: "Helium pumping speed (vacuum mode, ULTRA Modus)", value: "> 3.1 l/s" },
      { parameter: "Time constant of leak signal (63% final value)", value: "< 1 s" },
      { parameter: "Run-up time (after switching on)", value: "≤ 110 s" },
      { parameter: "Mass spectrometer", value: "180° magnetic sector field" },
      { parameter: "Ion source", value: "2 yttrium/iridium long-term cathodes" },
      { parameter: "Detectable masses", value: "2, 3 and 4 amu" },
      { parameter: "Backing pump flange", values: ["-", "-", "2 x DN 25 ISO-KF"] },
      { parameter: "Inlet flange", value: "25 ISO-KF" },
      { parameter: "Dimensions (W x H x D)", values: ["495 x 475 x 318 mm", "495 x 475 x 318 mm", "486 x 380 x 313 mm"] },
      { parameter: "Weight approx.", values: ["41 kg", "42 kg", "25 kg"] },
      { parameter: "Available languages", value: "EN, DE, ZH, JA, KO, RU, FR, IT, ES & POL" }
    ]
  },
  {
    id: "HLD-LEYBOLD-PHOENIX-MOBILIS",
    seriesId: "LEYBOLD-PHOENIX",
    title: "LEYBOLD PHOENIX MOBILIS",
    description: "The PHOENIX MOBILIS Ultra is a highly sensitive handheld helium leak detector designed for simple, one-handed operation. Operating perfectly even in environments showing high magnetic fields (such as running MRI systems), it offers exceptional flexibility and performance.",
    code: "PHOENIX MOBILIS",
    images: ["./assests/img/products/heliumLeakDetectors/leybold/phoenix_mobilis.webp"],
    highlights: [
      "Designed for simple, intuitive one-handed operation",
      "Highly sensitive to ammonia, helium, and hydrogen",
      "Magnetic field resistant (fully operational while MRI is running)",
      "Up to 20 hours of operation on a fully charged lithium-ion battery"
    ],
    benefitsTitle: "Benefits of the PHOENIX MOBILIS Ultra",
    benefits: [
      "The PHOENIX MOBILIS Ultra offers a versatile and inexpensive leak detection solution both on equipment and on consumables/parts, delivering exceptional reliability for field service, plant maintenance, and quality control.",
      "**Ideal for the car industry & multi-purpose applications:** Anywhere where the leak tightness of a specific gas is important, this device offers a great option to make sure your application is running at the same quality at all times. Its major use cases stretch from R&D to manufacturing, quality assurance, and maintenance departments (including industrial processes, automotive manufacturing, applications using refrigerants, and MRI).",
      "**Easy to use one-handed leak detector:** The PHOENIX MOBILIS Ultra is designed to be easy to use with just one hand, allowing you to check for leaks in hard-to-reach positions of your equipment. It features a modern, large LCD display that allows easy intuitive navigation and good visibility overall, an audible alarm and flashing display for clear leak indication, and storage of your readings on the device.",
      "**Highly sensitive & magnetic field resistant:** The PHOENIX MOBILIS Ultra detects leaks at low levels, rapidly and effectively indicating the presence of almost any gas or gas mixture (and is particularly accurate to ammonia, helium, or hydrogen). Maximum sensitivity is provided through small internal flow rates. In addition, it operates perfectly in environments with a high magnetic field, such as in MRI chambers, and can be used without interruptions, even while the MRI is running.",
      "**Additional key advantages:** When switched on, the PHOENIX MOBILIS Ultra automatically zeros to the ambient surrounding air to make sure it is ready to go right after startup. It includes a large choice of readings in cc/sec, g/yr, mg/m³ so you can decide what's best for your testing needs, and operates for up to 20 hours on a fully charged lithium-ion battery."
    ],
    technicalSpecifications: [
      { parameter: "Test method", value: "Sniffing / Handheld leak detection" },
      { parameter: "Detectable gases", value: "Almost any gas or gas mixture (particularly accurate to Ammonia, Helium, Hydrogen)" },
      { parameter: "Battery life", value: "Up to 20 hours on a fully charged battery" },
      { parameter: "Battery type", value: "Fully rechargeable Lithium-ion battery" },
      { parameter: "Selectable units", value: "cc/sec, g/yr, mg/m³" },
      { parameter: "Key features", value: "Audible alarm, flashing display, readings storage, automatic zeroing on startup, MRI magnetic field resistance" },
      { parameter: "Display type", value: "Modern large LCD display with intuitive navigation" },
      { parameter: "Inlet flange / probe connector", value: "Quick connect sniffing probe input" }
    ]
  },
  {
    id: "HLD-CALIBRATED-LEAKS",
    title: "CALIBRATED LEAKS",
    description: "Unique Vacuum Solutions deals with four models of Calibrated Leak Standards (Manufactured by VTI , California ) for calibrating Helium Leak Detectors and Leak Testing Systems so that one is sure to meet your particular requirements. Many other models of Leak Standards are available with Unique Vacuum Solutions, including some that are specifically for calibrating Sniffer-type Leak Detectors, as detailed in other brochures and a Selection Guide. The GPP, GPPT, GPC and CLP Model Calibrators compared here have different types of Leak Elements to control the flow rate of Helium, and this results in different features as shown below. Another difference is that the GPP, GPPT and GPC Leaks are \"general purpose\" models for calibrating leak detectors and systems, and the CLP Leak is a \"high-precision\" model with an all-metal valve for use in critical applications, use with UHV systems, and use as a Calibration Transfer Standard. It is to be noted, however, that all four models demonstrate long-term flow rate stability, have low depletion rates and last for years without refilling. As an exception, the 10-3 and larger GPC Leaks have higher depletion rates and, therefore, are designed to be conveniently refilled by the user. Also, all four models are simple to operate and are provided with Certifications of the NIST-traceable A2LA-accredited Calibrations.",
    code: "CALIBRATED LEAKS",
    images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_2_1_X12.webp"],
    features: ["NIST traceable", "High stability", "Various leak rates available"],
    pdf: "./assests/img/products/heliumLeakDetectors/calibrated_leaksDownload.pdf",
    models: [
      {
        id: "GPP-MODEL",
        name: "GPP model",
        title: "GPP Model Calibrated Leak Standards",
        tagline: "Glass-Permeation Helium Calibrated Leak Standard",
        images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_2_1_X12.webp"],
        description: "These GPP Model Helium Calibrated Leak Standards have glass-permeation type leak elements and are the most common ones used to tune and calibrate helium mass spectrometer leak detectors, leak testing systems and vacuum systems. They are part of a family of Calibrators including the GPPT, GPC and CLP Models that cover leak rates from 10-12 up to 10-3 atm-cc/sec and larger. The GPP Accu-Flow™ Calibrated Leaks are based on the principle that helium flows through certain materials at a measurable rate depending on the material thickness, driving pressure and temperature. Depending on the leak rate required in the GPP Leaks, the permeation material is Pyrex or Quartz. The GPP Leaks feature an all-welded stainless steel construction for reliability. Most leaks require a shut-off \"isolation\" valve to zero the leak signal during tuning and calibration. Unique Vacuum Solutions offers the GPP Leaks both with and without a Teflon®-packed stainless steel shut-off valve. The inlet port of the brand of leak detector or vacuum system determines the termination of the leak. The most common termination of the GPP Leaks is a 1-1/8\" diameter tube which mates directly to many Varian, Veeco and VIC leak detectors. All leaks are available with QF (NW, KF) and many other types of fittings. All GPP Leaks are provided with certifications of the NIST-traceable calibrations performed in our A2LA-accredited Calibration Laboratory.",
        highlights: [
          "WILL NOT CLOG - glass-permeation leak element.",
          "LONG TERM STABILITY - Low depletion rate.",
          "WIDE LEAK-RATE CHOICE - 10⁻⁵ to 10⁻⁹ range.",
          "NEVER NEEDS REFILL - Lasts for years.",
          "SIMPLE TO OPERATE - minimal user training.",
          "MEETS ISO REQUIREMENTS - NIST-traceable, A2LA-accredited Calibration Certification."
        ],
        benefitsTitle: "Key Features & Benefits",
        benefits: [
          "Glass-permeation type leak elements that will not clog under normal operating conditions.",
          "Helium flows through materials at a measurable rate depending on thickness, driving pressure, and temperature (using Pyrex or Quartz).",
          "All-welded stainless steel construction for maximum reliability, available with or without Teflon®-packed stainless steel shut-off valves.",
          "Mates directly to major leak detector brands with various fittings like QF (NW, KF)."
        ],
        columns: ["GPP Model Specifications"],
        technicalSpecifications: [
          { parameter: "Leak Element Type", value: "Glass-permeation type (Pyrex or Quartz)" },
          { parameter: "Helium Leak Rate Range", value: "10⁻¹² to 10⁻³ atm-cc/sec" },
          { parameter: "Primary Leak Rates", value: "10⁻⁶ to 10⁻⁹, especially 10⁻⁷ and 10⁻⁸" },
          { parameter: "Temperature Coefficient", value: "4% per °C (requires stable temperature environment)" },
          { parameter: "Durability / Handling", value: "Avoid rough handling (could break the glass element)" },
          { parameter: "Clogging Resistance", value: "Excellent (Will not clog)" },
          { parameter: "Valving Options", value: "Available with or without Teflon®-packed stainless steel shut-off valve" },
          { parameter: "Fitting Types", value: "QF (NW, KF), 1-1/8\" tube, and custom options" }
        ]
      },
      {
        id: "GPPT-MODEL",
        name: "GPPT model",
        title: "GPPT Model Calibrated Leak Standards",
        tagline: "Teflon®-Permeation Helium Calibrated Leak Standard",
        images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_3_1_X12.webp"],
        description: "These GPPT Model Helium Calibrated Leak Standards have Teflon®-permeation type leak elements and are widely used to tune and calibrate helium mass spectrometer leak detectors and leak testing systems. They are part of a family of Calibrators including the GPP, GPC and CLP Models offered by Unique Vacuum Solutions that cover leak rates from 10-12 up to 10-3 atm-cc/sec and larger. The GPPT Accu-Flow™ Calibrated Leaks use a Teflon® membrane as the flow rate control element. The Helium reservoir is under pressure, and the gas permeates through the Teflon® from the pressure side to the exhaust side of the element. This yields a precise, constant flow rate which is then used for calibrating helium leak detectors and other applications. The GPPT Leaks feature an all-welded stainless steel construction for reliability. Most leaks require a shut-off \"isolation\" valve to zero the leak signal during tuning and calibration. UVS offers the GPPT Leaks both with and without a Teflon®-packed stainless steel shut-off valve. The inlet port of the brand of leak detector or vacuum system determines the termination of the leak. All leaks are available with QF (NW, KF), Normal Pipe Thread, VCR® and many other types of fittings. All GPPT Leaks are provided with certifications of the NIST-traceable calibrations performed in A2LA-accredited Calibration Laboratory.",
        highlights: [
          "WILL NOT CLOG - permeation leak element.",
          "VIRTUALLY UNBREAKABLE - Teflon® element minimizes repairs.",
          "LONG TERM STABILITY - Low depletion rate.",
          "WIDE LEAK-RATE CHOICE - 10⁻⁴ to 10⁻⁹ range.",
          "NEVER NEEDS REFILL - Lasts for years.",
          "SIMPLE TO OPERATE - minimal user training.",
          "MEETS ISO REQUIREMENTS - NIST-traceable, A2LA-accredited Calibration Certification."
        ],
        benefitsTitle: "Key Features & Benefits",
        benefits: [
          "Teflon®-permeation type leak elements that will not clog under normal operating conditions.",
          "Teflon® membrane control element yields a precise, constant flow rate.",
          "Virtually unbreakable design that minimizes repairs and maintenance.",
          "Available with QF (NW, KF), Normal Pipe Thread, VCR® and other fittings."
        ],
        columns: ["GPPT Model Specifications"],
        technicalSpecifications: [
          { parameter: "Leak Element Type", value: "Teflon®-permeation type membrane" },
          { parameter: "Helium Leak Rate Range", value: "10⁻¹² to 10⁻³ atm-cc/sec" },
          { parameter: "Primary Leak Rates", value: "10⁻⁴ to 10⁻⁸" },
          { parameter: "Temperature Coefficient", value: "3% per °C" },
          { parameter: "Durability / Handling", value: "Virtually unbreakable (minimizes repairs)" },
          { parameter: "Clogging Resistance", value: "Excellent (Will not clog)" },
          { parameter: "Valving Options", value: "Available with or without Teflon®-packed stainless steel shut-off valve" },
          { parameter: "Fitting Types", value: "QF (NW, KF), Normal Pipe Thread, VCR®, and custom options" }
        ]
      },
      {
        id: "GPC-MODEL",
        name: "GPC model",
        title: "GPC Model Calibrated Leak Standards",
        tagline: "Capillary Helium Calibrated Leak Standard",
        images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_4_1_X19.webp"],
        description: "The GPC Model Helium Calibrated Leak Standards have crimped stainless-steel capillary leak elements and are widely used to tune and calibrate helium mass-spectrometer leak detectors and leak testing systems. They are part of a family of Helium Calibrators offered by Unique Vacuum Solutions including the GPP, GPPT and CLP Models detailed in other brochures. Together they cover a wide range of leak rates from 10-12 to 10-2 atm-cc/sec and larger. The GPC Accu-Flow™ Helium Leaks, due to the capillary leak element, can be manufactured for larger leak rates than permeation-type leaks. They are often used therefore in calibrating detectors in the \"gross leak\" mode. Also, capillary-type leaks have a very low temperature coefficient of 0.2%/ °C, as compared to 3 to 4% for permeation-type leaks. This reduces the possibility of calibration error in applications where ambient temperatures vary widely. As compared to some leaks that are made with glass capillary leak elements, the GPC Leaks with their stainless steel capillaries are unbreakable. In applications where these capillary-type leaks are exposed to dirt, water or oil vapor, clogging of the leak element can be a problem, particularly for leak rates of 10-6 atm-cc/sec and smaller. For this reason, the shut-off valve on the leak should be closed when not in use, especially when venting the vacuum system or detector to which it is attached. While GPC Leaks can be made without shut-off valves, it is not usually recommended. As with all of our Helium Calibrators, the GPC Model Leaks are available with QF (NW, KF), pipe thread and many other types of attachment fittings, and are provided with Certifications of the NIST-traceable Calibrations performed in A2LA Calibration Laboratory.",
        highlights: [
          "LOW TEMPERATURE COEFFICIENT - 0.2% per °C.",
          "WIDE LEAK-RATE CHOICE - 10⁻³ to 10⁻⁶ range.",
          "LONG TERM STABILITY - Low depletion rate.",
          "UNBREAKABLE - stainless steel capillary leak element.",
          "NEVER NEEDS REFILL - Lasts for years.",
          "CLOGGING POSSIBLE - in unclean environments.",
          "MEETS ISO REQUIREMENTS - NIST-traceable, A2LA-accredited Calibration Certification."
        ],
        benefitsTitle: "Key Features & Benefits",
        benefits: [
          "Crimped stainless-steel capillary leak elements suitable for larger leak rates.",
          "Extremely low temperature coefficient of 0.2% per °C minimizes calibration error.",
          "Unbreakable stainless steel capillary construction.",
          "NIST-traceable, A2LA-accredited Calibration Certification included."
        ],
        columns: ["GPC Model Specifications"],
        technicalSpecifications: [
          { parameter: "Leak Element Type", value: "Crimped stainless-steel capillary" },
          { parameter: "Helium Leak Rate Range", value: "10⁻¹² to 10⁻² atm-cc/sec" },
          { parameter: "Primary Leak Rates", value: "10⁻⁶ to 10⁻³ and larger, especially 10⁻⁵ and larger" },
          { parameter: "Temperature Coefficient", value: "0.2% per °C (very low, highly stable)" },
          { parameter: "Durability / Handling", value: "Unbreakable stainless steel capillary" },
          { parameter: "Clogging Resistance", value: "Clogging possible in unclean environments (dirt, water, or oil vapor)" },
          { parameter: "Valving Options", value: "Shut-off valve strongly recommended (close when not in use)" },
          { parameter: "Fitting Types", value: "QF (NW, KF), pipe thread, and custom options" }
        ]
      },
      {
        id: "CLP-MODEL",
        name: "CLP model",
        title: "CLP Model Calibrated Leak Standards",
        tagline: "High-Precision Glass-Permeation Helium Calibrated Leak Standard",
        images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_5_1_X22.webp"],
        description: "The CLP Helium Calibrated Leaks are high-precision Standards for use in critical calibrations of leak detectors and systems, in Ultra-High Vacuum systems, and as Transfer Standards for calibrating other Helium Leaks. They feature all-welded stainless steel construction, a premium all-metal shut-off valve, a glass-permeation leak element, and are bakeable for UHV applications. These models cover leak rates from 10-12 up to 10-3 atm-cc/sec and larger, as detailed in other brochures. The CLP Model is available with leak rates of 10-6 to 10-12 and is the only model made for the very low rates of 10-10 to 10-12 atm-cc/sec. The CLP Accu-Flow™ Calibrated Leaks are based on the principle that helium flows through certain materials at a measurable rate depending on the material thickness, driving pressure and temperature, and use Quartz or Pyrex as the permeation material for the leak element. These leaks are available with or without the leak shut-off valve, but the latter is rare, and with many types of attachment fittings such as QF (NW,KF), Conflat®, VCR® and others. All CLP Leaks are provided with Certifications of the NIST-traceable calibrations performed in A2LA-accredited Calibration Laboratory.",
        highlights: [
          "WILL NOT CLOG - glass-permeation leak element.",
          "LONG TERM STABILITY - Low depletion rate.",
          "WIDE LEAK-RATE CHOICE - 10⁻⁶ to 10⁻¹² range.",
          "BAKEABLE FOR UHV USE - premium all-metal valve.",
          "NEVER NEEDS REFILL - Lasts for years.",
          "SIMPLE TO OPERATE - minimal user training.",
          "MEETS ISO REQUIREMENTS - NIST-traceable, A2LA-accredited Calibration Certification."
        ],
        benefitsTitle: "Key Features & Benefits",
        benefits: [
          "High-precision standards ideal for critical calibrations and transfer standards.",
          "Premium all-metal shut-off valve making it bakeable for UHV applications.",
          "Capable of achieving very low leak rates from 10⁻¹⁰ to 10⁻¹² atm-cc/sec.",
          "All-welded stainless steel construction with Conflat®, VCR®, QF fittings."
        ],
        columns: ["CLP Model Specifications"],
        technicalSpecifications: [
          { parameter: "Leak Element Type", value: "Glass-permeation type (Quartz or Pyrex)" },
          { parameter: "Helium Leak Rate Range", value: "10⁻¹² to 10⁻³ atm-cc/sec" },
          { parameter: "Low-Range Specialization", value: "Available in ultra-low rates of 10⁻¹⁰ to 10⁻¹² atm-cc/sec" },
          { parameter: "Temperature Coefficient", value: "4% per °C" },
          { parameter: "Durability / Handling", value: "Avoid rough handling (could break the glass element)" },
          { parameter: "Clogging Resistance", value: "Excellent (Will not clog)" },
          { parameter: "Valving Options", value: "Premium all-metal shut-off valve (Standard; bakeable for UHV use)" },
          { parameter: "Fitting Types", value: "QF (NW, KF), Conflat®, VCR®, and custom options" }
        ]
      }
    ]
  },
  {
    id: "HLD-ABOUT-HELIUM-LEAK-DETECTORS",
    title: "About helium leak Testing",
    code: "ABOUT HELIUM LEAK TEST METHODS",
    pdf: "./assests/img/products/heliumLeakDetectors/About_helium_leak_test_methods.pdf",
    isEducational: true,
    description: "Learn about the types of vacuum leaks (real vs. virtual), tracer gas leak testing methods (pressure decay, sniffer, vacuum chamber), and the physical properties of Helium.",
    images: ["./assests/img/products/heliumLeakDetectors/aboutHeliumLeak/image_page_1_1_X9.webp"],
    sections: {
      intro: {
        title: "TYPES OF LEAKS: REAL & VIRTUAL",
        description: "Reaching a required vacuum level is often hindered by system leakages. Reducing the chamber’s gas pressure triggers the release of internal molecules or allows external air to enter through structural flaws like cracks, stalling the evacuation process. Identifying and repairing these sources via leak detection techniques is critical for maintaining system integrity.",
        indicatorsTitle: "Identifying Vacuum Leaks",
        indicatorsDesc: "Early detection of leakages is vital to prevent significant system damage. Common indicators of a compromised vacuum chamber include:",
        indicators: [
          "An unexpected rise in internal pressure (loss of vacuum).",
          "Failure to achieve the system's target vacuum levels.",
          "Visible oil discharge, mist, or smoke at the pump exhaust.",
          "Audible whistling or hissing noises.",
          "Unusual scents, such as oil or solvent odors.",
          "Visible structural degradation, including cracks, fractures, or corrosion."
        ],
        categorizationTitle: "Categorization of Leakage",
        categorizationDesc: "Vacuum leaks are categorized as either Real (external atmosphere entering) or Virtual (internal gas traps).",
        realLeaksTitle: "Primary Sources of Real Leaks",
        realLeaks: [
          { name: "Mechanical Failures", desc: "Disconnected hoses or physical holes and cracks." },
          { name: "Sealing Issues", desc: "Degraded gaskets, insufficient seal lubrication, or mismatched fittings." },
          { name: "Environmental Factors", desc: "Material failure due to extreme operating temperatures." }
        ],
        virtualLeaksTitle: "Virtual Leaks",
        virtualLeaksDesc: "Virtual leaks occur when gas is physically trapped within internal voids, such as microscopic weld cracks or the dead space at the bottom of a fastener’s threaded hole. These pockets have extremely low conductance paths to the main chamber, meaning the trapped gas cannot be evacuated quickly. Consequently, as the chamber pressure drops, these hidden reservoirs act as a continuous gas load, slowly bleeding air and contaminants back into the system and artificially inflating the base pressure.",
        image: "./assests/img/products/heliumLeakDetectors/aboutHeliumLeak/image_page_1_1_X9.webp"
      },
      behavior: {
        title: "Vacuum Behavior & System Impacts",
        description: "Distinct leakage sources result in varying pressure profiles during the evacuation and venting cycles, as illustrated in the schematic curve in Figure 2.",
        image: "./assests/img/products/heliumLeakDetectors/aboutHeliumLeak/image_page_2_1_X17.webp",
        consequencesTitle: "Consequences of System Leaks",
        consequencesDesc: "Failure to achieve the target ultimate pressure due to leakages can severely compromise several operational factors:",
        consequences: [
          { name: "Operational Safety", desc: "Risks to both personnel and the integrity of the end products." },
          { name: "System Longevity", desc: "Increased strain that shortens the vacuum system's service life." },
          { name: "Process Efficiency", desc: "Delays and inefficiencies in achieving production goals." },
          { name: "Product Purity", desc: "Increased risk of contamination due to poor vacuum quality." },
          { name: "Compliance", desc: "Failure to meet strict quality and environmental standards." }
        ]
      },
      adaptedMethod: {
        title: "Method Of Testing Adapted",
        description: "The most commonly applied process in testing these types of aluminum auto parts are OVER PRESSURE OR INSIDE OUT METHODE. Here in this method the device under test (DUT) will be placed inside a vacuum chamber and the DUT is pressurized with helium gas. In case of any leakages, the helium gas gets in to the vacuum region because of the differential pressure. The helium leak detector mass spectrometer is connected in line with the vacuum chamber and vacuum pumping line. So the traces of helium that is the helium leak rate is measured."
      },
      technicalAdvantages: {
        title: "Technical Advantages",
        subtitle: "WHY HELIUM IS USED AS THE TRACE GAS?",
        reasons: [
          "Helium is a safe and harmless gas that does not threaten the human body or the environment.",
          "Helium is non-combustible and therefore safe.",
          "Helium molecules are small and light and so can easily escape through the smallest holes or openings.",
          "Helium is only present in tiny quantities in the normal atmosphere and so can easily be identified as different from leakage test helium. Approximately 5ppm.",
          "Helium is a chemically inert gas and so will not cause metal to rust."
        ],
        propertiesTitle: "Helium Properties (He, Atomic #2, Atomic weight: 4.003)",
        propertiesDesc: "It is a colourless, odourless, tasteless, non-toxic, inert monatomic gas that heads the noble gas group in the periodic table.",
        properties: [
          { parameter: "Melting point", value: "-272.2°C (26 atm)" },
          { parameter: "Boiling point", value: "268.9°C" },
          { parameter: "Critical temperature", value: "-268.0°C" },
          { parameter: "Critical pressure", value: "2.25 atm" },
          { parameter: "Density", value: "0.179 g/dm³ (0°C, 1 atm)" },
          { parameter: "Liquid density", value: "0.125 g/cm³ (-269.0°C)" }
        ]
      },
      tracerMethods: {
        title: "TRACER GAS METHODS",
        methods: [
          {
            name: "PRESSURE DECAY METHOD",
            image: "./assests/img/products/heliumLeakDetectors/aboutHeliumLeak/image_page_3_1_X20.webp",
            advantages: [
              "Equipment is comparatively simple",
              "Can measure leakage in entire work piece being tested"
            ],
            disadvantages: [
              "Work piece temperature exerts a large effect",
              "Ambient temperature exerts a large effect",
              "Poor sensitivity",
              "Cannot identify the leakage points"
            ],
            range: "10⁻⁴ [Pa · m³/sec] during actual operation. The lower the leak rate, the more time that is needed."
          },
          {
            name: "WATER BUBBLE LEAK TEST",
            image: "./assests/img/products/heliumLeakDetectors/aboutHeliumLeak/image_page_3_2_X22.webp",
            advantages: [
              "Equipment is simple and so is operation",
              "Leakage can be directly checked",
              "Low running costs"
            ],
            disadvantages: [
              "Requires experience (problems are easily overlooked)",
              "Immersed test item has to be cleaned/dried later on",
              "Requires controlling the water transparency, etc.",
              "Cannot quantitatively monitor the leak rate",
              "Poor work environment",
              "Difficult to automate the process",
              "Man-made errors are possible"
            ],
            range: "10⁻⁴ [Pa · m³/sec] during actual operation. The lower the leak rate, the more time that is needed."
          },
          {
            name: "SNIFFER METHOD",
            image: "./assests/img/products/heliumLeakDetectors/aboutHeliumLeak/image_page_3_3_X24.webp",
            advantages: [
              "Directly finds the leak points",
              "Installation is simple (needs little space)",
              "Inexpensive equipment costs"
            ],
            disadvantages: [
              "Cannot measure leak unless probe directly contacts the leakage point",
              "Operating the probe requires considerable experience",
              "Cannot measure leakage quantity for entire work piece"
            ],
            range: "10⁻⁶ [Pa · m³/sec] (pinpoint) in actual operation."
          },
          {
            name: "VACUUM CHAMBER METHOD",
            image: "./assests/img/products/heliumLeakDetectors/aboutHeliumLeak/image_page_3_4_X25.webp",
            advantages: [
              "Reliably identifies overall leakage",
              "Fast leakage measurements",
              "No man-made errors",
              "Process is easy to automate",
              "Helium needs no purification to remove contaminants"
            ],
            disadvantages: [
              "Equipment is large-scale [We offer separate, simplified models (detection performance subject to certain conditions)]",
              "Cannot identify separate individual leak positions"
            ],
            range: "10⁻⁸ [Pa · m³/sec] (paschal cubic meters per second) or more in actual operation."
          }
        ]
      },
      lowVacuumAdvantages: {
        title: "BIG ADVANTAGES FROM MAKING LEAK TESTS IN A LOW VACUUM",
        advantages: [
          "Time for vacuuming in the chamber stable and not affected much by the environment (humidity, moisture, etc.).",
          "Maintenance of chamber to maintain vacuum is easy.",
          "Recovers quickly from large helium leakage.",
          "Time for vacuuming is short since unit needs no roughing vacuum or main vacuum, space-saving system design allows flexibility during installation.",
          "Allows use of high durability vacuum pumps.",
          "Lowers the initial cost of vacuum pump.",
          "Few or minimal restrictions on system installation site, such as on space or floor weight-bearing strength."
        ],
        extraInfo: [
          "UVS has the original technique that reduces the residual helium in the air of the chamber.",
          "Unit utilizes a helium leak detector capable of making leak tests under a low vacuum."
        ]
      }
    }
  },
  {
    id: "HLD-HELIUM-LEAK-TEST-SYSTEM",
    title: "Helium Leak Test Systems",
    code: "HELIUM LEAK TEST SYSTEMS",
    pdf: "./assests/img/products/heliumLeakTestSystem/HLTstations.pdf",
    isSystemsPage: true,
    description: "Unique Vacuum Solutions has been in the field of Vacuum Technology & helium leak testing equipment building and testing services, vacuum measurement instruments and related calibration services since 2001. This includes, manufacturing and supply of custom built and standard vacuum systems / helium leak testing stations / components to the various R&D Organisations, Institutional & Industrial customers across the country.",
    oneStopPointsTitle: "UVS is a one stop solution for all the needs of:",
    oneStopPoints: [
      "Helium leak detection services (mass spectrometer helium leak testing)",
      "Helium leak detectors",
      "Helium calibrated leaks",
      "Helium bombing stations",
      "Helium leak test stations for various applications like aluminum castings, battery industry automobile components, etc.",
      "High vacuum products such as vacuum components, vacuum valves, flex metal bellows & hoses, spares",
      "Vacuum measurement instruments like pirani gauges, penning gauges, Digital Thickness Monitors, and so on."
    ],
    aboutServicesTitle: "More about our helium leak test services",
    aboutServicesDesc: "Helium Leak Testing and Leak Detection has been the cornerstone of our business since we began in the year 2001. With UVS equipment and staff, we are capable of performing on-site field testing as well as in-house testing. We have the necessary equipment to perform all leak testing services in industry environments as well as laboratory conditions. UVS can perform almost any helium leak test method on a customer’s site.<br><br>UVS competent engineering staff has the necessary knowledge and experience to develop testing procedures specific to customer requirements. This allows UVS the ability to accommodate all of our customers’ needs in regards to leak testing.<br><br>We are equipped with state of the art, highly reliable helium leak detector which is compatible for all the types and methods of helium leak testing. The helium leak detector usable range is from 10⁻¹¹ std CC/sec to 10⁻³ std CC/sec depending on the type of test and the test object.",
    specializationsTitle: "UVS has specialized in conducting the helium leak testing in:",
    specializations: [
      "Evacuation or vacuum method - tracer gas probe test",
      "Evacuation method - hood test",
      "Over pressure - hood test",
      "Over pressure method - bombing test",
      "Over pressure method - sniffer test"
    ],
    missionTitle: "Our Mission Statement",
    missionDesc: "Unique Vacuum Solutions is dedicated to provide Quality leak detection services and helium leak test stations. We shall support our customers with calibration services for helium leaks & vacuum measurement gauges, and also support customer with service and repair of high vacuum product.",
    stationsTitle: "HELIUM LEAK TESTING STATIONS BY UVS FOR VARIOUS APPLICATIONS",
    stations: [
      {
        num: 1,
        title: "For aluminium castings in vacuum chamber method",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_2_4_X22.webp",
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_2_1_X18.webp",
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_2_2_X20.webp",
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_2_3_X21.webp"
        ],
        desc: "Custom built industrial vacuum chamber system designed specifically for high-accuracy helium leak detection in aluminum castings, ensuring structural and pressure integrity."
      },
      {
        num: 2,
        title: "For Long aluminum fabricated tubes with vacuum method",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_3_1_X26.webp"
        ],
        desc: "Specialized mobile vacuum pumping systems built for leak testing long fabricated aluminum tubes and piping networks."
      },
      {
        num: 3,
        title: "For VRLA batteries in vacuum chamber method",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_4_2_X30.webp",
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_4_1_X29.webp"
        ],
        desc: "Dedicated test station utilizing vacuum chamber methods to ensure perfect hermetic sealing for VRLA battery enclosures."
      },
      {
        num: 4,
        title: "For sealed components in Bombing method",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_5_1_X36.webp",
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_5_2_X37.webp",
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_5_3_X38.webp"
        ],
        desc: "Helium bombing systems equipped with high-pressure chambers to check hermetic sealing of completely sealed electronic and mechanical components."
      },
      {
        num: 5,
        title: "Helium leak detector carts for multipurpose applications",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_5_4_X39.webp",
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_5_5_X40.webp"
        ],
        desc: "Heavy duty mobile carts designed to mount leak detectors, pumps, gauges, and gas cylinders for flexible, multipurpose industrial use."
      },
      {
        num: 6,
        title: "For Control Valves",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_6_1_X44.webp"
        ],
        desc: "Precision test bench designed to verify seal integrity and seat leakage rates in industrial control valves."
      },
      {
        num: 7,
        title: "For Sealed compressors leak testing in sniffer method",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_6_2_X45.webp"
        ],
        desc: "Sniffer-type test station built to check leakages at welds and connections of fully sealed refrigeration and industrial compressors."
      },
      {
        num: 8,
        title: "For Li-Ion cells leak testing in vacuum chamber method",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_6_3_X46.webp"
        ],
        desc: "Vacuum chamber leak detection system specifically optimized to check leak rates in Lithium-Ion battery cells to prevent electrolyte leakage."
      },
      {
        num: 9,
        title: "For Rupture Disc helium leak testing",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_7_1_X49.webp"
        ],
        desc: "Testing station with dedicated fixtures to evaluate rupture disc response and check leakage before deployment in safety systems."
      },
      {
        num: 10,
        title: "Pressure decay test and gas filling station for compressors and gas lines",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_7_2_X50.webp"
        ],
        desc: "Combined pressure decay leak testing and precise tracer gas filling station designed for manufacturing lines of compressors and piping systems."
      },
      {
        num: 11,
        title: "Vacuum decay test system",
        images: [
          "./assests/img/products/heliumLeakTestSystem/extracted/image_page_8_1_X53.webp"
        ],
        desc: "High-sensitivity vacuum decay system for component testing, measuring pressure rise over time to isolate micro-leaks."
      }
    ]
  },
  {
    id: "VACUUM-COMPONENTS",
    title: "Vacuum Components",
    code: "VACUUM COMPONENTS",
    pdf: "./assests/img/products/VACUUM_COMPONENTS&supplies/VACUUM_COMPONENTS.docxdownload.pdf",
    isComponentsPage: true,
    description: "The ISO KF range of vacuum flanges and fittings are made from high quality stainless steel grades like SS304, SS304L, SS316, SS316L and so on. The general purpose high vacuum applications are from SS304 material and the same are available ex – stock for most of the part numbers.<br><br>This method of KF assembly utilize a metal aluminum clamp for holding two similar flanges along with the centre ring and an rubber O ring, the wing nut clamp is used to dismantle the assembly as and when required, just by rotating the wing nut without using any tool. The tight vacuum seal is possible by applying the pressure on the 15° tapered surface of the flange.<br><br>The mating parts of the two flanges compresses the O ring (held in between the two flanges by a metal centre ring) making the assembly possible to work at vacuum levels up to 10⁻⁷ mbar and baked up to 200°C.",
    categories: [
      {
        id: "flanges-fittings",
        name: "Flanges & Fittings",
        components: [
          {
            title: "NW BLANK FLANGES",
            desc: "Blank flanges used to seal unused ports in vacuum chambers or pipe lines, available in Stainless Steel and Aluminum.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_4_1_X26.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_4_2_X27.webp",
            headers: ["PART NUMBER (SS)", "PNEUROP", "A", "D1", "D2", "PART NUMBER (AL)"],
            rows: [
              ["SS-BLK-KF10", "NW10", "6 (0.24)", "30 (1.18)", "12 (0.47)", "AL-BLK-KF10"],
              ["SS-BLK-KF16", "NW16", "6 (0.24)", "30 (1.18)", "17.2 (0.68)", "AL-BLK -KF16"],
              ["SS-BLK-KF25", "NW25", "6 (0.24)", "40 (1.57)", "26.2 (1.03)", "AL-BLK -KF25"],
              ["SS-BLK-KF40", "NW40", "6 (0.24)", "55 (2.17)", "41.2 (1.62)", "AL-BLK -KF40"],
              ["SS-BLK-KF50", "NW50", "6 (0.24)", "75 (2.95)", "52.2 (2.06)", "AL-BLK -KF50"]
            ]
          },
          {
            title: "NW SOCKET WELD FLANGE – STAINLESS STEEL",
            desc: "Socket weld flanges for joining stainless steel vacuum pipe lines, allowing easy welding installation.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_4_3_X28.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_4_4_X29.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "T"],
            rows: [
              ["SS-SWF-KF-16A", "NW16", "12.7 (0.5)", "30 (1.18)", "15.5 (0.61)", "1.25 (0.05)"],
              ["SS-SWF-KF-16", "NW16", "12.7 (0.5)", "30 (1.18)", "22.1 (0.87)", "1.40 (0.06)"],
              ["SS-SWF-KF-25", "NW25", "12.7 (0.5)", "40 (1.57)", "28.6 (1.13)", "1.35 (0.05)"],
              ["SS-SWF-KF-40", "NW40", "12.7 (0.5)", "55 (2.17)", "44.5 (1.75)", "2.95 (0.12)"],
              ["SS-SWF-KF-50", "NW50", "12.7 (0.5)", "75 (2.95)", "57.2 (2.25)", "2.95 (0.12)"]
            ]
          },
          {
            title: "NW TUBULATION SHORT WELD FLANGE – STAINLESS STEEL",
            desc: "Short tubulation weld flanges for quick-coupling vacuum lines via welding processes.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_5_1_X32.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_5_2_X33.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "T"],
            rows: [
              ["SS-TSWF-KF10", "NW10", "30.0 (1.18)", "30.0 (1.18)", "14.0 (0.55)", "2.0 (0.08)"],
              ["SS-TSWF-KF16", "NW16", "30.0 (1.18)", "30.0 (1.18)", "20.0 (0.79)", "2.0 (0.08)"],
              ["SS-TSWF-KF25", "NW25", "30.0 (1.18)", "40 (1.57)", "28.0 (1.10)", "2.0 (0.08)"],
              ["SS-TSWF-KF40", "NW40", "30.0 (1.18)", "55 (2.17)", "44.5 (1.75)", "1.6 (0.06)"],
              ["SS-TSWF-KF50", "NW50", "30.0 (1.18)", "75 (2.95)", "57.0 (2.24)", "3.0 (0.12)"],
              ["SS-TSWF-KF10THN", "NW10", "12.7 (0.50)", "30.0 (1.18)", "14.0 (0.55)", "1.7 (0.07)"],
              ["SS-TSWF-KF16THN", "NW16", "12.7 (0.50)", "30.0 (1.18)", "19.1 (0.75)", "1.7 (0.07)"],
              ["SS-TSWF-KF25THN", "NW25", "12.7 (0.50)", "40 (1.57)", "25.4 (1.00)", "1.7 (0.07)"],
              ["SS-TSWF-KF40THN", "NW40", "19.0 (0.75)", "55 (2.17)", "38.1 (1.50)", "1.7 (0.07)"],
              ["SS-TSWF-KF50THN", "NW50", "19.0 (0.75)", "75 (2.95)", "50.8 (2.00)", "1.7 (0.07)"]
            ]
          },
          {
            title: "NW TUBULATION LONG WELD FLANGE – STAINLESS STEEL",
            desc: "Long tubulation weld flanges for connecting vacuum hardware over extended lengths.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_5_3_X34.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_5_4_X35.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "T"],
            rows: [
              ["SS-TLWF-KF10", "NW10", "70 (2.76)", "30.0 (1.18)", "14.0 (0.55)", "2.0 (0.08)"],
              ["SS-TLWF-KF16", "NW16", "70 (2.76)", "30.0 (1.18)", "20.0 (0.79)", "2.0 (0.08)"],
              ["SS-TLWF-KF25", "NW25", "70 (2.76)", "40 (1.57)", "28.0 (1.10)", "2.0 (0.08)"],
              ["SS-TLWF-KF40", "NW40", "70 (2.76)", "55 (2.17)", "44.5 (1.75)", "2.0 (0.08)"],
              ["SS-TLWF-KF50", "NW50", "70 (2.76)", "75 (2.95)", "57.0 (2.24)", "3.0 (0.12)"],
              ["SS-TLWF-KF10THN", "NW10", "40 (1.57)", "30.0 (1.18)", "14.0 (0.55)", "1.7 (0.07)"],
              ["SS-TLWF-KF16THN", "NW16", "40 (1.57)", "30.0 (1.18)", "19.1 (0.75)", "1.7 (0.07)"],
              ["SS-TLWF-KF25THN", "NW25", "40 (1.57)", "40 (1.57)", "25.4 (1.00)", "1.7 (0.07)"],
              ["SS-TLWF-KF40THN", "NW40", "40 (1.57)", "55 (2.17)", "38.1 (1.50)", "1.7 (0.07)"],
              ["SS-TLWF-KF50THN", "NW50", "40 (1.57)", "75 (2.95)", "50.8 (2.00)", "1.7 (0.07)"]
            ]
          }
        ]
      },
      {
        id: "clamps-seals",
        name: "Clamps & Seals",
        components: [
          {
            title: "NW QUICK CLAMP – ALUMINIUM",
            desc: "Aluminum quick clamp with wing nut mechanism for tool-free assembly and dismantling of KF flanges.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_1_1_X10.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_1_2_X12.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "B"],
            rows: [
              ["AL-CL-KF1016", "NW16", "40 (1.57)", "64 (2.52)"],
              ["AL-CL-KF-25", "NW25", "50 (1.97)", "74 (2.91)"],
              ["AL-CL-KF-40", "NW40", "65 (2.56)", "89 (3.50)"],
              ["AL-CL-KF-50", "NW50", "87 (3.43)", "109 (4.29)"]
            ]
          },
          {
            title: "NW CENTERING RINGS WITH O-RINGS",
            desc: "Centering rings with integrated Viton or Nitrile O-rings, providing high vacuum seal integrity.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_1_3_X13.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_1_4_X14.webp",
            headers: ["PART NUMBER (SS + VITON)", "PNEUROP", "A", "B", "D1", "D2"],
            rows: [
              ["SS-CR-VIT-KF10", "NW10", "8 (0.31)", "3.9 (0.15)", "10 (0.39)", "12 (0.47)"],
              ["SS-CR-VIT-KF16", "NW16", "8 (0.31)", "3.9 (0.15)", "16 (0.63)", "17 (0.67)"],
              ["SS-CR-VIT-KF25", "NW25", "8 (0.31)", "3.9 (0.15)", "25 (0.98)", "26 (1.02)"],
              ["SS-CR-VIT-KF40", "NW40", "8 (0.31)", "3.9 (0.15)", "40 (1.57)", "41 (1.61)"],
              ["SS-CR-VIT-KF50", "NW50", "8 (0.31)", "3.9 (0.15)", "50 (1.97)", "52 (2.05)"]
            ]
          },
          {
            title: "NW ADAPTER CENTERING RING",
            desc: "Adapter centering rings for transitioning between different KF flange sizes.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_2_1_X18.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_2_2_X19.webp",
            headers: ["PART NUMBER (SS + VITON)", "PNEUROP", "A", "B", "D1", "D2"],
            rows: [
              ["SS-ACR-VIT-KF1016", "NW10/16", "8 (0.31)", "3.9 (0.15)", "17 (0.67)", "12 (0.47)"],
              ["SS-ACR-VIT-KF2025", "NW20/25", "8 (0.31)", "3.9 (0.15)", "26 (1.02)", "22 (0.87)"],
              ["SS-ACR-VIT-KF3240", "NW32/40", "8 (0.31)", "3.9 (0.15)", "41 (1.61)", "34 (1.34)"]
            ]
          },
          {
            title: "NW O-RING - VITON / NITRILE",
            desc: "Replacement elastic seals for KF quick-release couplings, operating in pressure ranges 10⁻⁷ mbar to 1 bar absolute.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_3_1_X22.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_3_2_X23.webp",
            headers: ["PART NUMBER (VITON)", "PNEUROP", "A", "D1", "PART NUMBER (NITRILE)"],
            rows: [
              ["OR-VIT-KF-10", "NW10", "5 (0.20)", "15 (0.59)", "OR-NIT-KF-10"],
              ["OR-VIT-KF-16", "NW16", "5 (0.20)", "18 (0.71)", "OR-NIT-KF-16"],
              ["OR-VIT-KF-25", "NW25", "5 (0.20)", "28 (1.10)", "OR-NIT-KF-25"],
              ["OR-VIT-KF-40", "NW40", "5 (0.20)", "42 (1.65)", "OR-NIT-KF-40"],
              ["OR-VIT-KF-50", "NW50", "5 (0.20)", "55 (2.17)", "OR-NIT-KF-50"]
            ]
          }
        ]
      },
      {
        id: "connectors-adaptors",
        name: "Connectors & Adaptors",
        components: [
          {
            title: "NW HOSE CONNECTORS - PVC / STAINLESS STEEL",
            desc: "Rigid connectors to link flexible plastic or metallic hoses to standard NW flanges.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_6_3_X40.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_6_4_X41.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1 NOMINAL BORE"],
            rows: [
              ["PVC-HC-KF10-250", "NW10", "250 (9.84)", "30 (1.18)"],
              ["PVC-HC-KF10-500", "NW10", "500 (19.69)", "30 (1.18)"],
              ["PVC-HC-KF10-750", "NW10", "750 (29.53)", "30 (1.18)"],
              ["PVC-HC-KF10-1000", "NW10", "1000 (39.37)", "30 (1.18)"]
            ]
          },
          {
            title: "NW HOSE NOZZLE CONNECTOR – STAINLESS STEEL",
            desc: "Barbed hose nozzle connectors for coupling soft vinyl tubing or rubber hoses.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_7_1_X44.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_7_2_X45.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "T"],
            rows: [
              ["SS-HNC-KF10", "NW10", "40 (1.57)", "30.0 (1.18)", "7 (0.28)", "12.0 (0.47)"],
              ["SS-HNC-KF16", "NW16", "40 (1.57)", "30.0 (1.18)", "7 (0.28)", "12.0 (0.47)"],
              ["SS-HNC-KF25", "NW25", "40 (1.57)", "40 (1.57)", "7 (0.28)", "12.0 (0.47)"],
              ["SS-HNC-KF40", "NW40", "40 (1.57)", "55 (2.17)", "7 (0.28)", "12.0 (0.47)"],
              ["SS-HNC-KF50", "NW50", "40 (1.57)", "75 (2.95)", "7 (0.28)", "12.0 (0.47)"]
            ]
          },
          {
            title: "NW STRAIGHT CONNECTOR - STAINLESS STEEL",
            desc: "Straight spool pieces used to bridge spacing gaps between vacuum components.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_7_3_X46.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_7_4_X47.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "T"],
            rows: [
              ["SS-SC-KF10", "NW10", "80 (3.15)", "30.0 (1.18)", "20 (0.79)", "2 (0.08)"],
              ["SS-SC-KF16", "NW16", "80 (3.15)", "30.0 (1.18)", "20 (0.79)", "2 (0.08)"],
              ["SS-SC-KF25", "NW25", "100 (3.94)", "40 (1.57)", "28 (1.10)", "2 (0.08)"],
              ["SS-SC-KF40", "NW40", "130 (5.12)", "55 (2.17)", "44.5 (1.75)", "1.6 (0.06)"],
              ["SS-SC-KF50", "NW50", "140 (5.51)", "75 (2.95)", "57.0 (2.24)", "3.0 (0.12)"]
            ]
          },
          {
            title: "NW REDUCER ADAPTOR - STAINLESS STEEL",
            desc: "Reducer couplers to connect smaller KF flange lines to larger ones.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_8_1_X51.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_8_2_X52.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "D3", "T"],
            rows: [
              ["SS-RD-KF2516", "NW25/16", "28 (1.1)", "40 (1.57)", "30 (1.18)", "20.0 (0.79)", "2 (0.08)"],
              ["SS-RD-KF4016", "NW40/16", "28 (1.1)", "55 (2.17)", "30 (1.18)", "20.0 (0.79)", "2 (0.08)"],
              ["SS-RD-KF5016", "NW50/16", "28 (1.1)", "75 (2.95)", "30 (1.18)", "20.0 (0.79)", "2 (0.08)"],
              ["SS-RD-KF4025", "NW40/25", "28 (1.1)", "55 (2.17)", "40 (1.57)", "28 (1.1)", "2 (0.08)"],
              ["SS-RD-KF5025", "NW50/25", "28 (1.1)", "75 (2.95)", "40 (1.57)", "28 (1.1)", "2 (0.08)"],
              ["SS-RD-KF5040", "NW50/40", "28 (1.1)", "75 (2.95)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"]
            ]
          },
          {
            title: "NW TO CF REDUCER ADAPTOR",
            desc: "Adaptor pieces designed to link high-vacuum KF hardware with ultra-high vacuum CF (ConFlat) hardware.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_8_3_X53.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_8_4_X54.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "D3", "T"],
            rows: [
              ["SS-RD-CF16KF16", "CF16/NW16", "36 (1.42)", "34 (1.34)", "30 (1.18)", "20.0 (0.79)", "2 (0.08)"],
              ["SS-RD-CF35KF16", "CF35/NW16", "36 (1.42)", "70 (2.76)", "30 (1.18)", "20.0 (0.79)", "2 (0.08)"]
            ]
          },
          {
            title: "ISO TO NW ADAPTOR - STAINLESS STEEL",
            desc: "Transitions between larger bolted ISO flanges and smaller quick-release KF flanges.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_9_1_X57.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_9_2_X58.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "D3", "T"],
            rows: [
              ["SS-RD-ISO63KF25", "ISO63/NW25", "50 (1.97)", "95 (3.74)", "40 (1.57)", "28.0 (1.10)", "2 (0.08)"],
              ["SS-RD-ISO63KF40", "ISO63/NW40", "50 (1.97)", "95 (3.74)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"],
              ["SS-RD-ISO63KF50", "ISO63/NW50", "50 (1.97)", "95 (3.74)", "75 (2.95)", "57.0 (2.24)", "3 (0.12)"]
            ]
          },
          {
            title: "ASA TO NW ADAPTOR - STAINLESS STEEL",
            desc: "Adapters to connect standard ASA (ANSI) flanged components to quick-release NW vacuum lines.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_10_1_X61.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_10_2_X62.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "D2", "D3", "T"],
            rows: [
              ["SS-RD-ASA15KF40", "ASA1.5\"/NW40", "46 (1.81)", "127 (5.00)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"],
              ["SS-RD-ASA2KF40", "ASA2.0\"/NW40", "46 (1.81)", "152 (5.98)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"],
              ["SS-RD-ASA3KF40", "ASA3.0\"/NW40", "46 (1.81)", "191 (7.52)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"]
            ]
          }
        ]
      },
      {
        id: "elbows-tees-crosses",
        name: "Elbows, Tees & Crosses",
        components: [
          {
            title: "NW 90 DEGREE RADIUS ELBOW - STAINLESS STEEL",
            desc: "90-degree elbows for clean directional turns in vacuum lines.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_10_3_X63.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_10_4_X64.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "R"],
            rows: [
              ["SS-ELR-KF16", "NW16", "40 (1.57)", "20.0 (0.79)", "27 (1.06)"],
              ["SS-ELR-KF25", "NW25", "50 (1.97)", "28.0 (1.10)", "37 (1.46)"],
              ["SS-ELR-KF40", "NW40", "65 (2.56)", "44.5 (1.75)", "60 (2.36)"],
              ["SS-ELR-KF50", "NW50", "70 (2.76)", "57.0 (2.24)", "65 (2.56)"]
            ]
          },
          {
            title: "NW LONG RADIUS ELBOW – STAINLESS STEEL",
            desc: "Long sweep 90-degree elbows to minimize conductance restrictions in pump-down pathways.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_11_1_X67.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_11_2_X68.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1", "R", "T"],
            rows: [
              ["SS-LREL-KF40", "NW40", "130 (5.12)", "44.5 (1.75)", "60 (2.36)", "2 (0.08)"],
              ["SS-LREL-KF50", "NW50", "140 (5.51)", "57.0 (2.24)", "126 (4.96)", "3 (0.12)"]
            ]
          },
          {
            title: "NW 45 DEGREE RADIUS ELBOW - STAINLESS STEEL",
            desc: "45-degree elbows for directional piping offsets in vacuum assemblies.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_11_3_X69.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_11_4_X70.webp",
            headers: ["PART NUMBER", "PNEUROP", "R"],
            rows: [
              ["SS-EL45-KF16", "NW16", "40 (1.57)"],
              ["SS-EL45-KF25", "NW25", "45 (1.77)"],
              ["SS-EL45-KF40", "NW40", "51 (2.01)"],
              ["SS-EL45-KF50", "NW50", "75 (2.95)"]
            ]
          },
          {
            title: "NW TEE - STAINLESS STEEL",
            desc: "Symmetrical three-way equal tees to split or branch vacuum flow lines.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_12_1_X73.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_12_2_X74.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "B", "D1", "D2", "T"],
            rows: [
              ["SS-TEE-KF16", "NW16", "40 (1.57)", "40 (1.57)", "30 (1.18)", "20.0 (0.79)", "2 (0.08)"],
              ["SS-TEE-KF25", "NW25", "50 (1.97)", "50 (1.97)", "40 (1.57)", "28.0 (1.1)", "2 (0.08)"],
              ["SS-TEE-KF40", "NW40", "65 (2.56)", "65 (2.56)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"],
              ["SS-TEE-KF50", "NW50", "70 (2.76)", "70 (2.76)", "75 (2.95)", "57.0 (2.24)", "3 (0.12)"]
            ]
          },
          {
            title: "NW UNEQUAL TEE - STAINLESS STEEL",
            desc: "Three-way branching tees with smaller branching port configurations.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_12_3_X75.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_12_4_X76.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "B", "D1", "D2", "T"],
            rows: [
              ["SS-UTEE-KF2516", "NW25/16", "50 (1.97)", "40 (1.57)", "40 (1.57)", "28.0 (1.10)", "2 (0.08)"],
              ["SS-UTEE-KF4016", "NW40/16", "65 (2.56)", "40 (1.57)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"],
              ["SS-UTEE-KF4025", "NW40/25", "65 (2.56)", "50 (1.97)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"]
            ]
          },
          {
            title: "NW 4-WAY CROSS - STAINLESS STEEL",
            desc: "Symmetrical cross couplers providing four ports for advanced manifolds.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_13_1_X79.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_13_2_X80.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "B", "D1", "D2", "T"],
            rows: [
              ["SS-4WCR-KF16", "NW16", "40 (1.57)", "40 (1.57)", "30 (1.18)", "20.0 (0.79)", "2 (0.08)"],
              ["SS-4WCR-KF25", "NW25", "50 (1.97)", "50 (1.97)", "40 (1.57)", "28.0 (1.10)", "2 (0.08)"],
              ["SS-4WCR-KF40", "NW40", "65 (2.56)", "65 (2.56)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"],
              ["SS-4WCR-KF50", "NW50", "70 (2.76)", "70 (2.76)", "75 (2.95)", "57.0 (2.24)", "3 (0.12)"]
            ]
          },
          {
            title: "NW 5-WAY CROSS - STAINLESS STEEL",
            desc: "Star-shaped five-way couplers for complex vacuum distribution manifolds.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_13_3_X81.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_13_4_X82.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "B", "D1", "D2", "T"],
            rows: [
              ["SS-5WCR-KF16", "NW16", "40 (1.57)", "40 (1.57)", "30 (1.18)", "20.0 (0.79)", "2 (0.08)"],
              ["SS-5WCR-KF25", "NW25", "50 (1.97)", "50 (1.97)", "40 (1.57)", "28.0 (1.10)", "2 (0.08)"],
              ["SS-5WCR-KF40", "NW40", "65 (2.56)", "65 (2.56)", "55 (2.17)", "44.5 (1.75)", "2 (0.08)"],
              ["SS-5WCR-KF50", "NW50", "70 (2.76)", "70 (2.76)", "75 (2.95)", "57.0 (2.24)", "3 (0.12)"]
            ]
          }
        ]
      },
      {
        id: "hoses-bellows",
        name: "Hoses & Bellows",
        components: [
          {
            title: "NW WIRE REINFORCED HOSE – PVC",
            desc: "Flexible PVC tubing reinforced with steel spiral wire, operating down to high-vacuum levels.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_6_1_X38.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_6_2_X39.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "D1 NOMINAL BORE"],
            rows: [
              ["PVC10", "NW10", "1000 (39.37)", "14.0 (0.55)"],
              ["PVC16", "NW16", "1000 (39.37)", "19.05 (0.75)"],
              ["PVC25", "NW25", "1000 (39.37)", "25.40 (1.00)"],
              ["PVC40", "PVC50", "1000 (39.37)", "38.10 (1.50)"],
              ["PVC50", "NW50", "1000 (39.37)", "50.80 (2.00)"]
            ]
          },
          {
            title: "NW FLEXIBLE BELLOWS – STAINLESS STEEL",
            desc: "Flexible bellows in SS304/SS316, permitting high vacuum connections and compensating for thermal expansion.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_14_1_X85.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_14_2_X86.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "B", "D1", "D2", "T1", "T2"],
            rows: [
              ["SS-FXB-KF16", "NW16", "121 (4.76)", "88.0 (3.46)", "30 (1.18)", "20.0 (0.79)", "2.0 (0.08)", "0.10 (0.01)"],
              ["SS-FXB-KF25", "NW25", "121 (4.76)", "85.7 (3.37)", "40 (1.57)", "27.0 (1.06)", "1.5 (0.06)", "0.15 (0.01)"],
              ["SS-FXB-KF40", "NW40", "121 (4.76)", "83.0 (3.27)", "55 (2.17)", "44.5 (1.75)", "1.6 (0.06)", "0.20 (0.01)"],
              ["SS-FXB-KF50", "NW50", "110 (4.33)", "76.0 (2.99)", "75 (2.95)", "57.0 (2.24)", "3.0 (0.12)", "0.25 (0.01)"]
            ]
          },
          {
            title: "NW FLEXIBLE HOSE – STAINLESS STEEL",
            desc: "Braided or unbraided flexible metal hoses for custom layout alignment under high vacuum.",
            drawing: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_14_3_X87.webp",
            photo: "./assests/img/products/VACUUM_COMPONENTS&supplies/extracted/image_page_14_4_X88.webp",
            headers: ["PART NUMBER", "PNEUROP", "A", "B", "D1", "D2", "T1", "T2"],
            rows: [
              ["SS-LFXB-KF1625", "NW16", "250 (9.84)", "220 (8.66)", "30 (1.18)", "20.0 (0.79)", "2.0 (0.08)", "0.23 (0.01)"],
              ["SS-LFXB-KF1650", "NW16", "500 (19.69)", "470 (18.5)", "30 (1.18)", "20.0 (0.79)", "2.0 (0.08)", "0.23 (0.01)"],
              ["SS-LFXB-KF1675", "NW16", "750 (29.53)", "720 (28.35)", "30 (1.18)", "20.0 (0.79)", "2.0 (0.08)", "0.23 (0.01)"],
              ["SS-LFXB-KF16100", "NW16", "1000 (39.37)", "970 (38.19)", "30 (1.18)", "20.0 (0.79)", "2.0 (0.08)", "0.23 (0.01)"]
            ]
          }
        ]
      }
    ]
  }
];

window.heliumLeakDetectors = heliumLeakDetectors;
