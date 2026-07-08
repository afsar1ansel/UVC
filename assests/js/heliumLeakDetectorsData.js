// Data for Helium Leak Detectors
const heliumLeakDetectors = [
  {
    id: "HLD-ASM-310",
    seriesId: "PFEIFFER-ADIXEN-ASM",
    title: "PFEIFFER ADIXEN ASM 310",
    description: "The compact, lightweight and portable helium leak detector solution. Ideal for maintenance applications, it offers high performance in a small footprint.",
    code: "ASM 310",
    images: ["./assests/img/products/heliumLeakDetectors/pfeiffer/ASM310.jpeg"],
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
    images: ["./assests/img/products/heliumLeakDetectors/pfeiffer/ASM340.jpeg"],
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
    images: ["./assests/img/products/heliumLeakDetectors/pfeiffer/ASM390_393.jpeg"],
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
    images: ["./assests/img/products/heliumLeakDetectors/pfeiffer/ASM306s.jpeg"],
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
      "./assests/img/products/heliumLeakDetectors/leybold/phoenix_quadro.png",
      "./assests/img/products/heliumLeakDetectors/leybold/phoenix_quadro_dry_plus.png",
      "./assests/img/products/heliumLeakDetectors/leybold/phoenix_vario.png"
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
    images: ["./assests/img/products/heliumLeakDetectors/leybold/phoenix_mobilis.png"],
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
    images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_2_1_X12.jpg"],
    features: ["NIST traceable", "High stability", "Various leak rates available"],
    pdf: "./assests/img/products/heliumLeakDetectors/calibrated_leaksDownload.pdf",
    models: [
      {
        id: "GPP-MODEL",
        name: "GPP model",
        title: "GPP Model Calibrated Leak Standards",
        tagline: "Glass-Permeation Helium Calibrated Leak Standard",
        images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_2_1_X12.jpg"],
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
        images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_3_1_X12.jpg"],
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
        images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_4_1_X19.jpg"],
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
        images: ["./assests/img/products/heliumLeakDetectors/calibratedLeaks/image_page_5_1_X22.jpg"],
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
    description: "Reaching a required vacuum level is often hindered by system leakages. Reducing the chamber’s gas pressure triggers the release of internal molecules or allows external air to enter through structural flaws like cracks, stalling the evacuation process. Identifying and repairing these sources via leak detection techniques is critical for maintaining system integrity.",
    code: "ABOUT HELIUM LEAK TEST METHODS",
    images: ["./assests/img/products/heliumLeakDetectors/aboutHeliumLeak.png"],
    features: ["System integrity check", "Leak source identification", "Evacuation optimization"],
    pdf: "./assests/img/products/heliumLeakDetectors/About helium leak test methods.pdf",
    viewPdf: "./assests/img/products/heliumLeakDetectors/About helium leak test methods(page).pdf"
  },
  {
    id: "HLD-HELIUM-LEAK-TEST-SYSTEM",
    title: "Helium Leak Test Systems",
    description: "High-performance Helium Leak Test Systems designed for fast, automated, and non-destructive industrial leak testing of various products and components.",
    code: "HELIUM LEAK TEST SYSTEMS",
    images: ["./assests/img/products/heliumLeakTestSystem/heliumLeakTestSystem.png"],
    features: ["Automated industrial test systems", "High-accuracy mass spectrometer leak testing", "Optimized cycle times"],
    pdf: "./assests/img/products/heliumLeakTestSystem/HLTstations.pdf",
    viewPdf: "./assests/img/products/heliumLeakTestSystem/HLTstations.pdf"
  },
  {
    id: "VACUUM-COMPONENTS",
    title: "Vacuum Components",
    description: "High-quality vacuum components designed for vacuum systems, ensuring optimal sealing, connection, and stability.",
    code: "VACUUM COMPONENTS",
    images: [],
    features: [],
    pdf: "./assests/img/products/VACUUM COMPONENTS&supplies/VACUUM COMPONENTS.docxdownload.pdf",
    viewPdf: "./assests/img/products/VACUUM COMPONENTS&supplies/VACUUM COMPONENTS.docx.pdf"
  }
];

window.heliumLeakDetectors = heliumLeakDetectors;
